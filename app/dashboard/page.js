import Header from "@/components/Header";
import ButtonAccount from "@/components/ButtonAccount";
import ButtonGradient from "@/components/ButtonGradient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Link from "next/link";
import config from "@/config";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await connectMongo();
  const session = await getServerSession(authOptions);
  const user = await User.findById(session.user.id);

  return (
    <>
      <Header />
      <main className="min-h-screen p-8 pb-24">
        <section className="max-w-xl mx-auto space-y-8">
          <ButtonAccount />
          <h1 className="text-3xl md:text-4xl font-extrabold">
            User Dashboard
          </h1>
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div>
              <p className="text-xl font-semibold">Welcome, {user.name} 👋</p>
              <p className="mt-2">Thank you for joining us! We encourage you to start a chat with one of our personas and explore the experience.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
              <div className="space-y-4">
                <Link href="/persona-chat" passHref>
                  <ButtonGradient title="Start a Persona Chat" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}