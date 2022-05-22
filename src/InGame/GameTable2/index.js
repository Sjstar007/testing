import React, { useState, useEffect } from "react";
import "./main.css";
import CardData from "../GameTable/cardData";
import arrayShuffle from "array-shuffle";

function Index() {
  const shuffled = arrayShuffle(CardData);
  const [openCardMainPlayer, setOpenCardMainPlayer] = useState(
    shuffled.splice(0, 13)
  );

  const selectCard = (card) => {
    let selectCard = openCardMainPlayer.map((data) => {
      if (data.icon === card.icon && data.index === card.index) {
        data.isSelected = !data.isSelected;
      }
      return data;
    });
    setOpenCardMainPlayer(selectCard);
  };

  const showCards = (card) => {
    return (
      <div
        className={card.color == "red" ? "openCard red" : "openCard "}
        style={{ backgroundColor: card.isSelected && "lightgrey" }}
        onClick={() => selectCard(card)}
        draggable="true"
      >
        <span className="number top">{card.cardName}</span>
        <p className="suit_top">{card.icon}</p>
        <p className="suit">{card.icon}</p>
        <span className="number bottom">{card.cardName}</span>
      </div>
    );
  };

  const sortCards = () => {
    let cardType = ["❤", "♣", "♦", "♠"];
    let concat = [];
    for (let type of cardType) {
      let cardSet = [];
      for (let card of openCardMainPlayer) {
        if (card.icon === type) {
          cardSet.push(card);
        }
      }
      let sortedSet = cardSet.sort((a, b) => a.index - b.index);
      concat.push(sortedSet);
    }
    setOpenCardMainPlayer(concat.flat());
  };

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
  return (
    <div className="main">
      <div className="GameNav">
        <div className="AddCash">
          <span>Win Real Cash Prizes!</span>
          <button type="button" className="">
            Add Cash
          </button>
        </div>
        <div className="TableInfo">
          <div className="gameId">
            <h3>#72964782364</h3>
          </div>
          <div className="RummyInfo">Points Rummy - 2 Deck</div>
          <div className="RummyChips">
            <h4>
              <span>svg</span>10
            </h4>
          </div>
        </div>
        <div className="Settings">
          <button className="">Settings</button>
        </div>
        <div className="Exit">
          <h5>Leave Table</h5>
        </div>
      </div>
      <div className="TablePool">
        <div className="multiPlayer"></div>
        <div className="cardSection">
          <div className="deckSetion">
            <div className="closedDeck">
            <div className="closedCard"></div>
                <div className="closedCard"></div>
                <div className="closedCard"></div>
                <div className="closedCard"></div>
            </div> 
            <div className="openDeck"></div>
            <div className="finishSlot">
                <h3>Finish Slot</h3>
            </div>
          </div>
          <div className="openCards">
            {openCardMainPlayer.map((card) => showCards(card))}
          </div>
        </div>
        <div className="singlePlayer">
          <div className="time">
            {/* <div className="circle" > */}
            <div className="circle" style={{ "--clr ": "#04fc43" }}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="ss"></circle>
              </svg>
              <div>
                <img src="https://img.icons8.com/nolan/64/user.png" />
                <h6>4000$</h6>
              </div>
            </div>
            <div id="seconds">35</div>
          </div>
          <div className="playerOptions">
            <button onClick={sortCards} className="sortbtn">Sort</button>
            <button  className="dropbtn">Drop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
