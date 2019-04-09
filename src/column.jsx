import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';

const Container = styled.div`
   margin: 8px;
   border: 1px solid lightgrey;
   border-radius: 2px;
`;

const Title = styled.h3`
   padding: 8px;
`;

const TaskList = styled.div`
   padding: 8px;
   display: flex;
`;

export default class Column extends Component {
   render() {
      console.log(this.props);
      return (
         <Container>
            <Title>{this.props.column.title}</Title>
            <Droppable droppableId={this.props.column.id} direction="horizontal">
               { // "provided" is an object that serves purposes. Droppable children expects to return a component
                  (provided) => (
                  <TaskList
                     innerRef={provided.innerRef}
                     {...provided.droppableProps}
                  >
                     {this.props.tasks.map( (task, index) => <Task key={task.id} task={task} index={index} />)}
                     { // This is used to increase the avail space when items are being moved.
                        provided.placeholder}
                  </TaskList>
               )}
            </Droppable>
         </Container>
      );
   }
}