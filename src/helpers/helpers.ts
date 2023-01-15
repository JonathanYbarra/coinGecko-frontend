export const calculatePercentage = (currentValue: number, previousValue: number) => {
    const value = ((previousValue - currentValue) / currentValue) * 100;
    return value.toFixed(2);
}

export const formatCurrency = (amount: number): string => {
    const minimumFractionDigits = amount.toString().split(".")[1]?.length || 2;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits,
    });

    return formatter.format(amount).replace(/\D00(?=\D*$)/, '');
}
