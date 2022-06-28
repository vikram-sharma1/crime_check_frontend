
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import{Todo} from "../Component/Todo"
import{TodoRecord} from "../Component/TodoRecord"
export const MRoutes = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Todo/>} />
        <Route path="/note" element={<TodoRecord/>}/>
      </Routes>
  )
}
