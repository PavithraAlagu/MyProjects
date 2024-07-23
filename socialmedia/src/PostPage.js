import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';
import { useNavigate } from 'react-router-dom';
import api from './api/post';
import { format } from 'date-fns';
const PostPage = () => {
  const {posts,setPosts} = useContext(DataContext)
  const {id}= useParams();
  const post = posts.find((post) => (post.id).toString() ===id)
  const {navigate} = useNavigate()
  const handleDelete = async(id) =>{
    try{
      await api.delete(`posts/${id}`)
      const deletePost = posts.filter((post)=>post.id !== id)
      setPosts(deletePost)
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
   <main className='PostPage'>
    {post &&
    <>
    <h2>{post.title}</h2>
    <p className='postdate'>{post.datetime}</p>
    <p className='postBody'>{post.body}</p>
    <Link to={`/edit/${id}`}><button>Edit Post</button></Link>
    <button onClick={()=>handleDelete(post.id)}>Delete Post</button>
    </>
    }
    {!post &&
    <>
    <h2>Post not found</h2>
    <p>Please visit our home page for more posts</p>
    </>}
   </main>
  )
}

export default PostPage