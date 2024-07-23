export const exerciseOptions = {
  method: "GET",
  header: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY
  }
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY
  }
};

export const fetchData = async ( url: string, options : any ) =>
{
  const res = await fetch( url, options );
  const data = await res.json();

  return data;
}