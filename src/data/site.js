const UPLOADS = 'https://www.mbanomanorhotel.com/wp-content/uploads';

export const img = (path) => `${UPLOADS}/${path}`;

export const CONTACT = {
  mobile: '+263 (0)78 892 8776',
  mobileRaw: '+263 78 892 8776',
  landlines: '+263 832 845 096',
  landlines2: '+263 832 845 097',
  emailRes: 'res@mbanomanorhotel.com',
  emailRes2: 'res1@mbanomanorhotel.com',
  emailSales: 'sales@mbanomanorhotel.com',
  emailMati: 'mati@mbanomanorhotel.com',
  salesPhone: '+263 (0)78 822 0435',
  address: 'Old Kazungula Road, Victoria Falls, Zimbabwe',
  whatsapp: 'https://api.whatsapp.com/send?phone=263788928776',
  whatsappPackages: 'https://wa.link/6wvpcr',
  checkIn: '14:00',
  checkOut: '11:00',
  facebook: 'https://www.facebook.com/MbanoManorHotel',
  instagram: 'https://www.instagram.com/mbano_manor_hotel/',
  youtube: 'https://youtu.be/BHuPku9Et0A',
};

export const HERO_SLIDES = [
  img('2025/05/2.jpg'),
  img('2025/05/Untitled-design-2025-05-06T231415.247.jpg'),
  img('2025/03/VicFalls3-scaled.jpg'),
  img('2026/02/vicfallssunset.jpg'),
  img('2022/08/VictoriaFalls.jpg'),
];

export const LOGO = img('2025/11/MbanoLogoWeb.png');

export const VIDEO_LOOP = img('2022/06/Untitled-design-3.mp4');
export const VIDEO_TESTIMONIAL =
  img('2026/01/Staying-at-@mbano_manor_hotel-felt-like-finding-a-quiet-little-hideaway-near-Victoria-Falls.-The-1.mp4');

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about-mbano',
    dropdown: [
      { label: 'About Mbano', to: '/about-mbano' },
      { label: 'Suites & Villa Video Tour', to: '/virtual-tour' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Guest Reviews', to: '/guest-reviews' },
      { label: 'Mbano Forest', to: '/mbano-forest' },
    ],
  },
  {
    label: 'Luxury Suites & Villa',
    to: '/luxury-suites',
    dropdown: [
      { label: '18 Luxury Suites', to: '/luxury-suites' },
      { label: 'Mutota Forest Villa', to: '/mutota-forest-villa' },
    ],
  },
  { label: 'Bayuni Spa', to: '/bayuni-spa' },
  { label: 'Packages', to: '/mbano-packages' },
  { label: 'Victoria Falls', to: '/victoria-falls' },
  {
    label: 'News',
    to: '/latest-news',
    dropdown: [
      { label: 'Latest News', to: '/latest-news' },
      { label: "Doc's Interviews", to: '/dr-mati-nyazema-interviews' },
      { label: 'In the Media', to: '/media-articles' },
    ],
  },
  {
    label: 'Our Story',
    to: '/dr-mati-nyazema-story',
    dropdown: [
      { label: "Dr Mati's Story", to: '/dr-mati-nyazema-story' },
      { label: 'Story of Mbano', to: '/mbano-story' },
      { label: 'Mbano Meaning', to: '/mbano-meaning' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about-mbano' },
  { label: 'Stay', to: '/luxury-suites' },
  { label: 'Experience', to: '/victoria-falls' },
  { label: 'Spa', to: '/bayuni-spa' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/guest-reviews' },
  { label: 'News', to: '/latest-news' },
  { label: 'Contact', to: '/contact' },
];
