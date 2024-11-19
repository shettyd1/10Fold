import {useState, useEffect } from 'react';
import {fetchBio} from './api.js'

export default function Page() {
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);
    
    useEffect(() => {
        setBio(null);
        fetchBio(person).then(result => {
            setBio(result);
        });
    }, [person]);
    
    return (
            <>
            <selct value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
            <option value="Taylor">Taylor</option>
        </select>
        <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
            </>
            );
}


<!DOCTYPE html>
<html>
</html>
<script src="/main.js" async=""></script>

function ProfilePage() {
    return (
            <ProfileLayout>
              <ProfileCover />
            <Suspense fallback={<BigSpinner />}>
              <Sidebar>
                <Followers />
                <Videos />
              </Sidebar>
            <Suspense fallback={<PostsGlimmer />}>
              <Videos />
            </Suspense>
            </Suspense>
            </ProfileLayout>
            
            );
    
}

