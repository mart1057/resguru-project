// Same bill formula as the backend (resguru/src/utils/bill-math.js). The
// backend recomputes subtotal/vat/total/remainPaid on every price change, so
// the web only uses this to show live numbers before saving; keep both files
// in step.
//
//   subtotal   = room + water + electric + communal + other
//   vat        = subtotal * vatRate / 100
//   total      = subtotal + vat + carriedDebt
//   remainPaid = debtMovedToNextBill ? 0 : max(0, total - paid)

export const PRICE_FIELDS = [
  "roomPrice",
  "waterPrice",
  "electricPrice",
  "communalPrice",
  "otherPrice",
];

export function toMoney(value) {
  const num = Number(value);
  return Number.isFinite(num) ? Math.round(num * 100) / 100 : 0;
}

// No vat_rate set = no VAT (same as the backend).
export function getVatRate(buildingAttributes) {
  const rate = Number(buildingAttributes && buildingAttributes.vat_rate);
  return Number.isFinite(rate) && rate > 0 ? rate : 0;
}

export function computeBillTotals(bill, vatRate) {
  const subtotal = toMoney(
    PRICE_FIELDS.reduce((sum, field) => sum + toMoney(bill[field]), 0)
  );
  const vat = toMoney((subtotal * (Number(vatRate) || 0)) / 100);
  const total = toMoney(subtotal + vat + toMoney(bill.carriedDebt));
  const remainPaid = bill.debtMovedToNextBill
    ? 0
    : toMoney(Math.max(0, total - toMoney(bill.paid)));
  return { subtotal, vat, total, remainPaid };
}

// What is still owed on a stored bill (0 when its debt moved to a newer bill).
export function billOwed(bill) {
  if (!bill || bill.debtMovedToNextBill) return 0;
  return toMoney(Math.max(0, toMoney(bill.total) - toMoney(bill.paid)));
}
