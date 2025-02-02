"use client";

import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const BusinessDetailsStep = ({ formData, handleInputChange }) => (
  <div className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="businessName">Business Name</Label>
      <Input
        id="businessName"
        name="businessName"
        value={formData.businessName}
        onChange={handleInputChange}
        placeholder="Enter your business name"
        className="border-purple-600 focus-visible:ring-purple-400"
      />
    </div>

    {/* <div className="space-y-2">
      <Label htmlFor="businessType">Business Type</Label>
      <Select
        onValueChange={(value) =>
          handleInputChange({ target: { name: "businessType", value } })
        }
        value={formData.businessType}
      >
        <SelectTrigger className="border-purple-600 focus:ring-purple-400">
          <SelectValue placeholder="Select your business type" />
        </SelectTrigger>
        <SelectContent>
          {BUSINESS_TYPES.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div> */}

    <div className="space-y-2">
      <Label htmlFor="description">Business Description</Label>
      <Textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Tell us about your business"
        className="border-purple-600 focus-visible:ring-purple-400"
        rows={4}
      />
    </div>
  </div>
);
