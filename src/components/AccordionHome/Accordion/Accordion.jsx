import React from 'react';
import "./Accordion.css";

export const Accordion = ({ data, selectedId, handleSelectedItem }) => {
    return (
        <div className='accordion-container'>
            <div className="acc-title" onClick={() => handleSelectedItem(data.id)}>
                <p>{data.title}</p>
                <div className="expand-icon">
                    {selectedId == data.id ? "-" : "+"}
                </div>
            </div>
            <div className={`acc-body ${selectedId == data.id ? 'open' : ''}`}>
                <p>{data.content}</p>
            </div>
        </div>
    )
}
