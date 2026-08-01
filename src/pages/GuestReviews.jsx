import { Link } from 'react-router-dom';
import { Container, Section, SectionLabel, SectionTitle, SectionText, SectionHead, TwoCol, ContentImg, ContentText, CardGrid, ReviewCard, ReviewStars, ReviewTitle, ReviewText, ReviewAuthor, ReviewSource, Reveal, CtaBanner, CtaActions, BtnPrimary, BtnOutline, BtnWhatsapp } from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';
import { TRIPADVISOR_REVIEWS, GOOGLE_REVIEWS, NORMA_QUOTE } from '../data/reviews';

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com/Hotel_Review-g293761-d18554902-Reviews-Mbano_Manor_Hotel_Victoria_Falls-Victoria_Falls_Matabeleland_North_Province.html';

export default function GuestReviews() {
  return (
    <>
      <PageHero
        badge="Guest Reviews"
        title="Read What Our Guests Have to Say"
        sub="Read what our guests have to say once they have experienced Mbano Manor Hotel Victoria Falls!"
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <TwoCol>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2025/05/Untitled-design-2025-05-06T231957.971.jpg"
                  alt="Mbano Manor Hotel guest experience"
                  fetchPriority="high"
                />
              </ContentImg>
              <ContentText>
                <SectionLabel>Guest Reviews</SectionLabel>
                <SectionTitle>A Little Oasis in the Forest</SectionTitle>
                <SectionText>
                  From 'A little oasis' to 'A Dream Stay in Every Way', our guests consistently praise the warmest and
                  kindest staff, beautiful forest setting, and exceptional food.
                </SectionText>
                <div style={{ marginTop: 24 }}>
                  <BtnOutline $dark href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer">
                    Review Us on TripAdvisor
                  </BtnOutline>
                </div>
              </ContentText>
            </TwoCol>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Testimonials</SectionLabel>
              <SectionTitle>TripAdvisor Reviews</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <CardGrid $two>
              {TRIPADVISOR_REVIEWS.map((r) => (
                <ReviewCard key={r.author}>
                  <ReviewStars>★★★★★</ReviewStars>
                  <ReviewTitle>{r.title}</ReviewTitle>
                  <ReviewText>{r.text}</ReviewText>
                  <ReviewAuthor>{r.author}</ReviewAuthor>
                  <ReviewSource>via TripAdvisor</ReviewSource>
                </ReviewCard>
              ))}
            </CardGrid>
          </Reveal>
        </Container>
      </Section>

      <Section $dark>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Google Reviews</SectionLabel>
              <SectionTitle $light>Google Reviews</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <CardGrid $two>
              {GOOGLE_REVIEWS.map((r) => (
                <ReviewCard key={r.author} $dark>
                  <ReviewStars>★★★★★</ReviewStars>
                  <ReviewText $dark>{r.text}</ReviewText>
                  <ReviewAuthor>{r.author}</ReviewAuthor>
                  <ReviewSource>via Google</ReviewSource>
                </ReviewCard>
              ))}
            </CardGrid>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>VIP Guest Review</SectionLabel>
              <SectionTitle>VIP Guest Review</SectionTitle>
            </SectionHead>
          </Reveal>
          <Reveal>
            <TwoCol>
              <ContentImg $tall>
                <img
                  src="https://www.mbanomanorhotel.com/wp-content/uploads/2022/09/Untitled-6.jpg"
                  alt="Norma Mngoma at Mbano Manor Hotel"
                />
              </ContentImg>
              <ContentText>
                <SectionText>
                  Find out what SA Businesswoman &amp; Fashion Influencer Norma Mngoma had to say about her stay at
                  Mbano Manor Hotel Victoria Falls
                </SectionText>
                <ReviewCard>
                  <ReviewText>{NORMA_QUOTE}</ReviewText>
                  <ReviewAuthor>Norma Mngoma</ReviewAuthor>
                  <ReviewSource>SA Businesswoman &amp; Fashion Influencer</ReviewSource>
                </ReviewCard>
              </ContentText>
            </TwoCol>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <SectionHead $center>
            <SectionLabel>Book Your Stay</SectionLabel>
            <h2>Experience It Yourself</h2>
            <p>Join our guests in discovering the warmth, beauty and serenity of Mbano Manor Hotel Victoria Falls.</p>
          </SectionHead>
          <CtaActions>
            <BtnPrimary as={Link} to="/book-now">Book Now</BtnPrimary>
            <BtnWhatsapp href={CONTACT.whatsappPackages} target="_blank" rel="noopener noreferrer">WhatsApp</BtnWhatsapp>
          </CtaActions>
        </Container>
      </CtaBanner>
    </>
  );
}
