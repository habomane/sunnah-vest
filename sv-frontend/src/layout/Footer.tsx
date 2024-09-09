import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className=" bg-slate-50 py-2">
        <div className="mx-5 px-5 py-3  text-md font-medium flex flex-col gap-y-2 md:flex-row md:justify-between">
        <p className="font-accent text-2xl">Sunnah Vest</p>
        <div className="flex flex-col text-sm text-slate-600">
        <p className="">Copyright 2024 HOMane LLC. All Rights Reserved</p>
        <div className="flex flex-wrap gap-x-3">
        <Link to="/"><p className="cursor underline hover:font-bold">Privacy</p></Link>
        <Link to="/"><p className="cursor underline hover:font-bold">Terms of Use</p></Link>
        <Link to="/"><p className="cursor underline hover:font-bold">Security</p></Link>
        </div>

        </div>
        </div>

        
      </footer>
    );
  }
  
  export default Footer;
  