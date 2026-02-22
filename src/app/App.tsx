import { Navigation } from "./components/Navigation";
import { NewHero } from "./components/NewHero";
import { Purpose } from "./components/Purpose";
import { NewActivities } from "./components/NewActivities";
import { Events } from "./components/Events";
import { News } from "./components/News";
import { MemberVoices } from "./components/MemberVoices";
import { MemberGrid } from "./components/MemberGrid";
import { NewCTA } from "./components/NewCTA";
import { Footer } from "./components/Footer";
import TaidanVideo from "./components/TaidanVideo";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <NewHero />
      <Purpose />
      <NewActivities />
      <Events />
      <TaidanVideo />
      <News />
      <MemberVoices />
      <MemberGrid />
      <NewCTA />
      <Footer />
    </div>
  );
}