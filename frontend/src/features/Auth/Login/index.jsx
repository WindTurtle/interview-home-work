import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../LoginForm";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/actions";
Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login({ closeDialog }) {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const action = userActions.signInRequest(values);
      await dispatch(action);
      // close dialog
      if (closeDialog) {
        closeDialog();
      }
      // do something here on register successfully
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
