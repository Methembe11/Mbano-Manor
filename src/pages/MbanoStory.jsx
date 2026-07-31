import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container, Section, SectionLabel, SectionTitle, Divider, SectionHead,
  TwoCol, ContentImg, ContentText, DetailList, ImgGrid, GridItem,
  CtaBanner, CtaActions, BtnPrimary, BtnOutline, Reveal,
} from '../components/primitives';
import PageHero from '../components/PageHero';

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

export default function MbanoStory() {
  return (
    <>
      <PageHero
        title="How Mbano was Developed"
        sub="Doc Mati shares highlights of the Mbano development journey from 2016 to 2020."
        badge="Story of Mbano"
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <TwoCol>
            <Reveal>
              <ContentText>
                <SectionLabel>Why Mbano?</SectionLabel>
                <Quote>
                  'Why Not? It had always been my vision to own a tourism product one day, at Victoria Falls.'
                </Quote>
              </ContentText>
            </Reveal>
            <Reveal delay={0.1}>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/05/slidea.jpg"
                  alt="Mbano Manor Hotel set in the teak forest"
                />
              </ContentImg>
            </Reveal>
          </TwoCol>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <ImgGrid $four>
            <Reveal>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2018/12/A-large-teak-tree-defines-the-reception-area.jpg"
                  alt="A large teak tree defines the reception area"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.1}>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2018/12/Security-gate-at-the-main-entrance-e1544607075826.jpg"
                  alt="Security gate at the main entrance"
                />
              </GridItem>
            </Reveal>
            <Reveal delay={0.2}>
              <GridItem $four>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2018/12/Nestled-in-natural-teak-forest-e1544607211386.jpg"
                  alt="The hotel nestled in the natural teak forest"
                />
              </GridItem>
            </Reveal>
          </ImgGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter One</SectionLabel>
              <SectionTitle>The Land</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                In 2016, it was a virgin forest location, with trails made by animal treks, and a single dusty road to
                Kazungula. It was the perfect site.
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter Two</SectionLabel>
              <SectionTitle>Raising Capital</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                A long, stressful and difficult fund-raising journey. A big thank you to the local Pension Funds who
                invested in our greenfield project.
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter Three</SectionLabel>
              <SectionTitle>Conservation</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                Only two trees were taken down during construction. A topographical survey mapped out over 80 major
                trees on the four-acre estate. The buildings were then fitted around the trees.
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter Four</SectionLabel>
              <SectionTitle>Team of Experts</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                Hoteliers first designed Mbano Manor hotel, then we took the concept to an architect. A great team of
                professionals met regularly during 2018 and 2019 – architects, contractors, hotel technical, interior
                design, engineers. Attention to detail defined and defines Mbano.
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter Five</SectionLabel>
              <SectionTitle>Hands-On</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                I was hands-on throughout the construction. Mother Bear. From checking timely delivery of bricks and
                materials, getting Council approvals, working with builders, electricians, plumbers, carpenters and
                landscaper, procurement of furniture and equipment, and more. Taking a short nap on hot afternoons was
                life-saving.
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter Six</SectionLabel>
              <SectionTitle>Motivating Workers</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                'It was important to ensure that workers on site received one decent meal daily, regardless of the
                subcontractor or supplier they worked for. I would bring in additional staple maize meal, meat and
                vegetable supplies, to motivate the workers!'
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter Seven</SectionLabel>
              <SectionTitle>Animal Sightings</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                The security team kept a log of animals' sightings. Four of Big Five (elephant, lion, buffalo, leopard)
                were sighted during evenings alongside Mbano. Elephants and buffalo are still regular visitors.
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter Eight</SectionLabel>
              <SectionTitle>Secret Weapon</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                Doc's trusted daughter, Muchero, managed the office, paid all suppliers, and brought calm and sanity.
                Coping in a high-inflation environment. She is still part of the Mbano team today.
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Chapter Nine</SectionLabel>
              <SectionTitle>Beyond Us</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>
                This project is a legacy for our grandchildren. My family believed in my vision. Our daughter was the
                business manager. The first line lawyer was our son. Another son and daughter were editors, researchers,
                runners. My best friend and personal funder was my husband.
              </li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <div>
              <img
                src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/06/LogoFooterFinal.jpg"
                alt="Mbano Manor Hotel logos"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <h2>From Forest to Five-Star</h2>
          <CtaActions>
            <BtnPrimary as={Link} to="/dr-mati-nyazema-story">
              Read Doc's Story
            </BtnPrimary>
            <BtnOutline as={Link} to="/book-now">
              Book Now
            </BtnOutline>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
