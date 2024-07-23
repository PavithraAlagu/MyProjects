import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'
const Home = () => {
const {searchResults,fetchError,isLoading} = useContext(DataContext)
  return (
    <main className='Home'>
      {isLoading && <p> Data Loading....</p>}
      {!isLoading && fetchError && <p style = {{color:'red'}}>{fetchError}</p>}
      {!isLoading&& !fetchError &&
       (searchResults.length)? <Feed key={searchResults.id} posts={searchResults}/> : <p style={{marginLeft:'5px'}}> No Posts available to show</p> }
    </main>
  )
}

export default Home