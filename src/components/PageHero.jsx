import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './primitives';

const Hero = styled.section`
  position: relative;
  padding: calc(${({ theme }) => theme.navHeight} + 110px) 0 110px;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.tealDeep} 0%, ${({ theme }) => theme.colors.teal} 130%);
  text-align: center;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(900px 380px at 50% -10%, rgba(248, 247, 242, 0.05), transparent 65%);
    pointer-events: none;
  }
  @media (max-width: 768px) {
    padding: calc(${({ theme }) => theme.navHeightMobile} + 64px) 0 64px;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
`;

const Badge = styled.div`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid rgba(184, 155, 94, 0.4);
  border-radius: ${({ theme }) => theme.radius};
  padding: 9px 22px;
  margin-bottom: 34px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(36px, 5.2vw, 64px);
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.ivory};
`;

const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(18px, 2vw, 23px);
  font-weight: 300;
  color: ${({ theme }) => theme.colors.warmStone};
  max-width: 680px;
  margin: 22px auto 0;
`;

const Crumb = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.warmStone};
  margin-bottom: 24px;
  a { color: ${({ theme }) => theme.colors.gold}; }
`;

export default function PageHero({ crumb, crumbLabel, title, sub, badge }) {
  return (
    <Hero>
      <Container>
        <Inner>
          {crumb && (
            <Crumb>
              <Link to={crumb}>{crumbLabel || 'Home'}</Link> / {title}
            </Crumb>
          )}
          {badge && <Badge>{badge}</Badge>}
          <Title>{title}</Title>
          {sub && <Sub>{sub}</Sub>}
        </Inner>
      </Container>
    </Hero>
  );
}
