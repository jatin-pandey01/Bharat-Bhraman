import React, { useEffect, useState } from 'react';



function SunTemple() {

  const [data,setData] = useState(null);

  const fetchData = async() => {
    console.log("object");
    try {
      const res = await fetch('http://localhost:5000/api/v1/getAllReview',{
        // method:"GET",
        // headers:{'Content-Type' : "application/json"},
        body:JSON.stringify({
          heritageNumber : 5,
        }),
      });
      const data = await res.json();
      console.log(data);  
    } 
    catch (e) {
      console.log(e);
    }
  }

  useEffect(()=>{fetchData();},[]);

  return (
    <div className='feature-map'>
        <h1>Take the 3d view</h1>
        <h2>SUN TEMPLE</h2>
        <iframe  src="https://www.google.com/maps/embed?pb=!4v1711212954960!6m8!1m7!1sCAoSLEFGMVFpcE9RazVxNHNad01RcGQyNElSM1J6ZUg2U3BvTHBOMWpYZjdlZWZn!2m2!1d19.8875953!2d86.0945364!3f145.60483045117675!4f4.920799485026862!5f0.7820865974627469" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div>
          <p className='text-7xl text-center w-3xl'> User Review </p>
          <div className='flex justify-between mt-5'>
            <div className='w-80'>
              <p className='text-2xl text-center'> Jatin Chapele </p>
              <img src='/assets/konark.jpeg' />
              <p> Konark Sun Temple is a UNESCO World Heritage Site in Odisha, India, known for its impressive architecture dedicated to the sun god Surya. </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SunTemple