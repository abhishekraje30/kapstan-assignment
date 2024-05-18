"use client";
import { Button, Modal } from "antd";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import FileUpload from "./FileUpload";

export default function EnvVariables() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="px-4">
      <div className="flex justify-between">
        <h1 className="text-gray-500 text-sm font-bold">
          Environment Variables
        </h1>
        <div className="flex gap-4">
          <div className="hover:cursor-pointer" onClick={showModal}>
            <IoMdAdd size={20} />
          </div>
          <div className="hover:cursor-pointer">
            <RiDownloadLine size={20} />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        title="Upload .env file"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        {/* Create file upload with drag & drop and upload button */}

        <FileUpload />
      </Modal>

      <h1>No environment variable created.</h1>
    </div>
  );
}
