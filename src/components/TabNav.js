import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/TabNav.css';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddContact from './AddContact';
import ContactList from './ContactList';

const TabNav = () => {
  return (
    <div className='tabnav'>
      <Tabs>
        <TabList>
          <Tab><ContactsIcon />My Contact</Tab>
          <Tab><PersonAddIcon />Add Contact</Tab>
        </TabList>

        <TabPanel>
          <ContactList />
        </TabPanel>
        <TabPanel>
          <AddContact />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default TabNav
