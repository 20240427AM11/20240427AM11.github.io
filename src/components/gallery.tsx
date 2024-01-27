import { Photo, PhotoCounterElement } from "@/types/gallery";
import { ReactNode } from "react";
import PhotoGroup from "@/components/photo-group";
import Image from "next/image";
import photos from "@/../public/photo.json";

const PhotoCounterElement = ({
  text,
  count,
}: PhotoCounterElement): ReactNode => {
  return (
    <div className="mx-5 inline-block">
      <div className="font-[arial] text-sm font-bold leading-4">{count}</div>
      <div className="mt-1 text-sm leading-[15px] text-[#777777]">{text}</div>
    </div>
  );
};

const PhotoCounter = (): ReactNode => {
  return (
    <div className="mb-5 text-center">
      <PhotoCounterElement text="비디오" count={0} />
      <PhotoCounterElement text="포토" count={19} />
    </div>
  );
};

const Photo = ({ src }: Photo): ReactNode => {
  return (
    <div className="relative float-left mb-0.5 inline aspect-square w-1/3 pr-0.5 leading-none">
      <Image className="object-cover" alt="src" src={`${src}`} fill />
    </div>
  );
};

const Gallery = (): ReactNode => {
  return (
    <div className="pb-4">
      <PhotoCounter />
      <PhotoGroup>
        {photos.map((photo) => (
          <Photo key={photo} src={`/images/gallery/${photo}.jpeg`} />
        ))}
      </PhotoGroup>
    </div>
  );
};

export default Gallery;
