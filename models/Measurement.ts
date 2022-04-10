export enum MeasurementUnit {
  Unit = 'Unit',
  Liter = 'Liter',
  Kilogram = 'Kilogram',
  Gram = 'Gram',
}

export interface Measurement {
  amount: number;
  unit: MeasurementUnit;
}