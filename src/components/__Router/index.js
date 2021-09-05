import { Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const AddRecord = lazy(() => import("../__Pages/1_addRecord"));
const PatientProfile = lazy(() => import("../__Pages/2_patientProfile"));
const DailyLogs = lazy(() => import("../__Pages/3_dailyLogs"));
const Profile = lazy(() => import("../__Pages/4_profile"));
const Settings = lazy(() => import("../__Pages/5_settings"));
const NewPatient = lazy(() => import("../__Pages/6_newPatient"));

const Content = () => {
  return (
    <Switch>
      <Suspense fallback={<div>Loading</div>}>
        <Route path="/" component={Profile} exact />
        <Route path="/profile" component={Profile} exact />
        <Route path="/patient" component={PatientProfile} exact />
        <Route path="/add" component={AddRecord} exact />
        <Route path="/logs" component={DailyLogs} exact />
        <Route path="/settings" component={Settings} exact />
        <Route path="/new" component={NewPatient} exact />
      </Suspense>
    </Switch>
  );
};

export default Content;
