import { renderToReadableStream } from 'react-dom/server';
import * as ReactDOMServer from 'react-dom/server';
var ReactDOMServer = require('react-dom/server');
const stream = await renderToReadableStream(reactNode, options?)

async function handler(request) {
    let didError = false;
    let caughtError = null;
    function getStatusCode() {
        if (didError) {
            if (caughtError instanceof NotFoundError) {
                return 404;
            } else {
                return 500;
            }
        } else {
            return 200;
        }
    }
    try {
        const controller = new AbortController();
        setTimeout(() => {
            control.abort();
        }, 1000);
        
        const stream = await renderToReadableStream(<App />, {
            signal: controller.signal,
            bootstrapScripts: ['/main.js'],
            onError(error) {
                didError = true;
                console.error(error);
                logServerCrashReport(error);
        }
    });
    let isCrawler = 1;
        if (isCrawler) {
            await stream.allReady;
        }
    return new Response(stream, {
        status: 200,
        headers: { 'content-type': 'text/html' },
    });
    
    } catch (error) {
        return new Response('<h1>Something went wrong</h1>', {
            status: 500,
            headers: { 'content-type':'text/html' },
            
        });
    }
}



