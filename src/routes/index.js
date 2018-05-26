import App from '../App/App';
import { addDefault } from '../helpers/index';

const generateRoutes = function(options = {}) {
  addDefault(options, 'locale', '/:locale');

  const { locale } = options;
  return [
    {
      component: App,
      path: locale + '/'
    }
  ];
};

const defaultLocale = generateRoutes({ locale: '' });
export default { defaultLocale };
