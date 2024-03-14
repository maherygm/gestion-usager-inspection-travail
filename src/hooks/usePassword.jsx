import React, { useState } from 'react';

const usePassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const inputType = showPassword ? 'text' : 'password';

  return {
    password,
    showPassword,
    inputType,
    handlePasswordChange,
    toggleShowPassword,
  };
};

export default usePassword;
