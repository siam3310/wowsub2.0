import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-4 sm:px-[2rem] xl:px-[8rem] bg-base-100">
        <div className="flex-1">
          <div className="btn btn-ghost normal-case  text-xl">
            <Image src={logo} className="h-full w-full" alt="bpl25" />
          </div>
        </div>
        <div className="flex-1  sm:flex hidden justify-center italic text-xl text-[2rem] font-semibold">
          Watch Live BPL 
        </div>
        <div className="flex-1 flex justify-end">
          <Link
            className="btn btn-ghost normal-case  text-xl "
            href={"/"}
          >
            Home 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
