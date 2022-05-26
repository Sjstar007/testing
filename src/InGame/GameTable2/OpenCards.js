import React, {Component} from "react";
import CardData from "./cardData";
import arrayShuffle from "array-shuffle";
import "./main.css";

import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

// fake data generator

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
//     // some basic styles to make the items look a bit nicer
//     userSelect: "none", padding: grid * 2, margin: `0 ${grid}px 0 0`,
//
//     // styles we need to apply on draggables
//     ...draggableStyle,
// });

const getListStyle = (isDraggingOver) => ({
    display: "flex", padding: grid,
});

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], cards: arrayShuffle(CardData).splice(0, 13),
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const items = reorder(this.state.items, result.source.index, result.destination.index);

        this.setState({
            items,
        });
    }

    componentDidMount() {
        let cardType = ["❤", "♣", "♦", "♠"];
        let concat = [];
        for (let type of cardType) {
            let cardSet = [];
            for (let card of this.state.cards) {
                if (card.icon === type) {
                    cardSet.push(card);
                }
            }
            let sortedSet = cardSet.sort((a, b) => a.index - b.index);
            concat.push(sortedSet);
        }
        // setOpenCardMainPlayer(concat.flat());
        console.log(concat);
        this.setState({
            items: concat,
        });
    }

    selectCard(card) {
        let concat = [];
        for (let item of this.state.items) {
            let selectCard = item.map((data) => {
                if (data.icon === card.icon && data.index === card.index) {
                    data.isSelected = !data.isSelected;
                }
                return data;
            });
            concat.push(selectCard)
        }
        console.log(concat)
        this.setState({
            items: concat
        })
    };


    getCards(item, provided) {
        console.log(item.isSelected)
        return (<div
            className={item.color === "red" ? "openCard red" : "openCard "}
            style={{
                background: item.isSelected && "lightgrey"
            }}
            onClick={() => this.selectCard(item)}
            draggable="true"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
        >
            <span className="number top">{item.cardName}</span>
            <p className="suit_top">{item.icon}</p>
            <p className="suit">{item.icon}</p>
            <span className="number bottom">{item.cardName}</span>
        </div>);
    }

    showCards(items, provided) {
        return (<div className="openCards">
            {items.map((data) => this.getCards(data, provided))}
        </div>);
    }

    render() {
        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (<div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                >
                    {!!this.state.items.length && this.state.items.map((item, index) => (<Draggable
                        key={item.index + item.icon}
                        draggableId={`${item.index}+${item.icon}`}
                        index={index}
                    >
                        {(provided, snapshot) => this.showCards(item, provided)}
                    </Draggable>))}
                    {provided.placeholder}
                </div>)}
            </Droppable>
        </DragDropContext>);
    }
}
