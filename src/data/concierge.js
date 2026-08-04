// ============================================================
// MBANO MANOR — AI CONCIERGE KNOWLEDGE BASE
// Every fact below is drawn from the live website content
// (src/pages/*, src/data/site.js, src/data/reviews.js).
// When an LLM API is configured (see conciergeApi.js) this
// knowledge is injected as context so the AI can only answer
// about things the hotel actually offers.
// ============================================================

const KB = [
  {
    id: 'greeting',
    keywords: ['hi', 'hello', 'hey', 'howdy', 'good morning', 'good afternoon', 'good evening', 'yo', 'welcome'],
    answer:
      "Hello! Welcome to Mbano Manor Hotel — a sanctuary hidden within the ancient teak forest of Victoria Falls, Zimbabwe. I'm your AI concierge and can answer anything about the hotel, the suites and villa, the spa, dining, activities at the Falls, bespoke packages and how to book. What can I help you with today?",
  },
  {
    id: 'about',
    keywords: ['about', 'hotel', 'what is', 'tell me', 'introduce', 'sanctuary', 'property', 'estate', 'information', 'overview', 'describe'],
    answer:
      "Mbano Manor Hotel is an intimate, family-owned boutique safari hotel set within a four-acre ancient teak forest in Victoria Falls, Zimbabwe. It offers 18 private luxury suites plus the presidential Mutota Forest Villa, with wildlife — giraffe, elephant and a wealth of bird species — regularly seen on the estate. Only two trees were felled to build it; over 80 major trees were mapped and the buildings were fitted around them. It is proudly black female-owned and independent, founded, built and managed by Dr Matifadza Martha Nyazema. It sits just 4 km (about an 8-minute drive) from the entrance to Victoria Falls.",
    route: '/about-mbano',
    cta: 'Read more about Mbano',
  },
  {
    id: 'location',
    keywords: ['location', 'where', 'address', 'directions', 'distance', 'far', 'map', 'situated', 'get there', 'area'],
    answer:
      "Mbano Manor Hotel is on Old Kazungula Road, Victoria Falls, Zimbabwe — about 4 km (an 8-minute drive) from the entrance to Victoria Falls Park. Victoria Falls Town is 3.5 km away, the cruise jetty is ~3 km, the 'Flight of the Angels' helipad is ~5 km, Zambezi National Park is 8 km, Chobe National Park (Botswana) is 70 km (~1 hr drive) and Hwange National Park is 230 km (~2 hr 40 min). The hotel provides shuttle transport into town at scheduled hours.",
    route: '/contact',
    cta: 'See our location',
  },
  {
    id: 'suites',
    keywords: ['suite', 'suites', 'room', 'rooms', 'bedroom', 'stay', 'accommodation', 'sleep', 'luxury', 'king', 'beds', 'interior', 'size', 'sqm', 'terrace', 'amenities'],
    answer:
      "The 18 luxury suites each offer 45 sqm of tranquil living space plus a 53 sqm outside terrace and a private courtyard. Every suite features a king-sized bed (8 suites offer the option of twins), traditional teak shutters, a full bathroom with hand-painted feature tiles and a classic claw bath, a his-and-hers dressing room, outdoor showers (being rolled out in all king-bed suites), a lounge area and a self-service refreshment area stocked with coffee, snacks, a mini bar and a coffee machine. Five sets of paired suites offer secluded comfort, while two sets of four family-friendly suites interconnect via verandas.",
    route: '/luxury-suites',
    cta: 'Explore the luxury suites',
  },
  {
    id: 'villa',
    keywords: ['villa', 'mutota', 'presidential', 'plunge', 'pool villa', 'forest villa'],
    answer:
      "The Mutota Forest Villa is the presidential villa — a 200 sqm private retreat in its own secluded corner of the estate. It sleeps up to 6 guests: an XL king bedroom, one twin-bedded room, and a convertible sofa doubling as a bed in the casual lounge. It features its own gardens, a private plunge pool and individual access, two indoor and two outdoor showers in an enclosed garden courtyard, a Victoria claw bathtub, a dining suite for six with a fully-stocked refreshment area, a desk, TVs, full high-speed internet and a 24-hour butler and concierge service. Opened in late 2021, it's ideal for business or indulgent leisure.",
    route: '/mutota-forest-villa',
    cta: 'Discover the Mutota Forest Villa',
  },
  {
    id: 'spa',
    keywords: ['spa', 'bayuni', 'massage', 'facial', 'wellness', 'treatment', 'treatments', 'songbird', 'relax', 'pamper'],
    answer:
      "Bayuni Spa is set within the quiet beauty of Mbano's forest sanctuary. It offers a deeply restorative wellness experience — from indulgent massages to revitalising facials, thoughtfully crafted with locally scented oils to relax the body, calm the mind and rejuvenate the spirit. The Bayuni Songbird Retreat is an intimate, tranquil wellness space now open at the hotel. Treatments can be reserved via WhatsApp or with the reservations team.",
    route: '/bayuni-spa',
    cta: 'View the spa menu',
  },
  {
    id: 'dining',
    keywords: ['dining', 'food', 'restaurant', 'dinner', 'lunch', 'breakfast', 'eat', 'chef', 'meal', 'cuisine', 'high tea', 'cafe', 'cocktail', 'drinks', 'dine'],
    answer:
      "Every meal at Mbano is a celebration of Zimbabwean flavours, crafted with locally sourced ingredients and served wherever you desire — beneath the ancient teak canopy, on your private veranda, or beneath a canopy of stars. Dining is flexi: fine or casual on the dining terrace, in the picturesque bar courtyard, in the indoor lounge, around the pool (light snacks and cocktails) or in the comfort of your suite. The expert chefs deliver menus to your taste, and dietary requirements — including full Kosher services — are embraced.",
    route: '/contact',
    cta: 'Inquire about dining',
  },
  {
    id: 'kosher',
    keywords: ['kosher', 'parev', 'mashgiach', 'dietary', 'jewish', 'glatt'],
    answer:
      "Mbano provides full Kosher services. A dedicated Kosher section is equipped with standalone sinks, a separate stove, oven and refrigerators. The Head Chef and team are trained in handling Kosher food, utensils and service requirements, and Parev options are available. A Mashgiach can be arranged on request at an additional cost, and a daily Kosher surcharge and a one-time flat Kosher fee may apply. Day trips to the Jewish Museum in Livingstone can also be arranged.",
    route: '/about-mbano',
    cta: 'Learn more about our Kosher services',
  },
  {
    id: 'checkin',
    keywords: ['check in', 'check-in', 'check out', 'check-out', 'checkin', 'checkout', 'arrival', 'departure', 'time', 'early', 'late', 'lounge', 'welcome'],
    answer:
      "Check-in is from 14:00 and check-out is at 11:00. Early arrivals and late checkouts are accommodated where possible, subject to room availability — guests are welcome to arrive earlier and use the swimming pool and gardens. You can check in at the reception terrace, in the lounge, or even in the comfort of your suite, and you'll be escorted through the forest to your suite or in fine golf carts.",
    route: '/contact',
    cta: 'See what you need to know',
  },
  {
    id: 'booking',
    keywords: ['book', 'booking', 'bookings', 'reservation', 'reserve', 'reservations', 'stay', 'how to book', 'price', 'rates', 'cost', 'quote', 'availability', 'pay', 'book now'],
    answer:
      "Booking with Mbano is personal and simple. The fastest route is WhatsApp: https://api.whatsapp.com/send?phone=263788928776 — or email res@mbanomanorhotel.com or res1@mbanomanorhotel.com, call +263 (0)78 892 8776 (landlines +263 832 845 096 / +263 832 845 097), or use the website's Book Now page, which composes a stay request for you. Rates vary by suite, season and dates, so the reservations team will prepare a personalised quote.",
    route: '/book-now',
    cta: 'Begin your stay',
  },
  {
    id: 'whatsapp',
    keywords: ['whatsapp', 'wa', 'chat', 'message', 'watsapp'],
    answer:
      "WhatsApp is the fastest and most personal way to reach us: https://api.whatsapp.com/send?phone=263788928776. Message the reservations team directly to book, ask availability questions or craft an itinerary. There's also a dedicated WhatsApp link for bespoke packages: https://wa.link/6wvpcr.",
    route: '/book-now',
    cta: 'Go to the booking page',
  },
  {
    id: 'contact',
    keywords: ['contact', 'phone', 'call', 'email', 'mail', 'number', 'telephone', 'mobile', 'landline', 'reach', 'speak', 'human', 'talk'],
    answer:
      "You can reach the team here — Reservations: +263 (0)78 892 8776 · Landlines: +263 832 845 096 and +263 832 845 097 · Email: res@mbanomanorhotel.com and res1@mbanomanorhotel.com · Sales: +263 (0)78 822 0435 / sales@mbanomanorhotel.com · Founder Dr Mati Nyazema: mati@mbanomanorhotel.com. Address: Mbano Manor Hotel, Old Kazungula Road, Victoria Falls, Zimbabwe.",
    route: '/contact',
    cta: 'Open the contact page',
  },
  {
    id: 'transport',
    keywords: ['transport', 'airport', 'flight', 'fly', 'transfer', 'shuttle', 'drive', 'getting', 'access', 'rail', 'road'],
    answer:
      "Victoria Falls is reached by road, air or rail, with scheduled flights connecting local and regional destinations. Mbano is 4 km from the Falls entrance and the hotel operates shuttles at scheduled hours into the centre of Victoria Falls. The concierge team is happy to arrange airport transfers, taxis and touring vehicles for any excursion.",
    route: '/contact',
    cta: 'Plan your arrival',
  },
  {
    id: 'falls',
    keywords: ['falls', 'victoria falls', 'waterfall', 'mosi', 'smoke', 'thunders', 'wonder', 'tour falls', 'falls tour'],
    answer:
      "Victoria Falls — Mosi-oa-Tunya, 'the Smoke that Thunders' — is the largest waterfall in the world: the mighty Zambezi makes a sudden kilometre-wide drop and plunges more than 100 metres into a gorge. It's a UNESCO World Heritage Site and one of the Seven Natural Wonders of the World, just 4 km from Mbano. Two national parks — Victoria Falls National Park and Zambezi National Park — adjoin the Falls.",
    route: '/victoria-falls',
    cta: 'Explore Victoria Falls',
  },
  {
    id: 'activities',
    keywords: ['activity', 'activities', 'things to do', 'excursion', 'experience', 'what to do', 'attractions', 'tours', 'adventures'],
    answer:
      "Popular activities include guided tours of the Falls (Zimbabwe or Zambia side), Zambezi sunset cruises, the 'Flight of the Angels' helicopter ride, white-water rafting in the Zambezi Gorge, bungee jumping and gorge swing from the Victoria Falls Bridge, ziplines and canopy tours, walking safaris, horse-riding, elephant encounters, Devil's Pool (seasonal, Zambia side), cultural village visits, and game drives in Zambezi, Hwange and Chobe National Parks. Everything can be booked through the concierge.",
    route: '/victoria-falls',
    cta: 'See all activities',
  },
  {
    id: 'safari',
    keywords: ['safari', 'game drive', 'game drives', 'wildlife', 'animals', 'lion', 'elephant', 'park', 'hwange', 'chobe', 'zambezi national', 'big five', 'rhino', 'hippo', 'crocodile'],
    answer:
      "Game drives set off early morning or mid-afternoon in open four-wheel-drive vehicles with qualified guides. Zambezi National Park is 8 km away (15 min). Hwange National Park — Zimbabwe's largest, holding one of the world's greatest elephant populations — is ~2 hr 40 min away, and Chobe National Park in Botswana, one of the greatest wildlife concentrations in Africa, is about an hour's drive. Rhino sanctuary walks, walking safaris with armed rangers and horseback safaris can all be arranged.",
    route: '/victoria-falls',
    cta: 'Plan your safari',
  },
  {
    id: 'cruise',
    keywords: ['cruise', 'boat', 'river', 'zambezi cruise', 'sundowner', 'sunset cruise', 'jetty', 'river cruise'],
    answer:
      "Zambezi cruises depart from a jetty ~3 km from the hotel — sundowner, lunch and dinner cruises along the river. You'll see elephants, hippos, crocodile and a wide range of African birdlife on land, in the air and on the water, with a knowledgeable guide as the sun sets over the gorge.",
    route: '/victoria-falls',
    cta: 'More river experiences',
  },
  {
    id: 'helicopter',
    keywords: ['helicopter', 'flight of the angels', 'fly', 'air', 'aerial', 'helipad', 'angels'],
    answer:
      "The 'Flight of the Angels' is the classic helicopter flight over the Falls and the zig-zag funnel of the Batoka Gorge, departing from a helipad ~5 km from the hotel. It offers an exhilarating, unforgettable aerial view of the world's largest waterfall.",
    route: '/victoria-falls',
    cta: 'See the Falls from above',
  },
  {
    id: 'adventure',
    keywords: ['adventure', 'rafting', 'raft', 'bungee', 'gorge swing', 'zip', 'zipline', 'canopy', 'abseil', 'jet boat', 'adrenaline', 'bridge', 'grade'],
    answer:
      "Victoria Falls is a world capital of adrenaline. White-water rafting takes on the Grade 5 rapids of the Zambezi below the Falls; the Victoria Falls Bridge offers bungee jumping and gorge swing from 111 metres; there are ziplines and high-wire crossings, abseiling into the Batoka chasm, and jet boats on the upper river. All adventures are easily arranged by the concierge.",
    route: '/victoria-falls',
    cta: 'Plan your adventure',
  },
  {
    id: 'packages',
    keywords: ['package', 'packages', 'bespoke', 'itinerary', 'okavango', 'feline fields', 'kalahari', 'delta', 'expedition', 'journey', 'romance', 'photography', 'wildlife safari'],
    answer:
      "Mbano offers bespoke packages combining two nights at Mbano Manor with four nights at Feline Fields Vintage Camp in the Khwai region of the Okavango Delta and three nights at Feline Fields Lodge in the Kalahari Desert. The Itinerary Concierge on the Packages page lets you compose 2–5 nights in five journey styles — Wildlife & Safari, Photography & Falls, Adventure & Adrenaline, Pure Relaxation, and Romance & Seclusion — then send your itinerary straight to reservations via WhatsApp.",
    route: '/mbano-packages',
    cta: 'Compose your itinerary',
  },
  {
    id: 'forest',
    keywords: ['forest', 'teak', 'trees', 'nature', 'garden', 'grounds', 'birds', 'bird', 'sanctuary', 'walk', 'paths'],
    answer:
      "Mbano is a bird and tree sanctuary — four acres of ancient teak forest where only two trees were felled during construction and more than 80 major trees were mapped and built around. Wander the sprawling forest paths among numerous, colourful bird species, or simply sit with coffee or a sundowner on your suite veranda. A herd of elephants walking past the entrance is a guest favourite.",
    route: '/mbano-forest',
    cta: 'Explore the Mbano Forest',
  },
  {
    id: 'wildlife',
    keywords: ['wildlife', 'giraffe', 'elephant', 'animals', 'birds', 'game', 'bush'],
    answer:
      "Wildlife is part of everyday life at Mbano. Giraffe and elephant roam near the sanctuary, a herd of elephants has been seen munching trees at the entrance, and the forest teems with birds. Just beyond the property lie the great reserves — Hwange, the Zambezi and Chobe — where big game is abundant.",
    route: '/mbano-forest',
    cta: 'Discover the sanctuary',
  },
  {
    id: 'story',
    keywords: ['story', 'founder', 'owner', 'mati', 'nyazema', 'doc', 'matifadza', 'history', 'who built', 'heritage', 'her story', 'owned', 'zimbabwean'],
    answer:
      "Mbano was founded, built and managed by Dr Matifadza Martha Nyazema — known as 'Dr Mati' — a Mother, Grandmother, Businesswoman and Hotelier, who was determined to create a luxury destination unlike any other. It is proudly black female-owned and independent, a family-owned boutique safari hotel and a testament to African excellence. It has been named among Time magazine's World's Greatest Places and honoured with Zimbabwe's Best Boutique Lodge at the AZTA Awards.",
    route: '/dr-mati-nyazema-story',
    cta: "Read Dr Mati's story",
  },
  {
    id: 'meaning',
    keywords: ['meaning', 'name', 'mbano', 'matemavi', 'clan', 'totem', 'praise', 'elephant symbol', 'chidawo', 'mutupo', 'nzou'],
    answer:
      "'Mbano Matemavi' is the founder's clan. Matemavi is the clan totem (mutupo), Mbano is the praise name (chidawo), and the African elephant (nzou) is the animal symbol of the Mbano Matemavi clan. You'll find the clan's praise poem — the Nhetembo yeMbano — on the Mbano Meaning page.",
    route: '/mbano-meaning',
    cta: 'Explore the meaning of Mbano',
  },
  {
    id: 'reviews',
    keywords: ['review', 'reviews', 'rating', 'rating', 'tripadvisor', 'google', 'stars', 'guests say', 'testimonials', 'guest', 'norma', 'mngoma'],
    answer:
      "Guests consistently rate Mbano five stars on TripAdvisor and Google, praising the warmth of the staff, the excellent food and the serene, beautifully kept forest setting. The hotel is listed in Time magazine as a 5-star boutique hotel to stay in at Victoria Falls, and SA businesswoman and fashion influencer Norma Mngoma's stay is featured as a VIP guest review.",
    route: '/guest-reviews',
    cta: 'Read guest reviews',
  },
  {
    id: 'awards',
    keywords: ['award', 'awards', 'accolade', 'recognition', 'time magazine', 'azta', 'greatest places', 'best boutique', 'honour', 'press', 'media'],
    answer:
      "Mbano has been named among Time magazine's World's Greatest Places and honoured with Zimbabwe's Best Boutique Lodge at the AZTA Awards, and it features regularly in the media — from Miss Universe Zimbabwe 2026 celebrating local tourism at the hotel, to travel creator Lost LeBlanc cycling in on his Africa tour and SA celebrity Unathi Nkayi spotlighting the hotel on air.",
    route: '/media-articles',
    cta: 'See press and recognition',
  },
  {
    id: 'gallery',
    keywords: ['gallery', 'photo', 'photos', 'pictures', 'images', 'see', 'look', 'visual', 'video', 'tour', 'film', 'virtual', 'walkthrough', 'walk through'],
    answer:
      "You can explore Mbano through the Gallery, the Suites & Villa video tour, and the Forest gallery under the 'Experience' menu. The Virtual Tour page walks you inside the 18 luxury suites and the Mutota Forest Villa with video walk-throughs, and you can watch the Mbano film on the home page.",
    route: '/virtual-tour',
    cta: 'Take the virtual tour',
  },
  {
    id: 'pool',
    keywords: ['pool', 'swimming', 'swim', 'plunge'],
    answer:
      "There is a swimming pool on the estate with light snacks and cocktails served around the pool area. Early-arriving guests are welcome to use the pool and gardens before check-in. The Mutota Forest Villa also has its own private plunge pool.",
    route: '/about-mbano',
    cta: 'More about the estate',
  },
  {
    id: 'family',
    keywords: ['family', 'families', 'children', 'kids', 'child'],
    answer:
      "Mbano warmly welcomes families. Two sets of four family-friendly suites interconnect via verandas for privacy with connectivity, and the Mutota Forest Villa (sleeps up to 6) includes a twin room and an informal lounge ideal for children. Chefs cater menus to your taste and the concierge arranges excursions suited to all ages.",
    route: '/luxury-suites',
    cta: 'See the family suites',
  },
  {
    id: 'romance',
    keywords: ['romance', 'romantic', 'honeymoon', 'anniversary', 'wedding', 'couple', 'for two', 'special occasion'],
    answer:
      "For romantic stays, Mbano arranges private sunrise breakfasts, couples' spa hours at Bayuni, private forest dinners, claw baths drawn for two, private Zambezi cruises, photographer sessions and stargazing under the Southern sky. The 'Romance & Seclusion' journey style on the Packages page is designed exactly for this.",
    route: '/mbano-packages',
    cta: 'Plan a romantic escape',
  },
  {
    id: 'wifi',
    keywords: ['wifi', 'internet', 'connectivity', 'network', 'signal', 'office', 'business', 'work'],
    answer:
      "Full high-speed internet connectivity is available throughout the Mutota Forest Villa and across the estate, and the villa includes a desk and executive chair — ideal for combining business with pleasure.",
    route: '/mutota-forest-villa',
    cta: 'See the villa',
  },
  {
    id: 'security',
    keywords: ['security', 'safe', 'safety', 'secure', 'gate', 'guarded'],
    answer:
      "Safety is taken seriously at Mbano — the property is secure with security at the front gate and around the grounds at all times, and staff are warm, helpful and attentive to guests' belongings.",
    route: '/guest-reviews',
    cta: 'Read what guests say',
  },
  {
    id: 'weather',
    keywords: ['weather', 'climate', 'season', 'best time', 'when to visit', 'month', 'rain', 'summer', 'winter', 'temperature'],
    answer:
      "Victoria Falls enjoys a warm climate year-round. The high-water season (roughly February–July) brings the Falls at their most thunderous with heavy spray, while the low-water season (roughly August–January) reveals the full sheer face of the gorge and is ideal for river activities like Devil's Pool. April–September generally offers dry, pleasant days. The concierge team can advise for your specific travel dates.",
    route: '/victoria-falls',
    cta: 'Explore the Falls',
  },
  {
    id: 'rates',
    keywords: ['rates', 'price', 'cost', 'how much', 'expensive', 'fee', 'charge', 'nightly', 'quote', 'tariff'],
    answer:
      "Rates vary by suite or villa, season and your travel dates. For an accurate, personalised quote, contact reservations on WhatsApp (https://api.whatsapp.com/send?phone=263788928776), email res@mbanomanorhotel.com, or call +263 (0)78 892 8776 — the team will craft a package around your plans.",
    route: '/book-now',
    cta: 'Request a quote',
  },
];

