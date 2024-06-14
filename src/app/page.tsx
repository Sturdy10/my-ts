import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Home = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center ">
            <div className="w-[700px] h-[30%] bg-green-100 flex flex-col gap-4 p-4">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label htmlFor="name" className="mb-2"><h3>Name</h3></label>
                        <Input id="name" type="text" />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="surname" className="mb-2"><h3>Surname</h3></label>
                        <Input id="surname" type="text" />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label htmlFor="phone">
                            <h3>Phone</h3>
                        </label>
                        <Input id="phone" type="tel" className="p-4" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="flex justify-end mt-10">
                        <Button type="button" className=" p-4 rounded hover:bg-[#757575] font-bold">
                            Submit
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;







