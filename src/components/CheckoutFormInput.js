import React, {useState} from 'react'

export default function CheckoutFormInput({className, type, name, placeholder, required, maxlength, checkMethod, setValue}) {
    const STATUS__ERROR = "error"
    const STATUS__EMPTY = "empty"
    const STATUS__DEFAULT = ""

    const [status, setStatus] = useState("")

    function isEmpty(value){return !value || value === ""}
    
    return (
        <div className={`${className} ${status}`}>
            <div className="error-msg">{status === STATUS__EMPTY? "Required field" : "Wrong format"}</div>
            <label htmlFor={name} >{name}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required
                onBlur={(e) => {
                    if(isEmpty(e.target.value))
                        setStatus(STATUS__EMPTY)
                    else
                        checkMethod(e.target.value) ? setStatus(STATUS__DEFAULT) : setStatus(STATUS__ERROR)
                }}
                onChange={(e) => setValue(e.target.value)}
                required={required}/>
        </div>
    )
}
