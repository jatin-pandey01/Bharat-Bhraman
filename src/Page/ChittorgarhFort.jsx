import React from 'react'

function ChittorgarhFort() {
  return (
    <div className='feature-map'>
        <h1>Take the 3d view</h1>
        <h2>CHITTORGARH FORT</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1711214503992!6m8!1m7!1sCAoSLEFGMVFpcE4zblRyX2pLSWM2cTN2NVNacHlpVXVhenRROFkzOGxmYndOeTB5!2m2!1d24.8878991!2d74.6450926!3f46.21682065456909!4f4.538607659132623!5f0.7820865974627469" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <p className='text-7xl text-center w-3xl'> User Review </p>
          <div className='flex justify-between mt-5'>
            <div className='w-80'>
              <p className='text-2xl text-center'> Narendra Gandhi </p>
              <img src='/assets/chittor.jpeg' />
              <p> Chittor Fort is a UNESCO World Heritage Site in Rajasthan, India, known for its rich history, magnificent architecture, and strategic location atop a hill. </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ChittorgarhFort