import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import SuperCalendar from "../containers/SuperCalendar";
import NewEventForm from "../containers/NewEventForm";
import CartList from "../containers/CartList";
import NewCartForm from "../containers/NewCartForm";

const SuperAdminPanel = () => (
  <Tabs>
    <TabList>
      <Tab>Calendar</Tab>
      <Tab>Add Event</Tab>
      <Tab>Carts</Tab>
      <Tab>Add New Cart</Tab>
    </TabList>

    <TabPanel>
      <SuperCalendar />
    </TabPanel>
    <TabPanel>
      <NewEventForm />
    </TabPanel>
    <TabPanel>
      <CartList />
    </TabPanel>
    <TabPanel>
      <NewCartForm />
    </TabPanel>

  </Tabs>
);

export default SuperAdminPanel;