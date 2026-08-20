export type DonationType = "once" | "monthly";

export type Currency = "NGN" | "USD";

export const ENABLE_USD =
  process.env.NEXT_PUBLIC_ENABLE_USD === "1" ||
  process.env.NEXT_PUBLIC_ENABLE_USD === "true";

export type PaymentMethod =
  | "naira-card"
  | "usd-card"
  | "naira-transfer"
  | "usd-transfer";

export type DonationStep =
  | "give-money"
  | "monthly-email"
  | "monthly-success"
  | "payment-options"
  | "amount"
  | "payment-success";

export type PaymentMethodMeta = {
  method: PaymentMethod;
  currency: Currency;
  label: string;
  description: string;
  isCard: boolean;
  isTransfer: boolean;
};

export const PAYMENT_METHODS: Record<string, PaymentMethodMeta> = {
  "naira-card": {
    method: "naira-card",
    currency: "NGN",
    label: "Pay in Naira",
    description: "Secure card payment in Nigerian Naira",
    isCard: true,
    isTransfer: false,
  },

  "naira-transfer": {
    method: "naira-transfer",
    currency: "NGN",
    label: "Transfer in Naira",
    description: "Direct bank transfer in Nigerian Naira",
    isCard: false,
    isTransfer: true,
  },
};

if (ENABLE_USD) {
  PAYMENT_METHODS["usd-card"] = {
    method: "usd-card",
    currency: "USD",
    label: "Pay in Dollars",
    description: "International card payment in US Dollars",
    isCard: true,
    isTransfer: false,
  };

  PAYMENT_METHODS["usd-transfer"] = {
    method: "usd-transfer",
    currency: "USD",
    label: "Transfer in Dollars",
    description: "Direct bank transfer in US Dollars",
    isCard: false,
    isTransfer: true,
  };
}

export const NAIRA_PRESETS = [5000, 10000, 25000, 50000, 100000];

export const USD_PRESETS = [25, 50, 100, 250, 500];

export function getCurrency(method: PaymentMethod | null): Currency {
  if (!method) return "NGN";

  return PAYMENT_METHODS[method].currency;
}

export function getCurrencySymbol(currency: Currency): string {
  return currency === "NGN" ? "₦" : "$";
}

export function formatCurrency(
  value: number | string,
  currency: Currency,
): string {
  const amount =
    typeof value === "string" ? Number(value.replace(/,/g, "")) : value;

  if (Number.isNaN(amount)) {
    return currency === "NGN" ? "₦0" : "$0";
  }

  return new Intl.NumberFormat(currency === "NGN" ? "en-NG" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getPresets(currency: Currency): number[] {
  return currency === "NGN" ? NAIRA_PRESETS : USD_PRESETS;
}

export function getProgress(
  step: DonationStep,
  donationType: DonationType,
): { current: number; total: number } {
  if (donationType === "monthly") {
    switch (step) {
      case "give-money":
        return { current: 1, total: 6 };
      case "monthly-email":
        return { current: 2, total: 6 };
      case "monthly-success":
        return { current: 3, total: 6 };
      case "payment-options":
        return { current: 4, total: 6 };
      case "amount":
        return { current: 5, total: 6 };
      case "payment-success":
        return { current: 6, total: 6 };
    }
  }

  switch (step) {
    case "give-money":
      return { current: 1, total: 4 };
    case "payment-options":
      return { current: 2, total: 4 };
    case "amount":
      return { current: 3, total: 4 };
    case "payment-success":
      return { current: 4, total: 4 };
    default:
      return { current: 1, total: 4 };
  }
}

export type DonationState = {
  step: DonationStep;
  donationType: DonationType;
  email: string;
  paymentMethod: PaymentMethod | null;
  amount: string;
};

export const INITIAL_DONATION_STATE: DonationState = {
  step: "give-money",
  donationType: "once",
  email: "",
  paymentMethod: null,
  amount: "",
};
