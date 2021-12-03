import React, { FunctionComponent, useState } from "react";
import styles from "./Topbar.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
// import { BsPlus } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import StatusFilter from "../StatusFilter/StatusFilter";
import Import from "../../Components/Import/Import";
import { BsColumnsGap } from "react-icons/bs";
import { connect, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { showSnackbarAction, updateStage } from "../Redux/actions";
import { useEffect } from "react";

// import DistributionModel from "../../Componen/ts/Modals/DistributionModel/DistributionModel";

type props = {
  user: any;
  history: any;
  title: string;
  path: string;
  onClick?: () => void;
  owner?: boolean;
  changeOwner?: () => void;
  onChange?: (text: any) => void;
  setStatus?: (status: string) => void;
  filterText: string;
  status?: string;
  taskFilter?: boolean;
  projectFilter?: boolean;
  setColumnModal?: (data: boolean) => void;
  show: boolean;
  userRole: any;
  showStatusBox?: boolean;
  onExport?: () => void;
  onCallLogsImport?: () => void;
  onNotesImport?: () => void;
  onTasksImport?: () => void;
  setBulkEdit?: () => void;
  leadsStage: any;
  setListViewModal?: (data: boolean) => void;
  setApiModal?: (data: boolean) => void;
  setApiFilter?: (data: string) => void;
  apiFilterData?: string;
  organizationId: string;
  setLoad?: (data: boolean) => void;
  setChangeStageModal?: (data: boolean) => void;
  setDeleteRecordsModal?: (data: boolean) => void;
  setPermissionsModal?: (data: boolean) => void;
  transferLeads?: any[];
};

const TopBar: FunctionComponent<props> = ({
  user,
  history,
  title,
  path,
  onClick,
  owner,
  changeOwner,
  onChange,
  setStatus,
  filterText,
  status,
  taskFilter,
  projectFilter,
  setColumnModal,
  show,
  userRole,
  showStatusBox,
  onExport,
  onCallLogsImport,
  onNotesImport,
  onTasksImport,
  setBulkEdit,
  leadsStage,
  setListViewModal,
  setApiModal,
  setApiFilter,
  apiFilterData,
  organizationId,
  setLoad,
  setChangeStageModal,
  setDeleteRecordsModal,
  setPermissionsModal,
  transferLeads,
}) => {
  const [expand, setExpand] = useState(false);
  const [expandImport, setExpandImport] = useState(false);
  const [value, setValue] = useState("");
  const [showDistributionModal, setShowDistributionModal] = useState(false);
  const dispatcher = useDispatch();
  const onStageChange = (event: any, stage: string) => {
    if (event.target.checked) {
      dispatcher(updateStage({ [stage]: true }));
    } else if (!event.target.checked) {
      if (stage !== "FRESH" && stage !== "INTERESTED" && stage !== "CALLBACK") {
        dispatcher(updateStage({ [stage]: false }));
      }
    }
  };

  const apiFilter = (event: any, filter: string) => {
    if (event.target.checked) {
      if (setApiFilter) {
        setApiFilter(filter);
      }
    } else {
      if (setApiFilter) {
        setApiFilter("");
      }
    }
  };

  return (
    <div className={styles.topBar}>
      {showStatusBox === true && (
        <>
          {userRole !== "Sales" && (
            <div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                //   className={styles.statusBox}
                  style={
                    title === "Add Contacts" || title === "drilldown"
                      ? { borderWidth: "0px" }
                      : {}
                  }
                >
                  {owner ? (
                    <p
                    //   className={styles.owner}
                      onClick={() => {
                        transferLeads && transferLeads.includes(true)
                          ? dispatcher(
                              showSnackbarAction(
                                "Leads With Transfer Status TRUE Cannot Be Transfered!!",
                                "error"
                              )
                            )
                          : changeOwner && changeOwner();
                      }}
                    >
                      Change Owner
                    </p>
                  ) : (
                    title !== "Add Contacts" &&
                    title !== "drilldown" && (
                      <div className={styles.innerChild}>
                        <p
                        //   className={styles.statusText}
                          style={
                            filterText === "userPanel"
                              ? { cursor: "pointer" }
                              : {}
                          }
                        >
                          {filterText}
                        </p>
                        {filterText !== "userPanel" && (
                          <>
                            <div className={styles.line}></div>
                            <AiFillCaretDown
                              onClick={() => setExpand(!expand)}
                              className={styles.icon}
                            />
                          </>
                        )}
                      </div>
                    )
                  )}
                </div>
                {owner && (
                  <div
                    // className={styles.statusBox}
                    style={{ marginLeft: "10px", borderWidth: "0px" }}
                  >
                    <p
                      className={styles.owner}
                      onClick={() => {
                        transferLeads && transferLeads.includes(true)
                          ? dispatcher(
                              showSnackbarAction(
                                "Leads With Transfer Status TRUE Cannot Be Edited!!",
                                "error"
                              )
                            )
                          : setBulkEdit && setBulkEdit();
                      }}
                    >
                      Edit Records
                    </p>
                  </div>
                )}
              </div>
              {expand === true && (
                <div
                //   style={{
                    // position: "relative",
                    // display: "flex",
                    // alignItems: "center",
                    // paddingLeft: "22px",
                    // justifyContent: "center",
                //   }}
                >
                  <StatusFilter
                    setStatus={(status) => setStatus && setStatus(status)}
                    status={status}
                    taskFilter={taskFilter}
                    projectFilter={projectFilter}
                    setExpand={(data) => setExpand(data)}
                    expand={expand}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}

      {title === "Add User" && (
        <>
          <button
            // style={{ marginLeft: "20px" }}
            // className={styles.addBox}
            onClick={() => {
              setListViewModal && setListViewModal(true);
            }}
          >
            Set List View
          </button>
          {/* <button */}
            {/* // style={{ marginLeft: "20px" }} */}
            {/* // className={styles.addBox} */}
            {/* // onClick={() => { */}
            {/* //   setLoad && setLoad(true); */}
            {/* //   if (setLoad) { */}
                {/* // correctLeadCount( */}
                {/* //   organizationId, */}
                {/* //   (data) => setLoad(data), */}
                {/* //   dispatcher */}
                {/* // ); */}
            {/* //   } */}
            {/* // }} */}
        {/* //   > */}
            {/* Correct Count */}
          {/* </button> */}
          <button
            // style={{ marginLeft: "20px" }}
            // className={styles.addBox}
            onClick={() => {
              setChangeStageModal && setChangeStageModal(true);
            }}
          >
            Change Stage
          </button>
          <button
            // style={{ marginLeft: "20px" }}
            // className={styles.addBox}
            onClick={() => {
              setDeleteRecordsModal && setDeleteRecordsModal(true);
            }}
          >
            Delete Records
          </button>

          {/* <button
            style={{ marginLeft: "20px" }}
            className={styles.addBox}
            onClick={() => {
              setPermissionsModal && setPermissionsModal(true);
            }}
          >
            Permissions
          </button> */}
        </>
      )}

      {title === "Add Api" && (
        <button
        //   style={{ marginLeft: "20px" }}
        //   className={styles.addBox}
          onClick={() => {
            setApiModal && setApiModal(true);
          }}
        >
          Add API
        </button>
      )}

      {title === "Add News Link" && (
        <button
        //   style={{ marginLeft: "20px" }}
        //   className={styles.addBox}
          onClick={() => {
            setApiModal && setApiModal(true);
          }}
        >
          Add News Link
        </button>
      )}

      {userRole !== "oganization" &&
        userRole !== "superAdmin" &&
        title === "Add Contacts" && (
          <>
            <div className={styles.leadContainer}>
              <div 
            //   className={styles.leadBox}
              >
                <p 
                // className={styles.leadText}
                >Fresh</p>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onStageChange(e, "FRESH");
                  }}
                  checked={leadsStage.FRESH}
                />
              </div>
              <div className={styles.leadBox}>
                <p className={styles.leadText}>Interested</p>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onStageChange(e, "INTERESTED");
                  }}
                  checked={leadsStage.INTERESTED}
                />
              </div>
              <div className={styles.leadBox}>
                <p className={styles.leadText}>Call Back</p>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onStageChange(e, "CALLBACK");
                  }}
                  checked={leadsStage["CALLBACK"]}
                />
              </div>
              <div className={styles.leadBox}>
                <p className={styles.leadText}>Won</p>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onStageChange(e, "WON");
                  }}
                  onClick={() => {
                    onChange && onChange("");
                    setValue("");
                  }}
                  checked={leadsStage.WON}
                />
              </div>
              <div className={styles.leadBox}>
                <p className={styles.leadText}>Lost</p>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onStageChange(e, "LOST");
                  }}
                  onClick={() => {
                    onChange && onChange("");
                    setValue("");
                  }}
                  checked={leadsStage.LOST}
                />
              </div>
              <div className={styles.leadBox}>
                <p className={styles.leadText}>Not Interested</p>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onStageChange(e, "NOT INTERESTED");
                  }}
                  onClick={() => {
                    onChange && onChange("");
                    setValue("");
                  }}
                  checked={leadsStage["NOT INTERESTED"]}
                />
              </div>
              <div className={styles.leadBox}>
                <p className={styles.leadText}>Transfer Leads</p>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    onStageChange(e, "ALL");
                  }}
                  onClick={() => {
                    onChange && onChange("");
                    setValue("");
                  }}
                  checked={leadsStage["ALL"]}
                />
              </div>
            </div>
          </>
        )}

      {title === "Add Api Data" && (
        <>
          <div className={styles.leadContainer}>
            <div className={styles.leadBox}>
              <p className={styles.leadText}>Last 7 Days</p>
              <input
                type="checkbox"
                onChange={(e) => {
                  apiFilter(e, "7");
                }}
                checked={apiFilterData === "7" ? true : false}
              />
            </div>
            <div className={styles.leadBox}>
              <p className={styles.leadText}>Last 30 Days</p>
              <input
                type="checkbox"
                onChange={(e) => {
                  apiFilter(e, "30");
                }}
                checked={apiFilterData === "30" ? true : false}
              />
            </div>
            <div className={styles.leadBox}>
              <p className={styles.leadText}>All</p>
              <input
                type="checkbox"
                onChange={(e) => {
                  apiFilter(e, "all");
                }}
                checked={apiFilterData === "all" ? true : false}
              />
            </div>
          </div>
        </>
      )}

      <div className={styles.box}>
        {title !== "drilldown" && title !== "Lead Distribution" && (
          <div className={styles.searchBox}>
            <input
              className={styles.searchText}
              placeholder="Search"
              value={value}
              onChange={(val) => {
                onChange && onChange(val.target.value);
                setValue(val.target.value);
              }}
            />
            {value.length === 0 ? (
              <AiOutlineSearch />
            ) : (
              <IoClose
                color={"ff0000"}
                onClick={() => {
                  onChange && onChange("");
                  setValue("");
                }}
              />
            )}
          </div>
        )}

        {/* {title !== "Add Task" && */}
        {/* //   title !== "drilldown" && */}
        {/* //   title !== "Add Api" && */}
        {/* //   title !== "Add News Link" && */}
        {/* //   title !== "Add Api Data" && ( */}
            {/* // <button */}
            {/* //   className={styles.addBox} */}
            {/* //   onClick={() => { */}
                {/* // title === "Lead Distribution" */}
                {/* //   ? setShowDistributionModal(true) */}
                {/* //   : history.push(path); */}
            {/* //   }} */}
            {/* // > */}
              {/* <BsPlus size={22} color={"#ffffff"} /> */}
               {/* {title} */}
             
        

         {/* {showDistributionModal && ( */}
         {/* //   <DistributionModel */}
             {/* // open={showDistributionModal} */}
             {/* // organization_id={user.organization_id} */}
             {/* // close={() => { */}
             {/* //   setShowDistributionModal(false); */}
             {/* // }} */}
         {/* //   /> */}
         {/* // )} */}

        {show === true && title !== "drilldown" && (
          <>
            {(userRole === "Lead Manager" ||
              userRole === "organization" ||
              userRole === "Team Lead") && (
              <div
                // className={styles.arrowBox}
                onClick={() => setExpandImport(!expandImport)}
              >
                <FaChevronDown />
                {expandImport === true && (
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "37px",
                    }}
                  >
                    <Import
                      onClick={onClick}
                      setExpandImport={(data) => setExpandImport(data)}
                      onExport={onExport}
                      expand={expandImport}
                      close={() => setExpandImport(false)}
                      onCallLogsImport={onCallLogsImport}
                      onNotesImport={onNotesImport}
                      onTasksImport={onTasksImport}
                    />
                  </div>
                )}
              </div>
            )}
          </>
        )}
        <div className={styles.columnManage}>
          <BsColumnsGap
            size={20}
            onClick={() => {
              setColumnModal && setColumnModal(true);
            }}
          />
          <span className={styles.tooltiptext}>Column Manager</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user.data,
    userRole: state.user.role,
    leadsStage: state.leadsStage.stage,
    organizationId: state.organization.id,
  };
};

export default connect(mapStateToProps)(TopBar);
