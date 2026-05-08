import Navbar    from './components/Navbar';
import Home      from './components/Home';
import Portfolio from './components/Portfolio';
import About     from './components/About';
import Contact   from './components/Contact';
import Footer    from './components/Footer';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar theme={theme} onToggle={toggle} />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
