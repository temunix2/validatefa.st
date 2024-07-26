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
  const user = session ? await User.findById(session.user.id) : null;

  const hasPaid = user && user.customerId;
  const buttonLink = hasPaid ? "/persona-chat" : "/#pricing";
  const buttonTitle = hasPaid ? "Go to your Writing Group AI" : "Upgrade to Premium";

  return (
    <>
      <Header />
      <main className="min-h-screen p-8 pb-24">
        <section className="max-w-xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              User Dashboard
            </h1>
            <ButtonAccount />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div>
              <p className="text-xl font-semibold">Welcome, {user?.name} 👋</p>
              <p className="mt-2">Thank you for joining us! We encourage you to explore the experience.</p>
            </div>
            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold mb-2">Account Management</h2>
              <p className="text-sm text-gray-600 mb-2">
                To manage your subscription and billing details, click the button in the top right next to User Dashboard.
              </p>
            </div>
            <div className="border-t pt-4">
              <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
              <div className="space-y-4">
                <Link href={buttonLink} passHref>
                  <ButtonGradient title={buttonTitle} />
                </Link>
                {!hasPaid && (
                  <>
                    <div >
                      <Link href="/persona-chat">
                        <button className="btn btn-primary normal-case px-8">
                          Try Free Writing Group AI
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
            {!hasPaid && (
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600">
                  Upgrade to premium to access all features, including unlimited use of the Writing Group AI.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}