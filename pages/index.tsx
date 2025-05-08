import React from "react";
import {YouTubeEmbed} from '@next/third-parties/google';
import {Button} from "@/component/Button";
import {Card} from "@/component/Card";
import {Navbar} from "@/component/Navbar";

function Home() {
  return (
    <div className="flex-col">
        <Navbar/>
        {/*Body Start*/}
        <div className="flex-col">
            <div className="flex w-full flex-wrap justify-evenly bg-[#f5f5f5]">
                <div className="w-100 m-10">
                    <h1 className="text-5xl leading-14 font-bold w-90">
                        Most important title on the page
                    </h1>
                    <div className="text-md w-full leading-5 mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                    </div>
                </div>
                <div className="w-110 m-10 bg-red-500">
                    <YouTubeEmbed videoid="dQw4w9WgXcQ" />
                </div>
            </div>
            <div className="flex-col justify-items-center">
                <h2 className="text-5xl leading-14 font-bold mt-10 mb-10">
                    Also very important title
                </h2>
                <div className="flex flex-wrap justify-center w-full">
                    {[0,1,2,3,4,5].map(() => (
                        <Card />
                    ))}
                </div>
                <Button />
            </div>
            <div className="flex-col justify-items-center bg-[#f5f5f5] pt-24 pb-12">
                <h3 className="text-5xl font-bold">
                    Less important title
                </h3>
                <Button />
            </div>
        </div>
        {/*Body End*/}
    </div>
  )
}

export default Home