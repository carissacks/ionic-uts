type BaseItem = {
  id: string;
  brand: string;
  model: string;
  images: Array<string>;
  stock: number;
  price: number;
  type: 'CPU' | 'RAM' | 'MOTHERBOARD' | 'GPU';
};

type Cpu = BaseItem & {
  type: 'CPU';
  baseClock: number;
  boostClock: number;
  core: number;
  thread: number;
};

type Ram = BaseItem & {
  type: 'RAM';
  speed: number;
  size: number;
};

type MotherBoard = BaseItem & {
  type: 'MOTHERBOARD';
  chipset: string;
  processor: Array<string>;
};

type Gpu = BaseItem & { type: 'GPU' };

export type Item = Cpu | Gpu | Ram | MotherBoard;
