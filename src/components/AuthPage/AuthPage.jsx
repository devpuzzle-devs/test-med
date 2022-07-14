/** @module AuthPage */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/slices/userSlice";

const defaultUser = {
  userName: "upworkTest",
  password: "2022",
};

/**
 * Generates a AuthPage with form
 * @param {void} Nothing
 * @return {JSX} jsx
 */
export default function AuthPage() {
  const dispatch = useDispatch();
  const [formDataInput, setFormDataInput] = useState({ userName: "", password: "" });
  const [credentialError, setCredentialError] = useState("");

  /**
   * Collects data from inputs and save in state: formDataInput
   * @param {Event} event - On change input event
   * @return {void} Nothing
   */
  const collectFormData = (e) => {
    setCredentialError("");
    const { name, value } = e.target;
    setFormDataInput((prevState) => ({ ...prevState, [name]: value }));
  };

  /**
   * Checks username and password and save username in redux if its valid
   * or shows error message
   * @param {Event} event - On submit event
   * @return {void} Nothing
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoginCheck =
      defaultUser.userName.toLowerCase() === formDataInput.userName.toLowerCase() &&
      defaultUser.password === formDataInput.password;

    if (isLoginCheck) {
      dispatch(userLogIn(formDataInput.userName));
    } else {
      setCredentialError("Wrong password or username, please try again");
    }
  };

  return (
    <div className="w-full">
      <form
        data-testid="signInForm"
        className="flex flex-col items-center w-2/5 mx-auto my-36 border shadow rounded-lg"
        onSubmit={handleSubmit}
      >
        <label className="font-semibold text-black-800 mt-7"> Sign In</label>
        <input
          value={formDataInput.userName}
          name="userName"
          onChange={collectFormData}
          placeholder="Username"
          className="w-3/4 mt-20 focus:outline-none border-b border-gray-200"
        />
        <input
          value={formDataInput.password}
          name="password"
          onChange={collectFormData}
          placeholder="Password"
          className="w-3/4 mt-10 focus:outline-none border-b border-gray-200"
        />
        {credentialError && (
          <p data-testid="error-message" className="text-red-500 mt-1 w-3/5">
            {credentialError}
          </p>
        )}
        {/* wold be better to make hook */}
        <button className="mt-20 mb-10 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded-full hover:bg-indigo-600 py-5 w-1/2">
          Sign In
        </button>
      </form>
    </div>
  );
}
