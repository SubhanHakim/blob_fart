export default function FloatingDecorations() {
    return (
        <>
            <div className="fixed top-20 right-10 w-4 h-4 bg-white rounded-full mix-blend-difference animate-ping opacity-20 pointer-events-none"></div>
            <div className="fixed bottom-40 left-10 w-8 h-8 rounded-full border-2 border-white opacity-20 animate-bounce pointer-events-none" style={{ animationDuration: '4s' }}></div>
        </>
    );
}
