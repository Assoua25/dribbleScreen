

import { Award, FileText, HomeIcon, User } from 'lucide-react';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'HOME', href: '/dashboard', icon: HomeIcon },
  { name: 'BOARD', href: '/dashboard/invoices', icon: Award  },
  { name: 'AGENTS', href: '/dashboard/customers', icon: User  },
  { name: 'REPORTS', href: '/dashboard/customers', icon: FileText  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex flex-col items-center justify-center gap-2 p-3 text-sm font-medium  hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="text-center md:hidden">{link.name}</p> {/* Texte centré uniquement sur mobile */}
            <p className="hidden md:block  text-center">{link.name}</p> {/* Texte en dessous de l'icône sur desktop */}
          </Link>
        );
      })}
    </>
  );
}
