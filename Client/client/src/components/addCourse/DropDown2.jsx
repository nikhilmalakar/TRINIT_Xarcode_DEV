import React, { useState } from 'react';

function DropDown2({ onLanguageChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedOption(selectedLanguage);
    onLanguageChange(selectedLanguage); 
  };

  return (
    <form className='text-sm py-2'>
      <div className='flex justify-between  '>
        <label htmlFor="name" className="inline">Select Proficiency</label>
        <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select...</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
      <p>Selected option: {selectedOption}</p>
    </form>
  );
}

export default DropDown2;
