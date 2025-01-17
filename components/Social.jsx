import Link from 'next/link';

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/kherincalderon' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/kherincalderon/' },
  { icon: <FaTwitter />, path: 'https://x.com/kherincalderon' },
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
