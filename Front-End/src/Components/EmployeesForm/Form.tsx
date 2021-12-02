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
      <Card
        valueHeight="1000px"
        valueWidth="100%"
        valueBoxShadow="0px 0px 4px #9a9a9a61"
        valueBoxRadius="5px"
      >
      
          {/* <div style={{ padding: "50px", marginTop: "5px", marginLeft: "40px",position:"relative" }}> */}
            <Card
              valueHeight="500px"
              valueWidth="90%"
              valueBoxShadow="0px 0px 4px #9a9a9a61"
              valueBoxRadius="5px"
            >
              <form onSubmit={onSubmit}>
                <label className="key" htmlFor="key">Key Information</label>
                <div>
                  <label className="Sub_Type" htmlFor="Sub_Type">Employement Sub Type</label><br />
                  <input className="Sub" id="Sub" name="Sub" type="text" />
                  {
                    // errors.firstname && <div className="error">Enter your name</div>
                  }
                </div>
                <div>
                  <label className="Gender" htmlFor="Gender">Gender</label><br />
                  <input className="gender" id="gender" name="gender" type="text" />
                  {
                    // errors.lastname && <div className="error">Enter your last name</div>
                  }
                </div>
                <div>
                  <label className="E_Code" htmlFor="E_Code">Employement Code</label><br />
                  <input className="e_Code" id="Code" name="Code" type="text" />
                  {
                    // errors.age && <div className="error">Enter your age</div>
                  }
                </div>
                <div>
                  <label className="Team" htmlFor="Team">Team</label><br />
                  <input className="team" id="team" name="team" type="text" />
                  {
                    // errors.lastname && <div className="error">Enter your last name</div>
                  }
                </div>
                <div>
                  <label className="E_Type" htmlFor="E_Type">Employement Type</label><br />
                  <input className="e_type" id="Code" name="Code" type="text" />
                  {
                    // errors.age && <div className="error">Enter your age</div>
                  }
                </div>
                <div>
                  <label className="Department" htmlFor="Department">Department</label><br />
                  <input className="department" id="department" name="department" type="text" />
                  {
                    // errors.lastname && <div className="error">Enter your last name</div>
                  }
                </div>
                <div>
                  <label className="E_Fullname" htmlFor="E_Fullname">Employement Fullname</label><br />
                  <input className="e_fullname" id="e_fullname" name="e_fullname" type="text" />
                  {
                    // errors.age && <div className="error">Enter your age</div>
                  }
                </div>
                <div>
                  <label className="Branch" htmlFor="Branch">Branch</label><br />
                  <input className="branch" id="branch" name="branch"
                    type="text" />
                  {
                    // errors.lastname && <div className="error">Enter your last name</div>
                  }
                </div>
                <div>
                  <label className="Design" htmlFor="Designation">Designation</label><br />
                  <input className="design" id="designation" name="designation" type="text" />
                  {
                    // errors.age && <div className="error">Enter your age</div>
                  }
                </div>
                <div>
                  <label className="Weekly" htmlFor="Weekly">Weekly off Day</label><br />
                  <input className="weekly" id="weekly" name="Weekly"
                    type="text" />
                  {
                    // errors.lastname && <div className="error">Enter your last name</div>
                  }
                </div>
                <div>
                  <label className="Joining" htmlFor="Joining">Date of Joining</label><br />
                  <input className="joining" id="joining" name="joining" type="text"
                  />
                  {
                    // errors.age && <div className="error">Enter your age</div>
                  }
                </div>
                <div>
                  <label className="Shift" htmlFor="Shift">Shift</label><br />
                  <input className="shift" id="shift" name="shift"
                    type="text" />
                  {
                    // errors.lastname && <div className="error">Enter your last name</div>
                  }
                </div>
                {/* <button type ="submit">Save</button> */}
              </form>
            </Card>
          {/* </div> */}


          {/* <div style={{ padding: "50px", marginTop: "-100px", marginLeft: "40px" }}> */}
            <Card
              valueHeight="1000px"
              valueWidth="90%"
              valueBoxShadow="0px 0px 4px #9a9a9a61"
              valueBoxRadius="5px"
            >
            <form onSubmit={onSubmit}>
            <label className="key" htmlFor="key">Key Information</label>
            <div>
            <label className="Sub_Type" htmlFor="Sub_Type">Employement Sub Type</label><br/>
            <input className="Sub" id="Sub" name="Sub" type ="text" />
          {
            // errors.firstname && <div className="error">Enter your name</div>
          }
            </div>
            <div>
            <label className="Gender" htmlFor="Gender">Gender</label><br />
            <input className="gender" id="gender" name="gender" type ="text" />
          {
            // errors.lastname && <div className="error">Enter your last name</div>
          }
            </div>
            <div>
            <label className="E_Code" htmlFor="E_Code">Employement Code</label><br />
            <input className="e_Code" id="Code" name="Code" type ="text" />
          {
            // errors.age && <div className="error">Enter your age</div>
          }
            </div>
            <div>
            <label className="Team" htmlFor="Team">Team</label><br />
            <input className="team" id="team" name="team" type ="text" />
          {
            // errors.lastname && <div className="error">Enter your last name</div>
          }
            </div>
            <div>
            <label className="E_Type" htmlFor="E_Type">Employement Type</label><br />
            <input className="e_type" id="Code" name="Code" type ="text" />
          {
            // errors.age && <div className="error">Enter your age</div>
          }
            </div>
            <div>
            <label className="Department" htmlFor="Department">Department</label><br/>
            <input className="department" id="department" name="department" type ="text" />
            {
          // errors.lastname && <div className="error">Enter your last name</div>
            }
            </div>
            <div>
            <label className="E_Fullname" htmlFor="E_Fullname">Employement Fullname</
            label><br />
            <input className="e_fullname" id="e_fullname" name="e_fullname" type ="text"/>
              {
                // errors.lastname && <div className="error">Enter your last name</div>
              }
          </div>
          <div>
            <label className="Branch" htmlFor="Branch">Branch</label><br />
            <input className="branch" id="branch" name="branch"
              type="text" />
            {
              // errors.lastname && <div className="error">Enter your last name</div>
            }
          </div>
          <div>
            <label className="Designation" htmlFor="Designation">Designation</label><br/>
        <input className="designation" id="designation" name="designation" type="text"/>
        {
          // errors.age && <div className="error">Enter your age</div>
        }
        </div>
        <div>
          <label className="Weekly" htmlFor="Weekly">Weekly off Day</label><br />
          <input className="weekly" id="weekly" name="Weekly"
            type="text" />
          {
            // errors.lastname && <div className="error">Enter your last name</div>
          }
        </div>
        <div>
          <label className="Joining" htmlFor="Joining">Date of Joining</label><br/>
          <input className="joining" id="joining" name="joining" type="text"
          />
          {
            // errors.age && <div className="error">Enter your age</div>
          }
        </div>
        <div>
          <label className="Shift" htmlFor="Shift">Shift</label><br />
          <input className="shift" id="shift" name="shift"
            type="text" />
          {
            // errors.lastname && <div className="error">Enter your last name</div>
          }
        </div>
        {/* <button type ="submit">Save</button> */}
          </form>
          </Card>
        {/* </div > */}
     
      </Card >
    
 
  );
}

export default Form;