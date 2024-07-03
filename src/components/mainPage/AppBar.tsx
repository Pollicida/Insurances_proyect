import { useState } from "react";
import { IconButton, Drawer, Typography, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBar() {

    const drawerWidth = 240;
    const navItems = ['Inicio', 'Acerca de nosotros', 'Contacto'];

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Menú
          </Typography>
          <hr />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <Divider />
        <List>
            {['Cerrar sesión'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} onClick={cerrarSesion}>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
        </List> */}
        </Box>
      );

    return (
        <>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            <div className="w-full h-full flex items-center justify-center lg:hidden">
                <IconButton
                    className="lg:hidden"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                >
                <MenuIcon className="text-black"/>
                </IconButton>
            </div>
        </>
    )
}