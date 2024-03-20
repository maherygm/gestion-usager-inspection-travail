import React from "react";
import { Suspense } from "react";
import {
  FullPageSections,
  Fullpage,
  FullpageContext,
  FullpageNavigation,
  FullpageSection,
} from "@ap.cx/react-fullpage";

import NavBar from "./components/navbar/navBar";
import Banner from "./content/banner/banner";
import Activitie from "./content/activity/Activitie";

const Main = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <NavBar />
        {/* <Fullpage>
          <FullpageNavigation />
          <FullPageSections>
            <FullpageSection
              style={{
                height: "100vh",
              }}
            >
              <div
                style={{
                  height: "100vh",
                }}
              >
                <Banner />
              </div>
            </FullpageSection>
            <FullpageSection
              style={{
                height: "100vh",
              }}
            >
              <div
                style={{
                  height: "100vh",
                }}
              >
                <Activitie />
              </div>
            </FullpageSection>
          </FullPageSections>
        </Fullpage> */}
      </Suspense>

      <div
        style={{
          height: "100vh",
        }}
      >
        <Banner />
      </div>
      <div
        style={{
          height: "100vh",
        }}
      >
        <Activitie />
      </div>
    </div>
  );
};

export default Main;
