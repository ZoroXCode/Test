import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  console.log(process.env.KINDE_CLIENT_ID); // Should not be undefined
  console.log(process.env.DATABASE_URL); // Should not be undefined
  return (
    <>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
      <LogoutLink>Log out</LogoutLink>
    </>
  );
}
