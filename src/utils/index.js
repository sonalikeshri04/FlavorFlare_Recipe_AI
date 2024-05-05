
export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${'f02abcbd'}&app_key=${'295f51e16793c5a49700f88d5f828019'}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${'f02abcbd'}&app_key=${'295f51e16793c5a49700f88d5f828019'}`

const response = await fetch(url)

const data = await response.json();

return data[0];
}