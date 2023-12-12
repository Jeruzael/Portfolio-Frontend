'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import { 
  Bio,
  BioCont, 
  Deck,
  DeckCard,
  Button,
  Error,
  Success
} from '@/components/components'

const Show = (b) => {
  if(b){
    return <Success>Success</Success>
  }else{
    return <Error>Invalid</Error>
  }
}


export default function Home() {
  const [test, setTest] = useState(true)
  const [pos, setPos] = useState({x: 20, y: 20})
  const Checker = () => {
    if(test === true){
      setTest(false)
    }else{
      setTest(true)
    }
  }

  const Ball = () => {
    return(
      <>
        <div onPointerMove={
          e => {
            setPos({
              x: e.clientX,
              y: e.clientY
            });
            
          }
        } style={{
          position: "absolute",
          left: `0px`,
          top: `0px`,        
          width: "50%",
          height: "50%",          
          border: "1px solid red"
        }}>
          <div style={{
            position: "absolute",
            left: `${pos.x/3}px`,
            top: `${pos.y/3}px`,
            width: "20%",
            height: "20%",
            backgroundColor: "#88aa96",
            border: "1px solid red",                        
            borderRadius: "50%"
          }}>
  
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Bio>
        <BioCont>
          <p>Hi! I'm</p>
          <h1>JERUZAEL DUMALE</h1>
          <p>DESIGNER/DEVELOPER</p>
          <p>I’m a full-stack developer from the Philippines. I design and
engineer web applications based on the highest standards.
I implement new technologies that help your product
stand out to competitors.</p>
        </BioCont>
      </Bio>
      <Deck>
        <DeckCard>
          <h1>Sample: {`${test}`}</h1>
          {Show(test)}
          <Button onHit={()=>{Checker()}}>Test</Button>
        </DeckCard>
        
      </Deck>
    </>
  )
}
