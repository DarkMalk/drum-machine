const ButtonDrum = ({ elName, srcSong, titleSong, handleClick }) => {
  return (
    <button className='drum-pad' id={titleSong} onClick={handleClick}>
      {elName}
      <audio src={srcSong} className='clip' id={elName} />
    </button>
  )
}

export default ButtonDrum
