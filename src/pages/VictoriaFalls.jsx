import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
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

const MapGrid = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 40px;
  align-items: stretch;
  margin-top: 16px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const MapPanel = styled.div`
  position: relative;
  background: #f1efe8;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  aspect-ratio: 600 / 460;
`;

const MapSvg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const Pin = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  z-index: 2;
`;

const PinDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.pureWhite)};
  border: 2px solid ${({ theme, $active }) => ($active ? theme.colors.gold : 'rgba(18, 63, 66, 0.55)')};
  box-shadow: 0 2px 8px rgba(4, 13, 15, 0.2);
  transition: background 0.3s ease, border-color 0.3s ease;
  animation: ${({ $active }) => ($active ? 'pinPulse 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite' : 'none')};
  @keyframes pinPulse {
    0% { box-shadow: 0 0 0 0 rgba(184, 155, 94, 0.45), 0 2px 8px rgba(4, 13, 15, 0.2); }
    70% { box-shadow: 0 0 0 14px rgba(184, 155, 94, 0), 0 2px 8px rgba(4, 13, 15, 0.2); }
    100% { box-shadow: 0 0 0 0 rgba(184, 155, 94, 0), 0 2px 8px rgba(4, 13, 15, 0.2); }
  }
`;

const PinLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.inkSoft)};
  background: rgba(241, 239, 232, 0.88);
  padding: 2px 6px;
  border-radius: 2px;
  white-space: nowrap;
`;

const ManorDot = styled.span`
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.colors.gold};
  transform: rotate(45deg);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(4, 13, 15, 0.22);
`;

const DetailCard = styled.div`
  background: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  padding: 40px;
  display: flex;
  flex-direction: column;
  min-height: 380px;
  animation: detailIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  @keyframes detailIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 640px) {
    padding: 28px 22px;
    min-height: auto;
  }
`;

const DetailEyebrow = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

const DetailName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 28px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.ink};
  margin: 14px 0 8px;
`;

const DetailMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;

const DetailMetaItem = styled.span`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronze};
`;

const DetailDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 0 0 30px;
`;

const DESTINATIONS = [
  {
    id: 'manor',
    name: 'Mbano Manor',
    group: 'Your Sanctuary',
    x: 52,
    y: 31,
    dist: 'Home base',
    time: 'Old Kazungula Road',
    desc: 'Eighteen suites hidden within the ancient teak forest — the still point from which every journey begins.',
  },
  {
    id: 'falls',
    name: 'Victoria Falls',
    group: 'The Wonder',
    x: 50,
    y: 26,
    dist: '4 km',
    time: '8 min drive',
    desc: 'The Smoke that Thunders — a kilometre-wide curtain of water plunging over 100 metres into the gorge.',
  },
  {
    id: 'jetty',
    name: 'Cruise Jetty',
    group: 'On the River',
    x: 16,
    y: 15,
    dist: '3 km',
    time: '6 min drive',
    desc: 'Sundowner, lunch and dinner cruises along the Zambezi — elephants, hippos and the sunset at your pace.',
  },
  {
    id: 'helipad',
    name: 'Flight of the Angels',
    group: 'Above the Falls',
    x: 63,
    y: 39,
    dist: '5 km',
    time: '10 min drive',
    desc: 'A helicopter pass over the Falls and the zig-zag of the Batoka Gorge — an aerial perspective you will never forget.',
  },
  {
    id: 'town',
    name: 'Victoria Falls Town',
    group: 'In Town',
    x: 40,
    y: 43,
    dist: '3.5 km',
    time: '7 min drive',
    desc: 'Galleries, craft markets, riverside restaurants and the rhythm of boma evenings.',
  },
  {
    id: 'zambezi',
    name: 'Zambezi National Park',
    group: 'The Parks',
    x: 44,
    y: 59,
    dist: '8 km',
    time: '15 min drive',
    desc: 'Game drives through the riverine forest — elephant, buffalo and lion with a qualified guide.',
  },
  {
    id: 'chobe',
    name: 'Chobe National Park',
    group: 'Across the Border',
    x: 26,
    y: 67,
    dist: '70 km',
    time: '~1 hr drive',
    desc: 'Across the border in Botswana — one of the greatest wildlife concentrations in Africa along the Chobe River.',
  },
  {
    id: 'hwange',
    name: 'Hwange National Park',
    group: 'The Parks',
    x: 66,
    y: 84,
    dist: '230 km',
    time: '~2 hr 40 min drive',
    desc: 'Zimbabwe\'s largest park and home to one of the world\'s greatest elephant populations.',
  },
];

export default function VictoriaFalls() {
  const openLightbox = useLightbox();
  const theme = useTheme();
  const [active, setActive] = useState('manor');
  const selected = DESTINATIONS.find((d) => d.id === active) || DESTINATIONS[0];

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
                  fetchPriority="high"
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

      <Section $pad={130} $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Beyond the Manor</SectionLabel>
              <SectionTitle>Stay Here. Experience Everything.</SectionTitle>
            </SectionHead>
          </Reveal>
          <MapGrid>
            <Reveal>
              <MapPanel>
                <MapSvg viewBox="0 0 600 460" preserveAspectRatio="xMidYMid slice">
                  <rect width="600" height="460" fill="#f1efe8" />
                  <circle cx="-80" cy="420" r="300" fill="none" stroke="rgba(18, 63, 66, 0.07)" strokeWidth="1.5" />
                  <circle cx="-40" cy="460" r="200" fill="none" stroke="rgba(18, 63, 66, 0.07)" strokeWidth="1.5" />
                  <circle cx="600" cy="60" r="220" fill="none" stroke="rgba(18, 63, 66, 0.06)" strokeWidth="1.5" />
                  <path
                    d="M-20,80 C100,40 210,110 300,120 C390,130 470,80 620,92"
                    fill="none"
                    stroke="rgba(18, 63, 66, 0.42)"
                    strokeWidth="4"
                  />
                  <path
                    d="M300,118 L262,148 L284,142 L300,176 L316,142 L338,148 Z"
                    fill="rgba(18, 63, 66, 0.55)"
                  />
                  <path
                    d="M300,20 L268,60 L320,52 Z"
                    fill="none"
                    stroke="rgba(18, 63, 66, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M300,40 L258,88 L332,76 Z"
                    fill="none"
                    stroke="rgba(18, 63, 66, 0.3)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M310,56 L272,96 L344,86 Z"
                    fill="none"
                    stroke="rgba(18, 63, 66, 0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M312,60 L338,20 L362,52 L344,86 Z"
                    fill="rgba(184, 155, 94, 0.35)"
                  />
                  <path
                    d="M320,0 L290,170 L230,330 L130,460"
                    fill="none"
                    stroke="rgba(156, 124, 74, 0.55)"
                    strokeWidth="1.5"
                    strokeDasharray="6 5"
                  />
                  <text
                    x="296"
                    y="52"
                    textAnchor="end"
                    fontFamily={theme.fonts.ui}
                    fontSize="10"
                    letterSpacing="3"
                    fill="rgba(18, 63, 66, 0.45)"
                  >
                    ZAMBIA
                  </text>
                  <text
                    x="360"
                    y="270"
                    textAnchor="middle"
                    fontFamily={theme.fonts.ui}
                    fontSize="10"
                    letterSpacing="3"
                    fill="rgba(18, 63, 66, 0.3)"
                  >
                    ZIMBABWE
                  </text>
                  <text
                    x="120"
                    y="360"
                    textAnchor="middle"
                    fontFamily={theme.fonts.ui}
                    fontSize="10"
                    letterSpacing="3"
                    fill="rgba(18, 63, 66, 0.3)"
                  >
                    BOTSWANA
                  </text>
                  <text
                    x="306"
                    y="206"
                    textAnchor="start"
                    fontFamily={theme.fonts.ui}
                    fontSize="8"
                    letterSpacing="2"
                    fill="rgba(18, 63, 66, 0.55)"
                  >
                    THE FALLS
                  </text>
                </MapSvg>
                {DESTINATIONS.map((d) =>
                  d.id === 'manor' ? (
                    <Pin
                      key={d.id}
                      style={{ left: `${d.x}%`, top: `${d.y}%` }}
                      onClick={() => setActive(d.id)}
                      aria-label={d.name}
                    >
                      <ManorDot />
                      <PinLabel $active={active === d.id}>Mbano Manor</PinLabel>
                    </Pin>
                  ) : (
                    <Pin
                      key={d.id}
                      style={{ left: `${d.x}%`, top: `${d.y}%` }}
                      onClick={() => setActive(d.id)}
                      aria-label={d.name}
                    >
                      <PinDot $active={active === d.id} />
                      <PinLabel $active={active === d.id}>{d.name}</PinLabel>
                    </Pin>
                  )
                )}
              </MapPanel>
            </Reveal>
            <Reveal delay={0.1}>
              <DetailCard key={selected.id}>
                <DetailEyebrow>{selected.group}</DetailEyebrow>
                <DetailName>{selected.name}</DetailName>
                <DetailMeta>
                  <DetailMetaItem>{selected.dist}</DetailMetaItem>
                  <DetailMetaItem>{selected.time}</DetailMetaItem>
                </DetailMeta>
                <DetailDesc>{selected.desc}</DetailDesc>
                <div style={{ marginTop: 'auto' }}>
                  <BtnWhatsapp href="https://api.whatsapp.com/send?phone=263788928776" target="_blank" rel="noopener noreferrer">
                    Reserve My Experience
                  </BtnWhatsapp>
                </div>
              </DetailCard>
            </Reveal>
          </MapGrid>
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
