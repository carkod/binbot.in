import React from "react";
import { HeroIllustration } from "../components/hero-illustration";
import { SplitLayout } from "../components/split-layout";
import Landing from "../components/Landing";
import UserForm from "../components/UserForm";

export default function HomePage() {
  const [signupForm, setSignupForm] = React.useState(false);

  return (
    <div className={signupForm ? "" : "overflow-hidden"}>
      <SplitLayout
        left={<Landing setSignupForm={(value) => setSignupForm(value)} />}
        right={signupForm ? <UserForm /> : <HeroIllustration />}
      />
    </div>
  );
}
