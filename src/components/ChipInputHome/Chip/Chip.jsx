import React from 'react';
import "./Chip.css";

export const Chip = ({ data, handleDeleteChip }) => {
    return (
        <div className='chip-container'>
            <span className='chip-data'>{data.text}</span>
            <span className='chip-delete-icon' onClick={() => handleDeleteChip(data.id)}>X</span>
        </div>
    )
}
