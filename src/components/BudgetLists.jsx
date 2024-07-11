import {  Button, ListGroup } from "react-bootstrap"

export function BudgetLists ({ budgetLists,handleDelete }) {
     return( 
       <ListGroup as="ul" >
         {budgetLists.map((budgetList, index) => {
           return(

           <ListGroup.Item
             key={index}
             as="li"
             className="d-flex justify-content-between align-items-center"
           >
             <div className="ms-2 me-auto">
               {budgetList.description}
             </div>
             <div >
               {"RM " + budgetList.amount}
               </div>
               <div><Button onClick={()=>handleDelete(index)}>Delete</Button></div>
               
           </ListGroup.Item>
 
)})}
      </ListGroup>
    )

 
}