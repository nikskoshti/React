import React, { Component } from "react";

import Form from "./Form";

//import "./Check.css";

const Checkhead = () => {
  return (
    <thead>
      <tr>
        <th> First_Name </th>
        <th> Last_Name </th>
        <th> Email </th>
        <th> Gender </th>
        <th> Age </th>
        <th> Delete </th>
        <th> Edit </th>
      </tr>
    </thead>
  );
};

const Checkbody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.first_name}</td>
        <td>{row.last_name}</td>
        <td>{row.email}</td>
        <td>{row.gender}</td>
        <td>{row.age}</td>
        <td>
          {" "}
          <button onClick={() => props.removeCharacter(index)}>
            {" "}
            Delete{" "}
          </button>{" "}
        </td>
        <td>
          {" "}
          <button onClick={() => props.Editcharacter(index)}>
            {" "}
            Edit{" "}
          </button>{" "}
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Check = props => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <Checkhead />
      <Checkbody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Check;
