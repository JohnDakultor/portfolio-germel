"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/api/project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  // Show only first 6 projects unless showAll is true
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.length === 0 && (
          <p className="text-center text-muted-foreground">Loading projects...</p>
        )}
        {visibleProjects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                {project.description || "No description available"}
              </p>
              <a
                href={project.url}
                target="_blank"
                className="text-primary underline"
              >
                View on GitHub →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {projects.length > 6 && (
        <div className="mt-10 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show All"}
          </Button>
        </div>
      )}
    </section>
  );
}
