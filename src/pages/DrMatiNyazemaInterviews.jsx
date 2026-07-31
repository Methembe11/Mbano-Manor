import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Section, SectionLabel, SectionTitle, SectionHead, CardGrid, Card, CardIcon, CardTitle, CardText, DetailList, Reveal, CtaBanner, CtaActions, BtnPrimary, BtnOutline, BtnWhatsapp } from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

const IconEmoji = styled.div`
  font-size: 30px;
  line-height: 1;
`;

export default function DrMatiNyazemaInterviews() {
  return (
    <>
      <PageHero
        badge="Doc's Interviews"
        title="In Conversation with Dr Mati"
        sub="Hear Dr Mati Nyazema share the Mbano story and her vision for African hospitality."
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Interviews</SectionLabel>
              <SectionTitle>Featured Interviews</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <CardGrid>
              <Card>
                <CardIcon>
                  <IconEmoji>🎤</IconEmoji>
                </CardIcon>
                <CardTitle>Wode Maya Interview</CardTitle>
                <CardText>Dr Mati's interview with Ghanaian YouTuber Wode Maya has reached over 291,000 views.</CardText>
                <div style={{ marginTop: 24 }}>
                  <BtnOutline $dark href="https://youtu.be/BHuPku9Et0A" target="_blank" rel="noopener noreferrer">
                    Watch on YouTube
                  </BtnOutline>
                </div>
              </Card>
              <Card>
                <CardIcon>
                  <IconEmoji>💬</IconEmoji>
                </CardIcon>
                <CardTitle>In Conversation with Trevor Ncube</CardTitle>
                <CardText>A candid conversation between Dr Mati and renowned media executive Trevor Ncube.</CardText>
              </Card>
              <Card>
                <CardIcon>
                  <IconEmoji>🎤</IconEmoji>
                </CardIcon>
                <CardTitle>Renae Leith-Manos</CardTitle>
                <CardText>World-renowned luxury hotel expert Renae Leith-Manos interviews Dr Mati Nyazema.</CardText>
                <div style={{ marginTop: 24 }}>
                  <BtnOutline
                    $dark
                    href="https://www.mbanomanorhotel.com/world-renowned-luxury-hotel-expert-renae-leith-manos-interviews-dr-mati-nyazema/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the Interview
                  </BtnOutline>
                </div>
              </Card>
            </CardGrid>
          </Reveal>
        </Container>
      </Section>

      <Section $dark>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>In the News</SectionLabel>
              <SectionTitle $light>Press &amp; Media</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <DetailList>
              <li>
                <a href="https://youtu.be/BHuPku9Et0A" target="_blank" rel="noopener noreferrer">
                  Wode Maya Interview with Dr Mati reaches over 291,000 views
                </a>
              </li>
              <li>Miss Universe Zimbabwe 2026 Celebrates Local Tourism and African Excellence at Mbano Manor Hotel</li>
              <li>Dr Mati Nyazema: From Corporate Leadership to one of Zimbabwe's most remarkable Hospitality Success Stories</li>
              <li>Travel Creator Lost LeBlanc bikes into Mbano Victoria Falls on his Africa tour</li>
              <li>US Celebrity Chef Carla Hall jets into Victoria Falls</li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <SectionHead $center>
            <SectionLabel>Our Story</SectionLabel>
            <h2>Discover Dr Mati's Journey</h2>
            <p>Read the full story of how a Zimbabwean doctor built one of the world's greatest boutique hotels.</p>
          </SectionHead>
          <CtaActions>
            <BtnPrimary as={Link} to="/dr-mati-nyazema-story">Read Doc's Story</BtnPrimary>
            <BtnWhatsapp href={CONTACT.whatsappPackages} target="_blank" rel="noopener noreferrer">WhatsApp</BtnWhatsapp>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
