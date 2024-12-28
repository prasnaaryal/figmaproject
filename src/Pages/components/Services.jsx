import { SiTicktick } from "react-icons/si";

const Services = () => {
  return (
    <div className="bg-gray-800 px-12 py-10 text-white min-h-screen">
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-6">
          <h2 className="text-3xl font-bold mb-4">
            Why Should People Choose
            <br />
            Fitnesxia Services
          </h2>
          <div className="space-y-4">
            <div>
              <p className="flex items-center gap-2 text-lg">
                <SiTicktick className="text-orange-500" /> Personal Training
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ea ex quisquam aspernatur libero qui sed! Vitae alias aperiam nobis it.</p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-lg">
                <SiTicktick className="text-orange-500" /> Group Classes
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit veritatis minus numquam corporis dolore deserunt.</p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-lg">
                <SiTicktick className="text-orange-500"  /> Nutrition Plans
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
            </div>
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500 rounded-full blur-lg "></div>
            <img src="/images/time.png" alt="Fitness Tracker" className="w-68 h-64 rounded-full relative z-10" />
            <div className="absolute top-0 right-0 mt-2 mr-4 bg-white p-2 rounded shadow-lg">
              <p className="text-sm text-gray-800">70 bpm</p>
              <p className="text-xs text-gray-500">Heart Rate</p>
            </div>
            <div className="absolute bottom-0 left-0 mb-4 ml-4 bg-white p-2 rounded shadow-lg">
              <p className="text-sm text-gray-800">24%</p>
              <p className="text-xs text-gray-500">Fat Burning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
