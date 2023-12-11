import Image from 'next/image'
import styles from './page.module.css'
import { 
  Bio,
  BioCont, 
  Deck,
  DeckCard 
} from '@/components/components'


export default function Home() {
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
          <h1>sample</h1>
        </DeckCard>
      </Deck>
    </>
  )
}
