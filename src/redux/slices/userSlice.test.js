import reducer, { userLogIn, userLogOut } from "./userSlice";

describe("userSlice test", () => {
  test("initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ userName: null, isLoggedIn: false });
  });
  test("add username", () => {
    expect(reducer(undefined, userLogIn("userName"))).toEqual({
      userName: "userName",
      isLoggedIn: true,
    });
  });
  test("clear username", () => {
    expect(reducer(undefined, userLogOut())).toEqual({
      userName: null,
      isLoggedIn: false,
    });
  });
});
