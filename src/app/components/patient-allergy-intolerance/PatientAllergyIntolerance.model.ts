export interface PatientAllergyIntolerance {
  id: { value: string };
  meta: {
    versionId: { value: string }; // Optional: Use "1" as placeholder if not present
    lastUpdated: { value: string };
    source: { value: string };
  };
  subject: {
    reference: { value: string };
  };
  note: {
    text: string;
    authorString?: string;
    time?: string;
  }[];
  participant: {
    function: {
      text: string;
    };
    actor: {
      reference: string;
    };
  }[];
  lastOccurrence: string | number | Date;
  reaction: {
    substance: {
      text: string;
    };
    manifestation: {
      text: string;
    }[];
    description: string;
    onset: string;
    severity: string;
    exposureRoute: {
      text: string;
    };
    note: {
      text: string;
    }[];
  }[];
  verificationStatus: {
    text: string;
  };
  expanded: any; // You can specify the type if you know the structure
  period?: {
    start: { value: string };
  };
  location?: {
    location: {
      reference: { value: string };
      display?: { value: string };
    };
    status: { value: string };
    period: {
      start: { value: string };
      end?: { value: string };
    };
  }[];
}
