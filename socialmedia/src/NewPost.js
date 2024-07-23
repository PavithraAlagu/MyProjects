import React, { useContext } from 'react'
import DataContext from './context/DataContext'
import { useNavigate } from "react-router-dom";
import api from './api/post';
import { format } from 'date-fns';

const NewPost = () => {
  const {postTitle,setPostTitle,postBody,setPostBody,posts,setPosts} = useContext(DataContext)
  const {navigate} = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const id = posts.length? posts.length+1:1
    const datetime = format(new Date(),'MMMM dd,yyyy pp')
    const newArray = {id,title:postTitle,datetime,body:postBody}
    try{
        const response = await api.post('/posts',newArray)
        const formedArray = [...posts,response.data]
        setPosts(formedArray)
        setPostTitle('')
        setPostBody('')
        navigate('/')
    }catch(err){
      if(err.response){
        console.log(err.response.data)
      }else{
        console.log(`Error:$(err.response)`)
      }
    }
    
  }

  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title</label>
        <input type="text"
        required
        id="postTitle"
        value={postTitle}
        onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">post Body</label>
        <textarea type="text"
        id="postBody"
        required
        value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}
        />
        <button type="submit" >Submit </button>
      </form>

    </main>
  )
}

export default NewPost