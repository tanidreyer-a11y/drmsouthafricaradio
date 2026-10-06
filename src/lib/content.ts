// Real content compiled from the DRM SA GROUP site audit (drmsa.org).
// Every fact here is sourced from the live site — nothing invented.

export const siteMeta = {
  name: "DRM SA Group",
  fullName: "Digital Radio Mondiale South Africa Group",
  phone: "+27 76 504 7794",
  phoneHref: "tel:+27765047794",
  email: "info@drmsa.org",
  linkedin: "https://www.linkedin.com/in/drm-sa-582089328/",
  tagline: "The Static Is Over — Digital Radio Has Arrived",
};

export const nav = [
  { label: "News", href: "/news" },
  { label: "Home", href: "/" },
  { label: "What is DRM", href: "/what-is-drm" },
  { label: "Membership", href: "/membership" },
  { label: "About Us", href: "/about-us" },
];

export const trustMarks = [
  "ITU",
  "ETSI",
  "UNESCO World Radio Day",
  "DRM Consortium",
  "ICASA Test Licence",
  "Fraunhofer IIS",
];

type CaseStudy = {
  year: string;
  title: string;
  body: string;
  video?: string;
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    year: "2014",
    title: "South Africa's first DRM AM trial",
    body: "The DRM Consortium launched the Southern Africa Platform, spearheaded by Radio Pulpit's Managing Director — leading to South Africa's first successful DRM AM (mediumwave) trial.",
  },
  {
    year: "2015–2019",
    title: "Kofifi FM 97.2 proves DRM on FM",
    body: "The Johannesburg community station ran a successful DRM FM trial with Wecodec and local partners. The findings were recognised as an official ITU document.",
  },
  {
    year: "13 Feb 2026",
    title: "DRM in FM demonstration launches on 91.25 MHz",
    body: "Broadcasting from Northcliff, Johannesburg at 70W transmitter output, the demonstration carries Radio Pulpit and HOT 102.7 simultaneously on a single FM frequency — launched on UNESCO World Radio Day under an ICASA test licence.",
    video: "https://youtu.be/a99veSmJXO8",
  },
  {
    year: "14–15 Apr 2026",
    title: "Regional collaboration with Mozambique",
    body: "DRM SA hosted a delegation from INCM Mozambique and Radio Mozambique at its demonstration site, with a joint meeting with Sentech SOC Ltd, South Africa's national signal distributor.",
    image: "/images/event-mozambique-1.jpeg",
  },
];

type Member = { name: string; logo?: string; note: string };

export const members: Member[] = [
  { name: "HOT 102.7FM", logo: "/images/member-hot1027.png", note: "Commercial broadcaster" },
  { name: "LSofSA", logo: "/images/member-lsofsa.png", note: "RF engineering, est. 1999" },
  { name: "Radio Pulpit", note: "DRM AM & FM pioneer" },
  { name: "Kofifi FM 97.2", note: "Community broadcaster" },
  { name: "BluLemon", note: "Transmitter & antenna systems" },
  { name: "Sentech", note: "National signal distributor" },
];

export const membershipTiers = [
  {
    tier: "Full Member",
    eligibility: [
      "Public, commercial & large community broadcasters",
      "Media houses and content providers",
      "Streaming services with a broadcast licence",
      "Signal distributors",
      "Receiver and motor vehicle manufacturers",
    ],
    benefit:
      "Strategic influence, early access to insights, invitations to high-level forums, and a seat at the table shaping the future of digital radio in Africa.",
  },
  {
    tier: "Associate Member",
    eligibility: [
      "Higher learning institutions",
      "Industry associations",
      "Government departments and public entities",
    ],
    benefit:
      "Stay connected to industry developments, benefit from knowledge exchange, and help foster innovation and research around digital broadcasting.",
  },
  {
    tier: "Individual Member",
    eligibility: [
      "Small community radio stations",
      "Online-only radio stations (no broadcast licence)",
      "Passionate individuals and independent audio creators",
    ],
    benefit:
      "Access to the tools, resources and support to grow in the digital space, as part of a greater movement.",
  },
];

