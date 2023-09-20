"use client";

import { Button, Icon, Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import { signIn } from "next-auth/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    if (!email || !password) {
      setError(true);
      return;
    }
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: true,
      callbackUrl: "/",
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
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          className="bg-gradient-to-r from-fuchsia-950 to-slate-900 w-96 fixed right-52 top-72"
        />
        {error ? <Alert severity="error">Email is required </Alert> : null}
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          color="secondary"
          sx={{ input: { color: "white" } }}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          className="bg-gradient-to-r from-fuchsia-950 to-slate-900 w-96 fixed right-52 top-96 "
        />
        {error ? <Alert severity="error">Password is required </Alert> : null}

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
