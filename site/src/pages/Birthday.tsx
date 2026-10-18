import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { img, PACKAGES } from "../content";
import { BookPill, Countdown, Footer, Scene, TopNav } from "../components";

/** Next six weekend slots, starting ~2 weeks out (moms book a median 19 days ahead).
    Placeholder until the booking backend serves real availability. */
function sampleDates() {
  const out: { label: string; time: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 14);
  const fmt = new Intl.DateTimeFormat("en-CA", { weekday: "short", month: "short", day: "numeric" });
  while (out.length < 6) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() === 6 || d.getDay() === 0) {
      out.push({ label: fmt.format(d).replace(/\./g, ""), time: d.getDay() === 0 ? "11:00 AM" : "2:00 PM" });
    }
  }
  return out;
}

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Birthday parties at Archers Arena",
  description:
    "Coach-run blacklight combat archery birthday parties in North York, Toronto. Packages for up to 10 or up to 16 players with private court time and a party room.",
  provider: { "@type": "LocalBusiness", name: "Archers Arena", address: { "@type": "PostalAddress", addressLocality: "North York", addressRegion: "ON", addressCountry: "CA" } },
  offers: PACKAGES.map((p) => ({ "@type": "Offer", name: `${p.toggle}`, price: (p.priceCents / 100).toFixed(2), priceCurrency: "CAD" })),
};

export default function Birthday() {
  const [pkg, setPkg] = useState(PACKAGES[0]);
  const [picked, setPicked] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);
  const dates = useMemo(sampleDates, []);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#book") document.getElementById("book")?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      <TopNav bookTo="#book" />

      <Scene mid eyebrow="The birthday door" eyebrowRed title={<>The birthday<br />they'll brag about.</>}
        copy="You bring the kids. We do everything else. Scroll — this is the party, exactly as it happens." cue>
        <div className="cta"><a href="#book" className="pillbtn pb-ghost">Skip to prices &amp; booking</a></div>
      </Scene>

      <Scene mid ghost="1:55 PM" eyebrow="Arrival" title="They arrive loud."
        copy="A coach meets your crew at the door. The gear is already out. Nothing from here is your job." />

      <Scene photo={img.archery} alt="Player in a face mask drawing a bow" eyebrow="2:05 PM · Gear up"
        title={<>Masks on.<br />Foam tips. Briefed.</>}
        copy="Every player masked, every arrow foam-tipped, every group briefed by a coach — same drill, every weekend."
        chips={["Coach-led brief", "Waivers done online"]} />

      <Scene photo={img.lounge} alt="Neon-lit lounge with booth seating" eyebrow="Meanwhile · Your spot"
        title={<>Your job<br />ended at the door.</>}
        copy="The room is set before you arrive — their table, your seat, a clear view of the court." />

      <Countdown />

      <Scene photo={img.heroCourt} game eyebrow="Lights down · Arena on"
        title={<>The part<br />they talk about.</>}
        copy="Arrows flying under blacklight, a coach calling the games, every kid in. This is what ends up in the group chat."
        chips={["Coach-run", "Everyone glows", "Nobody sits out"]} />

      <Scene mid ghost="3:30 PM" eyebrow="Lights up · Party room"
        title={<>Pizza's hot when<br />they come off court.</>}
        copy="Food lands as they do. Cake, candles, the loud retelling. We clear up — you take the credit." />

      <section className="scene lite" id="packages">
        <div className="fg gut pkg-fg">
          <p className="eyebrow red">Pick the size of the day</p>
          <h2>Two rooms.<br />Same best-day-ever.</h2>
          <div className="pkgtog" role="group" aria-label="Choose a package">
            {PACKAGES.map((p) => (
              <button key={p.key} aria-pressed={p.key === pkg.key} onClick={() => setPkg(p)}>{p.toggle}</button>
            ))}
          </div>
          <div className="price">{pkg.price}</div>
          <div className="pcap">{pkg.cap}</div>
          <ul className="plines">{pkg.lines.map((l) => <li key={l}>{l}</li>)}</ul>
          <p className="pnote">Add-ons: Karaoke Lounge, extra Party Room hours, more activities.</p>
        </div>
      </section>

      <section className="scene lite" id="trust">
        <div className="fg gut book-fg">
          <p className="eyebrow red">The real place</p>
          <h2>Real courts.<br />Real parties.</h2>
          <div className="duo">
            <img src={img.dodgeball} alt="Kid in a glowing pinnie on the blacklight court" />
            <img src={img.bubble} alt="Bubble soccer on the court" />
          </div>
          <p className="stars"><b>★★★★★</b> &nbsp;Google reviews from parents land here — pulled live, newest first.</p>
        </div>
      </section>

      <section className="scene lite" id="book">
        <div className="fg gut book-fg">
          <p className="eyebrow red">Lock it in</p>
          <h2>Pick a date. Done.</h2>
          <p className="copy">Most parties run Saturday and Sunday daytime. Live availability is being wired in — these are samples.</p>
          <div className="dates">
            {dates.map((d) => (
              <button key={d.label} aria-pressed={picked === d.label} onClick={() => setPicked(d.label)}>
                <b>{d.label}</b><small>{d.time} · sample</small>
              </button>
            ))}
          </div>
          <p className="book-summary">{pkg.summary}</p>
          <button className="pillbtn pb-red book-cta" onClick={() => setNote(picked
            ? `Almost there — online booking is being connected. ${picked} + the ${pkg.cap} package will go straight to the booking system.`
            : "Pick a date first.")}>Reserve this date — deposit holds it</button>
          {note && <p className="book-summary" role="status">{note}</p>}
          <p className="book-summary"><Link to="/">← Back to the lobby</Link></p>
        </div>
      </section>

      <BookPill label="Book this party" targetId="book" />
      <Footer />
    </>
  );
}
