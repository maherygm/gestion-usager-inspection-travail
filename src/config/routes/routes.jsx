import { React, Suspense, lazy } from "react";

// Theme mode verification
import { checkmode } from "../../utils/helpers/mode/checkmode";

// Principal route imporatation
const __MAIN__ = lazy(() => import("./main"));
const __AUTH__ = lazy(() => import("./auth"));
const __DASHBOARD__ = lazy(() => import("./dashboard"));

// Redirect route importation
const __LOADER__ = lazy(() => import("../../pages/redirect/loader/loader"));
const __REDIRECT__ = lazy(() => import("./redirect"));

// Test route importation
const __TESTS__ = lazy(() => import("./tests"));

function RouteConfig() {
  checkmode();
  return (
    <Suspense fallback={<__LOADER__ />}>
      <__MAIN__ />
      <__AUTH__ />
      <__DASHBOARD__ />
      <__REDIRECT__ />

      {/* Test routes */}
      <__TESTS__ />
    </Suspense>
  );
}

export default RouteConfig;
