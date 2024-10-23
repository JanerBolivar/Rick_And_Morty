import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CharacterPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                setCharacter(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-4">
                <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleBack}
                >
                    Atrás
                </button>
            </div>
            <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-full md:w-1/3 xl:w-1/4 px-4 py-0">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="h-48 object-contain max-w-full rounded-lg"
                    />
                </div>
                <div className="w-full md:w-2/3 xl:w-3/4 px-4 py-0 flex flex-col">
                    <h1 className="text-3xl font-bold mt-0 mb-2">{character.name}</h1>
                    <div className="flex-1">
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