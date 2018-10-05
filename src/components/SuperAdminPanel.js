import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

// import BigCalendar from "react-big-calendar";
// import moment from "moment";

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
      Calendar
    </TabPanel>
  </Tabs>
);

export default SuperAdminPanel;

// const localizer = BigCalendar.momentLocalizer(moment);

// const SuperCalendar = props => (
//   <div>
//     <BigCalendar 
//       localizer={localizer}
      
//     />
//   </div>
// );