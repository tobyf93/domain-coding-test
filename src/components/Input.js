import React from 'react';

function Input({ placeHolder, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
