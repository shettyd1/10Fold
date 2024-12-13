import { people } from './data.js';
import { getVideoUrl} from './utils.js';

export default function List() {
    const listItems = people.map(people =>
       <li key={video1.id}>
        <video1
            src={getVideoUrl(video1)}
            alt={video1.name}
                                 
                />
                <p>
                <b>{video1.name}</b>
                 {'' + video1.name + ''}
                </p>
            </li>
        );
                                 
    return <ul>{listItems}</ul>;
                                 
                                
                                 
}
