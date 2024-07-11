import { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {BudgetLists} from "./BudgetLists" 
import { AuthContext } from "../contexts/AuthContext";
  
export default function CreateTransaction() {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState('')
  const [budgetLists, setBudgetLists] = useState([])
  let [total, setTotal] = useState(0)
  const {setToken}= useContext(AuthContext)
  
  function handleSubmit(e) {
    e.preventDefault()
    const numericAmount = parseFloat(amount)
    console.log(numericAmount)
      setBudgetLists([...budgetLists, { description, amount:numericAmount }])
      setTotal((prevTotal)=>prevTotal+numericAmount)
      setDescription("")
      setAmount("")
      
  }

  function handleAmountChange(e) {
    const value = e.target.value
    /* .test(value) is a method of the regular expression object
     /^-?\d*\.?\d*$/. 
     This method tests whether the value of the 
     input field matches the pattern defined by the regular expression.
    */
    if (/^-?\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  }

  function handleDelete(index) {
    const deleteItem = budgetLists[index]
    const deleteAmount=deleteItem.amount
    // setBudgetLists((prevBudgetLists) => prevBudgetLists.filter((item,i) => item.index !== index))
    setBudgetLists(prevBudgetLists => prevBudgetLists.filter((item,i) => i !== index));
    setTotal((prevTotal) => prevTotal - deleteAmount)
  }

  function logout() {
    setToken("")
  }

  

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="text-center mb-4">Budget Tracker</h2>
    <Button
        className="position-absolute top-0 end-0 m-3"
        onClick={logout}
        variant="primary">
        Logout
        </Button>
        <Row className="w-100 vh-100">
        <Col >
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          typeof="text" placeholder="description" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          value={amount}
          onChange={handleAmountChange}
          type="text" placeholder="amount" required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
        </Col>

         <Col >
          <BudgetLists budgetLists={budgetLists} handleDelete={handleDelete}/>
          <h3>{total < 0 ? "Loss" : "Income"}: {"RM "+ total}</h3>
        </Col>
      </Row>
    </Container>
      


      
        

    
    

    
      )
}