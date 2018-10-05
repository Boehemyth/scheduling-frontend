import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const UserAdminPanel = () => (
  <Tabs>
    <TabList>
      <Tab>Current Schedule</Tab>
      <Tab>Account Admin</Tab>
    </TabList>

    <TabPanel>
      <h2>List of scheduled events/dates</h2>
    </TabPanel>
    <TabPanel>
      <h2>Update account data here</h2>
    </TabPanel>
  </Tabs>
);

export default UserAdminPanel;