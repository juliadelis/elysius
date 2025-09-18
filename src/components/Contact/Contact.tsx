import { AiFillTikTok, AiFillYoutube } from "react-icons/ai";
import { BiLogoDiscordAlt, BiLogoInstagramAlt } from "react-icons/bi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="container mb-[100px] mx-auto  grid grid-cols-12  px-4 ">
      <div className="col-span-12 md:col-span-6 mt-[30px] text-[18px] text-[#0B1C3A] self-center">
        <div className="self-end w-fit justify-self-end flex flex-col gap-5">
          <h3 className="w-fit text-[48px] font-glamore uppercase">
            Onde nos encontrar
          </h3>
          <div className="flex flex-wrap gap-12 justify-evenly">
            <a
              href="https://www.instagram.com/elysiusrp"
              className="flex gap-4">
              <BiLogoInstagramAlt color="#0B1C3A" size={38} />

              <p className="self-center">@elysiusrp</p>
            </a>
            <a href="https://discord.gg/elysius" className="flex gap-4">
              <BiLogoDiscordAlt color="#0B1C3A" size={38} />
              <p className="self-center">@elysius</p>
            </a>
            <a
              href="https://www.tiktok.com/@elysiusrp"
              className="flex gap-4 align-middle justify-center">
              <AiFillTikTok color="#0B1C3A" size={38} />
              <p className="self-center">@elysiusrp</p>
            </a>
            <a
              href="https://www.youtube.com/@ElysiusRP"
              className="flex gap-4 align-middle justify-center">
              <AiFillYoutube color="#0B1C3A" size={38} />
              <p className="self-center">@ElysiusRP</p>
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 px-4 m-auto flex ">
        <div className="mt-[30px] text-[24px] font-semibold self-start">
          <img
            height={435}
            width={278}
            src="/img/greek-statue-face.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
