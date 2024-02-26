import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen w-full">
      <div className='w-full relative min-h-lvh'>
        <video className='mx-auto object-contain w-full' poster='/poster.jpg' autoPlay loop playsInline muted><source src='/hero1.mp4' type='video/mp4'/></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className='absolute top-0 left-0 place-content-center w-full p-4 grid text-white h-full'>
            <div>
              <p className='text-4xl capitalize font-bold lg:text-6xl'>Lakini Hope</p>
              <p className='text-xl capitalize lg:text-2xl'>help us advocate for abused children</p>
            </div>
          </div>
      </div>

      {/* about */}
      <div className='grid pt-4'>
        <div className='uppercase place-self-center text-xl font-bold'>About Us</div>
        <div className=''>Officia est reprehenderit commodo aute non. Adipisicing duis qui elit officia. Enim irure do eu officia culpa cupidatat reprehenderit ad. Et veniam excepteur fugiat velit eu exercitation amet proident consectetur aliqua. Occaecat culpa non ea proident pariatur laboris cupidatat commodo occaecat proident culpa.

        In exercitation veniam eiusmod reprehenderit voluptate reprehenderit ex do tempor cillum dolore. Pariatur elit fugiat adipisicing ipsum amet sint enim nostrud enim officia ad reprehenderit. Excepteur sint cillum consectetur minim sit. Sint fugiat Lorem est est. Non eu velit consequat proident culpa anim ex. Deserunt irure officia sint pariatur. Magna voluptate deserunt est non sit nostrud voluptate excepteur do qui.</div>
        <div className='grid pt-4 px-2'>
          <div className='uppercase place-self-center'>team</div>
          <div className='grid lg:grid-flow-col gap-2'>
            <div className='grid rounded-full'>
              <Image
              src='/lady2.jpeg'
              width={150}
              height={150}
              className='rounded-full place-self-center'
              />
              <div className=''>Et in ad velit et eu occaecat officia amet consectetur incididunt laboris laborum.</div>
            </div>
            <div className='grid rounded-full'>
              <Image
              src='/square.jpeg'
              width={150}
              height={150}
              className='rounded-full place-self-center'
              />
              <div className=''>Et in ad velit et eu occaecat officia amet consectetur incididunt laboris laborum.</div>
            </div>
            <div className='grid rounded-full'>
              <Image
              src='/lady2.jpeg'
              width={150}
              height={150}
              className='rounded-full place-self-center'
              />
              <div className=''>Et in ad velit et eu occaecat officia amet consectetur incididunt laboris laborum.</div>
            </div>
            <div className='grid rounded-full'>
              <Image
              src='/square.jpeg'
              width={150}
              height={150}
              className='rounded-full place-self-center'
              />
              <div className=''>Et in ad velit et eu occaecat officia amet consectetur incididunt laboris laborum.</div>
            </div>
            <div className='grid rounded-full'>
              <Image
              src='/lady2.jpeg'
              width={150}
              height={150}
              className='rounded-full place-self-center'
              />
              <div className=''>Et in ad velit et eu occaecat officia amet consectetur incididunt laboris laborum.</div>
            </div>
            <div className='grid rounded-full'>
              <Image
              src='/square.jpeg'
              width={150}
              height={150}
              className='rounded-full place-self-center'
              />
              <div className=''>Et in ad velit et eu occaecat officia amet consectetur incididunt laboris laborum.</div>
            </div>
          </div>
        </div>
      </div>

      {/* portfolio */}

      <div className='grid pt-4'>
        <div className='uppercase justify-self-center'>portfolio</div>
        <div className='grid lg:grid-cols-4'>
          <div className='grid rounded-md'>
            <Image
            src='/poster2.jpg'
            width={200}
            height={150}
            className='place-self-center'
            />
            <div className=''>Nostrud veniam proident anim est velit minim proident tempor nisi ad dolore nisi.</div>
          </div>
          <div className='grid rounded-md'>
            <Image
            src='/poster2.jpg'
            width={200}
            height={150}
            className='place-self-center'
            />
            <div className=''>Nostrud veniam proident anim est velit minim proident tempor nisi ad dolore nisi.</div>
          </div>
          <div className='grid rounded-md'>
            <Image
            src='/poster2.jpg'
            width={200}
            height={150}
            className='place-self-center'
            />
            <div className=''>Nostrud veniam proident anim est velit minim proident tempor nisi ad dolore nisi.</div>
          </div>
          <div className='grid rounded-md'>
            <Image
            src='/poster2.jpg'
            width={200}
            height={150}
            className='place-self-center'
            />
            <div className=''>Nostrud veniam proident anim est velit minim proident tempor nisi ad dolore nisi.</div>
          </div>
        </div>
      </div>

      {/* contacts */}
      <div className='grid pt-4'>
        <form className='place-self-center p-6 border-2 rounded justify-items-center'>
          <div className='uppercase grid w-full justify-center'>contact us</div>
          <div className='grid grid-cols-2'>
            <div className='grid'>
              <label htmlFor='fname' className='font-bold text-lg'>First Name</label>
              <input type='text' name='fname' id='fname' className='p-2 rounded w-5/6 border-2 border-black dark:border-white'/>
            </div>
            <div className='grid'>
              <label htmlFor='surname' className='font-bold text-lg'>Surname</label>
              <input type='text' name='surname' id='surname' className='p-2 rounded w-5/6 border-2 border-black dark:border-white'/>
            </div>
            <div className='grid'>
              <label htmlFor='email' className='font-bold text-lg'>Email</label>
              <input type='email' name='email' id='email' className='p-2 rounded w-5/6 border-2 border-black dark:border-white'/>
            </div>
            <div className='grid'>
              <label htmlFor='phone' className='font-bold text-lg'>Phone</label>
              <input type='number' name='phone' id='phone' className='p-2 rounded w-5/6 border-2 border-black dark:border-white'/>
            </div>
          </div>
          <div className='grid'>
            <label htmlFor='desc' className='font-bold text-lg'>Message</label>
            <textarea name='desc' id='desc' className='p-2 rounded w-full border-2 border-black dark:border-white min-h-24'/>
          </div>
          <button className='w-full grid mt-2 bg-green-500 rounded-md p-2 justify-center text-center w-fit text-white text-xl uppercase' name='submit' type='submit'>Submit</button>
        </form>
      </div>
     
    </main>
  )
}
