import React, { useContext } from 'react'
import ContactCard from './ContactCard'
import { GlobalContext } from '../context/GlobalState'

const ContactList = () => {
  const { contacts } = useContext(GlobalContext);
  return (
    <div>
      {
        contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      }
    </div>
  )
}

export default ContactList
