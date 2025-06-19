
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  // Initialize Botpress with the provided scripts
  useEffect(() => {
    // Load the main Botpress inject script
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Load the specific bot configuration script
    const configScript = document.createElement('script');
    configScript.src = 'https://files.bpcontent.cloud/2025/05/07/05/20250507051742-4VOYXJHX.js';
    configScript.async = true;
    document.body.appendChild(configScript);

    return () => {
      if (document.body.contains(injectScript)) {
        document.body.removeChild(injectScript);
      }
      if (document.body.contains(configScript)) {
        document.body.removeChild(configScript);
      }
    };
  }, []);

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
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                AI
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Portfolio Assistant</h1>
                <p className="text-gray-600">Chat with my AI to learn about my work</p>
              </div>
            </div>
            <Button
              onClick={handleChatToggle}
              className="bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with AI
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to My AI-Powered Portfolio
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ask my AI assistant anything about my projects, experience, and skills. 
              Click the chat button to get started!
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                🤖 Start a Conversation
              </h3>
              <p className="text-gray-600 mb-6">
                The AI assistant knows everything about my professional background and can answer 
                detailed questions about my projects, technologies I use, and career experience.
              </p>
              <Button
                onClick={handleChatToggle}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Open AI Chat
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="font-medium">Email</span>
                  <span className="text-gray-600">dund514@gmail.com</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span className="font-medium">Phone</span>
                  <span className="text-gray-600">+1 (647) 866-8514</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span className="font-medium">Availability</span>
                  <span className="text-gray-600">Available for remote opportunities</span>
                </div>
              </div>
              <div className="flex justify-center space-x-6 mt-6 pt-6 border-t">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/DunD514" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/duncan-d-lima-24b9b8349/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mb-2">© 2024 AI Portfolio. All rights reserved.</p>
          <p className="text-gray-400">Powered by Botpress AI Assistant</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
