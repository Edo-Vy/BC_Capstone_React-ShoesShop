import React, { useState } from 'react'

export default function ResponsiveItem() {

    const [screen, setScreen] = useState({
        width : window.innerWidth,
        height : window.innerHeight,
    })

    if (screen < 768){
        // load component mobile
    }
    // Load bình thường
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
  return (
    <div>ResponsiveItem</div>
  )
}
