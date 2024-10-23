import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 xl:w-1/4 px-4 mb-4">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-2/3 xl:w-3/4 px-4 mb-4 flex justify-start">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-2">Información</h2>
            <ul className="text-lg">
              <li className="mb-2">
                <span className="font-bold">Estado:</span> {character.status}
              </li>
              <li className="mb-2">
                <span className="font-bold">Especie:</span> {character.species}
              </li>
              <li className="mb-2">
                <span className="font-bold">Género:</span> {character.gender}
              </li>
              <li className="mb-2">
                <span className="font-bold">Origen:</span> {character.origin?.name}
              </li>
              <li className="mb-2">
                <span className="font-bold">Ubicación:</span> {character.location?.name}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">Aparece en los episodios:</h2>
      <div className="flex flex-wrap gap-2">
        {character.episode?.map((episode, index) => {
          const episodeNumber = episode.split('/').pop().replace('.json', '');
          return (
            <button
              key={index}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Episodio {episodeNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterPage;