import React, { useState } from 'react'

export default function Burger() {
  const [price, SetPrice] = useState(10);


  const [chicken, SetChicken] = useState('');
 
  const [chese, SetChese] = useState('');
  const [meat, SetMeat] = useState('');
  const [becan, SetBecan] = useState('');

  const [chickenCount, setChickenCount] = useState(0);
  const [meatCount, setMeatCount] = useState(0);
  const [cheseCount, setCheseCount] = useState(0);
  const [becanCount, setBecanCount] = useState(0);


  const [chickenAdded, SetChickenAdded] = useState(false)
  const [becanAdded, SetBecanAdded] = useState(false)
  const [cheseAdded, SetCheseAdded] = useState(false)
  const [meatAdded, SetMeatAdded] = useState(false)



  const cheseprice = 5;
  const meatprice = 10;
  const becanprice = 15;
  const cheickenprice = 20;


  function chesebtnmorre() {
    SetPrice(price + cheseprice)
    SetCheseAdded(true);
    SetChese(prevChese => prevChese + ' chese');
    setCheseCount(cheseCount + 1);
  }


  function chesebtnless() {
    if (cheseAdded) {
      const cheseArray = chese.split(' ');
   
      const lastCheseIndex = cheseArray.lastIndexOf('chese');
  
     
      if (lastCheseIndex !== -1) {
    
        SetPrice(price - cheseprice);
        
     
        cheseArray.splice(lastCheseIndex, 1);
        const updatedCheseString = cheseArray.join(' ');
        SetChese(updatedCheseString);
        
       
        const newCheseCount = cheseArray.filter(item => item === 'chese').length;
        setCheseCount(newCheseCount);
      }
  
      
      if (cheseCount === 1) {
        
        SetCheseAdded(false);
      }
    }
  }


  function chickenbtnmorre() {
    SetChickenAdded(true);
    SetPrice(price + cheickenprice)
    setChickenCount(chickenCount + 1);
    SetChicken(prevChicken => prevChicken + ' chicken');
  }


  function chickenbtnless() {
    if (chickenAdded) {
      const chickenArray = chicken.split(' ');
   
      const lastChickenIndex = chickenArray.lastIndexOf('chicken');
  
     
      if (lastChickenIndex !== -1) {
    
        SetPrice(price - cheickenprice);
        
     
        chickenArray.splice(lastChickenIndex, 1);
        const updatedChickenString = chickenArray.join(' ');
        SetChicken(updatedChickenString);
        
       
        const newChickenCount = chickenArray.filter(item => item === 'chicken').length;
        setChickenCount(newChickenCount);
      }
  
      
      if (chickenCount === 1) {
        
        SetChickenAdded(false);
      }
    }
  }

  function meatbtnmorre() {
     SetMeatAdded(true);
  
    setMeatCount(meatCount + 1);
    SetPrice(price + meatprice)
    SetMeat(prevMeat => prevMeat + ' meat');
  }


  function meatbtnless() {
    if (meatAdded) {
      const meatArray = meat.split(' ');
   
      const lastMeatIndex = meatArray.lastIndexOf('meat');
  
     
      if (lastMeatIndex !== -1) {
    
        SetPrice(price - meatprice);
        
     
        meatArray.splice(lastMeatIndex, 1);
        const updatedMeatString = meatArray.join(' ');
        SetMeat(updatedMeatString);
        
       
        const newMeatCount = meatArray.filter(item => item === 'meat').length;
        setMeatCount(newMeatCount);
      }
  
      
      if (meatCount === 1) {
        
        SetMeatAdded(false);
      }
    }
  }

  function becanbtnmorre() {
    SetBecanAdded(true);
  
    setBecanCount(becanCount + 1);
   
    SetPrice(price + becanprice)
    SetBecan(prevBecan => prevBecan + ' becan');
  }


  function becanbtnless() {
    if (becanAdded) {
      const becanArray = becan.split(' ');
   
      const lastBecanIndex = becanArray.lastIndexOf('becan');
  
     
      if (lastBecanIndex !== -1) {
    
        SetPrice(price - becanprice);
        
     
        becanArray.splice(lastBecanIndex, 1);
        const updatedBecanString = becanArray.join(' ');
        SetBecan(updatedBecanString);
        
       
        const newBecanCount = becanArray.filter(item => item === 'becan').length;
        setBecanCount(newBecanCount);
      }
  
      
      if (becanCount === 1) {
        
        SetBecanAdded(false);
      }
    }
  }


  function placeorder(){
    const modalContent = `Meat Count: ${meatCount}, Bacon Count: ${becanCount}, Total Price: ${price},chese count:${cheseCount}`;
    alert(modalContent); 
  }



  return (
    <div>
      <div className='maindiv'>
        <div className='updiv'>

        </div>
        <h1>{chicken}</h1>
        <h1>{meat}</h1>
        <h1>{becan}</h1>
        <h1>{chese}</h1>

        <div className='downdiv'>

        </div>
        <h1>current price</h1><h2>{price}</h2>
        <p>Chicken Added: {chickenCount} times</p>
        <p>Chese Added: {cheseCount} times</p>
        <p>becan Added: {becanCount} times</p>
        <p>meat Added: {meatCount} times</p>

        <div className='btndiv'>
          <h1>chese</h1>

          <button onClick={chesebtnless}>less</button>
          <button onClick={chesebtnmorre}>more</button>
        </div>

        <div className='btndiv'>
          <h1>becan</h1>

          <button onClick={becanbtnless}>less</button>
          <button onClick={becanbtnmorre}>more</button>
        </div>
        <div className='btndiv'>
          <h1>meat</h1>

          <button onClick={meatbtnless}>less</button>
          <button onClick={meatbtnmorre}>more</button>
        </div>
        <div className='btndiv'>
          <h1>chicken</h1>

          <button onClick={chickenbtnless}>less</button>
          <button onClick={chickenbtnmorre}>more</button>
        </div>
        <button onClick={placeorder}>place order</button>
      </div>
    </div>
  )
}
