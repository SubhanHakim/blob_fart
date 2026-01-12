export default function HowToBuy() {
    return (
        <section className="py-24 px-4 max-w-3xl mx-auto">
            <h2 className="text-6xl text-center mb-16 underline decoration-4">HOW TO BUY</h2>
            <div className="space-y-12">
                {[
                    { step: '01', text: 'Get a wallet' },
                    { step: '02', text: 'Swap for $BLOBFART' },
                    { step: '03', text: 'Hold or fart' }
                ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}>
                        <div className="text-8xl font-black opacity-20 select-none">{item.step}</div>
                        <div className="text-4xl md:text-5xl">{item.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
