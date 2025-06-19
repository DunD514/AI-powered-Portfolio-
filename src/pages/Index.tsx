
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Download, Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  // Initialize Botpress
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          botId: 'your-bot-id', // Replace with your actual Botpress bot ID
          hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
          messagingUrl: 'https://messaging.botpress.cloud',
          clientId: 'your-client-id', // Replace with your actual client ID
          botName: 'Career Assistant',
          botAvatarUrl: 'https://via.placeholder.com/40',
          theme: 'prism',
          themeColor: '#2563eb',
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const projects = [
    {
      title: "Deep Fake Video Detector",
      description: "Advanced AI system for detecting deepfake videos using machine learning algorithms and neural networks.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      status: "completed"
    },
    {
      title: "Self Driving Car System",
      description: "Autonomous vehicle navigation system with real-time object detection and path planning.",
      technologies: ["Python", "ROS", "Computer Vision", "LiDAR"],
      status: "in-progress"
    },
    {
      title: "AI Generated Image Detector",
      description: "Sophisticated tool to identify AI-generated images with high accuracy using ensemble methods.",
      technologies: ["PyTorch", "CNN", "Image Processing", "MLOps"],
      status: "completed"
    },
    {
      title: "Car Recommendation Agent",
      description: "Intelligent recommendation system that suggests vehicles based on user preferences and budget.",
      technologies: ["React", "Node.js", "Machine Learning", "API Integration"],
      status: "completed"
    },
    {
      title: "Resume Optimizer",
      description: "AI-powered tool that analyzes and optimizes resumes for better job application success.",
      technologies: ["NLP", "Python", "React", "API Design"],
      status: "completed"
    },
    {
      title: "Smart Billing Application",
      description: "Automated billing system with invoice generation, payment processing, and analytics.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      status: "completed"
    }
  ];

  const handleChatToggle = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: 'toggle' });
    }
    setShowChat(!showChat);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                JD
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">John Developer</h1>
                <p className="text-gray-600">Full Stack Developer & AI Engineer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleChatToggle}
                className="bg-blue-600 hover:bg-blue-700"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with AI Assistant
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Building the Future with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI & Code</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Passionate developer specializing in artificial intelligence, machine learning, and full-stack development. 
              Turning innovative ideas into reality, one project at a time.
            </p>
            <div className="flex justify-center space-x-4">
              <Badge variant="secondary" className="text-sm py-2 px-4">🚀 AI Enthusiast</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">💻 Full Stack Developer</Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">🎯 Problem Solver</Badge>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>john.developer@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-center space-x-6">
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of innovative projects spanning AI, machine learning, and full-stack development. 
              Each project represents a unique challenge solved with cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Certifications & Achievements</CardTitle>
              <CardDescription>Professional certifications and recognition in the field</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Badge className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AWS Certified Solutions Architect</h4>
                    <p className="text-sm text-gray-600">Amazon Web Services • 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Badge className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Google Cloud Professional ML Engineer</h4>
                    <p className="text-sm text-gray-600">Google Cloud • 2023</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Badge className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">TensorFlow Developer Certificate</h4>
                    <p className="text-sm text-gray-600">TensorFlow • 2022</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Badge className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Certified Kubernetes Administrator</h4>
                    <p className="text-sm text-gray-600">CNCF • 2022</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">© 2024 John Developer. All rights reserved.</p>
          <p className="text-gray-400">Built with React, TypeScript, and a passion for innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
