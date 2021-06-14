import React, { useState, useEffect } from "react";
import Login from "./Login";

const Sidebar = ({ setShowSidebar, showSidebar }) => {
  return (
    <>
      {setShowSidebar && (
        <div className={`sidebar`}>
          <div
            className="sidebar__btn"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <box-icon name="menu-alt-right" color="#fff"></box-icon>
          </div>
          <div className={`sidebar__main`}>
            <div className="sidebar__main__avatar">
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14Gj-IJeCFLlxdot5OBlWsXYdmFHzLTm4QoQjyp91XQ=s96-c"
                alt=""
              />
              <h3>Ayush Maurya</h3>
            </div>
          </div>

          <Login variant="sidebar"></Login>
        </div>
      )}
    </>
  );
};

export default Sidebar;
