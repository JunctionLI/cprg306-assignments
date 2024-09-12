import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
    return (
      <main>
        <h1>Shopping List</h1>
        <StudentInfo/>
        <Link href="./" className="italic hover:underline hover:text-green-400">Back to Main</Link>
      </main>
    );
  }