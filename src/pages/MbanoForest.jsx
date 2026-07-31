import { Link } from 'react-router-dom';
import {
  Container,
  Section,
  SectionLabel,
  SectionTitle,
  SectionText,
  Divider,
  SectionHead,
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

const FOREST_GALLERY = [
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/7.jpg', alt: 'Mbano forest view 1' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/9.jpg', alt: 'Mbano forest view 2' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/12.jpg', alt: 'Mbano forest view 3' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/11.jpg', alt: 'Mbano forest view 4' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/8.jpg', alt: 'Mbano forest view 5' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/5.jpg', alt: 'Mbano forest view 6' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/3.jpg', alt: 'Mbano forest view 7' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/13.jpg', alt: 'Mbano forest view 8' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/1.jpg', alt: 'Mbano forest view 9' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/6.jpg', alt: 'Mbano forest view 10' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/2.jpg', alt: 'Mbano forest view 11' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/06/4.jpg', alt: 'Mbano forest view 12' },
];

export default function MbanoForest() {
  const openLightbox = useLightbox();

  return (
    <>
      <PageHero
        crumb="/"
        crumbLabel="Home"
        badge="Nature"
        title="Explore the Mbano Forest"
        sub="A bird and tree sanctuary &mdash; four acres of ancient teak forest, home to numerous and colourful bird species."
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>A Bird and Tree Sanctuary</SectionLabel>
              <SectionTitle>Nature at Its Finest</SectionTitle>
              <Divider $center />
              <SectionText>
                Mbano Manor was carefully designed to ensure minimal disruption of the original teak tree forest. Only two
                trees were taken down during construction, while a topographical survey mapped out over 80 major trees on
                the four-acre estate. The buildings were then fitted around the trees. Meet our numerous and colourful bird
                species as you walk safely through the sprawling forest paths, or just sit comfortably, for coffee or
                sundowner, by your suite veranda.
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Forest Gallery</SectionLabel>
              <SectionTitle>Among the Ancient Teak</SectionTitle>
            </SectionHead>
          </Reveal>
          <GalleryGrid>
            {FOREST_GALLERY.map((g, i) => (
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
          <h2>Stay Among the Ancient Teak</h2>
          <p>Book your stay at Mbano Manor Hotel and wake up to the sounds of the forest.</p>
          <CtaActions>
            <BtnPrimary as={Link} to="/book-now">
              Book Now
            </BtnPrimary>
            <BtnWhatsapp href="https://api.whatsapp.com/send?phone=263788928776" target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </BtnWhatsapp>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
