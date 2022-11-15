import chroma from 'chroma-js';
import {toLower} from 'lodash';
import PropTypes from 'prop-types';
import currentColors from './currentColors';

export type Colors = ReturnType<typeof getColorsByTheme>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const darkModeColors = {};

const lightModeColors = {
  primary_1: {
    orangeLight: '#F5F5FF',
    orangeLight100: '#E1E1FE',
    orangeLight200: '#C3C4FE',
    orangeLight300: '#9B9DFD',
    orangeLight400: '#7375FD',
    orangeDark500: '#4B4EFC',
    orangeDark600: '#1E22FB',
    orangeDark700: '#0408E7',
    orangeDark800: '#0306BA',
    orangeDark900: '##02058D',
  },
  primary_2: {
    greyLight: '#F9FAFB',
    greyLight100: '#F3F4F6',
    greyLight200: '#E5E7EB',
    greyLight300: '#D1D5DB',
    greyLight400: '#9CA3AF',
    greyDark500: '#6B7280',
    greyDark600: '#4B5563',
    greyDark700: '#374151',
    greyDark800: '##1F2937',
    greyDark900: '#111827',
  },
  // good for backgrounds, etc
  neutral: {
    smokeLight: 'rgba(249, 250, 251, 1)',
    smokeLight100: 'rgba(243, 244, 246, 1)',
    smokeLight200: 'rgba(229, 231, 235, 1)',
    smokeLight300: 'rgba(209, 213, 219, 1)',
    smokeLight400: 'rgba(156, 163, 175, 1)',
    smokeDark500: 'rgba(107, 114, 128, 1)',
    smokeDark600: 'rgba(75, 85, 99, 1)',
    smokeDark700: 'rgba(55, 65, 81, 1)',
    smokeDark800: 'rgba(31, 41, 55, 1)',
    smokeDark900: 'rgba(17, 24, 39, 1)',
  },
  warning: {
    yellowLight: '#FFFBEB',
    yellowLight100: '#FEF3C7',
    yellowLight200: '#FDE68A',
    yellowLight300: '#FCD34D',
    yellowLight400: '#FBBF24',
    yellowDark500: '#FBBF24',
    yellowDark600: '#D97706',
    yellowDark700: '#B45309',
    yellowDark800: '#92400E',
    yellowDark900: '#78350F',
  },
  success: {
    greenLight: '#F0FDF4',
    greenLight100: '#DCFCE7',
    greenLight200: '#BBF7D0',
    greenLight300: '#86EFAC',
    greenLight400: '#4ADE80',
    greenDark500: '#22C55E',
    greenDark600: '#16A34A',
    greenDark700: '#15803D',
    greenDark800: '#166534',
    greenDark900: '#14532D',
  },
  error: {
    redLight: '#FEF2F2',
    redLight100: '#FEE2E2',
    redLight200: '#FECACA',
    redLight300: '#FCA5A5',
    redLight400: '#F87171',
    redDark500: '#EF4444',
    redDark600: '#DC2626',
    redDark700: '#B91C1C',
    redDark800: '#7F1D1D',
    redDark900: '#7F1D1D',
  },
};

const getColorsByTheme = (darkMode?: boolean) => {};
