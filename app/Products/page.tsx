import Link from "next/link";
import Image from "next/image";
export const dynamic = 'force-dynamic';

export default function Products() {
    return (

        <main id="mainDiv" >

            <div className="flex bg-green-200 p-4 mx-16 "> 
                <div className="flex-1 bg-green-500 rounded-lg p-10">
        
                        Primary Text <span className="SecondaryFont">Secondary Text</span>! More Text here.
                
                </div> 
                
                <div className="flex-1 bg-green-500 rounded-lg">2</div> 
                <div className="flex-1 bg-green-500 rounded-lg">3</div> 
            </div>

            <div className="flex bg-ltblue p-4 mx-16">

                    <div className="flex-1 rounded-lg">
                        <Image src="/contentHome01.svg" alt="" />
                    </div>
            
            </div>

            
            <h1>Products .. </h1>
            <br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </main>
    );
  }
  
  1
