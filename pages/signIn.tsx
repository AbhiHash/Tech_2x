"use client";

// import { Dashboard } from "@/dashboard";
import { Button, Icon } from "@mui/material";  
import TextField from "@mui/material/TextField";
import { signIn } from "next-auth/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

export default function SignIn() {
  const data = {
    name: "abhitripathi9800q@gmail.com",
    password: "bdjewfbjewrfreg",
  };

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: data.name,
      password: data.password,
      redirect: true,
      callbackUrl: "/home",
    });
  };

  return (
    <div className="bg-gradient-to-r from-c-purple to-gray-950 h-[100vh] text-white">
      <h1 className=" text-purple-600/100 font-bold text-8xl flex align-middle py-12 px-4">
        tecH_2x
      </h1>
      <div className="flex flex-col">
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          color="secondary"
          sx={{ input: { color: "white" } }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          className="bg-gradient-to-r from-fuchsia-950 to-slate-900 w-96 fixed right-52 top-72"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          color="secondary"
          sx={{ input: { color: "white" } }}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          className="bg-gradient-to-r from-fuchsia-950 to-slate-900 w-96 fixed right-52 top-96 "
        />
        <Button
          variant="contained"
          onClick={onSubmit}
          className="fixed right-[18vw] bottom-[45vh] bg-c-purple hover:outline-neutral-950"
        >
          Log In
        </Button>
        <FacebookOutlinedIcon className="fixed right-[25vw] bottom-[40vh]" />
      </div>
    </div>
  );
}
