import React, { useContext } from 'react'
import ContactCard from './ContactCard'
import { GlobalContext } from '../context/GlobalState'

const ContactList = () => {
  const contacts = useContext(GlobalContext);
  console.log(contacts);
  return (
    <div>
      {
        contacts.map(contact => (
          <ContactCard key={contacts.id} contacts={contacts} />
        ))
      }
    </div>
  )
}

export default ContactList
