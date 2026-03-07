function Filmes() {
    return(
        <div className="w-full bg-zinc-800">
            <div className="w-full h-20 bg-zinc-900 flex items-center justify-center gap-2">
                <button className="w-24 p-3 rounded-2xl bg-emerald-500 cursor-pointer">All</button>
                <button className="w-24 p-3 rounded-2xl bg-zinc-800 cursor-pointer text-white">Ação</button>
            </div>
        </div>
    )
}

export default Filmes
