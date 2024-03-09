import React, { useState } from 'react';

function DropDown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className='text-sm'>
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
