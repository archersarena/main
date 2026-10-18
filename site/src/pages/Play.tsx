import { Link } from "react-router-dom";
import { img } from "../content";
import { Footer, Scene, TopNav, useScrollTopOnMount } from "../components";

// The fast door — deliberately the shallowest journey on the site.
// A friend group wants tonight's options in ten seconds, not cinema.
const GAMES = [
  { name: "Combat Archery", line: "The headliner. Foam-tipped, coach-run.", photo: img.heroCourt },
  { name: "Nerf Wars", line: "Blasters, barricades, chaos.", photo: img.dodgeball },
  { name: "Bubble Soccer", line: "Full-contact, zero bruises.", photo: img.bubble },
  { name: "Blacklight Dodgeball", line: "The classic, glowing.", photo: img.lounge },
];

export default function Play() {
  useScrollTopOnMount();
  return (
    <>
      <TopNav bookTo="#book" />
      <Scene photo={img.bubble} alt="Bubble soccer on the court" eyebrow="The play door"
        title={<>This weekend.<br />Sorted.</>}
        copy="Grab your crew, pick your games, and a coach runs the whole session. Groups usually come 8 to 12 strong."
        cue>
        <div className="cta"><a href="#book" className="pillbtn pb-red">See times &amp; book</a></div>
      </Scene>

      <section className="scene lite">
        <div className="fg gut doors-fg">
          <p className="eyebrow red">Pick your games</p>
          <h2>One hour. Your rules.</h2>
          <div className="gamegrid">
            {GAMES.map((g) => (
              <div key={g.name} className="gamecard">
                <img src={g.photo} alt="" />
                <span className="sc" />
                <span className="tx"><span className="dn">{g.name}</span><span className="dd">{g.line}</span></span>
              </div>
            ))}
          </div>
          <p className="pnote" style={{ textAlign: "left", marginInline: 0 }}>
            Mix any of them into one booking — one activity for an hour, or stack two or three for a longer session.
          </p>
        </div>
      </section>

      <Scene mid eyebrow="Bringing everyone?" eyebrowRed
        title={<>20 or more people?<br />That's a team event.</>}
        copy="Two courts, the karaoke lounge, the party room, food, one contact who handles it all.">
        <div className="cta"><Link to="/corporate" className="pillbtn pb-ghost">Open the Team events door</Link></div>
      </Scene>

      <section className="scene lite" id="book">
        <div className="fg gut book-fg">
          <p className="eyebrow red">Lock it in</p>
          <h2>Pick a night. Show up.</h2>
          <p className="copy">Evenings and weekends are when the courts run. Live times and per-person pricing are being wired in — until then, booking runs through the current system.</p>
          <div className="cta">
            <a href="https://archersarena.com" className="pillbtn pb-red">Book on the current site</a>
            <Link to="/" className="pillbtn pb-ghost">Back to the lobby</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
