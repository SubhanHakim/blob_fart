export default function Footer() {
    return (
        <footer className="py-24 text-center border-t-4 border-white mt-12">
            <div className="flex justify-center gap-8 mb-12 text-2xl">
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline hover:text-gray-300 transform hover:scale-110 transition-transform">[ X ]</a>
            </div>

            <div className="mb-12">
                <p className="text-xl opacity-50 mb-2">Contract Address</p>
                <div className="inline-block border-2 border-dashed border-white px-4 py-2 text-xl font-mono">
                    0x000...0000
                </div>
            </div>

            <p className="text-4xl animate-pulse uppercase">
                JUST FARTS.
            </p>
        </footer>
    );
}
