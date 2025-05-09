
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Calendar, Image, MessageSquare, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const MainOptions = () => {
  const isMobile = useIsMobile();
  
  const options = [
    {
      id: "crop-suggestion",
      title: "Crop Suggestion",
      description: "Get suitable crops based on soil & weather",
      icon: <Calendar className="h-10 w-10 text-green-600" />,
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      textColor: "text-green-800",
      features: ["Soil data + real-time weather", "Expected growth timeline", "Profit estimate"]
    },
    {
      id: "crop-disease",
      title: "Crop Disease & Fertilizer",
      description: "Diagnose issues & get treatment advice",
      icon: <Image className="h-10 w-10 text-amber-600" />,
      color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
      textColor: "text-amber-800",
      features: ["Upload crop images", "AI disease detection", "Treatment recommendations"]
    },
    {
      id: "farmer-chat",
      title: "Tool Renting & Farmer Chat",
      description: "Connect with local farmers & share resources",
      icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      textColor: "text-blue-800",
      features: ["Local farmer forum", "Voice notes in local language", "Request & rent tools"]
    },
    {
      id: "market-analysis",
      title: "Market Analysis",
      description: "Track prices & connect with buyers",
      icon: <TrendingUp className="h-10 w-10 text-purple-600" />,
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      textColor: "text-purple-800",
      features: ["Current crop prices", "Price comparisons", "Direct retailer contact"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-green-900">Smart Farming Tools</h2>
        <p className="text-xl text-green-700">Select an option to begin</p>
      </div>

      <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-6'}`}>
        {options.map((option) => (
          <Link to={`/${option.id}`} key={option.id}>
            <Card className={`border-2 transition-all duration-200 hover:shadow-lg ${option.color}`}>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="p-3 rounded-full bg-white shadow-sm">
                    {option.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className={`text-xl font-bold mb-2 ${option.textColor}`}>
                      {option.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{option.description}</p>
                    <ul className="space-y-1">
                      {option.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainOptions;
