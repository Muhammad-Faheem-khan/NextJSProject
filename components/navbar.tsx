import Link from "next/link"

export default function Navbar() {
    return (
      <div className="w-full absolute text-white z-10 ">
        <nav className="container relative flex justify-between items-center mx-auto p-8">
          <Link href={'/'} className="font-bond text-3xl">Home Page</Link>
          <div className="space-x-4 text-xl">
            <Link href={'/performance'}>Performance Page</Link>
            <Link href={'/reliability'}>Reliability Page</Link>
            <Link href={'/scale'}>Scale Page</Link>
          </div>
         
        </nav>
      </div>
    )
  }
  