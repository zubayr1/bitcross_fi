import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Trade from "./components/Trade";
import { ModalProvider } from "./components/ModalContext";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ModalProvider>
                <LandingPage />
              </ModalProvider>
            }
          />
          <Route
            exact
            path="/trade"
            element={
              <ModalProvider>
                <Trade />
              </ModalProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
