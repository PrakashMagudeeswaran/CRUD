import React from 'react'
import Header from './Header'
import ContentFinal from './ContentFinal'
import{useSelector} from 'react-redux'
const Home = () => {
  const content=useSelector(store=>store.content)
  return (
    <>
    <div>
      <Header/>
      <div className="contentcontainer">
      {content.map(cont=>
      <ContentFinal
      title={cont.title}
      passage={cont.passage}
      date={cont.date}
      id={cont.id}/>)}</div>
    </div>
    </>
  )
}

export default Home
