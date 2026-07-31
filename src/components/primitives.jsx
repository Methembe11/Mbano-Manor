import styled, { css } from 'styled-components';
import { Container, BtnPrimary, BtnOutline, BtnWhatsapp } from '../globalStyles';
import Reveal from './Reveal';
import { breakpoints } from '../theme';

export { Container, BtnPrimary, BtnOutline, BtnWhatsapp };

/* ===== SECTIONS ===== */
export const Section = styled.section`
  padding: ${({ theme }) => theme.sectionPad} 0;
  background: ${({ $tint, $dark, $deep, theme }) =>
    $deep
      ? theme.colors.tealDeep
      : $dark
        ? theme.colors.teal
        : $tint
          ? theme.colors.pureWhite
          : 'transparent'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  ${({ $pad }) => $pad && `padding: ${$pad}px 0;`}
  ${({ $noBorder }) => $noBorder && 'border-bottom: none;'}
  @media (max-width: 768px) {
    padding: 76px 0;
    ${({ $pad }) => $pad && `padding: ${Math.round($pad * 0.55)}px 0;`}
  }
`;

export const SectionLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 22px;
  &::before {
    content: '';
    width: 28px;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.12;
  color: ${({ $light, theme }) => ($light ? theme.colors.ivory : theme.colors.ink)};
`;

export const SectionText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(18px, 1.6vw, 20px);
  font-weight: 300;
  line-height: 1.75;
  color: ${({ $light, theme }) => ($light ? theme.colors.warmStone : theme.colors.ink)};
  ${({ $mt }) => $mt && `margin-top: ${$mt}px;`}
`;

export const Divider = styled.div`
  width: 64px;
  height: 1px;
  background: ${({ theme }) => theme.colors.gold};
  margin: 28px 0;
  ${({ $center }) => $center && 'margin-left: auto; margin-right: auto;'}
`;

export const SectionHead = styled.div`
  max-width: 720px;
  margin-bottom: 72px;
  ${({ $center }) => $center && 'text-align: center; margin-left: auto; margin-right: auto;'}
  ${({ $center }) =>
    $center &&
    css`
      ${SectionLabel} { justify-content: center; }
      &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        background: ${({ theme }) => theme.colors.gold};
        margin: 32px auto 0;
      }
    `}
`;

export const StoryCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-top: 16px;
  padding-bottom: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
  transition: gap 0.4s ${({ theme }) => theme.transition}, color 0.4s ${({ theme }) => theme.transition};
  cursor: pointer;
  &:hover {
    gap: 18px;
    color: ${({ theme }) => theme.colors.bronze};
    border-bottom-color: ${({ theme }) => theme.colors.bronze};
  }
`;

/* ===== CONTENT LAYOUTS ===== */
export const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 88px;
  align-items: center;
  ${({ $reverse }) => $reverse && '& > :first-child { order: 2; }'}
  @media (max-width: 1024px) {
    gap: 48px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    & > :first-child { order: 0; }
  }
`;

export const ContentImg = styled.div`
  height: 560px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius};
  ${({ $tall }) => $tall && 'height: 680px;'}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.3s ${({ theme }) => theme.transition};
  }
  &:hover img { transform: scale(1.025); }
  @media (max-width: 768px) {
    height: 380px;
    ${({ $tall }) => $tall && 'height: 460px;'}
  }
`;

export const ContentText = styled.div`
  .section-text { margin-bottom: 24px; }
`;

export const DetailList = styled.ul`
  li {
    position: relative;
    padding: 12px 0 12px 30px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.ink};
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    strong { font-weight: 500; color: ${({ theme }) => theme.colors.teal}; }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 21px;
      width: 14px;
      height: 1px;
      background: ${({ theme }) => theme.colors.gold};
    }
  }
`;

/* ===== CARDS ===== */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  ${({ $two }) => $two && 'grid-template-columns: repeat(2, 1fr);'}
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    ${({ $two }) => $two && 'grid-template-columns: 1fr;'}
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  padding: 48px 40px;
  text-align: left;
  transition: transform 0.5s ${({ theme }) => theme.transition},
    box-shadow 0.5s ${({ theme }) => theme.transition},
    border-color 0.5s ${({ theme }) => theme.transition};
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(184, 155, 94, 0.45);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
  ${({ $dark }) =>
    $dark &&
    css`
      background: rgba(248, 247, 242, 0.04);
      border-color: ${({ theme }) => theme.colors.lineTeal};
      &:hover {
        border-color: rgba(184, 155, 94, 0.4);
        box-shadow: 0 22px 54px rgba(6, 24, 26, 0.4);
      }
    `}
`;

export const CardIcon = styled.div`
  width: 42px;
  height: 42px;
  margin-bottom: 26px;
  color: ${({ theme }) => theme.colors.gold};
  svg { width: 100%; height: 100%; }
`;

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.ivory : theme.colors.ink)};
  margin-bottom: 14px;
`;

export const CardText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 17px;
  font-weight: 300;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.warmStone : theme.colors.ink)};
  line-height: 1.7;
