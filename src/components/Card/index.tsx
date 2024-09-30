import Image from "next/image";

export function Card({ companyImage, review, reviewAuthor }: CardProps) {
  return (
    <div className="border-border flex h-full flex-col items-start gap-6 rounded-[20px] border bg-white p-6 shadow-lg shadow-black/20 lg:gap-4 lg:p-8">
      <Image
        src={companyImage.src}
        alt={companyImage.alt}
        width={124}
        height={32}
        className="h-full max-h-8 w-hull"
      />
      <p className="leading-6 text-black lg:text-2xl lg:leading-10">{review}</p>
      <div className="mt-auto flex items-center gap-4">
        <Image
          src={reviewAuthor.image.src}
          alt={reviewAuthor.image.alt}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg text-black">{reviewAuthor.name}</p>
          <p className="text-gray font-light">{reviewAuthor.title}</p>
        </div>
      </div>
    </div>
  );
}
