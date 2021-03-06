import React from "react";

import Layout from "../components/layout/layout";
import SubLinks from "../components/sublink/subLink";
import Activity from "../components/activity/activity";
import clock from "../icons/clock_green.svg";

export default () => {
  let links = [
    { name: "overview", active: false },
    { name: "teams", active: false },
    { name: "modules", active: true },
    { name: "files", active: false },
    { name: "progress", active: false },
  ];

  return (
    <Layout>
      <SubLinks
        links={links}
        displaySwitcher={true}
        icon={clock}
        duration="6 weeks"
      />
      <Activity />
    </Layout>
  );
};
