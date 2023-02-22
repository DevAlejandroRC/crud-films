import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CinemaBillboard from "./components/CinemaBillboard";
import Create from "./components/Create";
import List from "./components/List";

const App = () =>{
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>CRUD Films</Navbar.Brand>
      <Navbar.Collapse>
        <Nav>
            <Nav.Link href="/" eventKey="link-1">Cinema billboard</Nav.Link>
            <Nav.Link href="/films" eventKey="link-2">List films</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CinemaBillboard/>}/>
          <Route path="/films" element={<List/>}/>
          <Route path="/add" element={<Create/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
