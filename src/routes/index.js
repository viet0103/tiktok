import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';
import { DefaultLayout } from '~/layouts'
import { HeaderOnlyLayout } from '~/layouts';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path:  config.routes.following, component: Following, layout: DefaultLayout },
    { path:  config.routes.upload, component: Upload, layout: HeaderOnlyLayout },
    { path:  config.routes.profile, component: Profile, layout: DefaultLayout },
    { path:  config.routes.live, component: Live, layout: DefaultLayout }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
