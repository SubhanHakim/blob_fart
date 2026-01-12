import { playHoverSound } from '../utils/audio';

export default function Community() {
    return (
        <section className="py-32 px-4 relative bg-black overflow-hidden">

            {/* Decorative Blur Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">

                {/* Tilting Headline */}
                <h2 className="text-5xl md:text-[12rem] font-black leading-none transform -rotate-2 mix-blend-difference mb-12">
                    JOIN THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white animate-pulse">CHAOS</span>
                </h2>

                {/* The Action Box */}
                <div className="relative inline-block group w-full max-w-sm md:max-w-none">

                    {/* Chaotic border layers */}
                    <div className="absolute -inset-2 bg-white rounded-[2rem] transform rotate-3 blur-sm opacity-50 group-hover:rotate-6 transition-all duration-300"></div>
                    <div className="absolute -inset-2 bg-gray-500 rounded-[2rem] transform -rotate-2 opacity-50 group-hover:-rotate-4 transition-all duration-300"></div>

                    <a
                        href="https://x.com/blobfart_?s=21&t=p8y9jAhkYdmzWlb-DnEN9Q"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={playHoverSound}
                        className="relative block bg-black border-4 border-white px-8 py-8 md:px-24 md:py-16 rounded-[2rem] transform transition-transform duration-300 hover:scale-105 active:scale-95 w-full"
                    >
                        <div className="flex flex-col items-center gap-4">
                            {/* Giant X Logo */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 md:w-32 md:h-32 text-white">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161-.031a.08.08 0 0 1-.137 0l2.35 1.486-.01.002H6.963a.1.1 0 0 1 .137.031l2.5 1.58.01-.005.158.1c.05.032.112.016.137-.031l1.161.734-.01-.002L6.163 2.25h2.164a.08.08 0 0 1 .137 0l2.35 1.486-.01.002h2.247l.01-.002.162.103c.048.03.111.015.137-.031l1.162.734c.025.016.088.002.137-.031l2.5 1.58z" />
                            </svg>

                            <span className="text-3xl md:text-6xl font-black uppercase tracking-widest decoration-4 underline decoration-wavy underline-offset-8">
                                RAID NOW
                            </span>

                            <p className="text-sm md:text-xl text-gray-400 mt-2 font-mono">
                                (we are probably screaming)
                            </p>
                        </div>
                    </a>
                </div>

                {/* Floating Social Proof / Chaos Text */}
                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50 font-bold text-xl uppercase tracking-tighter">
                    <div className="transform rotate-3">No Snobs</div>
                    <div className="transform -rotate-2">Just Blobs</div>
                    <div className="transform rotate-1">100% Retarded</div>
                    <div className="transform -rotate-3">Community Takeover</div>
                </div>

            </div>
        </section>
    );
}
