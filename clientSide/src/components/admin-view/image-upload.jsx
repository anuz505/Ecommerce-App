import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";
import { useEffect } from "react";
function ProductImageUpload({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  imageLoadingState,
}) {
  const inputRef = useRef(null);
  function handleImageFileChange(event) {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
    console.log(selectedFile);
  }
  function handleDragOver(event) {
    event.preventDefault();
  }
  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
    console.log(droppedFile);
  }
  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  }
  async function uploadImageToCloudinary() {
    setImageLoadingState(true);

    const data = new FormData();
    data.append("my-file", imageFile);
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/image-upload",
      data
    );
    console.log(response);
    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      setImageLoadingState(false);
    }
  }
  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed rounded-lg p-4"
      >
        <div>
          <Input
            id="image-upload"
            type="file"
            className="hidden"
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
          ) : imageLoadingState ? (
            <Skeleton className="h-10 bg-gray-100" />
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FileIcon className="w-8 text-primary mr-2 h-8"></FileIcon>
              </div>
              <p className="text-sm font-medium">{imageFile.name}</p>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
                onClick={handleRemoveImage}
              >
                <XIcon className="w-4 h-4" />
                <span className="sr-only">Remove File</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductImageUpload;
