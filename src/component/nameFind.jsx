import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";

const Namefind = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.nationalize.io?name=${name}`
      );
      const country = response.data.country[0].country_id;
      setCountry(country);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="input-group">
      <form onSubmit={handleSubmit}>
        <label className="user-label" />
        <input
          className="input"
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="First Name"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {country && (
        <p>
          The country of origin for this name ({name}) is {country}.
        </p>
      )}
    </div>
  );
};

export default Namefind;
