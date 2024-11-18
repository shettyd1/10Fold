import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect} from 'react';
import { useState, useRef, useEffect} from 'react';

function Component() {
    useEffect(() => {
        
    
    });
    return <div />;
}

function VideoPlayer({src, isPlaying}) {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => dialog.close();
    
    const map = mapRef.currentmap.setZoomLevel(zoomLevel);
    
    const ref = useRef(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!connectionRef.current){
            const connection = createConnection();
            connection.connect();
        }
       
        setCount(count + 1)
        if (isPlaying) {
            console.log('Calling video.play()');
            ref.current.play();
        } else {
            console.log('Calling video.pause');
            ref.current.pause();
        }
    }, [], [zoomLevel], [isPlaying]);
    
    return <video ref={ref} src{src} loop playsInline />;
    
}

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');
    return (
      <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? 'Pause' : 'Play'}
        </button>
            <VideoPlayer
            isPlaying={isPlaying}
            src=""
            />
          </>
            );
    
}
const myFirstElement = <h1>
