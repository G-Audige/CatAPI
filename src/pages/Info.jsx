import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Info() {
  const apiKey =
    'live_EKEzJdTd3BOA6PPWTyzoaZ7AUmfqnSuMhXBg5IFPSP4CbgF4P8YhJ2AGhjxq9CNK';
  const params = useParams();
  const id = params.id;
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=${apiKey}`;
  const [cat, setCat] = useState('null');
  const [breed, setBreed] = useState('null');
  const getCat = async () => {
    const response = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
      },
    });
    const data = await response.json();
    console.log(data[0]);
    setCat(data[0]);
    setBreed(data[0].breeds[0]);
  };
  useEffect(() => {
    getCat();
  }, []);
  const catInfo = [
    { section: 'Origin', info: breed.origin },
    { section: 'Temperament', info: breed.temperament },
    { section: 'Life span', info: breed.life_span },
  ];
  const loaded = () => {
    return (
      <div className="info">
        <h2>{breed.name}</h2>
        <img src={cat.url} />
        <p>{breed.description}</p>
        {catInfo.map((cat) => {
          const { section, info } = cat;
          return (
            <div>
              <div className="map">
                <h3>{section}</h3>
                <p>{info}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return cat ? loaded() : loading();
}

export default Info;
