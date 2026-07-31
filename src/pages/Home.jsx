import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container,
  Section,
  SectionLabel,
  SectionTitle,
  SectionText,
  Divider,
  SectionHead,
  StoryCta,
  TwoCol,
  ContentImg,
  ContentText,
  CardGrid,
  Card,
  CardIcon,
  CardTitle,
  CardText,
  GalleryGrid,
  GalleryItem,
  GalleryOverlay,
  GalleryItemIcon,
  VideoBlock,
  BtnPrimary,
  BtnOutline,
  BtnWhatsapp,
  CtaBanner,
  CtaActions,
  Reveal,
} from '../components/primitives';
import { useLightbox } from '../context/Lightbox';
import ContactSection from '../components/ContactSection';
import { HERO_SLIDES, VIDEO_LOOP, VIDEO_TESTIMONIAL, CONTACT, img } from '../data/site';

/* ===== HERO ===== */
const Hero = styled.section`
  position: relative;
  height: 100vh;
  min-height: 680px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    min-height: 620px;
  }
`;

const HeroSlides = styled.div`
  position: absolute;
  inset: 0;
`;

const heroOrigins = ['50% 40%', '40% 60%', '60% 50%', '45% 30%', '55% 60%'];

const HeroSlide = styled.div`
  position: absolute;
  inset: 0;
  background: url('${({ $src }) => $src}') center center / cover no-repeat;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 2.8s ease;
  animation: heroDrift 36s ease-in-out infinite alternate;
  transform-origin: ${({ $i }) => heroOrigins[$i % heroOrigins.length]};
  @keyframes heroDrift {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(14, 52, 54, 0.45) 0%,
    rgba(14, 52, 54, 0.18) 45%,
    rgba(10, 40, 42, 0.55) 82%,
    rgba(14, 52, 54, 0.82) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 48px;
  max-width: 920px;
  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const rise = css`
  opacity: 0;
  transform: translateY(26px);
  animation: rise 1.1s ${({ theme }) => theme.transition} forwards;
  @keyframes rise {
    to { opacity: 1; transform: translateY(0); }
  }
`;

const HeroEyebrow = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 30px;
  ${rise}
  animation-delay: 0.35s;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(42px, 7.2vw, 88px);
  font-weight: 300;
  line-height: 1.06;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ivory};
  em {
    font-style: italic;
    color: rgba(216, 210, 196, 0.9);
  }
  ${rise}
  animation-delay: 0.55s;
`;

const HeroSub = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(17px, 1.7vw, 20px);
  font-weight: 300;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.warmStone};
  margin: 26px auto 0;
  max-width: 620px;
  ${rise}
  animation-delay: 0.75s;
`;

const HeroActions = styled.div`
  display: flex;
  gap: 18px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 42px;
  ${rise}
  animation-delay: 0.95s;
`;

const HeroScroll = styled.div`
  position: absolute;
  bottom: 42px;
  right: 56px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.warmStone};
  opacity: 0;
  animation: rise 1.1s ease 1.35s forwards;
  @keyframes rise { to { opacity: 1; } }
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroIndicators = styled.div`
  position: absolute;
  bottom: 52px;
  left: 56px;
  z-index: 2;
  display: flex;
  gap: 10px;
  opacity: 0;
  animation: rise 1.1s ease 1.45s forwards;
  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HeroIndicator = styled.button`
  width: ${({ $active }) => ($active ? '44px' : '28px')};
  height: 1px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.gold : 'rgba(248, 247, 242, 0.35)'};
  transition: background 0.6s ease, width 0.6s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
  }
`;

const HeroScrollLine = styled.div`
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.gold}, transparent);
  animation: scrollPulse 2.4s ease-in-out infinite;
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.35; transform: scaleY(1); transform-origin: top; }
    50% { opacity: 1; transform: scaleY(1.25); transform-origin: top; }
  }
`;

/* ===== MANIFESTO ===== */
const Manifesto = styled.div`
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const PullQuote = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(28px, 4vw, 52px);
  font-weight: 300;
  line-height: 1.32;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.ink};
  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.bronze};
  }
