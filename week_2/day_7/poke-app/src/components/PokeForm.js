import React, { useState } from "react";

export default function PokeForm(props) {
  const [poke, setPoke] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();
    props.onSearch(poke);
  }

  return (
    <div className="px-5">
      <form onSubmit={(e) => onFormSubmit(e)}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a pokemon to add"
            onChange={(x) => setPoke(x.target.value)}
          ></input>
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
