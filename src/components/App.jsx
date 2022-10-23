import React from "react";
import Container from "./Container";
import useMeasure from "./UseMeasure";
import Header from "./Header";
import Cells from "./Cells";
export default function App() {
  const containerRef = React.useRef();
  const dimensions = useMeasure(containerRef);
  const [mat, setMat] = React.useState({
    width: 0,
    height: 0,
  });
  let cnt = 1500;
  let width = Math.sqrt((dimensions.width * dimensions.height) / cnt);
  const style = {
    width: width,
    height: width, 
  };
  function calcMat() {
    const newMat = {
      width: 0,
      height: 0,
    };
    newMat.width = Math.floor(dimensions.width / width);
    newMat.height = Math.floor(dimensions.height / width);
    console.log(newMat);
    return newMat;
  }
  // we have to somehow make mapping between which div is clicked 
  // and which point in two D array defines that
  
  console.log( getPair(mat.width,mat.height,69));
  const [cells, setCells] = React.useState([]);
  React.useEffect(() => {
    console.log("rendered");
    console.log(dimensions)
    console.log(width);
    setCells(allNewCells);
    setMat(calcMat);
  }, [dimensions]);
  console.log(dimensions);
  function allNewCells() {
    let temp = [];
    for (let i = 0; i < cnt; ++i) {
      temp.push(
        <Cells
          key={i+1}
          style={style}
          id={i+1}
        /> 
      );
    }
    return temp;
  }
  function getPair( width, height, id){
    let x = id % width;
    let y = Math.floor(id/height);
    return [x,y];
  } 
  function getId( width, height, i, j){
    return i*width + width*j
  }
  return (
    <>
      <Header />
      <Container 
        containerRef={containerRef}
        cells={cells}
      />
    </>
  );
} 