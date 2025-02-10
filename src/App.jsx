import Header from "./components/Header";
import Footer from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App;