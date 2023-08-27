import {
    mobile,    
    creator,
    web,
    javascript,
    
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    figma,
    
    firebase,
    
    carrent,
    jobit,
    tripguide,
    
    Byjus, 
    logo, 
    chowe, 
    stache, 
    comment,
    portfolio, 
    beyond, 
    programming, 
    BeyondExperience, 
    Colombia, 
    England
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const navegacion = [
    {
      id: "about",
      title: "Sobre mi",
    },
    {
      id: "projects",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ]; 
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },    
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    }, 
    {
      name : 'Firebase', 
      icon : firebase
    }    
  ];
  
  const experiences = [
    {
      title: "Software Programming Instructor",
      company_name: "Byju's Future School",
      icon: Byjus,
      iconBg: "#383E56",
      date: "Octubre 2022 - Octubre 2023",
      points: [
        "As a Software Programming Instructor, I have had the privilege of contributing significantly to the learning experiences of my students through various roles and responsibilities. One of my core responsibilities has been to define, evaluate, and validate learning outcomes, ensuring that the courses I instruct align with educational standards and meet the needs of the learners.",
        "Throughout my tenure, I have been responsible for delivering high-quality instruction in software programming courses, adapting my instructional strategies to cater to the diverse learning needs of my students effectively. Collaborating closely with the instructional team, I have actively participated in the creation of comprehensive lesson plans, ensuring that the curriculum remains engaging and up-to-date.",
        "An integral part of my role has been the design, development, and review of course materials. This process allows me to leverage my expertise and industry knowledge, ensuring that the content is relevant and aligned with the latest industry trends and technologies.",
        "As a role model, I demonstrate positive academic attitudes and behaviors, inspiring my students to develop a strong work ethic and a passion for continuous learning.",
      ],
    },
    {
      title: "Personal Software Projects",
      company_name: "LopezJoha",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "2022 - 2023",
      points: [
        "",
        "",
        "",
        "",
      ],
    },
    
  ];
  
  
  const projects = [
    {
      name: "Chowé",
      description:
        "I developed an attractive and dynamic website using JavaScript, HTML, and CSS. I implemented various functionalities using purely front-end technologies, enabling an interactive and smooth user experience that allows them to search products, and manage orders by WhatsApp",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        
      ],
      image: chowe,
      source_code_link: "https://github.com/",
    },
    {
      name: "Stache",
      description:
        "I had the opportunity to work with React Native and the Expo platform to develop a mobile and web application. The application presents an appealing user interface and a smooth user experience, all using the latest technologies from React and React Native.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "React-Native",
          color: "green-text-gradient",
        },
        {
          name: "Expo",
          color: "pink-text-gradient",
        },
        {
          name: "Css 3",
          color: "orange-text-gradient",
        },
        
      ],
      image: stache,
      source_code_link: "https://github.com/",
    },
    {
      name: "Custom Comment Management",
      description:
        "I built a React application that allows users to specify criteria, and based on this, the application displays different comments. This project blends interactive application development with robust testing to guarantee functionality and software quality.",
      tags: [
        {
          name: "React & React DOM",
          color: "blue-text-gradient",
        },             
        {
          name: "Css 3",
          color: "green-text-gradient",
        },
        {
          name: "Jest",
          color: "pink-text-gradient",
        },
      ],
      image: comment,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "I utilized various modern technologies and dependencies to develop an interactive and visually appealing website. I used React libraries to create a stunning 3D experience. I also employed framer-motion to add smooth and custom animations to my application.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },             
        {
          name: "@react-three",
          color: "green-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
    name: "Beyond the Experience",
    description:
      "I developed a landing page and booking system for a tourism company using WordPress. I utilized a combination of technologies and popular plugins to create a robust and functional platform that allows users to explore and book their travel destinations easily and securely.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },             
      {
        name: "WordPress Theme",
        color: "green-text-gradient",
      },
      {
        name: "HTML / CSS",
        color: "pink-text-gradient",
      },
    ],
    image: BeyondExperience,
    source_code_link: "https://github.com/",
  },
  {
    name: `Programming Instructor`,
    description:  `For the past year, I've been working as a children's programming instructor at Byju’s Future School. Together, we've developed video games like endless runners, real-time database-connected car racing games, as well as highly useful learning exercises and applications.`,
    tags: [
      {
        name: "Html, Js, Css",
        color: "blue-text-gradient",
      },             
      {
        name: "p5.js",
        color: "green-text-gradient",
      },
      {
        name: "React - React-Native ",
        color: "pink-text-gradient",
      },
    ],
    image: programming,
    source_code_link: "https://github.com/",
  },
  ];
  

  const proyectos = [
    {
      name: "Chowé",
      description:
        "En este proyecto, desarrollé un sitio web atractivo y dinámico utilizando JavaScript, HTML y CSS. Implementé diversas funcionalidades utilizando solo tecnologías front-end, lo que permitió una experiencia de usuario interactiva y fluida, permitiendo buscar productos y generar pedidos por WhatsApp",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        
      ],
      image: chowe,
      source_code_link: "https://github.com/",
    },
    {
      name: "Stache",
      description:
        "Tuve la oportunidad de trabajar con React Native y la plataforma Expo para desarrollar una aplicación móvil y web. La aplicación presenta una interfaz de usuario atractiva y experiencia de usuario fluida, todo ello empleando las tecnologías más recientes de React y React Native.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "React-Native",
          color: "green-text-gradient",
        },
        {
          name: "Expo",
          color: "pink-text-gradient",
        },
        {
          name: "Css 3",
          color: "orange-text-gradient",
        },
        
      ],
      image: stache,
      source_code_link: "https://github.com/",
    },
    {
      name: "Gestión de Comentarios Personalizados",
      description:
        "He creado una aplicación React que permite a los usuarios especificar criterios y, en función de esto, la aplicación muestra diferentes comentarios. Este proyecto combina el desarrollo de aplicaciones interactivas con pruebas sólidas para garantizar la funcionalidad y la calidad de software.",
      tags: [
        {
          name: "React & React DOM",
          color: "blue-text-gradient",
        },             
        {
          name: "Css 3",
          color: "green-text-gradient",
        },
        {
          name: "Jest",
          color: "pink-text-gradient",
        },
      ],
      image: comment,
      source_code_link: "https://github.com/",
    },
    {
      name: "Portfolio",
      description:
        "En este proyecto, utilicé diversas tecnologías y dependencias modernas para desarrollar un sitio web interactivo y atractivo. Utilicé React junto con las bibliotecas @react-three/fiber y @react-three/drei para crear una experiencia en 3D impresionante. También empleé framer-motion para agregar animaciones suaves y personalizadas.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },             
        {
          name: "@react-three",
          color: "green-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name:  `Beyond the Experience`,
      description:
        "Dsarrollé una página de aterrizaje y sistema de reservas para una compañía de turismo utilizando WordPress. Utilicé una combinación de tecnologías y plugins populares para crear una plataforma sólida y funcional que permitiera a los usuarios explorar y reservar sus destinos de viaje de manera fácil y segura.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },             
        {
          name: "WordPress Theme",
          color: "green-text-gradient",
        },
        {
          name: "HTML / CSS",
          color: "pink-text-gradient",
        },
      ],
      image: BeyondExperience,
      source_code_link: "https://github.com/",
    },
    {
      name: `Programming Instructor`,
      description:  `Durante el último año, me desempeño como instructora de programación infantil en Byju’s Future School. Colaboramos en la creación de videojuegos como corredores infinitos y carreras de autos con base de datos en tiempo real, además de aplicaciones educativas y ejercicios innovadores.`,
      tags: [
        {
          name: "Html, Js, Css",
          color: "blue-text-gradient",
        },             
        {
          name: "p5.js",
          color: "green-text-gradient",
        },
        {
          name: "React - React-Native ",
          color: "pink-text-gradient",
        },
      ],
      image: programming,
      source_code_link: "https://github.com/",
    },
  ];

  
  export { services, technologies, experiences, testimonials, projects, proyectos };


  // {
  //   name: "",
  //   description:
  //     "",
  //   tags: [
  //     {
  //       name: "",
  //       color: "blue-text-gradient",
  //     },             
  //     {
  //       name: "",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: '',
  //   source_code_link: "https://github.com/",
  // },
  