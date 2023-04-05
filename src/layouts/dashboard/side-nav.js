import React, { useState } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const [openItems, setOpenItems] = useState([]);
  const [openSetas, setOpenSetas] = useState({});

  const handleItemClick = (item) => {
    setOpenSetas((prevOpenSetas) => ({
      ...prevOpenSetas,
      [item.id]: !prevOpenSetas[item.id] || false
    }));

    if (item.subItem && item.subItem.length > 0) {
      setOpenItems((prevOpenItems) => {
        const index = prevOpenItems.indexOf(item.title);
        if (index === -1) {
          return [...prevOpenItems, item.title, ...item.subItem.map((subItem) => subItem.title)];
        }
        return prevOpenItems.filter((_, i) => i !== index);
      });
    } else {
      onClose();
    }
  };

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              height: 32,
              width: 32,
              mr: 2
            }}
          >
            <Logo />
          </Box>
          <Box sx={{ fontSize: 20, fontWeight: 'bold' }}>PPU</Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            {items.map((item) => {
              const active = item.path ? (pathname === item.path) : false;
              const open = openItems.includes(item.title);

              return (
                <div key={item.title}
                  onClick={() => handleItemClick(item)}>
                  <Typography
                    align="center"
                    color="inherit"
                    sx={{
                      fontSize: '24px',
                      lineHeight: '32px',
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    variant="h1"
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <SideNavItem
                        active={active}
                        disabled={item.disabled}
                        external={item.external}
                        icon={item.icon}
                        open={open}
                        path={item.path}
                        title={item.title}
                      />
                    </Box>
                    <Box
                      component="a"
                      sx={{
                        color: !open ? '#2196f3' : '#f44336',
                        transition: 'color 0.15s ease-in,  0.28s ',
                        transform: `rotate(${open ? '-180deg' : '0'})`,
                      }}
                      target="_blank"
                    >
                      <ArrowCircleDownIcon />
                    </Box>
                  </Typography>



                  {open &&
                    item.subItem &&
                    item.subItem.map((subItem) => (
                      <SideNavItem
                        active={subItem.path ? pathname === subItem.path : false}
                        disabled={subItem.disabled}
                        external={subItem.external}
                        icon={subItem.icon}
                        key={subItem.title}
                        onClick={onClose}
                        path={subItem.path}
                        title={subItem.title}
                      />
                    ))}
                </div>
              );
            })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
          <Typography
            color="neutral.100"
            variant="subtitle2"
          >
            Precisa de mais informações sobre as aeronaves ou suas horas de voo e cotas?
          </Typography>
          <Typography
            color="neutral.500"
            variant="body2"
          >
            Cheque nossos módulos...
          </Typography>
          <Box
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              width: '250px',
              '& img': {
                width: '100%'
              }
            }}
          >
            <img
              alt="Go to pro"
              src="/assets/logo-sisavn-nuvens.png"
            />
          </Box>
          <Button
            component="a"
            endIcon={(
              <SvgIcon fontSize="small">
                <ArrowTopRightOnSquareIcon />
              </SvgIcon>
            )}
            fullWidth
            href="http://10.30.112.124/"
            sx={{ mt: 2 }}
            target="_blank"
            variant="contained"
          >
            SisAvn.com
          </Button>
        </Box>
      </Box>
    </Scrollbar >
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
