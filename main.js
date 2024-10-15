const stream = await renderToReadableStream(reactNode, options?)

import {hydrateRoot} from 'react-dom/client';
import App from './App.js';


hydrateRoot(document, <App/>);

