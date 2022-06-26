import React from 'react';

import './index.css';
import RecomedeCard from '../../components/RecomedeCard';
import shareIcon from '../../images/shareIcon.svg';
import haertIcon from '../../images/blackHeartIcon.svg';
import leftIcon from '../../images/left.svg';

const mayArray = ['a', 'b', 'c', 'd', 'e', 'g'];

function ScreenDetailsFood() {
  return (
    <div className="card-details-content">
      <div className="card-details-header">
        <img
          src="https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg"
          alt="Icon"
          className="image-recipes"
        />
        <button type="button">
          <img src={ leftIcon } alt="LeftIcon" />
        </button>
      </div>

      <div className="card-details-body">
        <div className="title-header">
          <h1>Corba Poutine</h1>
          <div className="icons-action">
            <img src={ shareIcon } alt="IconShare" />
            <img src={ haertIcon } alt="IconHaert" />
          </div>
        </div>
        <strong className="currency">Corba</strong>

        <div className="card-details-ingredients">
          <h4>Ingredients</h4>
          <ul className="ingredients-list">
            <li>Banana</li>
            <li>Melão</li>
            <li>Manga</li>
            <li>Pera</li>
            <li>Maçã</li>
          </ul>
        </div>

        <div className="card-details-instructions">
          <h4>Instructions</h4>
          <p>
            Pick through your lentils for any foreign debris,
            rinse them 2 or 3 times, drain, and set aside.  Fair
            warning, this will probably turn your lentils into a
            solid block that you’ll have to break up later\r\nIn a
            large pot over medium-high heat, sauté the olive oil and
            the onion with a pinch of salt for about 3 minutes, then
            add the carrots and cook for another 3 minutes.\r\nAdd the
            tomato paste and stir it around for around 1 minute. Now add
          </p>
        </div>

        <div className="embed">
          <h4>Video</h4>
          <div className="embed-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VVnZd8A84z4"
              title="Turkish Vegetable Lentil Soup Recipe"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
              allowFullScreen
            />
          </div>
        </div>

        <div className="cards-recomended">
          <h4>Remended</h4>
          <ul className="cards-remended-list">
            {mayArray.map((item, index) => (
              <RecomedeCard
                key={ index }
                url="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
                type="Alcolic"
                title="Cerveja Ater"
              />
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="btn-start-recipies"
        >
          Start Recipies
        </button>
      </div>
    </div>
  );
}

export default ScreenDetailsFood;
