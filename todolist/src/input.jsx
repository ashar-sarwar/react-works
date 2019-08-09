import React from "react";

const Input = ({ name, label, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <br />
            <input size='30' {...rest} name={name} id={name} />
        </div>
    );
};

export default Input;
