type BaseItem = {
  id: string;
  brand: string;
  model: string;
  images: Array<string>;
  stock: number;
  price: number;
  type: 'CPU' | 'RAM' | 'MOTHERBOARD' | 'GPU';
};

export type Cpu = BaseItem & {
  type: 'CPU';
  baseClock: number;
  boostClock: number;
  core: number;
  thread: number;
};

export type Ram = BaseItem & {
  type: 'RAM';
  speed: number;
  size: number;
};

export type MotherBoard = BaseItem & {
  type: 'MOTHERBOARD';
  chipset: string;
  processor: Array<string>;
};

export type Gpu = BaseItem & { type: 'GPU' };

export type Item = Cpu | Gpu | Ram | MotherBoard;
