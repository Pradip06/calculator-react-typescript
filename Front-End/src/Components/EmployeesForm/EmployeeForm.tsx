import { FunctionComponent } from "react";
import AttendanceDashboard from "../../Components/AttendanceDashboard/AttendanceDashboard";
import HrMainScreen from "../../Screens/HrMainScreen/HrMainScreen";
import "../../Components/CommonStyle/HrMain.css";
import Form from "../EmployeesForm/Form"
import * as serviceWorker from '../../serviceWorker';
const EmployeeForm: FunctionComponent = () => {
  return (
    <>
      <HrMainScreen>
        <div className="hrMain">
           <Form />
        </div>
      </HrMainScreen>
       
    </>
  );
};
serviceWorker.unregister();
export default EmployeeForm;
