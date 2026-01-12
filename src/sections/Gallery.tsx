import { useEffect, useState } from 'react';
import { playHoverSound } from '../utils/audio';

// Dynamically import all images from the gallery folder
const galleryImages = import.meta.glob('../assets/gallery/*.png', { eager: true });

export default function Gallery() {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        // Extract the image URLs from the imported modules
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const loadedImages = Object.values(galleryImages).map((mod: any) => mod.default);
        setImages(loadedImages);
    }, []);

    return (
        <section id="gallery" className="py-24 px-4 bg-black relative overflow-hidden">

            {/* Section Title */}
            <h2 className="text-5xl md:text-8xl text-center mb-16 font-black tracking-tighter uppercase relative z-10">
                <span className="inline-block transform -rotate-3 decoration-wavy underline decoration-4 underline-offset-8">THE MUSEUM</span>
                <br />
                <span className="text-2xl md:text-4xl font-normal normal-case block mt-4 text-gray-400 rotate-2">
                    (screenshots of bad decisions)
                </span>
            </h2>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-4">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        onMouseEnter={playHoverSound}
                        className={`
              relative group cursor-pointer transition-all duration-500
              ${idx % 2 === 0 ? 'rotate-1 hover:-rotate-1' : '-rotate-1 hover:rotate-1'}
              ${idx % 3 === 0 ? 'mt-0 md:mt-12' : ''} 
              hover:z-20 hover:scale-110 
            `}
                    >
                        {/* Polaroid-ish frame */}
                        <div className="bg-white p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transform transition-transform group-hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.4)]">
                            <div className="overflow-hidden bg-black/10 aspect-square">
                                <img
                                    src={img}
                                    alt={`Blob Art ${idx + 1}`}
                                    className="w-full h-full object-cover transition-all duration-500"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-4 text-center h-8">
                                <span className="text-black font-handwriting text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold block">
                                    #{idx + 101}
                                </span>
                            </div>
                        </div>

                        {/* Random tape effect maybe? keep it simple for now, just css border */}
                    </div>
                ))}
            </div>

            <div className="text-center mt-24">
                <p className="text-2xl text-gray-500 transform rotate-1">more coming soon (maybe)</p>
            </div>

        </section>
    );
}
