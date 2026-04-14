import novoFilme from "../Img/capa-novofilme.jpeg";
import "../Css/Style.css";
import { useState } from "react";

function NovosFilmes() {
    const[index, setIndex] = useState(0);
    
    // Carrossel
    const next = () => {
      if(index < novosFilme.length - 1) {
        setIndex(index + 1);
      }
    }
    const prev = () => {
      if(index > 0) {
        setIndex(index - 1)
      }
    }
    const novosFilme = [
      {id: 1, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 2, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 3, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 4, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 5, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 6, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"}
    ];
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col bg-cover bg-[url('/src/Img/backgroundcinematic.jpg')]">
        <div className="w-[70%] border-b-2 border-emerald-500 p-2">
          <h1 className="text-3xl text-white">Novos Filmes</h1>
        </div>
        <div className="relative w-[70%] overflow-hidden mt-5">
          <div className="flex transition-transform duration-500 gap-2" style={{ transform: `translateX(-${index * 100}%)`}}>
            {novosFilme.map((filmes) => (
              <div key={filmes.id} className="Card2 w-1/4 shrink-0 flex items-start justify-items-start flex-col rounded-2xl cursor-pointer bg-zinc-950">
                <img src={filmes.capa} alt="Capa" className="w-full h-80 bg-gray-600"/>
                <div className="p-3">
                  <h1 className=" text-white">{filmes.titulo}</h1>
                  <h2 className="text-white">Lançamento: {filmes.data}</h2>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white px-2 py-1 cursor-pointer">◀</button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white px-2 py-1 cursor-pointer">▶</button>
        </div>
      </div>
    );
}

export default NovosFilmes
