import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import config from "@/config";
import PersonaChatClient from "./PersonaChatClient";

export default async function PersonaChatLayout({ children }) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        redirect(config.auth.loginUrl);
      }
  
    await connectMongo();
    const user = await User.findById(session.user.id);
    const hasPaid = !!(user && user.customerId);

      // Log server-side information
  console.log('Server-side user data:', {
    userId: user?._id,
    customerId: user?.customerId,
    hasPaid: hasPaid
  });

  const debugInfo = {
    userId: user?._id?.toString(),
    customerId: user?.customerId,
    hasPaid: hasPaid
  };
  
    return (
      <>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.initialHasPaid = ${JSON.stringify(hasPaid)};`,
          }}
        />
      </>
    );
  }