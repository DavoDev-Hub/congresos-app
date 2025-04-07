"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setGalletas] = useState(0);
   const [CookieMonsterName, setCookieMonsterName] = useState('');

   useEffect(()=>{
    if(count === 5){
      alert(`${CookieMonsterName} tiene 5 galletas`)
    }
  }, [count, CookieMonsterName])

  
    return(
      <main className="p-8">
        <h1 className="text-2xl mb-4">Cookie Monster</h1>


        <div className="mb-4">
          <p>🍪:{count}</p>
          <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={()=>setGalletas(count + 1 )}
          >Recoger Galleta</button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => setGalletas(Math.max(0, count - 1 ))}
          >Vomitar Galleta</button>
        </div>

        <div>
          <input type="text" 
            value={CookieMonsterName}
            onChange={(e) => setCookieMonsterName(e.target.value)}
            className="border p-2 rounded"
            placeholder="Escribe algo"
          />
          <p className="mt-2">Cookie Monster Name: {CookieMonsterName}</p>
        </div>
      </main>
      
    )


}