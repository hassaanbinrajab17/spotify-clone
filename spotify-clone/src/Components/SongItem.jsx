import React  from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const SongItem = ({name,image,desc,id}) => {

const {playWithId} = useContext(PlayerContext) 

  return (
    <div onClick={()=> playWithId(id)} className='min-w-[180] p-2 px3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='text-slate-200 mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem