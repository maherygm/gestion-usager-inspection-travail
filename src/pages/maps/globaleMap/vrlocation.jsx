import React from 'react'
import { Link } from 'react-router-dom'

import img from '../../../../assets/panorama/pano2.jpeg'
import img2 from '../../../../assets/panorama/pano2.jpeg'

import './vrlocation.scss'

function VrScholl() {
  return (
    <div className='vr-container'>
    <a-scene>
        <img id='panorama' src={img} />
        <a-sky src="#panorama" rotation="0 -90 0"></a-sky>
      </a-scene>

      <Link to={'/maps'}  className='backMap'>Retour</Link>
    </div>
  )
}

export default VrScholl