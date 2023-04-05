import React from 'react';

import { common } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import { error, indigo, info, neutral, success, warning } from './colors';

export function createPalette(modo) {
  const paletteDark = {};
  const paletteLight = {};
  return modo === 'dark' ? {
    action: {
      active: neutral[200],
      disabled: alpha(neutral[500], 0.38),
      disabledBackground: alpha(neutral[500], 0.12),
      focus: alpha(neutral[500], 0.16),
      hover: alpha(neutral[500], 0.04),
      selected: alpha(neutral[500], 0.12)
    },
    background: {
      default: neutral[900],
      paper: neutral[800]
    },
    divider: neutral[700],
    error,
    info,
    mode: modo,
    neutral,
    primary: indigo,
    success,
    text: {
      primary: common.white,
      secondary: alpha(common.white, 0.7),
      disabled: alpha(common.white, 0.38)
    },
    warning
  } : {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12)
    },
    background: {
      default: common.white,
      paper: common.white
    },
    divider: neutral[200],
    error,
    info,
    mode: modo,
    neutral,
    primary: indigo,
    success,
    text: {
      primary: neutral[900],
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38)
    },
    warning
  };
}
