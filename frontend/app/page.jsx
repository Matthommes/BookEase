"use client";

import MainLayout from "@/components/layout/mainLayout";
import { PWAFeatures } from "@/components/pwa/PWAFeatures";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainLayout />
      <PWAFeatures />
    </main>
  );
}
