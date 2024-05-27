import { useState,useEffect} from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const ContentFinal = ({title,passage,date,id}) => {
   const [time,settime]=useState('')
  const  datenow=new Date()
  useEffect(()=>{
 let calculatedtime=datenow.getFullYear()-date.getFullYear()
 if(calculatedtime>0){
   settime(`${calculatedtime} year${calculatedtime>1? 's':''} ago`
   )
  return
 }
 calculatedtime=datenow.getMonth()-date.getMonth()
 if(calculatedtime>0){
   settime(`${calculatedtime} month${calculatedtime>1? 's': ''} ago`)
   return
 }
 calculatedtime=datenow.getDate()-date.getDate()
 if(calculatedtime>0){
   settime(`${calculatedtime} day${calculatedtime>1? 's': ''} ago`)
   return
 }
 calculatedtime=datenow.getHours()-date.getHours()
 if(calculatedtime>0){
   settime(`${calculatedtime} hour${calculatedtime>1? 's': ''} ago`)
   return
 }
 calculatedtime=datenow.getMinutes()-date.getMinutes()
 if(calculatedtime>0){
   settime(`${calculatedtime} minute${calculatedtime>1? 's': ''} ago`)
   return
 }
 settime('Just Now')

},[date])




  return (

    <div className="outcontent">
      <div>
      <h3>{title.split('').slice(0,100).join('')}</h3>
      <p>{passage.split('').slice(0,1800).join('')}.........<Link to={"/Read?n="+id}
      ><span>Read More</span></Link></p>
      </div>
       <p>{time}</p>
    </div>
  )
}

export default ContentFinal
