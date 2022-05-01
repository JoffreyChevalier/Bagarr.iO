export default function Form() {
  return (
    <div className="flex-col items-center justify-center">
      <div className="mt-4 h-fit px-12 max-w-sm sm:max-w-lg lg:max-w-2xl border border-black backdrop-blur-md text-black shadow-xl rounded-xl">
        <div className="flex-col justify-center pb-12">
          <img
            className="w-24 my-12"
            src="./src/assets/logo_and_text.png"
            alt="logo d'un point"
          />

          <div className="max-w-7xl mx-auto justify-center">
            <div>
              <h2 className="text-4xl  font-title_font mb-8">Contact</h2>
              <h3 className="text-lg font-standard_font tracking-tight ">
                Une question, un bug, une suggestion, n'hésitez pas à nous
                écrire pour nous en faire part
              </h3>
            </div>
            <div className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 xl:pl-12 w-full">
              <form
                action="#"
                method="POST"
                className="flex flex-col gap-y-6 w-full"
              >
                <div className="flex flex-row items-center ">
                  <label htmlFor className=" pr-8">
                    Objet
                    <input
                      type="text"
                      name="Objet"
                      id="objet"
                      autoComplete="objet"
                      className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent  focus:ring-0 focus:ring-offset-0"
                    />
                  </label>
                </div>
                <div className="flex flex-row items-center ">
                  <label htmlFor className=" pr-8">
                    Nom
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="Name"
                      className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent  focus:ring-0 focus:ring-offset-0"
                    />
                  </label>
                </div>
                <div className="flex flex-row items-center ">
                  <label htmlFor="prenom" className=" pr-8">
                    Prénom
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      autoComplete="Prénom"
                      className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent  focus:ring-0 focus:ring-offset-0"
                    />
                  </label>
                </div>
                <div className="flex flex-row items-center ">
                  <label htmlFor="email" className=" pr-8">
                    Email
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent  focus:ring-0 focus:ring-offset-0"
                    />
                  </label>
                </div>
                <div className="flex flex-row items-center ">
                  <label htmlFor="message" className=" pr-8">
                    Message
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full border-solid border-b-2 border-[#9A373F] py-3 px-4 placeholder--500 bg-transparent  focus:ring-0 focus:ring-offset-0"
                      defaultValue=""
                    />
                  </label>
                </div>
                <div className="flex item-center justify-center w-full">
                  <button
                    type="submit"
                    className="items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md  bg-first_color hover:bg-second_color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
