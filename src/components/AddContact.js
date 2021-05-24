import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import '../styles/AddContact.css';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
})

const AddContact = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div className="addContact">
      <form onSubmit={submitHandler}>
        <TextField
          onChange={e => setUsername(e.target.value)}
          className={classes.field}
          label="Username"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          onChange={e => setEmail(e.target.value)}
          className={classes.field}
          label="Email"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
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
