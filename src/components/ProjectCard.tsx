
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  status: "completed" | "in-progress";
}

export const ProjectCard = ({ title, description, technologies, status }: ProjectCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
            {title}
          </CardTitle>
          <Badge 
            variant={status === "completed" ? "default" : "secondary"}
            className={status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
          >
            {status === "completed" ? "✅ Complete" : "🚧 In Progress"}
          </Badge>
        </div>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            {status === "completed" && (
              <Button size="sm" variant="outline" className="flex-1">
                <Play className="w-4 h-4 mr-2" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
