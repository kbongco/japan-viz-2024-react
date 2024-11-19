import welcomeImage from '../assets/welcome.jpg';

export default function Welcome() {
  return ( 
    <> 
      <div className='grid grid-cols-2 mt-8'>
        <div className='flex justify-center'>
          <img className='w-96' src={welcomeImage} />
        </div>
        <div>
          <h1>Welcome</h1>
          <div>
            <p className='text-2xl'>Hi everyone! I ran out of ideas for projects and I wanted to get some React practice in since its been awhile.</p><br/>
            <p className='text-2xl'>
              I just returned from a trip to Japan, and I did some accounting I wanted to create something cool with the data I collected, so I decided to put my React skills to work. Eventually I'll be doing something to convert this to a Vue app. But for now its a React app.
          </p>
          </div>
        </div>
      </div>
    </>
  )
}