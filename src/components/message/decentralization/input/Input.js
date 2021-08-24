import React from "react";

const Input = ({ handleSubmit, user, message, setMessage }) => {
  return (
    <div className="form-input">
      <form onSubmit={handleSubmit}>
        <input
          id="message"
          name={user.role.toLowerCase()}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSubmit}
          type="text"
          required
        />
        <button type="submit">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Input;
