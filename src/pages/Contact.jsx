import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container, Section, SectionLabel, SectionTitle, SectionText, Divider, SectionHead,
  TwoCol, ContentImg, ContentText, DetailList, ContactForm, Media,
  BtnWhatsapp, BtnOutline, CtaBanner, CtaActions, BtnPrimary, Reveal,
} from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

const telHref = `tel:${CONTACT.mobileRaw.replace(/[^+\d]/g, '')}`;
const emailHref = `mailto:${CONTACT.emailRes}`;

const SubmitBtn = styled.button`
  display: inline-block;
  width: fit-content;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.pureWhite};
  background: ${({ status, theme }) => (status === 'sent' ? theme.colors.forestNight : theme.colors.antiqueGold)};
  transition: background 0.3s ease, transform 0.3s ease;
  &:hover { background: ${({ theme }) => theme.colors.antiqueGoldDark}; transform: translateY(-2px); }
`;

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    e.target.reset();
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <>
      <PageHero
        title="For Enquiries & Bookings"
        sub="Contact our Reservations Team."
        badge="Contact Us"
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2020/03/reception.jpg"
                  alt="Mbano Manor Hotel reception"
                  fetchPriority="high"
                />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionLabel>Get in Touch</SectionLabel>
                <SectionTitle>Reservations &amp; Enquiries</SectionTitle>
                <Divider />
                <DetailList>
                  <li>
                    <strong>Enquiries and Reservations</strong> — Mobile:{' '}
                    <a href={telHref}>{CONTACT.mobile}</a>
                  </li>
                  <li>
                    <strong>Landline</strong> — {CONTACT.landlines} | {CONTACT.landlines2}
                  </li>
                  <li>
                    <strong>Email</strong> — {CONTACT.emailRes} and {CONTACT.emailRes2}
                  </li>
                  <li>
                    <strong>Founder/Owner – Mati Nyazema</strong> — {CONTACT.emailMati}
                  </li>
                  <li>
                    <strong>Sales</strong> — Tel/WhatsApp: {CONTACT.salesPhone}, {CONTACT.emailSales}
                  </li>
                  <li>
                    <strong>Address</strong> — Mbano Manor Hotel, {CONTACT.address}
                  </li>
                </DetailList>
                <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <BtnWhatsapp href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                    Book Now Via WhatsApp
                  </BtnWhatsapp>
                  <BtnOutline as="a" href={emailHref} $dark>
                    Send Email
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
            <SectionHead $center>
              <SectionLabel>Send a Message</SectionLabel>
              <SectionTitle>Enquiry Form</SectionTitle>
              <Divider $center />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" placeholder="Your message (optional)" rows="5" />
              <SubmitBtn type="submit" status={status}>
                {status === 'sent' ? 'Sent \u2713' : 'Send Enquiry'}
              </SubmitBtn>
            </ContactForm>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Location</SectionLabel>
              <SectionTitle>Location</SectionTitle>
              <Divider />
              <SectionText>
                Mbano Manor Hotel Victoria Falls is located on the Old Kazungula Road, only 4 kilometres from the
                entrance to the Victoria Falls Park. Access to Victoria Falls is by road, air or rail. Scheduled flights
                connect Victoria Falls with local and regional destinations.
              </SectionText>
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <Media $ratio="600 / 377">
              <img
                src="https://www.mbanomanorhotel.com/wp-content/uploads/2019/01/190114-MBANO-UPDATED-MAP-600x377.jpg"
                alt="Map of Mbano Manor Hotel location"
              />
            </Media>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>What You Need to Know</SectionLabel>
              <SectionTitle>Hotel check-in and checkout times</SectionTitle>
              <Divider />
              <SectionText>
                Check-in is from {CONTACT.checkIn} and checkout on the day of departure is {CONTACT.checkOut}. Guests
                are welcome to arrive at Mbano Manor Hotel earlier, and make use of our swimming pool and garden. We try
                to accommodate early arrivals or late checkouts where possible, subject to room availability.
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <h2>Ready to Experience Mbano?</h2>
          <CtaActions>
            <BtnPrimary as={Link} to="/book-now">
              Book Now
            </BtnPrimary>
            <BtnWhatsapp href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </BtnWhatsapp>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
