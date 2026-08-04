import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import FilmIntro from './FilmIntro';
import AiConcierge from './AiConcierge';

const Main = styled.main`
  min-height: 100vh;
`;

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <AiConcierge />
      <FilmIntro show={pathname === '/'} />
    </>
  );
}
