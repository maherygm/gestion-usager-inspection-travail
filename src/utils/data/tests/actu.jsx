import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('./dataActu.json')
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error('Erreur de chargement des données : ', error);
      });
  }, []);

  return (
    <div>
      <h1>Dernières actualités</h1>
      <div>
        {news.map(item => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Source: {item.source}</p>
            <p>Date: {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPage;
