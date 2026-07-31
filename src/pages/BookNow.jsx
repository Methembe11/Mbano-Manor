import { Link } from 'react-router-dom';
import {
  Container, Section, SectionLabel, SectionTitle, SectionText, Divider, SectionHead,
  CardGrid, Card, CardTitle, CardText, DetailList,
  BtnWhatsapp, BtnOutline, CtaBanner, CtaActions, Reveal,
} from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

export default function BookNow() {
  return (
    <>
      <PageHero
        title="Reserve Your Stay"
        sub="Speak with our reservations team to craft your perfect Victoria Falls experience."
        badge="Book Now"
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Ways to Book</SectionLabel>
              <SectionTitle>Choose Your Booking Option</SectionTitle>
              <Divider $center />
            </SectionHead>
          </Reveal>
          <CardGrid $two>
            <Reveal>
              <Card>
                <CardTitle>Book via WhatsApp</CardTitle>
                <CardText>
                  Our fastest and most personal option. Message our reservations team directly on WhatsApp.
                </CardText>
                <div style={{ marginTop: 24 }}>
                  <BtnWhatsapp href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </BtnWhatsapp>
                </div>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card>
                <CardTitle>Email Reservations</CardTitle>
                <CardText>Send your enquiry and preferred dates to our reservations team.</CardText>
                <div style={{ marginTop: 24 }}>
                  <BtnOutline as="a" href={`mailto:${CONTACT.emailRes}`} $dark>
                    Email Reservations
                  </BtnOutline>
                </div>
              </Card>
            </Reveal>
          </CardGrid>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Contact Details</SectionLabel>
              <SectionTitle>Contact Details</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                <strong>Phone:</strong> {CONTACT.mobileRaw}
              </li>
              <li>
                <strong>Landline:</strong> {CONTACT.landlines} | {CONTACT.landlines2}
              </li>
              <li>
                <strong>Email:</strong> {CONTACT.emailRes}
              </li>
              <li>
                <strong>Sales:</strong> {CONTACT.salesPhone}
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Good to Know</SectionLabel>
              <SectionTitle>Good to Know</SectionTitle>
              <Divider />
              <SectionText>
                Check-in is from {CONTACT.checkIn} and checkout is at {CONTACT.checkOut}. Early arrivals and late
                checkouts are accommodated where possible, subject to room availability. Guests are welcome to use our
                swimming pool and garden before check-in.
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <h2>Your Victoria Falls Experience Awaits</h2>
          <CtaActions>
            <BtnWhatsapp href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </BtnWhatsapp>
            <BtnOutline as="a" href={`mailto:${CONTACT.emailRes}`}>
              Email Reservations
            </BtnOutline>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
