import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    if (!window.google || !window.google.translate) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
  }, []);

  return <div id="google_translate_element" className=""></div>;
};

export default GoogleTranslate;
