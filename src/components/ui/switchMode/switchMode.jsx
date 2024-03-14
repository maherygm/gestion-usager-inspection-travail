import React, { useState } from 'react'

// Assets importation
import './_switchMode.scss'

function SwitchMode() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [isChecked, setIsChecked] = useState('');
  const [appIcon, setAppIcon] = useState();

  const switchMode = () => {
    if (localStorage.getItem('supermode') === "true") {
      localStorage.setItem('supermode', "false");
      document.body.classList.remove('darktheme');
      setIsThemeDark(false);
      setIsChecked(null);
      setAppIcon('usericon');
    } else {
      localStorage.setItem('supermode', "true");
      document.body.classList.add('darktheme');
      setIsThemeDark(true);
      setIsChecked('true');
      setAppIcon('moon_icon');
    }
  };

  return (
    <div>
        <label className="toggle">
              <input type="checkbox" checked={localStorage.getItem('supermode') === "true" ? 'checked' : ''} onChange={switchMode} />
              <span></span>
              mode sombre
        </label>
    </div>
  )
}

export default SwitchMode
