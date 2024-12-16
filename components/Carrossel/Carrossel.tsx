"use client";
import { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Carrossel(): JSX.Element {
  const carrosselRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false); // Verifica se o mouse está sobre o carrossel
  const [items] = useState([
    "/img/carrossel/carrossel-1.webp",
    "/img/carrossel/carrossel-2.webp",
    "/img/carrossel/carrossel-3.webp",
    "/img/carrossel/carrossel-4.webp",
    "/img/carrossel/carrossel-5.webp",
    "/img/carrossel/carrossel-6.webp",
    "/img/carrossel/carrossel-7.webp",
  ]);

  // Função para simular o loop infinito
  const handleScroll = (direction: "left" | "right"): void => {
    if (!carrosselRef.current) return;

    const scrollAmount = carrosselRef.current.offsetWidth;
    const maxScroll = carrosselRef.current.scrollWidth - carrosselRef.current.offsetWidth;

    if (direction === "right") {
      carrosselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Reposiciona para o primeiro item se atingir o final
      setTimeout(() => {
        if (carrosselRef.current && carrosselRef.current.scrollLeft >= maxScroll) {
          carrosselRef.current.scrollLeft = 0; // Volta para o início
        }
      }, 500);
    } else if (direction === "left") {
      carrosselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });

      // Reposiciona para o último item se atingir o início
      setTimeout(() => {
        if (carrosselRef.current && carrosselRef.current.scrollLeft <= 0) {
          carrosselRef.current.scrollLeft = maxScroll - scrollAmount; // Vai para o último item
        }
      }, 500);
    }
  };

  useEffect(() => {
    if (isHovered) return; // Pausa a rotação se o mouse estiver sobre o carrossel

    const interval = setInterval(() => {
      handleScroll("right");
    }, 5000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar ou ao alterar o estado
  }, [isHovered]);

  return (
    <section
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} // Para o intervalo ao entrar no carrossel
      onMouseLeave={() => setIsHovered(false)} // Retoma o intervalo ao sair do carrossel
    >
      <div
        ref={carrosselRef}
        className="flex scrollbar-hide snap-x snap-mandatory overflow-x-hidden scroll-smooth"
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${item})`,
            }}
            className="bg-cover h-96 w-full flex-shrink-0 snap-center"
          ></div>
        ))}
      </div>

      <div className="w-full hidden justify-between absolute top-1/2 -translate-y-1/2 group-hover:flex">
        <span
          onClick={() => handleScroll("left")}
          className="bg-white pl-8 pr-3 pt-6 pb-6 rounded-r-[30px] cursor-pointer"
        >
          <FaChevronLeft className="text-[#0000ffa8] text-lg" />
        </span>
        <span
          onClick={() => handleScroll("right")}
          className="bg-white pl-8 pr-3 pt-6 pb-6 rounded-l-[30px] cursor-pointer"
        >
          <FaChevronRight className="text-[#0000ffa8] text-lg" />
        </span>
      </div>
    </section>
  );
}
