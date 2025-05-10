import Image from 'next/image'

export function OnboardingForm() {
  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <Image src={'/logo.png'} alt="JobMarshal Logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Job <span className="text-primary">Marshal</span>
        </h1>
      </div>
    </>
  )
}
