
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const technicalSkills = [
    { name: "Python", level: 95, category: "Programming" },
    { name: "JavaScript/TypeScript", level: 90, category: "Programming" },
    { name: "React/Next.js", level: 88, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "TensorFlow/PyTorch", level: 92, category: "AI/ML" },
    { name: "Computer Vision", level: 90, category: "AI/ML" },
    { name: "AWS/GCP", level: 80, category: "Cloud" },
    { name: "Docker/Kubernetes", level: 75, category: "DevOps" }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Project Management",
    "Technical Writing",
    "Mentoring",
    "Agile/Scrum"
  ];

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive skill set spanning modern development practices, AI/ML technologies, and leadership capabilities.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {skill.category}
                    </Badge>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Soft Skills & Leadership</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Leadership Highlight</h4>
              <p className="text-sm text-blue-800">
                Led a team of 8 developers in building enterprise-level applications, 
                resulting in 40% improved deployment efficiency and 99.9% system uptime.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
