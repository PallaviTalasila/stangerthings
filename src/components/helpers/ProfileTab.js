import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs({ myMessages, username }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h1>Messages from me</h1>
        {myMessages.map((message) => {
          if (message.fromUser.username === username) {
            return (
              <div key={message._id}>
                <p>{message.fromUser.username}</p>
                <p>{message.content}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Messages to me</h1>
        {myMessages.map((message) => {
          if (message.fromUser.username !== username) {
            return (
              <div key={message._id}>
                <p>{message.fromUser.username}</p>
                <p>{message.content}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}

/* 
  <h1>Messages to me</h1>
        {myMessages.fromUser?.username !== username ? (
          myMessages.map((message) => {
            return (
              <div key={myMessages.id}>
                <h3>Messages From Me</h3>
                <h4>{message.fromUser.username}</h4>
                <p>{message.content}</p>
              </div>
            );
          })
        ) : (
          <p>Please login</p>
        )}
*/
