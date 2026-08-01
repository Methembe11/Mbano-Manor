import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container,
  Section,
  SectionTitle,
  SectionText,
  SectionHead,
  TwoCol,
  ContentImg,
  ContentText,
  GalleryGrid,
  GalleryItem,
  GalleryOverlay,
  GalleryItemIcon,
  BtnPrimary,
  BtnWhatsapp,
  CtaBanner,
  CtaActions,
  ReviewStars,
  Reveal,
} from '../components/primitives';
import { useLightbox } from '../context/Lightbox';
import ContactSection from '../components/ContactSection';
import { TRIPADVISOR_REVIEWS, GOOGLE_REVIEWS } from '../data/reviews';
import { HERO_VIDEOS, CONTACT, img } from '../data/site';

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

const HeroVideo = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1.4s ease;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const HeroText = styled.div``;

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

const heroBtn = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 16px 36px;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.ivory};
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid transparent;
  transition: background 0.45s ${({ theme }) => theme.transition},
    border-color 0.45s ${({ theme }) => theme.transition};
`;

const HeroBtnGold = styled(Link)`
  ${heroBtn}
  background: ${({ theme }) => theme.colors.gold};
  border-color: ${({ theme }) => theme.colors.gold};
  &:hover {
    background: ${({ theme }) => theme.colors.bronze};
    border-color: ${({ theme }) => theme.colors.bronze};
  }
`;

const HeroBtnGreen = styled(Link)`
  ${heroBtn}
  background: ${({ theme }) => theme.colors.teal};
  border-color: ${({ theme }) => theme.colors.teal};
  &:hover {
    background: ${({ theme }) => theme.colors.tealDeep};
    border-color: ${({ theme }) => theme.colors.tealDeep};
  }
`;

const HeroBtnFilm = styled.button`
  ${heroBtn}
  background: transparent;
  border-color: rgba(248, 247, 242, 0.45);
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const PlayIcon = styled.span`
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid ${({ theme }) => theme.colors.gold};
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

/* ===== DISCOVER MORE ===== */
const DiscoverLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 15px 34px;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.gold};
  background: transparent;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.45s ${({ theme }) => theme.transition},
    color 0.45s ${({ theme }) => theme.transition},
    border-color 0.45s ${({ theme }) => theme.transition};
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.ivory};
  }
  ${({ $dark, theme }) =>
    $dark &&
    css`
      color: ${theme.colors.ivory};
      border-color: rgba(248, 247, 242, 0.35);
      &:hover {
        background: ${theme.colors.gold};
        border-color: ${theme.colors.gold};
        color: ${theme.colors.ivory};
      }
    `}
`;

const SmallCaps = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 22px;
  ${({ $center }) => $center && 'text-align: center;'}
`;

/* ===== MANIFESTO ===== */
const Manifesto = styled.div`
  text-align: center;
  max-width: 920px;
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

const ManifestoLink = styled.div`
  margin-top: 44px;
`;

/* ===== STAY CARDS ===== */
const StayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StayCard = styled(Link)`
  display: block;
`;

const StayImage = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  border-radius: ${({ theme }) => theme.radius};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.3s ${({ theme }) => theme.transition};
  }
  ${StayCard}:hover & img { transform: scale(1.05); }
`;

const StayMeta = styled.div`
  margin-top: 26px;
  padding-right: 12px;
`;

const StayLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 14px;
`;

const StayTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(22px, 2vw, 28px);
  font-weight: 400;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 14px;
`;

const StayDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 17px;
  font-weight: 300;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-bottom: 26px;
  max-width: 420px;
`;

const QuietRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px 44px;
  margin-top: 72px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkSoft};
  span { color: ${({ theme }) => theme.colors.gold}; }
`;

/* ===== EXPERIENCES GRID ===== */
const Rail = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 28px;
  margin-top: 64px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 44px 24px;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 44px;
  }
`;

const RailCard = styled(Link)`
  display: block;
`;

const RailImage = styled.div`
  overflow: hidden;
  aspect-ratio: 3 / 4;
  border-radius: ${({ theme }) => theme.radius};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.3s ${({ theme }) => theme.transition};
  }
  ${RailCard}:hover & img { transform: scale(1.06); }
`;

const RailLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin: 24px 0 12px;
`;

const RailTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 22px;
  font-weight: 400;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 10px;
`;

const RailDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 300;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.inkSoft};
`;

/* ===== FULL-BLEED BREAK ===== */
const BreakBand = styled.section`
  height: 72vh;
  min-height: 480px;
  display: flex;
  align-items: flex-end;
  background: url('${({ $src }) => $src}') center center / cover no-repeat;
  position: relative;
  @media (max-width: 768px) {
    height: 52vh;
  }
`;

const BreakLabel = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 56px 44px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ivory};
  text-shadow: 0 1px 18px rgba(10, 40, 42, 0.55);
  @media (max-width: 768px) {
    padding: 0 28px 32px;
  }
`;

/* ===== WORLD OF MBANO ===== */
const WorldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 56px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 44px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WorldCell = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorldImage = styled.div`
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border-radius: ${({ theme }) => theme.radius};
  margin-bottom: 26px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.3s ${({ theme }) => theme.transition};
  }
  ${WorldCell}:hover & img { transform: scale(1.05); }
`;

const WorldLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 14px;
`;

const WorldTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ink};
  margin-bottom: 12px;
`;

const WorldText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-bottom: 24px;
  flex: 1;
`;

/* ===== NEWS STRIP ===== */
const NewsStrip = styled.ul`
  list-style: none;
  li {
    padding: 22px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    &:last-child { border-bottom: none; }
  }
  a {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: clamp(18px, 1.9vw, 22px);
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
    margin-top: 10px;
  }
`;

/* ===== CLOSING ===== */
const ClosingLine = styled.div`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(24px, 3vw, 38px);
  font-weight: 400;
  font-style: italic;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 18px;
`;

/* ===== GUEST REVIEWS CAROUSEL ===== */
const REVIEWS = [
  ...TRIPADVISOR_REVIEWS.map((r) => ({ ...r, source: 'TripAdvisor' })),
  ...GOOGLE_REVIEWS.map((r) => ({ ...r, source: 'Google' })),
];

const Carousel = styled.div`
  position: relative;
  max-width: 860px;
  margin: 64px auto 0;
  text-align: center;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  position: ${({ $active }) => ($active ? 'relative' : 'absolute')};
  inset: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  pointer-events: ${({ $active }) => ($active ? 'auto' : 'none')};
  transition: opacity 0.7s ease, visibility 0.7s ease;
`;

const SlideTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  margin: 18px 0 6px;
`;

const SlideText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(19px, 2vw, 24px);
  font-weight: 300;
  font-style: italic;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.ink};
  max-width: 780px;
`;

const SlideAuthor = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-top: 22px;
`;

const SlideSource = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-top: 5px;
`;

const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 44px;
`;

const ArrowBtn = styled.button`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(10, 10, 8, 0.18);
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.ink};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.3s ease, color 0.3s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Dot = styled.button`
  width: 7px;
  height: 7px;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ $active, theme }) => ($active ? theme.colors.gold : 'rgba(10, 10, 8, 0.18)')};
  transition: background 0.3s ease;
