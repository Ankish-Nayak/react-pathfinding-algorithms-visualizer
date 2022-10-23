import React from "react";
export default function Container(props){
    return (<div className="container" ref={props.containerRef}>
    {/* {array.map((value) => (
      <div className="cell" style={style}></div>
    ))} */}
    {props.cells}
  </div>);
}