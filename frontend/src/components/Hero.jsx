import cafe from "../assets/Cafe.png";

export default function Hero() {
  return (
    <div className="relative w-full">
      <img src={cafe} alt="Cafe background" className="w-full h-auto" />

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-md text-white  rounded-lg p-3 ">
          <h1 className="mb-5 text-5xl font-bold">Margaret Cafe</h1>
          <p className="mb-5">Sipping Serenity at the Coffee Bar.</p>
          <button className="btn bg-slate-700 btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
