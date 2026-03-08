import { useState } from "react";
import capaFilme from "../Img/Capas/capa-filme.jpg";
import capaFilme2 from "../Img/Capas/capa-filme2.jpg";
import capaFilme3 from "../Img/Capas/capa-filme3.jpg";
import capaFilme4 from "../Img/Capas/capa-filme4.jpg";
import capaFilme5 from "../Img/Capas/capa-filme5.jpg";
import capaFilme6 from "../Img/Capas/capa-filme6.jpg";
import capaFilme7 from "../Img/Capas/capa-filme7.jpeg";
import "../Css/Style.css";

function Filmes() {
    const[avaliacao] = useState(5)

    const estrelasAvaliacao = (nota) => {
        const estrelas = [];
        for(let i = 1; i <= 5; i++) {
            if(i <= nota) {
                estrelas.push(<span className="text-2xl text-yellow-400">★</span>);
            }else {
                estrelas.push(<span className="text-2xl text-yellow-400">☆</span>);
            }
        }
        return estrelas;
    }

    // Filmes
    const filmes = [
        {id: 1, ano: "2022", genero: "Ficção cientifica/Ação", capa: capaFilme},
        {id: 2, ano: "2025", genero: "Animação", capa: capaFilme2},
        {id: 3, ano: "2025", genero: "Animação/Terror", capa: capaFilme3},
        {id: 4, ano: "2025", genero: "Ficção cientifica/Ação", capa: capaFilme4},
        {id: 5, ano: "2024", genero: "Ação", capa: capaFilme5},
        {id: 6, ano: "2024", genero: "Terror", capa: capaFilme6},
        {id: 7, ano: "2022", genero: "Ficção cientifica/Ação", capa: capaFilme7}
    ]
    return (
      <div className="w-full bg-zinc-800">
        <div className="w-full h-20 bg-zinc-900 flex items-center justify-center gap-4">
          <button className="w-24 p-3 rounded-2xl bg-emerald-500 cursor-pointer">All</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Ação</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Aventura</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Ficção</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Terror</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Animação</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Drama</button>
        </div>
        <div className="w-full p-5 flex items-start justify-items-start flex-wrap gap-4">
            <div className="w-full p-2">
                <h1 className="text-3xl text-emerald-500">Filmes</h1>
            </div>
            {filmes.map((filmes) => (
                <div key={filmes.id} className="CardFilme w-[24%] rounded-2xl bg-zinc-900 hover:shadow-2xl shadow-emerald-500 transition-all duration-300 ">
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
      </div>
    );
}

export default Filmes
