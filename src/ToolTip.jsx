import React from "react";

const ToolTip = (props) => {

    const show = props.show;
    const position = props.position;
    
console.log(props.position)
    return (
        <>
            <div style={{color:'black'}}>
            {/* <div style={{color:'black'}}>{show}</div>
                <div>{position}</div> */}
               
                {props.position}
            </div>
        </>
  );
};

export default ToolTip;
