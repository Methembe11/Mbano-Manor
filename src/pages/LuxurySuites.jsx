import { useState } from 'react';
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

const Scene = styled.div`
  position: relative;
  height: 620px;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  @media (max-width: 768px) {
    height: 480px;
  }
`;

const SceneImage = styled.div`
  position: absolute;
  inset: 0;
  background: url('${({ $src }) => $src}') center 30% / cover no-repeat;
`;

const SceneTint = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ $tint }) => $tint};
  transition: background 1.6s ease;
`;

const SceneVignette = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 13, 15, 0.28) 0%, rgba(4, 13, 15, 0) 42%, rgba(4, 13, 15, 0.5) 100%);
`;

const SceneCaption = styled.div`
  position: absolute;
  left: 40px;
  bottom: 40px;
  z-index: 2;
  max-width: 460px;
  animation: sceneRise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
  @keyframes sceneRise {
    from {
      opacity: 0;
      transform: translateY(14px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 768px) {
    left: 24px;
    bottom: 24px;
  }
`;

const SceneClock = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 12px;
`;

const SceneLine = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 300;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.ivory};
  text-shadow: 0 2px 18px rgba(4, 13, 15, 0.55);
  margin: 0;
`;

const AtmosphereControl = styled.div`
  display: flex;
  margin-top: 34px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AtmosphereBtn = styled.button`
  flex: 1;
  padding: 22px 12px 18px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.inkSoft)};
  border-bottom-color: ${({ theme, $active }) => ($active ? theme.colors.gold : 'transparent')};
  transition: color 0.4s ease, border-color 0.4s ease;
  &:hover {
    color: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.ink)};
  }
  @media (max-width: 640px) {
    border-bottom-width: 1px;
    &:nth-child(odd) {
      border-right: 1px solid ${({ theme }) => theme.colors.line};
    }
  }
`;

const ATMOSPHERES = [
  {
    label: 'Morning',
    time: '06:00',
    tint: 'linear-gradient(180deg, rgba(255, 230, 180, 0.26) 0%, rgba(255, 198, 128, 0.12) 100%)',
    line: 'First light slips through the teak shutters — coffee on the terrace as the forest wakes.',
  },
  {
    label: 'Afternoon',
    time: '14:00',
    tint: 'linear-gradient(180deg, rgba(255, 244, 214, 0.14) 0%, rgba(214, 170, 110, 0.12) 100%)',
    line: 'Dappled shade across the courtyard, a book in hand, and the steady hum of cicadas.',
  },
  {
    label: 'Golden Hour',
    time: '18:30',
    tint: 'linear-gradient(180deg, rgba(255, 176, 96, 0.34) 0%, rgba(196, 120, 52, 0.26) 100%)',
    line: 'Sundowners settle over the Zambezi as the sky turns to bronze and the forest hushes.',
  },
  {
    label: 'Night',
    time: '22:00',
    tint: 'linear-gradient(180deg, rgba(10, 24, 28, 0.72) 0%, rgba(6, 16, 19, 0.88) 100%)',
    line: 'Candlelight, a cool breeze through the trees, and the Southern Cross overhead.',
  },
];

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
  const [atmosphere, setAtmosphere] = useState(0);

  return (
    <>
      <PageHero
        crumb="/"
        crumbLabel="Home"
        badge="Accommodation"
        title="18 Luxury Suites"
        sub="Effortless comfort and elegance combine with spacious Victoria Falls accommodation and personalised, intuitive service to provide unrivalled hospitality at Mbano Manor Hotel Victoria Falls."
      />

      <Section $pad={70}>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Suite Explorer</SectionLabel>
              <SectionTitle>Move Into Your Suite</SectionTitle>
              <Divider />
              <SectionText>
                Wander through the day at Mbano — from first light on the terrace to the African night beyond the trees.
              </SectionText>
            </SectionHead>
          </Reveal>
          <Reveal>
            <Scene>
              <SceneImage $src={img('2025/05/Untitled-design-2025-05-06T231716.810.jpg')} />
              <SceneTint $tint={ATMOSPHERES[atmosphere].tint} />
              <SceneVignette />
              <SceneCaption key={ATMOSPHERES[atmosphere].label}>
                <SceneClock>{ATMOSPHERES[atmosphere].time}</SceneClock>
                <SceneLine>{ATMOSPHERES[atmosphere].line}</SceneLine>
              </SceneCaption>
            </Scene>
          </Reveal>
          <Reveal>
            <AtmosphereControl>
              {ATMOSPHERES.map((a, i) => (
                <AtmosphereBtn key={a.label} $active={atmosphere === i} onClick={() => setAtmosphere(i)}>
                  {a.label}
                </AtmosphereBtn>
              ))}
            </AtmosphereControl>
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
                  fetchPriority="high"
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
