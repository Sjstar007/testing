import React ,{ useState }from 'react'
import './main.css';
import CardData from '../GameTable/cardData';
import arrayShuffle from 'array-shuffle';

function Index() {
    const shuffled = arrayShuffle(CardData);
    const [openCardMainPlayer, setOpenCardMainPlayer] = useState(shuffled.splice(0, 13));


    const selectCard = (card) =>{
         let selectCard = openCardMainPlayer.map((data) => {
            if(data.icon === card.icon && data.index === card.index){
                data.isSelected = !data.isSelected;
            }
            return data
        })
        setOpenCardMainPlayer(selectCard)
    }

    const showCards = (card) => {
        return (
          <div
            className={
              card.color == "red" ? "openCard red" : "openCard " 
            }
            style={{backgroundColor: card.isSelected && "lightgrey"}}
            onClick={()=> selectCard(card)}
            draggable="true"
          >
            <span className="number top">{card.cardName}</span>
            <p className="suit_top">{card.icon}</p>
            <p className="suit">{card.icon}</p>
            <span className="number bottom">{card.cardName}</span>
          </div>
        );
      };

      const sortCards = () =>{
          let cardType = ['❤','♣','♦','♠'];
          let concat = [];
          for(let type of cardType){
              let cardSet = [];
              for(let card of openCardMainPlayer){
                  if(card.icon === type){
                    cardSet.push(card)
                  }
              }
              let sortedSet = cardSet.sort((a,b) => a.index-b.index)
              concat.push(sortedSet);
          }
         setOpenCardMainPlayer(concat.flat());
      }
  return (
    <div className='main'>
    <div className='GameNav'>
        <div className='AddCash'>
            <span>Win Real Cash Prizes!</span>
            <button type='button' className=''>Add Cash</button>
        </div>
        <div className='TableInfo'>
            <div className='gameId'>
                <h3>#72964782364</h3>
            </div>
            <div className='RummyInfo'>
                Points Rummy - 2 Deck
            </div>
            <div className='RummyChips'>
                <h4><span>svg</span>10</h4>
            </div>
        </div>
        <div className='Settings'>
            <button className=''>Settings</button>
        </div>
        <div className='Exit'>
            <h5>Leave Table</h5>
        </div>
    </div>
    <div className='TablePool'>
        <div className='multiPlayer'></div>
        <div className='cardSection'>
            <div className='deckSetion'>

            </div>
            <div className='openCards'>
                {openCardMainPlayer.map((card) => showCards(card))}
            </div>
            <button onClick={sortCards}>Sort</button>
        </div>
        <div className='singlePlayer'></div>
    </div>
</div>
  )
}

export default Index