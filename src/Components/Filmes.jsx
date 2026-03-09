import { useState } from "react";
import capaFilme from "../Img/Capas/capa-filme.jpg";
import capaFilme2 from "../Img/Capas/capa-filme2.jpg";
import capaFilme3 from "../Img/Capas/capa-filme3.jpg";
import capaFilme4 from "../Img/Capas/capa-filme4.jpg";
import capaFilme5 from "../Img/Capas/capa-filme5.jpg";
import capaFilme6 from "../Img/Capas/capa-filme6.jpg";
import capaFilme7 from "../Img/Capas/capa-filme7.jpeg";
import capaFilme8 from "../Img/Capas/capa-filme8.jpg";
import "../Css/Style.css";

function Filmes() {
    const[avaliacao] = useState(5)
    const[active, setActive] = useState("All");

    const estrelasAvaliacao = (nota) => {
        const estrelas = [];
        for(let i = 1; i <= 5; i++) {
            if(i <= nota) {
                estrelas.push(<span className="text-yellow-400">★</span>);
            }else {
                estrelas.push(<span className="text-yellow-400">☆</span>);
            }
        }
        return estrelas;
    }

    const buttons = ["All", "Ação", "Aventura", "Ficção", "Terror", "Animação", "Drama"];

    // Filmes
    const filmes = [
        {id: 1, ano: "2022", genero: "Ficção cientifica/Ação", capa: capaFilme},
        {id: 2, ano: "2025", genero: "Animação", capa: capaFilme2},
        {id: 3, ano: "2025", genero: "Animação/Terror", capa: capaFilme3},
        {id: 4, ano: "2025", genero: "Ficção cientifica/Ação", capa: capaFilme4},
        {id: 5, ano: "2024", genero: "Ação", capa: capaFilme5},
        {id: 6, ano: "2024", genero: "Terror", capa: capaFilme6},
        {id: 7, ano: "2022", genero: "Ficção cientifica/Ação", capa: capaFilme7},
        {id: 8, ano: "2026", genero: "Terror", capa: capaFilme8}
    ]
    return (
      <div className="w-full bg-zinc-800">
        <div className="w-full p-5 bg-zinc-900 flex items-center justify-center flex-wrap gap-4">
            {buttons.map((btn) => (
                <button 
                    key={btn} 
                    onClick={()=> setActive(btn)} 
                    className={`w-24 p-3 rounded-2xl cursor-pointer text-white ${active === btn ? "bg-emerald-500" : "bg-zinc-800"}`}
                >{btn}</button>
            ))}
        </div>
        <div className="w-full p-5 flex items-start justify-items-start flex-wrap gap-4">
            <div className="w-full p-2">
                <h1 className="text-3xl text-emerald-500">Filmes</h1>
            </div>
            {filmes.map((filmes) => (
                <div key={filmes.id} className="CardFilme w-[24%] rounded-2xl bg-zinc-950 hover:shadow-2xl shadow-emerald-500 transition-all duration-300 ">
                    <img src={filmes.capa} alt="Capa" className="w-full h-96 bg-zinc-300"/>
                    <div className="p-3">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-white">{filmes.ano}</p>
                            <p className="text-white">{filmes.genero}</p>
                        </div>
                        <p className=" text-white">Avaliação: {estrelasAvaliacao(avaliacao)}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full h-20 flex items-center justify-center bg-zinc-950">
            <h1 className="text-2xl text-emerald-500">&copy;2026 - GoodMovies</h1>
        </div>
      </div>
    );
}

export default Filmes
