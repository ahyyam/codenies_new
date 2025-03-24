"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

type Language = "en" | "ar";

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "ar" : "en");
    // In a real implementation, this would update the app's language context
    // and potentially change the document direction for RTL support
    document.documentElement.dir = currentLanguage === "en" ? "rtl" : "ltr";
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {currentLanguage === "en" ? "العربية" : "English"}
    </Button>
  );
}
