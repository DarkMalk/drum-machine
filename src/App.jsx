import songs from './songs.json'
import ButtonDrum from './components/ButtonDrum'
import { useEffect, useState } from 'react'

const App = () => {
  const [titleDisplay, setTitleDisplay] = useState('Display From Drum Machine')

  const playSong = key => {
    songs.filter(song => {
      const { keySong, titleSong } = song
      if (keySong === key) {
        setTitleDisplay(titleSong)
        const audio = document.querySelector(`#${keySong}`)
        audio.play()
      }
    })
  }

  useEffect(() => {
    window.addEventListener('keypress', event => {
      const key = event.key.toLocaleUpperCase()
      playSong(key)
    })
  }, [])

  return (
    <div id='drum-machine'>
      <div id='display'>{titleDisplay}</div>
      <div id='drum-pad-container'>
        {songs.map(item => {
          const { titleSong, keySong, urlSong } = item
          return (
            <ButtonDrum
              elName={keySong}
              srcSong={urlSong}
              titleSong={titleSong}
              key={keySong}
              handleClick={() => playSong(keySong)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
