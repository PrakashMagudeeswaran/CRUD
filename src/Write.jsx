import React, { useState } from 'react'
import Header from './Header'
import {useDispatch} from 'react-redux'
import{useSelector} from 'react-redux'
import { createContent } from '../Componenets/contentSlice'
import {nanoid} from '@reduxjs/toolkit'

const Content=()=>{
  const content=useSelector(store=>store.content)
  const dispatch = useDispatch()
const [inputtitle,setinputtitle]=useState('')
const [inputcontent,setinputcontent]=useState('')

const handletitlechange=(e)=>{
setinputtitle(e.target.value)

}

const handlecontentchange=(e)=>{
  setinputcontent(e.target.value)

  }
  
const handleSubmit=(e)=>{
e.preventDefault()
const time=new Date()
dispatch(createContent({id:nanoid(5),title:inputtitle,passage:inputcontent,date:time}))
console.log(content)

}






return(
<>
<form onSubmit={handleSubmit} className="content">
 <input onChange={(e)=>handletitlechange(e)} type="text" value={inputtitle} placeholder="Title Here....(0/100)"/>
 <textarea onChange={(e)=>handlecontentchange(e)} value={inputcontent} rows="30" cols="50"></textarea>
 <button type="submit" >Publish Now</button>
</form>

</>
)
}

const Write = () => {
  return (
    <div>
      <Header/>
      <Content/>
    </div>
  )
}

export default Write
