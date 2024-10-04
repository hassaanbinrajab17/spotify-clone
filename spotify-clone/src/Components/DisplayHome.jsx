import React from 'react'
import Navbar from './Navbar'
import { albumsData , songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'


export const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
        <h1 className='my5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex over-auto'>
{albumsData.map((item,index)=> (<AlbumItem key={item.id} name={item.name} desc={item.desc} id={item.id} image={item.image}  />))}
        </div>
    </div>
    
    <div className='mb-4'>
        <h1 className='my5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex over-auto'>
{songsData.map((item,index)=> (<AlbumItem key={item.id} name={item.name} desc={item.desc} id={item.id} image={item.image}  />))}
        </div>
    </div>
    
    
    </>
  )
}