type NewsArticle = {
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  image?: string;
  video?: string;
  gallery?: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "mozambique-collaboration",
    date: "2026-04-15",
    category: "Local News",
    title: "Strengthening regional collaboration in digital broadcasting",
    excerpt:
      "We hosted the delegation from INCM Mozambique and Radio Mozambique at the DRM South Africa demonstration site for a strategic engagement on the future of digital radio across the continent.",
    body: [
      "We were honoured to host the delegation from INCM Mozambique and Radio Mozambique at the DRM South Africa demonstration site for a strategic engagement on the future of digital radio across the continent.",
      "The visit, which took place on the 14th–15th April 2026, provided a valuable platform to assess the current DRM implementation, including technical infrastructure, operational capabilities, and the broader ecosystem required to support sustainable digital sound broadcasting. It also enabled a constructive exchange of insights on how DRM technology can enhance spectrum efficiency, expand coverage, and improve the overall quality of broadcasting services. The delegation also met with Sentech SOC Ltd to learn more about Sentech's capabilities as a national signal distributor.",
      "As Mozambique evaluates the next phase of its digital radio journey, engagements of this nature are critical in informing decision-making and ensuring long-term impact.",
      "We look forward to continued collaboration in advancing a more resilient, inclusive, and future-ready broadcasting landscape for Africa.",
    ],
    image: "/images/event-mozambique-1.jpeg",
  },
  {
    slug: "fm-demonstration-launch",
    date: "2026-02-13",
    category: "Local News",
    title: "South Africa launches DRM in FM demonstration on 91.25 MHz",
    excerpt:
      "The DRM Southern Africa Group has officially launched its DRM in FM demonstration from the Northcliff site in Johannesburg, broadcasting Radio Pulpit and HOT 102.7 on a single frequency.",
    body: [
      "The DRM Southern Africa (DRM SA) Group has officially launched its DRM in FM demonstration from the Northcliff site in Johannesburg.",
      "Broadcasting on 91.25 MHz at 70W transmitter output power, the showcase carries multiple services — Radio Pulpit, HOT 102.7 amongst others — on a single FM frequency using Digital Radio Mondiale (DRM).",
      "Launched on UNESCO World Radio Day, the demonstration highlights key DRM capabilities including multi-channel broadcasting, Emergency Warning Functionality (EWF), Journaline-based information services, and improved energy efficiency.",
      "The initiative brings together broadcasters, technology partners, receiver manufacturers and industry stakeholders to showcase the future of digital sound broadcasting in South Africa. The transmitter installation and antenna system were implemented by BluLemon, a member of the DRM SA Group. Supporting technology partners include Fraunhofer IIS (DRM ContentServer and MultimediaPlayer), RFmondial, Starwaves, and the DRM Consortium and Programme Office.",
    ],
    video: "https://youtu.be/a99veSmJXO8",
    image: "/images/wrd-flyer-1.png",
  },
  {
    slug: "world-radio-day-training",
    date: "2026-01-20",
    category: "Global",
    title: "Free training and special broadcasts for UNESCO World Radio Day 2026",
    excerpt:
      "The DRM Consortium showcased AI-enabled e-learning via digital radio, with live training sessions and first-ever global demonstration broadcasts across five continents.",
    body: [
      "The DRM Consortium was part of UNESCO World Radio Day 2026 on an unprecedented scale, showcasing AI-enabled e-learning via digital radio.",
      "On 13 February 2026, DRM specialists demonstrated how DRM digital broadcasts can deliver distance-learning content — audio, text and images — live or for later use, in one or more languages, via two live sessions (09:00 and 15:00 UTC).",
      "DRM partners also ran the first global demonstration broadcasts on shortwave across five continents, and for the first time, in DRM FM — including the DRM SA Group's own Johannesburg demonstration, showcasing education-focused digital radio content for the first time anywhere in the world.",
    ],
    image: "/images/wrd-flyer-2.png",
  },
  {
    slug: "hot1027-joins",
    date: "2025-11-03",
    category: "Partnerships",
    title: "HOT 102.7FM joins the DRM SA family",
    excerpt:
      "One of South Africa's fastest-growing and most innovative commercial radio stations has officially joined the DRM South Africa Group as a member.",
    body: [
      "We are excited to announce that HOT 102.7FM has officially joined the DRM South Africa (DRM SA) Group as a member.",
      "As one of South Africa's fastest-growing and most innovative commercial radio stations, HOT 102.7FM brings real momentum to the movement.",
      "We look forward to collaborating with the HOT 102.7FM team as we continue driving the adoption of Digital Radio Mondiale across the region. Welcome to the movement. Welcome to the future.",
    ],
    image: "/images/member-hot1027.png",
  },
  {
    slug: "icasa-test-licence",
    date: "2025-09-18",
    category: "Local News",
    title: "DRM SA Group secures ICASA test licence for DRM in FM demonstrations",
    excerpt:
      "A major milestone in the digital radio journey, with the approval of a test licence enabling the DRM in FM demonstration to proceed.",
    body: [
      "The DRM Southern Africa Group has reached a major milestone in its digital radio journey with the approval of a test licence from ICASA, South Africa's communications regulator.",
      "The trial focuses on demonstrating DRM's advanced capabilities, including Emergency Warning Functionality, multi-channel broadcasting and improved energy efficiency.",
      "With the licence secured, the DRM SA Group, together with the DRM Consortium, can now proceed with completion of the demonstration — a significant step forward for digital radio in South Africa.",
    ],
    image: "/images/event-mozambique-3.jpeg",
  },
  {
    slug: "lsofsa-joins",
    date: "2025-07-22",
    category: "Partnerships",
    title: "Welcoming LSofSA to DRM Southern Africa",
    excerpt:
      "With a legacy dating back to 1999, LSofSA brings deep expertise in radio-frequency engineering to the newest member of our regional DRM community.",
    body: [
      "DRM Southern Africa is pleased to welcome LS of South Africa (LSofSA) as the newest member of our regional DRM community.",
      "With a strong legacy dating back to 1999, LSofSA brings deep expertise in radio-frequency engineering. As a member of the DRM SA group, LSofSA will collaborate with broadcasters, regulators and manufacturers to advance digital radio adoption.",
    ],
    image: "/images/member-lsofsa.png",
  },
  {
    slug: "first-webinar",
    date: "2025-10-09",
    category: "Global",
    title: "First DRM webinar successfully organised by the DRM SA Group",
    excerpt:
      "Broadcasters, industry experts and technology partners explored the progress and potential of Digital Radio Mondiale in South Africa.",
    body: [
      "To explore the progress and potential of Digital Radio Mondiale (DRM) in South Africa and Southern Africa, the DRM SA Group organised its first DRM Southern Africa webinar in October.",
      "The event brought together broadcasters, industry experts, and technology partners. Presentations made by South African experts and colleagues in the umbrella DRM Consortium highlighted DRM's efficiency in energy and spectrum use, and its ability to broadcast multiple channels on a single frequency.",
      "To increase audience engagement, attendees participated in live Slido polls — a direct way to gauge industry sentiment on digital radio adoption.",
    ],
    image: "/images/webinar-1.png",
    gallery: ["/images/webinar-poll-1.png", "/images/webinar-poll-2.png", "/images/webinar-poll-3.png"],
  },
];

