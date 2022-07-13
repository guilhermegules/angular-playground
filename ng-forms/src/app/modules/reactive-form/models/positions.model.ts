export interface Position {
  name: string;
  level: PositionLevelEnum;
  description: string;
}

export enum PositionLevelEnum {
  JUNIOR = 'JUNIOR',
  MID_LEVEL = 'MID_LEVEL',
  SENIOR = 'SENIOR',
}
