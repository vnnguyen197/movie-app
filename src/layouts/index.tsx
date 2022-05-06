import BasicLayout from './BasicLayout';
import BlankLayout from './BlankLayout';

export enum LayoutType {
  BLANK = "blank",
  BASIC = "basic",
}

const Layout = (type: LayoutType) => {
  switch (type) {
    case LayoutType.BLANK:
      return BlankLayout;
    case LayoutType.BASIC:
      return BasicLayout;
    default:
      return BlankLayout;
  }
};

export default Layout;