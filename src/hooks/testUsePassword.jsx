import React from 'react';
import usePassword from './usePassword';

function PasswordComponent() {
  const {
    password,
    showPassword,
    inputType,
    handlePasswordChange,
    toggleShowPassword,
  } = usePassword();

  return (
    <div>
      <input
        type={inputType}
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </button>
    </div>
  );
}

export default PasswordComponent;
