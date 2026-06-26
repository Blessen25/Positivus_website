import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";

const App = () => {

  return(

    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App