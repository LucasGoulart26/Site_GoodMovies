import { Link } from "react-router-dom"

function Menu() {
    return (
      <div className="w-full h-20 p-3 flex items-center justify-between bg-zinc-900 absolute">
        <h1 className="text-3xl text-emerald-500">
          <Link to="/">Good Movies</Link>
        </h1>
        <button className="w-25 p-2 rounded-2xl bg-emerald-500 text-white active:bg-emerald-600 transition-all duration-150">
          <Link to="/cadastro">Cadastro</Link>
        </button>
      </div>
    );
}

export default Menu
