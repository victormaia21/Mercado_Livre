"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function MaisVendidos() {

const ofertas = [
    {
        title: "Sandália Feminina Elástico Confortavel Rasteira Leve Moda",
        riscado: 64.90,
        valor: 59.70,
        off: 8,
        numeroParcela: 12,
        valorParcela: 5.80,
        img: "https://http2.mlstatic.com/D_NQ_NP_973177-MLB71118297767_082023-O.webp",
    },
    {
        title: "Sandália Feminina Papete Birken Flatform Brilho Strass Gigil",
        riscado: 78.99,
        valor: 69.99,
        off: 11,
        numeroParcela: 12,
        valorParcela: 6.80,
        img: "https://http2.mlstatic.com/D_NQ_NP_896474-MLB71390374103_082023-O.webp",
    },
    
    {
        title: "Chinelo Masculino E Feminino Havaianas Top - Opção De Cores",
        valor: 36.99,
        off: 11,
        numeroParcela: 12,
        valorParcela: 6.80,
        img: "https://http2.mlstatic.com/D_NQ_NP_736825-MLB45888352223_052021-O.webp",
    },
    {
        title: "Sapatilha Feminina Sandalia Rasteirinha Sapato Conforto G10",
        valor: 46.99,
        off: 40,
        numeroParcela: 12,
        valorParcela: 4.56,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_996142-MLB40246176706_122019-F.webp",
    },
    {
        title: "Sapatilha Mocassim Feminino Sapato Quadrado 160 Ana Brito",
        valor: 48.02,
        off: 26,
        numeroParcela: 12,
        valorParcela: 4.66,
        img: "https://http2.mlstatic.com/D_NQ_NP_867044-MLB75299923492_032024-O.webp",
    },
    {
        title: "Sapatilha Slingback Bico Fino Fivelas Sapato Social Feminino",
        valor: 49.99,
        off: 36,
        numeroParcela: 12,
        valorParcela: 4.85,
        img: "https://http2.mlstatic.com/D_NQ_NP_741118-MLB77933268564_082024-O.webp",
    },
    {
        title: "Chinelo Masculino E Feminino Havaianas Top - Opção De Cores",
        valor: 36.99,
        off: 11,
        numeroParcela: 12,
        valorParcela: 6.80,
        valorDescricao: "Sem juros",
        img: "https://http2.mlstatic.com/D_NQ_NP_736825-MLB45888352223_052021-O.webp",
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
    <div className="pt-3 pb-6 pl-10 pr-10">
      <div className="bg-white w-[75em] m-auto pt-3 rounded-xl shadow-md">
            <div className="flex items-center pl-6 pr-6">
                <div className="flex">
                <h1 className="text-lg font-bold">Mais vendidos da semana em Sandálias e Chinelos</h1>
                <button className="text-[#5a80e9] ml-2 text-sm font-bold">Ir para mais vendidos</button>
                </div>
            </div>

            <div className="flex items-center relative pl-6 pr-6">
                <div className="flex flex-nowrap overflow-hidden gap-2 w-full duration-1000">
                <div
                    className={`flex w-full transition-transform gap-3`}
                >
                {ofertas.map((e, i) => (
                    <div className="bg-white shrink-0 h-[28em] pt-3 w-[11.3em] pb-3 pl-4 pr-4 rounded-xl" key={i}>
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
                            <span className="text-2xl">R$ {e.valor.toString().split('.')[0]}<sup>{e.valor.toString().split('.')[1]}</sup></span>
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
  )
}