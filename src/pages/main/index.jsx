import {
  FullPageSections,
  Fullpage,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import React from "react";
import NavBar from "./components/navbar/navBar";
import Banner from "./content/banner/banner";
const index = () => {
  return (
    <div>
      <NavBar />
      <Fullpage>
        <FullPageSections>
          <FullpageSection
            style={{
              height: "100vh",
            }}
          >
            <Banner />
          </FullpageSection>
          <FullpageSection
            style={{
              height: "100vh",
            }}
          >
            2
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
};

export default index;
