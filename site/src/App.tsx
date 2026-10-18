import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Lobby from "./pages/Lobby";
import Birthday from "./pages/Birthday";
import DoorStub from "./pages/DoorStub";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/celebrate" element={<Navigate to="/birthday" replace />} />
        <Route path="/play" element={<DoorStub />} />
        <Route path="/corporate" element={<DoorStub />} />
        <Route path="/learn" element={<DoorStub />} />
        <Route path="/train" element={<DoorStub />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
