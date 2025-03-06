import ReactDOM from 'react-dom';
// src/App.jsx
import React, { useState } from 'react';
import Header from './Header.jsx';
import './css/app.css';  // Importing the global styles

const App = () => {
  const [activeTab, setActiveTab] = useState('feed'); // 'feed' or 'archived'
  const [calls, setCalls] = useState([
    { id: 1, caller: 'John Doe', time: '10:00 AM', archived: false },
    { id: 2, caller: 'Jane Smith', time: '11:00 AM', archived: false },
    { id: 3, caller: 'Sarah Lee', time: '12:00 PM', archived: false },
    // Add more calls here if needed
  ]);

  const switchTab = (tab) => setActiveTab(tab);

  const handleArchiveCall = (id) => {
    setCalls(calls.map(call => call.id === id ? { ...call, archived: true } : call));
  };

  const handleUnarchiveCall = (id) => {
    setCalls(calls.map(call => call.id === id ? { ...call, archived: false } : call));
  };

  const archiveAll = () => {
    setCalls(calls.map(call => call.archived ? call : { ...call, archived: true }));
  };

  const unarchiveAll = () => {
    setCalls(calls.map(call => call.archived ? { ...call, archived: false } : call));
  };

  const filteredCalls = activeTab === 'feed'
    ? calls.filter(call => !call.archived)
    : calls.filter(call => call.archived);

  return (
    <div className="App">
      <Header />
      <div className="tabs flex space-x-6">
        <button onClick={() => switchTab('feed')} className={`tab-button ${activeTab === 'feed' ? 'active' : ''}`}>
          Activity Feed
        </button>
        <button onClick={() => switchTab('archived')} className={`tab-button ${activeTab === 'archived' ? 'active' : ''}`}>
          Archived Calls
        </button>
      </div>

      <div className="calls-container mt-6">
        {activeTab === 'feed' && (
          <>
            <button onClick={archiveAll} className="action-btn">Archive All</button>
            {filteredCalls.map(call => (
              <div key={call.id} className="call-item">
                <span>{call.caller} - {call.time}</span>
                {call.archived ? (
                  <button onClick={() => handleUnarchiveCall(call.id)} className="action-btn">Unarchive</button>
                ) : (
                  <button onClick={() => handleArchiveCall(call.id)} className="action-btn">Archive</button>
                )}
              </div>
            ))}
          </>
        )}

        {activeTab === 'archived' && (
          <>
            <button onClick={unarchiveAll} className="action-btn">Unarchive All</button>
            {filteredCalls.map(call => (
              <div key={call.id} className="call-item">
                <span>{call.caller} - {call.time}</span>
                <button onClick={() => handleUnarchiveCall(call.id)} className="action-btn">Unarchive</button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;

