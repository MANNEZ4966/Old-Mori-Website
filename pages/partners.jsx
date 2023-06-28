
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Organizations
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://github.com/Maki-Service-Shop">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/950770133972971558/1098604290332962866/Maki_Service_LOGO.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Maki Service Shop</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    บริการเช่า Pterodactyl Hosting คุณภาพสูง ราคาถูก
✅ ราคาถูก เริ่มต้นใช้งานฟรี
✅ สามารถจัดการผ่านหน้าเว็บได้สะดวก
✅มีทีมงานดูแลตลอดเวลาการให้บริกาาร
✅ความเร็วระดับ High Performance
✅ฟรี Firewall เพื่อป้องกันการถูกโจมตี DDoS ทั้งจากไทย และ ต่างประเทศ
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                    <div className="flex flex-col justify-center text-white rounded">
                        <a href="https://github.com/001-team-dev">
                            <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/1101025414681473047/eb1254b4c248a3d9c806e3cf7644399c.png?size=4096" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">001 Team Dev</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                    Project Bot 001 - 004 Music
                                    </p>
                                </div>     
                            </div>
                        </div>
                        </a>
                        </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};