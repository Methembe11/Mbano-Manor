import styled from 'styled-components';
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
  DetailList,
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
import { img } from '../data/site';

const Manifesto = styled.div`
  text-align: center;
  max-width: 880px;
  margin: 0 auto 72px;
`;

const PullQuote = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(26px, 3.4vw, 42px);
  font-weight: 300;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.ink};
  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.bronze};
  }
`;

const SUITE_GALLERY = [
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2020/03/Mbano-suite-view-of-lounge.jpg', alt: 'Mbano suite lounge' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2020/03/Mbano-bathroom.jpg', alt: 'Mbano suite bathroom' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2020/03/Mbano-bathroom-view-of-closet.jpg', alt: 'Mbano suite bathroom and closet' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2019/12/Unwind-in-a-relaxing-bath-overlooking-a-private-courtyard.jpg', alt: 'Relaxing bath overlooking a private courtyard' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2020/03/Mbano-lounge-detail.jpg', alt: 'Mbano lounge detail' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Suite-exterior-scaled.jpg', alt: 'Mbano suite exterior' },
];

const SUITE_FEATURES = [
  '45 sqm comprising a comfortable living space. Additional 53 sqm of outside terrace, plus private courtyard.',
  'King-sized bed with bespoke mosquito net curtains. 8 of the suites have the option for twin beds.',
  'Traditional teak tree shutters and teak finishing indoors and outdoors.',
  'Full bathroom with feature hand-painted tiles and classic claw bath joins a private his and hers dressing room, and leads out onto a private courtyard (king-bed suites only).',
  'Outdoor showers being rolled out in all king-bed suites.',
  'The lounge area of the suite features a self-service refreshment area, fully stocked with coffee, snacks, mini bar, ice and coffee machine.',
  'A generous outside terrace wraps around the suite, shielded by natural vegetation. The perfect space to relax in a natural setting.',
];

export default function LuxurySuites() {
  const openLightbox = useLightbox();

  return (
    <>
      <PageHero
        crumb="/"
        crumbLabel="Home"
        badge="Accommodation"
        title="18 Luxury Suites"
        sub="Effortless comfort and elegance combine with spacious Victoria Falls accommodation and personalised, intuitive service to provide unrivalled hospitality at Mbano Manor Hotel Victoria Falls."
      />

      <Section $pad={130}>
        <Container>
          <Reveal>
            <ContentImg $tall>
              <img
                src={img('2025/05/Untitled-design-2025-05-06T231716.810.jpg')}
                alt="Mbano Manor luxury suites in the forest"
              />
            </ContentImg>
          </Reveal>
        </Container>
      </Section>

      <Section $pad={70} $tint>
        <Container>
          <Reveal>
            <Manifesto>
              <PullQuote>
                A suite that opens onto the forest — where the only soundtrack is birdsong, and the mornings arrive warm
                through <em>teak shutters</em>.
              </PullQuote>
            </Manifesto>
          </Reveal>
          <TwoCol>
            <Reveal>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2020/03/Mbano-suite-view.jpg"
                  alt="View of a Mbano Manor suite"
                />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionLabel>Your Private Retreat</SectionLabel>
                <SectionTitle>A Tranquil Space to Unwind</SectionTitle>
                <Divider />
                <SectionText>
                  Consisting of a calming lounge area, spacious king-sized bedroom, bathroom, dressing room and a private courtyard, the suites offer a tranquil space in which to unwind.
                </SectionText>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Section $pad={130}>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionTitle>Luxury Suite Details</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <DetailList>
              {SUITE_FEATURES.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $pad={130} $tint>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionTitle>Inside the Luxury Suites</SectionTitle>
            </SectionHead>
          </Reveal>
          <GalleryGrid>
            {SUITE_GALLERY.map((g, i) => (
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
          <h2>Experience the Suites</h2>
          <p>Reserve your luxury suite at Mbano Manor Hotel and unwind among the ancient teak forest of Victoria Falls.</p>
          <CtaActions>
            <BtnWhatsapp href="https://api.whatsapp.com/send?phone=263788928776" target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </BtnWhatsapp>
            <BtnPrimary as={Link} to="/book-now">
              Book Now
            </BtnPrimary>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