export const whatIsDrm = {
  intro:
    "The Digital Radio Mondiale (DRM) broadcasting system has been designed by broadcasters, for broadcasters, with the active assistance and participation of both transmitter and receiver manufacturers and other interested parties, such as regulatory bodies.",
  openStandard:
    "DRM is an open standard — its system description is openly published, giving all manufacturers and interested parties free access to the complete technical specifications. They can design and manufacture equipment on an equitable basis without paying a licence fee to the DRM Consortium. This has proved an important mechanism for the timely introduction of new systems to market, and for accelerating the rate at which equipment prices fall.",
  noFees:
    "There is no per-use fee, annual payment, or similar cost for DRM technology — not for broadcasters or network operators, nor for broadcast or receiver equipment manufacturers. The DRM Consortium is not involved in managing or receiving any IPR royalty for DRM products; royalties are paid directly to the individual IPR holders, unless already resolved by a component supplier (e.g. for a DRM receiver module).",
  bands:
    "DRM is the only global digital radio standard that embraces all the currently used radio frequency bands. It was designed specifically as a high-quality digital replacement for former analogue radio broadcasting in the AM and FM/VHF bands, and can be operated with the same channelling and spectrum allocations already employed.",
  modes: [
    {
      name: "Below 30 MHz",
      detail:
        "Four different robustness modes tailor the DRM signal for AM broadcast bands and their diverse propagation characteristics — enabling regional up to international service coverage.",
    },
    {
      name: "Above 30 MHz",
      detail:
        "A dedicated robustness mode, centred on the FM broadcast band and optimised for VHF transmissions, is used for local to regional service coverage.",
    },
  ],
  regulatory:
    "DRM has received the necessary recommendations from the ITU, providing international regulatory support for transmissions. The main DRM standard is published by ETSI, which also publishes and holds the repository of the entire range of current DRM technical standards.",
  benefits:
    "DRM allows a broadcaster to provide listeners with significant improvements in service reliability, audio quality and, most importantly, usability — with features and facilities impossible to replicate in analogue broadcasting. It is essential that prospective broadcasters understand the potential and flexibility of the system to optimise and configure their DRM networks for their own market conditions.",
};

