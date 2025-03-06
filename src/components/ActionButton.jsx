// src/components/ActionButton.jsx
const ActionButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="action-btn"
    >
      {children}
    </button>
  );
  
  export default ActionButton;
  