import React, { useState } from 'react'
import { Chip } from './Chip/Chip';
import "./ChipInputHome.css";

export const ChipInputHome = () => {
    const [inputChipList, setInputChipList] = useState([]);
    const [userInput, setUserInput] = useState("");
    const handleUserInput = (e) => {
        const input = e.target.value;
        setUserInput(input);
    }
    const addNewChipItem = (e) => {
        if (userInput.trim() && e.key === 'Enter') {
            const newChip = {
                id: Date.now(),
                text: userInput
            };
            setInputChipList((prev) => [...prev, newChip]);
            setUserInput("");
        }
    }

    const handleDeleteChip = (id) => {
        const updatedList = inputChipList.filter((item) => item.id != id);
        setInputChipList(updatedList);
    }
    return (
        <div className='chip-outer-container'>
            <input className='chip-input-box' type="text" placeholder='Enter a chip name or tag' value={userInput} onChange={handleUserInput} onKeyDown={addNewChipItem} />
            <div className="chip-display-container">
                {
                    inputChipList.map((item) => {
                        return <Chip key={item.id} data={item} handleDeleteChip={handleDeleteChip} />
                    })
                }
            </div>
        </div>
    )
}
