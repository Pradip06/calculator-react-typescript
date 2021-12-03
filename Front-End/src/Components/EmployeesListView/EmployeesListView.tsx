import { FunctionComponent, useEffect } from "react";
import Card from "../Card/Card";
import "./EmployeesListView.css";
import { useState } from "react";
import Button from "../AddMember/AddMember";
import Pencilcon from "../../assets/images/pencilcon.png";
import Checkbox from "../CheckBox/Checkbox";
type props = {
  empProfileDetailsListView: any;
  // history:any;
};

const EmployeesListView: FunctionComponent<props> = ({
  empProfileDetailsListView,
  // history,
}) => {

  // const [isChecked, setIsChecked] = useState(false);
  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // setIsChecked(!isChecked);
  // };
  return (
    <>
      <div
        className="employeesListViewTable"
        style={{ position: "relative", left: "1.7%", top: "25px" }}
      >
        <Card
          valueHeight="410px"
          valueWidth="94%"
          valueBoxShadow="0px 0px 4px #9a9a9a61"
          valueBoxRadius="5px"
        >

          <div style={{ padding: "10px" }}>
            <table className="employeesListViewTable">
              <tr className="empheading">
                <td></td>
                <td></td>
                <td>Full name</td>
                <td>Employee Code</td>
                <td colSpan={2}>Emp. Mail</td>
                <td>Owner</td>
                <td>Reporting to</td>
                <td>Team</td>
                <td>Branch</td>
              </tr>

              {empProfileDetailsListView.map((empDetails: any, id: number) => (
                <tr className="employeesList">
                  <td>
                    <div>
                      <Checkbox
                        // border="none"
                        // boxShadow="inset 0px 0px 3px #9a9a9a61"
                        key={id}
                      // color="#ffff"
                      // height="15px" 
                      // radius="5px" 
                      // width="15px"                      
                      />
                    </div>
                  </td>
                  <td>
                    <div className="employeesListViewProfile"></div>
                  </td>
                  <td>{empDetails.FullName}</td>
                  <td>{empDetails.EmpCode}</td>
                  <td colSpan={2}>{empDetails.EmpEmail}</td>
                  <td>{empDetails.Owner}</td>
                  <td>{empDetails.ReportingTo}</td>
                  <td>{empDetails.Team}</td>
                  <td>{empDetails.Branch}</td>
                  <td>
                    <div>
                      <Button
                        border="1px solid #add8e6"
                        color="#F8F8FF"
                        children=" "
                        height="22px"
                        onClick={() => console.log("You clicked on the button")}
                        radius="50px"
                        width="22px"
                        font-style="normal" fontFamily={"Poppins"} fontSize={"12px"} fontWeight={`normal`}
                        textAlign={`left`}
                      /><img className="PencilIcon" src={Pencilcon} />
                    </div>
                  </td>

                </tr>
              ))}
            </table>
          </div>
        </Card>
      </div >
    </>
  );
};

export default EmployeesListView;

function setFilterData(originalData: any) {
  throw new Error("Function not implemented.");
}
function originalData(originalData: any) {
  throw new Error("Function not implemented.");
}

function searchCallLogs(originalData: (originalData: any) => void, searchedItem: string) {
  throw new Error("Function not implemented.");
}

