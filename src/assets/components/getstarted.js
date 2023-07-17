export default function GetStrated() {
    return (
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/createsurvey"
          className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <a
          href="/previoussurvey"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          View Previous Surveys <span aria-hidden="true">→</span>
        </a>
      </div>
    );
}