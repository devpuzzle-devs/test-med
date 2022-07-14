import { screen, render } from "@testing-library/react";
import store from "../../redux/store";
import MainPage from "./MainPage";
import { Provider } from "react-redux";

describe("Main page tests", () => {
  test("Main page render chart", () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const chart = screen.getByTestId("chart");
    expect(chart).toBeInTheDocument();
  });
  test("Main page render button", () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const MainButton = screen.getByRole("button");
    expect(MainButton).toBeInTheDocument();
  });
});
