import Image from 'next/image'

export function Header(props) {
    return (
        <header className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <nav className="relative flex items-center justify-between">
                <figure className="flex gap-5">
                    <Image
                        src="/menu.svg"
                        width={24}
                        height={24}
                        alt="Menu bar"
                    />
                    <Image
                        src="/logo.svg"
                        width={126}
                        height={20}
                        alt="Logo"
                    />
                </figure>
                <div className="flex items-center gap-4 text-white text-sm">
                    <Image
                        src="/user.png"
                        width={40}
                        height={40}
                        alt="Picture of the user"
                    />
                    <p className="hidden md:block">Nome do Usuário Aqui</p>
                    <button className="hidden md:block">
                        <Image
                            src="/arrow.svg"
                            width={24}
                            height={24}
                            alt="Arrow"
                        />
                    </button>
                </div>
            </nav>
        </header>
    )
}