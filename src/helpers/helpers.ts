export const calculatePercentage = (currentValue: number, previousValue: number) => {
    const value = ((previousValue - currentValue) / currentValue) * 100;
    return value.toFixed(2);
}