`;

/* ===== STAY CARDS ===== */
const StayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  margin-top: 64px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 48px;
  }
`;

const StayCard = styled(Link)`
  position: relative;
  height: 520px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    height: 420px;
  }
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.2s ${({ theme }) => theme.transition};
  }
  &:hover img { transform: scale(1.045); }
`;

const StayCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(10, 40, 42, 0.82) 0%, transparent 62%);
`;

const StayCardContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 44px;
  width: 100%;
`;

const StayCardLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 12px;
`;

const StayCardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.ivory};
`;

const StayCardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.warmStone};
  margin-top: 10px;
  max-width: 400px;
`;

const StayCardCta = styled.span`
  display: inline-block;
  margin-top: 22px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
  transition: padding 0.4s ${({ theme }) => theme.transition};
  ${StayCard}:hover & { padding-bottom: 8px; }
`;

const StayFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 72px;
  padding-top: 64px;
  border-top: 1px solid ${({ theme }) => theme.colors.lineTeal};
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 56px;
    padding-top: 48px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StayFeature = styled.div`
  text-align: center;
`;

const StayFeatureNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 38px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gold};
`;

const StayFeatureLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.warmStone};
  margin-top: 10px;
`;

/* ===== EXPERIENCES ===== */
const JourneySelector = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 56px 0 40px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const JourneyBtn = styled.button`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  padding: 15px 18px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.inkSoft};
  transition: all 0.4s ease;
  text-align: center;
  &:hover {
    border-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.teal};
  }
  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.colors.teal};
      border-color: ${theme.colors.teal};
      color: ${theme.colors.ivory};
    `}
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ActivityCard = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.2s ${({ theme }) => theme.transition};
  }
  &:hover img { transform: scale(1.05); }
  ${({ $hidden }) => $hidden && 'display: none;'}
`;

const ActivityCardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(10, 40, 42, 0.68) 0%, transparent 55%);
`;

const ActivityCardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  z-index: 2;
`;

const ActivityCardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 19px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ivory};
`;

const ActivityCardDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.warmStone};
  margin-top: 6px;
`;

const ActivityMore = styled.div`
  text-align: center;
  margin-top: 44px;
`;

/* ===== QUOTE BAND ===== */
const QuoteBand = styled.section`
  position: relative;
  padding: 150px 0;
  overflow: hidden;
  background-image: url('${({ $src }) => $src}');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 100px 0;
  }
`;

const QuoteBandOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(14, 52, 54, 0.62), rgba(10, 40, 42, 0.78));
`;

const QuoteBandInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 860px;
  margin: 0 auto;
`;

const QuoteBandText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(34px, 5vw, 64px);
  font-weight: 300;
  line-height: 1.18;
  color: ${({ theme }) => theme.colors.ivory};
  em { font-style: italic; color: ${({ theme }) => theme.colors.gold}; }
`;

const QuoteBandSub = styled.p`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 4.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.warmStone};
  margin-top: 30px;
`;

/* ===== SPA TREATMENTS ===== */
const SpaTreatments = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 36px 0 8px;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SpaTreatment = styled.div`
  padding: 18px 22px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
`;

const SpaTreatmentName = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
`;

const SpaTreatmentPrice = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  white-space: nowrap;
`;

/* ===== NEWS STRIP ===== */
const NewsStrip = styled.ul`
  list-style: none;
  li {
    padding: 20px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    &:last-child { border-bottom: none; }
  }
  a {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 20px;
    font-weight: 300;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.ink};
    transition: color 0.3s ease;
    &:hover { color: ${({ theme }) => theme.colors.teal}; }
  }
  .d {
    display: block;
    font-family: ${({ theme }) => theme.fonts.ui};
    font-size: 9px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gold};
    margin-top: 8px;
  }
`;

/* ===== GUEST VOICE ===== */
const VoiceQuote = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(24px, 2.6vw, 36px);
  font-weight: 300;
  font-style: italic;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.ink};
  margin: 24px 0;
`;

