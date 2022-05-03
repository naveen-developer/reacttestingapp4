import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Appheader from "./Appheader";
import Createpost from "./Createpost";
import Signup from "./Signup";
import Signin from "./Signin";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />

        <Route exact path="/signin" element={<Signin />} />

        <Route
          exact
          path="/"
          element={
            <>
              <Appheader />
              <App />
            </>
          }
        />

        <Route
          exact
          path="/profile"
          element={
            <>
              <Appheader />
              <Profile />
            </>
          }
        />

        <Route
          exact
          path="/createpost"
          element={
            <>
              <Appheader />
              <Createpost />
            </>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
