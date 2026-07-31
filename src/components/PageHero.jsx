import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './primitives';
import { img } from '../data/site';

const Hero = styled.section`
  position: relative;
  padding: calc(${({ theme }) => theme.navHeight} + 120px) 0 100px;
  background: ${({ theme }) => theme.colors.ivory};
  text-align: center;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: calc(${({ theme }) => theme.navHeightMobile} + 80px) 0 60px;
  }
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
`;

const Badge = styled.div`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius};
  padding: 7px 18px;
  margin-bottom: 28px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(38px, 5.5vw, 72px);
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.ink};
  max-width: 900px;
  margin: 0 auto;
`;

const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(17px, 1.8vw, 21px);
  font-weight: 300;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 640px;
  margin: 18px auto 0;
  line-height: 1.7;
`;

const Crumb = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 20px;
  a { color: ${({ theme }) => theme.colors.inkSoft}; transition: color 0.3s; }
  a:hover { color: ${({ theme }) => theme.colors.gold}; }
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