export default function Epiloge() {
  return (
    <section
      id="epiloge"
      className="relative container mx-auto xl:rounded-[32px] bg-[#020A17] mb-12 md:mb-80 w-[100vw] ">
      <div className=" px-4 grid grid-cols-12 gap-6">
        <div className="hidden xl:flex h-full content-end col-span-5 ">
          <img
            className="self-end h-max w-auto"
            src="/img/poseidon_estatua_2.png"
            alt=""
          />
        </div>

        <div className="mt-[30px] col-span-12   xl:col-span-7 flex flex-col gap-4  text-[#FFFFFF]  md:ml-auto self-center py-12 px-4 xl:py-28 xl:pr-8">
          <h3 className="w-fit text-left font-glamore uppercase text-[36px]">
            ATO I: O Silêncio dos Monstros
          </h3>
          <p className="text-[20px] font-light text-left">
            Quando profecias são tidas como mínimas e sem relevância, a ganância
            dos deuses pode pôr tudo em risco. E isso não é diferente para os
            deuses olimpianos. Há muitos anos, Apolo profetizou o fim, e por
            banalidade, a Era do Silêncio dos Monstros se iniciou. Agora, além
            do despertar visceral do abissal mundo grego, os mortais, e até
            mesmo deuses, deverão enfrentar algo muito pior — as lembranças do
            passado atormentado e o futuro em declínio. O que permeia os
            silêncios obsoletos de Elysius não é sobre golpes desferidos ou
            heróis perdidos, mas do perigo do que um dia foi esquecido. O fim
            está mais perto do que nunca. Por isso, mortal, lembre-se de quem
            você é!
          </p>
        </div>

        <div className="block xl:hidden h-full content-end col-span-12 ">
          <img className=" h-auto" src="/img/poseidon_estatua_2.png" alt="" />
        </div>
      </div>
    </section>
  );
}
