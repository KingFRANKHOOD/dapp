import closeIcon from "@/public/close-bold.svg"
import Image from "next/image";

const InstructionsModal = () => {
return(
    <section className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-10 flex items-center justify-center " >


        <div className="border-[11px] border-[#FAFF00] bg-[#58B12F] w-[781px] h-[525px] relative  flex items-center justify-center  " >

            <button className=" w-[67px] h-[67px] bg-[#000000] absolute top-[5%] right-[5%]  flex items-center justify-center cursor-pointer  " >
                <Image src={closeIcon} alt="close" height={31.42} width={31.42} className="hover:scale-150 transform transition duration-300 ease-in-out " />
            </button>




            <div className="w-full flex flex-col items-center justify-center gap-6 " >

                <div className=" w-fit flex flex-col items-center justify-center gap-3 ">
                    <h1 className="h-[52px] w-[37px] " >1</h1>
                    <p>step one</p>
                </div>
                
            </div>

        </div>


    </section>
)
}

export default InstructionsModal;