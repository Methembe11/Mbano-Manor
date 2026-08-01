import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container, Section, SectionLabel, SectionTitle, SectionText, Divider, SectionHead,
  TwoCol, ContentImg, ContentText, DetailList, ImgGrid, GridItem, GalleryCaption, Media,
  CtaBanner, CtaActions, BtnPrimary, BtnWhatsapp, Reveal,
} from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

const Quote = styled.blockquote`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 17px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.deepTeak};
  line-height: 1.7;
  margin-top: 24px;
  padding-left: 20px;
  border-left: 1px solid rgba(184, 155, 94, 0.4);
  font-style: italic;
`;

export default function DrMatiNyazemaStory() {
  return (
    <>
      <PageHero
        title="Dr Mati Nyazema's Story"
        sub="Mother, Grandmother, Businesswoman & Hotelier — the inspiring Founder and Owner of Mbano Manor Hotel."
        badge="Doc's Story"
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2020/03/garden.jpg"
                  alt="The gardens of Mbano Manor Hotel"
                  fetchPriority="high"
                />
              </ContentImg>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentText>
                <SectionLabel>The Founder</SectionLabel>
                <SectionTitle>Dr Mati Nyazema</SectionTitle>
                <Divider />
                <SectionText>
                  In Shona culture, we do not refer to seniors by their first name. Hence, we refer to our Founder as
                  'Doc,' as a sign of respect.
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
              <SectionLabel>Beginnings and Roots</SectionLabel>
              <SectionTitle>Before Us.</SectionTitle>
              <Divider />
              <SectionText>
                Born on the family private farm in Msengezi, Doc Mati credits a lineage of hardworking grandparents for
                her enterprising spirit. Her grandfather was a Pastor and private farmer, part of a small group of
                trailblazers who bred the early generation of African professionals.
              </SectionText>
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <Quote>
              'Early evening sounds of my seven boisterous uncles singing church and traditional melodies – that's what
              I recall most about my grandfather's farm'
            </Quote>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Early Days</SectionLabel>
              <SectionTitle>Early Days</SectionTitle>
              <Divider />
              <SectionText>
                Doc Mati spent her early childhood in the Harare townships of Highfield and Harare. Her father was a
                primary school principal, while her mother was a nurse. She had a simple, comfortable, and happy
                childhood, shared with her four siblings.
              </SectionText>
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <Quote>
              'My father was a keen gardener – a trait I inherited, now very handy in Victoria Falls. Mbano Head Gardener
              Trymore and I have a rolling bet on who can germinate herb and vegetable seeds faster – me or him.'
            </Quote>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Schooling</SectionLabel>
              <SectionTitle>Schooling</SectionTitle>
              <Divider />
              <SectionText>
                Doc Mati attended high school at mission schools, where she was Head Girl at St Ignatius College in
                Chishawasha. A holder of four graduate qualifications, she obtained her PhD in Business and Sustainable
                Tourism from Stellenbosch Cape Town.
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Career</SectionLabel>
              <SectionTitle>Career</SectionTitle>
              <Divider />
              <SectionText>
                A long tourism career covered senior positions in destination marketing, airline management, hotel
                management and convention centre management, based in several African countries. Doc has travelled
                extensively, visiting over 60 countries, where she garnered an appreciation of world class hospitality
                in leading tourism destinations.
              </SectionText>
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <Quote>
              'One of my all-time career highlights was the launch of the new British Airways global branding in 1997, a
              global broadcast satellite event. I coordinated the BA Africa team and we selected Victoria Falls as our
              launch venue. An enormous success. We invited 500 pax, expected 350, and hosted over 500 from 14 African
              countries!'
            </Quote>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Awards</SectionLabel>
              <SectionTitle>Awards</SectionTitle>
              <Divider />
              <SectionText>
                Her business accolades over the years include Runner-up of the Businesswoman of the Year South Africa
                (2011), and inaugural recipient of the Tourism Inspiration Award (2015 South Africa).
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Family</SectionLabel>
              <SectionTitle>Family</SectionTitle>
              <Divider />
              <SectionText>
                Now a mother of four and grandmother of six, Doc credits her strong family background for keeping her
                sane and grounded.
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Personal Mantras</SectionLabel>
              <SectionTitle>Personal Mantras</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>Give me lemons, and I will make lemonade;</li>
              <li>This Too Shall Pass;</li>
              <li>He Strengthens Me.</li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <ImgGrid>
            <Reveal>
              <GridItem>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2021/01/mbano50.jpg"
                  alt="Mati Nyazema with family at Mbano Manor Hotel"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.1}>
              <GridItem>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/06/Untitled-600-×-600px.jpg"
                  alt="Portrait of Dr Mati Nyazema"
                />
              </GridItem>
            </Reveal>
          </ImgGrid>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <Media $ratio="3 / 2">
              <img
                src="https://www.mbanomanorhotel.com/wp-content/uploads/2021/01/mbanos.jpg"
                alt="Mati Nyazema on a family visit to Victoria Falls with her father and sister"
              />
            </Media>
            <GalleryCaption>
              Mbano Manor Hotel Director &amp; Owner Mati Nyazema on a memorable family visit to Victoria Falls with
              her father the late EPC Rukanzakanza and sister Pet Joy (left).
            </GalleryCaption>
          </Reveal>
          <Reveal delay={0.1}>
            <Media $ratio="1024 / 165">
              <img
                src="https://www.mbanomanorhotel.com/wp-content/uploads/2024/08/logos-1024x165.jpg"
                alt="Mbano Manor Hotel awards and recognition logos"
              />
            </Media>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <h2>Meet the Woman Behind Mbano</h2>
          <CtaActions>
            <BtnPrimary as={Link} to="/mbano-story">
              The Story of Mbano
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
