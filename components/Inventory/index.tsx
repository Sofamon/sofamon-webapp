import { useEffect, useState } from 'react'
import Image from 'next/image'
import detectExtension from '../../libs/detectExtension'
import { useAccount } from 'wagmi'
import Link from 'next/link'

const chromeExtensionId = process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID
const characters = [
  {
    id: 'naruto',
    name: 'Naruto Uzumaki',
    shortCode: 'naruto-naruto-uzumaki',
  },
  {
    id: 'sasuke',
    name: 'Sasuke Uchiha',
    shortCode: 'naruto-sasuke',
  },
  {
    id: 'noun',
    name: 'Noun',
    shortCode: 'noun',
  },
]
const Inventory = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] = useState(false)
  const [currentCharacterId, setCurrentCharacterId] = useState(1)
  const [isAlreadyMinted, setIsAlreadyMinted] = useState(false)
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

  const { address, isConnected } = useAccount()
  if (!isConnected) window.location.assign('/')

  useEffect(() => {
    ;(async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-Key': process.env.CENTER_API_KEY,
        },
      }
      const response = await fetch(
        `https://api.center.dev/v1/ethereum-goerli/account/${address}/assets-owned`,
        options
      )
      const res = await response.json()
      setIsAlreadyMinted(false)
      for (let item of res.items) {
        if (
          String(item.address) === contractAddress &&
          parseInt(item.tokenId) === currentCharacterId
        ) {
          setIsAlreadyMinted(true)
          break
        }
      }
    })()
  }, [address, contractAddress, currentCharacterId])

  useEffect(() => {
    ;(async () => {
      const extensionInstalled = await detectExtension()
      setIsExtensionInstalled(extensionInstalled)
    })()
  }, [])

  const getCharacter = () => {
    chrome.runtime.sendMessage(chromeExtensionId, {
      info: 'changeCharacter',
      characterName: characters[currentCharacterId - 1].name,
      characterId: characters[currentCharacterId - 1].shortCode,
    })
  }

  return (
    <div
      className='flex'
      style={{
        paddingTop: '12vh',
        paddingLeft: '19.5vw',
      }}
    >
      <div style={{ width: 400 }}>
        <div className='flex items-center'>
          <div className='mr-3 bg-gray-100 rounded-3xl px-2 h-6 outline-none'>
            <button
              className='text-2xl text-gray-400 outline-none relative'
              style={{
                top: -5,
                left: -1,
              }}
              onClick={() => {
                setCurrentCharacterId(
                  currentCharacterId - 1 == 0
                    ? characters.length
                    : currentCharacterId - 1
                )
                setIsAlreadyMinted(false)
              }}
            >
              🢐
            </button>
          </div>
          <Image
            src={`/${characters[currentCharacterId - 1].id}.png`}
            className={'' + (!isAlreadyMinted && 'grayscale')}
            width='300'
            height='300'
            alt='Hikari NFT'
          />
          <div className='ml-3 bg-gray-100 rounded-3xl px-2 h-6 outline-none'>
            <button
              className='text-2xl text-gray-400 outline-none relative'
              style={{
                top: -5,
                left: 1,
              }}
              onClick={() => {
                setCurrentCharacterId(
                  (currentCharacterId % characters.length) + 1
                )
                setIsAlreadyMinted(false)
              }}
            >
              🢒
            </button>
          </div>
        </div>
        <div className='w-min mx-auto my-6 mb-0 text-center'>
          <h1
            className='pb-1 capitalize font-extrabold'
            style={{
              paddingLeft: 6,
              paddingRight: 7,
              fontSize: 32,
            }}
          >
            {characters[currentCharacterId - 1].id}
          </h1>
          {!isAlreadyMinted && (
            <div
              style={{
                borderWidth: '0.16rem',
              }}
              className='mt-3 hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl whitespace-nowrap'
            >
              <Link href={`/mint?id=${currentCharacterId}`}>Mint NFT</Link>
            </div>
          )}
          {isAlreadyMinted && !isExtensionInstalled && (
            <div
              style={{
                borderWidth: '0.16rem',
              }}
              className='mt-3 hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl whitespace-nowrap'
            >
              <Link
                href={'https://chrome.google.com/webstore/category/extensions'}
                target='_blank'
                rel='noreferrer'
              >
                Install Extension
              </Link>
            </div>
          )}
          {isAlreadyMinted && isExtensionInstalled && (
            <button
              style={{
                borderWidth: '0.16rem',
              }}
              className='mt-3 hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl'
              onClick={getCharacter}
            >
              Activate
            </button>
          )}
        </div>
      </div>
      <div>
        <div className='pl-28 h-min grid relative -top-6 grid-cols-3 gap-16'>
          {[...Array(6)].map((_e, i) => (
            <div
              key={i}
              className='h-40 w-40 bg-zinc-300 flex items-center justify-center rounded-xl text-6xl'
            >
              ?
            </div>
          ))}
        </div>
        <div className='flex mt-12' style={{ paddingLeft: 196 }}>
          <div className='bg-gray-300 rounded-xl mt-2 mr-7 w-64 h-4'>
            <div className='bg-black rounded-xl w-20 h-4'></div>
          </div>
          <div className='mr-12'>
            <span>Lv0</span>
            <br />
            <span>08/20XP</span>
          </div>
          <button
            style={{
              borderWidth: '0.16rem',
            }}
            className='hover:bg-purple-600 hover:border-purple-600 hover:text-white disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-300 disabled:hover:bg-purple-600 disabled:hover:border-purple-600 disabled:hover:text-white outline-none font-bold text-lg px-6 py-2 rounded-3xl whitespace-nowrap'
          >
            Level up
          </button>
        </div>
      </div>
    </div>
  )
}
export default Inventory
