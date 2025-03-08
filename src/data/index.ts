export const navItems = [
  { name: "About", link: "#about", hero: "font-semibold lg:text-2xl border-[#8EAEC7] rounded-none bg-white text-[#8EAEC7] hover:border-[#8EAEC7] hover:bg-[#8EAEC7] hover:text-white px-5 py-1" },
  { name: "Skills", link: "#skills", hero: "font-semibold lg:text-2xl border-[#8EAEC7] rounded-none bg-white text-[#8EAEC7] hover:border-[#8EAEC7] hover:bg-[#8EAEC7] hover:text-white px-5 py-1" },
  { name: "Projects", link: "#projects", hero: "font-semibold lg:text-2xl border-[#8EAEC7] rounded-none bg-white text-[#8EAEC7] hover:border-[#8EAEC7] hover:bg-[#8EAEC7] hover:text-white px-5 py-1" },
  { name: "Contact", link: "#contact", hero: "font-semibold lg:text-2xl border-[#8EAEC7] rounded-none bg-white text-[#8EAEC7] hover:border-[#8EAEC7] hover:bg-[#8EAEC7] hover:text-white px-5 py-1" },
];

export const skills = [
  {
    id: 1,
    img: "/javascriptLogo.png",
    name: "JavaScript"
  },
  {
    id: 2,
    img: "/typescriptLogo.png",
    name: "TypeScript"
  },
  {
    id: 3,
    img: "/htmlLogo.png",
    name: "HTML5"
  },
  {
    id: 4,
    img: "/cssLogo.png",
    name: "CSS3"
  },
  {
    id: 5,
    img: "/cppLogo.png",
    name: "C++"
  },
  {
    id: 6,
    img: "/pythonLogo.png",
    name: "Python"
  },
  {
    id: 7,
    img: "/javaLogo.png",
    name: "Java"
  },
  {
    id: 8,
    img: "/sqlLogo.png",
    name: "SQL"
  },
  {
    id: 9,
    img: "/nextjsLogo.png",
    name: "Next"
  },
  {
    id: 10,
    img: "/reactLogo.png",
    name: "React"
  },
  {
    id: 11,
    img: "/nodejsLogo.png",
    name: "Node"
  },
  {
    id: 12,
    img: "/eslintLogo.png",
    name: "ESLint"
  },
  {
    id: 13, 
    img: "/mysql8Logo.png",
    name: "MySQL"
  },
  {
    id: 14,
    img: "/sequelizeLogo.png",
    name: "Sequelize ORM"
  },
  {
    id: 15, 
    img: "/tailwindLogo.png",
    name: "Tailwind CSS"
  },
  {
    id: 16,
    img: "/figmaLogo.png",
    name: "Figma"
  },
  {
    id: 17,
    img: "/gitLogo.png",
    name: "Git"
  },
  {
    id: 18,
    img: "/vercelLogo.png",
    name: "Vercel"
  },
  {
    id: 19,
    img: "/firebaseLogo.png",
    name: "Firebase"
  },
];

export const projects = [
  {
    id: 1,
    title: "EvenBabiesBuildPCs (EBBP)",
    iconLists: ["/nextjsLogo.png", "javascriptLogo.png", "pythonLogo.png", "/tailwindLogo.png", "/mysql8Logo.png", "sequelizeLogo.png"],
    collabs: "Khoa Tra, Reagan Vu",
    des: "A PC build compatibility checker that helps users select the latest PC components (post 12th gen & AM4) while ensuring they work together. Avoid costly mistakes by verifying hardware compatibility and detecting potential issues before assembling your build.",
    live: "https://ebbp-web.vercel.app/",
    repo: "https://github.com/seabluc/ebbp",
    img: "/ebbp.png",
    demo: "https://www.youtube.com/watch?v=OhVf0lgJQfo",
  },
  {
    id: 2,
    title: "Gesturised",
    iconLists: ["/reactLogo.png", "/typescriptLogo.png", "/tailwindLogo.png", "/handtrackjs.png", "/zustand.svg", "eslintLogo.svg"],
    collabs: "Philip Vu, Hannah Kim",
    des: "An interactive virtual meeting platform that utilizes gesture recognition to enhance video conferencing. Perform specific hand gestures to trigger unique actions, making online meetings more dynamic and engaging.",
    live: "https://gesturised-web.vercel.app/",
    repo: "https://github.com/GhostWalker562/gesturised",
    img: "/gesturised.png",
    demo: "https://www.youtube.com/watch?v=9AoQ6BLA5h0",
  },
  {
    id: 3,
    title: "MyTamaFriend",
    iconLists: ["/javascriptLogo.png", "/cssLogo.png", "/htmlLogo.png"],
    collabs: "David Schurer, Selina Nguyen, Shivam Bakshi",
    des: "A Tamagotchi-inspire game where users take care of their own virtual pet, Mametchi, by managing his stats. Stats include hunger, happiness, health, and restroom. MyTamaFriend stimulates the experience of raising a digital pet and challenges the user to keep it alive and well.",
    live: "https://davidschurer.github.io/Tamagotchi-Game/",
    repo: "https://github.com/DavidSchurer/Tamagotchi-Game",
    img: "/mytamafriend.png",
  },
];

export const navIcons = [
  {
    id: 1,
    name: "GitHub",
    img: "/gitNav.svg",
    link: "https://www.github.com/seabluc"
  },
  {
    id: 2,
    name: "LinkedIn",
    img: "/linkNav.svg",
    link: "https://www.linkedin.com/in/sean-luc-ghim/",
  },
  {
    id: 3,
    name: "Resume",
    img: "/resume.svg",
    link: "/SeanLucGhim-Resume-LaTex.pdf",
  }
]

export const contactIcons = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.github.com/seabluc"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sean-luc-ghim/",
  },
  {
    id: 3,
    img: "/email.svg",
    link: "mailto:seanluc.ghim@gmail.com",
  }
];