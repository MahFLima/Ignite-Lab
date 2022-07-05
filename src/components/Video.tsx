import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning } from "phosphor-react";

import "@vime/core/themes/default.css";

import { ButtonCard } from "./ButtonCard";

import dat from "../data";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { createRef, useEffect, useState } from "react";
import YouTube from "react-youtube";

interface VideoProps {
  lessonSlug: string;
}


export function Video(props: VideoProps) {

  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    );
  }


  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          {/* <Player>
            <Youtube videoId='y4ltLH9iK8E' key={data.lesson.videoId}/>
            <DefaultUi />
          </Player> */}
            <iframe
              width="100%"
              height="100%"
              src={data.lesson.videoId}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            

        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex flex-col gap-6 md:items-start md:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Comunidade do Discord
            </a>
          </div>
        </div>

        <div className=" flex-col gap-5 mt-20 lg:grid lg:grid-cols-2">
          <ButtonCard title={dat[0].title} description={dat[0].description} />
          <ButtonCard title={dat[1].title} description={dat[1].description} />
        </div>
      </div>
    </div>
  );
}
