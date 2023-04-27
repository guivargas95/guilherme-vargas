"use client"

import { useEffect, useState } from "react"

export default function Skills() {

    let skills = ["Javascript", "HTML 5", "Tailwind CSS3", "React.JS", "TypeScript", "Django Rest"]
    let skillImages = ["/img/javascript.png", "/img/html5.png", "/img/css3-alt.png", "/img/react.png", "/img/typescript.png", "/img/python.png"]
    let [showSkill, setShowSkill] = useState(0)

    function button1() {
        setShowSkill(0)
    }

    function button2() {
        setShowSkill(2)
    }

    function button3() {
        setShowSkill(4)
    }

    return (
        <section className="w-4/5 mt-28 ml-auto mr-auto lg:flex lg:justify-around">
            <div className="flex flex-col lg:mt-10">
                <h3 className="text-white font-bold text-lg lg:text-2xl">Software</h3>
                <h3 className="text-white font-bold text-lg lg:text-2xl">Development</h3>
                <h3 className="text-azul2 font-bold text-lg lg:text-2xl">Skills</h3>
                <p className="text-white mt-6 lg:w-112">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores quaerat quod ut, fugit voluptas sequi, tempora quae quasi sint inventore provident facere molestias ullam, officia voluptatum ab vel exercitationem.</p>
            </div>
            <div className="mt-8 lg:hidden">
                <ul className="flex text-azul2 justify-center">
                    <li className="text-center m-6">
                        <div className="w-24 h-24 border-2 border-azul2 flex rounded-xl">
                            <img className="mr-auto ml-auto mt-auto mb-auto" src={skillImages[showSkill]} alt="" />
                        </div>
                        <h4 className="mt-1">{skills[showSkill]}</h4>
                    </li>
                    <li className="text-center m-6">
                        <div className="w-24 h-24 border-2 border-azul2 flex rounded-xl">
                            <img className="mr-auto ml-auto mt-auto mb-auto" src={skillImages[showSkill + 1]} alt="" />
                        </div>
                        <h4 className="mt-1">{skills[showSkill + 1]}</h4>
                    </li>
                </ul>
            </div>
            <div className="mt-8 hidden lg:flex lg:mt-0">
                <ul className="flex text-azul2 justify-center lg:grid lg:grid-cols-3">
                    <li className="text-center m-6">
                        <div className="w-24 h-24 border-2 border-azul2 flex rounded-xl">
                            <img className="mr-auto ml-auto mt-auto mb-auto" src={skillImages[0]} alt="" />
                        </div>
                        <h4 className="mt-1">{skills[0]}</h4>
                    </li>
                    <li className="text-center m-6">
                        <div className="w-24 h-24 border-2 border-azul2 flex rounded-xl">
                            <img className="mr-auto ml-auto mt-auto mb-auto" src={skillImages[1]} alt="" />
                        </div>
                        <h4 className="mt-1">{skills[1]}</h4>
                    </li>
                    <li className="text-center m-6">
                        <div className="w-24 h-24 border-2 border-azul2 flex rounded-xl">
                            <img className="mr-auto ml-auto mt-auto mb-auto" src={skillImages[2]} alt="" />
                        </div>
                        <h4 className="mt-1">{skills[2]}</h4>
                    </li>
                    <li className="text-center m-6">
                        <div className="w-24 h-24 border-2 border-azul2 flex rounded-xl">
                            <img className="mr-auto ml-auto mt-auto mb-auto" src={skillImages[3]} alt="" />
                        </div>
                        <h4 className="mt-1">{skills[3]}</h4>
                    </li>
                    <li className="text-center m-6">
                        <div className="w-24 h-24 border-2 border-azul2 flex rounded-xl">
                            <img className="mr-auto ml-auto mt-auto mb-auto" src={skillImages[4]} alt="" />
                        </div>
                        <h4 className="mt-1">{skills[4]}</h4>
                    </li>
                    <li className="text-center m-6">
                        <div className="w-24 h-24 border-2 border-azul2 flex rounded-xl">
                            <img className="mr-auto ml-auto mt-auto mb-auto" src={skillImages[5]} alt="" />
                        </div>
                        <h4 className="mt-1">{skills[5]}</h4>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center lg:hidden">
                <button className="w-3 h-3 ml-2 mr-2 bg-white m-1 rounded-lg focus:bg-azul2" onClick={button1}></button>
                <button className="w-3 h-3 ml-2 mr-2 bg-white m-1 rounded-lg focus:bg-azul2" onClick={button2}></button>
                <button className="w-3 h-3 ml-2 mr-2 bg-white m-1 rounded-lg focus:bg-azul2" onClick={button3}></button>
            </div>
        </section>
    )
}