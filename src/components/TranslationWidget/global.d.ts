interface GoogleTranslate {
    TranslateElement: new (
      options: { pageLanguage: string },
      elementId: string
    ) => any;
  }
  
  interface Window {
    gtranslateSettings: Record<string, any>;
  }