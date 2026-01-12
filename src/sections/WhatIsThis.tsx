export default function WhatIsThis() {
    return (
        <section className="py-24 px-4 text-center max-w-2xl mx-auto">
            <div className="border-4 border-white p-8 rounded-[2rem] transform -rotate-1 hover:rotate-1 transition-transform duration-500 bg-black">
                <h2 className="text-6xl mb-8 underline decoration-wavy decoration-4 underline-offset-8">WHAT IS THIS?</h2>
                <p className="text-3xl leading-relaxed">
                    It’s a blob.<br />
                    It farted.<br />
                    Now it’s a coin.
                </p>
            </div>
        </section>
    );
}
