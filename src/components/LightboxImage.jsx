import styled from 'styled-components';
import { useLightbox } from '../context/Lightbox';

const Zoom = styled.div`
  overflow: hidden;
  border-radius: 2px;
  position: relative;
  height: 100%;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  &:hover img { transform: scale(1.05); }
`;

export default function LightboxImage({ src, caption, alt, className }) {
  const openLightbox = useLightbox();
  return (
    <Zoom className={className} onClick={() => openLightbox(src, caption || alt || '')}>
      <img src={src} alt={alt || caption || ''} loading="lazy" />
    </Zoom>
  );
}
