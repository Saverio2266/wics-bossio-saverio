import React from 'react';

const Summary = ({ movements }) => {
  const totalEntrata = movements
    .filter(movement => movement.type === 'entrata')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalUscita = movements
    .filter(movement => movement.type === 'uscita')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const saldo = totalEntrata - totalUscita;

  return (
    <div>
      <h2>Riepilogo</h2>
      <p>Totale Entrate: {totalEntrata}€</p>
      <p>Totale Uscite: {totalUscita}€</p>
      <p>Saldo: {saldo}€</p>
    </div>
  );
};

export default Summary;