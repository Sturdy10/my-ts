import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "@/../public/images/logo.png"




const Accent = () => {
    return (
        <div className="w-screen h-screen flex">
            {/* <div className="w-[70%] h-full bg-custom-gradient "> */}

            <div
                className="w-[70%] h-full relative"
                style={{
                    backgroundImage: 'url(/images/background01.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                }}
            >
                <Image src={Logo} alt="NOT LOGO" width={60} className=" ml-5 mt-5 " />

                {/* <div className="w-[70%] h-full relative overflow-hidden">
              <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/video/background.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
            </div>

            <div className=" w-[35%] h-full bg-white  absolute right-0 shadow-2xl flex justify-center py-20 ">
                <Tabs defaultValue="signin" className="w-[400px] flex flex-col gap-32">
                    <div className="  ">
                        <TabsList className="bg-[#dbd7db] " >
                            <TabsTrigger value="signin">Sign In</TabsTrigger>
                            <TabsTrigger value="signup">Sign Up</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="signin">
                        <div className="flex flex-col justify-center space-y-8 ">

                            <div className="space-y-3">
                                <Label htmlFor="email"><h3>Email</h3></Label>
                                <Input type="email" />
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="Password"><h3>Password</h3></Label>
                                <Input type="Password" />
                            </div>
                            <Button type="button" className=" p-2 rounded hover:bg-[#757575] font-bold"> Sign In </Button >
                        </div>
                    </TabsContent>
                    <TabsContent value="signup">
                        <div className="flex flex-col justify-center space-y-8 ">
                            <div className="space-y-3">
                                <Label htmlFor="email"><h3>Email</h3></Label>
                                <Input type="email" />
                            </div>
                            <Button type="button" className=" p-2 rounded hover:bg-[#757575] font-bold">Sin Up</Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
export default Accent;