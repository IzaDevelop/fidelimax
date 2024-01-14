'use client'
import { useRef } from "react";

export function Select(props) {
    const selectRef = useRef(null);

    return (
        <div className={`w-full flex flex-col gap-3 relative mb-10`}>
            <label htmlFor={props.id} className="text-base">
                {props.label}
            </label>
            {props.required && (
                <input
                    tabIndex={-1}
                    className="opacity-0 w-full h-[1px] absolute right-0 bottom-0 z-0 "
                    value={props.value}
                    onChange={e => { }}
                    onFocus={() => selectRef.current.focus()}
                    required
                />
            )}
            <select
                ref={selectRef}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                className="w-full block p-2.5 text-base border border-gray-4 rounded-lg"
            >
                <option hidden>{props.placeholder}</option>
                {props.options.map((item, key) => (
                    <option key={key} value={item.value} label={item.label}>{item.label}</option>
                ))}
            </select>
        </div>
    );
}