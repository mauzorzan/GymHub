import React from 'react'
import {Stack, Typography} from '@mui/material'
import back from '../assets/icons/back.png'
import all from '../assets/icons/all.png'
import cardio from '../assets/icons/cardio.png'
import chest from '../assets/icons/chest.png'
import lowerlegs from '../assets/icons/lower legs.png'
import lowerarms from '../assets/icons/lower arms.png'
import neck from '../assets/icons/neck.png'
import shoulders from '../assets/icons/shoulders.png'
import upperlegs from '../assets/icons/upper legs.png'
import upperarms from '../assets/icons/upper arms.png'
import waist from '../assets/icons/waist.png'


const imageMap = {
  back,
  all,
  cardio,
  chest,
  'lower legs': lowerlegs, 
  'lower arms': lowerarms,
  neck,
  shoulders,
  'upper legs': upperlegs, 
  'upper arms': upperarms,
  waist
  
};


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const itemImage = imageMap[item];

  return (
   <Stack 
   type='button'
   alignItems='center'
   justifyContent='center'
   className='bodyPart-card'
   sx= {{
    borderTop: bodyPart === item ? '4px solid #230397' : '',
    backgroundColor: '#fff',
    borderBottomLeftRadius: '20px',
    width: '270px',
    height: '280px',
    cursor: 'pointer',
    gap: '47px'
}}
    onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
    }}
   >
        <img src={itemImage} alt='dumbbell' style={{ width: '70px', height: '70px'}}/>
        <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
   </Stack>
  )
}

export default BodyPart