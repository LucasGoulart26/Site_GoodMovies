import { useState } from "react"
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
        <div className="w-full h-screen flex items-center justify-center bg-zinc-800">
            <div className="Cadastro w-[36%] p-4 rounded-2xl shadow-2xl bg-zinc-900 flex items-center justify-center flex-col">
                <img src="" alt="Perfil" className="w-32 h-32 rounded-[50%] bg-gray-50 border-2 border-gray-200"/>
                <h1 className="text-3xl text-emerald-500 mt-2">Sign In</h1>
                <div className="w-full flex items-start justify-items-start flex-col mt-2">
                    <p className="text-gray-200">Username:</p>
                    <input 
                        type="text" 
                        value={userName}
                        onChange={(e)=> setUserName(e.target.value)}
                        className={`w-full h-11 p-2 outline-0 rounded-[5px] border-2 border-gray-700 bg-gray-500 ${error && userName === "" ? "border-red-500 transition-all duration-200" : "border-gray-500"}`}
                    />
                </div>
                <div className="w-full flex items-start justify-items-start flex-col mt-2">
                    <p className="text-gray-200">Email:</p>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        className={`w-full h-11 outline-0 rounded-[5px] border-2 border-gray-700 bg-gray-500 ${error && email === "" ? "border-red-500 transition-all duration-200" : "border-gray-500"}`}
                    />
                </div>
                <div className="w-full flex items-start justify-items-start flex-col mt-2">
                    <p className="text-gray-200">Password:</p>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className={`w-full h-11 outline-0 rounded-[5px] border-2 border-gray-700 bg-gray-500 ${error && password === "" ? "border-red-500 transition-all duration-200" : "border-gray-500"}`}
                    />
                </div>
                <button onClick={Cadastrar} className="w-full h-11 mt-2 cursor-pointer rounded-[5px] bg-emerald-500 text-white active:bg-emerald-600 transition-all duration-200">Cadastre-se</button>
            </div>
        </div>
    )
}

export default Cadastro
