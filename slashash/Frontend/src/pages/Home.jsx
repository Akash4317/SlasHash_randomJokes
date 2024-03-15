import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [jokes, setJokes] = useState([]);
    const [searchjoke, setsearchjoke] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`https://icanhazdadjoke.com/search?term=${searchjoke}`, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            setJokes(res.data.results);
        } catch (err) {
            console.log(err);
        }
    }

    const handleFavr = async (joke) => {
        try {
            await axios.post(`http://localhost:8080/favorites`, {
                id: joke.id,
                joke: joke.joke
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className='app-container'>
                <h1>Search Your Joke</h1>
                <form onSubmit={handleSubmit}>
                    <h3>Please Write Below</h3>
                    <input type="text" placeholder='type of Jokes...' onChange={(e) => setsearchjoke(e.target.value)} />
                    <button type='submit'>search</button>
                </form>

                <div className='content-box'>
                    {jokes.map((joke, index) => (
                        <div key={index} className='joke-box'>
                            <h3>{joke.joke}</h3>
                            <button onClick={() => handleFavr(joke)} className='Add-to'>Add to favorite</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