/* ===== DATA ===== */
const NEWS_ITEMS = [
  {
    url: 'https://www.mbanomanorhotel.com/miss-universe-zimbabwe-2026-celebrates-local-tourism-and-african-excellence-at-mbano-manor-hotel/',
    title: 'Miss Universe Zimbabwe 2026 Celebrates Local Tourism and African Excellence at Mbano Manor Hotel',
    date: 'June 29, 2026',
  },
  {
    url: 'https://www.mbanomanorhotel.com/dr-mati-nyazema-from-corporate-leadership-to-one-of-zimbabwes-most-remarkable-hospitality-success-stories/',
    title: "Dr Mati Nyazema: From Corporate Leadership to one of Zimbabwe's most remarkable Hospitality Success Stories",
    date: 'May 19, 2026',
  },
  {
    url: 'https://www.mbanomanorhotel.com/travel-creator-lost-leblanc-bikes-into-mbano-victoria-falls-on-his-africa-tour/',
    title: 'Travel Creator Lost LeBlanc bikes into Mbano Victoria Falls on his Africa tour',
    date: 'March 23, 2026',
  },
  {
    url: 'https://www.mbanomanorhotel.com/we-are-coming-home-message-as-sa-celebrity-unathi-nkayi-spotlights-mbano-manor-hotel-victoria-falls-on-air/',
    title: '"We are coming home" — SA Celebrity Unathi Nkayi Spotlights Mbano Manor Hotel On Air',
    date: 'December 21, 2025',
  },
];

const ACTIVITIES = [
  {
    category: 'adventure',
    img: img('2026/06/4.jpg'),
    alt: 'Helicopter Flight over Victoria Falls',
    title: 'Flight of the Angels',
    desc: 'View Victoria Falls from the sky on a breathtaking helicopter excursion.',
  },
  {
    category: 'safari',
    img: img('2026/02/babyelephant.jpg'),
    alt: 'Safari',
    title: 'African Safari',
    desc: 'Game drives in Hwange, Zambezi, and Chobe National Parks.',
  },
  {
    category: 'relaxation',
    img: img('2026/02/vicfallssunset.jpg'),
    alt: 'Sunset Cruise on the Zambezi',
    title: 'Zambezi Sunset Cruise',
    desc: 'Sail the great Zambezi as the African sun paints the sky in gold.',
  },
  {
    category: 'adventure',
    img: img('2025/03/VicFalls3-scaled.jpg'),
    alt: 'Victoria Falls',
    title: 'The Smoke that Thunders',
    desc: 'Witness the largest sheet of falling water on earth.',
  },
  {
    category: 'safari',
    img: img('2025/03/MM_PIM-207-scaled.jpg'),
    alt: 'Game Drive',
    title: 'Wildlife Encounters',
    desc: 'Elephant interactions, walking safaris, and conservation experiences.',
  },
  {
    category: 'relaxation',
    img: img('2025/03/Lounge-scaled.jpg'),
    alt: 'Pool at Mbano Manor',
    title: 'Forest Sanctuary',
    desc: 'Unwind by the pool, birdwatch, or enjoy a spa treatment at Bayuni.',
  },
];

const GALLERY_IMAGES = [
  { src: img('2025/03/MbanoManorSuite-1020-scaled.jpg'), alt: 'Mbano Manor Suite' },
  { src: img('2025/03/MbanoManorOutside-1028-scaled.jpg'), alt: 'Mbano Manor Exterior' },
  { src: img('2025/03/Bathroom-1.jpg'), alt: 'Suite Bathroom' },
  { src: img('2025/03/MbanoManorEvening-1009-scaled.jpg'), alt: 'Mbano Evening' },
  { src: img('2025/03/Signature-1-scaled.jpg'), alt: 'Signature Suite' },
  { src: img('2025/03/MbanoManorEvening-1028-scaled.jpg'), alt: 'Evening at Mbano' },
  { src: img('2025/03/MbanoManorOutside-1026-scaled.jpg'), alt: 'Forest Path' },
  { src: img('2025/03/Suite-2-scaled.jpg'), alt: 'Suite Interior' },
  { src: img('2025/03/Lobby-garden-2-scaled.jpg'), alt: 'Lobby Garden' },
];

