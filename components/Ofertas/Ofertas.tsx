"use client";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

export default function Ofertas() {
  const ofertas = [
      {
          title: "Mercado Pago: Point Pro2 - A Maquininha De Cartão + Completa",
          riscado: 199.90,
          valor: 115.94,
          off: 42,
          numeroParcela: 3,
          valorParcela: 38.65,
          valorDescricao: "Sem juros",
          img: "https://http2.mlstatic.com/D_NQ_NP_726790-MLB80407950746_112024-O.webp",
      },
      {
          title: "Bebê Reborn Menino Boneco Realista De Silicone Stitch MAIS VENDIDO 1º em Bonecas Reborn",
          riscado: 259.90,
          valor: 129.95,
          off: 50,
          numeroParcela: 12,
          valorParcela: 12.63,
          img: "https://http2.mlstatic.com/D_NQ_NP_776220-MLB76507568820_052024-O.webp",
      },
      {
          title: "Kit 10 Cuecas Box Boxer Microfibra Original Qualidade",
          riscado: 72.90,
          valor: 66.33,
          off: 9,
          numeroParcela: 12,
          valorParcela: 6.45,
          img: "https://http2.mlstatic.com/D_NQ_NP_795990-MLB50600174029_072022-O.webp",
      },
      {
          title: "Cadeira para Auto Progress Grupo Único 0 à 36kg Preto Bronze IMP02285 - Cosco Kids",
          riscado: 919,
          valor: 699.99,
          off: 23,
          numeroParcela: 10,
          valorParcela: 70,
          img: "https://http2.mlstatic.com/D_NQ_NP_705101-MLA74780205119_022024-O.webp",
      },
      {
          title: "Tênis Branco Academia Caminhada Esportivo Confortável Barato",
          riscado: 129.90,
          valor: 66.24,
          off: 49,
          numeroParcela: 12,
          valorParcela: 6.44,
          img: "https://http2.mlstatic.com/D_NQ_NP_882904-MLB74338265148_022024-O.webp",
      },
      {
          title: "Kit Com 2 Camisetas Masculinas Básicas Relaxed Hering",
          riscado: 139.99,
          valor: 104.99,
          off: 25,
          numeroParcela: 3,
          valorParcela: 35,
          img: "https://http2.mlstatic.com/D_NQ_NP_754604-MLB78801415868_092024-O.webp",
      },
      {
          title: "4 Travesseiros Antialérgico Impermeável 50x70 Super Macio",
          riscado: 159.90,
          valor: 134.31,
          off: 16,
          numeroParcela: 4,
          valorParcela: 33.58,
          valorDescricao: "Sem juros",
          img: "https://http2.mlstatic.com/D_NQ_NP_934436-MLB51323883306_082022-O.webp",
      },
      {
          title: "Taiff Modelador Curves Ondas Perfeitas 210°c 25mm Bivolt",
          riscado: 408.60,
          valor: 198.15,
          off: 51,
          numeroParcela: 12,
          valorParcela: 19.25,
          img: "https://http2.mlstatic.com/D_NQ_NP_927458-MLU70080862856_062023-O.webp",
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const maxIndex = Math.ceil(ofertas.length / itemsPerPage) - 1;

    const handleNext = () => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

  return (
    <div className="-translate-y-0 bg-[#eaeaeb] flex gap-4 pl-10 pr-10 w-full">
      <div className="w-[75em] m-auto flex gap-3">
        <div className="bg-white w-[20em] pt-3 pb-3 pl-4 pr-4 rounded-xl shadow-md">
          <h1 className="font-bold text-xl">Oferta do dia</h1>
          <div className="flex justify-center flex-col hover:cursor-pointer group">
            <Image
              src="https://http2.mlstatic.com/D_NQ_NP_866079-MLB72528733758_102023-O.webp"
              alt="meias"
              width={200}
              height={200}
              className="mt-4"
            />
            <p className="mt-4 group-hover:text-[#5a80e9]">Kit 6 Pares Meias Lupo Soquete Cano Baixo Academia Original</p>

            <p className="text-[#888] mt-4"><s>R$ 109,80</s></p>
            <div className="flex items-center">
              <span className="text-3xl">R$ 52<sup>70</sup></span>
              <span className="text-xl ml-2 text-[#2cc963]">52% OFF</span>
            </div>
            <p className="mt-1 text-sm">em 12x R$ 5,17</p>
            <p className="text-[#888] text-sm mt-2"><span className="text-[#2cc963] font-bold">Frete grátis</span> por ser sua primeira compra</p>
          </div>
        </div>

        <div className="bg-white w-[53.5em] pt-3 pb-3 pl-4 pr-4 rounded-xl shadow-md">
          <div className="flex items-center">
            <div className="flex">
              <h1 className="font-bold text-xl">Ofertas</h1>
              <button className="text-[#5a80e9] ml-2 text-sm font-bold">Mostrar todas as ofertas</button>
            </div>
          </div>

          <div className="flex items-center relative">
            <div className="flex flex-nowrap overflow-hidden gap-2 w-full duration-1000">
              <div
                className={`flex w-full transition-transform`}
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
              {ofertas.map((e, i) => (
                <div className="bg-white shrink-0 pt-3 w-52 pb-3 pl-4 pr-4 rounded-xl shadow-md" key={i}>
                    <div className="flex justify-center flex-col hover:cursor-pointer group">
                    <div className="h-48">
                        <Image
                        src={e.img}
                        alt={e.title}
                        width={150}
                        height={150}
                        className="mt-4"
                        />
                    </div>
                    <p className="mt-4 group-hover:text-[#5a80e9] text-sm break-words">
                        {e.title.length > 40 ? e.title.slice(0,40) + "..." : e.title}
                    </p>

                    <p className="text-[#888] mt-4">R$<s>{e.riscado}</s></p>
                    <div className="flex items-center">
                        <span className="text-3xl">R$ {e.valor.toString().split('.')[0]}<sup>{e.valor.toString().split('.')[1]}</sup></span>
                        <span className="text-xl ml-2 text-[#2cc963]">{e.off}%</span>
                    </div>
                    <p className="mt-1 text-sm">em {e.numeroParcela} R$ {e.valorParcela}</p>
                    <p className="text-[#888] text-sm mt-2"><span className="text-[#2cc963] font-bold">Frete grátis</span> por ser sua primeira compra</p>
                    </div>
                </div>
            ))}


              </div>
            </div>
            {currentIndex > 0 && (
              <span
                className="bg-white h-16 w-16 rounded-full absolute left-0 top-1/2 -translate-y-1/2 shadow-md cursor-pointer hover:shadow-xl"
                onClick={handlePrev}
              >
                <FaChevronLeft className="text-[#0000ffa8] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg" />
              </span>
            )}
            {currentIndex < maxIndex && (
              <span
                className="bg-white h-16 w-16 rounded-full absolute right-0 top-1/2 -translate-y-1/2 shadow-md cursor-pointer hover:shadow-xl"
                onClick={handleNext}
              >
                <FaChevronRight className="text-[#0000ffa8] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
