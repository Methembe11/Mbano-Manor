// ============================================================
// AI CONCIERGE — API HOLDERS
// ------------------------------------------------------------
// These values are intentionally left EMPTY for now. Fill them
// in (or set the matching .env variables) to go live. See the
// list of required APIs at the bottom of this file.
// ============================================================

const env = (key, fallback = '') => {
  try {
    return (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) || fallback;
  } catch {
    return fallback;
  }
};

export const CONCIERGE_API = {
  // ----------------------------------------------------------
  // 1. LLM CHAT API  (REQUIRED for real AI answers)
  // ----------------------------------------------------------
  // Any OpenAI-compatible endpoint works: OpenAI, Groq, OpenRouter,
  // Together, Google Gemini (OpenAI-compat mode) or a local model.
  llm: {
    // Set to true when you provide an apiKey / baseUrl + model.
    enabled: env('VITE_CONCIERGE_LLM_ENABLED', '') === 'true' || false,

    // 'openai' | 'anthropic' | 'openai-compatible'
    // 'openai' and 'openai-compatible' use POST {baseUrl}/chat/completions
    provider: env('VITE_CONCIERGE_LLM_PROVIDER', 'openai'),

    // OpenAI:            https://api.openai.com/v1
    // Groq:              https://api.groq.com/openai/v1
    // OpenRouter:        https://openrouter.ai/api/v1
    // Local (Ollama):    http://localhost:11434/v1
    baseUrl: env('VITE_CONCIERGE_LLM_BASE_URL', ''),

    apiKey: env('VITE_CONCIERGE_LLM_API_KEY', ''),

    // e.g. gpt-4o-mini, gpt-4o, groq/llama-3.1-70b-versatile,
    // openrouter/anthropic/claude-sonnet, google/gemini-2.0-flash
    model: env('VITE_CONCIERGE_LLM_MODEL', ''),

    temperature: 0.4,
    maxTokens: 500,
  },

  // ----------------------------------------------------------
  // 2. LIVE BOOKING / AVAILABILITY API  (OPTIONAL)
  // ----------------------------------------------------------
  // Connect your Property Management System (Cloudbeds, Little
  // Hotelier, ResRequest, eZee, etc.) or a custom booking engine
  // so the concierge can quote live rates and availability.
  bookingEngine: {
    enabled: false,
    baseUrl: '', // e.g. https://your-pms.com/api/v1
    apiKey: '',
    propertyId: '',
  },

  // ----------------------------------------------------------
  // 3. WHATSAPP BUSINESS CLOUD API  (OPTIONAL)
  // ----------------------------------------------------------
  // Meta WhatsApp Cloud API for sending booking hand-offs and
  // notifications from inside the chat.
  whatsappCloud: {
    enabled: false,
    accessToken: '',
    phoneNumberId: '',
    baseUrl: 'https://graph.facebook.com/v19.0',
  },

  // ----------------------------------------------------------
  // 4. EMAIL API  (OPTIONAL — replaces the fake enquiry form)
  // ----------------------------------------------------------
  // e.g. Resend, SendGrid, Mailgun, or AWS SES for sending the
  // chat transcript / enquiries to reservations.
  emailApi: {
    enabled: false,
    provider: '', // 'resend' | 'sendgrid' | 'mailgun' | ...
    apiKey: '',
    fromEmail: '',
    toEmail: 'res@mbanomanorhotel.com',
  },
};

// ------------------------------------------------------------
// askAi — sends the user question + knowledge base to the LLM.
// Returns null when the LLM is not configured (UI falls back to
// the local knowledge matcher in concierge.js).
// ------------------------------------------------------------
export async function askAi({ question, context, history }) {
  const { llm } = CONCIERGE_API;
  if (!llm.enabled || !llm.baseUrl || !llm.model) return null;

  const systemPrompt =
    'You are the Mbano Concierge, the friendly AI host of Mbano Manor Hotel, ' +
    'a boutique safari hotel hidden in the ancient teak forest of Victoria Falls, Zimbabwe. ' +
    'Answer guests concisely and warmly using ONLY the knowledge below. If the answer is not ' +
    'in the knowledge, say you are not sure and point them to WhatsApp ' +
    '(https://api.whatsapp.com/send?phone=263788928776) or res@mbanomanorhotel.com. ' +
    'Never invent facts, rates or availability. Keep answers short and helpful.\n\n' +
    'HOTEL KNOWLEDGE:\n' + context;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...(history || []),
    { role: 'user', content: question },
  ];

  if (llm.provider === 'anthropic') {
    // Anthropic Messages API
    const res = await fetch(`${llm.baseUrl}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': llm.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: llm.model,
        max_tokens: llm.maxTokens,
        temperature: llm.temperature,
        system: systemPrompt,
        messages: (history || []).concat([{ role: 'user', content: question }]),
      }),
    });
    const data = await res.json();
    return data?.content?.map((c) => c.text).join('') || null;
  }

  // OpenAI-compatible chat completions (OpenAI / Groq / OpenRouter / local)
  const res = await fetch(`${llm.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(llm.apiKey ? { Authorization: `Bearer ${llm.apiKey}` } : {}),
    },
    body: JSON.stringify({
      model: llm.model,
      temperature: llm.temperature,
      max_tokens: llm.maxTokens,
      messages,
    }),
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data?.choices?.[0]?.message?.content || null;
}

// ============================================================
// WHICH APIS DO I NEED?
// ------------------------------------------------------------
//  1. LLM CHAT API ........... REQUIRED for genuine AI answers.
//       Any provider with an OpenAI-compatible endpoint:
//       - OpenAI        (https://platform.openai.com)      — gpt-4o / gpt-4o-mini
//       - Groq          (https://console.groq.com)         — llama-3.1 / gemma (fast & cheap)
//       - OpenRouter    (https://openrouter.ai)            — one key, many models
//       - Google Gemini (https://ai.google.dev)            — gemini-2.0-flash
//       - Anthropic     (https://console.anthropic.com)    — claude-sonnet (uses /v1/messages)
//       Needs: API_KEY, BASE_URL, MODEL.
//
//  2. BOOKING ENGINE API ...... OPTIONAL — for live room rates &
//       availability (Cloudbeds, Little Hotelier, ResRequest, eZee).
//
//  3. WHATSAPP CLOUD API ...... OPTIONAL — Meta WhatsApp Cloud API
//       (access_token + phone_number_id) to automate booking
//       hand-offs from inside the chat.
//
//  4. EMAIL API ............... OPTIONAL — Resend / SendGrid /
//       Mailgun to actually deliver the enquiry form + chat
//       transcripts to reservations (the current form is a demo).
//
//  Set values via a .env file (VITE_* prefix for Vite client code):
//    VITE_CONCIERGE_LLM_ENABLED=true
//    VITE_CONCIERGE_LLM_PROVIDER=openai
//    VITE_CONCIERGE_LLM_BASE_URL=https://api.openai.com/v1
//    VITE_CONCIERGE_LLM_API_KEY=sk-...
//    VITE_CONCIERGE_LLM_MODEL=gpt-4o-mini
// ============================================================
