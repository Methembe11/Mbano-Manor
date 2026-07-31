import { Link } from 'react-router-dom';
import { Container, Section, SectionHead, SectionLabel, NewsGrid, NewsCard, NewsThumb, NewsBody, NewsTitle, NewsMeta, NewsExcerpt, Reveal, CtaBanner, CtaActions, BtnPrimary, BtnWhatsapp } from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

const NEWS = [
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/06/missuniversembano.jpg',
    alt: 'Miss Universe Zimbabwe 2026 at Mbano Manor Hotel',
    meta: 'June 29, 2026 | Latest News',
    url: 'https://www.mbanomanorhotel.com/miss-universe-zimbabwe-2026-celebrates-local-tourism-and-african-excellence-at-mbano-manor-hotel/',
    title: 'Miss Universe Zimbabwe 2026 Celebrates Local Tourism and African Excellence at Mbano Manor Hotel',
    excerpt:
      "Zimbabwe's newest queen, Miss Universe Zimbabwe 2026, Roseanna Hall, joined an inspiring gathering of accomplished local and regional businesswomen, entrepreneurs and socialites at the exclusive...",
  },
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/05/post-pic-1.jpg',
    alt: 'Dr Mati Nyazema',
    meta: 'May 19, 2026 | Blog Articles',
    url: 'https://www.mbanomanorhotel.com/dr-mati-nyazema-from-corporate-leadership-to-one-of-zimbabwes-most-remarkable-hospitality-success-stories/',
    title: "Dr Mati Nyazema: From Corporate Leadership to one of Zimbabwe's most remarkable Hospitality Success Stories",
    excerpt:
      "From the bustling corridors of corporate boardrooms to the tranquil luxury of Mbano Manor Hotel, Dr. Mati Martha Nyazema's journey is one of vision, resilience,...",
  },
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2026/03/blogpostimage.jpg',
    alt: 'Lost LeBlanc at Mbano Manor Hotel',
    meta: 'March 23, 2026 | Latest News',
    url: 'https://www.mbanomanorhotel.com/travel-creator-lost-leblanc-bikes-into-mbano-victoria-falls-on-his-africa-tour/',
    title: 'Travel Creator Lost LeBlanc bikes into Mbano Victoria Falls on his Africa tour',
    excerpt:
      'A weary-looking but excited Christian Le Blanc and friends recently roared into Victoria Falls Zimbabwe, staying at Mbano Manor hotel, as part of his extraordinary...',
  },
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/12/radiointerview.jpg',
    alt: 'Unathi Nkayi radio interview',
    meta: 'December 21, 2025 | Latest News',
    url: 'https://www.mbanomanorhotel.com/we-are-coming-home-message-as-sa-celebrity-unathi-nkayi-spotlights-mbano-manor-hotel-victoria-falls-on-air/',
    title: "'We are coming home' message as SA Celebrity Unathi Nkayi Spotlights Mbano Manor Hotel Victoria Falls On Air",
    excerpt:
      "Victoria Falls, Zimbabwe. 'Coming home' and a shared African destiny are key themes which emerge from the recent radio on air meeting between two of...",
  },
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/08/Untitled-1200-x-628-px.jpg',
    alt: 'Bayuni Songbird Retreat',
    meta: 'August 24, 2025 | Latest News',
    url: 'https://www.mbanomanorhotel.com/opening-september-2025-is-the-new-bayuni-songbird-retreat-at-mbano-manor-hotel-victoria-falls/',
    title: 'Bayuni Songbird Retreat now open at Mbano Manor Hotel Victoria Falls',
    excerpt:
      'Mbano Manor Hotel is delighted to announce the upcoming launch of Bayuni Songbird Retreat, an intimate and tranquil wellness space designed to soothe the soul...',
  },
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/BlogH-1.jpg',
    alt: "TIME World's Greatest Places 2025",
    meta: 'March 13, 2025 | Latest News',
    url: 'https://www.mbanomanorhotel.com/mbano-manor-hotel-victoria-falls-featured-in-times-annual-list-of-the-worlds-greatest-places-2025/',
    title: "Mbano Manor Hotel Victoria Falls Featured in TIME's Annual List of the World's Greatest Places 2025",
    excerpt:
      "Victoria Falls, Zimbabwe \u2013 March 13, 2025 - Mbano Manor Hotel Victoria Falls has been featured in TIME's Annual List of the World's Greatest Places...",
  },
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/BlogH.jpg',
    alt: 'Condé Nast Traveler feature',
    meta: 'February 25, 2025 | Latest News',
    url: 'https://www.mbanomanorhotel.com/mbano-mentioned-in-conde-nast-travelers-list-of-60-stellar-black-owned-hotels-to-visit-around-the-world/',
    title: "Mbano mentioned in Condé Nast Traveler's list of 60 Stellar Black-Owned Hotels to Visit Around the World",
    excerpt:
      "We are honoured to be featured in Condé Nast Traveler's list of 60 Stellar Black-Owned Hotels to Visit Around the World! Being recognised among such...",
  },
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2024/10/Screenshot-2024-10-22-at-11.07.56.png',
    alt: 'Renae Leith-Manos interviews Dr Mati Nyazema',
    meta: 'October 15, 2024 | Latest News',
    url: 'https://www.mbanomanorhotel.com/world-renowned-luxury-hotel-expert-renae-leith-manos-interviews-dr-mati-nyazema/',
    title: 'World-renowned luxury hotel expert Renae Leith-Manos interviews Dr Mati Nyazema',
    excerpt: 'By Mbano Manor Hotel',
  },
  {
    img: 'https://www.mbanomanorhotel.com/wp-content/uploads/2024/09/CuisineNoir-2.jpg',
    alt: 'AZTA Awards 2024',
    meta: 'September 23, 2024 | Latest News',
    url: 'https://www.mbanomanorhotel.com/mbano-manor-hotel-takes-home-best-boutique-hotel-award-at-the-2024-azta-awards/',
    title: 'Mbano Manor Hotel Wins Best Boutique Lodge Award at the 2024 AZTA Awards!',
    excerpt:
      "We're absolutely thrilled to announce that Mbano Manor Hotel by Mantis has been awarded Best Boutique Lodge in Zimbabwe at the 2024 AZTA Awards! This...",
  },
];

export default function LatestNews() {
  return (
    <>
      <PageHero
        badge="News"
        title="Latest News"
        sub="The latest stories, accolades and happenings from Mbano Manor Hotel Victoria Falls."
        crumb="/"
        crumbLabel="Home"
      />

      <Section>
        <Container>
          <Reveal>
            <NewsGrid>
              {NEWS.map((n) => (
                <NewsCard key={n.url}>
                  <NewsThumb>
                    <img src={n.img} alt={n.alt} loading="lazy" />
                  </NewsThumb>
                  <NewsBody>
                    <NewsMeta>{n.meta}</NewsMeta>
                    <NewsTitle>
                      <a href={n.url} target="_blank" rel="noopener noreferrer">
                        {n.title}
                      </a>
                    </NewsTitle>
                    <NewsExcerpt>{n.excerpt}</NewsExcerpt>
                  </NewsBody>
                </NewsCard>
              ))}
            </NewsGrid>
          </Reveal>
        </Container>
      </Section>

      <CtaBanner>
        <Container>
          <SectionHead $center>
            <SectionLabel>Plan Your Stay</SectionLabel>
            <h2>Be Part of the Mbano Story</h2>
            <p>Book your stay at Mbano Manor Hotel Victoria Falls and experience the acclaim for yourself.</p>
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
