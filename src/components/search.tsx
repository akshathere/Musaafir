import { Input } from "@/comps_shad/ui/input";

export default function Search(){
    return <div className="flex justify-center items-center">
    <div className="flex flex-col ">
        
        <div className="text-3xl py-2 font-bold text-bluee ">
        Be A Musaafir!
        </div>
        <div className="py-2">
           Find your next travel partner with us
        </div>
        <div className="py-2">
            <Input></Input>
        </div>
    </div>
    </div>
}