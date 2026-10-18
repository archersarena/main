import { useState } from "react";
import { Link } from "react-router-dom";
import { img } from "../content";
import { Countdown, Footer, Scene, TopNav, useScrollTopOnMount } from "../components";

// The organizer has a date and a headcount before she has interest in the activity —
// so this door leads with availability, not the experience.
export default function Corporate() {
  useScrollTopOnMount();
  const [heads, setHeads] = useState(18);
  const [sent, setSent] = useState(false);
  return (
    <>
      <TopNav bookTo="#book" />
      <Scene photo={img.heroCourt} alt="The blacklight court set for two teams" eyebrow="The team events door"
        title={<>Does Thursday work<br />for 18 people?</>}
        copy="Tell us the date and the headcount — we come back with the plan: courts, games, rooms, food, one contact who handles everything."
        cue>
        <div className="cta"><a href="#book" className="pillbtn pb-red">Check a date</a></div>
      </Scene>

      <Scene mid eyebrow="The spaces" eyebrowRed
        title={<>Built for<br />the whole office.</>}
        copy="Two courts side by side for 24 and up. The karaoke lounge for up to 30. The party room for the food. Take one, or take the building."
        chips={["2 courts · 24+", "Karaoke lounge · up to 30", "Party room", "Food & drinks arranged"]} />

      <Countdown />

      <Scene photo={img.heroCourt} game eyebrow="Lights down · Arena on"
        title={<>Your accountant,<br />sniping the sales team.</>}
        copy="Titles don't survive blacklight. Foam arrows, coach-run games, and the quiet one on the team turning out to be deadly — that's the story they tell on Monday." />

      <section className="scene lite" id="book">
        <div className="fg gut book-fg">
          <p className="eyebrow red">Start the plan</p>
          <h2>Date. Headcount. Done.</h2>
          <p className="copy">This goes straight to the events desk; you hear back within a day.</p>
          <div className="enquiry">
            <label>How many people?
              <div className="steprow">
                <button onClick={() => setHeads(Math.max(10, heads - 2))} aria-label="Fewer">−</button>
                <b>{heads}</b>
                <button onClick={() => setHeads(Math.min(120, heads + 2))} aria-label="More">+</button>
              </div>
            </label>
            <button className="pillbtn pb-red book-cta" onClick={() => setSent(true)}>
              Check availability for {heads} people
            </button>
            {sent && (
              <p className="book-summary" role="status">
                Almost there — the events-desk form is being connected. For now, book through the current site or the lobby's booking paths.
              </p>
            )}
          </div>
          <p className="book-summary"><Link to="/">← Back to the lobby</Link></p>
        </div>
      </section>
      <Footer />
    </>
  );
}
