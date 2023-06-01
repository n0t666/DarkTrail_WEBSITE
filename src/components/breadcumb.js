import { GrHomeRounded  } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  // Helper function to generate breadcrumb items
  const generateBreadcrumbItems = () => {
    const paths = location.pathname.split('/').filter((path) => path !== '');
    let currentPath = '';

    return paths.map((path, index) => {
      currentPath += `/${path}`;
      const isLast = index === paths.length - 1;
      let label = path; // Default label is the path itself

      // Custom labels for specific routes
      if (currentPath === '/about') {
        label = 'Sobre';
      } else if (currentPath === '/contact') {
        label = 'Contactar';
      } // Add more custom labels for other routes if needed

      return (
        <li key={currentPath} className="relative flex items-center ">
          <span
            className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
          ></span>
          {isLast ? (
            <span className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium">
              {label}
            </span>
          ) : (
            <Link
              to={currentPath}
              className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
            >
              <GrHomeRounded className="h-4 w-4" />
              <span className="ms-1.5 text-xs font-medium">{label}</span>
            </Link>
          )}
        </li>
      );
    });
  };

  return (
    <div className="w-full mt-3 hidden lg:block">
    <div className="flex flex-col max-w-screen-xl px-4 mx-auto xl:items-center xl:justify-between xl:flex-row xl:px-6 lg:px-8">
    <nav aria-label="Breadcrumb" className="flex">
      <ol
        role="list"
        className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-700"
      >
        <li className="flex items-center">
          <Link
            to="/"
            className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
          >
            <GrHomeRounded className="h-4 w-4" />
            <span className="ms-1.5 text-xs font-medium">Página inicial</span>
          </Link>
        </li>
        {generateBreadcrumbItems()}
      </ol>
    </nav>
    </div>
    </div>
  );
};

export default Breadcrumb;