export const QUICK_TOPICS = [
  { label: 'Book a stay', query: 'How do I book a stay at Mbano?' },
  { label: 'Luxury suites', query: 'Tell me about the luxury suites' },
  { label: 'Mutota Villa', query: 'What is the Mutota Forest Villa?' },
  { label: 'Bayuni Spa', query: 'What does the spa offer?' },
  { label: 'Check-in times', query: 'What are check-in and check-out times?' },
  { label: 'Activities', query: 'What can I do at Victoria Falls?' },
  { label: 'Dining', query: 'What is dining like at the hotel?' },
  { label: 'Contact', query: 'How can I contact the hotel?' },
];

export const FALLBACK_ANSWER = {
  answer:
    "I couldn't find that in our knowledge base yet — but I'd love to help! Try asking about the luxury suites, the Mutota Forest Villa, Bayuni Spa, dining, Victoria Falls activities, bespoke packages, check-in times or how to book. For anything else, our reservations team is on WhatsApp (https://api.whatsapp.com/send?phone=263788928776) or res@mbanomanorhotel.com.",
};

// ------------------------------------------------------------
// Local search — used when no LLM API is configured.
// ------------------------------------------------------------

const normalize = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const scoreEntry = (entry, query) => {
  let score = 0;
  for (const kw of entry.keywords) {
    const key = kw.toLowerCase();
    if (query.includes(key)) {
      score += key.includes(' ') ? 3 : 1;
    }
  }
  return score;
};

export function findAnswer(rawQuestion) {
  const query = normalize(rawQuestion);
  if (!query) return FALLBACK_ANSWER;

  let best = null;
  let bestScore = 0;
  for (const entry of KB) {
    const score = scoreEntry(entry, query);
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  if (bestScore === 0) return FALLBACK_ANSWER;
  return { id: best.id, answer: best.answer, route: best.route, cta: best.cta };
}

export function buildContext() {
  return KB.map(
    (entry) => `${entry.title || entry.id}\n${entry.answer}`,
  ).join('\n\n');
}

// Backfill titles for the context builder
KB.forEach((entry, i) => {
  if (!entry.title) entry.title = entry.id.replace(/(^|_)(\w)/g, (m, p, c) => c.toUpperCase());
});

export default KB;
