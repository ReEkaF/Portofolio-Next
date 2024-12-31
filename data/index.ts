import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },

];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/profile.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Bridging Code and Commerce: Mastering Full-Stack Development with Business Insight",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "i currently work as a freelance developer",
    description: "My next Project",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/free.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "SILUNI(Sistem Alumni Universitas Trunojoyo Madura)",
    des: "Tracking Alumni data and their activities, as well as providing a platform for alumni to connect with each other and the university.",
    img: "/siluni.webp",
    iconLists: ["/laravel.svg", "/tail.svg", "/js.svg", "/mysql.svg"],
    link: "https://siluni.sakera.id/",
    type: "Real Project",
    className:
      "flex items-center justify-between mt-7 mb-3 font-mono rounded-xl text-blue-400",
  },
  {
    id: 2,
    title: "Beras.In",
    des: "A web-based platform for provide information about the price of rice, teh product of rice, and image identification of rice.",
    img: "/beras.webp",
    iconLists: ["/re.svg", "/python.svg", "/tail.svg"],
    link: "/https://beras-in.vercel.app/",
    type: "Personal Project",
    className:
      "flex items-center justify-between mt-7 mb-3 font-mono rounded-xl ",
  },
  {
    id: 3,
    title: "SST(Sistem Sekolah Terintegrasi)",
    des: "A web-based platform for managing school data, such as student data, teacher data, and school activities.",
    img: "/ppl.webp",
    iconLists: ["/laravel.svg", "/tail.svg", "/js.svg", "/mysql.svg"],
    link: "/https://github.com/ReEkaF/PPL-project",
    type: "Personal Project",
    className:
      "flex items-center justify-between mt-7 mb-3 font-mono rounded-xl ",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Store Owner",
    desc: "Managing a store, including inventory management, customer service, and sales.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    date: "2021 - 2023",
  },
  {
    id: 2,
    title: "Freelance Developer",
    desc: "Developments web/apps based on client requirements, ensuring high-quality results.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
    date: "2024 - Now",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ReEkaF",
  },
  {
    id: 2,
    img: "/wa.svg",
    link: "https://wa.me/6289515896944",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/andre-eka-ferdiansyah-8a9aa1336/",
  },
];
