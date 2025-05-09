
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { MicIcon, Send, MessageSquare } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface FarmerChatbotProps {
  language: string;
}

const FarmerChatbot = ({ language }: FarmerChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: `Welcome to AgroVerse! How can I help you today?`, isBot: true },
  ]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    const newUserMessage = { id: messages.length + 1, text: inputMessage, isBot: false };
    setMessages([...messages, newUserMessage]);
    setInputMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      const responses = {
        "English": "I'll help you make smart farming decisions. What would you like to know about?",
        "Hindi": "मैं आपको स्मार्ट खेती के फैसले लेने में मदद करूंगा। आप क्या जानना चाहेंगे?",
        "Telugu": "తెలివైన వ్యవసాయ నిర్ణయాలు తీసుకోవడానికి నేను మీకు సహాయం చేస్తాను. మీరు దేని గురించి తెలుసుకోవాలనుకుంటున్నారు?"
      };
      
      const botResponse = { 
        id: messages.length + 2, 
        text: responses[language as keyof typeof responses] || responses.English, 
        isBot: true 
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    setIsListening(true);
    
    // Simulate voice recognition after 2 seconds
    setTimeout(() => {
      setIsListening(false);
      setInputMessage("When should I plant wheat?");
    }, 2000);
  };

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-80">
      <CollapsibleTrigger asChild>
        <Button 
          className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-600 hover:bg-green-700'}`}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="mt-2">
        <div className="bg-white rounded-lg shadow-xl border border-green-200 overflow-hidden">
          {/* Chat header */}
          <div className="bg-green-600 text-white p-3">
            <h3 className="font-semibold">AgroVerse Assistant</h3>
            <p className="text-xs opacity-90">Ask anything about farming</p>
          </div>
          
          {/* Messages area */}
          <div className="h-80 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? "bg-green-100 text-green-900"
                    : "bg-blue-100 text-blue-900 ml-auto"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>
          
          {/* Input area */}
          <div className="p-3 border-t border-gray-200 flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your question..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="border-green-300"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleVoiceInput}
              className={`rounded-full ${isListening ? 'bg-red-100 animate-pulse' : 'bg-green-100'}`}
            >
              <MicIcon className={`h-5 w-5 ${isListening ? 'text-red-500' : 'text-green-600'}`} />
            </Button>
            <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FarmerChatbot;
