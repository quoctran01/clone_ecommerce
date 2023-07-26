import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import SignIn from "../src/page/SignIn";
import SignUp from "../src/page/SignUp";

function App() {
  return (
    <>
      {/* <Layout /> */}
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/*' element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
