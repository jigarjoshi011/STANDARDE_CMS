"use client";
import Image from "next/image";
import errorIMg from "../../public/404.svg";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

export const NotFound = () => {
  const router = useRouter();
  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="h-[calc(100dvh_-_122px)] bg-siteBG2 w-full">
      <div className="flex items-center justify-center h-full">
        <div className="">
          <p className="hidden">404</p>
          <Image
            alt="404"
            className="max-w-full max-h-[32dvh] mx-auto"
            src={errorIMg}
          />
          <div className="max-w-[350px] mx-auto text-center mt-7 flex flex-col">
            <p className="text-3xl leading-5 font-medium text-grayText ">
              Well that’s unexpected.
            </p>
            <p className="text-sm leading-8">
              Looks like you’ve wandered off the beaten path. Our team is
              working to get you back on track and find what you’re looking for
            </p>
            <Button
              varient="primary"
              parentClass="mx-auto mt-6"
              className="!rounded-lg !px-15px !py-3"
              onClickHandler={navigateToHome}
            >
              Go Back Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
