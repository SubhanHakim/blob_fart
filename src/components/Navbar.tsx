import logoImg from '../assets/logo.png';
import { playHoverSound } from '../utils/audio';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 bg-black/80 backdrop-blur-md border-b-2 border-white/10">

            {/* Left: Logo */}
            <div className="flex-1 flex justify-start">
                <a href="#" onMouseEnter={playHoverSound} className="hover:scale-110 transition-transform duration-300">
                    <img src={logoImg} alt="Mini Blob" className="w-10 md:w-14 h-auto" />
                </a>
            </div>

            {/* Center: Links */}
            <div className="flex items-center gap-6 md:gap-12 text-xl md:text-3xl">
                <a href="#" onMouseEnter={playHoverSound} className="hover:underline decoration-wavy decoration-2 hover:rotate-2 transition-transform">HOME</a>
                <a href="#gallery" onMouseEnter={playHoverSound} className="hover:underline decoration-wavy decoration-2 hover:-rotate-2 transition-transform">GALLERY</a>
            </div>

            {/* Right: X */}
            <div className="flex-1 flex justify-end">
                <a href="https://x.com" target="_blank" rel="noreferrer" onMouseEnter={playHoverSound} className="text-2xl md:text-3xl hover:scale-125 transition-transform font-bold">X</a>
            </div>
        </nav>
    );
}
