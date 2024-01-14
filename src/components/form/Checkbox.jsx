export function Checkbox(props) {
    return (
        <div className="mb-10">
            <p className="block mb-2 font-medium">
                {props.label}
            </p>

            <div className={props.custom ? 'flex flex-wrap gap-4' : ''}>
                {props.options.map((item, key) => props.custom ? (
                    <div key={key}>
                        <label htmlFor={"custom-" + (key + 1)}>
                            <input
                                type="checkbox"
                                id={"custom-" + (key + 1)}
                                name={props.id}
                                value={key}
                                onChange={props.onChange}
                                required={props.required}
                                checked={props.value.includes(key)}
                                className="sr-only hidden peer"
                            />
                            <span className="block rounded-full text-sm border border-gray-2 py-2 px-4 hover:border-blue-400 peer-checked:border-blue-400 ">
                                {item.label}
                            </span>
                        </label>
                    </div>
                ) : (
                    <div key={key} >
                        <label htmlFor={"check-" + (key + 1)} className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                id={"check-" + (key + 1)}
                                name={props.id}
                                value={key}
                                onChange={props.onChange}
                                required={props.required}
                                checked={props.value.includes(key)}
                            />
                            <span
                                className="ml-1 text-sm"
                            >{item.label}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}