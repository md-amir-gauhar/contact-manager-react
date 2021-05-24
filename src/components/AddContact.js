import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import '../styles/AddContact.css';
import { Button, makeStyles } from '@material-ui/core';
import { GlobalContext } from "../context/GlobalState";
import { uuid } from 'uuidv4';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
})

const AddContact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const { addContacts } = useContext(GlobalContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const newContacts = {
      id: uuid(),
      name: name,
      email: email,
      phone: contact,
    }

    addContacts(newContacts);
    setName("");
    setEmail("");
    setContact("");
    ;
  }

  return (
    <div className="addContact">
      <form onSubmit={submitHandler}>
        <TextField
          value={name}
          onChange={e => setName(e.target.value)}
          className={classes.field}
          label="Username"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={classes.field}
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          value={contact}
          onChange={e => setContact(e.target.value)}
          className={classes.field}
          label="Contact"
          variant="outlined"
          fullWidth
          required
        />
        <Button
          variant="outlined"
          color="secondary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AddContact
