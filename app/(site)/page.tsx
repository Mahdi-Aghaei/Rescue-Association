import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex min-h-full justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* place logo here */}
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tigt text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
