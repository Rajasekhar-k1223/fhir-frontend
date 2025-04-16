export interface PatientCondition {
  resourceType: string;
  id: string;
  identifier?: {
    system: string;
    value: string;
  }[];
  clinicalStatus?: {
    coding?: {
      system?: string;
      code?: string;
      display?: string;
    }[] | null;
    text: string;
  };
  verificationStatus?: {
    coding?: {
      system?: string;
      code?: string;
      display?: string;
    }[] | null;
    text: string;
  };
  category?: {
    coding?: {
      system?: string;
      code?: string;
      display?: string;
    }[] | null;
    text: string;
  }[];
  severity?: {
    coding?: {
      system?: string;
      code?: string;
      display?: string;
    }[] | null;
    text: string;
  };
  code?: {
    coding?: {
      system?: string;
      code?: string;
      display?: string;
    }[] | null;
    text: string;
  };
  bodySite?: any;
  subject: {
    reference: string;
    display?: string | null;
  };
  encounter?: {
    reference: string;
    display?: string | null;
  };
  onsetDateTime?: string | null;
  onsetAge?: any;
  onsetPeriod?: any;
  onsetRange?: any;
  onsetString?: string | null;
  abatementDateTime?: string | null;
  abatementAge?: any;
  abatementPeriod?: any;
  abatementRange?: any;
  abatementString?: string | null;
  recordedDate?: string;
  participant?: any;
  stage?: any;
  evidence?: any;
  note?: any;
  lastUpdated?: string;
}
