import { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  Container, Section, SectionLabel, SectionTitle, SectionText, Divider, SectionHead,
  CardGrid, Card, CardTitle, CardText, DetailList,
  BtnPrimary, BtnWhatsapp, BtnOutline, CtaBanner, CtaActions, Reveal,
} from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

const Composer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.pureWhite};
  padding: 44px;
  @media (max-width: 640px) {
    padding: 28px 22px;
  }
`;

const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

const inputBase = css`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.pureWhite};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.ink};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const Input = styled.input`
  ${inputBase}
`;

const Select = styled.select`
  ${inputBase}
  cursor: pointer;
`;

const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
  padding-top: 26px;
  border-top: 1px solid ${({ theme }) => theme.colors.line};
`;

const Summary = styled.p`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 0;
  strong {
    color: ${({ theme }) => theme.colors.bronze};
    font-weight: 500;
  }
`;

const iso = (offset) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};

const SUITES = ['Luxury Suite', 'Mutota Forest Villa', 'Unsure Yet'];
const OCCASIONS = ['Honeymoon or Anniversary', 'Wildlife & Safari', 'Photography', 'Family Holiday', 'Adventure', 'Just Because'];

const nightsBetween = (a, b) => {
  const start = new Date(`${a}T00:00:00`);
  const end = new Date(`${b}T00:00:00`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return 0;
  const days = Math.round((end - start) / 86400000);
  return days > 0 ? days : 0;
};

export default function BookNow() {
  const [arrival, setArrival] = useState(() => iso(30));
  const [departure, setDeparture] = useState(() => iso(32));
  const [guests, setGuests] = useState('2 Adults');
  const [suite, setSuite] = useState(SUITES[0]);
  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  const nights = nightsBetween(arrival, departure);

  const beginStay = () => {
    const msg =
      `Hello Mbano Manor,\n\nI'd like to begin my stay.\n\n` +
      `Arrival: ${arrival}\nDeparture: ${departure}\nNights: ${nights || '—'}\n` +
      `Guests: ${guests}\nSuite: ${suite}\nOccasion: ${occasion}\n\n` +
      `May we plan this together?`;
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PageHero
        title="Begin Your Stay"
        sub="Speak with our reservations team to craft your perfect Victoria Falls experience."
        badge="Book Now"
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>The Reservation</SectionLabel>
              <SectionTitle>Begin Your Stay</SectionTitle>
              <SectionText>
                Tell us when you dream of arriving — and we will prepare the rest. Compose your request below and our
                reservations team will take it from there.
              </SectionText>
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <Composer>
              <FieldGrid>
                <Field>
                  <Label htmlFor="arrival">Arrival</Label>
                  <Input id="arrival" type="date" value={arrival} onChange={(e) => setArrival(e.target.value)} />
                </Field>
                <Field>
                  <Label htmlFor="departure">Departure</Label>
                  <Input id="departure" type="date" value={departure} onChange={(e) => setDeparture(e.target.value)} />
                </Field>
                <Field>
                  <Label htmlFor="guests">Guests</Label>
                  <Select id="guests" value={guests} onChange={(e) => setGuests(e.target.value)}>
                    {['1 Adult', '2 Adults', '2 Adults + 1 Child', '2 Adults + 2 Children', '3 Adults', '4+ Adults'].map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </Select>
                </Field>
                <Field>
                  <Label htmlFor="suite">Suite</Label>
                  <Select id="suite" value={suite} onChange={(e) => setSuite(e.target.value)}>
                    {SUITES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </Select>
                </Field>
                <Field style={{ gridColumn: '1 / -1' }}>
                  <Label htmlFor="occasion">Occasion or Journey</Label>
                  <Select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    {OCCASIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </Select>
                </Field>
              </FieldGrid>
              <SummaryRow>
                <Summary>
                  {nights > 0 ? (
                    <>
                      <strong>{nights}</strong> nights &middot; {guests} &middot; {suite}
                    </>
                  ) : (
                    'Please choose a departure after your arrival'
                  )}
                </Summary>
                <BtnPrimary as="button" onClick={beginStay}>
                  Begin Your Stay
                </BtnPrimary>
              </SummaryRow>
            </Composer>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
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
