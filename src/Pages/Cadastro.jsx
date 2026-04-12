import { useState } from "react"
import Perfil from "../Img/perfil.png"
import "../Css/Style.css"

function Cadastro() {
    const[userName, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState(false);

    function Cadastrar() {
        if(userName === "" || email === "" || password === "") {
            setError(true);
            return
        }
        setError(false)
    }
    return(
        <div className="Cadastro w-full h-screen flex items-center justify-center">
            <div className="Card w-[36%] p-4 rounded-2xl shadow-2xl bg-zinc-950 flex items-center justify-center flex-col">
                <img src={Perfil} alt="Perfil" className="w-32 h-32 rounded-[50%] bg-gray-50"/>
                <h1 className="text-3xl text-emerald-500 mt-2">Sign In</h1>
                <div className="w-full flex items-start justify-items-start flex-col mt-2">
                    <p className="text-gray-200">Username:</p>
                    <input 
                        type="text" 
                        value={userName}
                        onChange={(e)=> setUserName(e.target.value)}
                        className={`w-full h-11 p-3 outline-0 rounded-[5px] border-2 border-gray-700 bg-gray-800 text-white focus:ring-2 ring-emerald-400 transition-all duration-500 ${error && userName === "" ? "border-red-500 transition-all duration-200" : "border-gray-500"}`}
                    />
                </div>
                <div className="w-full flex items-start justify-items-start flex-col mt-2">
                    <p className="text-gray-200">Email:</p>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        className={`w-full h-11 p-3 outline-0 rounded-[5px] border-2 border-gray-700 bg-gray-800 text-white focus:ring-2 ring-emerald-400 transition-all duration-500 ${error && email === "" ? "border-red-500 transition-all duration-200" : "border-gray-500"}`}
                    />
                </div>
                <div className="w-full flex items-start justify-items-start flex-col mt-2">
                    <p className="text-gray-200">Password:</p>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className={`w-full h-11 p-3 outline-0 rounded-[5px] border-2 border-gray-700 bg-gray-800 text-white focus:ring-2 ring-emerald-400 transition-all duration-500 ${error && password === "" ? "border-red-500 transition-all duration-200" : "border-gray-500"}`}
                    />
                </div>
                <div className="w-full flex items-center justify-between text-white mt-2">
                    <label><input type="checkbox"/>Lembre-se</label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button onClick={Cadastrar} className="w-full h-11 mt-2 cursor-pointer rounded-[5px] bg-emerald-500 text-white active:bg-emerald-600 transition-all duration-200">Cadastre-se</button>
            </div>
        </div>
    )
}

export default Cadastro
