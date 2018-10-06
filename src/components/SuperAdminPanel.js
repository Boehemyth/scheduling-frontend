import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import SuperCalendar from "../containers/SuperCalendar";
import NewEventForm from "../containers/NewEventForm";

const SuperAdminPanel = () => (
  <Tabs>
    <TabList>
      <Tab>Event Calendar</Tab>
      <Tab>Calendar</Tab>
    </TabList>

    <TabPanel>
      <NewEventForm />
    </TabPanel>
    <TabPanel>
      <SuperCalendar />
    </TabPanel>
  </Tabs>
);

export default SuperAdminPanel;