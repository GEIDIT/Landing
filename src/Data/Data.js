import ServicioImg from "../Assets/images/feature1.png";
import LogoFooter from "../Assets/images/GeiditLogo.png";

export const Data = {
  HeroInfo: {
    Title: "Desarrollo de software a la medida y ciencia de datos.",
    Subtitle:
      "Impulsamos y transformamos negocios basados en tecnología y ciencia de datos.",
    CTA: "¡Platiquemos de tu idea!",
    Message:
      "¡Hey  *GEIDIT*  tengo un proyecto increíble! Quiero saber cuáles de sus servicios le dara más valor a mi proyecto !",
  },
  NavbarItems: {
    Logo: {
      name: "Logo",
      url: "https://i.postimg.cc/44MYBSNS/Geidit-Logo-desarollo-de-web-apps.png",
    },
    Links: [
      {
        name: "Nosotros",
        path: "/about",
      },
      {
        name: "Servicios",
        path: "/services",
      },
      {
        name: "Contact",
        path: "/contact",
      },
      {
        name: "Vacantes",
        path: "/vacancies",
      },
    ],
    textButon: "Contactanos",
  },
  WhatsApp: process.env.REACT_APP_WHATSAPP,
  ServiceList: [
    {
      title: "Desarrollo Web",
      description: [
        "Desarrollamos Apps y Plataformas web a la medida de tu negocio, 100% enfocadas a los usuarios para aportar el mayor valor posible.",
        "Desde un MVP para validar tu idea o negocio hasta una plataforma completa, Podemos crear sitios web estáticos, Un Web App o Una plataforma web completa.",
      ],
      img: ServicioImg,
      Message:
        "¡Hey  *GEIDIT*  tengo un proyecto increíble! Quiero ponerlo en linea !",
      Text: "¡Platiquemos de tu proxima Web",
    },
    {
      title: "Ciencia de Datos",
      description: [
        "Generamos entendimiento a través de la extracción y procesamiento de datos para unir todos los puntos y crear insights de valor para usuarios, audiencias, negocios y políticos.",
      ],
      img: ServicioImg,
      Message:
        "¡Hey  *GEIDIT*  tengo un proyecto increíble! Quiero Obtener información que me permita tomar decisiones de negocio  y/o conocer un panorama más amplio de donde se encuentra mi negocio. !",
      Text: "¡Platiquemos sobre datos!",
    },
    {
      title: "Tecnología a la medida",
      description: [
        "Toda nuestra experiencia desarrollando productos digitales puesta para construir basado en necesidades del negocio y sus clientes.",
      ],
      img: ServicioImg,
      Message: "Desarollo de productos digitales",
      Text: "Platiquemos de tu idea  ?",
    },
  ],
  CTABlock: {
    title:
      "Estás a un mensaje de empezar a construir el siguiente gran producto ",
    description:
      "Nos encantaría saber de tus necesidades, ¡no dudes en contactarnos!",
    Message: "¡Hey  *GEIDIT*  tengo un proyecto increíble! ¿Dónde empezamos?",
    Text: "Vamos a construir juntos",
  },
  FooterInfo: {
    Logo: {
      name: "Logo",
      url: LogoFooter,
    },
    Links: [
      {
        name: "Nosotros",
        path: "/about",
      },
      {
        name: "Servicios",
        path: "/services",
      },
      {
        name: "Contact",
        path: "/contact",
      },
      {
        name: "Vacantes",
        path: "/vacancies",
      },
    ],
    Social: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/Geidit.Mx/",
        icon: "fa-brands fa-facebook",
      },
      {
        name: "Instagram",
        url: "",
        icon: "fa-brands fa-instagram",
      },
      {
        name: "Whatsapp",
        url: `https://wa.me/${
          process.env.REACT_APP_WHATSAPP
        }?text=${"¡Hey  *GEIDIT*  tengo un proyecto increíble! ¿Dónde empezamos?"}`,
        icon: "fa-brands fa-whatsapp",
      },
    ],
  },
};
