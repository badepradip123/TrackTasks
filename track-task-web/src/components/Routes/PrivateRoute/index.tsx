import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../../Store/SigninSlice";
import React, { PropsWithChildren } from "react";

const PrivateRoutes: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const signinStatus = useTypedSelector(
    (state) => state.SigninSlice.signinStatus
  );
  if (signinStatus == "signin") {
    return <>{children}</>;
  } else {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }
};
export default PrivateRoutes;
