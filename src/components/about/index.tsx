"use client"

import { useState } from "react"

export default function About() {

    const textos = ["My name is Guilherme, I'm in the last year of Analysis and system development and i'm in a process to make career transition to software development area. Maybe you are the right person to give me an position opportunity, right? I'm looking for opportunities in Front-end development. I have about two years of experience with personal projects using the technologies listed bellow and I hope finish soon this career transition. Until then I will continue improving my programming skills and my english conversation. I hope you liked. See ya!", "Me chamo Guilherme e estou em busca de uma oportunidade para realizar transição de carreira para a área de desenvolvimento. Estudo programação a pouco mais de dois anos e depois do contato com algumas tecnologias escolhi a área Front-end para me profissionalizar. Inseri abaixo alguns links de projetos pessoais consumindo a API do github e uma pequena lista de habilidades que venho desenvolvendo a partir dos meus estudos. Espero que goste!"]
    const [numTexto, setNumTexto] = useState(0)

    function TextoEnUs() {
        setNumTexto(0)
    }

    function TextoPtBr() {
        setNumTexto(1)
    }

    return (
        <section className="mt-28 flex flex-col lg:grid lg:grid-cols-2 lg:w-3/5 lg:mr-auto lg:ml-auto">
            <div className="flex flex-col justify-around ">
                <div className="flex font-bold justify-center lg:mt-10">
                    <h2 className="text-white p-1">About</h2>
                    <h2 className="text-azul2 p-1">me</h2>
                    <button className="ml-2 mr-2 w-20 h-9 rounded-2xl border text-azul2 border-azul2 focus:bg-gradient-to-r focus:from-azul3 focus:to-azul2 focus:text-white" onClick={TextoEnUs}>EN-US</button>
                    <button className="ml-2 mr-2 w-20 h-9 rounded-2xl border text-azul2 border-azul2 focus:bg-gradient-to-r focus:from-azul3 focus:to-azul2 focus:text-white" onClick={TextoPtBr}>PT-BR</button>
                </div>
                <div>
                    <p className="mt-10 w-4/5 mr-auto ml-auto text-left text-white lg:mt-0">{textos[numTexto]}</p>
                </div>
            </div>
            <div>
                <img className="w-80 h-96 mr-auto ml-auto" src="/img/Foto.png" alt="" />
                <div className="flex mt-4 justify-center">
                    <a href="https://github.com/guivargas95/" target="_blank"><img className="ml-2 mr-2" src="/img/github.png" alt=""  /></a>
                    <a href="https://www.instagram.com/guii.vargas/?hl=pt-br" target="_blank"><img className="ml-2 mr-2" src="/img/instagram.png" alt=""  /></a>
                    <a href="https://www.linkedin.com/in/guivargas95/" target="_blank"><img className="ml-2 mr-2" src="/img/linkedin-in.png" alt=""  /></a>
                    <a href="https://whatsa.me/5541992295513/?t=Ol%C3%A1,%20Guilherme.%20" target="_blank"><img className="ml-2 mr-2" src="/img/whatsappazul.png" alt=""  /></a>
                </div>
            </div>
        </section>
    )
}