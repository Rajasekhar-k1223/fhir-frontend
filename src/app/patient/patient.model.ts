export interface HumanName {
    family?: string;
    given?: string[];
    prefix?: string[];
    suffix?: string[];
  }
  export interface Patient {
    name: HumanName[];
  }
  