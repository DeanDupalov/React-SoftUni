const baseUrl = 'http://localhost:3030/jsonstore'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/pets`);

    const pets = await response.json();
    const result = Object.values(pets);
    return result
}