import React, { useState } from 'react';
import { Accordion } from './Accordion/Accordion';
import "./AccordionHome.css";

export const AccordionHome = () => {
  const [selectedId, setSelectedId] = useState(0);
  const faqList = [
    {
      id: 1,
      title: "What is best part of this product ?",
      content: "This is one of the best in the market as per the cost and performance."
    },
    {
      id: 2,
      title: "Is is best in the market ?",
      content: "This is one of the best in the market as per the cost and performance."
    },
    {
      id: 3,
      title: "What is is the warrenty of this product ?",
      content: "This is one of the best in the market as per the cost and performance."
    },
    {
      id: 4,
      title: "How this product works ?",
      content: "This is one of the best in the market as per the cost and performance."
    },
  ];
  const handleSelectedItem = (id) => {
    if (id == selectedId) {
      setSelectedId(0);
    } else {
      setSelectedId(id);
    }
  }
  return (
    <div className='acc-main-container'>
      {
        faqList.map((data) => {
          return <Accordion key={data.id} data={data} selectedId={selectedId} handleSelectedItem={handleSelectedItem} />
        })
      }
    </div>
  )
}
