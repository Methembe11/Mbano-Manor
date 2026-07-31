import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Container, Section, SectionLabel, SectionTitle, SectionText, Divider, SectionHead,
  DetailList, ContentImg, CtaBanner, CtaActions, BtnPrimary, BtnOutline, Reveal,
} from '../components/primitives';
import PageHero from '../components/PageHero';

const PoemCard = styled.div`
  background: ${({ theme }) => theme.colors.pureWhite};
  border: 1px solid rgba(61, 47, 35, 0.08);
  border-radius: 2px;
  padding: 32px;
  margin-bottom: 20px;
`;

const PoemLine = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 17px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.deepTeak};
  line-height: 1.7;
`;

export default function MbanoMeaning() {
  return (
    <>
      <PageHero
        title="Mbano yeMatemavi"
        sub="The meaning behind the name Mbano."
        badge="Mbano Meaning"
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Mbano Matemavi</SectionLabel>
              <SectionTitle>Mbano Matemavi</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <DetailList>
              <li>Mbano Matemavi is our clan.</li>
              <li>Matemavi is our totem (mutupo).</li>
              <li>Mbano is our praise name (chidawo).</li>
              <li>The African elephant (nzou) is the animal symbol for the Mbano Matemavi clan.</li>
            </DetailList>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Mbano as a Praise Name</SectionLabel>
              <SectionTitle>Mbano as a Praise Name</SectionTitle>
              <Divider />
              <SectionText>
                The clan is the core of every Shona chiefdom, among the tribes of Zimbabwe and Southern Africa. It is a
                group of agnatically (male descendant) related kinsmen and women who trace their descent from a common
                founding ancestor. The foundations of the totems are inspired in poems that reference the history of the
                totem. Every clan is identified by a particular totem and praise name.
              </SectionText>
            </SectionHead>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <ContentImg>
              <img
                src="https://www.mbanomanorhotel.com/wp-content/uploads/2021/01/mbanos701.jpg"
                alt="Mbano Manor Hotel"
              />
            </ContentImg>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Nhetembo yeMbano</SectionLabel>
              <SectionTitle>Nhetembo yeMbano</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <PoemCard>
              <PoemLine>Evo Nzou, Makunda, Maita Mbano, evo Musiyiwa,</PoemLine>
              <PoemLine>Mwoyowevhu, zvaitwa Madzorera.</PoemLine>
              <PoemLine>Maita zvenyu vomuGoromonzi, vokwaChikwaka.</PoemLine>
              <PoemLine>Zvaitwa vemvuto chena, vomuDzimwe.</PoemLine>
              <PoemLine>Maita Matemavi, Mbano yangu yiyi.</PoemLine>
              <PoemLine>Chiuya chinenge mukaka, Chinodyiwa navasina meno,</PoemLine>
              <PoemLine>Mhuka isina mutumbi, Chiuya chavachafema.</PoemLine>
              <PoemLine>Maita vari pamhiri paNhora, Vari Dzimwe, muGoromonzi,</PoemLine>
              <PoemLine>VokwaChikwaka, VaChivakanamabwe, Kuvaka nomuti unosakara</PoemLine>
              <PoemLine>Kana kudyiwa nomuchenje.</PoemLine>
              <PoemLine>Maita zvenyu vari Mutiwaora.</PoemLine>
              <PoemLine>Waita waCheza naBenhura, Zvaitwa maKorekore, VaChipahomwoyo.</PoemLine>
              <PoemLine>Aiwa tatenda Musenda, Zvaitwa, zvaonekwa vari Dzimwe.</PoemLine>
            </PoemCard>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead>
              <SectionLabel>Mbano Praise Poem</SectionLabel>
              <SectionTitle>Mbano Praise Poem</SectionTitle>
              <Divider />
            </SectionHead>
          </Reveal>
          <Reveal delay={0.1}>
            <PoemCard>
              <PoemLine>Hail Mbano, hail the elephant.</PoemLine>
              <PoemLine>We praise you and we thank you for your achievement.</PoemLine>
              <PoemLine>We give thanks to your great ancestors from whom you descend.</PoemLine>
              <PoemLine>You hail from different places, from hills and valleys afar.</PoemLine>
              <PoemLine>Thank you for your great deeds, you have made us and the ancestors proud.</PoemLine>
            </PoemCard>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <div>
              <img
                src="https://www.mbanomanorhotel.com/wp-content/uploads/2024/08/logos-1024x165.jpg"
                alt="Mbano Manor Hotel awards and recognition logos"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <h2>Discover the Mbano Legacy</h2>
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
