import React, { useState } from "react";
import { FaVolumeUp, FaStop } from "react-icons/fa"; // Import icons for better UI

const TextToSpeech = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    let speech = null;

    // Function to read the text aloud
    const readAloud = () => {
        const text = document.body.innerText; // Get all visible text on the page
        if (!text) {
            alert("No content to read!");
            return;
        }

        speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.lang = document.documentElement.lang || "en"; // Detect language from Google Translate
        speech.rate = 1; // Normal speech rate
        speech.pitch = 1; // Normal pitch

        setIsSpeaking(true);
        speech.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(speech);
    };

    // Function to stop speech
    const stopSpeech = () => {
        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };

    return (
        <div className="flex space-x-4 mt-4">
            <button
                onClick={readAloud}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition flex items-center space-x-2"
                disabled={isSpeaking}
            >
                <FaVolumeUp />
                <span>Read Aloud</span>
            </button>

            {isSpeaking && (
                <button
                    onClick={stopSpeech}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition flex items-center space-x-2"
                >
                    <FaStop />
                    <span>Stop</span>
                </button>
            )}
        </div>
    );
};

export default TextToSpeech;
