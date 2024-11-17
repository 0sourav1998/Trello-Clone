import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import {Poppins} from "next/font/google";
import { cn } from "@/lib/utils";

const textFont = Poppins({
  subsets: ["latin"],
  weight : ["100","200","300","400","500","600","700","800","900"]
})

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-24">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-row mb-6 gap-4 border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6" />
          <span>No1 Task Management</span>
        </div>
        <h1 className="text-3xl md:text-6xl text-center mb-6">
          Taskify Helps Team to Move
        </h1>
        <div className="text-3xl md:text-6xl rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 py-2 ">
          Work Forward
        </div>
      </div>
      <div className={cn("text-sm md:text-xl text-neutral-400 max-w-xs md:max-w-2xl text-center mx-auto mt-6",textFont.className)}>
        Collaborate , Manage Projects and reach new Productivity Peaks , From
        High rises to Home Office , the way your team is unique accomplish it
        all with Taskify .
      </div>
      <Button size="lg" asChild className="mt-6">
        <Link href={"/sign-up"}>Get Tasify for Free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
