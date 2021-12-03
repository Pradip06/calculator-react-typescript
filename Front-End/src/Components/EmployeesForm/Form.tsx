import React from "react";
import { useForm } from 'react-hook-form'
// import "./App.css";
import "../EmployeesForm/Form.css"
import Card from "../Card/Card";

type Profile = {
  key: string;
  Sub_Type: string;
  Gender: string;
  E_Code: any;
  Team: any;
  E_Type: string;
  Department: string;
  E_Fullname: string;
  Branch: string;
  Designation: string;
  Weekly: string;
  Joining: any;
  Shift: any;
}

function Form() {
  const { register, handleSubmit } = useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    alert("submit all data")
  })

  return (
    // <div style={{ display: "flex", flexWrap: "wrap",position:"relative",minHeight:"5000px" }}>
    // {/* <div className="employeesContainer"> */}
    <>
       
    </>


  );
}

export default Form;