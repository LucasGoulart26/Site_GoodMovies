import { useState } from "react";

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
    //const filmes = [
    //    {
    //        id: 1,
    //        year: "2020",
    //        gener: "Ação, Drama",
    //        capa: '../Img/Capa_do_filme.jpg'
    //    }
    //]
    return (
      <div className="w-full bg-zinc-800">
        <div className="w-full h-20 bg-zinc-900 flex items-center justify-center gap-2">
          <button className="w-24 p-3 rounded-2xl bg-emerald-500 cursor-pointer">All</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Ação</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Aventura</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Ficção</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Terror</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Animação</button>
          <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Drama</button>
        </div>
        <div className="w-full p-5 flex items-start justify-items-start flex-wrap gap-2">
            <div className="w-[25%] rounded-2xl bg-zinc-700 hover:shadow-2xl transition-all duration-200">
                <img src="" alt="" className="w-full h-96 bg-zinc-300"/>
                <div className="p-3">
                    <div className="w-full flex items-center justify-between">
                        <p className="text-white">Ano</p>
                        <p className="text-white">Gênero</p>
                    </div>
                    <p className=" text-white">Avaliação: {estrelasAvaliacao(avaliacao)}</p>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Filmes
