"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as d3 from 'd3';

export default function Hero() {
  const graphRef = useRef(null);

  useEffect(() => {
    if (!graphRef.current) return;

    // Clear any existing SVG content
    d3.select(graphRef.current).selectAll("*").remove();

    // Define the graph data
    const nodes = [
      { id: "projects", label: "Projects", color: "#3b82f6", radius: 40, x: 250, y: 150 },
      { id: "research", label: "Research", color: "#a855f7", radius: 32, x: 125, y: 75 },
      { id: "resources", label: "Resources", color: "#22c55e", radius: 32, x: 375, y: 225 },
      { id: "articles", label: "Articles", color: "#6366f1", radius: 24, x: 300, y: 45 },
      { id: "notes", label: "Notes", color: "#06b6d4", radius: 20, x: 75, y: 240 },
      { id: "tasks", label: "Tasks", color: "#f43f5e", radius: 20, x: 450, y: 180 }
    ];

    const links = [
      { source: "research", target: "projects", color: "rgba(168, 85, 247, 0.6)" },
      { source: "resources", target: "projects", color: "rgba(34, 197, 94, 0.6)" },
      { source: "articles", target: "research", color: "rgba(99, 102, 241, 0.6)" },
      { source: "notes", target: "research", color: "rgba(6, 182, 212, 0.6)" },
      { source: "tasks", target: "resources", color: "rgba(244, 63, 94, 0.6)" }
    ];

    // Set up the SVG container and dimensions
    const width = graphRef.current.clientWidth;
    const height = graphRef.current.clientHeight;

    const svg = d3.select(graphRef.current)
      .append("svg")
      .attr("width", "150%")
      .attr("height", "150%")
      .attr("viewBox", `0 0 ${width} ${height}`);

    // Create a container for all graph elements
    const g = svg.append("g");

    // Add a boundary rectangle (invisible)
    g.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("stroke", "rgba(255,255,255,0.1)")
      .attr("rx", 8)
      .attr("ry", 8);

    // Define the simulation with boundary forces
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id).distance(130))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => d.radius + 10))
      // Add boundary forces
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05));

    // Create links
    const link = g.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", d => d.color)
      .attr("stroke-width", 2)
      .attr("stroke-opacity", 0.8);

    // Create node groups
    const nodeGroup = g.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // Add circles for each node
    nodeGroup.append("circle")
      .attr("r", d => d.radius)
      .attr("fill", d => `${d.color}cc`) // cc for 80% opacity
      .attr("stroke", d => d.color)
      .attr("stroke-opacity", 0.3)
      .attr("stroke-width", 2);

    // Add shadow effects to nodes
    nodeGroup.append("circle")
      .attr("r", d => d.radius)
      .attr("fill", "none")
      .attr("filter", d => `drop-shadow(0 0 8px ${d.color}80)`)
      .attr("stroke", d => `${d.color}40`) // 40 for 25% opacity
      .attr("stroke-width", 1);

    // Add labels for each node
    nodeGroup.append("text")
      .text(d => d.label)
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("fill", "white")
      .attr("fill-opacity", 0.9)
      .attr("font-size", d => d.radius > 30 ? "14px" : "11px")
      .attr("font-weight", "medium");

    // Add particle effects
    const particles = g.append("g")
      .selectAll("circle")
      .data(links)
      .join("circle")
      .attr("r", 2)
      .attr("fill", d => d.color)
      .attr("opacity", 0.8);

    // Update function for the simulation
    simulation.on("tick", () => {
      // Enforce boundary constraints
      nodes.forEach(d => {
        // Consider the radius when applying boundary constraints
        d.x = Math.max(d.radius, Math.min(width - d.radius, d.x));
        d.y = Math.max(d.radius, Math.min(height - d.radius, d.y));
      });

      // Update link positions
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      // Update node positions
      nodeGroup.attr("transform", d => `translate(${d.x}, ${d.y})`);

      // Animate particles along the links
      particles.each(function (d) {
        // Get current position along the link
        const t = (Date.now() % 3000) / 3000;
        const x = d.source.x * (1 - t) + d.target.x * t;
        const y = d.source.y * (1 - t) + d.target.y * t;

        d3.select(this)
          .attr("cx", x)
          .attr("cy", y);
      });
    });

    // Drag functions
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      // Constrain the dragging to the boundaries
      const x = Math.max(d.radius, Math.min(width - d.radius, event.x));
      const y = Math.max(d.radius, Math.min(height - d.radius, event.y));

      d.fx = x;
      d.fy = y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Zoom and pan functionality with boundary constraints
    const zoom = d3.zoom()
      .scaleExtent([0.5, 2])  // Limit zoom scale
      .translateExtent([[0, 0], [width, height]])  // Constrain panning to container size
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(128,90,213,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.2),transparent_60%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              the browser for real work
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              supercharging productivity by redesigning how we interact with information on the web for professionals, researchers, and students
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/features" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full transition-all duration-300 border border-white/20 text-center">
                Explore Features
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] w-full">
              {/* Stylized browser mockup with node-based graph */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  {/* Search bar/omnibox */}
                  <div className="flex-grow bg-white/5 rounded-full px-4 py-1.5 text-xs text-white/70 border border-white/10">
                    graphene://launchpad
                  </div>
                </div>

                {/* Interactive D3 Node graph visualization with fixed boundary */}
                <div
                  ref={graphRef}
                  className="h-1/2 w-full bg-black/40 rounded-lg mb-4 p-4 relative"
                >
                  {/* D3 will render the interactive graph here */}
                </div>

                {/* AI search interface */}
                <div className="relative">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                      <p className="text-white/90 text-sm">Ask me anything about your browsing session...</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-xs text-white/80">
                      <p className="mb-2">Can you summarize the key insights from all the machine learning research papers I've read in the past month?</p>
                      <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mb-2"></div>
                      <p>Based on your recent browsing, here are the key insights:</p>
                      <ul className="list-disc list-inside pl-2 space-y-1 mt-1">
                        <li>Large multimodal models showing improved alignment across modalities</li>
                        <li>Efficient attention mechanisms reducing computational requirements</li>
                        <li>Emerging research on agent-based architectures for complex tasks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}