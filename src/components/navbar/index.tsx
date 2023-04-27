export default function NavBar() {

    return (
        <nav className="flex justify-around mt-14 items-center">
            <div className="bg-logo bg-no-repeat bg-center w-44 h-8 md:bg-logo2 md:w-96 md:h-14"></div>
            <a className="bg-gradient-to-r from-azul3 to-azul2 rounded-3xl w-9 h-9 md:w-56 md:flex md:items-center md:justify-around text-white" href="https://whatsa.me/5541992295513/?t=Ol%C3%A1,%20Guilherme.%20" target="_blank">
                <img className="w-5 h-5 mr-auto ml-auto mt-2 md:-mt-0 md:ml-9" src="/img/whatsapp.png" alt="" />
                <p className="invisible md:visible mr-9">Entre em contato</p>
            </a>
        </nav>
    )
}