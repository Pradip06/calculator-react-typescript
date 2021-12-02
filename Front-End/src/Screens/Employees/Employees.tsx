import React, { FunctionComponent } from "react";
import EmployeesMain from "../../Components/EmployeesMain/EmployeesMain";
import HrMainScreen from "../HrMainScreen/HrMainScreen";
import "../../Components/CommonStyle/HrMain.css";
const Employees: FunctionComponent = () => {
  return (
    <>
      <HrMainScreen>
        <div className="hrMain">
          <EmployeesMain></EmployeesMain>
        </div>
      </HrMainScreen>
    </>
  );
};

export default Employees;
