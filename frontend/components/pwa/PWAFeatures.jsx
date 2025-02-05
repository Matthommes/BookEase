"use client";

import { InstallPrompt } from "./installPrompt";
import { PushNotificationManager } from "./pushNotificationManager";



export function PWAFeatures() {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  );
}
