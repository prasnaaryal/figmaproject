

const BestPlan = () => {
  return (
    <div className="bg-gray-900 px-12 py-10 text-white min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Choose the Best Plan</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, magni.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold">DISCOVER</h3>
          <p className="text-4xl font-bold">$99 <span className="text-xl">/ Per Month</span></p>
          <ul className="space-y-2 my-4 text-left">
            <li>5 classes per month</li>
            <li> 4 group class monthly</li>
            <li> Online class access</li>
            <li>E-book fitness guide</li>
          </ul>
          <button className="bg-white text-gray-900 rounded py-2 px-4 mt-auto">Choose Plan</button>
        </div>

        <div className="bg-orange-500 p-6 rounded-lg flex flex-col items-center shadow-lg">
          <h3 className="text-2xl font-bold">ENTERPRISE</h3>
          <p className="text-4xl font-bold">$299 <span className="text-xl">/ Per Month</span></p>
          <ul className="space-y-2 my-4 text-left">
            <li> 10 classes per month</li>
            <li> 8 group class monthly</li>
            <li> Online class access</li>
            <li> E-book fitness guide</li>
            <li> Extra fitness training</li>
          </ul>
          <button className="bg-white text-gray-900 rounded py-2 px-4 mt-auto">Choose Plan</button>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold">PROFESSIONAL</h3>
          <p className="text-4xl font-bold">$199 <span className="text-xl">/ Per Month</span></p>
          <ul className="space-y-2 my-4 text-left">
            <li> 7 classes per month</li>
            <li> 6 group class monthly</li>
            <li> Online class access</li>
            <li> E-book fitness guide</li>
          </ul>
          <button className="bg-white text-gray-900 rounded py-2 px-4 mt-auto">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};



export default BestPlan;
