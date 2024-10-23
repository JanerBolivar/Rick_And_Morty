import React from 'react';
import { Link } from 'react-router-dom';

function CardView({ id, name, image, species, location, url }) {
  return (
    <li className="w-fit mx-auto group">
      <Link to={`/CharacterPage/${id}`}>
        <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 hover:border-indigo-600 hover:shadow-xl transition duration-300">
          <img
            src={image}
            loading="lazy"
            alt={name}
            className="w-48 rounded-lg"
          />
          <div className="mt-3 space-y-2">
            <span className="block text-indigo-600 text-sm">Ubicación: {location}</span>
            <h3 className="text-3xl text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
              {name}
            </h3>
            <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">Especie: {species}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CardView;