'use client'

 export const PreviewStep = ({formData}) => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
        <h3 className="text-xl font-bold">
          {formData.businessName || "Your Business Name"}
        </h3>
        <p className="text-gray-600">
          {formData.description || "Your business description will appear here"}
        </p>
        <div className="border-t pt-4">
          <p className="font-medium">Owner: {formData.ownerName}</p>
          <p className="text-gray-600">{formData.ownerTitle}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600">
            Your booking page will be available at:
            <br />
            <span className="font-mono">
              clyne.com/
              {formData.businessName?.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );