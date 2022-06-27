import { CaretRight, FileArrowDown, Image } from "phosphor-react";

interface ButtonCardProps{
  title: string;
  description: string;
}

export function ButtonCard(props: ButtonCardProps) {
  return (
    <a
      href=""
      className="flex justify-between bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors mt-5"
    >
      <div className="bg-green-700 p-6 flex items-center justify-center">
        {props.title == "Material complementar" ? <FileArrowDown size={40} /> : <Image size={40} />}
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{props.title}</strong>
        <p className="text-sm text-gray-200 mt-2">
          {props.description}
        </p>
      </div>
      <div className="p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
