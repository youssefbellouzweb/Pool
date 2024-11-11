import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "App For Pool",
  description: "Fun with us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className="main">
          <div className="part-2">
            <Link href={"/"}>
              <img src="imgs/icon.png" alt="" className="icon" />
            </Link>
            <ul>
              <li>
                <img src="imgs/dashboard.png" alt="" />
                <Link href={"/"}>Tableau de bord</Link>
              </li>
              <li>
                <img src="imgs/users-solid.svg" alt="" />
                <Link href="/clients">Personnes</Link>
              </li>
              <li>
                <img src="imgs/grand_salle.png" alt="" />
                <Link href={"/grand_salle"}>Grand Salle</Link>
              </li>
              <li>
                <img src="imgs/petit_salle.png" alt="" />
                <Link href={"/petit_salle"}>Pitet Salle</Link>
              </li>
              <li>
                <img src="imgs/depenses.png" alt="" />
                <Link href={"/depenses"}>Depenses</Link>
              </li>
              <li>
                <img src="imgs/pisine.png" alt="" />
                <Link href={"/piscine"}>Piscine</Link>
              </li>
              <li>
                <img src="imgs/cafe.png" alt="" />
                <Link href={"/cafe"}>Cafe</Link>
              </li>
              <li>
                <img src="imgs/users-solid.svg" alt="" />
                <Link href={"/list_persone"}>Liste presone</Link>
              </li>
              <li>
                <img src="imgs/traiteur.png" alt="" />
                <Link href={"/traiteur"}>traiteur</Link>
              </li>
              <li>
                <img src="imgs/screwdriver-wrench-solid.svg" alt="" />
                <Link href={"/ReturnedTools"}>outils retournes</Link>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <button id='logoutbtn' >Log out</button>
              </li>
            </ul>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
