export function Header(props) {
    return (
        <header className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <nav className="relative flex items-center justify-between">
                <figure className="flex gap-5">
                    <img src="menu.svg" alt="" />
                    <img src="logo.svg" alt="" />
                </figure>
                <div className="flex items-center gap-4 text-white text-sm">
                    <img className="w-10 h-10 rounded-full" src="user.png" alt="" />
                    <p className="hidden md:block">Nome do Usuário Aqui</p>
                    <button className="hidden md:block"><img src="arrow.svg" alt="" /></button>
                </div>
            </nav>
        </header>
    )
}