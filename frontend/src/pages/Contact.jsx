export default function Form() {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h2 className="text-4xl text-white font-semibold">Contact</h2>
        <h3 className="text-lg font-extrabold tracking-tight text-white">
          Une question, un bug, une suggestion, n'hésitez pas à nous écrire pour
          nous en faire part
        </h3>
      </div>
      <div className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 xl:pl-12 w-full">
        <form action="#" method="POST" className="flex flex-col gap-y-6 w-full">
          <div className="flex flex-row items-center ">
            <label htmlFor className="text-white pr-8">
              Objet
              <input
                type="text"
                name="Objet"
                id="objet"
                autoComplete="objet"
                className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent text-white focus:ring-0 focus:ring-offset-0"
              />
            </label>
          </div>
          <div className="flex flex-row items-center ">
            <label htmlFor className="text-white pr-8">
              Nom
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="Name"
                className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent text-white focus:ring-0 focus:ring-offset-0"
              />
            </label>
          </div>
          <div className="flex flex-row items-center ">
            <label htmlFor="prenom" className="text-white pr-8">
              Prénom
              <input
                type="text"
                name="prenom"
                id="prenom"
                autoComplete="Prénom"
                className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent text-white focus:ring-0 focus:ring-offset-0"
              />
            </label>
          </div>
          <div className="flex flex-row items-center ">
            <label htmlFor="email" className="text-white pr-8">
              Email
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent text-white focus:ring-0 focus:ring-offset-0"
              />
            </label>
          </div>
          <div className="flex flex-row items-center ">
            <label htmlFor="message" className="text-white pr-8">
              Message
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent text-white focus:ring-0 focus:ring-offset-0"
                defaultValue=""
              />
            </label>
          </div>
          <div className="flex item-center justify-center w-full">
            <button
              type="submit"
              className="items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#9A373F] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
