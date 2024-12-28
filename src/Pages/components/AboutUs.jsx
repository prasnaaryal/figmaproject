const AboutUs = () => {
  return (
    <div className="px-12 py-8 bg-slate-900">
      <div className="text-white grid grid-cols-12 items-center justify-center gap-12">
        <div className="col-span-6">
          <img
            className="w-[400px] h-auto rounded-xl"
            src="/images/train.jpg"
            alt="company1"
          />
        </div>
        <div className="col-span-6 justify-center items-center">
          <div>
            <p className="font-bold text-4xl">Get Ready To Reach</p>
            <p className="font-bold text-4xl">Your Fitness Goals</p>
            <p className="py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore est quasi, iste totam repudiandae ipsum minima deserunt
              aperiam ducimus praesentium, provident distinctio temporibus et
              nesciunt placeat pariatur facilis doloribus in?
            </p>
            <button className="border bg-red-600 p-2 rounded-lg">Free Trial Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
