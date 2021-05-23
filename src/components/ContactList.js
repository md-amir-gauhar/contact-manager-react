import React from 'react'
import ContactCard from './ContactCard'

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: "Amir",
      email: "gauharamir15@gmail.com"
    },
    {
      id: 1,
      name: "Amir",
      email: "gauharamir15@gmail.com"
    },
    {
      id: 1,
      name: "Amir",
      email: "gauharamir15@gmail.com"
    },
  ]
  return (
    <div>
      {
        contacts.map(contact => (
          <ContactCard name={contact.name} email={contact.email}/>
        ))
      }
    </div>
  )
}

export default ContactList
