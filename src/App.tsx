import { AuthProvider } from "./auth/AuthProvider";

import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Router from "./routes/Router";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <Router />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
