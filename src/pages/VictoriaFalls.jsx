import styled from 'styled-components';
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
  CardGrid,
  Card,
  CardTitle,
  CardText,
  DetailList,
  GalleryGrid,
  GalleryItem,
  GalleryOverlay,
  GalleryItemIcon,
  CtaBanner,
  CtaActions,
  BtnWhatsapp,
  Reveal,
} from '../components/primitives';
import { useLightbox } from '../context/Lightbox';
import PageHero from '../components/PageHero';
import { img } from '../data/site';

const Manifesto = styled.div`
  text-align: center;
  max-width: 880px;
  margin: 0 auto;
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

const ACTIVITIES = [
  { title: 'Guided Tour of the Falls', text: 'Guided tour of Victoria Falls (Zimbabwe or Zambia side).' },
  { title: 'Zambezi Sunset Cruise', text: 'Sunset cruise on the Zambezi River.' },
  { title: 'Flight of the Angels', text: 'Helicopter flight over the Falls.' },
  { title: 'White Water Rafting', text: 'White water rafting in the Zambezi Gorge.' },
  { title: 'Bungee Jumping', text: 'Bungee jumping from Victoria Falls Bridge.' },
  {
    title: 'Game Drives',
    text: 'Game drives in Zambezi National Park, Hwange National Park, or Chobe National Park.',
  },
];

const MORE_ACTIVITIES = [
  { name: 'Walking Safaris', text: 'Walking safaris and guided nature walks.' },
  { name: "Devil's Pool", text: "Devil's Pool experience (seasonal, Zambia side)." },
  { name: 'Cultural Visits', text: 'Cultural village visits and local experiences.' },
  { name: 'Elephant Encounters', text: 'Elephant encounters and conservation experiences.' },
  { name: 'Canopy & Zipline', text: 'Canopy tour and ziplining over the Batoka Gorge.' },
];

const FALLS_GALLERY = [
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/06/1.jpg', alt: 'Victoria Falls view 1' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/06/2.jpg', alt: 'Victoria Falls view 2' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/06/5.jpg', alt: 'Victoria Falls view 3' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/06/4.jpg', alt: 'Victoria Falls view 4' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/06/3.jpg', alt: 'Victoria Falls view 5' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/06/6.jpg', alt: 'Victoria Falls view 6' },
];

export default function VictoriaFalls() {
  const openLightbox = useLightbox();

  return (
    <>
      <PageHero
        crumb="/"
        crumbLabel="Home"
        badge="Victoria Falls"
        title="Experience the Majestic Victoria Falls"
        sub="A World Heritage Site and one of the Seven Natural Wonders of the World."
      />

      <Section $pad={130}>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentText>
                <SectionLabel>Mosi-oa-Tunya</SectionLabel>
                <SectionTitle>The Smoke That Thunders</SectionTitle>
                <Divider />
                <SectionText>
                  The enduring appeal of the Victoria Falls is unrivalled in global and African tourism, offering nostalgia, environmental conservation and geological fascination. The Victoria Falls is the largest waterfall in the world, created continuously as the mighty Zambezi River makes a sudden kilometre-wide drop and plunges over 100m into a gorge.
                </SectionText>
                <SectionText>
                  Two national parks — Victoria Falls National Park and Zambezi National Park — adjoin the Falls. The local name for Victoria Falls is Mosi-oa-Tunya, the Smoke that Thunders.
                </SectionText>
              </ContentText>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentImg $tall>
                <img
                  src={img('2026/03/Untitled-design-2026-03-30T003026.377-1024x683.jpg')}
                  alt="Victoria Falls spray"
                />
              </ContentImg>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Section $pad={130} $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Things to Do</SectionLabel>
              <SectionTitle>Popular Activities in Victoria Falls</SectionTitle>
            </SectionHead>
          </Reveal>
          <CardGrid>
            {ACTIVITIES.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.1}>
                <Card>
                  <CardTitle>{a.title}</CardTitle>
                  <CardText>{a.text}</CardText>
                </Card>
              </Reveal>
            ))}
          </CardGrid>
          <Reveal>
            <DetailList>
              {MORE_ACTIVITIES.map((m) => (
                <li key={m.name}>
                  <strong>{m.name}</strong> &mdash; {m.text}
                </li>
              ))}
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $pad={130}>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionTitle>The Wonder of the Falls</SectionTitle>
            </SectionHead>
          </Reveal>
          <GalleryGrid>
            {FALLS_GALLERY.map((g, i) => (
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

      <Section $pad={130} $deep>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Zambezi National Park</SectionLabel>
              <SectionTitle $light>Game Drive with an Experienced Guide</SectionTitle>
            </SectionHead>
          </Reveal>
          <TwoCol>
            <Reveal>
              <ContentImg>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2021/02/Jamessalimphotography6-e1612855456923.jpg"
                  alt="Game drive in Zambezi National Park"
                />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentImg>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/06/Image-244-scaled.jpg"
                  alt="Wildlife in the bush"
                />
              </ContentImg>
            </Reveal>
          </TwoCol>
          <Reveal>
            <SectionText $light style={{ marginTop: 44, maxWidth: 760 }}>
              Game drives at Victoria Falls set off either in the early morning or mid-afternoon; the open four-wheel drive vehicle allows you to discover the African bush and its inhabitants, with qualified guides on hand to explain this adventure.
            </SectionText>
          </Reveal>
        </Container>
      </Section>

      <Section $pad={130}>
        <Container>
          <Reveal>
            <Manifesto>
              <PullQuote>
                From your suite, the great parks of the north are within reach — you are <em>spoilt for choice</em>.
              </PullQuote>
              <Divider $center />
              <SectionText $mt={32} style={{ maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
                The Chamabonda National Park, a sub-section of the Zambezi National Park, is a vast plain teeming with wild animals. Hwange National Park, the largest of Zimbabwe's parks, holds one of the largest elephant populations in the world. And a one-hour drive away, the Chobe National Park in Botswana offers one of the greatest wildlife concentrations in Africa along the magnificent Chobe River.
              </SectionText>
            </Manifesto>
          </Reveal>
        </Container>
      </Section>

      <Section $pad={130} $tint>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentText>
                <SectionTitle>Zambezi River Boat Cruise</SectionTitle>
                <Divider />
                <SectionText>
                  Sail along the Zambezi River. Elephants, hippos, crocodile and a wide range of African bird life can be seen on land, in the air and on the water. Learn from a knowledgeable guide as the sun sets in this spectacular environment, or book a picnic lunch or dinner cruise.
                </SectionText>
              </ContentText>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentImg>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2021/02/Jamessalimphotography1-2.jpg"
                  alt="Sunset cruise on the Zambezi River"
                />
              </ContentImg>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Section $pad={130}>
        <Container>
          <TwoCol $reverse>
            <Reveal>
              <ContentImg>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/06/Image-24-scaled.jpg"
                  alt="Victoria Falls from the sky"
                />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionTitle>View from the Sky</SectionTitle>
                <Divider />
                <SectionText>
                  Experience the true wonder of the Victoria Falls from a bird's eye view. Marvel at the zig-zagging funnel of gorges that the plunging sheets of water spray into — an exhilarating perspective you will never forget.
                </SectionText>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <h2>Plan Your Victoria Falls Adventure</h2>
          <p>Let our reservations team craft your perfect Victoria Falls experience.</p>
          <CtaActions>
            <BtnWhatsapp href="https://api.whatsapp.com/send?phone=263788928776" target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </BtnWhatsapp>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
