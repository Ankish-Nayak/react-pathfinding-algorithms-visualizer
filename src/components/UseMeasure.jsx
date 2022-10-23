import React from "react"
export default function useMeasure(ref) {
    const [ dimensions, setDimensions] = React.useState({
        width: 0,
        height: 0
    });
    React.useLayoutEffect(()=>{
        const { width, height} = ref.current.getBoundingClientRect();
        setDimensions({
            width: width,
            height: height
        });
    },[ref.current]);
    return dimensions;
}