import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (

    <main id="divHomePage" className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex w-1/2 p-50">
          <div className="flex-1 rounded-lg bg-blue-800/50 p-10 text-4xl">

              <Image src="/coasys.svg" alt="Coasys: a Digital Nervous Systems for the New Web" />
              <br/>
              A Digital<br/>
              Nervous Systems for<br/>
              the <span className="SecondaryFont">New Web</span>
            
          </div>
      </div>
            
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
    </main>
  );
}
