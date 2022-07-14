import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import store from "../../redux/store";
import AuthPage from "./AuthPage";
import { Provider } from "react-redux";

describe("Auth page tests", () => {
  test("Auth page render form", () => {
    render(
      <Provider store={store}>
        <AuthPage />
      </Provider>
    );
    const form = screen.getByTestId("signInForm");
    expect(form).toBeInTheDocument();
  });
  test("Auth page render button", () => {
    render(
      <Provider store={store}>
        <AuthPage />
      </Provider>
    );
    const authButton = screen.getByRole("button");
    expect(authButton).toBeInTheDocument();
  });
  test("Auth page render error message", () => {
    render(
      <Provider store={store}>
        <AuthPage />
      </Provider>
    );
    userEvent.type(screen.getByPlaceholderText("Username"), "user");
    userEvent.type(screen.getByPlaceholderText("Password"), "password");
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });
});
