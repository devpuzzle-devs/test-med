/** @module MainPage */
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import data from "../../data.json";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../redux/slices/userSlice";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

/**
 * Options for ChartJS-line
 */
export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
    },
  },
};

/**
 * Value for ChartJS-line
 */
export const value = {
  labels: data.map((e) => e.date),
  datasets: [
    {
      label: "patients 2022",
      data: data.map((e) => e.value),
      borderColor: "#4D4DB4",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

/**
 * Generates a MainPage with chart
 * @param {void} Nothing
 * @return {JSX} jsx
 */
export default function MainPage() {
  const { userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  /**
   * clear username in redux
   * @param {void} Nothing
   * @return {void} Nothing
   */
  const logOutHandler = () => {
    dispatch(userLogOut());
  };

  return (
    <div className="flex flex-col">
      <div className="w-4/5 mx-auto">
        {userName && (
          <p data-testid="user-name" className="mt-5 text-center font-semibold">
            {userName}
          </p>
        )}
        <Line data-testid="chart" options={options} data={value} />
      </div>
      <button
        className="ml-auto mr-5 mt-20 font-semibold text-white bg-indigo-700 rounded-full hover:bg-indigo-600 py-5 w-1/5"
        onClick={logOutHandler}
      >
        Sign out
      </button>
    </div>
  );
}
