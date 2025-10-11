export function RingButton({link, text}) {
  return (
    <a href={link}>
      <div className="rounded-3xl mx-6 p-8 ring-1 ring-button transition">
        <h3 className="text-lg font-semibold leading-8">{text}</h3>
      </div>
    </a>
  );
}

export function FooterButtons({link, text, link2, text2}) {
  return (
    <>
      <div className="mx-auto max-w-4xl px-2 py-12 text-center">
        <p className="mt-2 text-2xl font-bold tracking-tight text-colour sm:text-2xl">Read more</p>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <a href={link}>
          <div className="rounded-3xl mx-6 p-8 ring-1 ring-button transition">
            <h3 className="text-lg font-semibold leading-8">{text}</h3>
          </div>
        </a>
        <a href={link2}>
          <div className="rounded-3xl mx-6 p-8 ring-1 ring-button transition">
            <h3 className="text-lg font-semibold leading-8">{text2}</h3>
          </div>
        </a>
      </div>
    </>
  );
}

export function PrimaryButton({link, children}) {
  return (
    <a href={link} className="block px-4 py-2 bg-action rounded-lg font-medium text-white hover:bg-action/80">
        {children}
    </a>
  );
}

export function SpreadButton({link, children}) {
  return (
    <a href={link} className="flex-1 text-center px-2 py-2 text-sm font-medium bg-action hover:bg-action rounded-lg">
      {children}
    </a>
  );
}

