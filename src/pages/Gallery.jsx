import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Section, SectionLabel, SectionHead, GalleryCaption, GalleryGrid, GalleryItem, GalleryOverlay, GalleryItemIcon, Reveal, CtaBanner, CtaActions, BtnPrimary, BtnWhatsapp } from '../components/primitives';
import PageHero from '../components/PageHero';
import { useLightbox } from '../context/Lightbox';
import { CONTACT } from '../data/site';

const FilterSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 760px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FilterBtn = styled.button`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 16px 20px;
  background: transparent;
  border: 1px solid rgba(61, 47, 35, 0.15);
  border-radius: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.deepTeak};
  transition: all 0.3s ease;
  text-align: center;
  &:hover {
    border-color: ${({ theme }) => theme.colors.antiqueGold};
    color: ${({ theme }) => theme.colors.antiqueGold};
  }
  ${({ $active }) =>
    $active &&
    css`
      background: ${({ theme }) => theme.colors.forestNight};
      border-color: ${({ theme }) => theme.colors.forestNight};
      color: ${({ theme }) => theme.colors.pureWhite};
    `}
`;

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'hotel', label: 'The Hotel' },
  { id: 'soiree', label: 'Zambezi Soirée' },
  { id: 'falls', label: 'Victoria Falls' },
];

const CATEGORIES = [
  {
    id: 'hotel',
    label: 'Gallery',
    title: 'The Hotel',
    images: [
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Terrace-scaled.jpg', alt: 'Mbano Manor Hotel terrace' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Suite-exterior-scaled.jpg', alt: 'Mbano Manor suite exterior' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Suite-2-scaled.jpg', alt: 'Mbano Manor luxury suite' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Suite-1-scaled.jpg', alt: 'Mbano Manor suite interior' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Signature-2-scaled.jpg', alt: 'Mbano Manor signature suite' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Signature-1-scaled.jpg', alt: 'Mbano Manor signature suite' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MbanoMorningEdit-1036-scaled.jpg', alt: 'Mbano Manor morning' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MbanoManorSuite-1025-scaled.jpg', alt: 'Mbano Manor suite' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MbanoManorSuite-1020-scaled.jpg', alt: 'Mbano Manor suite' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MbanoManorOutside-1028-scaled.jpg', alt: 'Mbano Manor exterior' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MbanoManorOutside-1026-scaled.jpg', alt: 'Mbano Manor exterior' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MbanoManorEvening-1028-scaled.jpg', alt: 'Mbano Manor at dusk' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MbanoManorEvening-1009-scaled.jpg', alt: 'Mbano Manor at dusk' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MbanoManorEvening-1004-scaled.jpg', alt: 'Mbano Manor at dusk' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Lounge-scaled.jpg', alt: 'Mbano Manor lounge' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Lobby-garden-2-scaled.jpg', alt: 'Mbano Manor lobby garden' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Bathroom-1.jpg', alt: 'Mbano Manor bathroom' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Bathroom-2-scaled.jpg', alt: 'Mbano Manor bathroom' },
    ],
  },
  {
    id: 'soiree',
    label: 'Events',
    title: 'Zambezi Soirée Ladies Weekend',
    images: [
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/14.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/6.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/4.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/12.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/18.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/10.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/19.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/7.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/21.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/16.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/13.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/15.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/20.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/3.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/8.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/2.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/1.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/5.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/22.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/9.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/07/11.jpg', alt: 'Zambezi Soirée Ladies Weekend' },
    ],
  },
  {
    id: 'falls',
    label: 'Experiences',
    title: 'Explore Victoria Falls',
    images: [
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/VicFalls3-scaled.jpg', alt: 'Victoria Falls' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/VicFalls2.jpg', alt: 'Victoria Falls' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MM_PIM-207-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MM_PIM-205-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/5.jpg', alt: 'Victoria Falls' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A2667-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/2-1.jpg', alt: 'Victoria Falls' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/4.jpg', alt: 'Victoria Falls' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/3.jpg', alt: 'Victoria Falls' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MM_PIM-204-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/MM_PIM-201-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/1-1.jpg', alt: 'Victoria Falls' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A2594-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A3000-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A3780-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A3944-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A3981-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A3978-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A4167-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A4114-scaled.jpg', alt: 'Victoria Falls experience' },
      { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/EA2A4131-scaled.jpg', alt: 'Victoria Falls experience' },
    ],
  },
];

export default function Gallery() {
  const [active, setActive] = useState('all');
  const openLightbox = useLightbox();

  return (
    <>
      <PageHero
        badge="Gallery"
        title="Explore Mbano Manor Hotel"
        sub="A curated collection of the hotel, its suites, the forest and the majesty of Victoria Falls."
        crumb="/"
        crumbLabel="Home"
      />

      <Section $pad={80}>
        <Container>
          <FilterSelector>
            {FILTERS.map((f) => (
              <FilterBtn key={f.id} $active={active === f.id} onClick={() => setActive(f.id)}>
                {f.label}
              </FilterBtn>
            ))}
          </FilterSelector>
        </Container>
      </Section>

      {CATEGORIES.map((cat) => {
        const visible = active === 'all' || active === cat.id;
        return (
          <Section key={cat.id} $dark={cat.id === 'soiree'} style={visible ? undefined : { display: 'none' }}>
            <Container>
              <Reveal>
                <SectionHead>
                  <SectionLabel>{cat.label}</SectionLabel>
                  <GalleryCaption>{cat.title}</GalleryCaption>
                </SectionHead>
              </Reveal>
              <Reveal>
                <GalleryGrid>
                  {cat.images.map((g) => (
                    <GalleryItem key={g.src} onClick={() => openLightbox(g.src, g.alt)}>
                      <img src={g.src} alt={g.alt} loading="lazy" />
                      <GalleryOverlay>
                        <GalleryItemIcon>&#8599;</GalleryItemIcon>
                      </GalleryOverlay>
                    </GalleryItem>
                  ))}
                </GalleryGrid>
              </Reveal>
            </Container>
          </Section>
        );
      })}

      <CtaBanner>
        <Container>
          <SectionHead $center>
            <SectionLabel>Book Your Stay</SectionLabel>
            <h2>Love What You See?</h2>
            <p>Experience the luxury, serenity and wild beauty of Mbano Manor Hotel Victoria Falls for yourself.</p>
          </SectionHead>
          <CtaActions>
            <BtnPrimary as={Link} to="/book-now">Book Now</BtnPrimary>
            <BtnWhatsapp href={CONTACT.whatsappPackages} target="_blank" rel="noopener noreferrer">WhatsApp</BtnWhatsapp>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
