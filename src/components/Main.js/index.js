// That is the component that changes when the uses switches between pages

import { lazy, Suspense } from "react";
const Content = lazy(() => import("../__Router"));

const Main = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Content />
      </Suspense>
    </>
  );
};

export default Main;

