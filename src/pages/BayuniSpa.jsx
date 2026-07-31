import { Link } from 'react-router-dom';
import {
  Container,
  Section,
  SectionLabel,
  SectionTitle,
  SectionText,
  Divider,
  SectionHead,
  TwoCol,
  ContentImg,
  ContentText,
  GalleryGrid,
  GalleryItem,
  GalleryOverlay,
  GalleryItemIcon,
  CtaBanner,
  CtaActions,
  BtnPrimary,
  BtnWhatsapp,
  Reveal,
} from '../components/primitives';
import { useLightbox } from '../context/Lightbox';
import PageHero from '../components/PageHero';

const SPA_MENU = [
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/2.jpg', alt: 'Bayuni Spa treatment menu 1' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/4.jpg', alt: 'Bayuni Spa treatment menu 2' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/9.jpg', alt: 'Bayuni Spa treatment menu 3' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/5.jpg', alt: 'Bayuni Spa treatment menu 4' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/8.jpg', alt: 'Bayuni Spa treatment menu 5' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/6.jpg', alt: 'Bayuni Spa treatment menu 6' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/7.jpg', alt: 'Bayuni Spa treatment menu 7' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/3.jpg', alt: 'Bayuni Spa treatment menu 8' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/1.jpg', alt: 'Bayuni Spa treatment menu 9' },
];

export default function BayuniSpa() {
  const openLightbox = useLightbox();

  return (
    <>
      <PageHero
        crumb="/"
        crumbLabel="Home"
        badge="Wellness"
        title="Bayuni Spa"
        sub="Set within the quiet beauty of Mbano's forest sanctuary, Bayuni Spa offers a deeply restorative wellness experience designed to relax the body, calm the mind and rejuvenate the spirit."
      />

      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/09/BayuniSpa.jpg"
                  alt="Bayuni Spa at Mbano Manor Hotel"
                />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionLabel>Bayuni Spa</SectionLabel>
                <SectionTitle>Wellness in the Forest</SectionTitle>
                <Divider />
                <SectionText>
                  From indulgent massages to revitalising facials, every treatment is thoughtfully crafted to leave you
                  feeling renewed.
                </SectionText>
                <SectionText>
                  The Bayuni Songbird Retreat &mdash; an intimate and tranquil wellness space designed to soothe the soul
                  &mdash; is now open at Mbano Manor Hotel.
                </SectionText>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Treatments &amp; Rituals</SectionLabel>
              <SectionTitle>Bayuni Spa Menu</SectionTitle>
              <Divider $center />
            </SectionHead>
          </Reveal>
          <GalleryGrid>
            {SPA_MENU.map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 0.1}>
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

      <CtaBanner>
        <Container>
          <h2>Restore Body, Calm Mind</h2>
          <p>Reserve your treatment at Bayuni Spa and let the forest sanctuary work its magic.</p>
          <CtaActions>
            <BtnWhatsapp href="https://api.whatsapp.com/send?phone=263788928776" target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </BtnWhatsapp>
            <BtnPrimary as={Link} to="/contact">
              Contact Reservations
            </BtnPrimary>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
