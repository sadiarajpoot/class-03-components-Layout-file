import Link from "next/link";
export default function Header(){
    return(
        <div className="bg-emerald-300 text-center">
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact-us'>Contact us</Link></li>
            <li><Link href='/career'>Career</Link></li>
          </ul>
        </div>
    )
}
