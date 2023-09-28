import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { CustomNavbar } from "../components/navBar";
import { MainContent } from "../components/main";
import { signOut } from "next-auth/react";
import SignIn from "./signIn";

export default function Ssr(session: any) {
  
  return (
    <>
      {session.email ? (
        <> 
          <MainContent />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/signIn",
        permanent: false,
      },
    };
  }
  if (session?.user?.email) {
    return {
      props: {
        email: session.user.email,
      },
    };
  }
}
