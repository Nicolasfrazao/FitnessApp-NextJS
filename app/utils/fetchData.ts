export const exerciseOptions = {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	port: null,
	path: '/status',
	headers: {
		'x-rapidapi-key': process.env.RAPID_API_KEY,
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
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