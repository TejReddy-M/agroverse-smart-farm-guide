
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import MapSelector from "@/components/MapSelector";
import LanguageSelector from "@/components/LanguageSelector";
import FarmerChatbot from "@/components/FarmerChatbot";
import MainOptions from "@/components/MainOptions";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [locationSelected, setLocationSelected] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const isMobile = useIsMobile();
  
  const handleLocationSelect = () => {
    setLocationSelected(true);
    toast({
      title: "Location selected!",
      description: "We'll show recommendations based on your farm location.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header with Language Toggle */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-green-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16.25A6.25 6.25 0 0 1 12 2" />
                <path d="M12 2a6.25 6.25 0 0 1 0 12.5" />
                <path d="M12 2v12.5" />
                <path d="M12 8.13 16 6" />
                <path d="m8 10 4-1.87" />
                <path d="M15.93 15.93 12 13" />
                <path d="m12 13-3.93 2.93" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-green-800">AgroVerse</h1>
          </div>
          <LanguageSelector currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {!locationSelected ? (
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold text-green-900 md:text-4xl">Welcome to AgroVerse</h2>
                <p className="text-xl text-green-700">Smart farming decisions for better harvests</p>
              </div>
              
              <Card className="overflow-hidden border-green-200 shadow-lg">
                <CardContent className="p-0">
                  <div className="p-6 bg-green-50 border-b border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      Select Your Farm Location
                    </h3>
                  </div>
                  <div className="h-96 relative">
                    <MapSelector onSelectLocation={handleLocationSelect} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <MainOptions />
          )}
        </div>
        
        {/* Chatbot - Always visible */}
        <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'}`}>
          <FarmerChatbot language={currentLanguage} />
        </div>
      </main>
    </div>
  );
};

export default Index;
