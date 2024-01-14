export function Radio(props) {
    return (
        <div className="mb-10">
            <label className={`block mb-2 ${props.custom ? props.custom : 'font-medium'}`}>{props.label}</label>
            {props.custom && <p className='mb-9 text-sm'>{props.description}</p>}


            <div className={`w-full flex ${props.custom ? 'justify-between' : 'gap-5'}`}>
                {props.options.map((item, key) => props.index ? (
                    <label htmlFor={'custom-radio-' + key } key={key} className={`flex ${props.id === 'two' ? 'flex-col' : 'gap-2'}`}>
                        <input
                            type="radio"
                            tabIndex={-1}
                            id={'custom-radio-' + key }
                            name={props.id}
                            value={key}
                            onChange={props.onChange}
                            checked={key === Number(props.value)}
                            required={props.required}
                            data-tag={props.id}
                        />
                        <span>
                            {item.label}
                        </span>
                    </label >
                ) : (
                    <label htmlFor={"radio-" + (key + 1)} key={key} className='flex flex-col'>
                        <input
                            type="radio"
                            tabIndex={-1}
                            id={"radio-" + (key + 1)}
                            name={props.id}
                            value={(key + 1)}
                            onChange={props.onChange}
                            checked={(key + 1) === Number(props.value)}
                            required={props.required}
                            data-tag={props.id}
                        />
                        <span>
                            {item.label}
                        </span>
                    </label >
                ))}
            </div>
        </div >
    );
}