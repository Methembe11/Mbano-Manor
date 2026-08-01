import { createContext, useContext, useState, useCallback } from 'react';
import styled from 'styled-components';

const LightboxContext = createContext(null);

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10, 26, 28, 0.96);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 32px;
  right: 48px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.pureWhite};
  cursor: pointer;
  background: none;
  border: none;
  font-family: ${({ theme }) => theme.fonts.ui};
  z-index: 2;
  &:hover { color: ${({ theme }) => theme.colors.antiqueGold}; }
  @media (max-width: 768px) {
    right: 24px;
    top: 24px;
  }
`;

const Image = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`;

const VideoBox = styled.div`
  width: min(90vw, 1100px);
  aspect-ratio: 16 / 9;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 2px;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.warmStone};
`;

function toEmbedUrl(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/,
  );
  return match
    ? `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`
    : url;
}

export function LightboxProvider({ children }) {
  const [state, setState] = useState(null);

  const openLightbox = useCallback((src, caption = '', type = 'image') => {
    setState({ src, caption, type });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setState(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <LightboxContext.Provider value={openLightbox}>
      {children}
      {state && (
        <Overlay onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}>
          <CloseBtn onClick={closeLightbox}>&times;</CloseBtn>
          {state.type === 'video' ? (
            <VideoBox>
              <iframe
                src={toEmbedUrl(state.src)}
                title={state.caption}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoBox>
          ) : (
            <>
              <Image src={state.src} alt={state.caption} onClick={closeLightbox} />
              {state.caption && <Caption>{state.caption}</Caption>}
            </>
          )}
        </Overlay>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  return useContext(LightboxContext);
}
