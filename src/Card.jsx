

import React from 'react'

// {color ? "container color" : "container"}
function Card(props) {
  return (
    <div className={props.data.active ? "container color" : "container"}> 
        <div className="top">
          <div className="top-top"> {props.data.title}</div>
          <div className="top-bottom">
            <h1>{props.data.price}</h1>
          </div>
        </div>
        <div className="middle-first"> {props.data.disk}</div>
        <div className="middle-second">{props.data.users}</div>
        <div className="middle-third">{props.data.up}</div>
        <div className="bottom" onClick={() => props.handleClick(props.data.id)}>
          <h4>LEARN MORE</h4>
        </div>
      </div>
  )
}

export default Card