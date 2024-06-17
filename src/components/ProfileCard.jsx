import React from "react";
import "./profileCard.css";
import defaultProfile from "../assets/default-profile.jpg";
export const ProfileCard = ({ user, deleteDetails, editDetails }) => {
  return (
    <>
      {user.map((value, index) => (
        <div className="profile" key={index}>
          <div className="userCard">
            <div className="image bg-primary">
              <img
                src={value.image !== "" ? value.image : defaultProfile}
                alt="UserImage"
              />
              <div className="space-blue bg-primary "></div>
              <div className="space-white"></div>
            </div>
            <div className="details ">
              <h2>{value.name}</h2>

              <table>
                <tbody>
                  <tr>
                    <td>Age:</td>
                    <td>{value.age}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>
                      {value.gender.map((val, inx) => (
                        <span key={inx}>{val.checked ? val.sex : ""}</span>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Mob No:</td>
                    <td>{value.number}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{value.email}</td>
                  </tr>
                  <tr>
                    <td>Skills:</td>
                    <td>
                      <div className="list">
                        {value.skills.map((val, inx) => (
                          <span key={inx}>
                            {val.checked ? val.know : ""}
                            <span style={{ margin: "0px 1px" }}>
                              {val.checked ? "," : ""}
                            </span>
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn1"
                        onClick={() => editDetails(value, index)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn2"
                        onClick={() => deleteDetails(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
