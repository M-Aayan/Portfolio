"use client";

import React, { useEffect, useRef } from "react";
import { Code, Palette, Bot } from "lucide-react";

// Web Development Stack Items with Official Logos
const WEB_DEV_STACK = [
  {
    name: "HTML5",
    category: "MARKUP",
    status: "CORE",
    desc: "Semantic structuring, web standards & accessible DOM elements",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>file_type_html</title>
        <polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style={{ fill: "#e44f26" }} />
        <polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style={{ fill: "#f1662a" }} />
        <polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style={{ fill: "#ebebeb" }} />
        <polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style={{ fill: "#ebebeb" }} />
        <polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style={{ fill: "#fff" }} />
        <polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style={{ fill: "#fff" }} />
      </svg>
    ),
  },
  {
    name: "CSS3",
    category: "STYLING",
    status: "CORE",
    desc: "Responsive styling, Flexbox, CSS Grid & keyframe animations",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>file_type_css</title>
        <polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" style={{ fill: "#1572b6" }} />
        <polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style={{ fill: "#33a9dc" }} />
        <polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" style={{ fill: "#fff" }} />
        <polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" style={{ fill: "#ebebeb" }} />
        <polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" style={{ fill: "#fff" }} />
        <polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" style={{ fill: "#ebebeb" }} />
        <polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" style={{ fill: "#ebebeb" }} />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "LANGUAGE",
    status: "CORE",
    desc: "ES6+ syntax, asynchronous programming & interactive web logic",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>file_type_js</title>
        <path d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z" style={{ fill: "#f5de19" }} />
      </svg>
    ),
  },
  {
    name: "React",
    category: "FRAMEWORK",
    status: "CORE",
    desc: "Component architecture, virtual DOM, hooks & state management",
    logo: (
      <svg className="w-6 h-6 animate-spin-slow" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "STYLING",
    status: "CORE",
    desc: "Utility-first CSS framework for rapid & customizable UI design",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#38BDF8" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Git",
    category: "VERSION CONTROL",
    status: "CORE",
    desc: "Distributed version control system for tracking code changes",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.223-.605-.406-.525-.523-.668-1.277-.428-1.923L7.545 3.738.455 10.829c-.604.604-.604 1.582 0 2.187l10.48 10.479c.604.604 1.582.604 2.186 0l10.425-10.424c.604-.604.604-1.582 0-2.141z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    category: "PLATFORM",
    status: "CORE",
    desc: "Cloud code hosting, pull requests & open source project workflows",
    logo: (
      <svg className="w-6 h-6 text-slate-800 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

// Design & Icons Stack Items with Official Logos
const DESIGN_STACK = [
  {
    name: "Figma",
    category: "UI DESIGN",
    status: "PROTOTYPING",
    desc: "UI prototyping, interactive wireframing & component design systems",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 38 57">
        <path fill="#EA4C1D" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
        <path fill="#FF7262" d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" />
        <path fill="#1ABCFE" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
        <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
      </svg>
    ),
  },
  {
    name: "Canva",
    category: "CREATIVE",
    status: "GRAPHICS",
    desc: "Social media visual graphics, hero banners & presentation assets",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 508 508" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
        <g transform="matrix(.26718 0 0 .26718 0 0)">
          <circle cx="950" cy="950" r="950" fill="#7d2ae7" />
          <circle cx="950" cy="950" r="950" fill="url(#canvaRadial1)" />
          <circle cx="950" cy="950" r="950" fill="url(#canvaRadial2)" />
          <circle cx="950" cy="950" r="950" fill="url(#canvaRadial3)" />
          <circle cx="950" cy="950" r="950" fill="url(#canvaRadial4)" />
        </g>
        <path d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 01-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 00-6.476 1.683 3.689 3.689 0 00-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464 6.984-28.877 24.24-52.453 29.523-52.453 1.565 0 1.995 1.507 1.995 3.287 0 7.846-5.537 23.928-5.537 34.2 0 11.092 4.716 18.43 14.459 18.43 10.8 0 21.775-13.227 29.092-32.556 2.29 18.058 7.24 32.633 14.987 32.633 9.508 0 26.392-20.014 36.625-41.203 4.01.509 10.036.372 15.827-3.717-2.465 6.241-3.912 13.07-3.912 19.897 0 19.663 9.39 25.18 17.47 25.18 8.785 0 15.907-5.243 21.365-14.458 1.8 8.315 6.398 14.34 14.85 14.34 13.225 0 24.71-13.519 24.71-24.612 0-2.934-1.252-4.715-2.72-4.715zm-274.51 18.547c-5.342 0-7.435-5.38-7.435-13.401 0-13.93 9.528-37.193 19.604-37.193 4.402 0 6.065 5.185 6.065 11.524 0 14.145-9.059 39.07-18.235 39.07zm182.948-41.574c-3.189-3.796-4.343-8.961-4.343-13.559 0-5.673 2.074-10.467 4.558-10.467 2.485 0 3.248 2.446 3.248 5.85 0 5.693-2.035 14.008-3.463 18.176zm41.418 41.574c-5.34 0-7.434-6.182-7.434-13.401 0-13.441 9.528-37.193 19.682-37.193 4.402 0 5.967 5.146 5.967 11.524 0 14.145-8.902 39.07-18.215 39.07z" fill="#fff" fillRule="nonzero" />
        <defs>
          <radialGradient id="canvaRadial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(1469.491) rotate(-49.416 1.37 .302)"><stop offset="0" stopColor="#6420ff" /><stop offset="1" stopColor="#6420ff" stopOpacity="0" /></radialGradient>
          <radialGradient id="canvaRadial2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(54.703 42.717 594.194) scale(1657.122)"><stop offset="0" stopColor="#00c4cc" /><stop offset="1" stopColor="#00c4cc" stopOpacity="0" /></radialGradient>
          <radialGradient id="canvaRadial3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1023 -1030 473.711 470.491 367 1684)"><stop offset="0" stopColor="#6420ff" /><stop offset="1" stopColor="#6420ff" stopOpacity="0" /></radialGradient>
          <radialGradient id="canvaRadial4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(595.999 1372 -2298.41 998.431 777 256)"><stop offset="0" stopColor="#00c4cc" stopOpacity=".73" /><stop offset="0" stopColor="#00c4cc" /><stop offset="1" stopColor="#00c4cc" stopOpacity="0" /></radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Photopea",
    category: "IMAGE EDITING",
    status: "RASTER",
    desc: "Advanced web raster image editing, layer graphics & photo retouching",
    logo: (
      <svg className="w-6 h-6 rounded-md overflow-hidden" viewBox="0 0 24 24">
        <rect width="24" height="24" fill="#182430" />
        <path fill="#00C896" d="M6 5h7a4 4 0 0 1 4 4c0 2.2-1.8 4-4 4H9.5V19H6V5zm3.5 3v3H13a1 1 0 0 0 1-1 1 1 0 0 0-1-1H9.5z" />
      </svg>
    ),
  },
  {
    name: "Font Awesome",
    category: "UI ASSETS",
    status: "ICONS",
    desc: "Scalable vector icon suites & universal web branding symbols",
    logo: (
      <svg className="w-6 h-6 text-[#528DD7]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor">
        <path d="M155.7 160C170.3 150.8 180 134.5 180 116C180 87.3 156.7 64 128 64C99.3 64 76 87.3 76 116C76 132.7 83.8 147.5 96 157L96 576L160 576L160 512L533.6 512C548.2 512 560 500.2 560 485.6C560 481.9 559.2 478.3 557.7 474.9L496 336L557.7 197.1C559.2 193.7 560 190.1 560 186.4C560 171.8 548.2 160 533.6 160L155.7 160z" />
      </svg>
    ),
  },
  {
    name: "Lucide Icons",
    category: "UI ASSETS",
    status: "ICONS",
    desc: "Clean, consistent open-source React vector icons for modern UI",
    logo: (
      <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Remix Icons",
    category: "UI ASSETS",
    status: "ICONS",
    desc: "Neutral open-source system icon set for web & mobile interfaces",
    logo: (
      <svg className="w-6 h-6 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
      </svg>
    ),
  },
];

// AI Tools Stack Items with Official Attached Logos
const AI_TOOLS_STACK = [
  {
    name: "Claude",
    category: "AI ASSISTANT",
    status: "WORKFLOW",
    desc: "AI pair programming, code architecture, logic reasoning & analysis",
    logo: (
      <img src="/claude_logo.png" alt="Claude Logo" className="w-6 h-6 object-contain" />
    ),
  },
  {
    name: "Gemini",
    category: "MULTIMODAL AI",
    status: "WORKFLOW",
    desc: "Multimodal intelligence, web search synthesis & technical assistance",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="50%" stopColor="#9B51E0" />
            <stop offset="100%" stopColor="#E91E63" />
          </linearGradient>
        </defs>
        <path fill="url(#geminiGrad)" d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
      </svg>
    ),
  },
  {
    name: "ChatGPT",
    category: "GEN AI",
    status: "WORKFLOW",
    desc: "Conversational code generation, debugging, refactoring & ideation",
    logo: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#10A37F">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.771-4.2057 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7467-7.0731zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7947.7947 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.535-3.0137l.142.0852 4.783 2.7582a.7947.7947 0 0 0 .7854 0l5.8336-3.3692v2.3372a.0758.0758 0 0 1-.0332.0615l-4.8351 2.7913a4.4944 4.4944 0 0 1-6.1407-1.6505zm-1.226-9.7892a4.4708 4.4708 0 0 1 2.3413-1.9727V12.18a.7947.7947 0 0 0 .3928.6813l5.8336 3.3692-2.02 1.1686a.0758.0758 0 0 1-.071 0l-4.8303-2.7913a4.4944 4.4944 0 0 1-1.6464-6.1387zm16.7118 3.5298l-5.8336-3.3692 2.02-1.1686a.0758.0758 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.692 8.1114v-5.6814a.7947.7947 0 0 0-.3957-.6835zm2.0105-3.0232l-.142-.0852-4.783-2.7582a.7947.7947 0 0 0-.7854 0L9.5492 9.5484V7.2112a.0758.0758 0 0 1 .0332-.0615l4.8351-2.7913a4.4944 4.4944 0 0 1 6.6757 4.6622zm-12.6457 4.887l-2.02-1.1686a.0758.0758 0 0 1-.038-.052V6.2625a4.4992 4.4992 0 0 1 7.371-3.4536l-.142.0804-4.7783 2.7582a.7947.7947 0 0 0-.3927.6813v6.7369z" />
      </svg>
    ),
  },
  {
    name: "Antigravity",
    category: "AI AGENT",
    status: "WORKFLOW",
    desc: "Autonomous AI agentic pair programming & intelligent development",
    logo: (
      <img src="/antigravity_logo.png" alt="Antigravity Logo" className="w-6 h-6 object-contain" />
    ),
  },
];

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.08 }
    );

    const cards = containerRef.current?.querySelectorAll(".skill-card-item");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-24 border-b border-dark-border/40 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="eyebrow">// SKILLS &amp; TOOLKIT</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primaryText mt-2 tracking-tight">
            DEVELOPMENT STACK
          </h2>
          <p className="text-secondaryText text-sm md:text-base max-w-2xl mt-3 leading-relaxed">
            A growing toolkit spanning frontend development, UI/UX design, and productivity tools.
          </p>
        </div>

        {/* Category 1: Web Development Stack */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent border border-accent/20">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-primaryText tracking-tight">
              WEB DEVELOPMENT
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WEB_DEV_STACK.map((item, idx) => (
              <div
                key={idx}
                className="skill-card-item opacity-0 translate-y-8 transition-all duration-500 ease-out group p-5 rounded-2xl border border-dark-border dark:border-dark-border bg-white dark:bg-dark-card/50 hover:border-accent hover:bg-slate-50 dark:hover:bg-dark-card shadow-sm hover:shadow-glow relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border/60 group-hover:scale-110 transition-transform duration-300">
                      {item.logo}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-semibold">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-bold text-primaryText group-hover:text-accent transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-secondaryText leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/40 text-[10px] font-mono text-accent-light uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Design & Icons Stack */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Palette className="w-5 h-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-primaryText tracking-tight">
              DESIGN &amp; ICONS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESIGN_STACK.map((item, idx) => (
              <div
                key={idx}
                className="skill-card-item opacity-0 translate-y-8 transition-all duration-500 ease-out group p-5 rounded-2xl border border-dark-border dark:border-dark-border bg-white dark:bg-dark-card/50 hover:border-accent hover:bg-slate-50 dark:hover:bg-dark-card shadow-sm hover:shadow-glow relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border/60 group-hover:scale-110 transition-transform duration-300">
                      {item.logo}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400 dark:text-purple-300 font-semibold">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-bold text-primaryText group-hover:text-accent transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-secondaryText leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/40 text-[10px] font-mono text-purple-400 dark:text-purple-300 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: AI Tools Stack */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-primaryText tracking-tight">
              AI TOOLS
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AI_TOOLS_STACK.map((item, idx) => (
              <div
                key={idx}
                className="skill-card-item opacity-0 translate-y-8 transition-all duration-500 ease-out group p-5 rounded-2xl border border-dark-border dark:border-dark-border bg-white dark:bg-dark-card/50 hover:border-accent hover:bg-slate-50 dark:hover:bg-dark-card shadow-sm hover:shadow-glow relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-dark-bg/80 border border-slate-200 dark:border-dark-border/60 group-hover:scale-110 transition-transform duration-300">
                      {item.logo}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 dark:text-indigo-300 font-semibold">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-bold text-primaryText group-hover:text-accent transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-secondaryText leading-relaxed mt-1.5">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/40 text-[10px] font-mono text-indigo-400 dark:text-indigo-300 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
