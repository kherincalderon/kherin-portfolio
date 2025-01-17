import Link from 'next/link';

import { BsTwitterX, BsLinkedin, BsGithub } from 'react-icons/bs';

const socials = [
  { icon: <BsGithub />, path: 'https://github.com/kherincalderon' },
  { icon: <BsLinkedin />, path: 'https://www.linkedin.com/in/kherincalderon/' },
  { icon: <BsTwitterX />, path: 'https://x.com/kherincalderon' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
