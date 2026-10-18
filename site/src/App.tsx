import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Lobby from "./pages/Lobby";
import Birthday from "./pages/Birthday";
import Play from "./pages/Play";
import Corporate from "./pages/Corporate";
import Learn from "./pages/Learn";
import DoorStub from "./pages/DoorStub";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/celebrate" element={<Navigate to="/birthday" replace />} />
        <Route path="/play" element={<Play />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/train" element={<DoorStub />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
