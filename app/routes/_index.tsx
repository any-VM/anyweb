/* eslint-disable jsx-a11y/iframe-has-title */
import type { MetaFunction } from "@remix-run/node";
import { Settings2 } from "lucide-react";
import { SunMoon } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Anyweb" },
        { name: "description", content: "Anyweb is an advanced web service for bypassing internet censorship" },
    ];
};

export default function Index() {
    return (
        <main>
            <nav className="flex w-screen h-[var(--nav-height)] justify-start">
                <div className="nav-controls-wrapper flex">
                    <div className="foward-back-wrapper wrapper-base"></div>
                    <div className="reload-button-wrapper wrapper-base"></div>
                </div>

                <input className="search-wrapper flex justify-start align-center flex-grow h-[calc(var(--nav-height)-var(--uni-margin))] m-[calc(var(--uni-margin)*2-var(--uni-margin))] wrapper-base bg-slate-800 bg-opacity-25 uni-border search-effect border-slate-400 focus:outline-none" />
                
                <div className="controls-wrapper flex">
                    <div className="light-dark-wrapper wrapper-base h-[calc(var(--nav-height)-var(--uni-margin))]">
                        <SunMoon />
                    </div>
                    <div className="settings-wrapper wrapper-base h-[calc(var(--nav-height)-var(--uni-margin))] w-[calc(var(--nav-height)-var(--uni-margin))]">
                        <Settings2 />
                    </div>
                </div>
            </nav>

            <div className="absolute top-[calc(var(--nav-height)+var(--uni-margin))] w-screen uni-border-half wrapper-base h-0"></div>
            
            <div className="window-wrapper absolute top-[calc(var(--nav-height)+var(--uni-margin)+var(--border-thickness)/2)] w-screen h-[calc(100vh-var(--uni-margin)*2-var(--nav-height))]">
                <iframe
                    src=""
                    className="flex justify-center uni-border wrapper-base m-[calc(var(--uni-margin)*2-var(--uni-margin))] w-[calc(100vw-var(--uni-margin)*2)] bottom-[var(--uni-margin)] h-[calc(100vh-var(--uni-margin)*3-var(--nav-height)-var(--border-thickness))]"
                ></iframe>
            </div>
        </main>
    );
}
