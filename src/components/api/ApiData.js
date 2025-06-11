
const ApiData = async () => {
  let key = import.meta.env.VITE_API_KEY 
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&s=batman`
    );

    const data = response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

// is function ko app me jakr loader me define kr diya taki api call data mile

export default ApiData


