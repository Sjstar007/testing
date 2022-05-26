// const CardData = [//heart
//     {
//         cardName: "A", icon: "❤", color: "red", index: 13, isSelected: false,
//     }, {
//         cardName: "2", icon: "❤", color: "red", index: 1, isSelected: false
//     }, {
//         cardName: "3", icon: "❤", color: "red", index: 2, isSelected: false
//     }, {
//         cardName: "4", icon: "❤", color: "red", index: 3, isSelected: false
//     }, {
//         cardName: "5", icon: "❤", color: "red", index: 4, isSelected: false
//     }, {
//         cardName: "6", icon: "❤", color: "red", index: 5, isSelected: false
//     }, {
//         cardName: "7", icon: "❤", color: "red", index: 6, isSelected: false
//     }, {
//         cardName: "8", icon: "❤", color: "red", index: 7, isSelected: false
//     }, {
//         cardName: "9", icon: "❤", color: "red", index: 8, isSelected: false
//     }, {
//         cardName: "10", icon: "❤", color: "red", index: 9, isSelected: false
//     }, {
//         cardName: "J", icon: "❤", color: "red", index: 10, isSelected: false,
//     }, {
//         cardName: "Q", icon: "❤", color: "red", index: 11, isSelected: false,
//     }, {
//         cardName: "K", icon: "❤", color: "red", index: 12, isSelected: false,
//     }, // club
//
//     {
//         cardName: "A", icon: "♣", color: "black", index: 13, isSelected: false,
//     }, {
//         cardName: "2", icon: "♣", color: "black", index: 1, isSelected: false
//     }, {
//         cardName: "3", icon: "♣", color: "black", index: 2, isSelected: false
//     }, {
//         cardName: "4", icon: "♣", color: "black", index: 3, isSelected: false
//     }, {
//         cardName: "5", icon: "♣", color: "black", index: 4, isSelected: false
//     }, {
//         cardName: "6", icon: "♣", color: "black", index: 5, isSelected: false
//     }, {
//         cardName: "7", icon: "♣", color: "black", index: 6, isSelected: false
//     }, {
//         cardName: "8", icon: "♣", color: "black", index: 7, isSelected: false
//     }, {
//         cardName: "9", icon: "♣", color: "black", index: 8, isSelected: false
//     }, {
//         cardName: "10", icon: "♣", color: "black", index: 9, isSelected: false
//     }, {
//         cardName: "J", icon: "♣", color: "black", index: 10, isSelected: false,
//     }, {
//         cardName: "Q", icon: "♣", color: "black", index: 11, isSelected: false,
//     }, {
//         cardName: "K", icon: "♣", color: "black", index: 12, isSelected: false,
//     },
//
//     //dimond
//     {
//         cardName: "A", icon: "♦", color: "red", index: 13, isSelected: false,
//     }, {
//         cardName: "2", icon: "♦", color: "red",
//
//         index: 1, isSelected: false
//     }, {
//         cardName: "3", icon: "♦", color: "red",
//
//         index: 2, isSelected: false
//     }, {
//         cardName: "4", icon: "♦", color: "red",
//
//         index: 3, isSelected: false
//     }, {
//         cardName: "5", icon: "♦", color: "red",
//
//         index: 4, isSelected: false
//     }, {
//         cardName: "6", icon: "♦", color: "red",
//
//         index: 5, isSelected: false
//     }, {
//         cardName: "7", icon: "♦", color: "red",
//
//         index: 6, isSelected: false
//     }, {
//         cardName: "8", icon: "♦", color: "red",
//
//         index: 7, isSelected: false
//     }, {
//         cardName: "9", icon: "♦", color: "red",
//
//         index: 8, isSelected: false
//     }, {
//         cardName: "10", icon: "♦", color: "red",
//
//         index: 9, isSelected: false
//     }, {
//         cardName: "J", icon: "♦", color: "red",
//
//         index: 10, isSelected: false,
//     }, {
//         cardName: "Q", icon: "♦", color: "red",
//
//         index: 11, isSelected: false,
//     }, {
//         cardName: "K", icon: "♦", color: "red", index: 12, isSelected: false,
//     }, /// -=========
//
//     {
//         cardName: "A", icon: "♠", color: "black", index: 13, isSelected: false,
//     }, {
//         cardName: "2", icon: "♠", color: "black", index: 1, isSelected: false
//     }, {
//         cardName: "3", icon: "♠", color: "black", index: 2, isSelected: false
//     }, {
//         cardName: "4", icon: "♠", color: "black", index: 3, isSelected: false
//     }, {
//         cardName: "5", icon: "♠", color: "black", index: 4, isSelected: false
//     }, {
//         cardName: "6", icon: "♠", color: "black", index: 5, isSelected: false
//     }, {
//         cardName: "7", icon: "♠", color: "black", index: 6, isSelected: false
//     }, {
//         cardName: "8", icon: "♠", color: "black", index: 7, isSelected: false
//     }, {
//         cardName: "9", icon: "♠", color: "black", index: 8, isSelected: false
//     }, {
//         cardName: "10", icon: "♠", color: "black", index: 9, isSelected: false
//     }, {
//         cardName: "J", icon: "♠", color: "black", index: 10, isSelected: false,
//     }, {
//         cardName: "Q", icon: "♠", color: "black", index: 11, isSelected: false,
//     }, {
//         cardName: "K", icon: "♠", color: "black", index: 12, isSelected: false,
//     },];
//

// export default CardData;
//

const cardType = ["❤", "♣", "♦", "♠"];
const cardNumber = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardDataArray = [];
const shuffleArray = require('array-shuffle')

var colour = "balck";
const createCardData = () => {
    for (let type of cardType) {
        let idx = 0;
        for (let number of cardNumber) {
            if (type === '❤' || type === '♦') {
                colour = "red";
            } else {
                colour = "black"
            }
            let obj = {
                cardName: number, icon: type, color: colour, index: idx, isSelected: false, id: type + number
            }
            cardDataArray.push(obj)
            idx++;
        }
    }

}
console.log(cardDataArray)
createCardData()

module.exports = {
    cardDataArray, cardType, cardNumber
}


// componentDidMount() {
// this.getObjectForCards(cardDataArray)
// let playerCard = cardDataArray.splice(0,13)
// let cardType = ["❤", "♣", "♦", "♠"];
// let concat = [];
// for (let type of cardType) {
//     let cardSet = [];
//     for (let card of this.state.tasks) {
//         if (card.icon === type) {
//             cardSet.push(card);
//         }
//     }
//     let sortedSet = cardSet.sort((a, b) => a.index - b.index);
//     concat.push(sortedSet);
// }
// // setOpenCardMainPlayer(concat.flat());
// console.log(concat);
// this.setState({
//     items: concat,
// });
// }
