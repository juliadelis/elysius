export default function Footer() {
  return (
    <footer className="justify-between mb-[40px] w-[100vw] flex flex-col px-4 ">
      <div className="flex flex-col gap-11">
        <div className="h-[1px] w-full  bg-[#D9D9D9]" />
        <div className="h-[1px] w-full  bg-[#D9D9D9]" />
      </div>
      <div className="container px-4 m-auto flex justify-between">
        <div className=" mt-[30px] text-[24px] font-semibold   ">
          <img height={94} width={178} src="/img/logo.png" alt="" />
        </div>

        <div className="mt-[30px] text-[18px] text-[#020A17] ml-auto self-center">
          <p className="w-fit">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
