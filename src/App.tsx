import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import FormWithAuthentication from "./pages/FormWithAuthentication";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVdVfQ4kHbLGPpjDgMgCO2azWdL6ncNl4",
    authDomain: "membership-registration-14593.firebaseapp.com",
    projectId: "membership-registration-14593",
    storageBucket: "membership-registration-14593.appspot.com",
    messagingSenderId: "696344059815",
    appId: "1:696344059815:web:eb68f12799c5f82c7da082",
    measurementId: "G-0SLBT0EB5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
