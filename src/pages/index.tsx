import Link from 'next/link';

function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold leading-normal">
            Numerical Methods
          </h1>
          <h2 className="text-xl font-bold leading-normal">
            All Programs available
          </h2>
          <Link
            href="/bisection-method"
            className="cursor-pointer block w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            See
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