`;

function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = (dir) => setIndex((i) => (i + dir + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <Carousel onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {REVIEWS.map((r, i) => (
        <Slide key={`${r.author}-${i}`} $active={i === index}>
          <ReviewStars>★★★★★</ReviewStars>
          {r.title && <SlideTitle>{r.title}</SlideTitle>}
          <SlideText>&ldquo;{r.text}&rdquo;</SlideText>
          <SlideAuthor>{r.author}</SlideAuthor>
          <SlideSource>via {r.source}</SlideSource>
        </Slide>
      ))}
      <CarouselControls>
        <ArrowBtn aria-label="Previous review" onClick={() => go(-1)}>
          &#8592;
        </ArrowBtn>
        <Dots>
          {REVIEWS.map((_, i) => (
            <Dot
              key={i}
              aria-label={`Go to review ${i + 1}`}
              $active={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </Dots>
        <ArrowBtn aria-label="Next review" onClick={() => go(1)}>
          &#8594;
        </ArrowBtn>
      </CarouselControls>
    </Carousel>
  );
}

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
  {
    category: 'journey',
    img: img('2025/11/SpecialsBanner.jpg'),
    alt: 'Bespoke Packages',
    title: 'Bespoke Journeys',
    desc: 'Mbano, the Okavango Delta and the Kalahari — one seamless expedition.',
  },
];

const CATEGORY_LABEL = {
  adventure: 'Adventure',
  safari: 'Safari',
  relaxation: 'Relaxation',
  journey: 'Journeys',
};

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

const WORLD = [
  {
    label: 'Conservation & Community',
    title: 'Rooted in Zimbabwe',
    text: 'Only two trees were felled to build Mbano. Ancient teak remains the centrepiece of a four-acre sanctuary that employs and uplifts local Zimbabwean talent.',
    img: img('2025/03/MbanoManorOutside-1026-scaled.jpg'),
    to: '/mbano-forest',
    link: 'Discover the Forest',
  },
  {
    label: 'Recognition',
    title: "The World's Greatest Places",
    text: 'Named among Time magazine\u2019s World\u2019s Greatest Places and honoured with Zimbabwe\u2019s Best Boutique Lodge at the AZTA Awards.',
    img: img('2022/08/VictoriaFalls.jpg'),
    to: '/media-articles',
    link: 'All Press & Recognition',
  },
  {
    label: 'Guest Stories',
    title: 'A Quiet Little Hideaway',
    text: 'Guests speak of the warmth of the staff, the beauty of the teak forest, and dinners served beneath a canopy of stars.',
    img: img('2025/03/Lounge-scaled.jpg'),
    to: '/guest-reviews',
    link: 'Read Guest Reviews',
  },
];

/* ===== PAGE ===== */
export default function Home() {
  const [active, setActive] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [failed, setFailed] = useState({});
  const videoRefs = useRef([]);
  const openLightbox = useLightbox();

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % HERO_VIDEOS.length), 8000);
    return () => clearInterval(id);
  }, [timerKey]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      const shouldPlay = i === active && !failed[i];
      if (shouldPlay) {
        const p = v.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [active, failed]);

  const select = (i) => {
    if (i === active) return;
    setActive(i);
    setTimerKey((k) => k + 1);
  };

  const openFilm = () => openLightbox(CONTACT.youtube, 'Mbano Manor — The Film', 'video');

  const slide = HERO_VIDEOS[active];

  return (
    <>
      <Hero>
        {HERO_VIDEOS.map((v, i) =>
          failed[i] ? (
            <HeroSlide key={v.src} $src={v.poster} $i={i} $active={i === active} />
          ) : (
            <HeroVideo key={v.src} $active={i === active}>
              <video
                ref={(el) => {
                  if (el) {
                    el.muted = true;
                    videoRefs.current[i] = el;
                  } else {
                    videoRefs.current[i] = null;
                  }
                }}
                src={v.src}
                poster={v.poster}
                autoPlay
                loop
                playsInline
                preload="auto"
                onCanPlay={(e) => {
                  if (i === active && !failed[i]) e.currentTarget.play();
                  else e.currentTarget.pause();
                }}
                onError={() => setFailed((f) => ({ ...f, [i]: true }))}
              />
            </HeroVideo>
          ),
        )}
        <HeroOverlay />
        <HeroContent>
          <HeroText key={active}>
            <HeroEyebrow>{slide.eyebrow}</HeroEyebrow>
            <HeroTitle>
              {slide.title[0]}
              <br />
              <em>{slide.title[1]}</em>
            </HeroTitle>
            <HeroSub>{slide.sub}</HeroSub>
          </HeroText>
          <HeroActions>
            <HeroBtnGold to="/book-now">
              Reserve
            </HeroBtnGold>
            <HeroBtnGreen to="/dr-mati-nyazema-story">
              The Mbano Story
            </HeroBtnGreen>
            <HeroBtnFilm onClick={openFilm}>
              <PlayIcon />
              Watch the Film
            </HeroBtnFilm>
          </HeroActions>
        </HeroContent>
        <HeroIndicators aria-label="Hero scenes">
          {HERO_VIDEOS.map((v, i) => (
            <HeroIndicator
              key={v.src}
              $active={i === active}
              onClick={() => select(i)}
              aria-label={`Scene ${i + 1}`}
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
              <SmallCaps $center>Mbano Manor &middot; Victoria Falls</SmallCaps>
              <PullQuote>
                A dream forged at the foot of the Falls became a sanctuary built for the world — where ancient teak,
                quiet luxury, and the <em>thunder of the Zambezi</em> keep time together.
              </PullQuote>
              <ManifestoLink>
                <DiscoverLink to="/about-mbano">Discover More</DiscoverLink>
              </ManifestoLink>
            </Manifesto>
          </Reveal>
        </Container>
      </Section>

      {/* STAY */}
      <Section $pad={130}>
        <Container>
          <Reveal>
            <SectionHead>
              <SmallCaps>Stay</SmallCaps>
              <SectionTitle>A Choice of Sanctuary</SectionTitle>
              <SectionText $mt={16}>
                From private forest suites to an opulent villa, each space is a haven of understated luxury.
              </SectionText>
            </SectionHead>
          </Reveal>
          <StayGrid>
            <Reveal>
              <StayCard to="/luxury-suites">
                <StayImage>
                  <img src={img('2025/03/Suite-exterior-scaled.jpg')} alt="Luxury Suite" fetchPriority="high" />
                </StayImage>
                <StayMeta>
                  <StayLabel>18 Luxury Suites</StayLabel>
                  <StayTitle>Effortless Elegance Among the Teak</StayTitle>
                  <StayDesc>
                    45 sqm of tranquil living with a king-sized bed, private courtyard, outdoor shower, and a generous veranda overlooking the forest.
                  </StayDesc>
                  <DiscoverLink to="/luxury-suites">Explore Suites</DiscoverLink>
                </StayMeta>
              </StayCard>
            </Reveal>
            <Reveal delay={0.12}>
              <StayCard to="/mutota-forest-villa">
                <StayImage>
                  <img src={img('2025/01/1.jpg')} alt="Mutota Forest Villa" fetchPriority="high" />
                </StayImage>
                <StayMeta>
                  <StayLabel>Mutota Forest Villa</StayLabel>
                  <StayTitle>The Ultimate Forest Retreat</StayTitle>
                  <StayDesc>
                    200 sqm of pure indulgence with private gardens, plunge pool, two outdoor showers, and 24-hour butler service for up to six guests.
                  </StayDesc>
                  <DiscoverLink to="/mutota-forest-villa">Explore Villa</DiscoverLink>
                </StayMeta>
              </StayCard>
            </Reveal>
          </StayGrid>
          <Reveal>
            <QuietRow>
              <span>45</span> Sqm Suite &middot; <span>200</span> Sqm Villa &middot; <span>24/7</span> Butler &middot; <span>4 km</span> From the Falls
            </QuietRow>
          </Reveal>
        </Container>
      </Section>

      {/* EXPERIENCES */}
      <Section $pad={130}>
        <Container>
          <Reveal>
            <SectionHead>
              <SmallCaps>Experiences</SmallCaps>
              <SectionTitle>Majesty at the Falls</SectionTitle>
              <SectionText $mt={16}>
                One of the Seven Natural Wonders of the World — 1,700 metres wide, more than 100 metres deep, and four kilometres from your suite.
              </SectionText>
            </SectionHead>
          </Reveal>
          <Rail>
            {ACTIVITIES.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06}>
                <RailCard to={a.category === 'journey' ? '/mbano-packages' : '/victoria-falls'}>
                  <RailImage>
                    <img src={a.img} alt={a.alt} loading="lazy" />
                  </RailImage>
                  <RailLabel>{CATEGORY_LABEL[a.category]}</RailLabel>
                  <RailTitle>{a.title}</RailTitle>
                  <RailDesc>{a.desc}</RailDesc>
                </RailCard>
              </Reveal>
            ))}
          </Rail>
          <Reveal>
            <div style={{ textAlign: 'center' }}>
              <DiscoverLink to="/victoria-falls">Explore All Activities</DiscoverLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FULL-BLEED BREAK */}
      <BreakBand $src={img('2025/03/MbanoManorEvening-1009-scaled.jpg')}>
        <BreakLabel>One of the Seven Natural Wonders of the World</BreakLabel>
      </BreakBand>

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
                <SmallCaps>Dining</SmallCaps>
                <SectionTitle>Dine Beneath the Teak Trees</SectionTitle>
                <SectionText $mt={16}>
                  Every meal at Mbano Manor is a celebration of Zimbabwean flavours, crafted with locally sourced ingredients and served wherever you desire — beneath the ancient canopy, on your private veranda, or beneath a canopy of stars.
                </SectionText>
                <SectionText $mt={16}>
                  Fine or casual dining on the terrace, in the bar courtyard, in the lounge, or in the comfort of your suite. Dietary requirements — including full Kosher services — are embraced, not endured.
                </SectionText>
                <div style={{ marginTop: 30 }}>
                  <DiscoverLink to="/contact">Inquire About Dining</DiscoverLink>
                </div>
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
                <SmallCaps>Wellness</SmallCaps>
                <SectionTitle>Wellness in the Forest</SectionTitle>
                <SectionText $mt={16}>
                  Set within the quiet beauty of Mbano's forest sanctuary, Bayuni Spa offers a deeply restorative experience designed to relax the body, calm the mind and rejuvenate the spirit.
                </SectionText>
                <div style={{ marginTop: 30 }}>
                  <DiscoverLink to="/bayuni-spa">View the Spa Menu</DiscoverLink>
                </div>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      {/* THE STORY */}
      <Section $pad={130}>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg>
                <img src={img('2026/01/Untitled-design-2026-01-25T193718.273-1024x1024.jpg')} alt="Dr Mati Nyazema — Founder of Mbano Manor Hotel" />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SmallCaps>Our Story</SmallCaps>
                <SectionTitle>A Vision Rooted in Zimbabwe</SectionTitle>
                <SectionText $mt={16}>
                  Built by a Zimbabwean woman determined to create a luxury destination unlike any other. Founded, built, and managed by Dr Matifadza Martha Nyazema — Mother, Grandmother, Businesswoman &amp; Hotelier.
                </SectionText>
                <SectionText $mt={16}>
                  Proudly black female-owned and independent, Mbano is a family-owned boutique safari hotel and a testament to African excellence.
                </SectionText>
                <div style={{ marginTop: 30 }}>
                  <DiscoverLink to="/dr-mati-nyazema-story">Read Doc's Full Story</DiscoverLink>
                </div>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      {/* WORLD OF MBANO */}
      <Section $pad={130}>
        <Container>
          <Reveal>
            <SectionHead>
              <SmallCaps>The World of Mbano</SmallCaps>
              <SectionTitle>Beyond the Sanctuary</SectionTitle>
            </SectionHead>
          </Reveal>
          <WorldGrid>
            {WORLD.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <WorldCell>
                  <WorldImage>
                    <img src={w.img} alt={w.title} loading="lazy" />
                  </WorldImage>
                  <WorldLabel>{w.label}</WorldLabel>
                  <WorldTitle>{w.title}</WorldTitle>
                  <WorldText>{w.text}</WorldText>
                  <DiscoverLink to={w.to}>{w.link}</DiscoverLink>
                </WorldCell>
              </Reveal>
            ))}
          </WorldGrid>
        </Container>
      </Section>

      {/* GALLERY */}
      <Section $pad={130}>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SmallCaps $center>Gallery</SmallCaps>
              <SectionTitle>The Mbano Light</SectionTitle>
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
          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <DiscoverLink to="/gallery">View Full Gallery</DiscoverLink>
          </div>
        </Container>
      </Section>

      {/* LATEST NEWS */}
      <Section $pad={130} $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SmallCaps>Journal</SmallCaps>
              <SectionTitle>Mbano in the Spotlight</SectionTitle>
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
          <Reveal>
            <div style={{ marginTop: 28 }}>
              <DiscoverLink to="/latest-news">All News</DiscoverLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <ContactSection />

      {/* GUEST REVIEWS CAROUSEL */}
      <Section $pad={130} $tint>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SmallCaps $center>Guest Reviews</SmallCaps>
              <SectionTitle>Words From Our Guests</SectionTitle>
            </SectionHead>
          </Reveal>
          <ReviewsCarousel />
          <Reveal>
            <div style={{ textAlign: 'center', marginTop: 56 }}>
              <DiscoverLink to="/guest-reviews">Read All Reviews</DiscoverLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FINAL SCENE */}
      <CtaBanner>
        <Container>
          <ClosingLine>Some places are visited. Others are remembered forever.</ClosingLine>
          <h2>Your Mbano Story Awaits</h2>
          <p>
            An intimate five-star sanctuary hidden within Victoria Falls. Check-in from {CONTACT.checkIn}, checkout at {CONTACT.checkOut}.
          </p>
          <CtaActions>
            <BtnPrimary as={Link} to="/book-now">
              Reserve
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
