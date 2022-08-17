import MainNavbar from "./navigation/MainNavbar";
import MainItemListView from "./views/MainItemListView";
import { Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";
import { AutenticationContextProvider } from "./context/AutenticationContext";
import { AppContextProvider } from "./context/appContext";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <AutenticationContextProvider>
        <AppContextProvider>
          <Routes>
            <Route path="home" element={<MainItemListView />} />

            <Route path="login" element={<LoginView />} />
            <Route path="signup" element={<SignupView />} />
          </Routes>
        </AppContextProvider>
      </AutenticationContextProvider>
    </div>
  );
}

export default App;
