"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function CardsMercadoLivre() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const cardWidth: number = 200; // Largura do card

  // Função para atualizar o estado de rolagem
  const updateScrollState = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setScrollPosition(scrollLeft);
    setCanScrollLeft(scrollLeft > 0); // Pode rolar para a esquerda se scrollLeft for maior que 0
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth); // Pode rolar para a direita se a largura total for maior que o conteúdo visível
  };

  // Função para rolar para a esquerda ou direita
  const scrollTo = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = cardWidth * 3; // A quantidade de rolagem por clique
    const newScrollPosition =
      direction === "right"
        ? scrollPosition + scrollAmount
        : scrollPosition - scrollAmount;

    containerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setScrollPosition(newScrollPosition);
  };

  // Efeito para adicionar o listener de scroll e atualizar o estado
  useEffect(() => {
    updateScrollState();
    const container = containerRef.current;

    if (container) {
      container.addEventListener("scroll", updateScrollState);
      return () => container.removeEventListener("scroll", updateScrollState);
    }
  }, []);

  const cards = [
    {
      title: "Frete grátis",
      description: "Benefício por ser sua primeira compra",
      buttonText: "Mostrar produtos",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/new-buyer.svg",
    },
    {
      title: "Entre na sua conta",
      description: "Aproveite ofertas para tudo que quiser",
      buttonText: "Entrar na sua conta",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg",
    },
    {
      title: "Insira sua localização",
      description: "Confira os custos e prazo de entrega",
      buttonText: "Inserir localização",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/location.svg",
    },
    {
      title: "Meio de pagamento",
      description: "Pague suas compras com rapidez e segurança",
      buttonText: "Mostrar menos",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/payment-methods.svg",
    },
    {
      title: "Menos de R$100",
      description: "Confira produtos com preços baixos",
      buttonText: "Mostrar produtos",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/mlb-low-price-product.svg",
    },
    {
      title: "Meis vendidos",
      description: "Explore os produtos que são tendencias",
      buttonText: "Ir para mais vendidos",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/top-sale.svg",
    },
    {
      title: "Compra garantidas",
      description: "Você pode devolver sua compra grátis",
      buttonText: "Como funciona",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/buy-protected.svg",
    },
    {
      title: "Lojas oficiais",
      description: "Suas marcas preferidas",
      buttonText: "Mostrar lojas",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/store-official.svg",
    },
    {
      title: "Nossas categorias",
      description: "Encontre celulares roupas, imóveis e muito mais.",
      buttonText: "Mostrar lojas",
      imageSrc:
        "https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/categories.svg",
    },
  ];

  return (
    <div className="flex w-full -translate-y-8 pr-10 pl-10 h-full relative justify-center">
      <div className="w-full h-64 block absolute top-0 -translate-y-10 backdrop-blur-xl z-10"></div>
      <div className="bg-[#eaeaeb] w-full h-64 top-14 block absolute z-20"></div>
      <div className="w-[75em] relative z-30">
        <div
            ref={containerRef}
            className="flex flex-nowrap overflow-x-hidden gap-2"
        >
            {cards.map((card, index) => (
            <div
                key={index}
                className="bg-white w-48 rounded-xl p-4 cursor-pointer group shrink-0 flex flex-col justify-between"
            >
                <h1 className="font-semibold text-[.95em]">{card.title}</h1>
                <div className="flex justify-center">
                <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={100}
                    height={100}
                    className="mt-4"
                />
                </div>
                <p className="text-center text-sm group-hover:text-[#5a80e9]">
                {card.description}
                </p>
                <div className="flex justify-center mt-4">
                <button className="bg-[#e3edfb] text-[#3b87fb] text-[.75em] font-bold w-11/12 h-6 group-hover:shadow-md group-hover:text[#d9e7fb]">
                    {card.buttonText}
                </button>
                </div>
            </div>
            ))}
        </div>
        {canScrollLeft && (
            <span
            onClick={() => scrollTo("left")}
            className="bg-white h-16 w-16 rounded-full absolute left-0 top-1/2 -translate-y-1/2 shadow-md cursor-pointer hover:shadow-xl"
            >
            <FaChevronLeft className="text-[#0000ffa8] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg" />
            </span>
        )}
        {canScrollRight && (
            <span
            onClick={() => scrollTo("right")}
            className="bg-white h-16 w-16 rounded-full absolute right-0 top-1/2 -translate-y-1/2 shadow-md cursor-pointer hover:shadow-xl"
            >
            <FaChevronRight className="text-[#cbddfd] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg" />
            </span>
        )}
      </div>
    </div>
  );
}
