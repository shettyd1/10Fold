import {useState, useRef } from 'react';

export default function VideoPlayer() {
    const [isPlaying, setPlaying] = useState(false);
    
    function handleClick() {
        const nextIsPlaying = !isPlaying;
        setPlaying(nextIsPlaying);
    }
    
    return (
            <>
            <button onClick={handleClick}>
            {isPlaying} ? 'Pause' : 'Play'
            </button>
            <video width="250">
              <source
                 src=""
                 type=""
            
            
            />
            </video>
            </>
            )
}
