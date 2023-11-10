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


  const [becanImage, SetBecanImage] = useState(false);

  const [becanImageSrc, SetBecanImageSrc] = useState('./becan.jpg');
  const [meatImageSrc, SetMeatImageSrc] = useState('./meat.jpg');
  const [chickenImageSrc, SetChickenImageSrc] = useState('./salad.jpg');
  const [cheeseImageSrc, SetCheeseImageSrc] = useState('./cheese.jpg');


  const cheseprice = 5;
  const meatprice = 10;
  const becanprice = 15;
  const cheickenprice = 20;


  function chesebtnmorre() {
    SetPrice(price + cheseprice);
    SetCheseAdded(true);
    setCheseCount(cheseCount + 1);

    SetChese(prevChese => [
      ...prevChese,
      <img key={`cheeseImage_${cheseCount}`} src={cheeseImageSrc} alt="Cheese" />,
      <br key={`newLine_${cheseCount}`} />,
    ]);
  }

  function chesebtnless() {
    if (cheseAdded) {
      const cheseArray = [...chese];


      const lastCheeseIndex = cheseArray.findIndex(item => {
        if (React.isValidElement(item)) {
          const imgSrc = item.props.src;
          return imgSrc && imgSrc === './cheese.jpg';
        }
        return false;
      });

      if (lastCheeseIndex !== -1) {

        cheseArray.splice(lastCheeseIndex, 2);


        SetChese(cheseArray);


        setCheseCount(cheseCount - 1);


        if (cheseCount === 1) {
          SetCheseAdded(false);
        }


        SetPrice(price - cheseprice);
      }
    }
  }


  function chickenbtnmorre() {
    SetChickenAdded(true);
    SetPrice(price + cheickenprice);
    setChickenCount(chickenCount + 1);


    SetChicken(prevChicken => [
      ...prevChicken,
      <img key={`chickenImage_${chickenCount}`} src={chickenImageSrc} alt="Chicken" />,
      <br key={`newLine_${chickenCount}`} />,
    ]);
  }


  function chickenbtnless() {
    if (chickenAdded) {
      const chickenArray = [...chicken];

      const lastChickenIndex = chickenArray.findIndex(item => {
        if (React.isValidElement(item)) {
          const imgSrc = item.props.src;
          return imgSrc && imgSrc === './salad.jpg';
        }
        return false;
      });



      if (lastChickenIndex !== -1) {

        chickenArray.splice(lastChickenIndex, 2);

        SetChicken(chickenArray);


        setChickenCount(chickenCount - 1);


        if (chickenCount === 1) {
          SetChickenAdded(false);
        }


        SetPrice(price - cheickenprice);
      }
    }
  }

  function meatbtnmorre() {
    SetMeatAdded(true);


    SetMeat(prevMeat => [
      ...prevMeat,
      <img key={`meatImage_${meatCount}`} src={meatImageSrc} alt="Meat" />,
      <br key={`newLine_${meatCount}`} />,
    ]);


    setMeatCount(meatCount + 1);
    SetPrice(price + meatprice);
  }
  function meatbtnless() {
    if (meatAdded) {
      const meatArray = [...meat];


      const lastMeatIndex = meatArray.findIndex(item => {
        if (React.isValidElement(item)) {
          const imgSrc = item.props.src;
          return imgSrc && imgSrc === './meat.jpg';
        }
        return false;
      });



      if (lastMeatIndex !== -1) {

        meatArray.splice(lastMeatIndex, 2);


        SetMeat(meatArray);


        setMeatCount(meatCount - 1);


        if (meatCount === 1) {
          SetMeatAdded(false);
        }

        SetPrice(price - meatprice);
      }
    }
  }




  function becanbtnmorre() {
    SetBecanAdded(true);
    SetBecan(prevBecan => [
      ...prevBecan,
      <img key={`becanImage_${becanCount}`} src={becanImageSrc} alt="Becan" />,
      <br key={`newLine_${becanCount}`} />,
    ]);


    setBecanCount(becanCount + 1);
    SetPrice(price + becanprice);
  }

  function becanbtnless() {
    if (becanAdded) {
      const becanArray = [...becan];


      const lastBecanIndex = becanArray.findIndex(item => {
        if (React.isValidElement(item)) {
          const imgSrc = item.props.src;
          return imgSrc && imgSrc === './becan.jpg';
        }
        return false;
      });

      if (lastBecanIndex !== -1) {

        becanArray.splice(lastBecanIndex, 2);


        SetBecan(becanArray);


        setBecanCount(becanCount - 1);


        if (becanCount === 1) {
          SetBecanAdded(false);
        }


        SetPrice(price - becanprice);
      }
    }
  }






  function placeorder() {


    // const modalContent = `Meat Count: ${meatCount}, Bacon Count: ${becanCount}, Total Price: ${price}, Cheese Count: ${cheseCount}`;

    const modal = document.getElementById('myModal');
    const modalContentElement = document.getElementById('modalContent');
    modalContentElement.innerHTML = modal;
    modal.style.display = 'block';
  }


  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div class="navbar">
        <img src="./burger-logo.b8503d26.png" alt="Logo" />
        <div class="navbar-right">
          <a href="#home">Home</a>
          <a href="#about">Sign in</a>
        </div>
      </div>
      <div className='maindiv'>
        <div className='updivmain' id="updivmain">

          <img src='./top.jpg' />

          <h1>{chicken}</h1>
          <h1>{meat}</h1>
          <h1>{becan}</h1>
          <h1>{chese}</h1>


          <img src='./bottom.jpg' />

        </div>
        <div className='countmain'>
          <p>current price ${price}</p>
          <p>salad Added: {chickenCount} times</p>
          <p>Chese Added: {cheseCount} times</p>
          <p>becan Added: {becanCount} times</p>
          <p>meat Added: {meatCount} times</p>
        </div>

        <div className='mainbtn2'>

          <p>current price ${price}</p>

          <div className='btndiv'>

            <h1>chese</h1>
            <div className='lessmore'>
              <button onClick={chesebtnless} className='less'>less</button>
              <button onClick={chesebtnmorre} className='more'>more</button>
            </div>
          </div>

          <div className='btndiv'>
            <h1>becan</h1>
            <div className='lessmore'>


              <button onClick={becanbtnless} className='less'>less</button>
              <button onClick={becanbtnmorre} className='more'>more</button>
            </div>
          </div>
          <div className='btndiv'>
            <h1>meat</h1>

            <div className='lessmore'>
              <button onClick={meatbtnless} className='less'>less</button>
              <button onClick={meatbtnmorre} className='more'>more</button>
            </div>
          </div>
          <div className='btndiv'>
            <h1>salad</h1>
            <div className='lessmore'>
              <button onClick={chickenbtnless} className='less'>less</button>
              <button onClick={chickenbtnmorre} className='more'>more</button>
            </div>
          </div>
          <button onClick={openModal} className='signin'>placeorder</button>

          {modalVisible && (
            <div className="modal" id="myModal">
              <div className="modal-content">

                <div id="modalContent" className='modalcontents'>
                  <h1>Order Summary</h1>
                  <p>A delicious burger with the following ingredients:</p>


                  <ul>
                    <li>salad: {chickenCount} </li>
                    <li>Cheese: {cheseCount}</li>
                    <li>becan: {becanCount}</li>
                    <li>meat: {meatCount}</li>
                  </ul>
                  <p> $ {price}</p>
                  <button className='cancel' onClick={closeModal}><h1>CANCEL</h1></button>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>



    </div>
  )
}
