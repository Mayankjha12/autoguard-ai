"use client";

import { useState, useRef, useEffect } from "react";

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

  const [isListening, setIsListening] =
    useState(false);

    const [meetingText, setMeetingText] =
    useState("");
  
  const suggestedPrompts = [
    "Analyze Tesla supply chain risks",
    "Forecast EV battery demand",
    "Recommend alternate semiconductor suppliers",
    "Generate executive summary",
  ];
  
  const liveInsights = [
    {
      title: "Taiwan Semiconductor Risk",
      status: "HIGH",
      color: "text-red-400",
    },
    {
      title: "Red Sea Logistics",
      status: "DELAYED",
      color: "text-yellow-400",
    },
    {
      title: "Vietnam Capacity",
      status: "+24%",
      color: "text-green-400",
    },
    {
      title: "EV Battery Demand",
      status: "+18%",
      color: "text-cyan-400",
    },
  ];

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async (
    customMessage?: string
  ) => {

    const currentMessage =
      customMessage || message;

    if (!currentMessage.trim()) return;

    setMessages((prev: any) => [
      ...prev,
      {
        role: "user",
        content: currentMessage,
      },
    ]);

    setMessage("");

    setLoading(true);

    try {

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          message: currentMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev: any) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.response ||
            "Unable to generate response",
        },
      ]);

    } catch {

      setMessages((prev: any) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong.",
        },
      ]);

    }

    setLoading(false);
  };

  const startVoiceInput = () => {

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech recognition not supported"
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";

    setIsListening(true);

    recognition.start();

    recognition.onresult = (
      event: any
    ) => {

      const transcript =
        event.results[0][0].transcript;

        setMessage(transcript);

        setTimeout(() => {
          sendMessage(transcript);
        }, 500);

      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  const generateMeetingSummary = () => {

    if (!meetingText.trim()) return;

    sendMessage(
      `Summarize this meeting and provide action items:

${meetingText}`
    );
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 lg:p-10 space-y-8">
  
      {/* HEADER */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_55%)]" />
  
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">
            AI Copilot
          </h1>
  
          <p className="text-slate-400 mt-2">
            Supply chain intelligence assistant
          </p>
          <div className="flex flex-wrap gap-2 mt-4">

  {suggestedPrompts.map((prompt) => (
    <button
      key={prompt}
      onClick={() => sendMessage(prompt)}
      className="
        text-xs
        px-3
        py-2
        rounded-full
        bg-cyan-500/10
        border
        border-cyan-500/20
        text-cyan-300
        hover:bg-cyan-500/20
      "
    >
      {prompt}
    </button>
  ))}

</div>
        </div>
      </div>
  
      <div className="grid lg:grid-cols-3 gap-6 items-start">
  
        {/* CHAT PANEL */}
  
        <div className="lg:col-span-2 flex flex-col rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl overflow-hidden">
  
          <div className="p-5 border-b border-slate-800">
            <h2 className="text-lg font-semibold">
              Ask AutoGuard AI
            </h2>
  
            <p className="text-slate-400 text-sm mt-1">
              Real-time supply chain intelligence assistant
            </p>
          </div>
  
          <div className="p-5 space-y-4 h-[420px] overflow-y-auto">
  
            {messages.map(
              (msg: any, index) => (
                <div
                  key={index}
                  className={`max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-slate-800 border border-slate-700"
                      : "ml-auto bg-cyan-500/10 border border-cyan-500/20 text-cyan-200"
                  }`}
                >
                  <div className="whitespace-pre-wrap">
  {msg.content}
</div>
                </div>
              )
            )}
  
            {loading && (
              <div className="ml-auto bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 rounded-2xl p-4 text-sm">
                Thinking...
              </div>
            )}
  
            <div ref={messagesEndRef} />
  
          </div>
  
          <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex gap-3">
  
            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask AutoGuard AI..."
              className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm outline-none"
            />
  
            <button
              onClick={startVoiceInput}
              className={`px-4 rounded-xl ${
                isListening
                  ? "bg-red-500"
                  : "bg-slate-800"
              }`}
            >
              🎤
            </button>
  
            <button
              onClick={() => sendMessage()}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 rounded-xl text-sm"
            >
              Send
            </button>
  
          </div>
  
        </div>
              {/* RIGHT PANEL */}

      <div className="space-y-6">

{/* QUICK ACTIONS */}

<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6">

  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />

  <div className="relative z-10">

    <h3 className="font-semibold">
      Quick Actions
    </h3>

    <div className="space-y-3 mt-4">

      <button
        onClick={() =>
          sendMessage(
            "Analyze current supply chain risks and provide mitigation recommendations."
          )
        }
        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-left text-sm hover:bg-slate-800 hover:border-cyan-500/30"
      >
        Analyze Risk
      </button>

      <button
        onClick={() =>
          sendMessage(
            "Forecast EV battery demand for the next quarter."
          )
        }
        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-left text-sm hover:bg-slate-800 hover:border-cyan-500/30"
      >
        Forecast Demand
      </button>

      <button
        onClick={() =>
          sendMessage(
            "Recommend alternate suppliers for high-risk semiconductor sourcing."
          )
        }
        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-left text-sm hover:bg-slate-800 hover:border-cyan-500/30"
      >
        Recommend Supplier
      </button>

      <button
        onClick={() =>
          sendMessage(
            "Generate an executive supply chain summary."
          )
        }
        className="w-full bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-left text-sm hover:bg-slate-800 hover:border-cyan-500/30"
      >
        Generate Summary
      </button>

    </div>

  </div>

</div>

{/* LIVE INDUSTRY INSIGHTS */}

<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6">

  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

  <div className="relative z-10">

    <h3 className="font-semibold">
      Live Industry Insights
    </h3>

    <p className="text-slate-400 text-sm mt-1">
      AI monitored supply chain events
    </p>

    <div className="space-y-3 mt-5">

      {liveInsights.map((item) => (
        <div
          key={item.title}
          className="
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-slate-700
            bg-slate-800/60
            p-3
          "
        >
          <span>{item.title}</span>

          <span
            className={`font-semibold ${item.color}`}
          >
            {item.status}
          </span>
        </div>
      ))}

    </div>

  </div>

</div>

{/* MEETING INTELLIGENCE */}

<div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6">

<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

  <div className="relative z-10">

  <h3 className="font-semibold">
  Meeting Intelligence
</h3>

<p className="text-slate-400 text-sm mt-1">
  Paste meeting transcript and generate action items
</p>

    <textarea
      value={meetingText}
      onChange={(e) =>
        setMeetingText(e.target.value)
      }
      placeholder="Paste meeting transcript..."
      className="w-full h-36 mt-4 bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm outline-none"
    />

    <button
      onClick={generateMeetingSummary}
      className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-semibold py-3 rounded-xl"
    >
      Generate Summary
    </button>

  </div>

</div>

</div>

</div>

</div>
);
}