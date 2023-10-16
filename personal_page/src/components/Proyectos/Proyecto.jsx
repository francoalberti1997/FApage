import React from 'react'
import img1 from "../programacion/django_logo.jpg"
import img2 from "../programacion/html_logo.png"
import img3 from "../programacion/python_logo.jpg"

const Proyecto = (props) => {
  return (
      <div className=' w-1/4  shadow-lg  bg-[#333] text-white text-center text-lg' key={props.index}>
        <img src={props.imagen} alt="" className=' h-[300px] rounded-b-none w-full'/>
        <p>{props.titulo}</p>
      </div>
  )
}

export default Proyecto
