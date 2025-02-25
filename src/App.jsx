import { Routes, Route } from "react-router-dom";
import Home from "./screens/Homescreen/Home";
import Form from "./screens/Form/Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} key="home"></Route>
        <Route path="/form" element={<Form />} key="form"></Route>
      </Routes>
    </>
  );
}

export default App;
