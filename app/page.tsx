import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (

    <main id="divHomePage" className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex w-1/2 p-5">
        
          <div className="flex-1 rounded-lg bg-blue-800/50 p-10 text-4xl">
              <Image src="/coasys.svg" alt="Coasys: a Digital Nervous Systems for the New Web" />
              <br/>
              A Digital<br/>
              Nervous Systems for<br/>
              the <span className="SecondaryFont">New Web</span>
            
          </div>
      </div>

      <div className="flex w-2/3 p-10">
        - - What is Synergy<br/><br/>
      
        <div className="flex-1 rounded-lg bg-blue-800/20 p-10 text-4xl">   
          A new information systems the <span className="SecondaryFont">Synergy Engine</span>
        </div>
        
        <br/><br/>
        As we transition from the information age to the age of intelligence, data with
        provenance will become increasingly valuable.<br/>
        <br/>We are developing a search (and reward) engine, the Synergy Engine, where data
        with provenance becomes an asset, spawning a new information ecosystem. Use your digital
        actions as reputation, contribute to query capacity and be rewarded.<br/>
        <br/><br/>

        <div className="flex-1 rounded-sm bg-green-400/80 p-10 text-lg">About the sale</div>
          
      </div>

      
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
    </main>
  );
}
