export default function Marquee() {
    return (
        <div className="relative w-full bg-[#FAF9F6] text-black border-y-4 border-black z-10 overflow-hidden py-4 transform -rotate-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <div className="animate-marquee whitespace-nowrap text-2xl md:text-3xl font-black uppercase tracking-widest flex gap-8">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="flex items-center gap-8">
                        BREAKING NEWS: A BLOB HAS FARTED 💨 DO NOT PANIC 💨 JUST BUY $BLOBFART 💨
                    </span>
                ))}
            </div>
        </div>
    );
}
