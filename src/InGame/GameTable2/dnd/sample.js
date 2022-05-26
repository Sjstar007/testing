import React from 'react'
import ReactDOM from 'react-dom'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import  {cardType,cardNumber,cardDataArray} from '../cardData'
import initialData from './initial-data'
import arrayShuffle from "array-shuffle";

import Column from './column'

const Container = styled.div`
  display:flex;
`

export default class App extends React.Component {


    state ={
        tasks: this.getObjectForCards(this.shuffleCard),
        columns: {
            'column-0': {
                id: 'column-0',
                taskIds: ['♠5','♠3']
            },
            'column-1': {
                id: 'column-1',
                taskIds: []
            },
            'column-2': {
                id: 'column-2',
                taskIds: []
            },'column-3': {
                id: 'column-3',
                taskIds: []
            }
        },
        // Facilitate reordering of the columns
        columnOrder: ['column-0', 'column-1', 'column-2',"column-3"],
        counter : 0
    }


    onDragEnd = result => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            }

            this.setState(newState)
            return
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds
        }

        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        }
        this.setState(newState)
    }

    getObjectForCards(cardarr){
        var cardData = {};
        for(let arr of cardarr) {
            let cardicon = arr.icon
            let cardname = arr.cardName
            let key = cardicon + cardname
            cardData[key] = arr
        }
        return cardData
    }
    // setColumns(concatarr){
    //     for(let i=0;i<concatarr.length;i++){
    //         for(let arr of concatarr[i]){
    //
    //             this.setState({
    //                columns  : arr.icon+arr.cardName
    //             })
    //         }
    //     }
    // }
    // sortCards(){
    //     let cardType = ["❤", "♣", "♦", "♠"];
    //     let concat = [];
    //     for (let type of cardType) {
    //         let cardSet = [];
    //         for (let card of this.shuffleCard) {
    //             if (card.icon === type) {
    //                 cardSet.push(card);
    //             }
    //         }
    //         let sortedSet = cardSet.sort((a, b) => a.index - b.index);
    //         concat.push(sortedSet);
    //     }
    //     this.setColumns(concat)
    // }
    componentDidMount() {
        // this.sortCards()
        console.log(this.state)
    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Container>
                    {this.state.columnOrder.map(columnId => {
                        const column = this.state.columns[columnId]
                        const tasks = column.taskIds.map(
                            taskId => this.state.tasks[taskId]
                        )

                        return (
                            <Column key={column.id} column={column} tasks={tasks} />
                        )
                    })}
                </Container>
            </DragDropContext>
        )
    }
}
