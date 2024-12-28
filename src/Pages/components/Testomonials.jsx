import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-8">
      <div className="container mx-auto flex gap-16  items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-center">
            What Our Happy Clients Say About Us
          </h2>
          <p className="text-center mt-4 mb-6">
            I've been a member of Fitness Within for about 6 months now and I
            absolutely love it! The trainers are so motivate and they really
            help to reach fitness goals.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex -space-x-1 overflow-hidden">
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/images/profile.jpg"
                  alt="User 1"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/images/profile.jpg"
                  alt="User 2"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="/images/profile.jpg"
                  alt="User 3"
                />
                <button className="w-10 h-10 bg-red-500 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faPlus} className="text-white" />
                </button>
              </div>

              <button className="w-10 h-10 bg-red-500 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faPlus} className="text-white" />
              </button>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
              <span className="ml-2">4.9 (450 Reviews)</span>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <img src="/images/star.png" alt="Trustpilot" className="w-10" />
            <p className="font-semibold text-xl text-center">TrustPilot</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-gray-700 p-6 rounded-lg">
          <button className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <div className="flex flex-col items-center flex-grow">
            <div className="flex items-center space-x-4">
              <img
                className="w-16 h-16 rounded-full"
                src="/images/profile.jpg"
                alt="Farhan Rio"
              />
              <div>
                <p className="text-lg font-semibold">Farhan Rio</p>
                <p className="text-sm">Happy Customer</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-center">
              "I've been coming to this gym for 3 year now and I've never been
              in better shape. The trainers are amazing and they always push me
              be my best. I'm so glad to this gym."
            </p>
            <div className="flex mt-2">
              <img
                className="w-30 h-16 "
                src="/images/5star.png"
                alt="Farhan Rio"
              />
            </div>
          </div>
          <button className="text-gray-300 hover:text-white">
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
