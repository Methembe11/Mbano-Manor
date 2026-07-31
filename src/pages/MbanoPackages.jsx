import { useState } from 'react';
import styled from 'styled-components';
import { Container, Section, SectionLabel, SectionTitle, SectionText, SectionHead, TwoCol, ContentImg, ContentText, ImgGrid, GridItem, ReviewCard, ReviewText, ReviewAuthor, ReviewSource, Reveal, CtaBanner, CtaActions, BtnPrimary, BtnWhatsapp } from '../components/primitives';
import PageHero from '../components/PageHero';
import { CONTACT } from '../data/site';

const ConciergePanel = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.colors.pureWhite};
  padding: 44px;
  margin-top: 44px;
  @media (max-width: 640px) {
    padding: 28px 22px;
  }
`;

const FieldLabel = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 16px;
`;

const SegRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
`;

const SegBtn = styled.button`
  padding: 12px 22px;
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.gold : theme.colors.line)};
  background: ${({ $active }) => ($active ? 'rgba(184, 155, 94, 0.12)' : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.colors.ink : theme.colors.inkSoft)};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 2px;
  transition: border-color 0.4s ease, background 0.4s ease, color 0.4s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const CraftRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const CraftHint = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  letter-spacing: 0.3px;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 0;
`;

const Timeline = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TimelineDay = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  padding-top: 30px;
`;

const DayEyebrow = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 8px;
`;

const DayTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 26px;
`;

const SlotRow = styled.div`
  display: flex;
  gap: 26px;
  margin-top: 18px;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 6px;
  }
`;

const SlotTime = styled.div`
  width: 120px;
  flex-shrink: 0;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bronze};
  padding-top: 4px;
`;

const SlotTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.ink};
`;

const SlotDesc = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 4px 0 0;
`;

