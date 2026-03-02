import { BrowserRouter, Routes, Route } from "react-router-dom" // npm install react-router-dom
import Menu from "./Components/Menu"
import Home from "./Pages/Home"
import Cadastro from "./Pages/Cadastro"

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
