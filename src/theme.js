export const theme = {
  colors: {
    /* 70% — canvas */
    ivory: '#F8F7F2',
    pureWhite: '#FFFFFF',

    /* 20% — sanctuary */
    teal: '#123F42',
    tealDeep: '#0E3436',
    tealSoft: 'rgba(18, 63, 66, 0.05)',

    /* 10% — accents */
    gold: '#B89B5E',
    bronze: '#9C7C4A',
    antiqueGold: '#B89B5E',
    antiqueGoldDark: '#9C7C4A',

    /* text + hairlines */
    ink: '#2A2A28',
    deepTeak: '#2A2A28',
    inkSoft: 'rgba(42, 42, 40, 0.62)',
    warmStone: '#D8D2C4',
    line: 'rgba(42, 42, 40, 0.12)',
    lineTeal: 'rgba(248, 247, 242, 0.14)',
    overlay: 'rgba(14, 52, 54, 0.55)',

    /* legacy alias */
    forestNight: '#0E3436',

    /* WhatsApp — muted botanical, part of the teal family */
    whatsapp: '#2F6E5A',
    whatsappDark: '#24584A',
  },
  fonts: {
    display: "'Cinzel', serif",
    body: "'Cormorant Garamond', serif",
    ui: "'Inter', sans-serif",
  },
  navHeight: '88px',
  navHeightMobile: '68px',
  sectionPad: '150px',
  transition: 'cubic-bezier(0.16, 1, 0.3, 1)',
  radius: '1px',
  shadows: {
    card: '0 18px 50px rgba(14, 52, 54, 0.08)',
    lift: '0 28px 70px rgba(14, 52, 54, 0.14)',
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
