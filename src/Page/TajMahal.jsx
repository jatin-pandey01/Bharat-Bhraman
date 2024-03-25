import React from 'react'

function TajMahal() {
  return (
    <div className='feature-map'>
        <h1>Take the 3d view</h1>
        <h2>TAJ MAHAL</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1711214238603!6m8!1m7!1sCAoSLEFGMVFpcFBKbGN3a0F4ZGRQWlJlczVra1FNRE8xaW1RRGJCSFF0cVpwc19R!2m2!1d27.1754097!2d78.04200349999999!3f224.20603573641108!4f11.806947908231834!5f0.7820865974627469" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <p className='text-7xl text-center w-3xl'> User Review </p>
          <div className='flex justify-between mt-5'>
            <div className='w-80'>
              <p className='text-2xl text-center'> Aditya Pandey </p>
              <img src='/assets/tajmahal.jpeg' />
              <p> The Taj Mahal is an iconic white marble mausoleum located in Agra, India, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TajMahal