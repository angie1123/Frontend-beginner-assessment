import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import CreateTransaction from "./components/CreateTransaction";
import Login from "./components/Login";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import {  ThemeContext } from "./contexts/ThemeContext";
import { ThemeWrapper } from "./components/ThemeWrapper";
import useLocalStorage from "use-local-storage";

function Layout() {
  const { toggleTheme,theme } = useContext(ThemeContext)
  
  
  return (
    <>
      
    <Navbar expand="lg" className={`bg-body-${theme}`}>
        <Container>
          <Navbar.Brand className ={`text-${theme==='light'?'dark':'light'}`} href="/create">Budget Tracker</Navbar.Brand>
          <Nav className="w-100 d-flex justify-content-center">
          <Button  onClick={toggleTheme}>Toggle theme</Button>
          </Nav>
      </Container> 
      </Navbar>
      <Outlet/>
     
    </>
  )
}

export default function App() {
  const [token, setToken] = useLocalStorage(null)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    console.log(theme)
  }

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeWrapper>
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
          <Route element={<Login />} index /> 
          <Route
            element={
              <RequireAuth>
                <CreateTransaction/>
            </RequireAuth>
          }
            path="/create"
              />
              </Route>
    </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
</ThemeWrapper>
    </ThemeContext.Provider>
  )
}
