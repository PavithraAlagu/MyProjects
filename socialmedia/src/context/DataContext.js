import { createContext} from "react";
import { useEffect, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize'
import useAxiosFetch  from '../hooks/useAxiosFetch'

const DataContext = createContext({})


export const DataProvider = ({children})=>{
    const [search,setSearch] = useState('')
      const [posts,setPosts]= useState([])
      const[postTitle,setPostTitle]=useState('')
      const[postBody,setPostBody] = useState('')
      const[searchResults,setSearchResults]=useState('')
      const[editTitle,setEditTitle] = useState('')
      const[editBody,setEditBody]= useState('')
      const {width} = useWindowSize()
    
      const {data,fetchError,isLoading} = useAxiosFetch('http://localhost:3500/posts');
    useEffect( () =>{
        setPosts(data)
      },[data])
      /* useEffect(()=>{
        const fetchPosts = async()=>{
          try{
          const response = await api.get('/posts')
          setPosts(response.data)
          }catch(err){
            if(err.response){
              console.log(err.response.data)
              console.log(err.response.status)
              console.log(err.response.headers)
            }else{
            console.log(`Error:$(err.message)`)
            } 
          }
        }
        fetchPosts()
      },[]) */
      useEffect(()=>{
        const filteredPosts = posts.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase())) ||
        posts.filter((post)=>((post.title).toLowerCase()).includes(search.toLowerCase()))
        setSearchResults(filteredPosts.reverse())
      },[posts,search])
    return(
        <DataContext.Provider value={{
            width,
            search,setSearch,
            searchResults,fetchError,isLoading,
            postTitle,setPostTitle,postBody,setPostBody,posts,
            editTitle,setEditTitle,editBody,setEditBody
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext