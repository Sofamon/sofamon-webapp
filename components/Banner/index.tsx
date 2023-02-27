import { useEffect, useState } from 'react'
import detectExtension from '../../libs/detectExtension'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false)
  useEffect(() => {
    ;(async () => {
      const extensionInstalled = await detectExtension()
      setIsExtensionInstalled(extensionInstalled)
    })()
  }, [])
  return (
    <div className='flex mx-auto' style={{ height: 582, width: 1200 }}>
      <div style={{ width: 453 }} className='my-auto'>
        <h2 className='mb-6 text-7xl font-bold'>
          Start your on-chain Adventure
        </h2>
        <p className='text-gray-500 text-2xl m-0'>
          Get your first on-chain NFT pet.
        </p>
        <div
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            borderWidth: '0.16rem',
            backgroundImage: 'linear-gradient(25deg, #2600fc, #ff00ea)',
          }}
          className='
          mt-10 text-white border-none outline-none font-bold text-lg px-6 pr-8 rounded-3xl w-min whitespace-nowrap cursor-pointer hover:opacity-80 transition-all delay-100'
        >
          <Link
            href={
              !isExtensionInstalled
                ? 'https://chrome.google.com/webstore/category/extensions'
                : '/mint?id=1'
            }
          >
            <div className='flex gap-3'>
              <span>
                {!isExtensionInstalled
                  ? 'Install Extension for Free Mint'
                  : 'Mint a NFT'}
              </span>
              ➜
            </div>
          </Link>
        </div>
      </div>
      <div className='flex items-end justify-center w-full mb-8 flex-col relative -top-14'>
        <Link href='/mint?id=1'>
          <div className='relative z-10 bg-white rounded-full cursor-pointer circle-border'>
            <svg
              className='spin'
              viewBox='0 0 100 100'
              width='120'
              height='120'
            >
              <defs>
                <path
                  id='circle'
                  d='M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0'
                ></path>
              </defs>
              <text
                className='uppercase'
                style={{ fontSize: 12, fill: '#e348ff' }}
              >
                <textPath xlinkHref='#circle'>
                  start free mint • start free mint •
                </textPath>
              </text>
            </svg>
            <span
              className='text-3xl font-bold relative left-11'
              style={{ color: '#e348ff', top: -78 }}
            >
              🡭
            </span>
          </div>
        </Link>
        <div className='relative -left-16' style={{ top: 380 }}>
          <Image
            src='/images/blob-dashed.svg'
            alt='bg'
            className='opacity-10'
            height={340}
            width={340}
          />
        </div>
        <div className='relative -left-10 top-14'>
          <Image
            alt='bg'
            src='/images/background.svg'
            className='opacity-30'
            height={340}
            width={340}
          />
        </div>
        <div className='relative left-4' style={{ top: -380 }}>
          <Image
            alt='bunny image'
            src='/nw_q-x88_400x400.png'
            height={350}
            width={350}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
