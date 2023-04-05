import React, { useState } from "react";

function Todo() {
  const [people, setPeople] = useState([]);
  const [currentPerson, setCurrentPerson] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPerson({ ...currentPerson, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPeople([...people, currentPerson]);
    setCurrentPerson({ firstName: "", lastName: "", age: "" });
  };

  const deleteHandler = () => {
    people.filter();
  };
  console.log(people);
  return (
    <div>
      <h1>People Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={currentPerson.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={currentPerson.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={currentPerson.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            <div>
              {" "}
              {person.firstName} {person.lastName}, {person.age}
            </div>
            <button onClick={deleteHandler}> delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