export const about = {
  lead: "The DRM SA GROUP is the revitalised voice of digital radio in South Africa — a bold new chapter born from the re-launch of what was formerly known as the DRM SA PLATFORM, now under the banner of the DRM Consortium.",
  mission:
    "Following the South African government's July 2020 policy directive on introducing Digital Sound Broadcasting, the timing was perfect to re-ignite efforts to drive awareness, engagement and adoption of the Digital Radio Mondiale (DRM) standard in the region. Our mission: to prepare Southern Africa's radio landscape for its digital evolution.",
  legacy:
    "The journey toward digital radio began over two decades ago in South Africa. In 2014, the DRM Consortium launched the Southern Africa Platform, spearheaded by the Managing Director of Radio Pulpit — leading to South Africa's first successful DRM trial on AM (mediumwave). Soon after, Kofifi FM 97.2, a community station in Johannesburg, achieved a successful DRM trial on FM, supported by Wecodec and local partners — findings that have been recognised as an official ITU document, ready for global publication.",
  objectives: [
    "Promote DRM as the digital broadcasting standard of choice for South Africa and beyond",
    "Build widespread awareness among broadcasters, government, manufacturers, suppliers, retailers and the public",
    "Champion adoption and influence key stakeholders across the radio ecosystem",
    "Serve as South Africa's trusted DRM authority, offering credible, up-to-date information and guidance on all things DRM",
  ],
  whyNow:
    "DRM is a global digital radio standard that works across all frequency bands — AM, FM, SW and VHF. It's tailor-made for countries with large, diverse geographies like those in Southern Africa. Whether a national broadcaster, regional station or grassroots community radio operator, DRM delivers crystal-clear audio, interactive content and enhanced services to more people than ever before. It's cost-effective, spectrum-efficient, energy-saving, and ready for Africa.",
  global:
    "DRM SA is proud to stand alongside national DRM platforms from countries like India, Germany, Brazil, Russia and the USA, all working toward a shared global vision: the digital transformation of radio. We are a non-profit group committed to supporting broadcasters, communities and governments in making this digital leap together.",
  closing: "Let's broadcast the future — together.",
};

// Local News posts, copied from the drmsa.org News page. Inline links use
// [text](url) and are rendered by RichText.
export type PostBlock =
  | string
  | { heading: string }
  | { list: (string | { text: string; items: string[] })[] };

