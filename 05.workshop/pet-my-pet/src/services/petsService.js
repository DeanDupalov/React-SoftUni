const baseUrl = 'http://localhost:3030/jsonstore'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/pets`);

    const pets = await response.json();
    const result = Object.values(pets);
    return result;
}

export const getPet = async (id) => {
    const response = await fetch(`${baseUrl}/pets/${id}`);

    const pet = await response.json();
    
    return pet;
}