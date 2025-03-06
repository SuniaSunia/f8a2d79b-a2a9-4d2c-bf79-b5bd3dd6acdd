// src/components/TabButton.jsx
const TabButton = ({ children, onClick, active }) => (
    <button
      onClick={onClick}
      className={`tab-button ${active ? 'active' : ''}`}
    >
      {children}
    </button>
  );
  
  export default TabButton;
  