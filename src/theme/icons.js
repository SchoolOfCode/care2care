import { IoLogIn, IoLogOut, IoSettings } from "react-icons/io5";
import { RiUserHeartFill } from "react-icons/ri";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import {
  BiMessageAltAdd,
  BiMessageAltCheck,
  BiDotsVertical,
} from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

const Icons = {
  Login: IoLogIn,
  Logout: IoLogOut,
  Search: FaSearch,
  Delete: TiDelete,
  //NavBar
  Menu: BiDotsVertical,
  Patients: RiUserHeartFill,
  AddRecord: BiMessageAltAdd,
  Profile: FaUserAlt,
  CheckRecords: BiMessageAltCheck,
  Settings: IoSettings,
};

export default Icons;
