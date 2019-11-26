import React from 'react';

const InputSetup = ({ value, onChange, placeholder, key, readOnly }) => {
    if(readOnly) return <input type="text" className='form-input' id={key} value={value} placeholder={placeholder} readOnly />
    else return <input type="text" className='form-input' id={key} value={value} onChange={onChange} placeholder={placeholder} />
};

export default InputSetup;