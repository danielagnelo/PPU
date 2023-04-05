import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function MenuItem({ title, path, icon, children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (children) {
    return (
      <>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child) => (
              <MenuItem key={child.title} {...child} className={classes.nested} />
            ))}
          </List>
        </Collapse>
      </>
    );
  } else {
    return (
      <ListItem button component={Link} to={path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    );
  }
}

function Menu() {
  return (
    <List>
      {items.map((item) => (
        <MenuItem key={item.title} {...item} />
      ))}
    </List>
  );
}

export default Menu;