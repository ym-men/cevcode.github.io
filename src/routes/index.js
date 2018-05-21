import About from '../modules/Main/Home';
import Contacts from '../modules/Main/Contacts';
import Projects from '../modules/Main/Projects';
import App from '../App/App';
import { addDefault } from '../helpers/index';

const generateRoutes = function(options = {}) {
  addDefault(options, 'locale', '/:locale');

  const { locale } = options;
  return [
    {
      component: App,
      path: locale + '/',
      routes: [
        {
          exact: true,
          component: Contacts,
          path: locale + '/home-finance-level-1'
        },
        {
          exact: true,
          component: Projects,
          path: locale + '/projects'
        }
      ]
    }
  ];
};

const defaultLocale = generateRoutes({ locale: '' });
export default { defaultLocale };
