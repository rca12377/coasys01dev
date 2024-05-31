import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h1>A Digital Nervous System for the New Web</h1>
        </p>
      </div>


      <div className="relative z-50 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
       
      <Image
        src="/coasysLogo_white.svg"
        height={46}
        width={150}
        alt="Coasys Logo Image"
        />

      </div>


      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <Image
              src="/ad4mLogo_white.svg"
              height={46}
              width={150}
              alt="AD4M Logo Image"
              />
            <br/>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              AD4m blah blah blah ...
            </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >

        <Image
          src="/fluxLogo_white.svg"
          height={46}
          width={150}
          alt="FLUX Logo Image"
          />
          <br/>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            FLUX blah blah blah
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >

        <Image
          src="/synergyLogo_white.svg"
          height={46}
          width={150}
          alt="Synergy Logo Image"
          />
          <br/>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Synergy blah blah blah
          </p>
        </a>

      </div>

    </main>
  );
}
