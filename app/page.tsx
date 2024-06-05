import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (

    <main id="divHomePage" className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="w-2/3 item-end">

        <Image src="/hamburger.svg" alt="menu" />

        <Image src="/navLogin.svg" alt="Coasys Login" />
        
      </div>
      
      <div className="w-2/3 text-5xl">
          <div className="h-32"><Image src="/spacer.gif" alt="" height="128" width="1" /></div>
          <br/>
          <Image src="/coasys.svg" alt="Coasys: a Digital Nervous Systems for the New Web" />
          <br/>
          A Digital<br/>
          Nervous Systems<br/>
          for the <span className="SecondaryFont">New Web</span><br/>
          <div className="h-96"><Image src="/spacer.gif" alt="" height="500" width="1" /></div>
      </div>

      
      <div className="flex w-2/3 p-10 text-green-300 font-weight-700 text-xl">
        <Image src="/synergy.svg" height="20" width="20" alt="Synergy" />&nbsp;&nbsp;--&nbsp;What is Synergy
      </div>
      
      <div className="flex w-2/3 rounded-lg bg-blue-800/20 p-10 text-4xl">
        A new information systems the <span className="SecondaryFont">Synergy Engine</span>
      </div>
      
      <br/><br/>
  
      <div className="flex w-2/3 p-10">
        As we transition from the information age to the age of intelligence, data with
        provenance will become increasingly valuable.<br/>
        <br/>We are developing a search (and reward) engine, the Synergy Engine, where data
        with provenance becomes an asset, spawning a new information ecosystem. Use your digital
        actions as reputation, contribute to query capacity and be rewarded.<br/>
      </div>
        
      <br/><br/>

      <div className="flex-1 rounded-sm bg-green-400/80 p-10 text-lg">About the sale</div>
        
    

    
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
    </main>
  );
}
