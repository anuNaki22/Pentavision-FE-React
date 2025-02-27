import { Routes, Route } from "react-router-dom";
import Home from "./screens/Homescreen/Home";
import Griya from "./screens/Griya/Griya";
import Oto from "./screens/Oto/Oto";
import Mitraguna from "./screens/Mitraguna/Mitraguna";
import Predict from "./screens/Predict/Predict";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} key="home"></Route>
        <Route path="/griya" element={<Griya />} key="griya"></Route>
        <Route path="/oto" element={<Oto />} key="oto"></Route>
        <Route
          path="/mitraguna"
          element={<Mitraguna />}
          key="mitraguna"
        ></Route>
        <Route path="/predict" element={<Predict />} key="predict"></Route>
      </Routes>
    </>
  );
}

export default App;
