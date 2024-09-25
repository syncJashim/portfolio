import React from "react";
import ExternalLink from "./icons/ExternalLink";
import GitHub from "./icons/GitHub";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  const { title, overview, stack, link, repo, isSiteLive } = project;

  return (
    <div className="flex flex-col w-full rounded-md bg-white dark:bg-dark/20 px-7 py-7 shadow-md shadow-light/10 dark:shadow-darker">
      <svg
        id="b4200d7e-7896-4022-b85b-f69170875645"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 mb-4  text-brand feather feather-folder"
        viewBox="0 0 24 24"
        role="img"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <title>Folder</title>
        <path
          width="200"
          height="200"
          d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
        ></path>
      </svg>
      <p className="inline-block px-0 pb-5 mb-4 text-xl font-bold border-b-4 flex-start border-brand dark:text-white text-dark">
        {title}
      </p>
      <p>{overview}</p>
      {/* Stack icons inner container */}
      <div className="flex mt-auto">
        <ul className="flex flex-wrap list-none list-inside">
          {stack.map(function (stackItem, i) {
            return (
              <li
                className="flex items-center mr-3 opacity-50 text-brand"
                key={i}
              >
                <span className="small-text">{stackItem}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Live and GitHub container */}
      <div className={`flex ${link || repo ? "mt-4" : ""}`}>
        {link ? (
          <Button
            link={link}
            text={null}
            square={true}
            icon={<ExternalLink square={true} />}
          />
        ) : null}

        {repo ? (
          <Button
            link={repo}
            text={null}
            square={true}
            icon={<GitHub square={true} />}
          />
        ) : null}

        {!isSiteLive ? <p className="my-4 small-text">Coming soon</p> : null}
      </div>
    </div>
  );
};

export default ProjectCard;
