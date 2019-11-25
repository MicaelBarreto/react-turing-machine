import React from 'react';

const InputFita = ({ key, value, enabled }) => (
    <input type="text" className={''+(enabled ? 'highlight' : <></>)} value={value} id={key} readOnly />
);

export default InputFita;