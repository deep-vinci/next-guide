import { prisma } from "@/lib/prisma";

export default async function Home() {
    const users = await prisma.user.findMany();
    console.log(await users);

    return (
        <div className="w-[100vw] flex justify-center items-center flex-col gap-5">
            {users.map((user) => (
                <div
                    className="bg-violet-500 w-100 p-8 rounded-2xl"
                    key={user.email}
                >
                    {user.name}
                </div>
            ))}
        </div>
    );
}
