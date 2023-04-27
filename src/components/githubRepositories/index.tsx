"use client"
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Repository } from "../../types/RepositoryType";

export default function GithubRepositories() {

    const { data: repositories } = useFetch<Repository[]>('https://api.github.com/users/guivargas95/repos');
    console.log(repositories)
    let idList: string[] = []
    let [showingId, setShowingId] = useState("")

    useEffect(() => {
        idList = []
        repositories?.map(data => {
            idList.push(data.id)
        })
    }, [repositories])

    useEffect(() => {
        setShowingId(idList[0])
    }, [idList])


    return (
        <section className="mt-24">
            <div className="flex justify-center text-xl text-white font-bold">
                <h2 className="p-1">Public</h2>
                <h2 className="p-1">Personal</h2>
                <h2 className="p-1 text-azul2">Projects</h2>
            </div>
            <div className="mt-7">
                <button><img src="" alt="" /></button>
                <ul className="">
                    {repositories?.map(repo => {
                        if (repo.homepage == "") {
                            return (
                                <li className="" key={repo.name}>
                                    <h3 className="">{repo.name}</h3>
                                    <p className="">{repo.description}</p>
                                    <a target="_blank" href={repo.html_url}><button className="">Repository</button></a>
                                </li>
                            )
                        } else {
                            return (
                                <li className="" key={repo.name}>
                                    <h3 className="">{repo.name}</h3>
                                    <p className="">{repo.description}</p>
                                    <a target="_blank" href={repo.html_url}><button className="">Repository</button></a>
                                    <a target="_blank" href={repo.homepage}><button className="">Project</button></a>
                                </li>
                            )
                        }
                    })}
                </ul>
                <button><img src="" alt="" /></button>
            </div>
        </section>
    )
}