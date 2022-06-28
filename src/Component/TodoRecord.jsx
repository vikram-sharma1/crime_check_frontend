
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../Context/Store'

export const TodoRecord = () => {

  const [data,setData] = useState([])
  const [str,setStr] = useState("")

  const {text} = useContext(StoreContext)





    const fetchdata = () =>{
      axios.get("https://obscure-meadow-04116.herokuapp.com/").then(({data}) =>{
        setData(data)
      })
      .catch((er)=>{
        console.log(er)
      })
    }


  useEffect(() =>{
    fetchdata()
  },[])

  const handlecontroll = (e) => {
    setStr(e.target.value)
  } 

  const addto = () => {
    const data = {
      taskName:str,
      userName:text
    }
    axios.post("https://obscure-meadow-04116.herokuapp.com/",data).then(()=>{
      fetchdata()
    })
    .catch((er)=>{
      cosnole.log(er)
    })
  }
  return (
    <>
    <div>
      <input type="text" onChange={handlecontroll}/>
      <button onClick={addto}>Add Todo</button>
    </div>

    <div>
    {data.map((e)=>{
      return( <div key={e._id}>
          <h1>{e.taskName}</h1>
          <h3>{e.userName}</h3>
          <p>{e.createdAt}</p>
      </div>)
    })}
    </div>
    
    </>
    
  )
}
