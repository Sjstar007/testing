import React from 'react'
import styled from 'styled-components'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
`

export default class Task extends React.Component {
    render() {
        const isDragDisabled = this.props.task.id === ''
        return (

            <Draggable
                draggableId={this.props.task.id}
                index={this.props.index}
                isDragDisabled={isDragDisabled}
            >

                {(provided, snapshot) => (<div
                    className={this.props.task.color === "red" ? "openCard red" : "openCard "}
                    style={{
                        background: this.props.task.isSelected && "lightgrey"
                    }}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    isDragDisabled={isDragDisabled}
                >
                    {/*{this.props.task.icon+this.props.task.cardName}*/}
                    <span className="number top">{this.props.task.cardName}</span>
                    <p className="suit_top">{this.props.task.icon}</p>
                    <p className="suit">{this.props.task.icon}</p>
                    <span className="number bottom">{this.props.task.cardName}</span>
                </div>)}
            </Draggable>

        )
    }
}
