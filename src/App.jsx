import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutMbano from './pages/AboutMbano';
import LuxurySuites from './pages/LuxurySuites';
import MutotaForestVilla from './pages/MutotaForestVilla';
import BayuniSpa from './pages/BayuniSpa';
import VictoriaFalls from './pages/VictoriaFalls';
import MbanoForest from './pages/MbanoForest';
import Gallery from './pages/Gallery';
import GuestReviews from './pages/GuestReviews';
import MbanoPackages from './pages/MbanoPackages';
import LatestNews from './pages/LatestNews';
import DrMatiNyazemaInterviews from './pages/DrMatiNyazemaInterviews';
import MediaArticles from './pages/MediaArticles';
import DrMatiNyazemaStory from './pages/DrMatiNyazemaStory';
import MbanoStory from './pages/MbanoStory';
import MbanoMeaning from './pages/MbanoMeaning';
import Contact from './pages/Contact';
import BookNow from './pages/BookNow';
import VirtualTour from './pages/VirtualTour';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-mbano" element={<AboutMbano />} />
        <Route path="/luxury-suites" element={<LuxurySuites />} />
        <Route path="/mutota-forest-villa" element={<MutotaForestVilla />} />
        <Route path="/bayuni-spa" element={<BayuniSpa />} />
        <Route path="/victoria-falls" element={<VictoriaFalls />} />
        <Route path="/mbano-forest" element={<MbanoForest />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/guest-reviews" element={<GuestReviews />} />
        <Route path="/mbano-packages" element={<MbanoPackages />} />
        <Route path="/latest-news" element={<LatestNews />} />
        <Route path="/dr-mati-nyazema-interviews" element={<DrMatiNyazemaInterviews />} />
        <Route path="/media-articles" element={<MediaArticles />} />
        <Route path="/dr-mati-nyazema-story" element={<DrMatiNyazemaStory />} />
        <Route path="/mbano-story" element={<MbanoStory />} />
        <Route path="/mbano-meaning" element={<MbanoMeaning />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
