import { Container, Section, SectionLabel, SectionTitle, SectionText, SectionHead, TwoCol, ContentImg, ContentText, ImgGrid, GridItem, ReviewCard, ReviewText, ReviewAuthor, ReviewSource, Reveal, CtaBanner, CtaActions, BtnWhatsapp } from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

const NORMA_QUOTE =
  "My stay at Mbano Manor Hotel was absolutely amazing, I really enjoyed everything about it. Firstly the warmth from the staff and professionalism. My highlight was being welcomed by Dr Mati, it was really impressive to see an owner taking out time to come and greet, seeing her doing that was so inspiring and showed how hands on she is on her business and it was an assurance of our safety in her premises. The food was so amazing especially for me because I enjoy good food that is one of the things that draws me in a place. The place was so neat, clean towels and the best part the staff took care of our valuables. Also enjoyed the flowing of the itinerary as someone who was visiting Victoria Falls for the first time, with their assistance I saw a lot of interesting places, activities (elephant interaction, nice restaurants, game drives, the professionalism between the travel tour taxis, tour guides and Mbano was incredible. Looking forward to come back again";

export default function MbanoPackages() {
  return (
    <>
      <PageHero
        badge="Packages"
        title="Bespoke Packages"
        sub="Two nights in the lap of luxury at Mbano Manor, four nights at Feline Fields Vintage Camp in the Khwai region of the Delta, and three nights in the Kalahari Desert at Feline Fields Lodge."
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <TwoCol>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/11/SpecialsBanner.jpg"
                  alt="Mbano Manor Hotel specials"
                />
              </ContentImg>
              <ContentText>
                <SectionLabel>Packages</SectionLabel>
                <SectionTitle>A Journey Through Zimbabwe and Botswana</SectionTitle>
                <SectionText>
                  Spend two nights in the lap of luxury at Mbano Manor in Zimbabwe's Victoria Falls, four nights at
                  Feline Fields Vintage Camp in the beautiful Khwai region of the Delta, and three nights in the
                  Kalahari Desert at Feline Fields Lodge. Contact our Reservations team on res@mbanomanorhotel.com or
                  +263 78 892 8776 to make your booking.
                </SectionText>
                <div style={{ marginTop: 24 }}>
                  <BtnWhatsapp href={CONTACT.whatsappPackages} target="_blank" rel="noopener noreferrer">
                    Book Now via WhatsApp
                  </BtnWhatsapp>
                </div>
              </ContentText>
            </TwoCol>
          </Reveal>
        </Container>
      </Section>

      <Section $tint>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>The Experience</SectionLabel>
              <SectionTitle>Bespoke Packages</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <ImgGrid>
              <GridItem $zoom>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/Untitled-3.jpg"
                  alt="Feline Fields Vintage Camp"
                />
              </GridItem>
              <GridItem $zoom>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/Untitled-6.jpg"
                  alt="Feline Fields Lodge"
                />
              </GridItem>
            </ImgGrid>
          </Reveal>
        </Container>
      </Section>

      <Section $dark>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>VIP Guest Review</SectionLabel>
              <SectionTitle $light>VIP Guest Review</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <SectionText $light>
              Find out what SA Businesswoman &amp; Fashion Influencer Norma Mngoma had to say about her stay at Mbano
              Manor Hotel Victoria Falls
            </SectionText>
          </Reveal>
          <Reveal>
            <ReviewCard $dark>
              <ReviewText $dark>{NORMA_QUOTE}</ReviewText>
              <ReviewAuthor>Norma Mngoma</ReviewAuthor>
              <ReviewSource>SA Businesswoman &amp; Fashion Influencer</ReviewSource>
            </ReviewCard>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <SectionHead $center>
            <SectionLabel>Book Your Journey</SectionLabel>
            <h2>Reserve Your Adventure</h2>
            <p>Contact our Reservations team on res@mbanomanorhotel.com or +263 78 892 8776 to book your bespoke package.</p>
          </SectionHead>
          <CtaActions>
            <BtnWhatsapp href={CONTACT.whatsappPackages} target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </BtnWhatsapp>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
