import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Logo from "../Img/logo.png";
import "../Css/Style.css"

function Menu() {
    return (
      <div className="w-full h-16 p-3 flex items-center justify-between bg-transparent backdrop-blur-2xl fixed">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-3xl text-emerald-500" id="titulo">
            <Link to="/">Good Movies</Link>
          </h1>
        </div>
        <div className="Busca w-96 h-10 flex items-center justify-center">
          <input
            type="text"
            placeholder="Procurar filme"
            className="w-full h-full bg-gray-700 outline-0 p-4 text-white placeholder:text-white rounded-bl-2xl rounded-tl-2xl border-2 border-emerald-500"
          />
          <button className="w-13 h-full flex items-center justify-center bg-emerald-500 cursor-pointer active:bg-emerald-600 rounded-br-2xl rounded-tr-2xl transition-all duration-200">
            <IoSearch className="text-3xl"/>
          </button>
        </div>
        <button className="w-30 h-11 flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 text-emerald-500 active:bg-zinc-800 transition-all duration-150">
          <FaUserCircle className="text-2xl"/>
          <Link to="/cadastro">Cadastro</Link>
        </button>
      </div>
    );
}

export default Menu
