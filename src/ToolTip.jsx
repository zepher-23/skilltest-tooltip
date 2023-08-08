import React from "react";

const ToolTip = (props) => {
    const mousePosition = props.mousePosition
    const positionRelativeToElement = props.position
    const tooltipStyle = {
    display: 'flex',
    position: 'absolute',
    color: 'white',
    backgroundColor: '#1B1B1B',
    width: '150px',
    height: '40px',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  if (positionRelativeToElement === 'top') {
    tooltipStyle.top = `${mousePosition.y - 60}px`;
    tooltipStyle.left = `${mousePosition.x - 75}px`;
  } else if (positionRelativeToElement === 'bottom') {
    tooltipStyle.top = `${mousePosition.y + 20}px`;
    tooltipStyle.left = `${mousePosition.x - 75}px`;
  } else if (positionRelativeToElement === 'left') {
    tooltipStyle.top = `${mousePosition.y - 20}px`;
    tooltipStyle.left = `${mousePosition.x - 175}px`;
  } else if (positionRelativeToElement === 'right') {
    tooltipStyle.top = `${mousePosition.y - 20}px`;
    tooltipStyle.left = `${mousePosition.x + 25}px`;
  } else {
    tooltipStyle.display = 'none';
  }

    
    
    return (
        <>
            <div style={tooltipStyle} >
            I am a  tooltip
               
                
            </div>
        </>
  );
};

export default ToolTip;
