export type DonationType = "once" | "monthly";

export type Currency = "NGN" | "USD" | "GBP";

export type PaymentMethod = "card" | "bank-transfer";

export type DonationStep =
  | "give-money"
  | "monthly-email"
  | "monthly-success"
  | "payment-options"
  | "amount"
  | "transfer-details"
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
  card: {
    method: "card",
    currency: "NGN",
    label: "Pay with card",
    description: "Secure card payment",
    isCard: true,
    isTransfer: false,
  },

  "bank-transfer": {
    method: "bank-transfer",
    currency: "NGN",
    label: "Bank transfer",
    description: "View our Naira, Dollar and Pound bank details",
    isCard: false,
    isTransfer: true,
  },
};

export const NAIRA_PRESETS = [5000, 10000, 25000, 50000, 100000];

export const USD_PRESETS = [25, 50, 100, 250, 500];

export const GBP_PRESETS = [10, 25, 50, 100, 250];

export function getCurrency(method: PaymentMethod | null): Currency {
  if (!method) return "NGN";

  return PAYMENT_METHODS[method].currency;
}

export function getCurrencySymbol(currency: Currency): string {
  switch (currency) {
    case "NGN":
      return "₦";
    case "USD":
      return "$";
    case "GBP":
      return "£";
  }
}

export function formatCurrency(
  value: number | string,
  currency: Currency,
): string {
  const amount =
    typeof value === "string" ? Number(value.replace(/,/g, "")) : value;

  if (Number.isNaN(amount)) {
    if (currency === "NGN") return "₦0";
    if (currency === "USD") return "$0";
    return "£0";
  }

  const locale =
    currency === "NGN" ? "en-NG" : currency === "USD" ? "en-US" : "en-GB";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getPresets(currency: Currency): number[] {
  switch (currency) {
    case "NGN":
      return NAIRA_PRESETS;
    case "USD":
      return USD_PRESETS;
    case "GBP":
      return GBP_PRESETS;
  }
}

export function getCurrencyDefaults(currency: Currency): {
  symbol: string;
  placeholder: string;
  presets: number[];
} {
  switch (currency) {
    case "NGN":
      return {
        symbol: "₦",
        placeholder: "50000",
        presets: NAIRA_PRESETS,
      };
    case "USD":
      return {
        symbol: "$",
        placeholder: "100",
        presets: USD_PRESETS,
      };
    case "GBP":
      return {
        symbol: "£",
        placeholder: "50",
        presets: GBP_PRESETS,
      };
  }
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
      case "transfer-details":
        return { current: 6, total: 6 };
      case "payment-success":
        return { current: 7, total: 7 };
    }
  }

  switch (step) {
    case "give-money":
      return { current: 1, total: 5 };
    case "payment-options":
      return { current: 2, total: 5 };
    case "amount":
      return { current: 3, total: 5 };
    case "transfer-details":
      return { current: 4, total: 5 };
    case "payment-success":
      return { current: 5, total: 5 };
    default:
      return { current: 1, total: 5 };
  }
}

export type DonationState = {
  step: DonationStep;
  donationType: DonationType;
  email: string;
  paymentMethod: PaymentMethod | null;
  currency: Currency;
  amount: string;
};

export const INITIAL_DONATION_STATE: DonationState = {
  step: "give-money",
  donationType: "once",
  email: "",
  paymentMethod: null,
  currency: "NGN",
  amount: "",
};
