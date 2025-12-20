import { useEffect, useState } from "react";

const codeSnippets = [
  `{
  "deal_id": "PMP-2024-CURATED",
  "audience": "in_market_auto",
  "inventory": ["premium_ctv", "audio"],
  "forecast": {
    "impressions": "2.4M",
    "reach": "890K"
  }
}`,
  `{
  "campaign": "Q1_Performance",
  "targeting": {
    "geo": ["US", "UK", "DE"],
    "demo": "25-54"
  },
  "kpi": "conversions",
  "optimization": "real_time"
}`,
  `{
  "package": "CTV_Premium",
  "channels": [
    "streaming_apps",
    "connected_devices"
  ],
  "brand_safety": "verified",
  "viewability": ">70%"
}`,
];

const AnimatedCode = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentSnippet = codeSnippets[currentIndex];
    let charIndex = 0;

    if (isTyping) {
      const typeInterval = setInterval(() => {
        if (charIndex <= currentSnippet.length) {
          setDisplayedCode(currentSnippet.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      }, 15);

      return () => clearInterval(typeInterval);
    } else {
      const nextTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
        setDisplayedCode("");
        setIsTyping(true);
      }, 500);

      return () => clearTimeout(nextTimeout);
    }
  }, [currentIndex, isTyping]);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <pre className="font-mono text-xs md:text-sm text-primary code-glow p-4 whitespace-pre-wrap">
        {displayedCode}
        <span className="animate-pulse">|</span>
      </pre>
    </div>
  );
};

export default AnimatedCode;
