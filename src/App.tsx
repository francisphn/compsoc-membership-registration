import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import FormWithAuthentication from "./pages/FormWithAuthentication";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // Paste your Firebase config here.
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Form/>}/>
            <Route path={"/beta"} element={<FormWithAuthentication/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
