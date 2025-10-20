interface ActualNumberVariable_t {
  type: "number";
  value: number | null;
}
interface ActualBooleanVariable_t {
  type: "boolean";
  value: boolean | null;
}

export type ActualVariable_t = ActualNumberVariable_t | ActualBooleanVariable_t;
