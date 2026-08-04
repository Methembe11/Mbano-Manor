import { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { NAV, LOGO } from '../data/site';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.navHeight};
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;
  --nav-link: ${({ theme }) => theme.colors.ink};
  --nav-divider: rgba(10, 10, 8, 0.14);
  transition: background 0.5s ${({ theme }) => theme.transition},
    border-color 0.5s ${({ theme }) => theme.transition};
  background: transparent;
  border-bottom: 1px solid transparent;
  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: rgba(18, 63, 66, 0.94);
      backdrop-filter: blur(24px);
      border-bottom-color: rgba(248, 247, 242, 0.12);
      --nav-link: ${({ theme }) => theme.colors.ivory};
      --nav-divider: rgba(248, 247, 242, 0.25);
    `}
  @media (max-width: 900px) {
    height: ${({ theme }) => theme.navHeightMobile};
    padding: 0 28px;
  }
`;

const NavLogo = styled(Link)`
  height: 38px;
  transition: opacity 0.3s ease;
  &:hover { opacity: 0.8; }
  img {
    height: 100%;
    width: auto;
    background: transparent;
    filter: ${({ $dark }) => ($dark ? 'brightness(0) invert(1)' : 'none')};
    transition: filter 0.5s ${({ theme }) => theme.transition};
  }
`;

const linkStyle = css`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: var(--nav-link);
  transition: color 0.3s ease;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.45s ${({ theme }) => theme.transition};
  }
  &:hover, &.active { color: ${({ theme }) => theme.colors.gold}; }
  &:hover::after, &.active::after { transform: scaleX(1); }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  list-style: none;
  @media (max-width: 1180px) {
    gap: 26px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  min-width: 240px;
  margin-top: 20px;
  padding: 22px 0;
  transform: translateX(-50%);
  background: rgba(243, 238, 231, 0.98);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(10, 10, 8, 0.06);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.4s ${({ theme }) => theme.transition},
    visibility 0.4s ${({ theme }) => theme.transition},
    transform 0.4s ${({ theme }) => theme.transition};
  transform: translateX(-50%) translateY(8px);
  li { position: relative; }
  li a {
    display: block;
    padding: 9px 32px;
    font-size: 9.5px;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.inkSoft};
    &::after { display: none; }
    &:hover, &.active { color: ${({ theme }) => theme.colors.gold}; }
  }
  li a::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 50%;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
    transform: translateY(-50%);
    transition: width 0.4s ${({ theme }) => theme.transition};
  }
  li a:hover::before, li a.active::before { width: 10px; }
`;

const NavItem = styled.li`
  position: relative;
  &:hover ${Dropdown}, &:focus-within ${Dropdown} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }
  > a { ${linkStyle} }
`;

const NavCta = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 12px 24px;
  margin-left: 24px;
  color: ${({ theme }) => theme.colors.ivory};
  background: ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius};
  white-space: nowrap;
  transition: background 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.bronze};
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileToggle = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  margin: -10px;
  background: none;
  border: none;
  z-index: 1100;
  -webkit-tap-highlight-color: transparent;
  span {
    width: 26px;
    height: 1px;
    background: ${({ $open, theme }) => ($open ? theme.colors.ivory : theme.colors.ink)};
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1),
      background 0.35s ease;
    ${({ $open }) =>
      $open &&
      css`
        &:first-child { transform: rotate(45deg) translate(6px, 4px); }
        &:nth-child(2) { opacity: 0; }
        &:last-child { transform: rotate(-45deg) translate(6px, -4px); }
      `}
  }
  @media (max-width: 900px) {
    display: flex;
  }
`;

/* ===== FULL-SCREEN MOBILE MENU ===== */
const itemIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1050;
  height: 100vh;
  height: 100dvh;
  background: ${({ theme }) => theme.colors.tealDeep};
  display: flex;
  flex-direction: column;
  padding: 96px 34px 44px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-26px)')};
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0.5s;
  @media (max-width: 768px) {
    padding: 84px 26px 40px;
  }
`;

const MobileInner = styled.div`
  width: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
`;

const MobileLinks = styled.ul`
  list-style: none;
  text-align: center;
`;

const MobileItem = styled.li`
  ${({ $open, $i }) =>
    $open &&
    css`
      animation: ${itemIn} 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
      animation-delay: ${($i ?? 0) * 70}ms;
    `}
  > a {
    display: block;
    padding: 13px 0 4px;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(26px, 7vw, 40px);
    font-weight: 400;
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.ivory};
    transition: color 0.3s ease;
    &:hover { color: ${({ theme }) => theme.colors.gold}; }
  }
`;

const MobileSub = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 6px 0 14px;
  ${({ $open, $i }) =>
    $open &&
    css`
      animation: ${itemIn} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
      animation-delay: ${($i ?? 0) * 70 + 60}ms;
    `}
  a {
    display: block;
    padding: 3px 0;
    font-family: ${({ theme }) => theme.fonts.ui};
    font-size: 10px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.warmStone};
    transition: color 0.3s ease;
    &:hover { color: ${({ theme }) => theme.colors.gold}; }
  }
`;

const MobileCta = styled(Link)`
  display: inline-block;
  margin: 34px auto 0;
  padding: 15px 46px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ivory};
  background: ${({ theme }) => theme.colors.gold};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  transition: background 0.4s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.bronze};
  }
  ${({ $open }) =>
    $open &&
    css`
      animation: ${itemIn} 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
    `}
`;

function NavItemRow({ item }) {
  if (!item.dropdown) {
    return (
      <NavItem>
        <NavLink to={item.to} end={item.to === '/'}>
          {item.label}
        </NavLink>
      </NavItem>
    );
  }
  return (
    <NavItem>
      <NavLink to={item.to} end={item.to === '/'}>
        {item.label}
      </NavLink>
      <Dropdown aria-label={`${item.label} submenu`}>
        {item.dropdown.map((sub) => (
          <li key={sub.to}>
            <NavLink to={sub.to}>{sub.label}</NavLink>
          </li>
        ))}
      </Dropdown>
    </NavItem>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <Nav $scrolled={scrolled || menuOpen}>
      <NavLogo to="/" $dark={scrolled || menuOpen}>
        <img src={LOGO} alt="Mbano Manor Hotel" />
      </NavLogo>

      <NavLinks>
        {NAV.map((item) => (
          <NavItemRow key={item.label} item={item} />
        ))}
      </NavLinks>

      <NavCta to="/book-now">Reserve</NavCta>

      <MobileToggle
        $open={menuOpen}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </MobileToggle>

      <MobileMenu id="mobile-menu" $open={menuOpen} role="dialog" aria-label="Menu">
        <MobileInner>
          <MobileLinks>
            {NAV.map((item, i) => (
              <MobileItem key={item.label} $open={menuOpen} $i={i}>
                <NavLink to={item.to} onClick={() => setMenuOpen(false)} end={item.to === '/'}>
                  {item.label}
                </NavLink>
                {item.dropdown && (
                  <MobileSub $open={menuOpen} $i={i}>
                    {item.dropdown.map((sub) => (
                      <li key={sub.to}>
                        <NavLink to={sub.to} onClick={() => setMenuOpen(false)}>
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </MobileSub>
                )}
              </MobileItem>
            ))}
          </MobileLinks>
          <MobileCta to="/book-now" $open={menuOpen} onClick={() => setMenuOpen(false)}>
            Reserve
          </MobileCta>
        </MobileInner>
      </MobileMenu>
    </Nav>
  );
}
