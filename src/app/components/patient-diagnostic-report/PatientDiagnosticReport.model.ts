export interface PatientDiagnosticReport {
  id: { value: string };
  meta: {
    versionId: { value: string };
    lastUpdated: { value: string };
    source: { value: string };
  };
  subject: {
    reference: { value: string };
  };
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
