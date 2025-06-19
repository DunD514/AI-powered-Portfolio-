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

    // Initialize the webchat when scripts are loaded
    const initializeBotpress = () => {
      if (window.botpressWebChat) {
        // The config script should handle the initialization
        // We can optionally customize the appearance here
        window.botpressWebChat.init({
          botName: 'Career Assistant',
          botAvatarUrl: 'https://via.placeholder.com/40',
          theme: 'prism',
          themeColor: '#2563eb',
        });
      }
    };

    // Wait for both scripts to load
    let scriptsLoaded = 0;
    const onScriptLoad = () => {
      scriptsLoaded++;
      if (scriptsLoaded === 2) {
        setTimeout(initializeBotpress, 1000);
      }
    };

    injectScript.onload = onScriptLoad;
    configScript.onload = onScriptLoad;

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
                JD
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">John Developer</h1>
                <p className="text-gray-600">Full Stack Developer & AI Engineer</p>
              </div>
            </div>
            <Button
              onClick={handleChatToggle}
              className="bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with AI Assistant
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Developer Portfolio
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore my projects and experience through an interactive AI assistant. 
              Click the chat button above to get started!
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-blue-100">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                🤖 Try the AI Assistant
              </h3>
              <p className="text-gray-600 mb-6">
                Ask questions about my projects, experience, skills, or anything else you'd like to know. 
                The AI assistant has comprehensive knowledge about my professional background.
              </p>
              <Button
                onClick={handleChatToggle}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Conversation
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Quick Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span className="font-medium">Email</span>
                  <span className="text-gray-600">john.developer@email.com</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span className="font-medium">Phone</span>
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span className="font-medium">Location</span>
                  <span className="text-gray-600">San Francisco, CA</span>
                </div>
              </div>
              <div className="flex justify-center space-x-6 mt-6 pt-6 border-t">
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Instructions */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  💡 How to Use This Portfolio
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Ask About Projects</h4>
                    <p className="text-sm text-gray-600">
                      "Tell me about your AI projects" or "What's your experience with React?"
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-2">Get Technical Details</h4>
                    <p className="text-sm text-gray-600">
                      "How did you build the deepfake detector?" or "What technologies do you use?"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="mb-2">© 2024 John Developer. All rights reserved.</p>
          <p className="text-gray-400">Powered by Botpress AI Assistant</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
