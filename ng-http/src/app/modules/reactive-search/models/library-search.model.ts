export interface CdnLibrary {
  results: Array<CdnLibraryResult>;
  total: number;
  available: number;
}

export interface CdnLibraryResult {
  name: string;
  latest: string;
}
