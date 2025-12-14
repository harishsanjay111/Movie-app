"use client"
import { redirect } from "next/navigation";

export default function Home() {

redirect("/movie");

  return (
    <div className="text-xl font-bold justify-center items-center flex min-h-screen">
      Loading...
    </div>
  );
}
