export default function NavBar() {

    return (
        <nav className="flex justify-around mt-14">
            <div className="bg-logo bg-no-repeat bg-center w-44 h-8 md:bg-logo2 md:w-64 md:h-10"></div>
            <div className="bg-gradient-to-r from-azul3 to-azul2 rounded-3xl w-9 h-9">
                <img className="w-5 h-5 mr-auto ml-auto mt-2" src="/img/whatsapp.png" alt="" />
            </div>
        </nav>
    )
}