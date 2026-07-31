import { Link } from 'react-router-dom';
import { Container, Section, SectionLabel, SectionTitle, SectionText, SectionHead, CardGrid, Card, CardTitle, CardText, Reveal, CtaBanner, CtaActions, BtnPrimary, BtnOutline, BtnWhatsapp } from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

export default function MediaArticles() {
  return (
    <>
      <PageHero
        badge="In the Media"
        title="Mbano in the Media"
        sub="Accolades, features and press coverage from around the world."
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Press Coverage</SectionLabel>
              <SectionTitle>Media Highlights</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <CardGrid>
              <Card>
                <CardTitle>TIME World's Greatest Places 2025</CardTitle>
                <CardText>
                  Mbano Manor Hotel Victoria Falls has been featured in TIME's Annual List of the World's Greatest
                  Places 2025.
                </CardText>
                <div style={{ marginTop: 24 }}>
                  <BtnOutline
                    $dark
                    href="https://www.mbanomanorhotel.com/mbano-manor-hotel-victoria-falls-featured-in-times-annual-list-of-the-worlds-greatest-places-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the Story
                  </BtnOutline>
                </div>
              </Card>
              <Card>
                <CardTitle>Condé Nast Traveler</CardTitle>
                <CardText>Listed among 60 Stellar Black-Owned Hotels to Visit Around the World.</CardText>
              </Card>
              <Card>
                <CardTitle>2024 AZTA Awards</CardTitle>
                <CardText>Winner of Best Boutique Lodge in Zimbabwe at the 2024 AZTA Awards.</CardText>
              </Card>
              <Card>
                <CardTitle>Carla Hall Visits</CardTitle>
                <CardText>US celebrity chef Carla Hall jetting into Victoria Falls and staying at Mbano.</CardText>
              </Card>
              <Card>
                <CardTitle>Wode Maya</CardTitle>
                <CardText>Interview with Dr Mati reaching over 291,000 views on YouTube.</CardText>
              </Card>
              <Card>
                <CardTitle>Unathi Nkayi</CardTitle>
                <CardText>SA celebrity spotlights Mbano Manor Hotel on air — 'We are coming home'.</CardText>
              </Card>
            </CardGrid>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <SectionHead $center>
            <SectionText>
              Contact our reservations team to request a media kit or interview with Dr Mati: res@mbanomanorhotel.com.
            </SectionText>
          </SectionHead>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <SectionHead $center>
            <SectionLabel>Plan Your Stay</SectionLabel>
            <h2>Experience the Award-Winning Mbano Manor</h2>
            <p>Book your stay at Mbano Manor Hotel Victoria Falls and see why the world is talking.</p>
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
