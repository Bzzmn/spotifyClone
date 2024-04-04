import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore' 

export function CardPlayButton ({ id  }) {
    const { 
        currentMusic, 
        isPlaying, 
        setIsPlaying, 
        setCurrentMusic 
    } = usePlayerStore( state => state )

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

    const handleClick = () => {
        if (isPlayingPlaylist){
            setIsPlaying(false)
            return
        }

        console.log('fetching')

        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[0] })
                console.log({ songs, playlist })
            })
            .catch(err => console.log(err))
    }
   
   
    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-3 transform hover:scale-110">
            {isPlayingPlaylist ? <Pause /> : <Play />}
        </button>
    )
}
