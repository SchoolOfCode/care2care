import { HashRouter as Router, Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("../../__Pages/1_home"));
const Profile = lazy(() => import("../../__Pages/2_profile"));
const PatientProfile = lazy(() => import("../../__Pages/3_patientProfile"));
const AddRecord = lazy(() => import("../../__Pages/4_addRecord"));
const CheckRecord = lazy(() => import("../../__Pages/5_checkRecord"));
const Settings = lazy(() => import("../../__Pages/6_settings"));

const Content = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading</div>}>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} exact />
          {/* idea: add a slug for each patient */}
          <Route path="/patient" component={PatientProfile} exact />
          <Route path="/add" component={AddRecord} exact />
          <Route path="/check" component={CheckRecord} exact />
          <Route path="/settings" component={Settings} exact />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Content;
