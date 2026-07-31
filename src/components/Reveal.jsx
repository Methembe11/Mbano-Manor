import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const RevealDiv = styled.div`
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.9s ${({ theme }) => theme.transition}, transform 0.9s ${({ theme }) => theme.transition};
  will-change: opacity, transform;
  ${({ $visible }) =>
    $visible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
  ${({ $delay }) => $delay && css`transition-delay: ${$delay}s;`}
`;

export default function Reveal({ as: Tag = 'div', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <RevealDiv ref={ref} as={Tag} $visible={visible} $delay={delay} {...rest}>
      {children}
    </RevealDiv>
  );
}
