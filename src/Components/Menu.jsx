import { Link } from "react-router-dom"
import "../Css/Style.css"

function Menu() {
    return (
      <div className="w-full h-16 p-3 flex items-center justify-between bg-transparent backdrop-blur-2xl fixed">
        <h1 className="text-3xl text-emerald-500">
          <Link to="/">Good Movies</Link>
        </h1>
        <div className="Busca w-96 h-10 flex items-center justify-center">
          <input type="text" placeholder="Procurar filme" className="w-full h-full bg-gray-700 outline-0 p-4 text-white placeholder:text-white rounded-bl-2xl rounded-tl-2xl border-2 border-emerald-500"/>
          <button className="w-20 h-full bg-emerald-500 cursor-pointer active:bg-emerald-600 rounded-br-2xl rounded-tr-2xl transition-all duration-200">Search</button>
        </div>
        <button className="w-25 p-2 rounded-2xl bg-emerald-500 text-white active:bg-emerald-600 transition-all duration-150">
          <Link to="/cadastro">Cadastro</Link>
        </button>
      </div>
    );
}

export default Menu
