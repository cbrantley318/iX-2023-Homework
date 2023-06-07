import React from "react";

export default function PokeTable(props) {
  //this creates a table of pokemon in case I want to do that
  return (
    <div className="p-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Height</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
            {props.pokemon.map((poke) => {
                return (
                    <tr key = {poke.name}>
                        <td>{poke.name}</td>
                        <td>{poke.type}</td>
                        <td>{poke.height}</td>
                        <td>{poke.weight}</td>
                    </tr>
                );
            })}
        </tbody>
      </table>
    </div>
  );
}
