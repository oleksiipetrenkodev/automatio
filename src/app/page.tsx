import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

const Page = async () => {
  // not scalable, just for demo purposes
  const user = await prisma.user.findMany();
  console.log("User from DB:", user);
  
  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <Button>Click Me</Button>
    </div>
  );
};

export default Page;