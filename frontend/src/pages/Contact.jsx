import Body from "@components/layouts/Body";
import { useState } from "react";

export default function Form() {
  const [submit, setSubmit] = useState(false);
  function onSubmitForm() {
    setSubmit(!submit);
  }
  return (
    <Body>
      {submit ? (
        <p className="text-center">👍Merci pour vos retours !👋</p>
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-title_font mb-8">Contact</h2>
            <h3 className="text-lg font-standard_font tracking-tight ">
              Une question, un bug, une suggestion, n'hésitez pas à nous écrire
              pour nous en faire part
            </h3>
          </div>
          <div className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 xl:pl-12 w-full">
            <form
              action="#"
              method="POST"
              className="flex flex-col items-center gap-y-6 w-full"
            >
              <div className="flex flex-row items-center w-3/5 lg:w-2/5">
                <label htmlFor="objet" className="w-full">
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
              <div className="flex flex-row items-center w-3/5 lg:w-2/5 ">
                <label htmlFor="name" className="w-full">
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
              <div className="flex flex-row items-center w-3/5 lg:w-2/5 ">
                <label htmlFor="prenom" className="w-full">
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
              <div className="flex flex-row items-center w-3/5 lg:w-2/5">
                <label htmlFor="email" className="w-full">
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
              <div className="flex flex-row items-center w-3/5 lg:w-2/5">
                <label htmlFor="message" className="w-full">
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
              <div className="mt-12 flex item-center justify-center w-full">
                <button
                  type="submit"
                  className="items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md  bg-first_color hover:bg-second_color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => onSubmitForm()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Body>
  );
}
