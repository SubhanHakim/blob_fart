import { useState } from 'react';
import logoImg from '../assets/logo.png';
import { playHoverSound } from '../utils/audio';

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const ca = "5udQe616G4oRNmur4RALxEhzqQ3Y37UVrVZRbxx9pump"; // Replace with real CA

    const handleCopy = () => {
        navigator.clipboard.writeText(ca);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative p-4 pt-40 md:pt-48">
            <div className="relative group cursor-pointer" onClick={() => {
                const audio = new Audio('https://www.myinstants.com/media/sounds/fart-meme-sound.mp3');
                audio.play().catch(e => console.log('fart failed', e));
            }}>
                <img
                    src={logoImg}
                    alt="BLOB FART Logo"
                    className="w-64 md:w-96 max-w-full h-auto animate-bounce hover:scale-105 transition-transform duration-300"
                    style={{ animationDuration: '3s' }}
                />
            </div>

            <h1 className="text-6xl md:text-[10rem] leading-none mt-8 text-center tracking-tighter hover:rotate-2 transition-transform cursor-default select-none animate-pulse">
                BLOB FART
            </h1>

            {/* Chaotic Subhead Container */}
            <div className="flex flex-col gap-8 mt-8 md:mt-12 text-center relative max-w-4xl mx-auto">

                {/* Part 1: The Origin */}
                <p className="text-2xl md:text-3xl font-bold rotate-1 hover:-rotate-1 transition-transform text-gray-300">
                    Born from absolutely nowhere.<br />
                    No ocean. No kings. No destiny.<br />
                    <span className="text-white text-3xl md:text-4xl underline decoration-wavy decoration-2 decoration-white/50">
                        Just a blob that farted — and refused to disappear.
                    </span>
                </p>

                {/* Part 2: The Manifesto - Angled differently for chaos */}
                <div className="bg-white/5 border-2 border-white/20 p-6 rounded-3xl transform -rotate-2 hover:rotate-1 transition-transform backdrop-blur-sm mx-auto max-w-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                    <p className="text-xl md:text-2xl leading-relaxed uppercase tracking-widest font-black">
                        BLOB FART isn’t a utility.<br />
                        It isn’t a promise.<br />
                        <span className="text-3xl md:text-4xl text-white block mt-2 animate-bounce">
                            It’s a mistake that became a movement.
                        </span>
                    </p>
                </div>

            </div>

            <button
                onMouseEnter={playHoverSound}
                className="mt-16 px-12 py-6 bg-white text-black text-4xl rounded-full border-8 border-white hover:bg-black hover:text-white hover:border-white transition-all transform hover:-rotate-6 hover:scale-125 active:scale-95 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] font-black"
            >
                <a href="https://pump.fun/coin/5udQe616G4oRNmur4RALxEhzqQ3Y37UVrVZRbxx9pump" target="_blank" rel="noreferrer">BUY $BLOBFART</a>
            </button>

            {/* CA Copy Section */}
            <div className="mt-12 mb-8 relative z-10 w-full max-w-sm md:max-w-none px-4">
                <div
                    onClick={handleCopy}
                    className="cursor-pointer group relative bg-black border-4 border-white border-dashed px-4 py-4 md:px-8 rounded-xl transform rotate-2 hover:-rotate-1 transition-all duration-300 hover:scale-105 active:scale-95 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 overflow-hidden"
                >
                    <span className="opacity-50 font-mono text-lg md:text-2xl">CA:</span>
                    <span className="font-mono text-base md:text-2xl truncate max-w-[200px] md:max-w-full">{ca}</span>
                    <span className="text-2xl group-hover:animate-spin">📋</span>

                    {copied && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black font-black text-xl px-6 py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_#ffffff] animate-bounce whitespace-nowrap z-20">
                            COPIED! 💨
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
}
