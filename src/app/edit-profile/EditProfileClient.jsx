"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export default function EditProfileClient() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-orange-500" />
      </div>
    );
  }

  if (!session) {
    router.push("/signin");
    return null;
  }

  return <ProfileForm session={session} />;
}

function ProfileForm({ session }) {
  const router = useRouter();

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const image = String(formData.get("image") || "");
    const submitButton = e.currentTarget.querySelector('button[type="submit"]');

    try {
      if (submitButton) submitButton.disabled = true;

      const { error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        toast.error(`❌ ${error.message || "Failed to update profile!"}`);
        return;
      }

      toast.success("✅ Profile updated successfully!");
      router.push("/profile");
    } catch {
      toast.error("❌ An unexpected error occurred!");
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 p-6">
      <Surface variant="flat" className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-2 rounded-full bg-orange-100 p-3 text-orange-500">
            <FaUserAlt size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleUserUpdate}>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <Input id="name" name="name" type="text" placeholder="Enter your name" defaultValue={session?.user?.name || ""} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700" htmlFor="image">
              Image URL
            </label>
            <Input id="image" name="image" type="text" placeholder="Image URL" defaultValue={session?.user?.image || ""} />
          </div>

          <div className="mt-4 flex justify-end gap-3">
            <Button variant="bordered" type="button" onPress={() => router.push("/profile")}>
              Cancel
            </Button>
            <Button type="submit" className="bg-orange-500 font-semibold text-white transition hover:bg-orange-600">
              Save Changes
            </Button>
          </div>
        </form>
      </Surface>
    </div>
  );
}
