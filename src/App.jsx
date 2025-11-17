import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import DisplayHome from "./components/DisplayHome";
import DisplayAlbum from "./components/DisplayAlbum";
import DisplayPodcast from "./components/DisplayPodcast";
import Premium from "./components/Premium";
import VerifyStudent from "./pages/VerifyStudent";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/verifystudent" element={<VerifyStudent />} />

      {/* Main app layout (contains Sidebar, Display, Player). Display renders children via Outlet */}
      <Route path="/" element={<HomePage />}>
        <Route index element={<DisplayHome />} />
        <Route path="album/:id" element={<DisplayAlbum />} />
        <Route path="podcasts" element={<DisplayPodcast />} />
        <Route path="premium" element={<Premium />} />
      </Route>
    </Routes>
  );
};

export default App;
