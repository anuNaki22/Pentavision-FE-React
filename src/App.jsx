import { Routes, Route } from "react-router-dom";
import Home from "./screens/Homescreen/Home";
import Form from "./screens/Form/Form";
import Griya from "./screens/Griya/Griya";
import Oto from "./screens/Oto/Oto";
import Mitraguna from "./screens/Mitraguna/Mitraguna";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} key="home"></Route>
        <Route path="/form" element={<Form />} key="form"></Route>
        <Route path="/griya" element={<Griya />} key="griya"></Route>
        <Route path="/oto" element={<Oto />} key="oto"></Route>
        <Route
          path="/mitraguna"
          element={<Mitraguna />}
          key="mitraguna"
        ></Route>
      </Routes>
    </>
  );
}

export default App;
