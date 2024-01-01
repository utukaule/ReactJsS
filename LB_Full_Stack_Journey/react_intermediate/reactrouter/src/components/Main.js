import React from "react";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
        {/* this is used to make parent route and  */}
      {/* this gives permission to all child to get access and showcase them on  */}
      <Outlet />
    </div>
  );
};

export default Main;
