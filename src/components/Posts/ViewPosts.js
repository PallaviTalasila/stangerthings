import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../api";
import AppBarWithSearch from "../helpers/AppBarWithSearch";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Post from "./Post";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  postsWrapper: {
    display: "flex",
    flexDirection: "column !important",
  },
  postsView: {
    backGround: "green",
  },
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },

  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const initialFormData = Object.freeze({
  title: "",
  description: "",
  price: "",
  location: "",
  deliver: false,
});

const ViewPosts = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
  });

  useEffect(() => {
    try {
      Promise.all([fetchPosts()]).then(([data]) => {
        setPosts(data.posts);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <AppBarWithSearch />
      <div className={classes.root}>
        {posts.map((post, index) => {
          return (
            <Accordion key={index} defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1c-content"
                id="panel1c-header"
              >
                <div>
                  <Typography className={classes.heading}>
                    {post.title}
                  </Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>
                    {post.description}
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.details}>
                <div className={classes.column} />
                <div className={classes.column}></div>
                <div className={clsx(classes.column, classes.helper)}>
                  <Typography variant="caption">
                    Price: {post.price}
                    <br />
                    Delivery: {post.willDeliver ? "Available" : "Not Available"}
                    <br />
                    Location: {post.location}
                  </Typography>
                </div>
              </AccordionDetails>
              <Divider />
              <AccordionActions>
                <Button size="small" color="primary">
                  <Link to="/profile">Send Message </Link>
                </Button>

                <Button
                  size="small"
                  color="primary"
                  onClick={toggleDrawer(post._id, true)}
                >
                  View Post
                </Button>
                <Drawer
                  anchor={"top"}
                  open={state[post._id]}
                  onClose={toggleDrawer(post._id, false)}
                >
                  <Post key={index} post={post} />
                </Drawer>
              </AccordionActions>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default ViewPosts;
