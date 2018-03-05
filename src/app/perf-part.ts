export class PerfPart {
  vendor: Vendor;
  perfparttype: PartType;
  tier: number;
  imageuri: string;
  maxspeed: number;
  accel: number;
  steering: number;
  breaking: number;
  turbostrength: number;
  grip: number;
  grav: number;
  perfpartrarity: number;
}

type PartType = 'engine' | 'transmission' | 'tires';
type Vendor = 'Sebb. Co.' | 'Poziofon Technologies' | 'byZio Industries' | 'Botaker Systems' | 'KemotiumOre' | 'Kamyl&Bugz';