const StyleBanner = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
`;

const NIGHTS = [2, 3, 4, 5];

const STYLES = [
  {
    id: 'wildlife',
    label: 'Wildlife & Safari',
    days: [
      {
        morning: ['Game Drive — Zambezi National Park', 'Elephant, buffalo and lion along the riverine forest, the river a constant backdrop.'],
        afternoon: ['Riverside Bush Lunch', 'A slow lunch beneath the sausage trees, only the current moving.'],
        evening: ['Sundowner Cruise', 'Gin and tonic as the sun melts behind the Falls gorge.'],
      },
      {
        morning: ['Flight of the Angels', 'See the Falls from the air — the chasm, the rainbows, the spray.'],
        afternoon: ['Horseback Safari', 'Ride out among the game on the Stanley & Livingstone estate.'],
        evening: ['Private Forest Dinner', 'Candlelit tables beneath the teak canopy, a tasting menu of Zimbabwe.'],
      },
      {
        morning: ['Full-Day Hwange Safari', 'A dawn drive across Hwange\'s pans — lion, wild dog and elephant at the waterholes.'],
        afternoon: ['Rhino Sanctuary Walk', 'A guided encounter with white rhino on foot.'],
        evening: ['Fire-lit Return', 'Sundowners under the open sky, trading stories of the day.'],
      },
      {
        morning: ['Chobe Day Trip', 'Across the border to Botswana for water-level game viewing.'],
        afternoon: ['Chobe River Cruise', 'Hippo, crocodile and great herds on the riverbanks.'],
        evening: ['Rainforest Walk', 'A dusk stroll through the Falls rainforest, spray hanging in the canopy.'],
      },
      {
        morning: ['Big Five Morning Drive', 'One last sweep of the park before the light turns gold.'],
        afternoon: ['Village & Market Visit', 'Meet Victoria Falls town — art and craft in the shadow of the Falls.'],
        evening: ['Farewell Dinner at Mbano', 'A chef\'s table of regional dishes under the stars.'],
      },
    ],
  },
  {
    id: 'photography',
    label: 'Photography & Falls',
    days: [
      {
        morning: ['Sunrise at the Falls', 'The rainforest in first light, the spray catching amber.'],
        afternoon: ['Boiling Pot & Gorge Walk', 'Zig-zag gorge trails to the churning cauldron below.'],
        evening: ['Falls Sunset Cruise', 'Golden light on the water, long shadows in the gorge.'],
      },
      {
        morning: ['Flight of the Angels', 'An aerial pass to frame the full rainbow.'],
        afternoon: ['Zambezi Elephant Interaction', 'Detail shots of giants in soft afternoon light.'],
        evening: ['Wildlife Photography Walk', 'Forest birds and butterflies before dusk.'],
      },
      {
        morning: ['Hwange Dawn Safari', 'The pans at first light — thousands of animals at the waterholes.'],
        afternoon: ['Lunch at the Camp', 'Storyboard your morning over a bush lunch.'],
        evening: ['Milky Way Session', 'Astrophotography from the terrace, the Southern Cross overhead.'],
      },
      {
        morning: ['Chobe Boating Session', 'Water-level light on elephant and hippo.'],
        afternoon: ['Backlight at the Falls', 'Midday — the rainbow bridge at its strongest.'],
        evening: ['Dusk on the Zambezi', 'Long exposures on still, dark water.'],
      },
      {
        morning: ['Forest Portraits', 'The golden hour among the teak trunks.'],
        afternoon: ['Curate & Review', 'A working session over your best frames.'],
        evening: ['Finale at the Falls', 'The full-moon rainbow, if the skies align.'],
      },
    ],
  },
  {
    id: 'adventure',
    label: 'Adventure & Adrenaline',
    days: [
      {
        morning: ['Helicopter Flip', 'A full loop over the gorge, the Batoka and the Falls.'],
        afternoon: ['Bungee & Gorge Swing', 'The Victoria Falls Bridge — 111 metres of adrenaline.'],
        evening: ['Sundowners on the Bridge', 'Decompression with the gorge as your view.'],
      },
      {
        morning: ['White-Water Rafting', 'Grade 5 rapids below the Falls, the classic Zambezi run.'],
        afternoon: ['Recovery Bush Lunch', 'A riverside lunch and a well-earned rest.'],
        evening: ['Game Drive, Zambezi NP', 'A soft landing back among the wildlife.'],
      },
      {
        morning: ['Zipline & High-Wire', 'Across the gorge face at speed.'],
        afternoon: ['Abseil the Gorge', 'Step into the Batoka chasm on a rope.'],
        evening: ['Private Dinner', 'Your adrenaline muscles get a forest dinner reward.'],
      },
      {
        morning: ['Full-Day Hwange', 'A long drive for big cats and wild dog.'],
        afternoon: ['Walking Safari', 'Bushwalking with an armed ranger.'],
        evening: ['Boma Night', 'Rhythm and drumbeat of a traditional evening.'],
      },
      {
        morning: ['Jet Boat Upstream', 'Ride the upper Zambezi shallows.'],
        afternoon: ['Twin Falls Cycle', 'A guided cycle from the Falls back through the forest.'],
        evening: ['Farewell Sundowner', 'The classic close to a wild week.'],
      },
    ],
  },
  {
    id: 'relaxation',
    label: 'Pure Relaxation',
    days: [
      {
        morning: ['Slow Breakfast in the Forest', 'No agenda — the teak trees and a long coffee.'],
        afternoon: ['Spa Treatment', 'A signature massage with locally scented oils.'],
        evening: ['Sundowner on the Terrace', 'The sun sets; the forest hums.'],
      },
      {
        morning: ['Falls Rainforest Stroll', 'An unhurried walk in the spray and the green.'],
        afternoon: ['Poolside Afternoon', 'Cool water, iced tea, a novel.'],
        evening: ['Candlelit Dinner', 'A tasting menu in the quiet courtyard.'],
      },
      {
        morning: ['Yoga in the Garden', 'A gentle session to the birdsong.'],
        afternoon: ['Couples Spa Ritual', 'Side-by-side therapies in the suite.'],
        evening: ['Stargazing', 'Blankets and the Southern sky.'],
      },
      {
        morning: ['Morning Cruise', 'A private cruise upriver, breakfast on board.'],
        afternoon: ['Art & Coffee in Town', 'The galleries of Victoria Falls, at your pace.'],
        evening: ['The Slow Hour', 'Books, port and a fire in the library.'],
      },
      {
        morning: ['Falls at First Light', 'See the Smoke that Thunders before the crowds.'],
        afternoon: ['Afternoon Bath Ritual', 'The claw bath with a courtyard view.'],
        evening: ['Farewell Dinner', 'One last long table under the canopy.'],
      },
    ],
  },
  {
    id: 'romance',
    label: 'Romance & Seclusion',
    days: [
      {
        morning: ['Private Sunrise Breakfast', 'A table set in the forest, just for two.'],
        afternoon: ['Couples Spa Hour', 'Side-by-side in the treatment room.'],
        evening: ['Sundowner for Two', 'A private boat on the Zambezi.'],
      },
      {
        morning: ['Falls in the Spray', 'The rainforest path, hand in hand.'],
        afternoon: ['Photographer Session', 'A private shoot at the Falls.'],
        evening: ['Private Forest Dinner', 'Candles, wine and the teak canopy above.'],
      },
      {
        morning: ['Hot Air Balloon Safari', 'Float over the river at dawn.'],
        afternoon: ['Champagne at the Gorge', 'A picnic at the view over the Batoka.'],
        evening: ['The Rose Ritual', 'A claw bath drawn for two.'],
      },
      {
        morning: ['Horseback for Two', 'A gentle ride through open woodland.'],
        afternoon: ['Zambezi Island Picnic', 'A sandbank lunch — only you two and the river.'],
        evening: ['Starlight Dinner', 'A private table under the open sky.'],
      },
      {
        morning: ['Sunrise Walk to the Falls', 'The bridge to the Falls in morning gold.'],
        afternoon: ['Art & Antiques', 'An easy afternoon in town.'],
        evening: ['Honeymoon Dinner', 'A farewell tasting menu and a toast to the Falls.'],
      },
    ],
  },
];

const itineraryText = (style, nights) => {
  const days = style.days.slice(0, nights);
  const lines = days.map((d, i) => `Day ${i + 1}: ${d.morning[0]} | ${d.afternoon[0]} | ${d.evening[0]}`);
  return lines.join('\n');
};

const NORMA_QUOTE =
  "My stay at Mbano Manor Hotel was absolutely amazing, I really enjoyed everything about it. Firstly the warmth from the staff and professionalism. My highlight was being welcomed by Dr Mati, it was really impressive to see an owner taking out time to come and greet, seeing her doing that was so inspiring and showed how hands on she is on her business and it was an assurance of our safety in her premises. The food was so amazing especially for me because I enjoy good food that is one of the things that draws me in a place. The place was so neat, clean towels and the best part the staff took care of our valuables. Also enjoyed the flowing of the itinerary as someone who was visiting Victoria Falls for the first time, with their assistance I saw a lot of interesting places, activities (elephant interaction, nice restaurants, game drives, the professionalism between the travel tour taxis, tour guides and Mbano was incredible. Looking forward to come back again";

export default function MbanoPackages() {
  const [nights, setNights] = useState(2);
  const [styleId, setStyleId] = useState('wildlife');
  const [crafted, setCrafted] = useState(false);
  const style = STYLES.find((s) => s.id === styleId) || STYLES[0];
  const days = crafted ? style.days.slice(0, nights) : [];

  const craft = () => {
    setCrafted(true);
    setTimeout(() => {
      document.getElementById('crafted-itinerary')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const whatsappItinerary = () => {
    const msg = `Hello Mbano Manor, I'd like to request this itinerary:\n\n${itineraryText(style, nights)}\n\nLength: ${nights} nights`;
    window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

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

      <Section>
        <Container>
          <Reveal>
            <SectionHead $center>
              <SectionLabel>Itinerary Concierge</SectionLabel>
              <SectionTitle>Compose Your Days</SectionTitle>
              <SectionText>
                Tell us how you dream of visiting — and we will compose the perfect sequence of days at the Falls.
                Choose your length and journey style, then send the itinerary straight to our reservations team.
              </SectionText>
            </SectionHead>
          </Reveal>

          <Reveal>
            <ConciergePanel>
              <FieldLabel>Length of Stay</FieldLabel>
              <SegRow>
                {NIGHTS.map((n) => (
                  <SegBtn key={n} $active={nights === n} onClick={() => setNights(n)}>
                    {n} Nights
                  </SegBtn>
                ))}
              </SegRow>
              <FieldLabel>Journey Style</FieldLabel>
              <SegRow>
                {STYLES.map((s) => (
                  <SegBtn key={s.id} $active={styleId === s.id} onClick={() => setStyleId(s.id)}>
                    {s.label}
                  </SegBtn>
                ))}
              </SegRow>
              <CraftRow>
                <CraftHint>
                  {nights} nights of {style.label.toLowerCase()} across the Falls region.
                </CraftHint>
                <BtnPrimary as="button" onClick={craft}>
                  Craft My Itinerary
                </BtnPrimary>
              </CraftRow>
            </ConciergePanel>
          </Reveal>

          {crafted && (
            <Reveal>
              <div id="crafted-itinerary" style={{ paddingTop: 8 }}>
                <StyleBanner>{style.label} &middot; {nights} Nights &middot; Victoria Falls</StyleBanner>
                <Timeline>
                  {days.map((d, i) => (
                    <TimelineDay key={i}>
                      <DayEyebrow>Day {i + 1}</DayEyebrow>
                      <DayTitle>{style.days[i].morning[0].split(' — ')[0]}</DayTitle>
                      {['morning', 'afternoon', 'evening'].map((slot) => (
                        <SlotRow key={slot}>
                          <SlotTime>{slot}</SlotTime>
                          <div>
                            <SlotTitle>{d[slot][0]}</SlotTitle>
                            <SlotDesc>{d[slot][1]}</SlotDesc>
                          </div>
                        </SlotRow>
                      ))}
                    </TimelineDay>
                  ))}
                </Timeline>
                <CraftRow style={{ marginTop: 44 }}>
                  <CraftHint>Refine it with our team — every itinerary is fully customisable.</CraftHint>
                  <BtnWhatsapp href="#" onClick={(e) => { e.preventDefault(); whatsappItinerary(); }} target="_blank" rel="noopener noreferrer">
                    Request This Itinerary
                  </BtnWhatsapp>
                </CraftRow>
              </div>
            </Reveal>
          )}
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
