import React from 'react';

import './InputFita.styles.scss';

const InputFita = ({ key, value, enabled }) => (
    <input type="text" className={''+(enabled ? 'highlight' : <></>)} value={value} id={key} readOnly />
);

export default InputFita;