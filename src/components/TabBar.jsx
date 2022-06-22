import React from "react";

function TabBar(props) {
  return (
    <div className="tab-bar">
      <span className={props.classAll} onClick={props.handleAll}>
        All
      </span>
      <span className={props.classMeccan} onClick={props.handleMeccan}>
        Meccan
      </span>
      <span className={props.classMedinan} onClick={props.handleMedinan}>
        Medinan
      </span>
    </div>
  );
}

export default TabBar;
