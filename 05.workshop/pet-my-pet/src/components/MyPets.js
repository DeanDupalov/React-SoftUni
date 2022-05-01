import * as petService from "../services/petsService"

import { useEffect, useState } from "react";
import PetCard from "./PetCard";

function MyPets() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                
                setPets(result);
            })
    }, [])
    return (
        <section id="my-pets-page" className="my-pets">
            <h1>My Pets</h1>

            <ul className="my-pets-list">
                {pets.map(pet => <PetCard key={pet._id} pet={pet} />)}
            </ul>

            <p className="no-pets">No pets in database!</p>
        </section>
    )

}

export default MyPets;