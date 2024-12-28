import { CgGym } from "react-icons/cg";


const Programme = () => {
    return (
      <div className="bg-gray-800 px-12 py-10 text-white">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-3xl font-bold">The Best Programs We Offer For You</h2>
          <p className="max-w-4xl mt-4">We offer a wide range of comprehensive fitness programs designed to cater to individuals of all fitness levels. Our aim is to help you achieve specific goals & maximize results.</p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg">
            <div className="mb-4"><CgGym /></div>
            <h3 className="font-bold mb-2">Strength Training</h3>
            <p>Our trainers will design that a progressive workout plans that proper achieve gains strength.</p>
            <a href="#" className="mt-auto text-orange-500">Learn More →</a>
          </div>
          <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg">
            <div className="mb-4"><CgGym />
            </div>
            <h3 className="font-bold mb-2">Basic Yoga</h3>
            <p>This program combines yoga with cardio & strength training to help lose weight & fitness.</p>
            <a href="#" className="mt-auto text-orange-500">Learn More →</a>
          </div>
          <div className="flex flex-col items-center bg-orange-500 p-6 rounded-lg text-black">
            <div className="mb-4"><CgGym /></div>
            <h3 className="font-bold mb-2">Body Building</h3>
            <p>For those looking to increase strength build lean muscle, our strength & muscle.</p>
            <a href="#" className="mt-auto text-gray-900">Learn More →</a>
          </div>
          <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg">
            <div className="mb-4"><CgGym /></div>
            <h3 className="font-bold mb-2">Weight Loss</h3>
            <p>Our weight loss programs are designed to help you make sustainable lifestyle changes.</p>
            <a href="#" className="mt-auto text-orange-500">Learn More →</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Programme;
  