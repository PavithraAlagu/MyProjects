import React from 'react'
import Box from './Box'

const Buttons = ({reqType,setReqType}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <Box
        buttonText="users"
        reqType={reqType}
        setReqType={setReqType}
        />
          <Box
        buttonText="posts"
        reqType={reqType}
        setReqType={setReqType}
        />
          <Box
        buttonText="comments"
        reqType={reqType}
        setReqType={setReqType}
        />
    </form>
  )
}

export default Buttons