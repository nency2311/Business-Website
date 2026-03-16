import React, { useContext, useEffect, useState } from "react";
import { EmpDatajson } from "./EmpDatajson";
import { Link } from "react-router-dom";
import NoteContext from '../context/notes/NoteContext';
import HeadingDescription from "./HeadingDescription";

export default function BusinessData(props) {

  const a = useContext(NoteContext);
    useEffect(() =>{
      a?.update();
    },[a]);

  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setData(EmpDatajson);
  }, []);

  const handleSave = (e) => {
    let error = "";

    if (firstName === "") {
      error += "Firstname is Required, ";
    }
    if (lastName === "") {
      error += "Lastname is Required, ";
    }
    if (age <= 0) {
      error += "Age is Required";
    }

    if (error === "") {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: EmpDatajson.length + 1,
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      dt.push(newObject);
      setData(dt);
    } else {
      alert(error);
    }
  };
  const handleClear = () => {
    // console.log("Clickedd");

    setId(0);
    setFirstName("");
    setLastName("");
    setAge("");
    setIsUpdate(false);
  };

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);

    if (dt !== undefined) {
      setIsUpdate(true);
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  };

  const handleUpdate = () => {
    // console.log("clickeddddddd");

    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const dt = [...data];
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;

    setData(dt);
    handleClear();
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure want to delete?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };
  return (
    <>
    {/* -------------------first page------------- */}
    <HeadingDescription one={props.one} onemain={props.onemain} />
    

      <div className="container mt-5">
        
        <h1 className="text-center ">{a?.state?.title}</h1>

        <div className="row">
          <div className="col-lg-3">
            <div className="form-group">
              <label htmlFor="" className="w-100">
                Firstname
              </label>
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                placeholder="Enter firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label htmlFor="" className="w-100">
                Lastname
              </label>
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                placeholder="Enter lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label htmlFor="" className="w-100">
                Age
              </label>
              <input
                className="form-control"
                type="number"
                name=""
                id=""
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-3">
            {!isUpdate ? (
              <button
                className="btn mt-4 orange-btn"
                onClick={(e) => {
                  handleSave(e);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="btn mt-4 orange-btn"
                onClick={() => handleUpdate()}
              >
                Update
              </button>
            )}
            &nbsp;
            <button
              className="btn mt-4 orange-btn"
              onClick={() => handleClear()}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="table-responsive mt-3">
          <table className="border border-collapse table table-striped">
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>ID</th>
                <th>Firstname</th>
                <th>LastName</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>
                      <button
                        className="btn  orange-btn"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn  orange-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}