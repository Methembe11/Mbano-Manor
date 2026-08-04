import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { findAnswer, QUICK_TOPICS } from '../data/concierge';
import { askAi, CONCIERGE_API } from '../data/conciergeApi';
import { buildContext } from '../data/concierge';

/* ============ Launcher ============ */
const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(47, 110, 90, 0.45); }
  70%  { box-shadow: 0 0 0 16px rgba(47, 110, 90, 0); }
  100% { box-shadow: 0 0 0 0 rgba(47, 110, 90, 0); }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const Launcher = styled.button`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 2147483000;
  width: 62px;
  height: 62px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3e8e72, #24584a);
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(18, 63, 66, 0.35);
  animation: ${pulse} 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.35s ease;
  &:hover {
    transform: scale(1.06);
    background: linear-gradient(135deg, #2f6e5a, #1e463b);
  }
  &:active { transform: scale(0.96); }
  @media (max-width: 768px) {
    right: 18px;
    bottom: 18px;
    width: 56px;
    height: 56px;
  }
`;

const LauncherPing = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #59c79a;
  border: 2px solid #ffffff;
`;

/* ============ Panel ============ */
const Panel = styled.div`
  position: fixed;
  right: 24px;
  bottom: 98px;
  z-index: 2147483001;
  width: min(400px, calc(100vw - 24px));
  height: min(640px, calc(100vh - 130px));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 24px 70px rgba(10, 30, 26, 0.28);
  border: 1px solid rgba(47, 110, 90, 0.16);
  animation: ${popIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  font-family: ${({ theme }) => theme.fonts.body};
  @media (max-width: 768px) {
    right: 12px;
    bottom: 86px;
  }
`;

const Header = styled.div`
  flex-shrink: 0;
  padding: 18px 20px 16px;
  background: linear-gradient(135deg, #24584a, #123f42);
  color: #f3f6f4;
  display: flex;
  align-items: center;
  gap: 14px;
`;

const HeaderAvatar = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #3e8e72, #59c79a);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  svg { width: 22px; height: 22px; }
`;

const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

const HeaderTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const HeaderSub = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 3px;
  font-size: 12px;
  opacity: 0.82;
`;

const OnlineDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #59c79a;
  box-shadow: 0 0 0 3px rgba(89, 199, 154, 0.25);
`;

const CloseBtn = styled.button`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #e9f0ed;
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
  &:hover { background: rgba(255, 255, 255, 0.24); }
`;

/* ============ Messages ============ */
const Messages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #f7faf8;
`;

const row = `
  display: flex;
  max-width: 85%;
  padding: 12px 16px;
  font-size: 14.5px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
`;

const BotBubble = styled.div`
  ${row}
  align-self: flex-start;
  border-radius: 2px 16px 16px 16px;
  background: #ffffff;
  color: #16302a;
  border: 1px solid rgba(47, 110, 90, 0.12);
  box-shadow: 0 4px 14px rgba(18, 63, 66, 0.06);
  a {
    color: #2f6e5a;
    text-decoration: underline;
  }
`;

const UserBubble = styled.div`
  ${row}
  align-self: flex-end;
  border-radius: 16px 2px 16px 16px;
  background: linear-gradient(135deg, #2f6e5a, #24584a);
  color: #ffffff;
`;

const bubbleDot = keyframes`
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40%           { transform: translateY(-4px); opacity: 1; }
`;

const TypingBubble = styled.div`
  ${row}
  align-self: flex-start;
  border-radius: 2px 16px 16px 16px;
  background: #ffffff;
  border: 1px solid rgba(47, 110, 90, 0.12);
  gap: 5px;
  padding: 16px;
  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #2f6e5a;
    display: inline-block;
    animation: ${bubbleDot} 1.3s ease-in-out infinite;
    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.3s; }
  }
`;

const LinkBtn = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 14px;
  border: 1px solid #2f6e5a;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 9.5px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #2f6e5a;
  background: transparent;
  transition: background 0.3s ease, color 0.3s ease;
  &:hover {
    background: #2f6e5a;
    color: #ffffff;
  }
`;

/* ============ Quick chips + input ============ */
const Chips = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 16px 0;
  background: #ffffff;
`;

const Chip = styled.button`
  padding: 7px 13px;
  border: 1px solid rgba(47, 110, 90, 0.35);
  border-radius: 20px;
  background: rgba(47, 110, 90, 0.06);
  color: #24584a;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 10px;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background 0.3s ease, border-color 0.3s ease;
  &:hover {
    background: rgba(47, 110, 90, 0.14);
    border-color: #2f6e5a;
  }
`;

const InputRow = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 12px 16px 16px;
  background: #ffffff;
  border-top: 1px solid rgba(47, 110, 90, 0.1);
`;

const Input = styled.textarea`
  flex: 1;
  resize: none;
  border: 1px solid rgba(47, 110, 90, 0.25);
  border-radius: 20px;
  background: #f7faf8;
  padding: 11px 16px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 13px;
  line-height: 1.4;
  color: #16302a;
  max-height: 90px;
  &:focus {
    outline: none;
    border-color: #2f6e5a;
    background: #ffffff;
  }
  &::placeholder { color: rgba(36, 88, 74, 0.5); }
`;

const SendBtn = styled.button`
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2f6e5a, #24584a);
  color: #ffffff;
  transition: transform 0.25s ease, background 0.3s ease;
  &:hover { transform: scale(1.06); background: linear-gradient(135deg, #3e8e72, #24584a); }
  &:disabled { opacity: 0.45; cursor: default; transform: none; }
  svg { width: 18px; height: 18px; }
`;

const FooterNote = styled.div`
  flex-shrink: 0;
  padding: 0 16px 10px;
  text-align: center;
  font-size: 10.5px;
  letter-spacing: 0.4px;
  color: rgba(36, 88, 74, 0.6);
  background: #ffffff;
`;

/* ============ Icons ============ */
const ConciergeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M8 10.5a4 4 0 0 1 8 0"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8.4" cy="13.4" r="1" fill="currentColor" />
    <circle cx="15.6" cy="13.4" r="1" fill="currentColor" />
    <path d="M10.5 16.6h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.4 20.4 20.85 12 3.4 3.6 3.4 10l12 2-12 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);

/* ============ Helpers ============ */
let idCounter = 0;
const nextId = () => `msg-${++idCounter}`;

const GREETING =
  "Hello! I'm the Mbano Concierge, your AI host for Mbano Manor Hotel — a sanctuary hidden within the ancient teak forest of Victoria Falls. I can answer anything about the hotel, suites, villa, spa, dining, activities, packages and booking. Ask away!";

/* ============ Component ============ */
export default function AiConcierge() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: nextId(), from: 'bot', text: GREETING },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const aiEnabled = CONCIERGE_API.llm.enabled;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const respond = async (question) => {
    setTyping(true);
    try {
      if (aiEnabled) {
        const context = buildContext();
        const history = messages
          .filter((m) => m.from !== 'bot' || m.id !== messages[0]?.id)
          .slice(-8)
          .map((m) => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text }));
        const aiText = await askAi({ question, context, history });
        if (aiText) {
          setMessages((ms) => [...ms, { id: nextId(), from: 'bot', text: aiText }]);
          return;
        }
      }
      const match = findAnswer(question);
      setMessages((ms) => [
        ...ms,
        { id: nextId(), from: 'bot', text: match.answer, route: match.route, cta: match.cta },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const send = (text) => {
    const question = (text ?? input).trim();
    if (!question) return;
    setMessages((ms) => [...ms, { id: nextId(), from: 'user', text: question }]);
    setInput('');
    respond(question);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {open && (
        <Panel role="dialog" aria-label="Mbano Concierge chat">
          <Header>
            <HeaderAvatar>
              <ConciergeIcon />
            </HeaderAvatar>
            <HeaderText>
              <HeaderTitle>Mbano Concierge</HeaderTitle>
              <HeaderSub>
                <OnlineDot />
                {aiEnabled ? 'AI host · online' : 'Hotel guide · online'}
              </HeaderSub>
            </HeaderText>
            <CloseBtn onClick={() => setOpen(false)} aria-label="Close concierge">
              <CloseIcon />
            </CloseBtn>
          </Header>

          <Messages ref={scrollRef}>
            {messages.map((m) =>
              m.from === 'user' ? (
                <UserBubble key={m.id}>{m.text}</UserBubble>
              ) : (
                <BotBubble key={m.id}>
                  {m.text}
                  {m.route && m.cta && (
                    <LinkBtn to={m.route} onClick={() => setOpen(false)}>
                      {m.cta}
                    </LinkBtn>
                  )}
                </BotBubble>
              ),
            )}
            {typing && (
              <TypingBubble>
                <span />
                <span />
                <span />
              </TypingBubble>
            )}
          </Messages>

          <Chips>
            {QUICK_TOPICS.map((t) => (
              <Chip key={t.label} onClick={() => send(t.query)}>
                {t.label}
              </Chip>
            ))}
          </Chips>

          <InputRow>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about the hotel, the Falls, booking..."
              rows={1}
              aria-label="Ask the concierge a question"
            />
            <SendBtn onClick={() => send()} disabled={!input.trim()} aria-label="Send message">
              <SendIcon />
            </SendBtn>
          </InputRow>

          <FooterNote>
            Instant answers · speak with a human on{' '}
            <a
              href="https://api.whatsapp.com/send?phone=263788928776"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2f6e5a' }}
            >
              WhatsApp
            </a>
          </FooterNote>
        </Panel>
      )}

      <Launcher onClick={() => setOpen((o) => !o)} aria-label="Open Mbano Concierge">
        {open ? <CloseIcon /> : <ConciergeIcon />}
        <LauncherPing />
      </Launcher>
    </>
  );
}
