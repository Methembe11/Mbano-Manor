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
  BtnOutline,
  CtaBanner,
  CtaActions,
  BtnPrimary,
  BtnWhatsapp,
  Reveal,
} from '../components/primitives';
import { useLightbox } from '../context/Lightbox';
import PageHero from '../components/PageHero';

const VILLA_GALLERY = [
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/03/DSC08538-HDRMbano-Villa-.jpg', alt: 'Mutota Forest Villa lounge' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/01/1-1.jpg', alt: 'Mutota Forest Villa exterior' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/01/2-2.jpg', alt: 'Mutota Forest Villa garden' },
  { src: 'https://www.mbanomanorhotel.com/wp-content/uploads/2022/03/DSC08438-HDRMbano-Villa-.jpg', alt: 'Mutota Forest Villa detail' },
];

export default function MutotaForestVilla() {
  const openLightbox = useLightbox();

  return (
    <>
      <PageHero
        crumb="/"
        crumbLabel="Home"
        badge="The Presidential Villa"
        title="Mutota Forest Villa"
        sub="Tucked away in its own secluded corner of the estate, the Mutota Forest Villa offers an intimate forest escape with generous living spaces, a private plunge pool and effortless five-star comfort."
      />

      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/01/1.jpg"
                  alt="Mutota Forest Villa exterior"
                />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionLabel>The Presidential Villa</SectionLabel>
                <SectionTitle>The Ultimate Forest Retreat</SectionTitle>
                <Divider />
                <SectionText>
                  The presidential Mutota Forest Villa opened late 2021. The Villa offers the ultimate in understated yet
                  intimate luxury. Located in a private corner of the estate, this exclusive suite boasts its own gardens,
                  plunge pool and individual access. The Mutota Forest Villa is ideal for the modern international seeking to
                  combine business with pleasure, or for an indulgent leisure stay for a special occasion.
                </SectionText>
                <div style={{ marginTop: 24 }}>
                  <BtnOutline
                    $dark
                    href="https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/VillaFlipBook.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Villa Brochure
                  </BtnOutline>
                </div>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>The Villa</SectionLabel>
              <SectionTitle>Villa Details</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal>
            <DetailList>
              <li>Sleeps maximum 6 guests</li>
              <li>200 square metres of generous living space &amp; vast outside terrace</li>
              <li>All rooms have direct external access for privacy.</li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Sleep</SectionLabel>
              <SectionTitle>Accommodation</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal>
            <DetailList>
              <li>
                Indulgent XL king-sized bed with bespoke mosquito net cover. Featuring an ottoman, occasional chair, private
                television and closed off by sliding stable doors.
              </li>
              <li>1 x twin bedded bedroom with private direct entrance and en-suite shower cubicle.</li>
              <li>The convertible sofa in casual lounge provides an additional double bed.</li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $dark>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Dine</SectionLabel>
              <SectionTitle $light>Dining</SectionTitle>
              <Divider $center />
              <SectionText $light>
                The dining suite seats six and features a fully stocked self-service refreshment area.
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Relax</SectionLabel>
              <SectionTitle>Living</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal>
            <DetailList>
              <li>The open plan lounge area is divided into two living spaces by well-appointed ottomans.</li>
              <li>
                The formal lounge area features bespoke leather sofa and occasional chairs. The informal lounge hosts a
                double sleeper sofa and a large television &ndash; ideal for children or just as a relaxing space.
              </li>
              <li>A desk and executive chair for office catch-up.</li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Rejuvenate</SectionLabel>
              <SectionTitle>Bathroom. Simply Magnificent.</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal>
            <DetailList>
              <li>Two indoor showers</li>
              <li>Two outdoor showers in an enclosed garden courtyard</li>
              <li>Indulgent Victoria claw bathtub</li>
              <li>Couples' amenities area &amp; walk-in wardrobe</li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>At Your Service</SectionLabel>
              <SectionTitle>Other Amenities</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal>
            <DetailList>
              <li>An external service area is discreetly located for butler and chef, at your convenience.</li>
              <li>
                A 24-hour butler/concierge service is on hand to assist with your travel itinerary &amp; meal requests.
              </li>
              <li>Full-service high-speed internet connectivity available throughout the Forest Villa.</li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Villa Gallery</SectionLabel>
              <SectionTitle>Inside the Mutota Forest Villa</SectionTitle>
            </SectionHead>
          </Reveal>
          <GalleryGrid>
            {VILLA_GALLERY.map((g, i) => (
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
          <h2>Experience the Forest Villa</h2>
          <p>Reserve the Mutota Forest Villa for an intimate five-star forest escape in Victoria Falls.</p>
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
