import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const Card = styled.div`
   border: 1px solid lightgrey;
   border-radius: 5px;
   padding: 8px;
   margin-bottom: 8px;
   background-color: #fff;
   margin-top: 10px;
   font-weight: bold;
`;

const Icon = styled.div`
   float: left;
   margin: 16px;
   background: gray;
   width: 80px;
   height: 80px;
   border-radius: 100px;
`;
const CardContent = styled.div`
   display: flex;
   flex-direction: column;
   padding-right: 8px;
   margin-top: 24px;
`;
const Name = styled.div``;
const Value = styled.div``;
const Status = styled.div``
// Dont change the shape of your draggable on drag 
export default class Task extends Component {
   render() {
      return (
         <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided) => (
               <Card
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  innerRef={provided.innerRef}
               >
                  <Icon />
                  <CardContent>
                     <Name>
                        {this.props.task.content}
                     </Name>
                     <Value>
                     {this.props.task.value}
                     </Value>
                     <Status>
                        Updated 1 day ago
                     </Status>
                  </CardContent>
               </Card>
            )}
            
         </Draggable>
      );
   }
}