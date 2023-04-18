import Image from 'next/image'
import React, { ReactElement } from 'react'

const Team = ({ imgSrc, teamName }: any) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-48 w-48">
        <Image src={imgSrc} layout="fill" objectFit="contain" />
      </div>
      <p className="mt-4 text-xl leading-tight tracking-wide">{teamName}</p>
    </div>
  )
}

const Streamer = ({ name, imgSrc }: any) => {
  return (
    <div className="flex w-56 flex-col items-center rounded-2xl border border-[#2f2078] bg-[#1e1439] p-8 text-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-[#2f2078]">
        <Image src={imgSrc} layout="fill" />
      </div>
      <p className="mt-2 text-xl leading-tight tracking-wide">{name}</p>
      <Button className="mt-2">Ver Scrim</Button>
    </div>
  )
}

const Button = ({ className, children }: any) => {
  return (
    <button
      className={`min-h-16 min-w-24 rounded-lg bg-[#735cff] px-2 py-1 ${className}`}
    >
      {children}
    </button>
  )
}

const Demo = () => {
  return (
    <main className="flex-1 bg-gradient-to-r from-[#0f0a29] to-[#351f77] text-[#f8f7f8]">
      <div className="mx-auto  w-[1140px] max-w-[calc(100%-2rem)] px-6 py-4">
        <h2 className="text-2xl tracking-wider">Detalles de tu scrim</h2>
        <div className="grid grid-cols-[1fr_200px_1fr] gap-y-8">
          <Team
            imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/562px-NaVi_logo.svg.png?20190703045433"
            teamName="Natus Vincere"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl leading-tight tracking-wide">Sevidor LAS</p>
            <div className="mt-8 text-center">
              <p className="text-xl leading-tight tracking-wide">10/3/2023</p>
              <p className="text-6xl leading-tight tracking-wide">18:23</p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl leading-tight tracking-wide">Prize pool</p>
              <p className="font-mono text-5xl font-medium leading-tight tracking-wider">
                500
              </p>
            </div>
          </div>
          <Team
            imgSrc="https://am-a.akamaihd.net/image?resize=500:&f=http://static.lolesports.com/teams/1631820014208_tl-2021-worlds.png"
            teamName="Team Liquid"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl leading-tight tracking-wide">
              Cantidad de Rondas
            </p>
            <p className="text-4xl leading-tight tracking-wide">Mejor de 3</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl leading-tight tracking-wide opacity-60">
              Ver reglas
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl leading-tight tracking-wide">Modo de juego</p>
            <p className="text-4xl leading-tight tracking-wide">Modo Capitán</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <p className="text-xl leading-tight tracking-wide  opacity-60">
            En colaboración
          </p>
          <div className="relative mt-4 h-16 w-16 overflow-hidden rounded-xl">
            <Image
              src="https://seeklogo.com/images/A/AMD-logo-B5E0D58D48-seeklogo.com.png"
              layout="fill"
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-center">
          <h2 className="text-center text-2xl tracking-wider">
            Puedes ver esta scrim en
          </h2>
          <div className="mt-8 flex justify-center gap-12">
            <Streamer
              imgSrc="https://api.dicebear.com/6.x/adventurer/svg?seed=Jack"
              name="Jack"
            />
            <Streamer
              imgSrc="https://api.dicebear.com/6.x/adventurer/svg?seed=Charlie"
              name="Charlie"
            />
            <Streamer
              imgSrc="https://api.dicebear.com/6.x/adventurer/svg?seed=Jasmine"
              name="Jasmine"
            />
          </div>
          <div className="mt-8 mb-4 text-center">
            <Button className="">Quiero donar</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

Demo.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="h-12 bg-[#161423] text-[#f8f7f8]">Nav</div>
      {page}
    </div>
  )
}

export default Demo
