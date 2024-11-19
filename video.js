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
    
    function Playground() {
        const [text, setText] = useState('a');
    }
    useEffect(() => {
        logVisit(url);
        if (typeof window !== 'undefined') {
            checkAuthToken();
        }
        function onTimeout() {
            console.log('Clock' + text);
            clearTimeout(timeoutId);
        };
        
        console.log('Schedule "' + text + '"log"');
        const timeoutId = setTimeout(onTimeout, 3000);
        
        return () => {
            console.log('Cancel "' + text + '"log');
            clearTimeout(timeoutId);
        };
        
        return (
          <>
            <label>
                What to log:{''}
                <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
          </label>
        <h1>{text}</h1>
       </>
    );
        function App() {
            
        }
        fetch('api/buy', {method: 'POST'});
        function handleScroll(e) {
            console.log(window.scrollX, window.scrollY)
            
        }
        window.addEventListener('scroll', handleScroll);
        
        const node  = ref.current;
        node.style.opacity = 1;
        return () => {
            node.style.opacity = 0;
        };
        
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
        let ignore = false;
        
        function TodoList() {
            const todos = useSomeDataLibrary('/api/user/${userId}/todos');
        }
        
        async function startFetching() {
            const json = await fetchTodos(userId);
            if (!ignore) {
                setTodos(json);
            }
            
        }
        
        startFetching();
        
        return () => {
            ignore = true;
        };
        
        
    }, [url], [], [text], [zoomLevel], [isPlaying], [userId]);
    
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
