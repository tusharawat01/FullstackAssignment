import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Button.css'

function Button({children,path}) {

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(path)
    }
  return (
    <div className="btn">
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default Button
