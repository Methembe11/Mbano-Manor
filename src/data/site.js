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

export const LOGO = img('2025/11/MbanoLogoWeb.png');

export const VIDEO_LOOP = img('2022/06/Untitled-design-3.mp4');
export const VIDEO_TESTIMONIAL =
  img('2026/01/Staying-at-@mbano_manor_hotel-felt-like-finding-a-quiet-little-hideaway-near-Victoria-Falls.-The-1.mp4');

export const HERO_VIDEOS = [
  {
    src: '/videos/leaves.mp4',
    poster:
      'https://images.pexels.com/videos/17470805/background-blue-branch-climate-17470805.jpeg?auto=compress&cs=tinysrgb&w=1440',
    eyebrow: 'The Forest Sanctuary',
    title: ['Beneath a canopy', 'of ancient teak'],
    sub: 'A four-acre sanctuary where only two trees were felled \u2014 and the forest keeps its own rhythm.',
  },
  {
    src: '/videos/giraffe.mp4',
    poster:
      'https://images.pexels.com/videos/3206072/free-video-3206072.jpg?auto=compress&cs=tinysrgb&w=1440',
    eyebrow: 'Wildlife at the Door',
    title: ['Wildlife,', 'beyond the terrace'],
    sub: 'Giraffe, elephant and the great reserves of Hwange and the Zambezi wait just beyond the sanctuary.',
  },
  {
    src: '/videos/waterfall.mp4',
    poster:
      'https://images.pexels.com/videos/27380834/waterfall-waterfalls-zambia-27380834.jpeg?auto=compress&cs=tinysrgb&w=1440',
    eyebrow: 'Four Kilometres Away',
    title: ['Follow the path', 'to the Falls'],
    sub: 'The Smoke that Thunders \u2014 one of the Seven Natural Wonders of the World, moments from your suite.',
  },
];

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'Stay',
    to: '/luxury-suites',
    dropdown: [
      { label: '18 Luxury Suites', to: '/luxury-suites' },
      { label: 'Mutota Forest Villa', to: '/mutota-forest-villa' },
      { label: 'Bayuni Spa', to: '/bayuni-spa' },
      { label: 'Bespoke Packages', to: '/mbano-packages' },
    ],
  },
  {
    label: 'Experience',
    to: '/victoria-falls',
    dropdown: [
      { label: 'Victoria Falls', to: '/victoria-falls' },
      { label: 'Mbano Forest', to: '/mbano-forest' },
      { label: 'Gallery', to: '/gallery' },
      { label: 'Suites & Villa Video Tour', to: '/virtual-tour' },
      { label: 'Guest Reviews', to: '/guest-reviews' },
    ],
  },
  {
    label: 'Our Story',
    to: '/about-mbano',
    dropdown: [
      { label: 'About Mbano', to: '/about-mbano' },
      { label: "Dr Mati's Story", to: '/dr-mati-nyazema-story' },
      { label: 'Story of Mbano', to: '/mbano-story' },
      { label: 'Mbano Meaning', to: '/mbano-meaning' },
    ],
  },
  {
    label: 'News',
    to: '/latest-news',
    dropdown: [
      { label: 'Latest News', to: '/latest-news' },
      { label: "Doc's Interviews", to: '/dr-mati-nyazema-interviews' },
      { label: 'In the Media', to: '/media-articles' },
    ],
  },
  { label: 'Contact', to: '/contact' },
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
