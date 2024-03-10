import React, { useState } from 'react';

function DropDown({ onLanguageChange }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedOption(selectedLanguage);
    onLanguageChange(selectedLanguage); 
  };


  return (
    <form className='text-sm mt-0'>
      <div className='flex justify-between  '>
        <label htmlFor="name" className="inline">Select language</label>
        <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select...</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
          <option value="Italian">Italian</option>
          <option value="French">French</option>
        </select>
      </div>
      <p>Selected option: {selectedOption}</p>
    </form>
  );
}

export default DropDown;
