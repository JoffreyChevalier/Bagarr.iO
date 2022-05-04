import { CheckIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Steps({ stepCount, currentStep }) {
  return (
    <nav aria-label="Progress">
      <ul className="flex items-center">
        {Array.from({ length: stepCount }, (_, i) => i + 1).map((step) => (
          <li
            key={step}
            className={classNames(
              step !== stepCount ? "pr-8 sm:pr-20" : "",
              "relative"
            )}
          >
            {step < currentStep ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-[#BA8208]" />
                </div>
                <div className="relative w-8 h-8 flex items-center justify-center bg-[#BA8208] rounded-full hover:bg-[#9A373F]">
                  <CheckIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : step === currentStep ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div
                  className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-[#BA8208] rounded-full"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 bg-[#BA8208] rounded-full"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full ">
                  <span
                    className="h-2.5 w-2.5 bg-transparent rounded-full "
                    aria-hidden="true"
                  />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
