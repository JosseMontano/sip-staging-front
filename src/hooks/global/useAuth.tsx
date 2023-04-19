import { UseUser } from "@/store/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UseAuth = () => {
  const router = useRouter();
  const { user } = UseUser();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const verifyAuth = () => {
      if (user.id === 0) {
        router.push("/auth");
      } else {
        setAuth(true);
      }
    };

    verifyAuth();
  }, [user, router]);

  return {
    auth,
  };
};

export default UseAuth;
