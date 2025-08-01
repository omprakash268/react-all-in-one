import React, { useEffect, useRef, useState } from 'react';
import "./AutoComplete.css";
import { SuggestionDropdown } from './SuggestionDropdown/SuggestionDropdown';

export const AutoComplete = () => {
    const [userInput, setUserInput] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const timeoutRef = useRef(null);
    const handleInputChange = (e) => {
        const input = e.target.value.trim();
        setUserInput(input);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            fetchData();
        }, 500);
    }
    const fetchData = async () => {
        try {
            const queryUrl = `https://dummyjson.com/recipes/search?limit=0&q=${userInput}`
            const defaultUrl = 'https://dummyjson.com/recipes/search?limit=0';
            const url = userInput ? queryUrl : defaultUrl;
            const res = await fetch(url);
            const data = await res.json();
            setSuggestion(data.recipes || []);
        } catch (err) {
            console.log(err);
        }
    }

    const hanldeFocus = () => {
        setIsFocused(true);
    }

    const hanldeBlur = () => {
        setIsFocused(false);
    }

    const handleSelectedItem = (item) => {
        setUserInput(item);
        hanldeBlur();
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='p-4 main-autocomplete-container'>
            <input className="user-input-box" type="text" value={userInput} onChange={handleInputChange} onFocus={hanldeFocus} onBlur={hanldeBlur} />
            {isFocused && <SuggestionDropdown suggestion={suggestion} handleSelectedItem={handleSelectedItem} />}
        </div>
    )
}
