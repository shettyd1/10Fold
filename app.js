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

