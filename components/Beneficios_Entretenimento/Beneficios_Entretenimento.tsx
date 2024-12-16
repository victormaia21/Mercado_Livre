import Image from "next/image";

export default function BeneficiosEntretenimento() {
  return (
    <section className="pb-4">
      <div className="w-[75em] m-auto bg-white pt-4 pb-4 pl-6 pr-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-extrabold">Beneficíos em entretenimento</h2>
        <div className="flex gap-3 mt-4">
            <div className="w-[35em] rounded-xl flex h-60 relative pb-3 items-end bg-bottom bg-[url('https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/widgetMultiPartnerCard/20240723153730_Imagen-MLB@2x.png')]">
                <div className="flex pl-5 pr-5 items-center gap-3">
                    <Image 
                      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/rebrand-logo/disney-brand@1X.png"
                      alt="Disney Logo"
                      width={80}
                      height={80}
                      className="z-10"
                    />
                    <div className="text-white z-10">
                        <h3 className="font-bold text-lg">Incluido com o Meli+ Total</h3>
                        <p className="text-lg">Plano Padrão com anúncios</p>
                    </div>
                </div>
            </div>

            <div className="w-[35em] rounded-xl h-60 flex relative pb-3 items-end bg-center bg-cover bg-[url('https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widgetMultiPartnerCard/20240930150858_BRA_Widget_2x.jpg')]">
                <div className="flex pl-5 pr-5 items-center gap-3">
                    <Image 
                      src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/max/logo/max-square@2x.png"
                      alt="Disney Logo"
                      width={80}
                      height={80}
                      className="z-10"
                    />
                    <div className="text-white z-10">
                        <h3 className="font-bold text-lg">Até 50% OFF</h3>
                        <p className="text-lg">Max</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}