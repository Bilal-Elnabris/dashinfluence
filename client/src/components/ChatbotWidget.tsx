import React, { useState, useRef, useEffect } from "react";

const AVATAR_URL = "/assets/dash-assistant-icon.png";
const DEMO_BOT_REPLY =
  "Hi! I'm Dash Assistant, your AI-powered business automation expert. Ask me anything about Dash Influence's services, automation, or how we can help your business grow!";

// System prompt with agency info (extracted from website/code)
const systemPrompt = `You are Dash Assistant, the official AI for Dash Influence, a leading agency specializing in AI automation, business process optimization, and digital transformation.\n
Dash Influence helps businesses in various niches (consultants, real estate, home services, car detailing, health/wellness, restaurants/cafes) automate workflows, increase revenue, and improve customer experience using AI-driven solutions.\n
Services include: AI automation, CRM setup, lead management, marketing automation, website development, and more.\n
Always answer as a knowledgeable, concise, and friendly expert on Dash Influence's offerings. If you don't know something, say so honestly.`;

async function fetchLLMReply(userMessage: string): Promise<string> {
  const fullPrompt = `${systemPrompt}\nUser: ${userMessage}\nDash Assistant:`;
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama2",
        prompt: fullPrompt,
        stream: false,
      }),
    });
    if (!response.ok) throw new Error("LLM not available");
    const data = await response.json();
    return data.response || "Sorry, I couldn't generate a response.";
  } catch (err) {
    return "Sorry, the AI assistant is currently unavailable. Please try again later.";
  }
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: DEMO_BOT_REPLY },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function handleSend(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg = input;
    setMessages((msgs) => [...msgs, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    setMessages((msgs) => [...msgs, { from: "bot", text: "..." }]);
    const botMsg = await fetchLLMReply(userMsg);
    setMessages((msgs) => [
      ...msgs.slice(0, -1),
      { from: "bot", text: botMsg },
    ]);
    setLoading(false);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-all border-4 border-yellow-400"
        aria-label="Open chat"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)" }}
      >
        <img
          src={AVATAR_URL}
          alt="Chatbot Avatar"
          className="w-10 h-10 rounded-full"
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-blue-200 flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-blue-100 bg-blue-700 text-white">
            <img
              src={AVATAR_URL}
              alt="Bot"
              className="w-10 h-10 rounded-full border-2 border-yellow-400"
            />
            <div className="font-bold text-lg">Dash Assistant</div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white hover:text-yellow-400 text-2xl font-bold"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-blue-50 dark:bg-slate-800">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.from === "bot" && (
                  <img
                    src={AVATAR_URL}
                    alt="Bot"
                    className="w-8 h-8 rounded-full border border-yellow-400 mr-2"
                  />
                )}
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm shadow
                    ${
                      msg.from === "user"
                        ? "bg-yellow-400 text-black"
                        : "bg-white dark:bg-slate-700 text-blue-900 dark:text-white border border-blue-200"
                    }
                  `}
                >
                  {msg.text}
                </div>
                {msg.from === "user" && <div className="ml-2 w-8" />}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 p-3 border-t border-blue-100 bg-white dark:bg-slate-900"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full px-4 py-2 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 dark:bg-slate-800 text-black dark:text-white"
              autoFocus
              disabled={loading}
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 rounded-full transition"
              disabled={loading}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
