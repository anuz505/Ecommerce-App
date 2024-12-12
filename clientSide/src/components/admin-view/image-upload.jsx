import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { UploadCloudIcon } from "lucide-react";

function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) {
  const inputRef = useRef(null);
  function handleImageFileChange(event) {
    const selectedFile = event.target.file?.[0];
    if (selectedFile) setImageFile(selectedFile);
  }
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div className="border-2 border-dashed rounded-lg p-4">
        <div>
          <Input
            id="image upload"
            type="file"
            // className="hidden"
            ref={inputRef}
            onChange={handleImageFileChange}
          ></Input>
          {!imageFile ? (
            <Label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center h-32  cursor-pointer"
            >
              <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2"></UploadCloudIcon>
              <span>Drag & Drop or click to upload a image</span>
            </Label>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductImageUpload;
