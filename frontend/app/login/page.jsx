"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <form className="w-full max-w-sm flex flex-col items-center space-y-4 p-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
        <p className="text-center font-medium text-gray-500">
          Enter your credentials to jump right in.
        </p>
        <button className="w-full flex items-center justify-center  px-4 py-1 border border-gray-300 rounded-lg font-semibold text-gray-500 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200">
          <img
            src="/google-logo.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-center px-4 py-1 border border-gray-300 rounded-lg font-semibold text-gray-500 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200">
          <img
            src="/apple-logo.svg"
            alt="Apple Logo"
            className="w-5 h-5 mr-2"
          />
          Continue with Apple
        </button>
        <hr className="border-gray-300 w-full my-4" />

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </form>
    </div>
  );
}
