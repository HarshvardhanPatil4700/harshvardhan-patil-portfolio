// // src/components/Skills/Skills.jsx
// import React from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// const Skills = () => (
//   <section
//     id="skills"
//     className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
//   >
//     {/* Section Title */}
//     <div className="text-center mb-8">
//       <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
//       <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//       <p className="text-gray-400 mt-4 text-lg font-semibold">
//         A collection of my technical skills and expertise honed through various
//         projects and experiences
//       </p>
//     </div>

//     {/* Skill Categories */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
//       {SkillsInfo.map((category, index) => (
//         <div
//           key={category.title}
//           className="skill-card-enter"
//           style={{ animationDelay: `${index * 120}ms` }}
//         >
//           <Tilt
//             tiltMaxAngleX={3}
//             tiltMaxAngleY={3}
//             perspective={1500}
//             scale={1.01}
//             transitionSpeed={2000}
//             gyroscope={false}
//             className="h-full"
//           >
//             {/* Gradient border */}
//             <div className="group h-full rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/60 via-white/10 to-fuchsia-500/30 hover:from-purple-400 hover:to-fuchsia-500/70 transition-all duration-500">
//               {/* Card surface */}
//               <div
//                 onMouseMove={handleMouseMove}
//                 className="relative h-full overflow-hidden rounded-2xl bg-[#150f33]/95 backdrop-blur-xl px-6 sm:px-10 py-8 shadow-[0_10px_40px_rgba(130,69,236,0.25)]"
//               >
//                 {/* Mouse-follow spotlight */}
//                 <div
//                   className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   style={{
//                     background:
//                       "radial-gradient(350px circle at var(--x) var(--y), rgba(130,69,236,0.22), transparent 45%)",
//                   }}
//                 />
//                 {/* Soft top highlight */}
//                 <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />

//                 <h3 className="relative text-2xl sm:text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
//                   {category.title}
//                 </h3>

//                 <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//                   {category.skills.map((skill) => (
//                     <div
//                       key={skill.name}
//                       className="flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-3xl py-2 px-2 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_18px_rgba(130,69,236,0.45)]"
//                     >
//                       <img
//                         src={skill.logo}
//                         alt={`${skill.name} logo`}
//                         className="w-6 h-6 sm:w-8 sm:h-8"
//                       />
//                       <span className="text-xs sm:text-sm text-gray-200">
//                         {skill.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Tilt>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Skills;

// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-200 mt-4 text-lg font-semibold">
          Technologies I use to build secure, scalable full-stack applications.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        {SkillsInfo.map((category, index) => (
          <div
            key={category.title}
            className="skill-card-enter"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              perspective={1500}
              scale={1.01}
              transitionSpeed={2000}
              gyroscope={false}
              className="h-full"
            >
              {/* Gradient border */}
              <div className="group h-full rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/60 via-white/10 to-fuchsia-500/30 hover:from-purple-400 hover:to-fuchsia-500/70 transition-all duration-500">
                {/* Card surface */}
                <div
                  onMouseMove={handleMouseMove}
                  className="relative h-full overflow-hidden rounded-2xl bg-[#150f33]/95 backdrop-blur-xl px-6 sm:px-10 py-8 shadow-[0_10px_40px_rgba(130,69,236,0.25)]"
                >
                  {/* Mouse-follow spotlight */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(350px circle at var(--x) var(--y), rgba(130,69,236,0.22), transparent 45%)",
                    }}
                  />
                  {/* Soft top highlight */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />

                  <h3 className="relative text-2xl sm:text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                    {category.title}
                  </h3>

                  <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-3xl py-2 px-2 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_18px_rgba(130,69,236,0.45)]"
                      >
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                        <span className="text-xs sm:text-sm text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
