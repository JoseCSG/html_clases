import "./App.css";
function App() {
  const socialMedia = [
    {
      name: "LinkedIn",
      icon: "fi fi-brands-linkedin",
      url: "https://www.linkedin.com/in/josec-sanchezg/",
    },
    {
      name: "GitHub",
      icon: "fi fi-brands-github",
      url: "https://github.com/JoseCSG",
    },
    {
      name: "Correo Electronico",
      icon: "fi fi-sr-envelope",
      url: "mailto:a01174050@tec.mx",
    },
    {
      name: "Telefono",
      icon: "fi fi-sr-circle-phone-flip rotate-90",
      url: "tel:+52 961 236 2865",
    },
  ];

  const technologies = [
    "React",
    "Tailwind",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
    "C++",
    "Python",
  ];

  const projects = [
    {
      name: "Robots en un almacén",
      date: "11/2023 – 12/2023",
      description:
        "Realicé una simulación de robots de almacenamiento independientes en un almacén utilizando Python-Mesa. Implementé el algoritmo Star para encontrar la ruta más corta entre un robot, una caja y un estante. Mostré la simulación utilizando Unity y comuniqué la información utilizando una API REST en Flask.",
    },
    {
      name: "United Society",
      date: "08/2023 – 11/2023",
      description: "Trabajé con Yco para diseñar una aplicación móvil para dispositivos iOS, utilizando Swift; donde los usuarios podían cargar sus experiencias con organizaciones sociales que los ayudaron. Conecté a más de 20 organizaciones con 300 usuarios. Utilicé Firebase y Mongo para almacenar todos los datos de usuarios y organizaciones, y Flask para la comunicación REST."
    },
    {
      name: "Investor Coach para Banorte",
      date: "09/2023",
      description: "Construí una interfaz de chatbot con React y Tailwind, con una comunicación REST utilizando Django. Afiné un modelo GPT para dar consejos de inversión a los usuarios y utilicé sockets para mejorar la experiencia de chat. También permití que el chatbot recordara conversaciones anteriores almacenando los datos con Postgres."
    },
    {
      name: "Global Trainees Ternium",
      date: "04/2023 – 06/2023",
      description: "Trabajé con Ternium para crear un sitio web con el stack PERN (PostgreSQL, Express, React y Node.js) con el objetivo de proporcionar un sistema de seguimiento de progreso personalizado para los internos. Reemplacé el sistema de hojas de cálculo que tenían con una base de datos, utilizando PostgreSQL y Express para almacenar y recuperar datos. También agregué un juego de Unity al sitio web para que fuera más interactivo y atractivo para los internos."
    },
  ];

  return (
    <main className="flex flex-col h-dvh w-dvw justify-between bg-black">
      <div className="p-10 flex flex-col pb-0">
        <section className="flex flex-row gap-10">
          <img
            src="https://avatars.githubusercontent.com/u/88837447?v=4"
            className=" size-80 rounded-full self-center"
          />
          <div className="flex flex-col w-full gap-8 justify-center">
            <p className="text-5xl inline-block font-medium text-white text-center hover:bg-gradient-to-r from-purple-900 to-purple-200 hover:text-transparent hover:bg-clip-text">
              José Carlos Sánchez Gómez
            </p>
            <p className="text-2xl font-medium text-white text-center">
              Estudiante de la carrera de Ingenieria en Tecnologias
              Computacionales.
            </p>
            <div className="flex flex-row justify-around items-baseline gap-5 mt-4">
              <article className="flex flex-col w-1/3 bg-gradient-to-br from-blue-800 h-full to-blue-200 p-4 rounded-lg">
                <div className="flex flex-row justify-between items-baseline">
                  <p className="text-lg font-medium text-white">Educación:</p>
                  <p className="text-md text-wrap font-medium text-white">
                    Agosto 2021 - Junio 2025
                  </p>
                </div>
                <p className="text-sm text-white">
                  Instituto Tecnologico de Monterrey
                </p>
                <p className="text-sm text-white">
                  Ingenieria en Tecnologias Computacionales
                </p>
              </article>
              <article className="flex flex-col w-1/3 bg-gradient-to-br from-blue-800 h-full to-blue-200 p-4 rounded-lg">
                <div className="flex flex-row justify-between items-baseline">
                  <p className="text-lg font-medium text-white">Experiencia:</p>
                  <p className="text-md text-wrap font-medium text-white">
                    Swirvle
                  </p>
                </div>
                <p className="text-sm text-white">
                  Desarrollo de Front con Bootstrap y React
                </p>
                <p className="text-sm text-white">
                  Manejo de base de datos en Firebase
                </p>
              </article>
              <article className="flex flex-col w-1/3 bg-gradient-to-br from-blue-800 to-blue-200 h-full p-4 rounded-lg">
                <p className="text-lg font-medium text-white">Tecnologias:</p>
                <ul className="flex gap-3 mt-2 flex-wrap flex-row appearance-none">
                  {technologies.map((tech) => (
                    <li className="text-sm text-white hover:animate-bounce duration-150 cursor-pointer transition-all ">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section id="projects" className=" mt-10">
          <p className="text-3xl font-medium text-white pb-3">Proyectos</p>
          <div className="flex max-h-64 flex-col overflow-auto gap-10">
            {projects.map((project) => (
              <article className=" bg-blue-300 rounded-lg p-3 flex flex-col gap-2">
                <div className="flex flex-row justify-between items-baseline">
                  <p className="text-lg font-medium text-white">{project.name}</p>
                    <p className="text-md text-wrap font-medium text-white">
                    {project.date}
                  </p>
                </div>
                <p className="text-sm text-white">{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-black font-medium h-auto pb-12 flex items-center justify-center">
        <ul className="flex flex-row social-media ms-10 gap-10">
          {socialMedia.map((social) => (
            <li className="flex flex-row gap-2 text-4xl items-center justify-center duration-150  hover:scale-110 transition-all text-white">
              <i className={social.icon} style={{ lineHeight: "0" }}></i>
              <a href={social.url} className="">
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}

export default App;
