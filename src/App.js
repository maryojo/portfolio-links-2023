import Spline from "@splinetool/react-spline";
import {SiPolywork} from "react-icons/si";
import {CiLinkedin} from "react-icons/ci";
import {SlSocialGithub, SlSocialBehance} from "react-icons/sl";
import {TbMailbox} from "react-icons/tb";
import logo from "./images/logoe.png";


export default function App() {
  return (
    <div className="here relative">
      <Spline className="hidden lg:block" scene="https://prod.spline.design/ucDueTh0omand6Xu/scene.splinecode" />
      <Spline className="block lg:hidden" scene="https://prod.spline.design/mYW3Ov24QVBDuLGe/scene.splinecode" />
      {/* <div className="absolute top-10 left-10"><img src={logo}/></div> */}
      <div className="absolute top-6 right-10 lg:top-10 lg:right-36 w-5/6 md:w-4/6 lg:w-3/6 flex flex-col gap-4">
        <h1>Hi there!</h1>
        <div>
        <p className="text-zinc-600">I'm working really hard to build an incredible portfolio and I can't wait to share with you!</p>
        <p className="text-zinc-600">Meanwhile you can check out these links</p>
        </div>
        
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          <div className="flex flex-row items-center gap-2">
          <SiPolywork className="icon"/>
            <a href="#">My recent activities</a>
          </div>
          <div className="flex flex-row items-center gap-2">
          <CiLinkedin className="icon"/>
            <a href="#">My LinkedIn profile</a>
          </div>
          <div className="flex flex-row items-center gap-2">
          <SlSocialGithub className="icon"/>
            <a href="#">My coding activities</a>
          </div>
          <div className="flex flex-row items-center gap-2">
          <SlSocialBehance className="icon"/>
            <a href="#">My design </a>
          </div>
          <div className="flex flex-row items-center gap-2">
          <TbMailbox className="icon"/>
          <p>Send me a mail on <a>hi@maryojo.me</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
