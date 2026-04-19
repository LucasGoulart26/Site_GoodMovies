import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Logo from "../Img/logo.png";
import "../Css/Style.css"

function Menu() {
    return (
      <div className="w-full h-16 p-3 flex items-center justify-between bg-transparent backdrop-blur-2xl fixed">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text" id="titulo">
            <Link to="/">GoodMovies</Link>
          </h1>
        </div>
        <div className="Busca w-96 h-10 flex items-center justify-center">
          <input
            type="text"
            placeholder="Procurar filme"
            className="w-full h-full bg-gray-800 outline-0 p-4 text-white placeholder:text-white rounded-bl-2xl rounded-tl-2xl border-2 border-gray-600"
          />
          <button className="w-13 h-10 flex items-center justify-center bg-blue-600 cursor-pointer active:bg-blue-700 rounded-br-2xl rounded-tr-2xl transition-all duration-200">
            <IoSearch className="text-3xl text-white" />
          </button>
        </div>
        <button className="w-29 h-11 flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 text-white active:bg-zinc-800 transition-all duration-150 border-2 border-zinc-700">
          <FaUserCircle className="text-2xl" />
          <Link to="/cadastro">Cadastro</Link>
        </button>
      </div>
    );
}

export default Menu
