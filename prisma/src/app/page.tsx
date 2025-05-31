import { prisma } from "@/lib/prisma";

export default async function Home() {
    const users = await prisma.user.findMany();
    console.log(await users);

    return <div>{JSON.stringify(users)}</div>;
}
