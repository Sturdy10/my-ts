import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Accent = () => {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-[70%] h-full bg-custom-gradient ">
                <h3>body1</h3>
            </div>
            <div className=" w-[35%] h-full bg-white rounded-l-[20px]  absolute right-0 shadow-2xl flex justify-center py-20 ">
                <Tabs defaultValue="signin" className="w-[400px] ">
                    <div className="flex justify-center py-5">
                        <TabsList >
                            <TabsTrigger value="signin">Sign In</TabsTrigger>
                            <TabsTrigger value="signup">Sign UP</TabsTrigger>
                        </TabsList>
                    </div>


                    <TabsContent value="signin">
                        <div className="flex flex-col justify-center space-y-8 ">
                            
                                <div className="space-y-3">
                                    <Label htmlFor="email"><h3>Email</h3></Label>
                                    <Input type="email"/>
                                </div>

                                 <div className="space-y-3">
                                    <Label  htmlFor="Password"><h3>Password</h3></Label>
                                    <Input type="Password"/>
                                 </div>
                         <Button><h1>Sin In</h1></Button>                
                        </div>
                    </TabsContent>

                    <TabsContent value="signup">
                    <div className="flex flex-col justify-center space-y-8 ">
                                <div className="space-y-3">
                                    <Label htmlFor="email"><h3>Email</h3></Label>
                                    <Input type="email" />
                                </div>
                                <div>
                                     <Button><h1>Sin Up</h1></Button>
                                </div>
                        </div>
                    </TabsContent>



                </Tabs>
            </div>
        </div>
    );
}
export default Accent;