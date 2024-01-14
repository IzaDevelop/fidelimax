export function Rating(props) {
    return (
        <div className="mb-10">
            <p className={`block mb-2 ${props.custom ? props.custom : 'font-medium'}`}>{props.label}</p>
            <p className='mb-4 text-sm'>{props.description}</p>
            <div className="flex gap-5">
                {[...Array(5)].map((item, key) => {
                return (
                    <label key={key} htmlFor={"rating-" + (key + 1)}>
                        <input
                            type="radio"
                            tabIndex={-1}
                            id={"rating-" + (key + 1)}
                            name={props.id}
                            value={key + 1}
                            onChange={props.onChange}
                            checked={Number(props.value) === (key + 1)}
                            className="absolute invisible peer"
                        />
                        <span className={`text-5xl md:text-6xl cursor-pointer ${key + 1 < Number(props.value) || key + 1 === Number(props.value) ? 'text-yellow' : 'text-zinc-600'}`}>&#9733;</span>
                    </label>
                )
            })}
            </div>
        </div>
    )
}