/* eslint-disable no-underscore-dangle */
import React from 'react';
import HappyThought from './HappyThought';

const HappyThoughtsList = ({ thoughtsList, handleHearts }) => {
  return (
    <section className="happy-thoughts-list">
      {thoughtsList.map((thought) => (
        <HappyThought
          key={thought._id}
          thoughtId={thought._id}
          text={thought.message}
          hearts={thought.hearts}
          timestamp={thought.createdAt}
          handleHearts={() => handleHearts(thought._id)} />
      ))}
    </section>
  );
};

export default HappyThoughtsList;