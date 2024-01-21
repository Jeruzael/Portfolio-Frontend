'use client'
import store from './store'
import { Provider } from 'react-redux'

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
import { useEffect, useRef } from 'react'



const Show = (b) => {
  if(b){
    return <Success>Success</Success>
  }else{
    return <Error>Invalid</Error>
  }
}

const hi = "Hi! I\'m"
const intro = "I\’m a frontend developer from the Philippines. I design and build web applications based on the highest standards Implementing new technologies that help your product stand out to competitors."

export default function Home() {
  const [test, setTest] = useState(false)  

  //cards
  /*const [cards, setCard] = useState({
    card1 : {
      rotation: 0,
      top: 8,
      left: 20,
      skew: 0,
      scaleX: 1,
      scaleY: 1
    },
    card2 : {
      rotation: 15,
      top: 12,
      left: 28,
      skew: 0,
      scaleX: 1,
      scaleY: 1
    },
    card3 : {
      rotation: -12,
      top: 7,
      left: 15,
      skew: 0,
      scaleX: 1,
      scaleY: 1
    },
    card4 : {
      rotation: -60,
      top: 25,
      left: 2,
      skew: 40,
      scaleX: 0.6,
      scaleY: 0.8
    },
    card5 : {
      rotation: 58,
      top: 25,
      left: 34,
      skew: -38,
      scaleX: 0.65,
      scaleY: 0.8
    }
  })*/

  const [cards, setCard] = useState({
    card1 : {
      rotation: 0,
      top: 8,
      left: 20,
      skew: 0,
      scaleX: 1,
      scaleY: 1
    },
    card2 : {
      rotation: 0,
      top: 8,
      left: 20,
      skew: 0,
      scaleX: 1,
      scaleY: 1
    },
    card3 : {
      rotation: 0,
      top: 8,
      left: 20,
      skew: 0,
      scaleX: 1,
      scaleY: 1
    },
    card4 : {
      rotation: 0,
      top: 8,
      left: 20,
      skew: 0,
      scaleX: 1,
      scaleY: 1
    },
    card5 : {
      rotation: 0,
      top: 8,
      left: 20,
      skew: 0,
      scaleX: 1,
      scaleY: 1
    }
  })

  const Checker = () => {
    if(test === true){
      console.log('Test is true')
    }else{
      setCard({
        ...cards,
        card1: {
          ...cards.card1,          
          top: 9,
          left: 20
        },
        card2: {
          ...cards.card2,
          rotation: 15,
          top: 12,
          left: 28
        },
        card3: {
          ...cards.card3,
          rotation: -12,
          top: 7,
          left: 15
        }, 
        card4: {
          rotation: -60,
          top: 23,
          left: 2,
          skew: 40,
          scaleX: 0.5,
          scaleY: 0.7
        },
        card5: {
          rotation: 58,
          top: 25,
          left: 34,
          skew: -38,
          scaleX: 0.65,
          scaleY: 0.8
        }
      })       
    }
  }

  const [testEff, setTestEff] = useState(true);  

  useEffect(()=>{
    if(testEff){
      Checker()      
    }
    
  },[testEff]);

  return (
    <>
      <Bio>
        <BioCont>
          <p>{hi}</p>
          <h1>JERUZAEL DUMALE</h1>
          <p>DESIGNER/DEVELOPER</p>
          <p>{intro}</p>
        </BioCont>
      </Bio>
      <Deck>
        <DeckCard 
          rotate={`${cards.card5.rotation}deg`} 
          top={`${cards.card5.top}vw`} 
          left={`${cards.card5.left}vw`} 
          skew={`${cards.card5.skew}deg`} 
          scaleX={`${cards.card5.scaleX}`} 
          scaleY={`${cards.card5.scaleY}`}>
          <h1>Sample: {`${test}`}</h1>
          {Show(test)}
          <Button onHit={()=>{Checker()}}>Test</Button>
        </DeckCard>

        <DeckCard 
          rotate={`${cards.card4.rotation}deg`} 
          top={`${cards.card4.top}vw`} 
          left={`${cards.card4.left}vw`} 
          skew={`${cards.card4.skew}deg`} 
          scaleX={`${cards.card4.scaleX}`} 
          scaleY={`${cards.card4.scaleY}`}>
          <h1>Sample: {`${test}`}</h1>
          {Show(test)}
          <Button onHit={()=>{Checker()}}>Test</Button>
        </DeckCard>
        
        <DeckCard 
        rotate={`${cards.card3.rotation}deg`} 
        top={`${cards.card3.top}vw`} 
        left={`${cards.card3.left}vw`} 
        skew={`${cards.card3.skew}deg`} 
        scaleX={`${cards.card3.scaleX}`} 
        scaleY={`${cards.card3.scaleY}`}>
          <h1>Sample: {`${test}`}</h1>
          {Show(test)}
          <Button onHit={()=>{Checker()}}>Test</Button>
        </DeckCard>
        
        <DeckCard 
          rotate={`${cards.card2.rotation}deg`} 
          top={`${cards.card2.top}vw`} 
          left={`${cards.card2.left}vw`} 
          skew={`${cards.card2.skew}deg`} 
          scaleX={`${cards.card2.scaleX}`} 
          scaleY={`${cards.card2.scaleY}`}>
          <h1>Sample: {`${test}`}</h1>
          {Show(test)}
          <Button onHit={()=>{Checker()}}>Test</Button>
        </DeckCard>

        <DeckCard 
          rotate={`${cards.card1.rotation}deg`} 
          top={`${cards.card1.top}vw`} 
          left={`${cards.card1.left}vw`} 
          skew={`${cards.card1.skew}deg`} 
          scaleX={`${cards.card1.scaleX}`} 
          scaleY={`${cards.card1.scaleY}`}>

          <h1>Sample: {`${test}`}</h1>

          {Show(test)}
          <Button onHit={()=>{Checker()}}>Test</Button>
        </DeckCard>
      </Deck>
    </>
  )
}
