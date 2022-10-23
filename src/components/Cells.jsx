import React from "react";
export default function Cells(props) {
  return (
    <>
      <div
        id={props.id}
        className="cell"
        style={props.style}
        onClick={(e) => {
        //   console.log(i + 1);
          // console.log(e.target.sty);
          e.target.style.backgroundColor = "red";
        }}
        onMouseEnter={(e) => {
          if (e.ctrlKey) {
            e.target.style.backgroundColor = "red";
            // console.log(i + 1);
          }
          // console.log(e.target.sty);
        }}
      >
        {props.id}
      </div>
    </>
  );
}
