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
  ImgGrid,
  GridItem,
  CardGrid,
  Card,
  CardTitle,
  CardText,
  CtaBanner,
  CtaActions,
  BtnPrimary,
  BtnWhatsapp,
  Reveal,
} from '../components/primitives';
import PageHero from '../components/PageHero';

const AwardsLogo = styled.div`
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function AboutMbano() {
  return (
    <>
      <PageHero
        crumb="/"
        crumbLabel="Home"
        badge="About Our Hotel"
        title="A World Class Experience"
        sub="18 luxurious standard suites and a private villa, scattered in seclusion across the natural beauty of the surrounding forest estate, punctuated by daily sightings of wildlife."
      />

      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2020/02/luxury-banner2.jpg"
                  alt="Mbano Manor Hotel surrounded by forest"
                />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionLabel>A Bird and Tree Sanctuary</SectionLabel>
                <SectionTitle>A Tranquil Forest Setting</SectionTitle>
                <Divider />
                <SectionText>
                  Mbano Manor Hotel Victoria Falls offers a nature-based experience, invoking feelings of tranquility and
                  comfort. Immersed in an ancient teak tree forest, the hotel offers guests a space to unwind and enjoy the
                  calm serenity and exclusivity of an ultimate boutique experience. The 18 private luxury suites form a
                  horseshoe pattern across several acres of the estate. Located adjacent to each other, five sets of paired,
                  luxury standard suites offer secluded comfort, while two sets of four family-friendly suites are positioned
                  for individual privacy, yet also allowing for external interconnectivity through verandas.
                </SectionText>
              </ContentText>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Luxury private suites</SectionLabel>
              <SectionTitle>Experience a Timeless Escape</SectionTitle>
              <Divider />
              <SectionText>
                A generous veranda wraps around each private suite, offering a space for guests to relax outdoors surrounded
                by the beauty of the lush site and sounds of nature. Traditional teak shutters unfold to reveal large windows
                and doors, flooding spacious rooms with natural light. All suites feature a relaxing lounge area with a
                spacious bedroom and a separate luxurious bathroom overlooking a private courtyard. Enjoy a good night's
                sleep, convenience, connectivity and space.
              </SectionText>
            </SectionHead>
          </Reveal>
          <ImgGrid $four>
            <Reveal>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2020/02/path.jpg"
                  alt="Forest path at Mbano Manor"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.1}>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2020/02/room-exterior.jpg"
                  alt="Suite exterior at Mbano Manor"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.2}>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Untitled-design-2025-03-13T122226.277.jpg"
                  alt="Mbano Manor suite"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.3}>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2020/03/reception.jpg"
                  alt="Mbano Manor reception"
                />
              </GridItem>
            </Reveal>
          </ImgGrid>
        </Container>
      </Section>

      <Section $dark>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Intuitive Service</SectionLabel>
              <SectionTitle $light>Flexi-Dining</SectionTitle>
              <Divider $center />
              <SectionText $light>
                At Mbano, we cater for your delight. Check in at the reception terrace, in our lovely lounge, or in the
                comfort of your suite. You can walk through the forest to your suite, or we escort you in fine golf carts.
                Fine or casual dining is available on the dining terrace, in the picturesque bar courtyard, in the indoor
                lounge, or by your suite. Enjoy light snacks and a cocktail around the pool area. Our expert chefs deliver
                menus to your taste.
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <Section $deep>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Dietary Requirements</SectionLabel>
              <SectionTitle $light>Kosher Services</SectionTitle>
              <Divider $center />
            </SectionHead>
          </Reveal>
          <CardGrid>
            <Reveal>
              <Card $dark>
                <CardTitle $dark>Dedicated Kosher Section</CardTitle>
                <CardText $dark>
                  A dedicated Kosher section, equipped with standalone sinks, a separate stove, oven and refrigerators is
                  provided in our kitchen.
                </CardText>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card $dark>
                <CardTitle $dark>Trained Team</CardTitle>
                <CardText $dark>
                  Our Head Chef and his team have been trained in the handling of Kosher food, utensils, and service
                  requirements. Parev options are also available to accommodate a wider range of dietary needs.
                </CardText>
              </Card>
            </Reveal>
            <Reveal delay={0.2}>
              <Card $dark>
                <CardTitle $dark>Arrangements</CardTitle>
                <CardText $dark>
                  A Mashgiach can be arranged upon request at an additional cost. A daily Kosher surcharge and a one-time
                  flat Kosher fee may apply. Day trips to the Jewish Museum in Livingstone can be arranged at an extra
                  charge.
                </CardText>
              </Card>
            </Reveal>
          </CardGrid>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Awards &amp; Recognition</SectionLabel>
              <SectionTitle>Accolades Earned</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <AwardsLogo>
              <img
                src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/01/logos-e1737666328580.jpg"
                alt="Mbano Manor Hotel awards and recognition logos"
              />
            </AwardsLogo>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <h2>Plan Your Stay</h2>
          <p>Contact our Reservations team on res@mbanomanorhotel.com or +263 78 892 8776.</p>
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
