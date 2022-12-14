import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function NestedList(props) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // const cardSubTitles = ['orange', 'apple', 'watermelon']
  const cardSubTitles = props.cardSubTitle

  // const list = products.map(product => <li key={product}>{product}</li>)

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >

   
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={props.cardTitle} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      {cardSubTitles.map((product, i) => (
              <Collapse in={open} timeout="auto" unmountOnExit key={i}>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                 
                  {/* {product}- */}
                  <ListItemText primary={product} />
                </ListItemButton>
              </List>
            </Collapse>  
      ))} 

 
            

    </List>
  );
}
