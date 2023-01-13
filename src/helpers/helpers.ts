export const calculatePercentage = (currentValue: number, previousValue: number) => {
    const value = ((previousValue - currentValue) / currentValue) * 100;
    return value.toFixed(2);
}

export const formatCurrency = (number: number): string => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}