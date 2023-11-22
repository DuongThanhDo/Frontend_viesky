import configs from '~/configs';

import { Bill } from '~/pages/Bill';
import { Calendar } from '~/pages/Calendar';
import { ChangePassword } from '~/pages/ChangePassword';
import { Decentralize } from '~/pages/Decentralize';
import { ExportedGoods } from '~/pages/ExportedGoods';
import { Home } from '~/pages/Home';
import { ImportedGoods } from '~/pages/ImportedGoods';
import { Inventory } from '~/pages/Inventory';
import { InventoryControl } from '~/pages/InventoryControl';
import { LogOut } from '~/pages/LogOut';
import { Login } from '~/pages/Login';
import { MenuPage } from '~/pages/MenuPage';
import { Revenue } from '~/pages/Revenue';
import { Sell } from '~/pages/Sell';
import { SellTableNumber } from '~/pages/Sell';
import { Staff } from '~/pages/Staff';
import { Supplier } from '~/pages/Supplier';
import { Warehouse } from '~/pages/Warehouse';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.sell, component: Sell },
    { path: configs.routes.sellTableNumber, component: SellTableNumber },
    { path: configs.routes.bill, component: Bill },
    { path: configs.routes.supplier, component: Supplier },
    { path: configs.routes.warehouse, component: Warehouse },
    { path: configs.routes.inventory, component: Inventory },
    { path: configs.routes.importedGoods, component: ImportedGoods },
    { path: configs.routes.exportedGoods, component: ExportedGoods },
    { path: configs.routes.inventoryControl, component: InventoryControl },
    { path: configs.routes.calendar, component: Calendar },
    { path: configs.routes.menu, component: MenuPage },
    { path: configs.routes.revenue, component: Revenue },
    { path: configs.routes.staff, component: Staff },
    { path: configs.routes.decentralize, component: Decentralize },
    { path: configs.routes.logOut, component: LogOut },
    { path: configs.routes.changePassword, component: ChangePassword },
    { path: configs.routes.login, component: Login, Layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
