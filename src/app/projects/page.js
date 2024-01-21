'use client';

import { useSelector, useDispatch } from "react-redux"
import {increment, decrement} from '@/features/counterSlice'
import { Provider } from "react-redux";

export default function Projects(){
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return(
        <>
            <div>
                <h1>Projects</h1>
                <p>{count}</p>
                <button onClick={()=>{dispatch(increment())}}>Increment</button>
            </div>
        </>
    )
}