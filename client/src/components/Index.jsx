import { useEffect, useState } from "react";
import Post from "./Post";


const Index = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        })
    }, []);

    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    )
}



export default Index