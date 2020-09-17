import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Dropdown from "./Dropdown";
import config from "../config";
import Todolist from "./Todolist";

const UserProfile = () => {
  const [dashboard, setDashboard] = useState(null);
  const history = useHistory();

  const logout = () => {
    /* eslint-disable */
    const toLogout = confirm("Are you sure to logout ?");
    /* eslint-enable */
    if (toLogout) {
      localStorage.clear();
      history.push("/login");
    }
  };

  useEffect(() => {
    fetch(`${config.baseUrl}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("CC_Token"),
      },
    })
      .then((res) => res.json())
      .then(({ error, data }) =>
        error ? history.push("/login") : setDashboard(data)
      );
  }, [history]);

  return (
    <div>
    <div> {user.email}</div>
    <div>{user.password}</div>
    </div>
    );
}
export default UserProfile;