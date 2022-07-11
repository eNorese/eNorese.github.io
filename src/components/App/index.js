import { Header } from '../Header';
import { Home } from '../Home';
import { About } from '../About';
import { Career } from '../Career';
import { Projects } from '../Projects';
import { Contact } from '../Contact';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Career />
      <Projects />
      <Contact />
    </>
  );
}

export { App };