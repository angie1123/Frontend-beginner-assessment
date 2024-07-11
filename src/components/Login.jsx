import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const{setToken}=useContext(AuthContext)  
  
  function login() {
    const correctUsername = email === "hello@gmail.com"
    const correctPassword = password === "12345"

    if (correctUsername && correctPassword) {
      setToken("1234")
      navigate('/create')
    }

}

  return (
    <Container>
      <h1 className="my-5">Login page</h1>
      <Form onSubmit={login}> 
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password" placeholder="password" />
      </Form.Group>

      <Button type="submit">Submit</Button>
    </Form>
    </Container>
    
  )

}