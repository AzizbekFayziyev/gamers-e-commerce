import { Menu, MenuItem } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import NavLinks from './NavLinks';

// Mobile menu
export default function NavMenu({ open, anchor, setMenuOpen }) {
  return (
    <Menu onClose={() => setMenuOpen(false)} open={open} anchorEl={anchor}>
      <Stack sx={{width: 130}}>
        <NavLinks />
      </Stack>
    </Menu>
  )
}
