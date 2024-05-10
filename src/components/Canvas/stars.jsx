
//This component basically creats the animation of stars in the background.
import React, { useRef, Suspense, useState } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import styled from "styled-components"
import { PointMaterial, Points, Preload } from '@react-three/drei'
import * as random from "maath/random/dist/maath-random.esm"


const StyledCanvasWrapper = styled.div`
width: 100%;
height: auto;
position: absolute;
inset: 0;
`


function Stars(props) {
    const ref  = useRef()
    const [sphere] = useState( () => 
        random.inSphere(new Float32Array(5000), { radius: 1.2})
); 
//**For representing spheres in random manner *

 useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;  
    ref.current.rotation.y -= delta / 15;
 });

  return (
    <group rotation = {[0,0, Math.PI / 4]}>  {/**rotation dimentions*/}
        <Points ref={ref} positions={sphere} stride = {3} frustumCulled {...props} > 
            <PointMaterial
            transparent
            color = "#f272c8"
            size = {0.002}
            sizeAttenuation = {true}
            depthWrite={false}
            />   {/**Points in our wholeCanvas i.e. Stars */}
        </Points> {/*To make each star Point */}
    </group>
  )
}

//**Where the whole themed stars will be loaded*


const StyledStarCanvas = () => {

    return (
        <StyledCanvasWrapper>
            <Canvas camera ={{position: [0,0,1]}}>
                <Suspense fallback = {null}>
                    <Stars/> 
                </Suspense>
                <Preload all />
            </Canvas>
        </StyledCanvasWrapper>
    )

}

export default StyledStarCanvas

