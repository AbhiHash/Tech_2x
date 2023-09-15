"use-client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignInPage() {
  const { data: session } = useSession();
  console.log(useSession(), " this is coming in session");


  return (
    <div className="bg-slate-950 text-white">
      {!session ? (
        <button onClick={() => signIn()}>Sign Up</button>
      ) : (
        <button onClick={() => signOut()}> Logout</button>
      )}
    </div>
  );
}


// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }