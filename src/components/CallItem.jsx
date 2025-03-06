// src/components/CallItem.jsx
import React from 'react';

const CallItem = ({ call, onArchive, onUnarchive }) => {
  return (
    <div className="call-item">
      <span>{call.caller} - {call.time}</span>
      {call.archived ? (
        <button onClick={() => onUnarchive(call.id)} className="action-btn">Unarchive</button>
      ) : (
        <button onClick={() => onArchive(call.id)} className="action-btn">Archive</button>
      )}
    </div>
  );
};

export default CallItem;
