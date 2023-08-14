import './App.css';
import Footer from './Component/Header/Footer';
import MainContent from './Component/Header/MainContent';
import Navbar from './Component/Header/Navbar';
import Sidebar from './Component/Header/Sidebar';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContent />
      <Footer />
    </>

  );
}

export default App;
