import classnames from "classnames";
import GithubIcon from "../../assets/icons/github.svg?react";
import InstagramIcon from "../../assets/icons/instagram.svg?react";
import LinkedIn from "../../assets/icons/linkedin.svg?react";
import NpmIcon from "../../assets/icons/npm.svg?react";
import MessengerIcon from "../../assets/icons/messenger.svg?react";
import FileIcon from "../../assets/icons/file.svg?react";

enum SocialName {
  github = "github",
  instagram = "instagram",
  linkedin = "linkedin",
  npm = "npm",
  messenger = "messenger",
  file = "file",
}

interface Social {
  name: keyof typeof SocialName;
  url: string;
  text: string;
}

type OwnProps = {
  socials: Array<Social>;
  className?: string;
};

const SocialIcons: Record<keyof typeof SocialName, any> = {
  github: GithubIcon,
  instagram: InstagramIcon,
  linkedin: LinkedIn,
  npm: NpmIcon,
  messenger: MessengerIcon,
  file: FileIcon,
};

const Socials = ({ socials, className }: OwnProps): JSX.Element => (
  <ul className={classnames("flex direction-row gap-3 md:gap-5", className)}>
    {socials?.map(({ name, url, text }, socialIndex) => {
      const SocialIcon = SocialIcons[name];
      const delay = (socialIndex + 1) * 100 + 750;
      return (
        <li
          key={name}
          className={`animate-[move_500ms_ease-in-out_0ms_both]`}
          style={{ animationDelay: `${delay}ms` }}
        >
          <a href={url} aria-label={text} target="_blank">
            <SocialIcon className="w-5 h-5 md:w-7 md:h-7 text-grey" />
          </a>
        </li>
      );
    })}
  </ul>
);

export default Socials;
