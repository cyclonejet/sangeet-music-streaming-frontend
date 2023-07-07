import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import useUser from '../../data/use-user';
import { signOut } from '../../libs/auth';

const drawerWidth = 240;
const unAuthItems = [
  { text: 'Home', page: '/' },
  { text: 'Sign In', page: '/sign-in' },
  { text: 'Sign Up', page: '/sign-up' },
  // { text: 'About', page: '/about' },
];

const authItems = [
  {
    text: 'Player',
    page: '/player',
  },
  {
    text: 'Profile',
    page: '/profile',
  },
];

export default function TopBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(false);
  const { user, mutate, loggedOut } = useUser();
  const [navItems, setNavItems] = React.useState(unAuthItems);

  React.useEffect(() => {
    console.log(user, loggedOut);
    if (user && !loggedOut) {
      setNavItems([...authItems]);
      setIsAuth(true);
    } else if (loggedOut) {
      setIsAuth(false);
      setNavItems([...unAuthItems]);
    }
  }, [user, loggedOut]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSignOut = async () => {
    await signOut();
    mutate();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.page}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        {isAuth && (
          <ListItem disablePadding onClick={handleSignOut}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Sangeet
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link key={item.page} href={item.page}>
                <Button key={item.text} sx={{ color: '#fff' }}>
                  {item.text}
                </Button>
              </Link>
            ))}
            {isAuth && (
              <Button onClick={handleSignOut} sx={{ color: '#fff' }}>
                Sign Out
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
