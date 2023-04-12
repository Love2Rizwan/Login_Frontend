import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { BASE_URL } from "../Helper";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    OrganisationName: "",
    GstNumber: "",
    MobileNumber: "",
    email: "",
    password: "",
    Address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = ({ currentTarget: input }) => {
    console.log("input changed");
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `4{BASE_URL}/api/users`;
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sing in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleInputChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Middle Name"
              name="middleName"
              onChange={handleInputChange}
              value={data.middleName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleInputChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Organisation Name "
              name="OrganisationName"
              onChange={handleInputChange}
              value={data.OrganisationName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Gst Number"
              name="GstNumber"
              onChange={handleInputChange}
              value={data.GstNumber}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              name="MobileNumber"
              onChange={handleInputChange}
              value={data.MobileNumber}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={data.password}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Address"
              name="Address"
              onChange={handleInputChange}
              value={data.Address}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
