import * as petService from "../services/petsService"

import { useEffect, useState } from "react";
import PetCard from "./PetCard";

function PetList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                console.log(result);
                setPets(result);
            })
    }, [])
    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(pet => <PetCard key={pet._id} pet={pet} />)}
                    </ul>
                )
                : <p className="no-pets">No pets in database!</p>
            }

        </>
    )

}

export default PetList;