// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaCode, FaCloud, FaShieldAlt, FaDatabase, FaUsers } from "react-icons/fa";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

const bulletIcons = [
  <FaCode key="code" className="text-white text-xs sm:text-sm" />,
  <FaCloud key="cloud" className="text-white text-xs sm:text-sm" />,
  <FaShieldAlt key="shield" className="text-white text-xs sm:text-sm" />,
  <FaDatabase key="db" className="text-white text-xs sm:text-sm" />,
  <FaUsers key="users" className="text-white text-xs sm:text-sm" />
];

const bulletGradients = [
  "from-purple-600 to-indigo-600 border-purple-400/50 shadow-purple-500/30",
  "from-blue-600 to-cyan-500 border-cyan-400/50 shadow-cyan-500/30",
  "from-teal-600 to-emerald-500 border-emerald-400/50 shadow-emerald-500/30",
  "from-fuchsia-600 to-pink-500 border-pink-400/50 shadow-pink-500/30",
  "from-violet-600 to-purple-500 border-violet-400/50 shadow-violet-500/30"
];

function highlightText(text) {
  const highlights = [
    'REST APIs', 'Python', 'FastAPI', 'PostgreSQL',
    'AI-assisted', 'RAG-based', 'AI-driven', 'Docker', 'Git-based'
  ];

  let parts = [text];
  highlights.forEach(term => {
    const newParts = [];
    parts.forEach(part => {
      if (typeof part === 'string') {
        const regex = new RegExp(`(${term})`, 'gi');
        const split = part.split(regex);
        split.forEach((subPart) => {
          if (subPart.toLowerCase() === term.toLowerCase()) {
            newParts.push(
              <span key={Math.random()} className="font-semibold text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                {subPart}
              </span>
            );
          } else {
            newParts.push(subPart);
          }
        });
      } else {
        newParts.push(part);
      }
    });
    parts = newParts;
  });

  return parts;
}

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] px-4 md:px-8">
      <Image
        src="/section.svg"
        alt="Background glow"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-60"
      />

      {/* Header Section */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center gap-3">
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-transparent to-[#16f2b3]"></span>
          <h2 className="bg-gradient-to-r from-[#16f2b3] via-sky-400 to-purple-500 bg-clip-text text-transparent text-2xl sm:text-4xl font-extrabold tracking-wider px-2">
            Experiences
          </h2>
          <span className="w-16 sm:w-24 h-[2px] bg-gradient-to-l from-transparent to-[#16f2b3]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Lottie Animation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-md lg:max-w-none">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Cards / Timeline Section */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {experiences.map((item) => (
              <GlowCard key={item.id} identifier={`experience-${item.id}`}>
                <div className="p-5 sm:p-7 relative backdrop-blur-md rounded-xl border border-indigo-500/20 bg-[#0d0f26]/90 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border border-blue-400/40 text-blue-300 text-xs sm:text-sm font-medium mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <FaCalendarAlt className="text-blue-400" />
                    <span>{item.duration.replace(/[()]/g, '')}</span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide uppercase mb-1">
                    {item.title.includes("SOFTWARE") ? (
                      <>
                        <span className="text-white">SOFTWARE DEVELOPER </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ENGINEER</span>
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base font-medium mb-6">
                    <FaMapMarkerAlt className="text-purple-400" />
                    <span>{item.company}</span>
                  </div>

                  {/* Timeline Description Bullet Points */}
                  {item.description && Array.isArray(item.description) && (
                    <div className="relative pl-3 sm:pl-4 space-y-5">
                      {/* Vertical line connector */}
                      <div className="absolute left-[17px] sm:left-[21px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-blue-500/20" />

                      {item.description.map((point, index) => (
                        <div key={index} className="relative flex items-start gap-4 z-10 group">
                          <div className={`flex items-center justify-center min-w-[28px] h-[28px] sm:min-w-[32px] sm:h-[32px] rounded-full bg-gradient-to-br border ${bulletGradients[index % bulletGradients.length]} shadow-md transition-transform duration-300 group-hover:scale-110`}>
                            {bulletIcons[index % bulletIcons.length]}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed pt-1 font-normal">
                            {highlightText(point)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;