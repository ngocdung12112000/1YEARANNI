import React from 'react';

const Header = (): JSX.Element => {
    return (
        <header>
            <audio id="audio-player" autoPlay>
                <source src="/audio/audio.mp3" type="audio/mpeg" />
            </audio>
        </header>
    );
};

export default Header;