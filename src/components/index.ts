export interface SatDex {
  name?:         string;
  number?:       string;
  officialName?: string;
  COSPAR?:       string;
  orbit?:        Orbit;
  launch?:       Launch;
  affiliation?:  Affiliation;
  info?:         Info;
  intdes?:       string;
}

export interface Affiliation {
  countryRegistry?:   string;
  countryOperator?:   string;
  operator?:          string;
  users?:             string;
  contractor?:        string;
  countryContractor?: string;
}

export interface Info {
  purpose?:        string;
  purposeDetails?: null;
  comments?:       string;
  links?:          string[];
  type?:           string;
  size?:           string;
}

export interface Launch {
  massLaunch?:    null;
  massDry?:       null;
  launchSite?:    string;
  launchVehicle?: string;
  launchDate?:    string;
  lifetime?:      string;
  power?:         null;
  decay?:         null;
}

export interface Orbit {
  orbitClass?: string;
  orbitType?:  string;
  elements?:   Elements;
}

export interface Elements {
  longitude?:    string;
  perigee?:      string;
  apogee?:       string;
  eccentricity?: string;
  inclination?:  string;
  period?:       string;
}
