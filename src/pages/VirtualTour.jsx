import { Link } from 'react-router-dom';
import {
  Container, Section, SectionLabel, SectionTitle, SectionText, Divider, SectionHead,
  MediaFrame, ImgGrid, GridItem, CtaBanner, CtaActions, BtnPrimary, BtnWhatsapp, Reveal,
} from '../components/primitives';
import PageHero from '../components/PageHero';
import { VIDEO_LOOP, VIDEO_TESTIMONIAL, CONTACT } from '../data/site';

export default function VirtualTour() {
  return (
    <>
      <PageHero
        title="Suites & Villa Video Tour"
        sub="Step inside the 18 Luxury Suites and the Mutota Forest Villa from the comfort of home."
        badge="Video Tour"
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Luxury Suites</SectionLabel>
              <SectionTitle>Luxury Suite Virtual Tour</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <MediaFrame $ratio="16/9">
              <video src={VIDEO_LOOP} controls playsInline muted autoPlay loop />
            </MediaFrame>
          </Reveal>
          <Reveal delay={0.2}>
            <SectionText $mt={24}>
              Wander through the tranquil living spaces of our luxury suites — calming lounge area, spacious king-sized
              bedroom, bathroom, dressing room and private courtyard.
            </SectionText>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Mutota Forest Villa</SectionLabel>
              <SectionTitle>Mutota Forest Villa Virtual Tour</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <MediaFrame $ratio="16/9">
              <video src={VIDEO_TESTIMONIAL} controls playsInline muted autoPlay />
            </MediaFrame>
          </Reveal>
          <Reveal delay={0.2}>
            <SectionText $mt={24}>
              An intimate forest escape with generous living spaces, a private plunge pool and effortless five-star
              comfort — sleeping up to six guests.
            </SectionText>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>A Peek Inside</SectionLabel>
              <SectionTitle>Inside the Suites &amp; Villa</SectionTitle>
              <Divider $center />
            </SectionHead>
          </Reveal>
          <ImgGrid $four>
            <Reveal>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Suite-exterior-scaled.jpg"
                  alt="Suite exterior at Mbano Manor"
                  fetchPriority="high"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.1}>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Suite-1-scaled.jpg"
                  alt="Mbano Manor suite interior"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.2}>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/03/DSC08538-HDRMbano-Villa-.jpg"
                  alt="Mutota Forest Villa at Mbano Manor"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.3}>
              <GridItem $four>
                <img src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/01/1.jpg" alt="Mbano Manor Hotel" />
              </GridItem>
            </Reveal>
          </ImgGrid>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <h2>See It in Person</h2>
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
