import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default function AD4M() {
    return (
        <main id="mainDiv" >
            <h2>AD4M .. information</h2>
            <br/> 
            <Image
              src="/ad4mLogo_white.svg"
              height={100}
              width={300}
              alt="AD4M Logo Image"
              />
        </main>
    );
  }
  
  
