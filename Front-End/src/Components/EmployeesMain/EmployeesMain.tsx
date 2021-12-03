import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import OptionSearchBox from "../OptionSearchBox/OptionSearchBox";
import PlusIcon from "../../assets/images/plus_icon.png";
import DropDownIcon from "../../assets/images/dropdown_arrow.png";
import FilterIcon from "../../assets/images/filtre_icon.png";
import CrossIcon from "../../assets/images/crossicon.png";
import OptionIcon from "../../assets/images/optionIcon.png";
import SearchBox from "../SearchBox/SearchBox";
import Button from "../AddMember/AddMember"
import doticon from "../../assets/images/three dot icon.png";
import "./EmployeesMain.css";
import SearchIcon from "../../assets/images/sideBarIcon/Search.svg";
import FilterButton from "../../Components/Icons/IconsBtn"
import EmployeesGridView from "../EmployeesGridView/EmployeesGridView";
import { useLocation } from "react-router";
import EmployeesListView from "../EmployeesListView/EmployeesListView";
import TopBar from "../TopBar/Topbar";
import commonStyle from "../common.module.css";


type Props = {
  history:any;
};
const EmployeesMain = ({history}:Props) =>{
  
  // const [filterData, setFilterData] = useState<any[] | undefined>(undefined);
// const [callList, setCallList] = useState<any[] | undefined>(undefined);
// const [selectedRows, setSelectedRows] = useState<any[]>([]);
// const [selectedRowsData, setSelectedRowsData] = useState<any[]>([]);
// const [searchedItem, setsearchedItem] = useState("");
// const [columnModal, setColumnModal] = useState(false);
// const [originalData, setOriginalData] = useState<any[] | undefined>(
  // undefined
// );
// const [contactsMap, setcontactsMap] = useState<any>(undefined);

// useEffect(() => {
  // if (user.organization_id) {
    // if (role === "Sales") {
      // console.log(user);
      // fetchUserCallLogs((data) => setCallList(data), user.uid);
    // } else {
      // fetchCallLogs((data) => setCallList(data), user.organization_id);
    // }
  // }
// }, [role, user.organization_id]);
// useEffect(() => {
  // if (searchedItem.length === 0) {
    // if (originalData) {
      // setFilterData(originalData);
    // }
  // } else {
    // if (originalData) {
      // const data = searchCallLogs(originalData, searchedItem);
      // setFilterData(data);
    // }
  // }
  // eslint-disable-next-line
// }, [searchedItem]);
// useEffect(() => {
  // let uidMap: { [key: string]: string } = {};
  // if (organizationUsers) {
    // organizationUsers.map((user: any) => {
      // if (uidMap[user.uid]) {
        // uidMap[user.uid] = user.user_first_name + " " + user.user_last_name;
      // } else {
        // uidMap[user.uid] = user.user_first_name + " " + user.user_last_name;
      // }
    // });
    // setcontactsMap(uidMap);
  // }
// }, [organizationUsers]);
// useEffect(() => {
  // if (user.profile === "Sales") {
    // if (callList !== undefined) {
      // let finalList: any[] = [];
      // callList?.forEach((item) => {
        // item.data.map((val: any) => {
          // finalList.push({
            // uid: item.uid,
            // created_by: user.uid,
            // duration: val.callTime,
            // created_at: val.created_at,
            // customer_name: item.customer_name,
            // stage: item.stage,
            // contact_owner_email: item.contact_owner_email,
            // project: item.project,
            // location: item.location,
            // budget: item.budget,
            // contact_no: item.contact_no,
            // inventory_type: item.inventory_type,
            // source: item.source,
            // transfer_status: item.transfer_status,
          // });
        // });
      // });
      // setOriginalData(finalList);
    // }
  // } else {
    // if (callList !== undefined && contactsMap !== undefined) {
      // let finalList: any[] = [];
      // callList?.forEach((item) => {
        // item.data.map((val: any) => {
          // finalList.push({
            // uid: item.uid,
            // created_by: contactsMap[item.uid],
            // duration: val.callTime,
            // created_at: val.created_at,
            // customer_name: item.customer_name,
            // stage: item.stage,
            // contact_owner_email: item.contact_owner_email,
            // project: item.project,
            // location: item.location,
            // budget: item.budget,
            // contact_no: item.contact_no,
            // inventory_type: item.inventory_type,
            // source: item.source,
            // transfer_status: item.transfer_status,
          // });
        // });
      // });
      // console.log(finalList);
      // setOriginalData(finalList);
    // }
  // }
// }, [callList, contactsMap]);
// useEffect(() => {
  // if (role === "Lead Manager" || role === "CEO" || role === "Sales") {
    // setFilterData(originalData);
  // }
  // if (role === "Team Lead") {
    // if (originalData) {
      // setFilterData(
        // originalData.filter((item) => teamLeadUsers?.includes(item.uid))
      // );
    // }
  // }
// }, [originalData, role, teamLeadUsers]);

  let Designation = [
    "software enginner",
    "designer",
    "sales Man",
    "font-end Devloper",
    "back-end devloper",
    "full stack devloper",
  ];
  let empProfileDetails = [
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
    {
      username: "username",
      empMail: "xyz@gmail.com",
      Designation: "Designation",
    },
  ];

  let empProfileDetailsListView = [
    {
      FullName: "Simran Chawala",
      EmpCode: "87585",
      EmpEmail: "xyz@gmail.com",
      Owner: "Kajal Chawala",
      ReportingTo: "Himanshu",
      Team: " Designing",
      Branch: "Value First",
    },
    {
      FullName: "Simran Chawala",
      EmpCode: "87585",
      EmpEmail: "xyz@gmail.com",
      Owner: "Kajal Chawala",
      ReportingTo: "Himanshu",
      Team: " Designing",
      Branch: "Value First",
    },
    {
      FullName: "Simran Chawala",
      EmpCode: "87585",
      EmpEmail: "xyz@gmail.com",
      Owner: "Kajal Chawala",
      ReportingTo: "Himanshu",
      Team: " Designing",
      Branch: "Value First",
    },
    {
      FullName: "Simran Chawala",
      EmpCode: "87585",
      EmpEmail: "xyz@gmail.com",
      Owner: "Kajal Chawala",
      ReportingTo: "Himanshu",
      Team: " Designing",
      Branch: "Value First",
    },
    {
      FullName: "Simran Chawala",
      EmpCode: "87585",
      EmpEmail: "xyz@gmail.com",
      Owner: "Kajal Chawala",
      ReportingTo: "Himanshu",
      Team: " Designing",
      Branch: "Value First",
    },
    {
      FullName: "Simran Chawala",
      EmpCode: "87585",
      EmpEmail: "xyz@gmail.com",
      Owner: "Kajal Chawala",
      ReportingTo: "Himanshu",
      Team: " Designing",
      Branch: "Value First",
    },
    {
      FullName: "Simran Chawala",
      EmpCode: "87585",
      EmpEmail: "xyz@gmail.com",
      Owner: "Kajal Chawala",
      ReportingTo: "Himanshu",
      Team: " Designing",
      Branch: "Value First",
    },
    {
      FullName: "Simran Chawala",
      EmpCode: "87585",
      EmpEmail: "xyz@gmail.com",
      Owner: "Kajal Chawala",
      ReportingTo: "Himanshu",
      Team: " Designing",
      Branch: "Value First",
    },
  ];
  let location = useLocation();
  return (
    <>
      <div className={commonStyle.topBar}>
        <TopBar
          history={history}
          title={" "}
          path={" "}
          // onChange={(val) => setsearchedItem(val)}
          filterText={"Status"}
          // setColumnModal={(data) => setColumnModal(data)}
          show={false}
          showStatusBox={false}
        />
      </div>
      <div>
        <Card
          valueHeight="960px"
          valueWidth="100%"
          valueBoxShadow="-1px 1px 2px #9a9a9a61"
          valueBoxRadius="0px"
        >
          <div className="employeesSearchBoxContainer">
            <div style={{ marginLeft: "12px", marginTop: "15px" }}>
              {/* <span  className="btn">Add member</span> */}
              {/* <SearchBox */}
              {/* // searchBorderRadiusValue="5px" */}
              {/* // searchWidthValue="110px" */}
              {/* // searchHeightValue="20px" */}
              {/* // searchPlaceholderValue="Add member" */}
              {/* // searchTypeValue="" */}
              {/* // searchBorderOrNot="1px solid #add8e6" */}
              {/* // searchBoxPaddingLeft="10px" */}
              {/* // />  */}
              <Button
                border="1px solid #add8e6"
                color="#F8F8FF"
                children="Add member"
                height="35px"
                onClick={() => console.log("You clicked on the button")}
                radius="3px"
                width="120px"
                font-style="normal" fontFamily={"Poppins"} fontSize={"12px"} fontWeight={`normal`} textAlign={`left`} />
              <img className="plusIcon" src={PlusIcon} alt="search" />
            </div>
            <div style={{ marginLeft: "10px" }}>
              {/* <SearchBox */}
              {/* // searchBorderRadiusValue="10px" */}
              {/* // searchWidthValue="156px" */}
              {/* // searchHeightValue="23px" */}
              {/* // searchPlaceholderValue="Employee mail" */}
              {/* // searchTypeValue="text" */}
              {/* // searchBorderOrNot="1px solid #CECECE" */}
              {/* // searchBoxPaddingLeft="10px" */}
              {/* /> */}
            </div>
            <div style={{ marginLeft: "5px", marginTop: "-2px" }}>
              <OptionSearchBox
                searchOptionBorderRadiusValue="3px"
                searchOptionWidthValue="120px"
                searchOptionHeightValue="23px"
                searchOptionPlaceholderValue="Employee Status"
                searchOptionListValue="Designation"
                searchOptionBorderOrNot="1px solid #add8e6"
                searchOptionBoxPaddingLeft="2px"
                searchOptions={Designation} fontFamily={"Poppins"} fontSize={"11px"}
                // BoxColor={`#F8F8FF`}                             
                searchColor={`#F8F8FF`}
              />
              <img className="DropDownIcon" src={DropDownIcon} alt="search" />
            </div>
            <div style={{ marginLeft: "540px", marginTop: "15px" }}>
              <FilterButton
                border="1px solid #add8e6"
                color="#ffff"
                width="40px"
                height="40px"
                onClick={() => console.log("You clicked on the button")}
                radius="3px"

              /><img className="FilterIcon" src={FilterIcon} alt="search" />
            </div>
            <div style={{ marginLeft: "10px", marginTop: "15px" }}>
              <FilterButton
                border="1px solid #add8e6"
                color="#ffff"
                width="40px"
                height="40px"
                onClick={() => console.log("You clicked on the button")}
                radius="3px" />
            </div><img className="doticon" src={doticon} alt="search" />
            <div>
              <img className="CrossIcon" src={CrossIcon} alt="search" />
            </div>

            <div>
              <img className="OptionIcon" src={OptionIcon} alt="search" />
            </div>

            {/* </div> */}
            {/* <div> */}
            {/* <input className="EmployeesSearchSubmit" type="submit" value="" /> */}
            {/* <img */}
            {/* // className="empSearchIcon" */}
            {/* // src={SearchIcon} */}
            {/* // alt="Employees Search" */}
            {/* // /> */}
            {/* </div> */}
          </div>
          <div>
            {location.pathname === "/employees" ? (
              <EmployeesGridView empProfileDetails={empProfileDetails} />
            ) : location.pathname === "/employees/list" ? (
              <EmployeesListView
                  empProfileDetailsListView={empProfileDetailsListView}
                />
            ) : (
              <h1>Wrong route</h1>
            )}
          </div>
        </Card>
      </div >
    </>
  );
};

export default EmployeesMain;
function originalData(originalData: any) {
  throw new Error("Function not implemented.");
}

function setFilterData(originalData: (originalData: any) => void) {
  throw new Error("Function not implemented.");
}

function searchCallLogs(originalData: (originalData: any) => void, searchedItem: string) {
  throw new Error("Function not implemented.");
}

