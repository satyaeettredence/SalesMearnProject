import React from 'react';

const TestCard = ({ user }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h2>{user.name}</h2>
      <p>Email: {user.x}</p>
      <p>City: {user.y}</p>
    </div>
  );
};

export default TestCard;