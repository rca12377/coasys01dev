import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (

    <main id="divHomePage" className="flex min-h-screen flex-col items-center">

      <div className="min-w-2/3 float-right inline-flex p-10">
        <Image src="/coasys.svg" alt="Coasys: a Digital Nervous Systems for the New Web" />
        <Image src="/spacer.gif" alt="" className="w-96 h-0" height="0" />
        <Image src="/hamburger.svg" alt="menu" />
        <Image src="/spacer.gif" alt="" className="w-10 h-0" height="0" />
        <Image src="/navLogin.svg" alt="Coasys Login" />
      </div>

      <div className="h-32"><Image src="/spacer.gif" alt="" height="128" width="1" /></div>
      
      <div className="min-w-4/5 text-8xl">
          A Digital<br/>
          Nervous Systems<br/>
          for the <span className="SecondaryFont">New Web</span>
      </div>

      <div className="h-52"><Image src="/spacer.gif" alt="" height="208" width="1" /></div>
      <div className="h-52"><Image src="/spacer.gif" alt="" height="208" width="1" /></div>
      <div className="h-52"><Image src="/spacer.gif" alt="" height="208" width="1" /></div>

      
      <div className="flex w-2/3 p-10 text-green-300 font-weight-700 text-3xl">
        <Image src="/synergy.svg" height="30" width="30" alt="Synergy" />&nbsp;&nbsp;--&nbsp;What is Synergy
      </div>
      
      <div className="min-w-2/3 text-5xl">
        A new information system<br/>
        the <span className="SecondaryFont">Synergy Engine</span>
      </div>

      
      <div className="flex w-2/3 self-baseline">
      
      
          <div className="flex-1 w-1/2 p-20 text-lg">
            As we transition from the information age to the age of intelligence, data with
            provenance will become increasingly valuable.<br/>
            <br/>We are developing a search (and reward) engine, the Synergy Engine, where data
            with provenance becomes an asset, spawning a new information ecosystem. Use your digital
            actions as reputation, contribute to query capacity and be rewarded.<br/>
            <br/>
            <div className="rounded-lg bg-green-400/80 p-2 text-lg w-52 text-center">About the sale</div>
          </div>
    
          <div className="flex-1 w-1/2 p-10">
            <Image src="/synergy02.svg" alt="What is Synergy?" />
          </div>
            
    
      </div>


      
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
    </main>
  );
}
