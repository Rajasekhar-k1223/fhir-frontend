export interface ObservationModel {
  resourceType: string;
  id: string;
  identifier?: {
    system: string;
    value: string;
  }[];
  status: string;
  category?: {
    coding: {
      system: string;
      code: string;
      display: string;
    }[];
    text?: string | null;
  }[];
  code: {
    coding: {
      system: string;
      code: string;
      display: string;
    }[];
    text?: string;
  };
  subject: {
    reference: string;
  };
  encounter?: {
    reference: string;
    display?: string | null;
  };
  effectiveDateTime?: string;
  issued?: string;
  performer?: {
    reference: string;
    display?: string | null;
  }[];
  valueQuantity?: {
    value: number;
    unit: string;
    system: string;
    code: string;
  };
  interpretation?: {
    coding: {
      system: string;
      code: string;
      display: string;
    }[];
    text?: string | null;
  }[];
  referenceRange?: {
    low?: {
      value: number;
      unit: string;
      system?: string | null;
      code?: string | null;
    };
    high?: {
      value: number;
      unit: string;
      system?: string | null;
      code?: string | null;
    };
    type?: string | null;
    text?: string;
  }[];
  component?: {
    code: {
      coding: {
        system: string;
        code: string;
        display: string;
      }[];
      text?: string | null;
    };
    valueQuantity?: {
      value: number;
      unit: string;
      system: string;
      code: string;
    };
    interpretation?: any;
    referenceRange?: any;
  }[];
  lastUpdated?: string;
}
