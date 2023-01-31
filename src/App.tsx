import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/Theme';
import { GlobalStyles } from './components/styles/Global';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*         <Route path="/charts" element={<Charts />} />
        <Route path="/charts/:ticker/:id" element={<Charts />} />
        <Route path="/charts" element={<Charts />} /> */}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
