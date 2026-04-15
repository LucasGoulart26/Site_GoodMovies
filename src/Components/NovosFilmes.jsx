import novoFilme from "../Img/capa-novofilme.jpeg";
import "../Css/Style.css";
import { useEffect, useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

function NovosFilmes() {
    const[index, setIndex] = useState(0);
    const[itemsPerPage, setItemsPerPage] = useState(4);
    
    // Carrossel
    const next = () => {
      if(index < novosFilme.length - itemsPerPage) {
        setIndex(index + itemsPerPage);
      }
    }
    const prev = () => {
      if(index > 0) {
        setIndex(index - itemsPerPage)
      }
    }

    // Carrossel Responsivo
    useEffect(()=> {
      const handleResize = () => {
        if(window.innerWidth < 640) {
          setItemsPerPage(1);
        }else if(window.innerWidth < 768) {
          setItemsPerPage(2);
        }else if(window.innerWidth < 1024) {
          setItemsPerPage(3);
        }else {
          setItemsPerPage(4);
        }
      };
      handleResize() // Roda ao iniciar
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const novosFilme = [
      {id: 1, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 2, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 3, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 4, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 5, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 6, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 7, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 8, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"}
    ];
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col bg-cover bg-[url('/src/Img/backgroundcinematic.jpg')]">
        <div className="w-[80%] border-b-2 border-emerald-500 p-2">
          <h1 className="text-3xl text-white">Novos Filmes</h1>
        </div>
        <div className="relative w-[80%] overflow-hidden mt-5">
          <div className="flex transition-transform duration-500 gap-2" style={{ transform: `translateX(-${index * (100 / itemsPerPage)}%)`}}>
            {novosFilme.map((filmes) => (
              <div key={filmes.id} className="Card2 shrink-0 flex items-start justify-items-start flex-col rounded-2xl cursor-pointer bg-zinc-950" style={{width: `${100 / itemsPerPage}%`}}>
                <img src={filmes.capa} alt="Capa" className="w-full h-80 bg-gray-600"/>
                <div className="p-3">
                  <h1 className=" text-white">{filmes.titulo}</h1>
                  <h2 className="text-white">Lançamento: {filmes.data}</h2>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-900 px-2 py-2 cursor-pointer">
            <FaCaretLeft className="text-emerald-500 text-2xl"/>
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-900 px-2 py-2 cursor-pointer">
            <FaCaretRight className="text-emerald-500 text-2xl"/> 
          </button>
        </div>
      </div>
    );
}

export default NovosFilmes
