import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, {JSON.stringify(session.user)}</p>
        </div>
    );
}
