import React, { Fragment} from "react";
import { logout } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";

const Products = ({ history }) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    function logoutUser() {
        dispatch(logout());
        history.push("/");
        alert.success("Logout Successfully");
      }

  return (
    <Fragment>
      {logoutUser()}
    </Fragment>
  );
};

export default Products;