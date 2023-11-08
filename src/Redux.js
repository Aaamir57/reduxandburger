import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './action/index';

export default function Redux() {
    const myState=useSelector((state)=> state.changeTheNumber);
    const dispatch=useDispatch()
  return (
    <div>
       <a onClick={()=>dispatch(incNumber(5))}> <span>+</span></a>
     
     <input name='quantity' type='text' className='quantity_inut' value={myState}/> 
     <a onClick={()=>dispatch(decNumber())}> <span>-</span></a>
    </div>
  )
}
