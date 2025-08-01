import React from 'react';
import "./SuggestionDropdown.css";

export const SuggestionDropdown = ({ suggestion, handleSelectedItem }) => {
    return (
        <div className='dropdown-container'>
            <ul>
                {suggestion.map((item) => {
                    return <li key={item.id} onMouseDown={() => handleSelectedItem(item.name)}>
                        {item.name}
                    </li>
                })}
            </ul>
        </div>
    )
}
