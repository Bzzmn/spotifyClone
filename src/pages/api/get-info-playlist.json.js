import { allPlaylists, songs as allSongs } from "@/lib/data";
export async function GET({params, request}) {
  // get the id from the url search params
  const { url } = request

  // 1 forma de obtener el id:
  // const [, querystring] = url.split('?')
  // const query = new URLSearchParams(querystring)
  // query.get('id')

  //otra forma:

  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  // get the playlist from the array
  const playlist = allPlaylists.find(playlist => playlist.id === id)

  // get the songs for the playlist
  const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

  // return the playlist with the songs
  return new Response(JSON.stringify({ playlist, songs }), {
    headers: {
      'content-type': 'application/json',
    },
  })
  
}