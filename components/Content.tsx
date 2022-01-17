import React from 'react';

const Content = () => {
  return (
    <div className="relative pt-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              EngineerDAO
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            EngineerDAO is a product-focused DAO obsessed with manifesting the
            "Internet of Jobs". Our product is an anonymous, permissionless
            marketplace for software engineers to match with paid projects,
            tasks, and jobs.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2>Our Vision</h2>
          <p>
            Our vision is two-fold, solving for both supply and demand.
            Engineers should imagine the platform as an API that returns payment
            for correct inputs (code) over a given period of time. We envision a
            diverse marketplace, with jobs of all shapes and sizes. Our goal is
            to maximally reduce friction in your quest to trade time for money -
            be it a 30 minute lunch break, 2 hours after work, or a full-time
            endeavor.
          </p>
          <p>
            Our mission is to reduce risk and align incentives. Suppliers (those
            with work to be done) will recognize a new paradigm on the platform.
            When an engineer accepts your project, they put “skin in the game”
            via a buy-in. Together, the supplier's bounty and the engineer's
            buy-in are locked in a smart contract. If the engineer fails to
            deliver, the buy-in is forfeited to the supplier. Although not the
            ideal scenario, the supplier is at least compensated for their time.
            This is how we align incentives and level the playing field.
          </p>
          <p>
            In a successful scenario, the bounty + buy-in are transferred to the
            engineer upon contract completion. Completion is initiated either by
            the supplier or expiration of the contract timeframe without
            supplier objection.
          </p>
          <img
            src="/contract.png"
            alt="EngineerDAO Contract"
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
