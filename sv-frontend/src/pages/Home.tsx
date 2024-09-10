import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="mx-5 px-5 py-5">
      <section className="mt-2 md:text-center">
        <h1 className="text-2xl font-semibold">
          Investing made for Muslims - by Muslims
        </h1>
        <p className="text-md mt-5 ">
          Navigating financial freedom in the modern world can be challenging
          for Muslims, let us help you achieve your financial goals without
          scarificing your deen.
        </p>
      </section>

      <section className="mt-5 flex gap-x-5 md:items-center md:justify-center">
        <button className="bg-green-700 hover:bg-green-800 px-5 text-white py-2">
          Open an account
        </button>
        <button className="bg-[#dec535] hover:bg-[#c5ae2f] px-5  py-2">
          Wealth Management
        </button>
      </section>

      <section className="mt-5 md:text-center">
        <h2 className="text-xl">
          Unsure about the Islamic permissibility of investing?
        </h2>
        <p className="mt-2 font-semibold">
          Check out our{" "}
          <span className="underline cursor font-extrabold text-[#bfa92d] hover:text-[#a18f26] ">
            <Link to="/">story</Link>
          </span>
        </p>
      </section>

      <section className="mt-10 flex flex-col md:flex-wrap items-center gap-y-5">
        <div className="flex flex-col gap-y-3 items-center text-center w-4/5 md:w-1/3 border p-5 border-[#dec535]">
          <h3 className="text-xl font-semibold">Brokerage</h3>
          <p className="text-slate-600">
            Trade smarter with $0 commissions1 for online US stock, ETF, and
            option trades; fractional share trading for a slice of your favorite
            companies; and powerful research tools.
          </p>
          <button className="bg-green-700 hover:bg-green-800 px-5 text-white py-2">
            Open an account
          </button>
        </div>

        <div className="flex flex-col gap-y-3 items-center text-center w-4/5  md:w-1/3 border p-5 border-green-700">
          <h3 className="text-xl font-semibold">Cash management</h3>
          <p className="text-slate-600">
            Save, spend, and invest with our smart alternative to a bank
            account, with no account fees or minimums, ATM fees reimbursed,4 and
            FDIC coverage up to $5 million on cash balances.5
          </p>
          <button className="bg-green-700 hover:bg-green-800 px-5 text-white py-2">
            Open an account
          </button>
        </div>

        <div className="flex flex-col gap-y-3 items-center text-center w-4/5  md:w-1/3 border p-5 border-[#dec535]">
          <h3 className="text-xl font-semibold">Retirement & IRAs</h3>
          <p className="text-slate-600">
            Save for retirement with access to a broad range of investments,
            exceptional service, planning tools, and free investment guidance.
          </p>
          <button className="bg-green-700 hover:bg-green-800 px-5 text-white py-2">
            Open an account
          </button>
        </div>
      </section>
      <section className="mt-10  gap-y-4 mb-5">
        <h2 className="text-xl text-center font-semibold">Client Stories</h2>
        <div className="flex flex-col md:flex-row items-center mt-5">
          <div className="w-2/3 text-center">
            <h4 className="text-lg">
              <em>"In only a few months, my savings tripled!"</em>
            </h4>
            <p className="mt-1 text-slate-600 font-semibold text-md">
              - Hafsa Ahmad, New Jersey
            </p>
          </div>

          <div className="w-2/3 text-center">
            <h4 className="text-lg">
              <em>
                "I never imagined I could achieve this level of wealth through a
                halal means."
              </em>
            </h4>
            <p className="mt-1 text-slate-600 font-semibold text-md">
              - Mohammed Noor, Arizona
            </p>
          </div>

          <div className="w-2/3 text-center">
            <h4 className="text-lg">
              <em>
                "I'm proud of what Allah has blessed me with, Alhamduillah."
              </em>
            </h4>
            <p className="mt-1 text-slate-600 font-semibold text-md">
              - Idhle Barnaamij, Oregon
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
