import { Switch, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Loading from "../StyledComponent/Loading";

const AddRecord = lazy(() => import("../1_NewRecord/index.jsx"));
const PatientProfile = lazy(() => import("../2_Patient"));
const DailyLogs = lazy(() => import("../3_DailyLogs"));
const NewPatient = lazy(() => import("../4_NewPatient"));

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
