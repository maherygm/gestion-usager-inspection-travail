import React, { useEffect, useState } from 'react';

function generateTokenExpirationTime(expirationMinutes) {
  const currentTimestamp = new Date().getTime();
  const expirationTimestamp = currentTimestamp + expirationMinutes * 60 * 1000;
  return expirationTimestamp;
}

function TokenExpiration() {
  const [expirationTime, setExpirationTime] = useState(null);

  // Exemple : générer un token expirant dans 30 minutes lors du chargement du composant
  useEffect(() => {
    const expirationMinutes = 30;
    const tokenExpirationTime = generateTokenExpirationTime(expirationMinutes);
    setExpirationTime(tokenExpirationTime);
  }, []);

  return (
    <div>
      {expirationTime && (
        <p>
          Token expiration timestamp: {expirationTime}
        </p>
      )}
    </div>
  );
}

export default tokenExpirationTime;
