// The editable layer. Every word a visitor reads lives here (door copy, packages, doors),
// so tuning the sales script is an edit in one file — and later a database row — never a layout change.
import heroCourt from "./assets/hero-court.jpg";
import dodgeball from "./assets/dodgeball.jpg";
import bubble from "./assets/bubble.jpg";
import archery from "./assets/archery.jpg";
import lounge from "./assets/lounge.jpg";

export const img = { heroCourt, dodgeball, bubble, archery, lounge };

export interface Door {
  path: string;
  name: string;
  line: string;
  photo?: string;
}

// The lobby's five doors, in the customer's own words. Order = sales priority.
export const DOORS: Door[] = [
  { path: "/birthday", name: "Celebrate", line: "Birthdays & big days — walk one through", photo: dodgeball },
  { path: "/play", name: "Play", line: "Combat archery, Nerf, bubble soccer with your crew", photo: bubble },
  { path: "/corporate", name: "Team events", line: "Corporate & groups of 20+", photo: heroCourt },
  { path: "/learn", name: "Learn", line: "Archery training & 8-week courses", photo: archery },
  { path: "/train", name: "Train", line: "Boxing, HIIT & strength — Arena Fitness" },
];

export interface Pkg {
  key: string;
  toggle: string;
  price: string;
  priceCents: number;
  cap: string;
  summary: string;
  lines: string[];
}

// Prices as sold in Bookeo today. Inclusions are placeholders until the package sheet lands.
export const PACKAGES: Pkg[] = [
  {
    key: "activities",
    toggle: "Activities · up to 10",
    price: "$849",
    priceCents: 84900,
    cap: "up to 10 players",
    summary: "Activities Package · up to 10 players · $849 + tax",
    lines: [
      "Private court time with your own coach",
      "Party room for the food and the cake",
      "Bring your own food and drinks",
    ],
  },
  {
    key: "ultimate",
    toggle: "Ultimate · up to 16",
    price: "$1,699",
    priceCents: 169900,
    cap: "up to 16 players",
    summary: "Ultimate Package · up to 16 players · $1,699 + tax",
    lines: [
      "More players, more court, more games",
      "Party room for the food and the cake",
      "Full inclusions from the package sheet",
    ],
  },
];

// Stub-door copy until each full journey is built.
export const STUBS: Record<string, { name: string; head: string; copy: string; photo?: string; dark: boolean }> = {
  "/play": {
    name: "Play",
    head: "Something to do this weekend. Sorted.",
    copy: "Combat archery, Nerf wars, bubble soccer and blacklight dodgeball with your crew — price per person, next open slots, book in minutes. The full Play experience is being built; call or book the classics today.",
    photo: bubble,
    dark: true,
  },
  "/corporate": {
    name: "Team events",
    head: "Does Thursday work for 18 people?",
    copy: "Corporate and big-group events: two courts for 24+, the karaoke lounge, the party room, food options and one contact who handles everything. Tell us the date and the headcount — we do the rest.",
    photo: heroCourt,
    dark: true,
  },
  "/learn": {
    name: "Learn",
    head: "From first arrow to Level 7.",
    copy: "Beginner archery training, the 8-week courses with real levels, and metal-tip training when you're ready. Our most-booked thing — book a first lesson and see why.",
    photo: archery,
    dark: true,
  },
  "/train": {
    name: "Train",
    head: "Boxing. HIIT. Strength.",
    copy: "Arena Fitness is the gym side of the building — coach-led classes, a $21 trial week, and an app that tracks everything. It has its own home:",
    dark: false,
  },
};

export const FITNESS_URL = "https://app.arenafitness.ca/v2/start";
