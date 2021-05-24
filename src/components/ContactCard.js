import React, { useContext, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, Button, IconButton } from '@material-ui/core';
import '../styles/contactCard.css';
import { blue, purple, red, yellow, cyan, lightBlue, lightGreen } from '@material-ui/core/colors';
import PhoneIcon from '@material-ui/icons/Phone';
import { GlobalContext } from '../context/GlobalState'

const color = ["purple", "red", "lightblue", "lightGreen", "lightGreen"];

function random(color) {
  return color[Math.floor(Math.random() * color.length)];
}

const useStyles = makeStyles({
  avatar: {
    backgroundColor: `${random(color)}`
  },
  drop: {
    display: 'flex',
    alignItems: 'center',
  }
})

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },

  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    // alignItems: "center"
  },
}))(MuiAccordionDetails);


function ContactCard({ contact }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('');
  const { deleteContacts } = useContext(GlobalContext);


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="contactCard">
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          className={classes.drop}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <div className="contactCard-header" >
            <Avatar
              className={classes.avatar}
              size="small"
            >
              {contact.name[0]}
            </Avatar>
            <h1>{contact.name}</h1>
          </div>
          <Button
            endIcon={<DeleteIcon />}
            onClick={() => deleteContacts(contact.id)}
          ></Button>

        </AccordionSummary>
        <AccordionDetails>
          <div className="contactCard-email">
            <EmailIcon />
            <span><strong>:</strong> {contact.email}</span>
          </div>
          <div className="contactCard-phone">
            <PhoneIcon />
            <span><strong>:</strong> {contact.phone}</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ContactCard;