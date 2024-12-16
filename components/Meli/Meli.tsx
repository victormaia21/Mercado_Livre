import Image from "next/image";

export default function Meli() {
  return (
    <section className="pb-16">
        <div className="w-[75em] m-auto shadow-sm">
            <div className="bg-gradient-to-r from-[#5a178c] to-[#a50193] flex justify-between pl-6 pr-6 h-20 mt-8 rounded-t-xl">
                <div className="flex items-center gap-4">
                    <Image
                    src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/meliplus/home/meliplus-outline-pill@3x.png"
                    alt=""
                    width={70}
                    height={70}
                    />
                    <h2 className="text-white text-xl">Assine a partir de R$ <span>9<sup>90</sup></span>/mês</h2>
                </div>
                <div className="flex items-center">
                    <button className="bg-[rgba(255,255,255,0.3)] text-white font-bold text-sm h-8 pl-2 pr-2 rounded-lg">Assinar o Meli+</button>
                </div>
            </div>
            <div className="bg-white pb-6 pt-4 pl-6 pr-6 rounded-b-xl">
                <h2 className="font-bold text-lg">Economize em frete, compras e pagamentos, e faça seu dinheiro render</h2>
                <div className="mt-3 flex justify-between shrink-0">
                    <div className="flex w-full gap-4 items-center">
                        <Image
                          src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/free_shipping_2x.png"
                          alt="caminhão"
                          width={100}
                          height={100}
                          className="h-16 w-16"
                        />
                        <p className="text-sm">Frete grátis em milhões de produtos a partir de R$ 29</p>
                    </div>
                    <div className="flex w-full gap-4 items-center">
                        <Image
                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/interest_free_installments_discount_2x.png"
                        alt="caminhão"
                        width={100}
                          height={100}
                          className="h-16 w-16"
                        />
                        <p className="text-sm">Até 3 parcelas extras sem juros</p>
                    </div>
                    <div className="flex w-full gap-4 items-center">
                        <Image
                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/cashback-ml_2x.png"
                        alt="caminhão"
                        width={100}
                        height={100}
                        className="h-16 w-16"
                        />
                        <p className="text-sm">Cashback em compras e pagamentos</p>
                    </div>
                    <div className="flex w-full gap-4 items-center">
                        <Image
                        src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/nivel-6/beneficio/money_profit_2x.png"
                        alt="caminhão"
                        width={100}
                        height={100}
                        className="h-16 w-16"
                        />
                        <p className="text-sm">Seu dinheiro rende 105% do CDI no Mercado Pago</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}