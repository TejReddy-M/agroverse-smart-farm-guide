
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MicIcon } from "lucide-react";

interface LanguageSelectorProps {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
}

const LanguageSelector = ({ currentLanguage, setCurrentLanguage }: LanguageSelectorProps) => {
  const [isVoiceSelecting, setIsVoiceSelecting] = useState(false);

  const languages = [
    { name: "English", flag: "🌐" },
    { name: "Hindi", flag: "🇮🇳" },
    { name: "Telugu", flag: "🌾" },
  ];

  const handleVoiceSelect = () => {
    setIsVoiceSelecting(true);
    // Simulate voice selection after 2 seconds
    setTimeout(() => {
      setIsVoiceSelecting(false);
      setCurrentLanguage("Hindi");
    }, 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-green-300 bg-white hover:bg-green-50">
            {languages.find(lang => lang.name === currentLanguage)?.flag} {currentLanguage}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.name}
              onClick={() => setCurrentLanguage(language.name)}
              className="cursor-pointer"
            >
              <span className="mr-2">{language.flag}</span>
              {language.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="ghost"
        size="icon"
        className={`rounded-full ${isVoiceSelecting ? "animate-pulse bg-red-100" : "bg-green-100"}`}
        onClick={handleVoiceSelect}
        title="Voice Language Selection"
      >
        <MicIcon className={`h-5 w-5 ${isVoiceSelecting ? "text-red-500" : "text-green-600"}`} />
      </Button>
    </div>
  );
};

export default LanguageSelector;
