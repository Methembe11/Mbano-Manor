import { useState } from 'react';
import styled from 'styled-components';
import { Container, Section, SectionLabel, SectionTitle, Divider, SectionText, ContactGrid, ContactDetail, ContactDetailIcon, ContactDetailLabel, ContactDetailValue, ContactForm, BtnWhatsapp, BtnPrimary } from './primitives';
import { CONTACT } from '../data/site';

const SubmitBtn = styled(BtnPrimary)`
  width: fit-content;
  border: none;
  ${({ $sent }) => $sent && 'background: #0E3436;'}
`;

const formFields = [
  { type: 'text', placeholder: 'Your Name', required: true },
  { type: 'email', placeholder: 'Your Email', required: true },
  { type: 'text', placeholder: 'Subject' },
  { type: 'textarea', placeholder: 'Tell us about your dream stay...' },
];

export default function ContactSection({ title = 'Begin Your Mbano Story', intro }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    e.target.reset();
    setTimeout(() => setStatus('idle'), 3000);
  };

  const details = [
    { icon: '\u260E', label: 'Enquiries & Reservations', value: CONTACT.mobile },
    { icon: '\u260E', label: 'Landline', value: `${CONTACT.landlines}  |  ${CONTACT.landlines2}` },
    { icon: '\u2709', label: 'Email', value: `${CONTACT.emailRes}  |  ${CONTACT.emailRes2}` },
    { icon: '\u2709', label: 'Sales', value: `${CONTACT.emailSales}  |  ${CONTACT.salesPhone}` },
    { icon: '\u26E8', label: 'Address', value: CONTACT.address },
  ];

  return (
    <Section id="contact">
      <Container>
        <ContactGrid>
          <div>
            <SectionLabel>Reserve Your Journey</SectionLabel>
            <SectionTitle>{title}</SectionTitle>
            <Divider />
            <SectionText>
              {intro || 'Speak with our reservations team to craft your perfect Victoria Falls experience.'}
            </SectionText>
            {details.map((d) => (
              <ContactDetail key={d.label}>
                <ContactDetailIcon>{d.icon}</ContactDetailIcon>
                <div>
                  <ContactDetailLabel>{d.label}</ContactDetailLabel>
                  <ContactDetailValue>{d.value}</ContactDetailValue>
                </div>
              </ContactDetail>
            ))}
            <div style={{ marginTop: 36 }}>
              <BtnWhatsapp href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                Book via WhatsApp
              </BtnWhatsapp>
            </div>
          </div>

          <ContactForm onSubmit={handleSubmit}>
            {formFields.map((f) =>
              f.type === 'textarea' ? (
                <textarea key={f.placeholder} placeholder={f.placeholder} />
              ) : (
                <input key={f.placeholder} type={f.type} placeholder={f.placeholder} required={f.required} />
              )
            )}
            <SubmitBtn as="button" type="submit" $sent={status === 'sent'}>
              {status === 'sent' ? 'Sent \u2713' : 'Send Enquiry'}
            </SubmitBtn>
          </ContactForm>
        </ContactGrid>
      </Container>
    </Section>
  );
}
