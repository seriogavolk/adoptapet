import React from 'react';
import Pets from './Pets';

const Results = ({ pets }) => {
    return (
        <div className='search'>
            {pets.length === 0 ? (<h1>No Pets Found</h1>) : (pets.map(pet => (
                <Pets 
                animal={pet.type} 
                key={pet.id}
                name={pet.name}
                breed={pet.breeds.primary}
                media={pet.photos}
                location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
                id={pet.id}/>)))}
        </div>
    );
};

export default Results;