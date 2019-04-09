import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { DragDropContext } from 'react-beautiful-dnd';
import accountCardData from './accountCardData';
import Column from './column';

class App extends Component {
   state = accountCardData;

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
      console.log('Wat', column);
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

      this.setState(newState);
   }

   render() {
      return(
         <DragDropContext onDragEnd={this.onDragEnd}>
            {this.state.columnOrder.map((columnId) => {
               const column = this.state.columns[columnId];
               const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

               return <Column key={column.id} column={column} tasks={tasks} />
            })}
         </DragDropContext>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
