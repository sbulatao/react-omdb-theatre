import React, { useState, useEffect } from 'react'

import { auth, db } from '../firebase/init';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, deleteDoc } from "firebase/firestore"

export default function Posts() {
    // created a cloud firestore database HERE

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editingId, setEditingId] = useState(null);

    const [searchId, setSearchId] = useState(''); // Specifically for GetPostById

    const [loading, setLoading] = useState(true);


// ------------------------- CREATE -------------------------
    // CREATE
    async function createPost(e){
        e.preventDefault();
        if (!title || ! description){
            return alert("Please fill out all fields!!!");
        }
        if (!user){
            return alert("You must be logged in to post!!!");
        }

        const newPostData = {
            title: title, 
            description: description, 
            uid: user.uid,
            userEmail: user.email
        };

        await addDoc(collection(db, "posts"), newPostData);

        // RESET and RELOAD
        setTitle('');
        setDescription('');
        getAllPosts();
    }

// ------------------------- READ -------------------------
    // READ ALL POST
    async function getAllPosts() {
        try {
            setLoading(true);
            const { docs } = await getDocs(collection(db, "posts"));
            const postsData = docs.map(elem => ({
                ...elem.data(),
                id: elem.id
            }));

            console.log(postsData);
            setPosts(postsData);
            
        } catch (error) {
            console.error("Error fetching ALL posts:", error);
        } finally {
            setLoading(false);
        }
    }

    // READ A POST BY ID 
    async function getPostById(){
        if (!searchId && !user) {
            return alert("Please Enter an Id first!!!");
        }

        try{
            setLoading(true);
            const docRef = doc(db, "posts", searchId);
            // console.log("docRef: ", docRef);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                const post = docSnap.data();
                setPosts([post])
            } else {
                alert("No post found with matching ID!");
                setPosts([]); // CLEARS LIST if nothing found
            }

        } catch (error){
            console.error("Error fetching post by ID: ", error);
        } finally {
            setLoading(false);
        }
    }

    // READ A POST BY UID
    async function getPostByUid(){
        if (!user) {
            return alert("Log in first!!!");
        }

        try{
            setLoading(true);

            const postCollectionRef = query(
                collection(db, "posts"),
                where("uid", "==", user.uid) // DYNAMICALLY finds user's posts
            );

            const { docs } = await getDocs(postCollectionRef);
            
            setPosts(docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            })));

        } catch (error) {
            console.error("Error fetching post by UID: ", error);
        } finally {
            setLoading(false);
        }
    }

// ------------------------- UPDATE -------------------------
    // EDIT on a post
    function startEdit(post) {
        setEditingId(post.id);
        setTitle(post.title);
        setDescription(post.description);
    }

    // UPDATE
    async function updatePost(e){
        e.preventDefault();

        if (!title || !description) {
            return alert("Fields cannot be empty!!!");
        }

        const postRef = doc(db, "posts", editingId);

        await updateDoc(postRef, {
            title: title,
            description: description
        });

        // RESET INPUTS AND REFRESH UI LIST
        setEditingId(null);
        setTitle('');
        setDescription('');
        getAllPosts();
    }

// ------------------------- DELETE -------------------------
    // DELETE
    async function deletePost(id){
        const postRef = doc(db, "posts", id);

        // await deleteDoc(postRef);
        deleteDoc(postRef);

        // REFRESH LIST AFTER DELETEING
        getAllPosts(); 
    };


// SYNC LOGGED IN USER STATE from FIREBASE
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // FETCH ALL POSTS AUTOMATICALLY
    useEffect(() => {
        getAllPosts();
    }, []);

  return (
    <div className='container'>
        <div className="post">

            <h2 className='post__header'>OMDb Movie Opinions</h2>
            <h3 className='post__subheader'>
                {editingId ? 'Edit Your Post' : 'Share a Movie Opinion'}
            </h3>

            <form 
                className='post__form' 
                onSubmit={editingId ? updatePost : createPost}>
                <input 
                    className='post__input'
                    type="text"
                    placeholder='Movie Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea 
                    placeholder='What do you think about it?'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea>

                <button className='post__publish' type='submit'>
                    {editingId ? 'Update Post' : 'Publish Post'}
                </button>

                <button 
                type='button' 
                onClick={() => {
                    setEditingId(null);
                    setTitle('');
                    setDescription('');
                }}>{editingId ? 'Cancel Edit' : 'Cancel'}</button>
            </form>

            <div className="post__button--id">
            <h3>Find post by id: </h3>
                <input
                    className='post__input--id'
                    type='text'
                    placeholder='Unique post id'
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />
                <button type='submit' onClick={getPostById}>Get Post By Id</button>
            </div>

            <div className="post__buttons">
                <button onClick={getAllPosts}>Get All Posts</button>
                <button onClick={getPostByUid}>Get Post By Me</button>
            </div>

            <h2 className='all__reviews'>All Reviews</h2>

            {loading 
            ? 'Loading reviews...' 
            : (<div className="reviews">
                {posts.length === 0 
                ? 'No reviews found.' 
                : (posts.map(post => {
                    return (
                        <div key={post.id} className='review__cards'>
                            <h3 className='review__title'>{post.title}</h3>
                            <p className='review__para'>{post.description}</p>
                            <small>
                                By: {post.userEmail || 'Anonymous'}
                            </small> 

                            {user && user.uid === post.uid && (
                                <div className='review__actions'>
                                    <button onClick={() => {startEdit(post)}}>Edit</button>
                                    <button className='post__delete' onClick={() => {deletePost(post.id)}}>Delete</button>
                                </div>
                            )}
                        </div>
                    );
                })
            )}
            </div>)}
        </div>
    </div>
  )
}
