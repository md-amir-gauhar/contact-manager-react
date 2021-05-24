import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import EmailIcon from '@material-ui/icons/Email';
import { Avatar } from '@material-ui/core';
import '../styles/contactCard.css';
import { blue, purple, red, yellow, cyan, lightBlue, lightGreen } from '@material-ui/core/colors';

const color = ["purple", "red", "lightblue", "lightGreen", "lightGreen"];

function random(color) {
  return color[Math.floor(Math.random() * color.length)];
}

const useStyles = makeStyles({
  avatar: {
    backgroundColor: `${random(color)}`
  },
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
  },
}))(MuiAccordionDetails);

export default function ContactCard({ contacts }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="contactCard">
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="contactCard-header" >
            <Avatar
              className={classes.avatar}
              size="small"
            >
              {contacts.name[0]}
            </Avatar>
            <h1>{contacts.name}</h1>
          </div>

        </AccordionSummary>
        <AccordionDetails>
          <div className="contactCard-email">
            <EmailIcon />
            <span><strong>:</strong> {contacts.email}</span>
          </div>
          <div className="contactCard-phone">

          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}