import {altFromPath} from "../automation/Config";

export function Page({ children }) {
  return (
    <div className="bg-section-background justify-center mx-6 my-6 rounded-xl sm:py-32">
        {children}
    </div>
  );
}

export function Row({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 px-6">
        {children}
    </div>
  );
}

export function TextContent({children}) {
  return (
    <div className="mx-auto max-w-2xl text-center md:text-left">
        {children}
    </div>
  );
}

export function Img({path}) {
  return (
    <div className="flex justify-center md:justify-end md:order-2">
        <img className="h-auto max-w-full rounded-lg shadow-lg" 
            src={path}
            alt={altFromPath(path)}/>
    </div>
  );
}

export function Hero() {
  return (
    <div className="bg-[url('/assets/Fishing-net.jpg')] bg-cover bg-center justify-center">
      <div className="mx-auto max-w-7xl lg:px-8 p-6">
        <div className="py-72"></div>
        <div className="mx-auto max-w-4xl py-4 rounded-lg text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Helping church websites spread the Word on the internet
          </p>
        </div>
        <div className="py-18"></div>
      </div>
    </div>
  );
}

export function GoogleMap({path}) {
  return (
    <div className="mx-6 my-12 px-6">
      <iframe
        src={path}
        className="w-full h-[450px] rounded-xl shadow-lg border-0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}