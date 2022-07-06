import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [isActive, setIsActive] = useState(false);

  const btnRef = useRef<HTMLButtonElement>(null);

  function navToggle() {
    btnRef.current?.classList.toggle("open");
    {isActive ? setIsActive(false) : setIsActive(true);}
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header
        id="top"
        className="py-5 bg-gray-700 flex justify-center align-center border-b border-gray-600"
      >
        <div className="w-full lg:w-auto self-start lg:self-center flex flex-row lg:flex-none flex-no-wrap justify-between items-center p-4">
          <Logo />
          <button
            id="menuBtn"
            className="hamburger block lg:hidden focus:outline-none"
            type="button"
            ref={btnRef}
            onClick={navToggle}
          >
            <span className="hamburger__top-bun bg-blue-500"></span>
            <span className="hamburger__bottom-bun bg-blue-500"></span>
          </button>
        </div>
      </header>
      <main className="flex flex-1">
        {isActive ? (
          <div className="p-6 w-full"><Sidebar /></div>
        ) : (
          <>
            {slug ? <Video lessonSlug={slug} /> : <Video lessonSlug='abertura' />}
            <div className=" hidden lg:flex flex-col w-[348px] bg-gray-700 p-6 border-l border-gray-600">
              <Sidebar />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
