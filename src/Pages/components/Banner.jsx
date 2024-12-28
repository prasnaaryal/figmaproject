import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-12 ">
      <div className="text-white grid grid-cols-12 items-center justify-center gap-12">
        <div className="col-span-6">
          <div>
            <p className="text-5xl font-bold">
              GET HEALTHY BODY
              <br></br>
              WITH PERFECT
              <br></br>
              EXCERCISES
            </p>
            <p className="text-base pt-6">
              We are always there to help you make a healthy body <br></br> and
              mind through the power of fitness
            </p>
          </div>

          <div className="flex items-center pt-8 gap-4">
            <button className=" p-2 border bg-red-600 text-white rounded-lg">
              Get Started
            </button>

            <p className="flex items-center gap-2 font-semibold">
              <FaPlayCircle className="h-auto w-[30px]" />
              Watch Video
            </p>
          </div>
          <div>
            <div className=" text-white py-6 px-2 flex justify-between">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-semibold">105+</span>
                <span className="text-sm">Expert Trainers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-semibold">970+</span>
                <span className="text-sm">Members Joined</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-semibold">135+</span>
                <span className="text-sm">Fitness Programs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <img
            src="/images/image.png"
            className="w-[400px] h-auto"
            alt="athelete"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
