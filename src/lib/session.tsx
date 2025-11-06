import { getServerSession } from "next-auth";
import { authOptions } from "./auth";


export async function requireUserId(){
    const session = await getServerSession(authOptions);

    const id = (session as any)?.user?.id as string | undefined;
    if (!id) throw new Error("Unauthorized");
    return id;
}