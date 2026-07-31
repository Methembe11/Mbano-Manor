import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Main = styled.main`
  min-height: 100vh;
`;

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
