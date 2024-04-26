import React, { useState } from 'react';
import '../styles/Tabs.css';
import { useQuizContext } from '../store/QuizContext';

const Tabs = ({ tabId = 1}) => {
    const { changeLang,curLang } = useQuizContext();
  
    const handleLangChange = (e) => {
      const selectedValue = e.target.value;
      changeLang(selectedValue);
    };

    return (
        <div className="containerTab">
            <div className={`tabs tabs-${tabId}`}>
                <input 
                    type="radio" 
                    id={`radio-1-${tabId}`} 
                    name={`tabs-${tabId}`} 
                    value="English"
                    checked={curLang === 'English'}
                    onChange={handleLangChange} 
                />
                <label className="tab" htmlFor={`radio-1-${tabId}`}>
                    English
                </label>
                <input 
                    type="radio" 
                    id={`radio-2-${tabId}`} 
                    name={`tabs-${tabId}`} 
                    value="Hindi"
                    checked={curLang === 'Hindi'}
                    onChange={handleLangChange} 
                />
                <label className="tab" htmlFor={`radio-2-${tabId}`}>Hindi</label>
                <input 
                    type="radio" 
                    id={`radio-3-${tabId}`} 
                    name={`tabs-${tabId}`} 
                    value="Gujarati"
                    checked={curLang === 'Gujarati'}
                    onChange={handleLangChange} 
                />
                <label className="tab" htmlFor={`radio-3-${tabId}`}>Gujarati</label>
                <span className={`glider glider-${tabId}`}></span>
            </div>
        </div>
    );
};

export default Tabs;
