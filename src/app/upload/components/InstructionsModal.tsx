import Image from "next/image";
import closeIcon from "@/public/close-bold.svg";

type InstructionsModalProps = {
  closeModal: () => void;
};

const InstructionsModal: React.FC<InstructionsModalProps> = ({ closeModal }) => {
  const instructions = [
    "Upload before and after cleanup photos with geotag",
    "Supported formats: JPEG, JPG, HEIC",
    "Maximum size per image: 10 MB",
  ];

  return (
    <section className="w-full h-full fixed top-0 left-0  bg-black bg-opacity-[70%] z-10 flex items-center justify-center py-5 px-4">
      <div className="border-[11px] py-2 border-[#FAFF00] bg-[#58B12F] min-w-[350px] h-auto md:w-[781px] md:h-[525px] relative flex items-center justify-center">
      
        <button
          onClick={closeModal}
          className="group w-[40px] h-[40px] md:w-[67px]  md:h-[67px] bg-[#000000] absolute top-[5%] right-[5%] flex items-center justify-center cursor-pointer  "
        >
          <Image
            src={closeIcon}
            alt="Close"
            height={31.42}
            width={31.42}
            className=" transform transition duration-300 ease-in-out group-hover:scale-125"
          />
        </button>

   
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-fit flex flex-col items-center justify-center gap-8 text-center">
            {instructions.map((instruction, index) => (
              <div key={index} className="flex flex-col gap-3 items-center">
                <h2 className="font-bebas h-[52px] w-[37px] bg-[#FAFF00] text-[#000000] font-normal text-[40px] flex items-center justify-center">
                  {index + 1}
                </h2>
                <p className="font-normal text-2xl text-[#000000] font-nunito  " >{instruction}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionsModal;
