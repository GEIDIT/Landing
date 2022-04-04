import ServicioImg from "../Assets/images/feature1.png";
import ServicioImg1 from "../Assets/images/feature2.png";
import ServicioImg2 from "../Assets/images/feature3.png";
import LogoFooter from "../Assets/images/GeiditLogo.png";
import ErrorImg from "../Assets/images/Error.png";

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
        enabled: false,
      },
      {
        name: "Servicios",
        path: "/services",
        enabled: false,
      },
      {
        name: "Contact",
        path: "/contact",
        enabled: false,
      },
      {
        name: "Vacantes",
        path: "/vacancies",
        enabled: false,
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
        "Desde el monitoreo de noticas, seguimiento de tendencias, análisis de datos, creación de dashboards y visualizaciones de datos, Podemos brindarte informacion clave.",
      ],
      img: ServicioImg1,
      Message:
        "¡Hey  *GEIDIT*  tengo un proyecto increíble! Quiero Obtener información que me permita tomar decisiones de negocio  y/o conocer un panorama más amplio de donde se encuentra mi negocio. !",
      Text: "¡Platiquemos sobre datos!",
    },
    {
      title: "Soluciones a medida",
      description: [
        "Soluciones a medida para cualquier tipo de proyecto, desde una solución de Marketing Digital hasta una solución de desarrollo de software a la medida.",
        "Desarrollamos soluciones web a medida  para resolver los problemas reales de tu empresa. Integramos los procesos de tu negocio en un único sistema.",
      ],
      img: ServicioImg2,
      Message:
        "¡Hey  *GEIDIT*  tengo un proyecto increíble! Quiero un sistema para mi negocio  !",
      Text: "Dinos como podemos ayudarte",
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
  FormInfo: {
    Title: "Hablemos",
    Description:
      "Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.",
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
  ErrorPage: {
    img: ErrorImg,
    Title: "404",
    Subtitle: "Página no encontrada",
    Description:
      "lo sentimos, no se pudo encontrar la página que solicitaste. Por favor, vuelva a la página de inicio",
    btn: "Regresar al inicio",
    path: "/",
  },
};
