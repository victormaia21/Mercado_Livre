import Image from "next/image";

export default function Cards_Baby() {
  const cardsData = [
    {
      title: "BRINQUEDOS DOS SONHOS",
      mainImage: "https://http2.mlstatic.com/D_NQ_785049-MLA81068021650_122024-OO.webp",
      thumbnails: [
        "https://http2.mlstatic.com/D_950413-MLU72275333148_102023-I.jpg",
        "https://http2.mlstatic.com/D_810376-MLU73314195662_122023-I.jpg",
        "https://http2.mlstatic.com/D_720958-MLA80837436002_122024-I.jpg",
        "https://http2.mlstatic.com/D_848839-MLU75123076151_032024-I.jpg"
      ]
    },
    {
      title: "SNEAKERS",
      mainImage: "https://http2.mlstatic.com/D_NQ_618190-MLA81089657172_122024-OO.webp",
      thumbnails: [
        "https://http2.mlstatic.com/D_699605-MLA80470175613_112024-I.jpg",
        "https://http2.mlstatic.com/D_732786-MLB79733775320_102024-O.jpg",
        "https://http2.mlstatic.com/D_928102-MLB77334107470_072024-O.jpg",
        "https://http2.mlstatic.com/D_753515-MLB71833595877_092023-O.jpg"
      ]
    },
    {
      title: "BRINQUEDOS DOS SONHOS",
      mainImage: "https://http2.mlstatic.com/D_NQ_661729-MLA81070259928_122024-OO.webp",
      thumbnails: [
        "https://http2.mlstatic.com/D_803741-MLU76517104009_052024-I.jpg",
        "https://http2.mlstatic.com/D_854633-MLU77348631432_072024-I.jpg",
        "https://http2.mlstatic.com/D_674427-MLU76523305695_052024-I.jpg",
        "https://http2.mlstatic.com/D_788128-MLU72748303449_112023-I.jpg"
      ]
    }
  ];

  return (
    <section className="w-full">
      <div className="flex w-[75em] gap-3 m-auto">
        {cardsData.map((card, index) => (
          <div key={index} className="bg-white w-[24em] rounded-xl pt-3 pb-3 shadow-lg cursor-pointer">
            <h2 className="font-bold text-lg ml-5">{card.title}</h2>
            <div className="mt-3 w-full overflow-hidden group">
              <Image
                src={card.mainImage}
                alt={card.title}
                width={400}
                height={200}
                className="group-hover:scale-105 duration-500 transition-transform"
              />
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {card.thumbnails.map((thumb, thumbIndex) => (
                <div
                  key={thumbIndex}
                  className="border-[2px] border-[#ccc] hover:border-[blue] flex items-center"
                >
                  <Image
                    src={thumb}
                    alt={`${card.title} thumbnail`}
                    width={60}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
