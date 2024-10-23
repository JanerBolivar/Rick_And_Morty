import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardView from '../../components/CardView';

const HumanPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHumanCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/', {
          params: {
            species: 'Human'
          }
        });
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchHumanCharacters();
  }, []);

  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl text-center mb-8">
          Personajes Humanos
        </h1>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-10 mt-16">
          {loading ? (
            <p>Cargando...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            characters.map((character) => (
              <CardView
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                species={character.species}
                location={character.location.name}
                url={character.url}
              />
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default HumanPage;