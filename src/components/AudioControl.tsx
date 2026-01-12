import { useState, useRef } from 'react';

export default function AudioControl() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    // Using a goofy cartoon loop or ambient weirdness
    // Since I can't upload audio, I'll use a reliable external URL or placeholder.
    // Using a funny loop from myinstants or similar for demo purpose.
    // Ideally user would provide 'blob-theme.mp3'
    const audioUrl = "https://www.myinstants.com/media/sounds/spongebob-fail.mp3";

    const toggleAudio = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(audioUrl);
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
        }

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={toggleAudio}
                className={`
            w-16 h-16 rounded-full border-4 border-black flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-110 active:scale-95
            ${isPlaying ? 'bg-green-400 animate-spin-slow' : 'bg-red-400'}
        `}
            >
                {isPlaying ? '🔊' : '🔇'}
            </button>
        </div>
    );
}
