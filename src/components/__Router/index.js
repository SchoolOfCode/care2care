import { Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Profile = lazy(() => import("../../__Pages/3_profile"));
const PatientProfile = lazy(() => import("../../__Pages/1_patientProfile"));
const AddRecord = lazy(() => import("../../__Pages/2_addRecord"));
const CheckRecord = lazy(() => import("../../__Pages/4_checkRecord"));
const Settings = lazy(() => import("../../__Pages/5_settings"));

const Content = () => {
  return (
      <Switch>
        <Suspense fallback={<div>Loading</div>}>
          <Route path="/" component={Profile} exact />
          <Route path="/profile" component={Profile} exact />
          {/* idea: add a slug for each patient */}
          <Route path="/patient" component={PatientProfile} exact />
          <Route path="/add" component={AddRecord} exact />
          <Route path="/check" component={CheckRecord} exact />
          <Route path="/settings" component={Settings} exact />
        </Suspense>
      </Switch>
  );
};

export default Content;
