import { User } from './User';
import { Makis } from './User';
import { Company } from "./Company";
import { OrderEze } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const makis = new Makis({ lat: 40.271640, lng: 22.501698 });
const company = new Company();
const orderEze = new OrderEze({ lat: 40.640414, lng: 22.921824 });
const customMap = new CustomMap('map');

customMap.addMarker(makis);
customMap.addMarker(user);
customMap.addMarker(company);
customMap.addMarker(orderEze)
