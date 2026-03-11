import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Homepage from "./pages/Homepage";

import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="add-task" element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
