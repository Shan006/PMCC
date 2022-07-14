import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Campuses from "./pages/Campuses";
import Gallery from "./pages/Gallery";
import Winners from "./pages/Winners";
import Registration from "./pages/Registration";
import Feedback from "./pages/Feedback";
import StudentsMarketer from "./components/StudentsMarketer";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/studentmarketer" element={<StudentsMarketer />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
