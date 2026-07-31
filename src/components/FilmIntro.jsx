import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { img } from '../data/site';

const STORAGE_KEY = 'mbanoFilmIntro';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: radial-gradient(120% 120% at 50% 18%, #0b2628 0%, #071a1c 55%, #040d0f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  opacity: 1;
  transition: opacity 1.4s ease;
  ${({ $leaving }) => $leaving && 'opacity: 0; pointer-events: none;'}
`;

const Forest = styled.div`
  position: absolute;
  inset: 0;
  background: url('${({ $src }) => $src}') center 25% / cover no-repeat;
  opacity: 0.24;
  animation: introDrift 44s ease-in-out infinite alternate;
  @keyframes introDrift {
    from { transform: scale(1); }
    to { transform: scale(1.12); }
  }
`;

const Vignette = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 13, 15, 0.55) 0%, rgba(4, 13, 15, 0.1) 45%, rgba(4, 13, 15, 0.72) 100%);
`;

const Inner = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 32px;
  max-width: 760px;
`;

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

const fade = (delay) => `
  opacity: 0;
  transform: translateY(18px);
  animation: introRise 1.2s ${EASE} forwards;
  animation-delay: ${delay}s;
  @keyframes introRise {
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Eyebrow = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: 28px;
  ${() => fade(1.6)}
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: clamp(34px, 6vw, 68px);
  font-weight: 300;
  line-height: 1.12;
  color: ${({ theme }) => theme.colors.ivory};
  ${() => fade(2.4)}
`;

const Sub = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.warmStone};
  margin-top: 22px;
  ${() => fade(3.2)}
`;

const EnterBtn = styled.button`
  margin-top: 46px;
  padding: 16px 42px;
  border: 1px solid rgba(184, 155, 94, 0.65);
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.ivory};
  cursor: pointer;
  transition: background 0.5s ease, color 0.5s ease, border-color 0.5s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.gold};
    color: #071a1c;
  }
  ${() => fade(4)}
`;

const Skip = styled.button`
  position: absolute;
  top: 28px;
  right: 34px;
  z-index: 3;
  background: none;
  border: none;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(248, 247, 242, 0.45);
  transition: color 0.4s ease;
  &:hover { color: ${({ theme }) => theme.colors.ivory}; }
`;

export default function FilmIntro({ show }) {
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(() => {
    if (!show) return true;
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  const enter = () => {
    if (leaving) return;
    setLeaving(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* private mode */
    }
    setTimeout(() => setDone(true), 1500);
  };

  useEffect(() => {
    if (done) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === 'Escape') enter();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  if (done) return null;

  return (
    <Backdrop $leaving={leaving}>
      <Forest $src={img('2025/03/MbanoManorOutside-1026-scaled.jpg')} />
      <Vignette />
      <Skip onClick={enter}>Skip</Skip>
      <Inner>
        <Eyebrow>Mbano Manor &middot; Victoria Falls</Eyebrow>
        <Title>
          Hidden Within An
          <br />
          Ancient Forest.
        </Title>
        <Sub>Begin your journey into the sanctuary.</Sub>
        <EnterBtn onClick={enter}>Enter the Experience</EnterBtn>
      </Inner>
    </Backdrop>
  );
}
