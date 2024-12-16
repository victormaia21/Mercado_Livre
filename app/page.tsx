import Anuncio from "@/components/Anuncio/Anuncio";
import BeneficiosEntretenimento from "@/components/Beneficios_Entretenimento/Beneficios_Entretenimento";
import Cards_Baby from "@/components/Cards_Baby/Cards_Baby";
import CardsMercadoLivre from "@/components/Cards_Mercado_Livre/CardsMercadoLivre";
import Carrossel from "@/components/Carrossel/Carrossel";
import Categorias from "@/components/Categorias/Categorias";
import Header from "@/components/Header/Header";
import MaisVendidos from "@/components/Mais_Vendidos/MaisVendidos";
import Meli from "@/components/Meli/Meli";
import Ofertas from "@/components/Ofertas/Ofertas";


export default function Home() {
  return (
    <div className="bg-[#eaeaeb]">
      <Header />
      <Carrossel />
      <CardsMercadoLivre />
      <Ofertas />
      <Meli />
      <MaisVendidos />
      <Cards_Baby />
      <Anuncio />
      <BeneficiosEntretenimento />
      <Categorias />
    </div>
  );
}
