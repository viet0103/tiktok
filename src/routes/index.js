import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { DefaultLayout } from '~/components/Layout'
import { HeaderOnlyLayout } from '~/components/Layout';
import RoutesConfig from '~/config/routes';

const publicRoutes = [
    { path: RoutesConfig.home, component: Home, layout: DefaultLayout },
    { path:  RoutesConfig.following, component: Following, layout: DefaultLayout },
    { path:  RoutesConfig.upload, component: Upload, layout: HeaderOnlyLayout },
    { path:  RoutesConfig.profile, component: Profile, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
