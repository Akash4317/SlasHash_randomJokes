import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorite = () => {
    const [favoriteJokes, setFavoriteJokes] = useState([]);

    useEffect(() => {
        fetchFavoriteJokes();
    }, []);

    const fetchFavoriteJokes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/favorites');
            setFavoriteJokes(response.data);

        } catch (error) {
            console.error('Error fetching favorite jokes:', error);
        }
    };

    return (
        <div>
            <h1>Favorite Jokes</h1>
            <div>
                {favoriteJokes?.map((joke, index) => (
                    <div key={index}>
                        <p>{joke.joke}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorite;
