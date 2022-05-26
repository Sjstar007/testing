import React, {useEffect, useState} from "react";
import "./main.css";
import userData from './userData';
import Opencard from './OpenCards';
import Dnd from './dnd/dnd';

export default class Index extends React.Component {

    constructor() {
        super();
        this.state = {
            user: userData, currentPlayerChance: 0, totalPlayer: userData.length,
        }
    }

    setTimerForPlayer(playerInfo) {
        if (this.state.currentPlayerChance <= this.state.totalPlayer) {
            this.setState({
                currentPlayerChance: this.state.currentPlayerChance + 1
            })
        } else {
            this.setState({
                currentPlayerChance: 0
            })

        }
        for (let i = 1; i <= 35; i++) {
            setTimeout(() => {
                let seconds = document.getElementById(playerInfo.userPlayTime);
                let ss = document.getElementById(playerInfo.userName)
                seconds.innerHTML = (35 - i);
                ss.style.strokeDashoffset = i * 12.5
            }, i * 1000)
        }


    }

    componentDidMount() {
        setInterval(() => {
            this.setTimerForPlayer(this.state.user[this.state.currentPlayerChance])
        }, 35000)
    }

    getPlayer(user) {
        return (<div className="time" key={user.userId}>
            {/* <div className="circle" > */}
            <div className="circle" style={{"--clr ": "#04fc43"}}>
                <svg>
                    <circle cx="70" cy="70" r="70"/>
                    <circle cx="70" cy="70" r="70" id={user.userName}/>
                </svg>
                <div>
                    <img src="https://img.icons8.com/nolan/64/user.png"/>
                    <h5>{user.userName}</h5>
                    <h6>{user.userCash}$</h6>
                </div>
            </div>
            <div id={user.userPlayTime}>35</div>
        </div>)
    }

    render() {
        return (<div className="main">
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
                <div className="multiPlayer"/>
                <div className="cardSection">
                    <div className="deckSetion">
                        <div className="closedDeck">
                            <div className="closedCard"/>
                            <div className="closedCard"/>
                            <div className="closedCard"/>
                            <div className="closedCard"/>
                        </div>
                        <div className="openDeck"/>
                        <div className="finishSlot">
                            <h3>Finish Slot</h3>
                        </div>
                    </div>
                    {/* <div className="openCards"> */}
                    {/* {openCardMainPlayer.map((card) => showCards(card))} */}
                    {/*<Opencard/>*/}
                    <Dnd/>
                    {/* </div> */}
                </div>
                <div className="singlePlayer">
                    {!!userData.length && userData.map(user => this.getPlayer(user))}
                    <div className="playerOptions">
                        {/* <button onClick={sortCards} className="sortbtn">Sort</button> */}
                        <button className="dropbtn">Drop</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}

// export default Index;
