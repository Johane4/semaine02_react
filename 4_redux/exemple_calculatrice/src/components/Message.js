import React from 'react';

const Message = ({ message, result }) => {

  if (message === '') return null;

  return (
    <div>
      <p>{message} {result}</p>
    </div>
  );
}

export default Message;