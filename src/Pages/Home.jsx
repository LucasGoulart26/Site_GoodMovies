import { useState } from "react";
import Filmes from "../Components/Filmes";
import Capa from "../Img/capa-do-filme.jpg";
import { FaPlay } from "react-icons/fa";
import "../Css/Style.css";

function Home() {
    const [avaliacao] = useState(5);

    const estrelasAvaliacao = (nota) => {
        const estrelas = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= nota) {
                estrelas.push(<span className="text-2xl text-yellow-400">★</span>);
            } else {
                estrelas.push(<span className="text-2xl text-yellow-400">☆</span>);
            }
        }
        return estrelas;
    };
    return (
      <div className="w-full h-screen">
        <div className="Home w-full h-screen flex items-center justify-center gap-3">
          <img src={Capa} alt="Capa" className="w-79 h-[60vh] bg-gray-50" />
          <div className="Barra w-[33%] flex items-start justify-items-start flex-col">
            <h1 className="text-4xl text-white">Demon Slayer: Kimetsu no Yaiba - Castelo Infinito</h1>
            <h2 className="text-2xl text-white mt-2">2025 - Ação/Animação</h2>
            <div className="w-full flex items-start justify-items-start gap-2 mt-2">
              <p className="text-2xl text-white">Avaliação: {estrelasAvaliacao(avaliacao)}</p>
            </div>
            <div className="w-full flex items-start justify-items-start gap-2 mt-2">
              <button className="w-40 h-11 p-2 flex items-center justify-center gap-2 cursor-pointer text-emerald-500 bg-zinc-900 rounded-[5px] active:bg-zinc-950 transition-all duration-500">
                <FaPlay/>
                ASSISTIR
              </button>
            </div>
          </div>
        </div>
        <Filmes />
      </div>
    );
}

export default Home;
