'use client';

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CopilotPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    {
      role: "assistant",
      content:
        "Hi! I am AutoGuard AI. Ask me about supplier risks, demand forecasting, inventory optimization, alternate suppliers and supply chain disruptions.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [meetingText, setMeetingText] = useState("");

  const suggestedPrompts = [
    "Analyze Tesla risks",
    "Forecast EV demand",
    "Rec Suppliers",
    "Executive summary",
  ];

  const liveInsights = [
    { title: "Taiwan Semi Risk Matrix", status: "HIGH RISK", color: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
    { title: "Red Sea Logistics Core", status: "DELAYED", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    { title: "Vietnam Capacity Node", status: "+24% CAP", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    { title: "EV Battery Demand Engine", status: "+18% NET", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  ];

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (customMessage?: string) => {
    const currentMessage = customMessage || message;
    if (!currentMessage.trim()) return;

    setMessages((prev: any) => [
      ...prev,
      { role: "user", content: currentMessage },
    ]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentMessage }),
      });
      const data = await res.json();
      setMessages((prev: any) => [
        ...prev,
        { role: "assistant", content: data.response || "Unable to generate response" },
      ]);
    } catch {
      setMessages((prev: any) => [
        ...prev,
        { role: "assistant", content: "Something went wrong." },
      ]);
    }
    setLoading(false);
  };

  const startVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    setIsListening(true);
    recognition.start();

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setMessage(transcript);
      setTimeout(() => { sendMessage(transcript); }, 500);
      setIsListening(false);
    };

    recognition.onerror = () => { setIsListening(false); };
    recognition.onend = () => { setIsListening(false); };
  };

  const generateMeetingSummary = () => {
    if (!meetingText.trim()) return;
    sendMessage(`Summarize this meeting and provide action items:\n\n${meetingText}`);
    setMeetingText("");
  };

  return (
    <div className="max-h-screen bg-[#030712] text-white p-4 space-y-4 selection:bg-cyan-500/30 overflow-hidden flex flex-col h-screen">

      {/* HEADER COMPACT COGNITIVE HUB */}
      <div className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-[#0a0f24] to-slate-950 px-5 py-3.5 shadow-xl shrink-0">
        <div className="absolute top-0 right-0 w-64 h-full bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_60%)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                AI Intelligence Copilot
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 uppercase tracking-widest">
                Live Node
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Real-time supply chain predictive engines & risk matrix models.</p>
          </div>

          {/* SUGGESTED PROMPTS */}
          <div className="flex flex-wrap gap-2 max-w-xl justify-start sm:justify-end">
            {suggestedPrompts.map((prompt) => (
              <motion.button
                key={prompt}
                whileHover={{ scale: 1.02, borderColor: 'rgba(6,182,212,0.4)', backgroundColor: 'rgba(6,182,212,0.05)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => sendMessage(prompt)}
                className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 transition-colors cursor-pointer"
              >
                ⚡ {prompt}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* CORE FRAME LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0 overflow-hidden">
        
        {/* ================= LEFT SPLIT PANEL: CHAT UNIT ================= */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900 via-[#060b19] to-slate-950 shadow-xl overflow-hidden h-full min-h-0">
          
          <div className="px-4 py-3 border-b border-slate-800/60 bg-slate-950/40 flex items-center justify-between shrink-0">
            <div>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">AutoGuard Stream Feed</h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/5 border border-emerald-500/20 px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              Active System Matrix
            </div>
          </div>

          {/* CHAT TERMINAL LIST VIEW */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-thin min-h-0">
            <AnimatePresence initial={false}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-3 text-xs md:text-sm leading-6 shadow-md border ${
                      msg.role === "user"
                        ? "bg-slate-950 border-slate-800 text-slate-200"
                        : "bg-gradient-to-br from-[#0c142c] to-[#040814] border-cyan-500/20 text-cyan-300"
                    }`}
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-1.5">
                      {msg.role === "user" ? "Operator Terminal" : "AutoGuard Engine"}
                    </span>
                    <div className="whitespace-pre-wrap font-medium">{msg.content}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {loading && (
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-[#0c142c] to-[#040814] border border-cyan-500/10 text-cyan-400/70 rounded-xl px-4 py-3 text-xs flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                  Analyzing Graph Nodes...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ACTION SUBMITBAR DOCK */}
          <div className="p-3.5 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md flex gap-2 items-center shrink-0">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
              placeholder="Query system metrics or supply chain deviations..."
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs md:text-sm outline-none focus:border-cyan-500/40 transition-all text-slate-200"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={startVoiceInput}
              className={`p-3 rounded-xl border text-sm transition-all h-[44px] w-[44px] flex items-center justify-center shrink-0 ${
                isListening
                  ? "bg-rose-500 border-rose-400 text-white animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {isListening ? "🔴" : "🎤"}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => sendMessage()}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-black px-5 h-[44px] rounded-xl text-xs uppercase tracking-wider flex items-center shrink-0"
            >
              Send
            </motion.button>
          </div>

        </div>

        {/* ================= RIGHT SPLIT PANEL: INSIGHT TILES ================= */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-4 h-full min-h-0 overflow-y-auto pr-0.5 scrollbar-thin">
          
          {/* ACTUATORS PANEL */}
          <div className="rounded-xl p-4 bg-gradient-to-b from-slate-900 to-[#030715] border border-slate-800/90 shadow-md shrink-0 flex flex-col justify-between">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2 mb-3">
              System Actuators
            </h3>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { trigger: "Analyze Risk", query: "Analyze current supply chain risks and provide mitigation recommendations." },
                { trigger: "Forecast Demand", query: "Forecast EV battery demand for the next quarter." },
                { trigger: "Rec Suppliers", query: "Recommend alternate suppliers for high-risk semiconductor sourcing." },
                { trigger: "Summary Feed", query: "Generate an executive supply chain summary." },
              ].map((act) => (
                <button
                  key={act.trigger}
                  onClick={() => sendMessage(act.query)}
                  className="bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white font-semibold text-left px-3 py-2.5 rounded-xl text-xs transition-all truncate"
                >
                  ⚙️ {act.trigger}
                </button>
              ))}
            </div>
          </div>

          {/* INDUSTRY WATCH STREAM */}
          <div className="rounded-xl p-4 bg-gradient-to-b from-slate-900 to-[#030715] border border-slate-800/90 shadow-md flex-1 min-h-[140px] flex flex-col justify-between">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-800/60 pb-2 mb-3">Global Live Stream Logs</h3>
            <div className="space-y-2 flex-1 overflow-y-auto pr-1 scrollbar-thin flex flex-col justify-between">
              {liveInsights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between rounded-xl border border-slate-950 bg-slate-950/40 p-3 text-xs md:text-sm flex-1 mb-1 last:mb-0"
                >
                  <span className="text-slate-300 font-medium truncate pr-3">{item.title}</span>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-black border tracking-wider shrink-0 ${item.color}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AUDIO SYNC WORKSPACE */}
          <div className="rounded-xl p-4 bg-gradient-to-b from-slate-900 via-[#0a0f24] to-slate-950 border border-purple-500/10 shadow-md shrink-0 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-purple-500/10 pb-2">
                Transcript Matrix Sync
              </h3>
            </div>
            
            <textarea
              value={meetingText}
              onChange={(e) => setMeetingText(e.target.value)}
              placeholder="Paste raw conversation streams here..."
              className="w-full h-20 mt-3 bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs md:text-sm outline-none focus:border-purple-500/30 text-slate-200 transition-all resize-none font-medium"
            />

            <button
              onClick={generateMeetingSummary}
              className="w-full mt-3 bg-gradient-to-r from-purple-500 to-indigo-600 font-black text-white py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg border border-purple-400/20"
            >
              Parse Action Items
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}