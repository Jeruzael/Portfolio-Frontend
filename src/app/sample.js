'use client';

import styles from '../css/sample.module.css'
import { persons, males } from '@/data/persons'
import {Button, Carousel} from '../components/components'
import { useState } from 'react';


function Profile({w = 100, h = 100}){
    return(
        <>
            <div className={styles.Profile}>
                <img src="/assets/ancientQueen1.jpg" alt="Queen" width={w} height={h}></img>
            </div>
        </>
    )
}

function Personlist({data}){
    return(
        <>
            <div>
                <h3>Persons</h3>
                <ol>
                    {data}
                </ol>
            </div>
        </>
    )
}

export default function Test({children}){
    const name = "Levada"
    const listPersons = persons.female.map(p => <li>{p}</li>)
    const images = ['/assets/18.jpeg','/assets/19.jpeg','/assets/22.jpeg']
    const [index, setIndex] = useState(0)

    function handleClick(){
        if(index == 2){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }

    return (
        <>
            <div>
                <h1>{name} is the name of the queen</h1>
                <Profile
                    w={300}
                    h={300}
                />
                <p style={{
                    color: 'rgba(0,0,0,0.5)'
                }}>{name} is a queen of dengrosia. Daughter of late king sanaabs and late queen braakud</p>
                <div>
                    {children}
                </div>
                <Personlist data={listPersons}/>
            </div>
            <Button />
            <Carousel img={images[index]}/>
            <button onClick={handleClick}>Next</button>
        </>
    )
}