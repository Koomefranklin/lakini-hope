import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen p-4 w-full">
      <div className='w-full relative'>
        <Image src='/poster.jpg' className='object-contain'/>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className='absolute top-0 left-0 place-content-center w-full p-4 grid text-white h-full'>
            <div>
              <p className='text-4xl capitalize font-bold lg:text-6xl'>Lakini Hope</p>
              <p className='text-xl capitalize lg:text-2xl'>help us advocate for abused children</p>
            </div>
          </div>
      </div>

      {/* about */}
      <div className='grid'>
        <div className='uppercase place-self-center text-xl font-bold'>About Us</div>
        <div className=''>Officia est reprehenderit commodo aute non. Adipisicing duis qui elit officia. Enim irure do eu officia culpa cupidatat reprehenderit ad. Et veniam excepteur fugiat velit eu exercitation amet proident consectetur aliqua. Occaecat culpa non ea proident pariatur laboris cupidatat commodo occaecat proident culpa.

In exercitation veniam eiusmod reprehenderit voluptate reprehenderit ex do tempor cillum dolore. Pariatur elit fugiat adipisicing ipsum amet sint enim nostrud enim officia ad reprehenderit. Excepteur sint cillum consectetur minim sit. Sint fugiat Lorem est est. Non eu velit consequat proident culpa anim ex. Deserunt irure officia sint pariatur. Magna voluptate deserunt est non sit nostrud voluptate excepteur do qui.</div>
      </div>

      {/* contacts */}
      <div className='grid'>
        <form className='place-self-center'>
          <caption className='upppercase'>contact us</caption>
          <div className='grid grid-cols-2'>
            <div>
              <label htmlFor='fname'>First Name</label>
              <input type='text' name='fname' id='fname'/>
            </div>
            <div>
              <label htmlFor='surname'>Surname</label>
              <input type='text' name='surname' id='surname'/>
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email'/>
            </div>
            <div>
              <label htmlFor='phone'>Phone</label>
              <input type='number' name='phone' id='phone'/>
            </div>
          </div>
          <label htmlFor='desc'>Message</label>
          <textarea name='desc' id='desc'/>
        </form>
      </div>
     
    </main>
  )
}
