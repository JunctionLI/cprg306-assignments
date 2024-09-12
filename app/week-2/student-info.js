import Link from "next/link";

export default function StudentInfo(){

    return(
        <div>
            <p>Junxian(Junction) LI</p>
            <Link className="underline hover:text-green-400" href="https://github.com/JunctionLI/cprg306-assignments">GitHub Repository Link</Link>
        </div>
    );
}