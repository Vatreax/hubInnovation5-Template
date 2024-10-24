"use client"
import { useState } from "react";
import { Verificalogin } from "./controller/loginController";
import { useRouter } from "next/navigation";
 
export default function Login() {
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()
  const rota = useRouter()
 
  async function handleSubmit (event) {
    event.preventDefault()
    const response = await Verificalogin(usuario,senha) 

    if(response){
      rota.push("/home")
    }
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-blue-600">
        <div className="w-80 bg-slate-600 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="block text-orange-500">Usuário</label>
                <input onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Digite o Usuário:" className="w-full px-3 py-2"/>
            </div>
            <div className="form-control">
              <label className="block text-orange-500">Senha</label>
              <input onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Digite a Senha:" className="w-full px-3 py-2"/>
            </div>
            <button className="w-full bg-orange-500 text-white rounded">Entrar</button>
          </form>
        </div>
      </div>
    </>
  );
}
 