// import React,{useEffect} from "react";
// import './tablePool.css';
// import CardData from './cardData';

// function tablePool() {

//     const numbers = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K']
//     const suites = [{
//         icon: '❤',color: 'red'
//     },{
//         icon: '♣',color: 'balck'
//     },{
//         icon: '♦',color: 'red'
//     },{
//         icon: '♠',color: 'black'
//     }]

//   const showCards = (card) => {

//     return (
//       <div className={card.color =="red" ? "card red" : "card"} key={card.cardName}>
//         <span className="number top" >{card.cardName}</span>
//         {/* <span className="number top" style={{top : suit_idx*175+'px', left: number_idx*120+'px'}}>{number}</span> */}
//         <p className="suit">{card.icon}</p>
//         <span className="number bottom">{card.cardName}</span>
//       </div>
//     );
//   };

//   const combineTogether = () => {
//     const cards = document.querySelectorAll('.card');

//     cards.forEach(card =>{
//         card.style.top = '50%';
//         card.style.left = '50%';
// }
//         )
//   }
//     // const showCards = ({number,suit,suit_idx,number_idx}) =>{
//     //     const container = document.querySelectorAll('.container');
//     //     const  cardEl = document.createElement('div');
//     //     cardEl.classList.add('card');
//     //     console.log(cardEl)
//     //     if(suit.color === 'red'){
//     //         cardEl.classList.add('red');
//     //     }
//     //     cardEl.innerHTML = `
//     //         <span className="number top">${number}</span>
//     //         <p className="suit">${suit.icon}</p>
//     //         <span className="number bottom">${number}</span>
//     //     `;
//     //     container.appendChild(cardEl)
//     // }
//   return (
//     <div className="container" id="container">
//       {CardData.map((card,index) => showCards(card,index))}
//       {/* {
//         suites.map((suit,suit_idx) =>numbers.map((number,number_idx)=>showCards({number,suit,suit_idx,number_idx})))
//       } */}
//       <button onClick={combineTogether}>Shuffle</button>
//     </div>
//     // <div className="card red">
//     //     <span className="number top">A</span>
//     //     <p className="suit">A</p>
//     //     <span className="number bottom">A</span>
//     //   </div>

//   );
// }

// export default tablePool;

import React, { useState, useEffect } from "react";
import arrayShuffle from "array-shuffle";
import CardData from "./cardData";
import "./tablePool.css";
function TablePool() {
  const shuffled = arrayShuffle(CardData);
  const [userInHandCards, setUserInHandCards] = useState(
    shuffled.splice(0, 13)
  );
  // const [sortedInHandCards,setSortedInHandCards] = useState([])
  const showCards = (card) => {
    return (
      <div
        className={
          card.color == "red" ? "openCard red" : "openCard " 
        }
        draggable="true"
      >
        <span className="number top">{card.cardName}</span>
        <p className="suit_top">{card.icon}</p>
        <p className="suit">{card.icon}</p>
        <span className="number bottom">{card.cardName}</span>
      </div>
    );
  };
  const sortCards = (card) => {
  };

  //   drag-Card =================================================================
//   const list_items = document.querySelectorAll('.list-item');
//   const lists = document.querySelectorAll('.list');
  
//   let draggedItem = null;
  
//   for (let i = 0; i < list_items.length; i++) {
//       const item = list_items[i];
  
//       item.addEventListener('dragstart', function () {
//           draggedItem = item;
//           setTimeout(function () {
//               item.style.display = 'none';
//           }, 0)
//       });
  
//       item.addEventListener('dragend', function () {
//           setTimeout(function () {
//               draggedItem.style.display = 'block';
//               draggedItem = null;
//           }, 0);
//       })
  
//       for (let j = 0; j < lists.length; j ++) {
//           const list = lists[j];
  
//           list.addEventListener('dragover', function (e) {
//               e.preventDefault();
//           });
          
//           list.addEventListener('dragenter', function (e) {
//               e.preventDefault();
//               this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
//           });
  
//           list.addEventListener('dragleave', function (e) {
//               this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
//           });
  
//           list.addEventListener('drop', function (e) {
//               console.log('drop');
//               this.append(draggedItem);
//               this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
//           });
//       }
//   }
  // ======   ===========================================================
  useEffect(()=>{
        for(let i=1; i <= 35 ; i++){
            setTimeout(()=>{
                let seconds = document.getElementById("seconds");
                let ss = document.getElementById("ss")
                // s = s < 10 ? "0" + s : s;
                seconds.innerHTML = (35-i);
                ss.style.strokeDashoffset = i*12.5
            },i*1000)
        }
  },[])
//   setInterval(() => {

//     let seconds = document.getElementById("seconds");
//     let ss = document.getElementById("ss")
//     let s = new Date().getSeconds();
//     s = s < 10 ? "0" + s : s;
//     seconds.innerHTML = s;
//     ss.style.strokeDashoffset = 440- (440*s)/60
//   });
  return (
    <div className="tablePool">
      <div className="closedDeck">
        <div className="closedCard"></div>
        <div className="closedCard"></div>
        <div className="closedCard"></div>
        <div className="closedCard"></div>
      </div> 
      <div className="inCloumn">
        <div className="openCards">
          {userInHandCards.map((card) => showCards(card))}
        </div>

        {/* <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle">
              <img src="https://img.icons8.com/nolan/64/user.png" />
            </div>
          </div>
        </div> */}
         <div className="time">
         {/* <div className="circle" > */}
         <div className="circle" style={{"--clr ": "#04fc43"}}>
        <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70" id="ss"></circle>
        </svg>
        <div>
            <h6>4000$</h6>
        </div>
      </div>
      <div id="seconds">35</div>
      </div>

        {/* <div className="player1">
          <img src="https://img.icons8.com/nolan/64/user.png" />
          <span>player1</span>
          <button onClick={sortCards} className="sortBtn">
        sort
      </button>
        </div> */}
      </div>
      {/* <div className="mutliplayer">
        <div className="player2">
          <img src="https://img.icons8.com/nolan/64/user.png" />
          <span>player2</span>
        </div>
      </div> */}
    
    </div>
  );
}

export default TablePool;
