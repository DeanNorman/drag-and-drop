import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import accountCardData from './accountCardData';
import Column from './column';


const Container = styled.div`
   display: flex;
   min-height: 100vh;
   flex-direction: row;
   margin: 0;
`;
const Nav = styled.div`
   text-align: center;
   background: #2a2c39;
   flex: 1;
   max-width: 250px;
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   flex: 5;
`;

const Header = styled.div`
    background: white;
    height: 60px;
`;
const NetValue = styled.div`
    background: #222;
    height: 300px;
`;


class App extends Component {
   state = accountCardData;

   // onDragStart = () => {}
   // onDragUpdate = result => {}

   onDragEnd = result => {
      // console.log('Log the result object', result);
      // synch update the state here
      const { destination, source, draggableId } = result;

      if (!destination) {
         // this makes sure that if you drop your draggable outside of its droppable,
         // it wont crash the app..
         return;
      }

      if (
         // Check if the user just picked up a draggable and let it go.
         destination.droppableId === source.droppableId &&
         destination.index === source.index
      ) {
         return;
      }

      const column = this.state.columns[source.droppableId];
      // console.log('Column', column);
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      // third arg adds the draggableId
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
         ...column,
         taskIds: newTaskIds,
      }

      const newState = {
         ...this.state,
         columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn,
         }
      }
      // Call the end point here, service. 
      this.setState(newState);
   }

   render() {
      return(
         <Container>
            <Nav />
            <Content>
               <Header />
               <NetValue />
               <DragDropContext onDragEnd={this.onDragEnd}>
                  {this.state.columnOrder.map((columnId) => {
                     const column = this.state.columns[columnId];
                     const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                     return <Column key={column.id} column={column} tasks={tasks} />
                  })}
               </DragDropContext>
            </Content>
         </Container>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
