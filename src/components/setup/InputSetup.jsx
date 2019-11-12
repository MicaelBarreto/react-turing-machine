import React from 'react';

const InputSetup = ({ value, onChange, placeholder, key }) => (
    <input type="text" className='form-input' id={key} value={value} onChange={onChange} placeholder={placeholder} />
);

export default InputSetup;