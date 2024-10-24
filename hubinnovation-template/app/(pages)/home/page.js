"use client"
import { useState } from "react";
 
export default function Home() {
    const [userData, setUserData] = useState([])
 
  return (
    <>
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-gray-800 text-center">Bem-Vindo!</h1>
            </div>
            <div className="flex justify-center items-center">
                <button className="font-bold bg-blue-500 text-white w-56 py-1 rounded-lg mb-6">Nova Senha</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    userData.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h2 className="text-2xl text-center">(item.titulo)</h2>
                            <p>usuario: {item.usuario}</p>
                            <p>senha: {item.senha}</p>
                            
                        </div>
                    ))
                }
 
            </div>
       
        </div>  
    </>
  );
}