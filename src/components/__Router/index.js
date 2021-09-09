import { Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loading from "../Styled/Loading";

const AddRecord = lazy(() => import("../1_NewRecord/index.jsx"));
const PatientProfile = lazy(() => import("../2_Patient"));
const DailyLogs = lazy(() => import("../__Pages/3_dailyLogs"));
const NewPatient = lazy(() => import("../__Pages/4_newPatient"));

const Content = () => {
  return (
    <Switch>
      <Suspense fallback={<Loading/>}>
        <Route path="/" component={PatientProfile} exact />
        <Route path="/add" component={AddRecord} exact />
        <Route path="/logs" component={DailyLogs} exact />
        <Route path="/new" component={NewPatient} exact />
      </Suspense>
    </Switch>
  );
};

export default Content;
