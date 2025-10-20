interface ActualNumberVariable {
  type: "number";
  value: number | null;
}
interface ActualBooleanVariable {
  type: "boolean";
  value: boolean | null;
}

export type ActualVariable = ActualNumberVariable | ActualBooleanVariable;
