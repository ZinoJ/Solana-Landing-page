import React from "react";
import "./Input.css";
import { FaSearch } from "react-icons/fa";

function Input({click }) {
  
  return (
    <div className={click ? "input inputActive" : "input"}>
      <div className="input__container">
        <input
          type="text"
          placeholder="Search for blocks, accounts, transactions, programs, and tokens"
        />
        <div className="icon">
          <FaSearch className="searchIcon" />
        </div>
      </div>
    </div>
  );
}

export default Input;
