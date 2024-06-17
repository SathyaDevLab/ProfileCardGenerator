import React, { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { result } from "./ProfileDetailsValidation";
import "./profileForm.css";

export const ProfileForm = () => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    name: "",
    age: "",
    gender: [
      { id: 1, checked: false, sex: "male" },
      { id: 2, checked: false, sex: "female" },
    ],
    number: "",
    email: "",
    image: "",
    skills: [
      { id: 1, checked: false, know: "react" },
      { id: 2, checked: false, know: "css" },
      { id: 3, checked: false, know: "javascrit" },
      { id: 4, checked: false, know: "bootstrap" },
      { id: 5, checked: false, know: "sass" },
      { id: 6, checked: false, know: "html" },
    ],
  });
  const [edit, setEdit] = useState(false);
  const [indx, setIndx] = useState(0);
  const [valid, setValid] = useState({
    name: " ",
    age: " ",
    gender: " ",
    number: " ",
    email: " ",
  });
  function handleData(e, id) {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "age") {
      setData({ ...data, [name]: value.slice(0, 2) });
    } else if (name === "number") {
      setData({ ...data, [name]: value.slice(0, 10) });
    } else if (name === "gender") {
      let items = data[name].map((value) => {
        if (id == 1) {
          let get =
            value.id == 1
              ? { ...value, checked: true }
              : value.id == 2
              ? { ...value, checked: false }
              : "";
          return get;
        } else if (id == 2) {
          let get =
            value.id == 2
              ? { ...value, checked: true }
              : value.id == 1
              ? { ...value, checked: false }
              : "";
          return get;
        }
        return value;
      });
      setData({ ...data, [name]: items });
    } else if (name === "skills") {
      let items = data[name].map((value) =>
        value.id === id ? { ...value, checked: !value.checked } : value
      );
      setData({ ...data, [name]: items });
    } else {
      setData({ ...data, [name]: value });
    }
  }
  function clearField() {
    return {
      name: "",
      age: "",
      gender: [
        { id: 1, checked: false, sex: "male" },
        { id: 2, checked: false, sex: "female" },
      ],
      number: "",
      email: "",
      image: "",
      skills: [
        { id: 1, checked: false, know: "react" },
        { id: 2, checked: false, know: "css" },
        { id: 3, checked: false, know: "javascrit" },
        { id: 4, checked: false, know: "bootstrap" },
        { id: 5, checked: false, know: "sass" },
        { id: 6, checked: false, know: "html" },
      ],
    };
  }
  function clearValid() {
    return {
      ...valid,
      name: " ",
      age: " ",
      gender: " ",
      number: " ",
      email: " ",
    };
  }
  function addDetails(responce) {
    let addMessage = result(
      responce.name,
      responce.age,
      responce.gender,
      responce.number,
      responce.email
    );
    setValid(addMessage);
    if (
      addMessage.name &&
      addMessage.age &&
      addMessage.gender &&
      addMessage.number &&
      addMessage.email
    ) {
      setUser([
        ...user,
        {
          name: responce.name,
          age: responce.age,
          gender: responce.gender,
          number: responce.number,
          email: responce.email,
          image: responce.image,
          skills: responce.skills,
        },
      ]);
      setData(clearField());
      setValid(clearValid());
    }
  }
  function editDetails(val, inx) {
    setData(val);
    setIndx(inx);
    setEdit(true);
  }
  function replaceDetails(value) {
    let replaceMessage = result(
      value.name,
      value.age,
      value.gender,
      value.number,
      value.email
    );
    setValid(replaceMessage);
    if (
      replaceMessage.name &&
      replaceMessage.age &&
      replaceMessage.gender &&
      replaceMessage.number &&
      replaceMessage.email
    ) {
      let update = [...user];
      update[indx] = value;
      setUser(update);
      setData(clearField());
      setValid(clearValid());
    }
  }
  function deleteDetails(inx) {
    console.log("delete details");
    let remove = [...user];
    let result = remove.filter((item, index) => index != inx);
    setUser(result);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="userform">
          <span className="form-space"></span>
          <span className="form-g1"></span>
          <span className="form-g2"></span>
          <span className="form-g3"></span>
          <div className="userInput">
            <form>
              <div className="content">
                <input
                  className="text"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={data.name}
                  onChange={(event) => handleData(event)}
                />
                <div className="error">
                  {!valid.name ? "Enter the correct Name" : ""}
                </div>
              </div>
              <div className="content">
                <input
                  className="text"
                  type="number"
                  placeholder="Age"
                  name="age"
                  value={data.age}
                  onChange={(event) => handleData(event)}
                />
                <div className="error">
                  {!valid.age ? "Enter the correct Age" : ""}
                </div>
              </div>
              <div className="list">
                <ul>
                  {data.gender.map((value) => (
                    <li key={value.id}>
                      <input
                        type="radio"
                        name="gender"
                        className="form-check-input"
                        id={value.sex}
                        onChange={(event) => handleData(event, value.id)}
                        checked={value.checked}
                      />
                      <label className="" htmlFor={value.sex}>
                        {value.sex}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="error">
                  {!valid.gender ? "selectb your gender" : ""}
                </div>
              </div>
              <div className="content">
                <input
                  type="number"
                  className="text"
                  placeholder="Number"
                  name="number"
                  value={data.number}
                  onChange={(event) => handleData(event)}
                />
                <div className="error">
                  {!valid.number ? "Enter the valid Number" : ""}
                </div>
              </div>
              <div className="content">
                <input
                  type="email"
                  className="text"
                  placeholder="Email-ID"
                  name="email"
                  value={data.email}
                  onChange={(event) => handleData(event)}
                />
                <div className="error">
                  {!valid.email ? "Enter the valid Email" : ""}
                </div>
              </div>
              <div className="content">
                <input
                  type="text"
                  className="text"
                  placeholder="Image URL (Optional)"
                  name="image"
                  value={data.image}
                  onChange={(event) => handleData(event)}
                />
              </div>
              <div className="list">
                <ul>
                  {data.skills.map((value) => (
                    <li key={value.id}>
                      <input
                        type="checkbox"
                        name="skills"
                        className="form-check-input"
                        id={value.know}
                        onChange={(event) => handleData(event, value.id)}
                        checked={value.checked}
                      />
                      <label className="" htmlFor={value.know}>
                        {value.know}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
            <div>
              <button
                className="addBtn"
                onClick={() =>
                  !edit ? addDetails(data) : replaceDetails(data)
                }
              >
                Add Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProfileCard
        user={user}
        deleteDetails={deleteDetails}
        editDetails={editDetails}
      />
    </>
  );
};
