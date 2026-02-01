

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import Link from "next/link";



const Page = async () => {
  await requireAuth();

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      protected page
    </div>
  );
};

export default Page;
