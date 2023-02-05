import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    // <Form />
    <div className="flex flex-col gap-4 h-screen justify-center items-center">
      <button
        className="px-10 py-2 font-medium text-white border bg-[#7445F8] border-[#7445F8] rounded-md shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)] w-56"
        onClick={() => router.push("/dashboard")}
      >
        Go to Dashboard
      </button>
      <button
        className="px-10 py-2 font-medium text-white border bg-[#7445F8] border-[#7445F8] rounded-md shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)] w-56"
        onClick={() => router.push("/form")}
      >
        Go to Form
      </button>
    </div>
  );
}
