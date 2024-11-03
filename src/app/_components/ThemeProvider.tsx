"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <NextThemeProvider attribute={"class"} defaultTheme={"system"} {...props}>
      {children}
    </NextThemeProvider>
  );
}
