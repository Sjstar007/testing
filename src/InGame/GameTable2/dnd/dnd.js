import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import styled from 'styled-components'
import arrayShuffle from "array-shuffle";
import initialData from './initial-data'
import Column from './column'
import {cardType, cardNumber, cardDataArray} from '../cardData'
import '../main.css';

const Container = styled.div`
  display: flex;
`

export default class App extends React.Component {
    state = {
        tasks: this.getObjectForCards(arrayShuffle(cardDataArray).splice(0, 13)), columns: {
            '1': {
                id: '1', taskIds: []
                // taskIds: ['♣J','♦5','♠2', '♦3', '♣Q', '♠J']
            }, '2': {
                id: '2', taskIds: []
            }, '3': {
                id: '3', taskIds: []
            }, '4': {
                id: '4', taskIds: []
            }
        }, // Facilitate reordering of the columns
        columnOrder: ['1', '2', '3', '4']
    }

    onDragEnd = result => {
        const {destination, source, draggableId} = result

        if (!destination) {
            return
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }
        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start, taskIds: newTaskIds
            }
            const newState = {
                ...this.state, columns: {
                    ...this.state.columns, [newColumn.id]: newColumn
                }
            }
            this.setState(newState)
            return
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start, taskIds: startTaskIds
        }
        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish, taskIds: finishTaskIds
        }
        const newState = {
            ...this.state, columns: {
                ...this.state.columns, [newStart.id]: newStart, [newFinish.id]: newFinish
            }
        }
        console.log(newState)
        this.setState(newState)
    }

    getObjectForCards(cardarr) {
        var cardData = {};
        for (let arr of cardarr) {
            let cardicon = arr.icon
            let cardname = arr.cardName
            let key = cardicon + cardname
            cardData[key] = arr
        }
        return cardData
    }

    setColumns(concatarr) {
        var columnid = 1;
        var newState = {};
        for (let i of concatarr) {
            let crdid = [];
            for (let arr of i) {
                crdid.push(arr.id)
            }
            newState[columnid] = {
                id: `${columnid}`, taskIds: crdid
            }
            columnid++;
        }
        this.setState({
            ...this.state, columns: newState
        })
    }

    sortCards() {
        let cardType = ["❤", "♣", "♦", "♠"];
        let concat = [];
        for (let type of cardType) {
            let cardSet = {};
            for (let card in this.state.tasks) {
                if (this.state.tasks[card].icon === type) {
                    cardSet[card] = this.state.tasks[card]
                }
            }
            // console.log(cardSet)
            let sortedSet = Object.values(cardSet).sort((a, b) => a.index - b.index)
            concat.push(sortedSet);
        }
        this.setColumns(concat)
    }

    componentDidMount() {
        this.sortCards();
    }

    render() {
        return (<DragDropContext onDragEnd={this.onDragEnd}>
            <Container>
                {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId]
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
                    return (<div className="openCards">
                        <Column key={column.id} column={column} tasks={tasks}/>
                    </div>)
                })}
            </Container>
        </DragDropContext>)
    }
}
