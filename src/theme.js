export const theme = {
  colors: {
    ivory: '#F3EEE7',
    sand: '#E9E3D8',
    pureWhite: '#FFFFFF',
    ink: '#0A0A08',
    inkSoft: 'rgba(10, 10, 8, 0.68)',
    warmStone: '#D8D2C4',
    teal: '#123F42',
    tealDeep: '#0E3436',
    gold: '#B89B5E',
    bronze: '#9C7C4A',
    antiqueGold: '#B89B5E',
    antiqueGoldDark: '#9C7C4A',
    line: 'rgba(10, 10, 8, 0.08)',
    lineTeal: 'rgba(248, 247, 242, 0.14)',
    overlay: 'rgba(14, 52, 54, 0.55)',
    forestNight: '#0E3436',
    whatsapp: '#2F6E5A',
    whatsappDark: '#24584A',
  },
  fonts: {
    display: "'Cormorant Garamond', 'Lyon Display', serif",
    body: "'Cormorant Garamond', 'Lyon Text', serif",
    ui: "'Inter', 'Whitney SSm', sans-serif",
  },
  navHeight: '88px',
  navHeightMobile: '68px',
  sectionPad: '150px',
  transition: 'cubic-bezier(0.16, 1, 0.3, 1)',
  radius: '1px',
  shadows: {
    card: '0 18px 50px rgba(10, 10, 8, 0.08)',
    lift: '0 28px 70px rgba(10, 10, 8, 0.14)',
  },
  breakpoints: {
    lg: '1100px',
    md: '900px',
    sm: '768px',
    xs: '520px',
  },
};

export const breakpoints = {
  lg: `@media (max-width: ${theme.breakpoints.lg})`,
  md: `@media (max-width: ${theme.breakpoints.md})`,
  sm: `@media (max-width: ${theme.breakpoints.sm})`,
  xs: `@media (max-width: ${theme.breakpoints.xs})`,
};