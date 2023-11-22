function BlurredBackground({ children, onClick }) {
    return (
        <div
            onClick={onClick}
            className="w-[100vw] h-[100vh] fixed top-0 right-0 bg-penetration2 z-30 flex items-center justify-center"
        >
            {children}
        </div>
    );
}

export default BlurredBackground;
