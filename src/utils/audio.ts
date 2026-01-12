export const playHoverSound = () => {
    const audio = new Audio('https://www.myinstants.com/media/sounds/discord-notification.mp3'); // A subtle, familiar pop/click sound
    audio.volume = 0.2;
    audio.play().catch(() => { }); // Ignore play errors
};
