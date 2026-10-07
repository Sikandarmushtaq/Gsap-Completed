import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useState } from 'react';

const App = () => {
   const  randomimg = gsap.utils.random(-500,500,100)
const rotate = gsap.utils.random(-360,360,30)
const rotateY = gsap.utils.random(-200,200,30)

const [Xvalue, setXvalue] = useState(0)
const [Yvalue, setYvalue] = useState(0)
const [rotatevalue, setrotatevalue] = useState(0)

const imgRef = useRef()

useGSAP(()=>{
  gsap.to(imgRef.current,{
    x:randomimg,
    y:rotate,
    duration:1,
    rotate:rotate,

  })
},[Xvalue,rotatevalue,Yvalue])
  return (
  
<main>
  <button onClick={()=>{
setXvalue(randomimg)
setrotatevalue(rotate)
setYvalue(rotateY)
  }}>Click To Help Me In Flying</button>
<img  ref = {imgRef} src="https://images.vexels.com/media/users/3/242241/isolated/preview/409d95bf597e130c6c1b1d2ac3f5dbf5-side-fly-geometric-color-stroke.png" alt="" />
</main>

   
  )
}

export default App