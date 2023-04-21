export default function Footer() {

    const year = new Date().getFullYear();


    return (
        <footer className="mt-20 w-4/5 h-40 border-t-2 border-gray-500 mr-auto ml-auto lg:w-3/5">
            <div className="flex flex-col justify-center mt-12 text-white items-center lg:flex-row lg:justify-between">
                <img className="w-64 h-10" src="/img/logo2.png" alt="" />
                <p className="mt-5 lg:mb-5">© Copyright Guilherme Vargas | {year}</p>
            </div>
        </footer>
    )
}