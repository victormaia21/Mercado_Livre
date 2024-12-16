import Image from "next/image";

export default function Anuncio() {
  return (
    <section className="pb-12">
        <div className="w-[75em] h-48 bg-black ml-auto mr-auto mt-6 text-white flex cursor-pointer">
            <div className="bg-[url('https://http2.mlstatic.com/D_NQ_637815-MLA78536343522_082024-OO.jpg')] h-full w-[30em] bg-cover"></div>
            <div className="flex items-center justify-center">
                <div>
                    <div className="ml-6 bg-white pt-3 pb-3 pl-6 pr-6 rounded-xl">
                        <Image 
                          src="https://http2.mlstatic.com/D_NQ_909145-MLA77928174862_082024-OO.jpg"
                          alt="iisank"
                          width={50}
                          height={50}
                        />
                    </div>
                </div>
                <div className="ml-12 w-40">
                    <p className="text-sm">ENCONTRE AQUI</p>
                    <h2 className="text-xl font-bold mt-2">AS MELHORES OPÇÕES</h2>
                    <p className="mt-2 text-sm">IR PARA A PÁGINA <span className="ml-3">{">"}</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}