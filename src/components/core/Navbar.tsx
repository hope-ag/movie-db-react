// {
//   name: string;
//   description: string;
//   href: string;
//   icon: IconType;
// }
import {
  HiAnnotation, HiGlobeAlt, HiArrowNarrowDown, HiOutlineMap
} from 'react-icons/hi'
import DropdownMenu from '../shared/DropdownMenu';

const options = [
  {
    name: 'Test1',
    description: 'Description1',
    href: '#',
    icon: HiAnnotation
  },
  {
    name: 'Test2',
    description: 'Description3',
    href: '#',
    icon: HiGlobeAlt
  },
  {
    name: 'Test3',
    description: 'Description4',
    href: '#',
    icon: HiArrowNarrowDown
  },
  {
    name: 'Test4',
    description: 'Description5',
    href: '#',
    icon: HiAnnotation
  },
  {
    name: 'Test5',
    description: 'Description2',
    href: '#',
    icon: HiOutlineMap
  },
]

function Navbar() {
  return (
    <nav>
      <div className="container flex items-center justify-between mb-8">
        <div className="logo">Mov</div>
        <ul className="flex gap-6">
          <li><button className="py-4" type="button">Home</button></li>
          <li><button className="py-4" type="button">Movies</button></li>
          <li><button className="py-4" type="button">TV Shows</button></li>
          <li><button className="py-4" type="button">People</button></li>
          <li className="py-4"><DropdownMenu options={options} /></li>
        </ul>
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
