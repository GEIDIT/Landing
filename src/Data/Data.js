import ServicioImg from "../Assets/images/feature1.png";

export const Data = {
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
      Text: "¡Platiquemos de que datos podemos proporcionarte!",
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
};
