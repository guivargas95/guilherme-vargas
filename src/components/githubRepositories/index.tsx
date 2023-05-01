"use client"
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Repository } from "../../types/RepositoryType";

export default function GithubRepositories() {

    const { data: repositories } = useFetch<Repository[]>('https://api.github.com/users/guivargas95/repos');
    const [currentIndex, setCurrentIndex] = useState(5)

    function nextRepo() {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    function prevRepo() {
        if (currentIndex + 1 < repositories!.length) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <section className="mt-24">
            <div className="flex justify-center text-xl text-white font-bold">
                <h2 className="p-1">Public</h2>
                <h2 className="p-1">Personal</h2>
                <h2 className="p-1 text-azul2">Projects</h2>
            </div>
            <div className="mt-7 flex justify-around md:hidden">
                <button className="w-10 flex justify-center items-center" onClick={prevRepo}><img src="/img/back.png" className="w-2.5 h-4" alt="" /></button>
                <ul className="text-white">
                    {repositories && repositories.length > 0 ? (
                        <li className="w-64 h-64 flex flex-col justify-center text-center border-2 border-azul2 rounded-xl fadeIn" key={repositories[currentIndex].id}>
                            <h3 className="font-bold">{repositories[currentIndex].name}</h3>
                            <p className="mt-5">{repositories[currentIndex].description}</p>
                            <a target="_blank" href={repositories[currentIndex].html_url}><button className="mt-5 w-36 h-8 rounded-2xl bg-gradient-to-r from-azul3 to-azul2">Repository</button></a>
                            {repositories[currentIndex].homepage != "" && (
                                <a target="_blank" href={repositories[currentIndex].homepage}><button className="mt-5 w-36 h-8 rounded-2xl bg-gradient-to-r from-roxo to-azul2">View Project</button></a>
                            )}
                        </li>
                    ) : (
                        <li>No repositories found.</li>
                    )}
                </ul>
                <button className="w-10 flex justify-center items-center" onClick={nextRepo}><img src="/img/next.png" className="w-2.5 h-4" alt="" /></button>
            </div>
            <div className="text-white flex flex-col items-center mt-16">
                <ul className="hidden md:w-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-14 grid-flow-dense">
                    {repositories?.slice(0).reverse().map(repo => {
                        return (
                            <li className="w-64 h-64 flex flex-col justify-center text-center border-2 border-azul2 rounded-xl" key={repo.id}>
                                <h3 className="font-bold">{repo.name}</h3>
                                <p className="mt-5">{repo.description}</p>
                                <a target="_blank" href={repo.html_url}><button className="mt-5 w-36 h-8 rounded-2xl bg-gradient-to-r from-azul3 to-azul2">Repository</button></a>
                                {repo.homepage != "" && (
                                    <a target="_blank" href={repo.homepage}><button className="mt-5 w-36 h-8 rounded-2xl bg-gradient-to-r from-roxo to-azul2">View Project</button></a>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}