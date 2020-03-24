import React from 'react';

interface SwitchProps {
    defaultValue: string,
    values: Array<string>,
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export const Switch: React.FC<SwitchProps> = ({ values, defaultValue, handleChange }) => (
    <select value={defaultValue} onChange={handleChange}>
        {
            values.map((value, i) =>
                <option key={i} value={value}>{value}</option>
            )
        }
    </select>)