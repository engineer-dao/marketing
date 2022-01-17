import React from 'react';
import {
  AcademicCapIcon,
  AtSymbolIcon,
  ChatIcon,
  CodeIcon,
  CogIcon,
  DocumentTextIcon,
} from '@heroicons/react/outline';

const Resources = () => {
  const resources = [
    {
      name: 'Documentation',
      link: 'https://engineerdao.notion.site/EngineerDAO-3725e0e5db6c496f9f04615bd604ac58',
      icon: DocumentTextIcon,
    },
    {
      name: 'Philosophy',
      link: 'https://engineerdao.notion.site/Philosophy-bbdcbd3ce17e40aea62fa61f2441572f',
      icon: AcademicCapIcon,
    },
    {
      name: 'How It Works',
      link: 'https://engineerdao.notion.site/How-It-Works-6ce13129b9244abf981b41666b90797e',
      icon: CogIcon,
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/2Tgdjjech7',
      icon: ChatIcon,
    },
    { name: 'Github', link: 'https://github.com/engineer-dao', icon: CodeIcon },
    {
      name: 'Contact Us',
      link: 'mailto:support@engineerdao.com',
      icon: AtSymbolIcon,
    },
  ];

  return (
    <div className="relative bg-white py-16 sm:py-24 sm:pt-8">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Resources
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Join us in building the future of work
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <a
                href={resource.link}
                target="_blank"
                rel="noreferrer"
                key={resource.name}
              >
                <div className="pt-6 hover:scale-110 transition-transform">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                          <resource.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {resource.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
