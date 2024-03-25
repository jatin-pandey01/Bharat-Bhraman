import React from 'react'

function Hampi() {
  return (
    <div className='feature-map'>
        <h1>Take the 3d view</h1>
        <h2>Hampi</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1711214609254!6m8!1m7!1sCAoSLEFGMVFpcE5kbDVMR3lNV1JtOHBsTy1pTDVkM3V2d09ya0w2TVc4Y0FIRHRH!2m2!1d15.316596!2d76.4655628!3f130.2860334405918!4f5.731165578501901!5f0.7820865974627469" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <p className='text-7xl text-center w-3xl'> User Review </p>
          <div className='flex justify-between mt-5'>
            <div className='w-80'>
              <p className='text-2xl text-center'> Rishabh Gandhi </p>
              <img src='/assets/hampi.jpeg' />
              <p> Hampi is a UNESCO World Heritage Site in Karnataka, India, famed for its mesmerizing ruins of the Vijayanagara Empire, set amidst a stunning landscape. </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hampi