const CONSERVATION = [
  {
    title: 'Forest Preservation',
    text: 'The hotel was carefully designed around the existing teak forest — only two trees were taken down, with over 80 major trees mapped and preserved. Ancient trees remain the centrepiece of the four-acre sanctuary.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Local Employment',
    text: 'From management to gardening, Mbano prioritises Zimbabwean talent. Doc Mati personally mentors young Zimbabweans in hospitality.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'African Ownership',
    text: 'Proudly black female-owned and independent, Mbano represents a new chapter in African luxury — built by Africans, for the world.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const JOURNEYS = [
  { id: 'all', label: 'All Experiences' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'safari', label: 'Safari' },
  { id: 'relaxation', label: 'Relaxation' },
];

/* ===== PAGE ===== */
export default function Home() {
  const [journey, setJourney] = useState('all');
  const [active, setActive] = useState(0);
  const openLightbox = useLightbox();

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % HERO_SLIDES.length), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Hero>
        <HeroSlides>
          {HERO_SLIDES.map((src, i) => (
            <HeroSlide key={src} $src={src} $i={i} $active={i === active} />
          ))}
        </HeroSlides>
        <HeroOverlay />
        <HeroContent>
          <HeroEyebrow>Victoria Falls &middot; Zimbabwe</HeroEyebrow>
          <HeroTitle>
            A sanctuary hidden
            <br />
            <em>within</em> the thundering falls
          </HeroTitle>
          <HeroSub>
            Eighteen luxury suites and a private forest villa, set among ancient teak trees four kilometres from one of the world's greatest wonders.
          </HeroSub>
          <HeroActions>
            <BtnPrimary as={Link} to="/book-now">
              Reserve Your Stay
            </BtnPrimary>
            <BtnOutline as={Link} to="/dr-mati-nyazema-story">
              The Mbano Story
            </BtnOutline>
          </HeroActions>
        </HeroContent>
        <HeroIndicators aria-label="Hero slides">
          {HERO_SLIDES.map((src, i) => (
            <HeroIndicator
              key={src}
              $active={i === active}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </HeroIndicators>
        <HeroScroll>
          <span>Explore</span>
          <HeroScrollLine />
        </HeroScroll>
      </Hero>

      {/* MANIFESTO */}
      <Section $pad={130}>
        <Container>
          <Reveal>
            <Manifesto>
              <PullQuote>
                A dream forged at the foot of the Falls became a sanctuary built for the world — where ancient teak,
                quiet luxury, and the <em>thunder of the Zambezi</em> keep time together.
              </PullQuote>
              <Divider $center />
            </Manifesto>
          </Reveal>
        </Container>
      </Section>

      {/* STORY */}
      <Section $pad={40} $tint>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg>
                <img src={img('2026/01/Untitled-design-2026-01-25T193718.273-1024x1024.jpg')} alt="Dr Mati Nyazema — Founder of Mbano Manor Hotel" />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionLabel>The Mbano Story</SectionLabel>
                <SectionTitle>A Dream Forged at Victoria Falls</SectionTitle>
                <Divider />
                <SectionText>
                  Decades ago, a young African girl stood before the thundering waterfalls of Victoria Falls and a dream was sparked. That dream is now Mbano Manor Hotel — a bespoke luxury five-star hotel, proudly black female-owned, at the edge of the ancient teak forest.
                </SectionText>
                <SectionText>
                  Founded, built, and managed by Dr Matifadza Martha Nyazema — Mother, Grandmother, Businesswoman &amp; Hotelier — Mbano Manor is a family-owned, independent boutique safari hotel, and a testament to African excellence and visionary hospitality.
                </SectionText>
                <StoryCta as={Link} to="/dr-mati-nyazema-story">
                  Read Doc's Full Story &rarr;
                </StoryCta>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      {/* STAY */}
      <Section $pad={130} $deep>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Accommodation</SectionLabel>
              <SectionTitle $light>A Choice of Sanctuary</SectionTitle>
              <SectionText $light $mt={16}>
                From private forest suites to an opulent villa, each space is a haven of understated luxury.
              </SectionText>
            </SectionHead>
          </Reveal>
          <StayGrid>
            <Reveal>
              <StayCard to="/luxury-suites">
                <img src={img('2025/03/Suite-exterior-scaled.jpg')} alt="Luxury Suite" />
                <StayCardOverlay />
                <StayCardContent>
                  <StayCardLabel>18 Luxury Suites</StayCardLabel>
                  <StayCardTitle>
                    Effortless Elegance
                    <br />
                    Among the Teak
                  </StayCardTitle>
                  <StayCardDesc>
                    45 sqm of tranquil living with a king-sized bed, private courtyard, outdoor shower, and a generous veranda overlooking the forest.
                  </StayCardDesc>
                  <StayCardCta>Explore Suites</StayCardCta>
                </StayCardContent>
              </StayCard>
            </Reveal>
            <Reveal delay={0.12}>
              <StayCard to="/mutota-forest-villa">
                <img src={img('2025/01/1.jpg')} alt="Mutota Forest Villa" />
                <StayCardOverlay />
                <StayCardContent>
                  <StayCardLabel>Mutota Forest Villa</StayCardLabel>
                  <StayCardTitle>
                    The Ultimate
                    <br />
                    Forest Retreat
                  </StayCardTitle>
                  <StayCardDesc>
                    200 sqm of pure indulgence with private gardens, plunge pool, two outdoor showers, and 24-hour butler service for up to six guests.
                  </StayCardDesc>
                  <StayCardCta>Explore Villa</StayCardCta>
                </StayCardContent>
              </StayCard>
            </Reveal>
          </StayGrid>
          <Reveal>
            <StayFeatures>
              <StayFeature>
                <StayFeatureNumber>18</StayFeatureNumber>
                <StayFeatureLabel>Private Suites</StayFeatureLabel>
              </StayFeature>
              <StayFeature>
                <StayFeatureNumber>4</StayFeatureNumber>
                <StayFeatureLabel>Acre Teak Forest</StayFeatureLabel>
              </StayFeature>
              <StayFeature>
                <StayFeatureNumber>45</StayFeatureNumber>
                <StayFeatureLabel>Sqm Suite Space</StayFeatureLabel>
              </StayFeature>
              <StayFeature>
                <StayFeatureNumber>200</StayFeatureNumber>
                <StayFeatureLabel>Sqm Villa Space</StayFeatureLabel>
              </StayFeature>
            </StayFeatures>
          </Reveal>
        </Container>
      </Section>

      {/* EXPERIENCES */}
      <Section $pad={130}>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Victoria Falls</SectionLabel>
              <SectionTitle>Experience Majesty</SectionTitle>
              <SectionText $mt={16}>
                One of the Seven Natural Wonders of the World — 1,700 metres wide, more than 100 metres deep, and four kilometres from your suite.
              </SectionText>
            </SectionHead>
          </Reveal>

          <JourneySelector>
            {JOURNEYS.map((j) => (
              <JourneyBtn key={j.id} $active={journey === j.id} onClick={() => setJourney(j.id)}>
                {j.label}
              </JourneyBtn>
            ))}
          </JourneySelector>

          <ActivitiesGrid>
            {ACTIVITIES.map((a) => (
              <Reveal key={a.title} delay={(ACTIVITIES.indexOf(a) % 3) * 0.08}>
                <ActivityCard $hidden={journey !== 'all' && a.category !== journey}>
                  <img src={a.img} alt={a.alt} />
                  <ActivityCardOverlay />
                  <ActivityCardContent>
                    <ActivityCardTitle>{a.title}</ActivityCardTitle>
                    <ActivityCardDesc>{a.desc}</ActivityCardDesc>
                  </ActivityCardContent>
                </ActivityCard>
              </Reveal>
            ))}
          </ActivitiesGrid>

          <Reveal>
            <ActivityMore>
              <SectionText style={{ maxWidth: 760, margin: '0 auto 28px' }}>
                White water rafting in the Zambezi Gorge, bungee jumping from the Victoria Falls Bridge, the Devil's Pool (seasonal), canopy tours over the Batoka Gorge, and guided tours of the Falls from the Zimbabwe or Zambia side.
              </SectionText>
              <BtnOutline as={Link} to="/victoria-falls" $dark>
                Explore All Activities
              </BtnOutline>
            </ActivityMore>
          </Reveal>
        </Container>
      </Section>

      {/* QUOTE BAND */}
      <QuoteBand $src={img('2022/08/VictoriaFalls.jpg')}>
        <QuoteBandOverlay />
        <QuoteBandInner>
          <Reveal>
            <QuoteBandText>
              <em>The Smoke that Thunders</em>
            </QuoteBandText>
            <QuoteBandSub>One of the Seven Natural Wonders of the World</QuoteBandSub>
          </Reveal>
        </QuoteBandInner>
      </QuoteBand>

      {/* DINING */}
      <Section $pad={130}>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg>
                <img src={img('2025/03/MbanoMorningEdit-1036-scaled.jpg')} alt="Dining at Mbano Manor" />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionTitle>Dine Beneath the Teak Trees</SectionTitle>
                <Divider />
                <SectionText>
                  Every meal at Mbano Manor is a celebration of Zimbabwean flavours, crafted with locally sourced ingredients and served wherever you desire — beneath the ancient canopy, on your private veranda, or beneath a canopy of stars.
                </SectionText>
                <SectionText>
                  Fine or casual dining on the terrace, in the bar courtyard, in the lounge, or in the comfort of your suite. Dietary requirements — including full Kosher services — are embraced, not endured.
                </SectionText>
                <StoryCta as={Link} to="/contact">
                  Inquire About Dining &rarr;
                </StoryCta>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      {/* SPA */}
      <Section $pad={130} $tint>
        <Container>
          <TwoCol $reverse>
            <Reveal>
              <ContentImg>
                <img src={img('2025/09/BayuniSpa.jpg')} alt="Bayuni Spa" />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionTitle>Wellness in the Forest</SectionTitle>
                <Divider />
                <SectionText>
                  Set within the quiet beauty of Mbano's forest sanctuary, Bayuni Spa offers a deeply restorative experience designed to relax the body, calm the mind and rejuvenate the spirit.
                </SectionText>
                <SpaTreatments>
                  <SpaTreatment>
                    <SpaTreatmentName>Forest Massage</SpaTreatmentName>
                    <SpaTreatmentPrice>60 min</SpaTreatmentPrice>
                  </SpaTreatment>
                  <SpaTreatment>
                    <SpaTreatmentName>Revitalising Facial</SpaTreatmentName>
                    <SpaTreatmentPrice>45 min</SpaTreatmentPrice>
                  </SpaTreatment>
                  <SpaTreatment>
                    <SpaTreatmentName>Body Ritual</SpaTreatmentName>
                    <SpaTreatmentPrice>90 min</SpaTreatmentPrice>
                  </SpaTreatment>
                  <SpaTreatment>
                    <SpaTreatmentName>Couples Journey</SpaTreatmentName>
                    <SpaTreatmentPrice>120 min</SpaTreatmentPrice>
                  </SpaTreatment>
                </SpaTreatments>
                <StoryCta as={Link} to="/bayuni-spa">
                  View Spa Menu &rarr;
                </StoryCta>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      {/* CONSERVATION */}
      <Section $pad={130}>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Conservation &amp; Community</SectionLabel>
              <SectionTitle>Rooted in Zimbabwe</SectionTitle>
              <SectionText $mt={16}>
                Mbano Manor is more than a hotel — it's a commitment to the land, the forest, and the people of Zimbabwe.
              </SectionText>
            </SectionHead>
          </Reveal>
          <CardGrid>
            {CONSERVATION.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <Card>
                  <CardIcon>{c.icon}</CardIcon>
                  <CardTitle>{c.title}</CardTitle>
                  <CardText>{c.text}</CardText>
                </Card>
              </Reveal>
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* PACKAGES */}
      <Section $pad={130} $tint>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg>
                <img src={img('2025/11/SpecialsBanner.jpg')} alt="Mbano Packages" />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionTitle>Bespoke Journeys, Curated</SectionTitle>
                <Divider />
                <SectionText>
                  Two nights at Mbano Manor in Zimbabwe's Victoria Falls, four nights at Feline Fields Vintage Camp in the Khwai region of the Delta, and three nights in the Kalahari Desert at Feline Fields Lodge.
                </SectionText>
                <SectionText>
                  Contact our Reservations team on {CONTACT.emailRes} or {CONTACT.mobileRaw} to make your booking.
                </SectionText>
                <div style={{ marginTop: 28, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <BtnPrimary as={Link} to="/mbano-packages">
                    View Packages
                  </BtnPrimary>
                  <BtnWhatsapp href={CONTACT.whatsappPackages} target="_blank" rel="noopener noreferrer">
                    Book via WhatsApp
                  </BtnWhatsapp>
                </div>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      {/* GALLERY */}
      <Section $pad={130} $deep>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Gallery</SectionLabel>
              <SectionTitle $light>The Mbano Light</SectionTitle>
              <StoryCta as={Link} to="/gallery">
                View Full Gallery &rarr;
              </StoryCta>
            </SectionHead>
          </Reveal>
        </Container>
        <Container>
          <GalleryGrid>
            {GALLERY_IMAGES.map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 0.08}>
                <GalleryItem onClick={() => openLightbox(g.src, g.alt)}>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  <GalleryOverlay>
                    <GalleryItemIcon>&#8599;</GalleryItemIcon>
                  </GalleryOverlay>
                </GalleryItem>
              </Reveal>
            ))}
          </GalleryGrid>
        </Container>
      </Section>

      {/* GUEST VOICES */}
      <Section $pad={130}>
        <Container>
          <TwoCol>
            <Reveal>
              <VideoBlock>
                <video src={VIDEO_TESTIMONIAL} controls playsInline />
              </VideoBlock>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionLabel>Guest Voices</SectionLabel>
                <SectionTitle>A Little Hideaway Near Victoria Falls</SectionTitle>
                <VoiceQuote>
                  "Staying at Mbano Manor felt like finding a quiet little hideaway near Victoria Falls."
                </VoiceQuote>
                <SectionText>
                  Guests consistently praise the warmth of the staff, the beauty of the forest setting, and the exceptional food.
                </SectionText>
                <StoryCta as={Link} to="/guest-reviews">
                  Read Guest Reviews &rarr;
                </StoryCta>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      {/* LATEST NEWS */}
      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionTitle>Mbano in the Spotlight</SectionTitle>
              <StoryCta as={Link} to="/latest-news">
                All News &rarr;
              </StoryCta>
            </SectionHead>
          </Reveal>
          <Reveal>
            <NewsStrip>
              {NEWS_ITEMS.map((n) => (
                <li key={n.url}>
                  <a href={n.url} target="_blank" rel="noopener noreferrer">
                    {n.title}
                  </a>
                  <span className="d">{n.date}</span>
                </li>
              ))}
            </NewsStrip>
          </Reveal>
        </Container>
      </Section>

      <ContactSection />

      {/* CTA */}
      <CtaBanner>
        <Container>
          <h2>Your Mbano Story Awaits</h2>
          <p>
            An intimate five-star sanctuary hidden within Victoria Falls. Check-in from {CONTACT.checkIn}, checkout at {CONTACT.checkOut} — early arrivals and late departures are accommodated subject to availability.
          </p>
          <CtaActions>
            <BtnPrimary as={Link} to="/book-now">
              Book Now
            </BtnPrimary>
            <BtnWhatsapp href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp Reservations
            </BtnWhatsapp>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
