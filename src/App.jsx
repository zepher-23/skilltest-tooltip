import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToolTip from './ToolTip';

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(null)

  
    const handleMouseMove = (event) => {
    const { clientX, clientY, target } = event;
    const elementRect = target.getBoundingClientRect();

    const topDistance = clientY - elementRect.top;
    const bottomDistance = elementRect.bottom - clientY;
    const leftDistance = clientX - elementRect.left;
    const rightDistance = elementRect.right - clientX;

    const minDistance = Math.min(topDistance, bottomDistance, leftDistance, rightDistance);

    if (minDistance === topDistance) {
      setPosition('top');
    } else if (minDistance === bottomDistance) {
      setPosition('bottom');
    } else if (minDistance === leftDistance) {
      setPosition('left');
    } else {
      setPosition('right');
    }

    setMousePosition({ x: clientX, y: clientY });
  };
  
  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setPosition(null)
  };

  return (
    <>
      <div onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave} style={{
        display: 'flex', cursor:'pointer',
        width: '300px', height: '100px', backgroundColor: '#F5F5F5', color: 'black',alignItems:'center',justifyContent:'center',  borderRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
}}>

        HOVER OVER ME!
        

      </div>
      {/* <p style={{ color: 'black' }}>Mouse Position: {mousePosition.x}, {mousePosition.y}</p> */}
<ToolTip  mousePosition={mousePosition} position={position} />
    </>
  )
}

export default App
