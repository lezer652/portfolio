import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Projet 1",
      description: "Une description courte de votre premier projet",
      tags: ["React", "Tailwind"],
      link: "#"
    },
    {
      title: "Projet 2",
      description: "Une description courte de votre deuxième projet",
      tags: ["JavaScript", "CSS"],
      link: "#"
    },
    {
      title: "Projet 3",
      description: "Une description courte de votre troisième projet",
      tags: ["Python", "Web"],
      link: "#"
    }
  ];

  const skills = [
    "React", "TypeScript", "Tailwind CSS", "JavaScript",
    "Web Design", "UI/UX", "Git", "Node.js"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-accent transition">Projets</a>
            <a href="#skills" className="hover:text-accent transition">Compétences</a>
            <a href="#contact" className="hover:text-accent transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-6">
          <h2 className="text-5xl font-bold">Bienvenue sur mon portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Je suis un développeur passionné par la création d'expériences web modernes et intuitives.
            Explorez mes projets et découvrez ce que je peux créer pour vous.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg">Voir mes projets</Button>
            <Button variant="outline" size="lg">Me contacter</Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/50 py-20">
        <div className="container max-w-4xl mx-auto px-4 space-y-12">
          <h3 className="text-3xl font-bold">Mes Projets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-accent hover:underline">
                  Voir le projet <ExternalLink size={16} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container max-w-4xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold mb-12">Compétences</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <Card key={idx} className="p-4 text-center hover:bg-accent/10 transition">
              <p className="font-medium">{skill}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center space-y-8">
          <h3 className="text-3xl font-bold">Parlons ensemble</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos idées.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="p-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition">
              <Mail size={24} />
            </a>
            <a href="#" className="p-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 bg-accent/10 hover:bg-accent/20 rounded-lg transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container max-w-4xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Mon Portfolio. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
