
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const UserCarousel = () => {
  return (
    <div>
      <div className="h-80">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
          showStatus={false}
          className="absolute top-0 left-0 w-full h-full"
        >
          <div className="h-screen bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1589362281138-e3f7ebe47f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)]">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Start using our app today.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Incididunt sint fugiat pariatur cupidatat consectetur sit
                  cillum anim id veniam aliqua proident excepteur commodo do ea.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/form"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="/latest"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-screen bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1589362281138-e3f7ebe47f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)]">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Start using our survey app today.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Incididunt sint fugiat pariatur cupidatat consectetur sit
                  cillum anim id veniam aliqua proident excepteur commodo do ea.
                </p>
              </div>
            </div>
          </div>

          <div className="h-screen bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1589362281138-e3f7ebe47f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)]">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Start using our survey app today.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Incididunt sint fugiat pariatur cupidatat consectetur sit
                  cillum anim id veniam aliqua proident excepteur commodo do ea.
                </p>
              </div>
            </div>
          </div>

          <div className="h-screen bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1589362281138-e3f7ebe47f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)]">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Boost your productivity.
                  <br />
                  Start using our survey app today.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                  Incididunt sint fugiat pariatur cupidatat consectetur sit
                  cillum anim id veniam aliqua proident excepteur commodo do ea.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default UserCarousel;
