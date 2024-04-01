import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
import EventsPage from "./pages/EventsPage";
function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
