import React, { useState, useEffect } from 'react';
import './App.css';

function QuoteGenerator() {
  const [quote, setQuote] = useState("Clique abaixo para gerar uma nova citação!");

  const fetchQuote = async () => {
    try {
      const response = await fetch('http://localhost:5000/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex].text);
    } catch (error) {
      console.error("Erro ao buscar citação:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className="container">
      <h1>Citação do Dia</h1>
      <p>{quote}</p>
      <button onClick={fetchQuote}>Nova Citação</button>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
}

export default QuoteGenerator;
