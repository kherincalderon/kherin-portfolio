'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';

const about = {
  title: 'About me',
  desctiption:
    "I'm a full-stack developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I'm always looking to learn new things and improve my skills, and I'm excited to take on new challenges and projects.",
  info: [
    {
      fielName: 'Name',
      fieldValue: 'Kherin',
    },
    {
      fielName: 'Phone',
      fieldValue: '(+502) 5513 6889',
    },
    {
      fielName: 'Experience',
      fieldValue: '7+ Years',
    },
    {
      fielName: 'Zoom',
      fieldValue: 'kherincalderon',
    },
    {
      fielName: 'Nationality',
      fieldValue: 'Guatemalan',
    },
    {
      fielName: 'Email',
      fieldValue: 'kherincalderon@gmail.com',
    },
    {
      fielName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fielName: 'Languajes',
      fieldValue: 'English, Spanish',
    },
  ],
};

const experience = {
  title: 'My Experience',
  icon: '/assets/resume/badge.svg',
  description:
    "I've been working as a full-stack developer for over 7 years. I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I've worked on a wide range of projects, from small websites to large web applications, and I'm always looking to learn new things and improve my skills.",
  items: [
    {
      company: 'Company Name',
      position: 'Full-stack Developer',
      duration: '2019 - Present',
    },
    {
      company: 'Company Name',
      position: 'Full-stack Developer',
      duration: '2019 - Present',
    },
    {
      company: 'Company Name',
      position: 'Full-stack Developer',
      duration: '2019 - Present',
    },
    {
      company: 'Company Name',
      position: 'Full-stack Developer',
      duration: '2019 - Present',
    },
  ],
};

const education = {
  title: 'My Education',
  icon: '/assets/resume/cap.svg',
  description:
    "I've been working as a full-stack developer for over 7 years. I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I've worked on a wide range of projects, from small websites to large web applications, and I'm always looking to learn new things and improve my skills.",
  items: [
    {
      institution: 'Institution Name',
      degree: 'Full-stack Developer',
      duration: '2019 - Present',
    },
    {
      institution: 'Institution Name',
      degree: 'Full-stack Developer',
      duration: '2019 - Present',
    },
    {
      institution: 'Institution Name',
      degree: 'Full-stack Developer',
      duration: '2019 - Present',
    },
    {
      institution: 'Institution Name',
      degree: 'Full-stack Developer',
      duration: '2019 - Present',
    },
  ],
};

const skills = {
  title: 'My Skills',
  description:
    'I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills, and I am excited to take on new challenges and projects.',
  skillList: [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'React',
      icon: <FaReact />,
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-x-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Educaction</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hiver:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:m-0">
                  {about.desctiption}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 text-md">
                          {item.fielName}
                        </span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
