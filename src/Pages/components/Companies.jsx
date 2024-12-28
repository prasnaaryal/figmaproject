
const Companies = () => {
  return (
    <div className="px-12 py-4 bg-slate-800">
      <div className="text-white grid grid-cols-12 items-center justify-center gap-12">
        <div className="col-span-6">
            <p className="font-bold text-5xl">970K+ More</p>
            <p>Trusted Companies Partner</p>
        </div>
        <div className="col-span-6 flex items-center">
            <img className="w-[150px] h-auto" src="/images/company1.png" alt="company1"/>
            <img className="w-[100px] h-[100px]" src="/images/company2.png" alt="company2"/>
            <img className="w-[100px] h-[100px]" src="/images/company3.png" alt="company3"/>
        </div>

        </div>

    </div>
  )
}

export default Companies