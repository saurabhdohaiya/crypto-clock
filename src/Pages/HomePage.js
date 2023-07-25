import React, { Suspense } from "react";
import ErrorFallback from "../components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

import Banner from "../components/Banner/Banner";
const CoinsTable = React.lazy(() => import("../components/CoinsTable"));

const Homepage = () => {
  return (
    <>
      <Banner />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <CoinsTable />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Homepage;
