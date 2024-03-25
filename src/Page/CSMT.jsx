import React from 'react'

function CSMT() {
  return (
    <div className='feature-map'>
        <h1>Take the 3d view</h1>
        <h2>Chhatrapati Shivaji Maharaj Terminus</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1711214331930!6m8!1m7!1sCAoSLEFGMVFpcFBKTmlPR2JvdHNSLWlVS1FIeGF3ZENyQU5FYVk5cHFCN0xNVkhy!2m2!1d18.9400908!2d72.8346976!3f355.2753759362658!4f11.702105071111703!5f0.7820865974627469" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <p className='text-7xl text-center w-3xl'> User Review </p>
          <div className='flex justify-between mt-5'>
            <div className='w-80'>
              <p className='text-2xl text-center'> Shrey Singh </p>
              <img src='/assets/csmt.jpeg' />
              <p> Chhatrapati Shivaji Maharaj Terminus (CSMT) is a historic railway station in Mumbai, India, renowned for its Victorian Gothic Revival architecture. </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CSMT