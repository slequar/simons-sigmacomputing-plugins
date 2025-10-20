interface ActualNumberVariable_t {
    type: 'number';
    value: number;
}
interface ActualBooleanVariable_t {
    type: 'boolean';
    value: boolean;
}

export type ActualVariable_t = ActualNumberVariable_t | ActualBooleanVariable_t;
