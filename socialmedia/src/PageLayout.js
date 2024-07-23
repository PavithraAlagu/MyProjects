import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const PageLayout = () => {
  return (
    <>
    <li><Link to="/postpage/1">Post 1</Link></li>
    <li><Link to="/postpage/2">Post 2</Link></li>
    <li><Link to="/postpage/3">Post 3</Link></li>
    <li><Link to="/newPost">New Post</Link></li>
    <Outlet/>
    </>
  )
}

export default PageLayout