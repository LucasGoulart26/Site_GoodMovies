import novoFilme from "../Img/capa-novofilme.jpeg";
import "../Css/Style.css";

function NovosFilmes() {
    const novosFilme = [
      {id: 1, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 2, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 3, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 4, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
      {id: 5, capa: novoFilme, titulo: "Avatar: Fogo e Cinzas", data: "18/12/2025"},
    ];
    return (
      <div className="w-full h-screen flex items-center justify-center flex-col bg-cover bg-[url('/src/Img/backgroundcinematic.jpg')]">
        <div className="w-96 border-b-2 border-emerald-500 p-2">
          <h1 className="text-3xl text-white text-center">Novos Filmes</h1>
        </div>
        <div className="w-full flex items-center justify-center mt-5">
          <div className="w-full flex items-center justify-center flex-wrap gap-2">
            {novosFilme.map((filmes) => (
              <div key={filmes.id} className="Card2 w-60 flex items-start justify-items-start flex-col rounded-2xl cursor-pointer bg-zinc-950">
                <img src={filmes.capa} alt="Capa" className="w-full h-50 bg-gray-600"/>
                <div className="p-3">
                  <h1 className=" text-white">{filmes.titulo}</h1>
                  <h2 className="text-white">Lançamento: {filmes.data}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default NovosFilmes
