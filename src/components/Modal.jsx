export function Modal(props) {
    return (
        <div className="bg-opacity-20 bg-neutral-900 overflow-auto fixed z-50 flex justify-center items-center w-full inset-0 h-full" >
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white text-neutral-900 rounded-lg shadow">
                    <div className="p-8 text-center">
                        <h3 className="mb-5 text-2xl font-normal">{props.title}</h3>
                        <button onClick={() => props.close(false)} type="button" className="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}