import Link from "next/link"

export default function Case(){

    return(
        <section className="py-20 bg-white">
        <div className="container mx-auto px-4 my-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-primtext">Nos Histoires de Succès
          </h2>
          <p className="text-center text-xl text-sectext mb-8">
          Découvrez comment nous avons fait la différence pour nos clients grâce à nos solutions de sécurité adaptées et efficaces. Voici quelques exemples de projets réussis qui illustrent notre engagement envers l'excellence.


          </p>
          <div className="text-center">
            <Link href="/case-studies" className="bg-logcol2 text-white px-8 py-3 rounded-full font-semibold text-lg inline-block hover:bg-red-600 transition-colors">
              Plus d'histoires 
            </Link>
          </div>
        </div>
      </section>



    )
}