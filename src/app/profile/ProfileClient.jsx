"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function ProfileClient() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="mb-6 flex justify-center">
          <Image
            src={user?.image || "/default-avatar.png"}
            alt={user?.name || "User"}
            width={120}
            height={120}
            referrerPolicy="no-referrer"
            className="rounded-full border-4 border-orange-400 shadow-md"
          />
        </div>

        <h1 className="mb-2 text-2xl font-bold text-gray-800">{user?.name || "Unnamed user"}</h1>
        <p className="mb-6 text-gray-600">{user?.email || "No email found"}</p>

        <Link
          href="/edit-profile"
          className="inline-flex rounded-full bg-orange-500 px-5 py-2 font-semibold text-white transition hover:bg-orange-600"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}
