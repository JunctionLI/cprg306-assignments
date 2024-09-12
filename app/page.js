import Link from "next/link";


export default function Home() {
  return (
   <main className="p-8 text-center">
    <h1 className=" text-4xl font-bold my-8">CPRG 306: Web Development 2 - Assignments</h1>
    <ul>
      <li className="hover:text-green-400 hover:underline"><Link className="text-xl underline " href="/week-2">Week 2 Assignment</Link></li>
    </ul>
    
   </main>
  );
}
