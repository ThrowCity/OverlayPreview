import GekkoAvatar from './gekko/avatar.png';
import GekkoC from './gekko/c.png';
import GekkoQ from './gekko/q.png';
import GekkoE from './gekko/e.png';
import GekkoX from './gekko/x.png';
import BreachAvatar from './breach/avatar.png';
import BreachC from './breach/c.png';
import BreachQ from './breach/q.png';
import BreachE from './breach/e.png';
import BreachX from './breach/x.png';

export const characterImages = {
  gekko: {
    c: GekkoC,
    cc: 1,
    q: GekkoQ,
    qc: 1,
    e: GekkoE,
    ec: 1,
    x: GekkoX,
    avatar: GekkoAvatar,
    ult: 7,
  },
  breach: {
    c: BreachC,
    cc: 1,
    q: BreachQ,
    qc: 2,
    e: BreachE,
    ec: 1,
    x: BreachX,
    avatar: BreachAvatar,
    ult: 9,
  },
};

import Vandal from './weapons/vandal.png';

export const weaponImages = {
  vandal: Vandal,
};

import None from './none.png';
import Light from './light.png';
import Heavy from './heavy.png';

export const shieldImages = {
  none: None,
  light: Light,
  heavy: Heavy,
};

import Ult from './ult.png';

export const ultOrbImage = Ult;

import Count from './count.png';

export const abilityImage = Count;

import Credits from './credits.png';

export const creditsImage = Credits;
