"use client"

import { useState } from "react"

export default function About() {

    const textos = ["My name is Guilherme, I'm in a process to make career transition to software development area. I have about five years of experience in IT Support area. I started the transition making some freelancers of front-end projects. If you are interessed, please, feel free to contact me. I hope you liked. Bye.", "Meu nome é Guilherme, estou em um processo de transição de carreira para a área de desenvolvimento de software. Tenho cerca de cinco anos de experiência na área de Suporte de TI. Comecei a transição fazendo alguns projetos freelancers de front-end. Se você estiver interessado, por favor, sinta-se à vontade para entrar em contato comigo. Espero que você tenha gostado. Até mais!"]
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