export function getToday() {
  return new Date().toISOString().slice(0, 10);
}

export function getCurrentMonth() {
  return new Date().toISOString().slice(0, 7);
}

export function isSameDay(date: string, selectedDay: string) {
  return new Date(date).toDateString() === new Date(selectedDay).toDateString();
}

export function isSameMonth(date: string, selectedMonth: string) {
  const txDate = new Date(date);
  const monthDate = new Date(`${selectedMonth}-01`);

  return (
    txDate.getFullYear() === monthDate.getFullYear() &&
    txDate.getMonth() === monthDate.getMonth()
  );
}

export function isInsideMonthRange(
  date: string,
  startMonth: string,
  endMonth: string
) {
  const txDate = new Date(date);
  const start = new Date(`${startMonth}-01`);
  const end = new Date(`${endMonth}-01`);

  end.setMonth(end.getMonth() + 1);

  return txDate >= start && txDate < end;
}