"use client";

import { useCallback, useEffect, useState } from "react";

type PaystackPop = {
  setup: (opts: {
    key: string;
    email: string;
    amount: number;
    currency?: string;
    ref?: string;
    callback?: (response: { reference?: string; status?: string }) => void;
    onClose?: () => void;
  }) => {
    openIframe: () => void;
  };
};

type UsePaystackOptions = {
  email: string;
  amount: number;
  currency?: string;
  onSuccess?: (response: { reference?: string; status?: string }) => void;
  onClose?: () => void;
};

export function usePaystack({
  email,
  amount,
  currency = "NGN",
  onSuccess,
  onClose,
}: UsePaystackOptions) {
  const [ready, setReady] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const win = window as unknown as { PaystackPop?: PaystackPop };
    if (win.PaystackPop) {
      setReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const pay = useCallback(() => {
    const win = window as unknown as { PaystackPop?: PaystackPop };
    const paystack = win.PaystackPop;
    if (!paystack) return;

    setProcessing(true);

    const transaction = paystack.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY ?? "",
      email,
      amount,
      currency,
      callback: (response) => {
        setProcessing(false);
        onSuccess?.(response);
      },
      onClose: () => {
        setProcessing(false);
        onClose?.();
      },
    });

    transaction.openIframe();
  }, [email, amount, currency, onSuccess, onClose]);

  return { ready, processing, pay };
}