export type LocalNewsPost = {
  slug: string;
  title: string;
  image?: string;
  imageFit?: "contain";
  video?: string;
  gallery?: string[];
  galleryTitle?: string;
  body: PostBlock[];
};

export const localNews: LocalNewsPost[] = [
  {
    slug: "mozambique-collaboration",
    title: "Strengthening regional collaboration in digital broadcasting",
    image: "/images/news/mozambique-1.jpeg",
    gallery: [
      "/images/news/mozambique-2.jpeg",
      "/images/news/mozambique-1.jpeg",
      "/images/news/mozambique-3.jpeg",
      "/images/news/mozambique-5.jpeg",
      "/images/news/mozambique-6.jpeg",
      "/images/news/mozambique-4.jpeg",
    ],
    body: [
      "We were honored to host the delegation from [INCM Mozambique](https://www.incm.gov.mz/) and [Radio Mozambique](https://www.rm.co.mz/) at the DRM South Africa demonstration site for a strategic engagement on the future of digital radio across the continent.",
      "The visit which took place on the 14th-15th April 2026, provided a valuable platform to assess the current DRM implementation, including technical infrastructure, operational capabilities, and the broader ecosystem required to support sustainable digital sound broadcasting. It also enabled a constructive exchange of insights on how DRM technology can enhance spectrum efficiency, expand coverage, and improve the overall quality of broadcasting services. The delegation also met with Sentech SOC Ltd to learn more about Sentech’s capabilities as a national signal distributor.",
      "As Mozambique evaluates the next phase of its digital radio journey, engagements of this nature are critical in informing decision-making and ensuring long-term impact.",
      "We look forward to continued collaboration in advancing a more resilient, inclusive, and future-ready broadcasting landscape for Africa.",
    ],
  },
  {
    slug: "fm-demonstration-launch",
    title: "South Africa Launches DRM in FM Demonstration on 91.25 MHz",
    image: "/images/news/fm-demo-video.png",
    video: "https://youtu.be/a99veSmJXO8",
    gallery: ["/images/aldred-russel.png"],
    body: [
      "The DRM Southern Africa (DRM SA) Group has officially launched its DRM in FM demonstration from the Northcliff site in Johannesburg.",
      "Broadcasting on 91.25 MHz at 70W transmitter output power, the showcase carries multiple services — Radio Pulpit, HOT 102.7 amongst others — on a single FM frequency using Digital Radio Mondiale (DRM).",
      "Launched on UNESCO World Radio Day, the demonstration highlights key DRM capabilities including multi-channel broadcasting, Emergency Warning Functionality (EWF), Journaline-based information services, and improved energy efficiency.",
      "The initiative brings together broadcasters, technology partners, receiver manufacturers and industry stakeholders to showcase the future of digital sound broadcasting in South Africa.",
    ],
  },
  {
    slug: "fm-demonstration-world-radio-day",
    title: "South Africa Launches DRM in FM Demonstration on World Radio Day",
    image: "/images/tower-dusk.jpeg",
    body: [
      "The DRM Southern Africa (DRM SA) Group will officially launch a DRM in FM demonstration and showcase on Friday, 13 February 2026, coinciding with UNESCO World Radio Day. The demonstration marks an important step in South Africa’s journey toward digital sound broadcasting and forms part of DRM’s global partnership with UNESCO in support of World Radio Day.",
      "The DRM in FM demonstration will broadcast a live digital radio signal from a high-site in Northcliff, Johannesburg, operating at 70 watts transmitter output power on 91.25 MHz. Multiple radio services will be carried simultaneously on a single FM frequency, including Radio Pulpit, HOT1027, amongst others.",
      "The demonstration is conducted under a test licence issued by ICASA, South Africa’s communications regulator, and is intended to showcase the technical, commercial, and public-interest benefits of Digital Radio Mondiale (DRM) operating in the FM band.",
      { heading: "World Radio Day and UNESCO Partnership" },
      "The launch takes place on World Radio Day, celebrated annually by UNESCO to recognise radio as a powerful medium for education, information, and social connection. DRM is an official partner of UNESCO World Radio Day, and the South African demonstration actively contributes to this global initiative.",
      "As part of the World Radio Day programme, the DRM in FM platform will also be used to showcase education-focused and informational digital radio content, demonstrating how DRM can support learning, accessibility, and public communication through data services such as Journaline. This is a world first for DRM.",
      { heading: "Objectives of the DRM in FM Demonstration" },
      "The demonstration aims to:",
      {
        list: [
          "Create awareness of DRM among broadcasters, regulators, industry stakeholders, and the public",
          {
            text: "Demonstrate key DRM features and benefits, including:",
            items: [
              "Distance learning and information services via Journaline",
              "Emergency Warning Functionality (EWF) for public safety communications",
              "Multi-channel broadcasting using a single FM transmitter",
              "Energy efficiency compared to analogue FM transmission",
            ],
          },
          "Test business and operational processes for a digital radio broadcast service, including potential new revenue models and cost efficiencies",
          "Stimulate the local DRM receiver ecosystem, including automotive, mobile, and standalone receivers",
          "Engage the automotive industry, including stakeholders such as naamsa, to support future digital sound broadcasting (DSB) adoption",
        ],
      },
      "The demonstration also highlights that DRM is currently the only digital radio standard capable of serving all coverage needs — from national and regional coverage to local and community broadcasting — making it particularly well suited to a country with South Africa’s geographic and demographic diversity.",
      { heading: "Technology and Supporting Partners" },
      "The DRM in FM transmission uses professional DRM broadcast equipment previously deployed in South Africa during earlier technical evaluations. The transmitter installation and antenna system have been implemented by [BluLemon](https://blulemon.net/), a member of the DRM SA Group.",
      "The demonstration is supported by a broad ecosystem of DRM technology partners, including:",
      {
        list: [
          "Fraunhofer IIS, providing DRM [ContentServer](https://www.iis.fraunhofer.de/en/ff/amm/broadcast-streaming/drmcontentserver.html) and [MultimediaPlayer](https://www.iis.fraunhofer.de/en/ff/amm/broadcast-streaming/multimediaplayer.html) technologies",
          "RFmondial",
          "[Starwaves](https://starwaves.com/)",
          "[DRM Consortium](http://www.drm.org/) and Programme Office, providing coordination, technical guidance, and international support",
        ],
      },
      "This collaborative approach brings together broadcasters, signal distributors, technology providers, receiver manufacturers, automotive stakeholders, and policy bodies to demonstrate DRM in a real-world South African FM environment.",
      { heading: "Looking Ahead" },
      "Insights gained from the DRM in FM demonstration will contribute to future digital radio planning in South Africa, support broadcasters evaluating DRM adoption, and inform the development of practical implementation guidance for both South Africa and the wider African region.",
    ],
  },
  {
    slug: "world-radio-day-training",
    title: "Digital Radio Mondiale DRM – Free Training & Special Broadcasts on UNESCO World Radio Day 2026",
    image: "/images/news/edu-trial.png",
    gallery: ["/images/news/edu-page-1.png", "/images/news/edu-page-2.png", "/images/news/edu-page-3.png"],
    body: [
      "The [DRM Consortium](https://www.drm.org/drm-celebrates-unesco-world-radio-day-2026-with-special-training-and-broadcasts/) will be part of the UNESCO World Radio Day 2026 on an unprecedented scale by showcasing AI-enabled e-learning via digital radio.",
      { heading: "Live Training Sessions" },
      "On 13 February 2026, DRM specialists will demonstrate how DRM digital broadcasts can deliver distance learning content – audio, text and images – live or for later use, in one or more languages. And you still have time to register for the Live Training Sessions: AI-Enabled E-Learning via DRM Digital Radio.",
      "Participants worldwide can register via the link below and select the time slot that best fits their time zone:",
      { list: ["📅 Friday, 13 February 2026", "🕘 Option 1: 09:00 UTC", "🕒 Option 2: 15:00 UTC"] },
      "[Register Here](https://s.drm.org/register-wrd-2026)",
      { heading: "DRM for Education: Global Demonstrations" },
      "DRM partners are also planning for the first time global demonstration broadcasts on shortwave across five continents and, also, for the first time in DRM FM!",
      "Thus, the DRM Southern Africa (DRM SA) Group will officially launch a DRM in FM demonstration and showcase distance learning content on Friday, 13 February 2026, coinciding with UNESCO World Radio Day. The demonstration is part of DRM’s global partnership with UNESCO in support of World Radio Day. The DRM in FM demonstration, the first of its kind using educational content, will consist of a live digital radio signal broadcast from a high site in Northcliff, Johannesburg, operating at 70 watts transmitter output power on 91.25 MHz. Multiple radio services will be carried simultaneously on a single FM frequency, including Radio Pulpit, Hot 102.7, amongst others.",
      "Please check the [complete World Radio Day DRM broadcast schedule](https://www.drm.org/global-drm-goes-worldwide-with-education-content-on-unesco-world-radio-day/).",
      "We would welcome reception reports from listeners and partners, including audio recordings, photos, or short videos documenting the reception of DRM educational broadcasts. Please send any material to [projectoffice@drm.org](mailto:projectoffice@drm.org). A selection of the best contributions will be mentioned on the DRM communication channels.",
    ],
  },
  {
    slug: "hot1027-joins",
    title: "🔥 Things Just Got HOT: HOT 102.7FM Joins the DRM SA Family!",
    image: "/images/news/hot1027.png",
    imageFit: "contain",
    body: [
      "We are excited to announce that [HOT 102.7FM](https://hot1027.co.za/) has officially joined the DRM South Africa (DRM SA) Group as a member.",
      "As one of South Africa’s fastest-growing and most innovative commercial radio stations, HOT 102.7FM brings energy, industry insight, and a strong listener-focused approach to the DRM SA community. Their commitment to broadcast excellence and audience engagement aligns perfectly with DRM SA’s mission to advance digital radio and future-ready broadcasting across the region.",
      "We look forward to collaborating with the HOT 102.7FM team as we continue driving the adoption of Digital Radio Mondiale (DRM) technology and shaping the future of radio in Southern Africa.",
      "Welcome to the movement. Welcome to the future. 🔥",
    ],
  },
  {
    slug: "icasa-test-licence",
    title: "DRM SA Group Secures ICASA Test License for DRM in FM Demonstrations",
    image: "/images/news/icasa-licence.png",
    body: [
      "The DRM Southern Africa Group has reached a major milestone in its digital radio journey with the approval of its DRM in FM demonstration licence, issued by ICASA in November 2025. This regulatory green light establishes the foundation needed to move forward with South Africa’s first coordinated DRM in FM trial - an initiative aimed at showcasing the value of Digital Radio Mondiale as the country accelerates its shift toward digital sound broadcasting since the regulator already recommended DRM (and DAB) as its digitisation path.",
      "The trial will focus on demonstrating DRM’s advanced capabilities, including Emergency Warning Functionality (EWF), distance learning through Journaline, multi-channel broadcasting on a single FM transmitter, and significant energy-efficiency gains. Alongside the technical demonstrations, the project will assess digital-era business processes for broadcasters, explore new revenue opportunities, and stimulate local receiver manufacturing across portable, in-car, and mobile platforms. Key stakeholders—including broadcasters, signal distributors, the automotive industry, government entities, and receiver manufacturers—will be actively involved throughout the 8-month demonstration period.",
      "With the license secured, the DRM SA Group together with the [DRM Consortium](http://www.drm.org/), can now proceed with completion of the transmitter installation, equipment integration for data services, awareness-building, and project coordination. As outlined in the official project brief, the objective is not only to validate the technical and economic feasibility of DRM in the FM band, but also to produce an implementation guide for community broadcasters and provide meaningful insights on how DRM can support national development goals through education, access to information, and emergency communication.",
      "This landmark approval marks a significant step forward for digital radio in South Africa and reinforces the momentum behind DRM as a modern, flexible, and future-proof solution for the broadcasting ecosystem.",
    ],
  },
  {
    slug: "lsofsa-joins",
    title: "Welcoming LSofSA to DRM Southern Africa",
    image: "/images/news/lsofsa.png",
    imageFit: "contain",
    body: [
      "DRM Southern Africa is pleased to welcome [LS of South Africa (LSofSA)](https://www.lsofsa.co.za/home/) as the newest member of our regional DRM community. With a strong legacy dating back to 1999, LSofSA brings deep expertise in radio-frequency engineering, spectrum management, broadcast network planning, and advanced monitoring solutions. Their longstanding contribution to Southern Africa’s communications landscape aligns closely with DRM’s mission of promoting efficient, future-proof, and inclusive digital radio technologies in the region.",
      "As a member of the DRM SA group, LSofSA will collaborate with broadcasters, regulators, manufacturers, and industry bodies to strengthen the technical foundation for digital radio deployment across Southern Africa. Their proven capabilities in planning, designing, and supporting complex RF and broadcast networks significantly enhance the group’s collective capacity. We look forward to partnering with LSofSA as we continue building a robust ecosystem to support the adoption and growth of Digital Radio Mondiale in the region.",
    ],
  },
  {
    slug: "first-webinar",
    title: "First DRM Webinar Successfully Organised by the DRM SA Group",
    image: "/images/news/webinar.png",
    galleryTitle: "DRM SA Webinar Audience Poll Results",
    gallery: [
      "/images/news/webinar-poll-1.png",
      "/images/news/webinar-poll-2.png",
      "/images/news/webinar-poll-3.png",
      "/images/news/webinar-poll-4.png",
      "/images/news/webinar-poll-5.png",
    ],
    body: [
      "To explore the progress and potential of Digital Radio Mondiale (DRM) in South Africa and Africa the DRM SA Group organised its first DRM Southern Africa Webinar on 22 October. The event brought together broadcasters, industry experts, and technology partners to explore the progress and potential of DRM in the region. Presentations made by South African experts and colleagues in the umbrella DRM Consortium highlighted DRM’s efficiency in energy and spectrum use, its ability to broadcast multiple channels on a single frequency, and its applications in education and emergency communication.",
      "To increase audience engagement, attendees participated in live Slido polls, a way to provide live feedback and share their own perspectives. These showed that over half of the participants were already familiar with DRM, while another 25% were somewhat familiar. Interestingly, 43% identified commercial radio and advertising as the sector most likely to benefit from DRM, followed by community radio (29%). A big vote of confidence and interest were shown for the potential of DRM in education/distance learning (29%).",
      "As to the challenges and barriers to implementation, costs and limited awareness were cited as the most important, though 56% rated DRM’s energy and spectrum efficiency as “very valuable” to broadcasters. The webinar concluded with a strong call for on-air demonstrations, business plan development, and broader public education as those involved in the event reaffirmed collective commitment to advancing digital radio adoption across Southern Africa.",
    ],
  },
  {
    slug: "webinar-shaping-the-future",
    title: "Shaping the Future of Radio - Webinar",
    image: "/images/news/webinar-invite.jpg",
    body: [
      "Digital Radio Mondiale (DRM) is transforming the way radio is broadcast and consumed – delivering superior audio quality, energy efficiency, and new opportunities for broadcasters and listeners alike. The DRM Southern Africa Group is excited to share the latest progress, upcoming trials, and regional initiatives shaping the next chapter of broadcasting.",
      "When: 22 October 2025",
      "Time: 11h00 - 12h00 SAST",
      "Register here [s.drm.org/drm-sa-2025-zoom-registration](https://s.drm.org/drm-sa-2025-zoom-registration) to join us for an exclusive webinar on the future of radio in Southern Africa.",
    ],
  },
];
