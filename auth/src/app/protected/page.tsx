// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";

// export default async function ProtectedPage() {
//     const session = await getServerSession(authOptions);

//     if (!session) {
//         redirect("/login");
//     }

//     return (
//         <div>
//             <h1>Protected Page</h1>
//             <p>Welcome, {JSON.stringify(session.user)}</p>
//         </div>
//     );
// }

"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedPageClient() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            // Redirect to login if not logged in
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        return null; // or loading spinner while redirect happens
    }

    return (
        <div>
            <h1>Protected Page (Client)</h1>
            <p>Welcome, {session.user?.email}</p>
        </div>
    );
}
