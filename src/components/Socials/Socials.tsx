import GithubIcon from "../../assets/icons/github.svg?react";
import InstagramIcon from "../../assets/icons/instagram.svg?react";
import LinkedIn from "../../assets/icons/linkedin.svg?react";
import NpmIcon from "../../assets/icons/npm.svg?react";
import MessengerIcon from "../../assets/icons/messenger.svg?react";

enum SocialName {
  github = "github",
  instagram = "instagram",
  linkedin = "linkedin",
  npm = "npm",
  messenger = "messenger",
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
};

const Socials = ({ socials }: OwnProps): JSX.Element => (
  <ul className="flex direction-row gap-3 md:gap-5">
    {socials?.map(({ name, url, text }) => {
      const SocialIcon = SocialIcons[name];
      return (
        <li key={name}>
          <a href={url} aria-label={text} target="_blank">
            <SocialIcon className="w-5 md:w-7 text-grey" />
          </a>
        </li>
      );
    })}
  </ul>
);

export default Socials;
