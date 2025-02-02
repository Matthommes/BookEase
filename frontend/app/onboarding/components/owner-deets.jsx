"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const OwnerDetailsStep = ({ formData, handleInputChange }) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="ownerName">Your Name</Label>
      <Input
        id="ownerName"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleInputChange}
        placeholder="Enter your full name"
        className="border-purple-600 focus-visible:ring-purple-400"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="ownerTitle">Your Title</Label>
      <Input
        id="ownerTitle"
        name="ownerTitle"
        value={formData.ownerTitle}
        onChange={handleInputChange}
        placeholder="e.g. Owner, Director, Lead Trainer"
        className="border-purple-600 focus-visible:ring-purple-400"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="phoneNumber">Business Phone</Label>
      <Input
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        placeholder="Enter your business phone"
        className="border-purple-600 focus-visible:ring-purple-400"
      />
    </div>
  </div>
);
