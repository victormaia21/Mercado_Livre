import Image from "next/image";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-[#fbe919] pb-1">
        <div className="flex justify-center items-center">
          <Image 
            src="/img/mercado_simbolo.png"
            alt="Mercado Livre Simbolo"
            width={100}
            height={100}
            className="mr-3"
          />
          <div className="relative w-[45em]">
            <input 
              type="text" 
              className="w-full h-11 border-[1px] border-[#ccc] focus:border-[1px] focus:border-[blue] border-[solid] pl-3 pr-12"
              placeholder="Buscar produtos, marcas e muito mais..."
            />
            <div className="absolute right-0 pr-4 top-1/2 -translate-y-1/2 flex gap-x-4 cursor-pointer h-full items-center">
              <div className="w-[1px] h-[20px] top-1/2 border-l-[1px] border-[#ccc]"></div>
              <CiSearch className="text-lg"/>
            </div>
          </div>
            <Image 
              src="/img/escolha_plano.webp"
              alt="Mercado Livre Simbolo"
              width={290}
              height={100}
              className="ml-16"
            />
        </div>
        <div className="flex justify-center">
          <div>
            <button className="flex mr-8 cursor-pointer items-center border-[#fbe919] border-[1px] hover:border-[#817a2f] pt-1 pb-1 pl-1 pr-1 rounded-xl">
              <CiLocationOn className="text-[1.7em]"/>
              <div className="text-left">
                <p className="text-[.8em] text-[#817a2f]">Informe seu</p>
                <p className="text-[.8em]">CEP</p>
              </div>
            </button>
          </div>

          <nav>
            <ul className="flex gap-4 mr-40 text-sm items-end h-5/6">
              <li className="cursor-pointer">
                <span className="flex items-center">
                  <p>Categorias</p>
                  <FaChevronDown className="ml-1 text-[.8em] text-[#aaa]" />
                </span>
              </li>
              <li className="cursor-pointer">Ofertas</li>
              <li className="cursor-pointer">Cupons</li>
              <li className="cursor-pointer">Supermercado</li>
              <li className="cursor-pointer">Moda</li>
              <li className="cursor-pointer relative">
                <span className="bg-[#04a64e] text-white text-[.6em] rounded-xl w-8 h-3 flex items-center justify-center text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">Gratis</span>
                <span>Mercado Play</span>
              </li>
              <li className="cursor-pointer">Vender</li>
              <li className="cursor-pointer">Contato</li>
            </ul>
          </nav>

          <div>
            <ul className="flex gap-4 mr-10 text-sm items-end h-5/6">
              <li className="cursor-pointer">Crie a sua conta</li>
              <li className="cursor-pointer">Entre</li>
              <li className="cursor-pointer">Compras</li>
              <li className="text-[1.4em] cursor-pointer"><FiShoppingCart /></li>
            </ul>
          </div>
        </div>
      </header>
  )
}