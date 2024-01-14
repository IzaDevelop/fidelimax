export function Textarea(props) {
    return (
        <div className="mb-10">
            <label htmlFor={props.id} className="block mb-1 font-medium text-base" dangerouslySetInnerHTML={{ __html: props.label }}/>
            <textarea
                className="w-full h-[128px] text-base resize-none block p-2.5 border border-gray-4 rounded-lg placeholder:text-gray-5"
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required={props.required}
                rows={props.rows}
            ></textarea>
        </div>
    )
}
