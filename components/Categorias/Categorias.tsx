import Image from "next/image"
import { FaChevronRight } from "react-icons/fa6"

export default function Categorias() {
  const categorias = [
    {
      nome: "Carros, Motos e Outros",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_car-front-new-category.webp"
    },
    {
      nome: "Celulares e Telefones",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_mobile-button-category.webp"
    },
    {
      nome: "Eletrodomésticos",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_oven-category.webp"
    },
    {
      nome: "Ferramentas",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_settings-tool-67-category.webp"
    },
    {
      nome: "Acessórios para Veículos",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_steering-wheel-category.webp"
    },
    {
      nome: "Calçados, Roupas e Bolsas",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_style_summer_female-2-category.webp"
    },
    {
      nome: "Esportes e Fitness",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_ball-soccer-category.webp"
    },
    {
      nome: "Beleza e Cuidado Pessoal",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_makeup-category.webp"
    },
    {
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_armchair_blue-category.webp",
      nome: "Casa, Móveis e Decoração"
    },
    {
      nome: "Informartica",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_tv-2-category.webp"
    },
    {
      nome: "Imóveis",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_building-category.webp"
    },
    {
      nome: "Eletrônicos, Áudio e Video",
      img: "https://http2.mlstatic.com/storage/homes-korriban/assets/icons/xxhdpi/home_audio-92-category.webp"
    }
  ]
  return (
    <section>
        <div className="bg-white w-[75em] m-auto pl-5 pr-5 pt-5 pb-5 relative rounded-xl">
            <div className="flex"> 
                <div className="flex w-3/4">
                    <h2 className="font-bold text-lg">Categorias</h2>
                    <button className="ml-3 text-sm text-[#3b87fb] font-bold">Mostrar todas as categorias</button>
                </div>
                <div className="flex justify-end w-1/4 gap-1">
                    <span className="h-2 w-2 bg-[#3b87fb] rounded-full block"></span>
                    <span className="h-2 w-2 bg-[#ccc] rounded-full block"></span>
                    <span className="h-2 w-2 bg-[#ccc] rounded-full block"></span>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-6 gap-3">
              {categorias.map((card, index) => (
                <div className="flex gap-3 border-[1px] border-[#ccc] rounded-xl" key={index}>
                  <div className="bg-[#eee] w-24 h-24 flex items-center justify-center rounded-l-xl">
                    <Image
                      src={card.img}
                      alt={card.nome}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <h2 className="font-bold">{card.nome}</h2>
                  </div>
                </div>
              ))}
            </div>
            <span
            className="bg-white h-16 w-16 rounded-full absolute right-0 top-1/2 -translate-y-1/2 translate-x-7 shadow-md cursor-pointer hover:shadow-xl"
            >
            <FaChevronRight className="text-[#0000ffa8] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg" />
            </span>
        </div>
        
    </section>
  )
}