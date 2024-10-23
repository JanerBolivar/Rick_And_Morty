import React from 'react';

const AcercaDe = () => {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <div>
        <img
          src="https://verpex.com/assets/uploads/images/blog/How-to-become-a-Backend-Developer.jpg?v=1665484477"
          alt="Backend Developer"
          className="w-full h-60 rounded-t-md"
        />
        <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
          <div className="flex-none w-10 h-10 rounded-full">
            <img
              src="https://portafolio-two-coral.vercel.app/IMG/Perfil.jpg"
              className="w-full h-full rounded-full"
              alt="Janer Muñoz"
            />
          </div>
          <div className="ml-3">
            <span className="block text-gray-900">Janer Fabian Muñoz Bolivar</span>
            <span className="block text-gray-400 text-sm">Desarrollador Backend</span>
          </div>
        </div>
        <div className="pt-3 ml-4 mr-2 mb-3">
          <h3 className="text-xl text-gray-900">Sobre mí</h3>
          <p className="text-gray-400 text-sm mt-1">
            Desarrollador Backend con experiencia en Node.js, MongoDB, MySQL, PostgreSQL, IoT, y más.
          </p>
          <h3 className="text-xl text-gray-900 mt-4">Estudios</h3>
          <ul>
            <li className="text-gray-400 text-sm mt-1">
              NDG Linux Essentials - Cisco Networking Academy
            </li>
            <li className="text-gray-400 text-sm mt-1">
              Introducción a IoT - Cisco Networking Academy
            </li>
            <li className="text-gray-400 text-sm mt-1">
              Diseño Web Usable y Accesible - Corporación Unificada Nacional de Educación Superior CUN
            </li>
          </ul>
          <h3 className="text-xl text-gray-900 mt-4">Experiencia</h3>
          <ul>
            <li className="text-gray-400 text-sm mt-1">
              Apoyo a la logística del 4to Congreso Internacional de TIC para la Amazonia - Universidad de la Amazonia (2023)
            </li>
            <li className="text-gray-400 text-sm mt-1">
              Encargado de la Infraestructura de Red - Red Amazonia Libre, Universidad de la Amazonia (2023)
            </li>
            <li className="text-gray-400 text-sm mt-1">
              Miembro del Udla Verso Team - Universidad de la Amazonia (2022)
            </li>
            <li className="text-gray-400 text-sm mt-1">
              Asesor del Concurso de Robótica - Universidad de la Amazonia (2022-2024)
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default AcercaDe;