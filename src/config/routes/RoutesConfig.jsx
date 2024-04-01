import { React, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { checkmode } from "../../utils/helpers/mode/checkmode";
import { ToastContainer } from "react-toastify";

const __main__ = lazy(() => import("../../pages/main/Main"));

const __LOADER__ = lazy(() => import("../../pages/redirect/loader/loader"));

const __Dashboard__ = lazy(() => import("../../pages/dashboard/index"));
const __Dashboard__Home__ = lazy(() =>
  import("../../pages/dashboard/content/home/Home")
);
const __Dashboard__Overview__ = lazy(() =>
  import("../../pages/dashboard/content/overview/Overview")
);
const __Dashboard__Abouts__ = lazy(() =>
  import("../../pages/dashboard/content/abouts/Abouts")
);
const __Dashboard__Management__ = lazy(() =>
  import("../../pages/dashboard/content/management/Management")
);
const __Dashboard__Admin__ = lazy(() =>
  import("../../pages/dashboard/content/admin/Admin")
);
const __Dashboard__Historique__ = lazy(() =>
  import("../../pages/dashboard/content/historique/Historique")
);
const __Dashboard__Settings__ = lazy(() =>
  import("../../pages/dashboard/content/settings/Settings")
);

const __SIGN__ = lazy(() => import("../../pages/auth/index"));
const __SIGN__IN__ = lazy(() => import("../../pages/auth/signIn/SignIn"));
const __SIGN__UP__ = lazy(() => import("../../pages/auth/signUp/SignUp"));

const __REDIRECT__ = lazy(() => import("../../pages/redirect/index"));
const __NOT_FOUND__ = lazy(() => import("../../pages/redirect/notFound/index"));
const __UNHAUTORIZED__ = lazy(() =>
  import("../../pages/redirect/unauthorized/index")
);

const RouteConfig = () => {
  checkmode();
  return (
    <Suspense fallback={<__LOADER__ />}>
      <Routes>
        {/* home routes   */}

        <Route path="/" element={<__main__ />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<__Dashboard__ />}>
          <Route path="home" index element={<__Dashboard__Home__ />} />
          <Route path="overview" element={<__Dashboard__Overview__ />} />
          <Route path="abouts" element={<__Dashboard__Abouts__ />} />
          <Route path="management" element={<__Dashboard__Management__ />} />
          <Route path="settings" element={<__Dashboard__Settings__ />} />
          <Route path="admin" element={<__Dashboard__Admin__ />} />
          <Route path="plaintes" element={<__Dashboard__Historique__ />} />
        </Route>

        {/* athentification routes */}
        <Route path="/sign" element={<__SIGN__ />}>
          <Route path="signIn" element={<__SIGN__IN__ />} />
          <Route path="signUp" element={<__SIGN__UP__ />} />
        </Route>

        {/* redirect routes */}
        <Route path="/redirect" element={<__REDIRECT__ />}>
          <Route path="notfound" element={<__NOT_FOUND__ />} />
          <Route path="unhautorized" element={<__UNHAUTORIZED__ />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;
