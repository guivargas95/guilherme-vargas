export default function Presentation() {
    return (
        <section className="flex flex-col items-center text-white mt-20">
            <div className="font-bold flex flex-col items-center md:flex-row md:justify-around md:w-full">
                <div className="flex flex-col md:ml-32 text-center md:text-left">
                    <p className="w-64 md:text-3xl md:w-112">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente esse aliquid tempora enim quas mollitia magnam.</p>
                    <div className="hidden mt-12 items-center justify-center bg-gradient-to-r from-azul3 to-azul2 rounded-3xl w-80 h-12 text-white md:flex">
                        <img className="w-5 h-5" src="/img/whatsapp.png" alt="" />
                        <p className="ml-2">Vamos conversar</p>
                    </div>
                </div>
                <img className="w-52 h-72 mt-11 md:hidden" src="/img/foguete.png" alt="" />
                <img className="hidden md:inline-block w-112 h-120 md:mr-24" src="/img/foguete@2x.png" alt="" />
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-azul3 to-azul2 rounded-3xl w-80 h-12 text-white md:hidden">
                <img className="w-5 h-5" src="/img/whatsapp.png" alt="" />
                <p className="ml-2">Vamos conversar</p>
            </div>
            <div className="mt-16">
                <img src="/img/seta-baixo.png" alt="" />
            </div>
        </section>
    )
}