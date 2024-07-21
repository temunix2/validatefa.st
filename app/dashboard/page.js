import Header from "@/components/Header";
import ButtonAccount from "@/components/ButtonAccount";
import ButtonCheckout from "@/components/ButtonCheckout";
import ButtonGradient from "@/components/ButtonGradient";
import config from "@/config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Link from "next/link";

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
          <p>Welcome {user.name} 👋</p>
          <p>Your email is {user.email}</p>

          <div className="my-8">
            <Link href="/persona-chat" passHref>
              <ButtonGradient title="Go to Persona Chat" />
            </Link>
          </div>

      </section>
    </main>
    </>
  );
}