`;

/* ===== IMAGE GRID / GALLERY ===== */
export const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  ${({ $four }) => $four && 'grid-template-columns: repeat(4, 1fr);'}
  @media (max-width: 1024px) {
    ${({ $four }) => $four && 'grid-template-columns: repeat(3, 1fr);'}
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius};
  position: relative;
  height: 300px;
  cursor: ${({ $zoom }) => ($zoom ? 'pointer' : 'default')};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.2s ${({ theme }) => theme.transition};
  }
  &:hover img { transform: ${({ $zoom }) => ($zoom ? 'scale(1.045)' : 'none')}; }
  ${({ $four }) => $four && 'height: 240px;'}
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radius};
  &:nth-child(1), &:nth-child(6) {
    grid-column: span 2;
    grid-row: span 2;
  }
  @media (max-width: 768px) {
    &:nth-child(1), &:nth-child(6) {
      grid-column: span 2;
      grid-row: span 1;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.4s ${({ theme }) => theme.transition}, filter 0.8s ease;
  }
  &:hover img { transform: scale(1.05); filter: brightness(0.72); }
`;

export const GalleryOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(14, 52, 54, 0.55) 0%, rgba(14, 52, 54, 0.08) 70%);
  opacity: 0;
  transition: opacity 0.6s ease;
  ${GalleryItem}:hover & { opacity: 1; }
`;

export const GalleryItemIcon = styled.span`
  color: ${({ theme }) => theme.colors.ivory};
  font-size: 30px;
  font-weight: 200;
  transform: scale(0.6) rotate(-90deg);
  transition: transform 0.5s ${({ theme }) => theme.transition};
  ${GalleryItem}:hover & { transform: scale(1) rotate(0deg); }
`;

export const GalleryCaption = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin: 56px 0 28px;
`;

/* ===== MEDIA ===== */
export const VideoBlock = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius};
  video {
    width: 100%;
    display: block;
    max-height: 600px;
    object-fit: cover;
  }
`;

export const MediaFrame = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.tealDeep};
  video, iframe { width: 100%; height: 100%; display: block; border: 0; object-fit: cover; }
  ${({ $ratio }) => $ratio && `aspect-ratio: ${$ratio};`}
`;

/* ===== REVIEWS ===== */
export const ReviewCard = styled.div`
  background: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  padding: 36px;
  margin-bottom: 20px;
  ${({ $dark }) =>
    $dark &&
    css`
      background: rgba(248, 247, 242, 0.04);
      border-color: ${({ theme }) => theme.colors.lineTeal};
    `}
`;

export const ReviewStars = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 13px;
  letter-spacing: 4px;
  margin-bottom: 16px;
`;

export const ReviewTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 19px;
  font-weight: 500;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.ivory : theme.colors.ink)};
  margin-bottom: 12px;
`;

export const ReviewText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 18px;
  font-weight: 300;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.warmStone : theme.colors.ink)};
  line-height: 1.7;
`;

export const ReviewAuthor = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-top: 16px;
`;

export const ReviewSource = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin-top: 5px;
`;

/* ===== NEWS ===== */
export const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NewsCard = styled.article`
  background: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  transition: transform 0.5s ${({ theme }) => theme.transition},
    box-shadow 0.5s ${({ theme }) => theme.transition},
    border-color 0.5s ${({ theme }) => theme.transition};
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(184, 155, 94, 0.45);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
`;

export const NewsThumb = styled.div`
  height: 240px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.2s ${({ theme }) => theme.transition};
  }
  ${NewsCard}:hover & img { transform: scale(1.05); }
`;

export const NewsBody = styled.div`
  padding: 32px;
`;

export const NewsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 19px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.35;
  margin-bottom: 12px;
  a { transition: color 0.3s ease; }
  a:hover { color: ${({ theme }) => theme.colors.gold}; }
`;

export const NewsMeta = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 14px;
`;

export const NewsExcerpt = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.ink};
`;

/* ===== TABLE ===== */
export const SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td {
    padding: 16px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 18px;
    font-weight: 300;
    vertical-align: top;
    &:first-child {
      font-family: ${({ theme }) => theme.fonts.ui};
      font-size: 10px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.gold};
      width: 220px;
      font-weight: 500;
    }
  }
  ${({ $dark }) => $dark && 'td { border-color: rgba(248, 247, 242, 0.14); }'}
`;

/* ===== CTA BANNER ===== */
export const CtaBanner = styled.section`
  background: ${({ theme }) => theme.colors.tealDeep};
  text-align: center;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(1200px 400px at 50% 110%, rgba(184, 155, 94, 0.14), transparent 65%);
    pointer-events: none;
  }
  h2 {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(30px, 3.6vw, 46px);
    font-weight: 500;
    color: ${({ theme }) => theme.colors.ivory};
    margin-bottom: 18px;
  }
  p {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 19px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.warmStone};
    max-width: 620px;
    margin: 0 auto 38px;
  }
`;

export const CtaActions = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

/* ===== CONTACT ===== */
export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 88px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

export const ContactDetail = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 26px;
`;

export const ContactDetailIcon = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 19px;
  line-height: 1;
  min-width: 24px;
`;

export const ContactDetailLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 5px;
`;

export const ContactDetailValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 19px;
  color: ${({ theme }) => theme.colors.ink};
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  input, textarea {
    font-family: ${({ theme }) => theme.fonts.ui};
    font-size: 14px;
    padding: 17px 20px;
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: ${({ theme }) => theme.radius};
    background: ${({ theme }) => theme.colors.pureWhite};
    color: ${({ theme }) => theme.colors.ink};
    transition: border-color 0.4s ease, box-shadow 0.4s ease;
    outline: none;
    &:focus {
      border-color: ${({ theme }) => theme.colors.gold};
      box-shadow: 0 0 0 3px rgba(184, 155, 94, 0.12);
    }
    &::placeholder { color: ${({ theme }) => theme.colors.inkSoft}; }
  }
  textarea { min-height: 130px; resize: vertical; }
`;

/* ===== COMPATIBILITY ===== */
export { Reveal, breakpoints };
