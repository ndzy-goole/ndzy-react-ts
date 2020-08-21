import hasAuth from './hasAuth';
import {
  setSession,
  setLocal,
  getLocal,
  getSession,
  clear,
  remove
} from './storage';
import { goPageG } from './goPage';
import { clearStore } from './clearStore';

export default {
  hasAuth,
  setSession,
  setLocal,
  getLocal,
  getSession,
  clear,
  remove,
  goPageG,
  clearStore
};
