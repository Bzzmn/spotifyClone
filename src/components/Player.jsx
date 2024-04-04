import { usePlayerStore } from "@/store/playerStore";
import { useEffect, useRef, useState } from "react";

export const Pause = () => (
  <svg role="img" height="21" width="21" aria-hidden="true" viewBox="0 0 24 24"><path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = () => (
  <svg role="img" height="21" width="21" aria-hidden="true" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>
)

export function Player () {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state)
  const audioRef = useRef();

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause()
  }, [isPlaying])

  useEffect(() => {
    const { song, playlist, songs } = currentMusic
    if (song) {
      const src =`/music/${playlist?.id}/0${song.id}.mp3`
      audioRef.current.src = src
      audioRef.current.play()
    }
  }, [currentMusic])


  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
      <div className="flex flex-row justify-between w-full px-4 z-50">
        <div>
          Current Song ...
        </div>

        <div className="grid place-content-center gap-4 flex-1">
          <div className="flex justify-center">
            <button 
              className="bg-white rounded-full p-2"
              onClick={handleClick}
             >
              {isPlaying ? <Pause /> : <Play />}
            </button>
          </div>
        </div>
        <div>
          Volumen
        </div>
        <audio ref={audioRef} />
      </div>  
  )
}