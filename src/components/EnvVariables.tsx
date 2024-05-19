"use client";
import { Button, Modal } from "antd";
import { ChangeEvent, FC, ReactNode, SetStateAction, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
import FileUpload from "./FileUpload";

export default function EnvVariables() {
  const [open, setOpen] = useState(false);
  const [envVariables, setEnvVariables] = useState<Record<string, string>>({});
  const [editingKey, setEditingKey] = useState<string>("");
  const [editingValues, setEditingValues] = useState({ key: "", value: "" });

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleKeyChange = (oldKey: string, newKey: string) => {
    if (newKey !== oldKey && newKey) {
      setEnvVariables((prev: Record<string, string>) => {
        const { [oldKey]: value, ...rest } = prev;
        return { ...rest, [newKey]: value };
      });
    }
  };

  const handleValueChange = (key: string, newValue: string) => {
    setEnvVariables((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const handleDelete = (key: string) => {
    setEnvVariables((prev: Record<string, string>) => {
      const { [key]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleAdd = () => {
    setEnvVariables((prev) => ({
      ...prev,
      ["newKey"]: "newValue",
    }));
  };

  const handleEdit = (key: string, value: string) => {
    setEditingKey(key);
    setEditingValues({ key, value });
  };

  const handleSave = () => {
    const { key, value } = editingValues;
    handleKeyChange(editingKey, key);
    handleValueChange(key, value);
    setEditingKey("");
    setEditingValues({ key: "", value: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    setEditingValues((prev) => ({
      ...prev,
      [field]: e.target.value as string,
    }));
  };

  return (
    <div className="px-4">
      <div className="flex justify-between">
        <h1 className="text-gray-500 text-sm font-bold">
          Environment Variables
        </h1>
        <div className="flex gap-4">
          <div
            className="hover:cursor-pointer w-8 h-8 rounded-full hover:bg-slate-300 flex justify-center items-center"
            onClick={showModal}
          >
            <IoMdAdd size={20} />
          </div>
          <div className="hover:cursor-pointer w-8 h-8 rounded-full hover:bg-slate-300 flex justify-center items-center">
            <RiDownloadLine size={20} />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        title="Upload .env file"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }: { OkBtn: FC; CancelBtn: FC }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <FileUpload
          setEnvVariables={setEnvVariables}
          handleCancel={handleCancel}
        />
      </Modal>

      {Object.keys(envVariables).length !== 0 ? (
        <div className="flex flex-col justify-start">
          {Object.entries(envVariables).map(([key, value]) => (
            <div key={key} style={{ display: "flex", marginBottom: "10px" }}>
              {editingKey === key ? (
                <div className="flex gap-4 items-center justify-around w-full">
                  <input
                    type="text"
                    value={editingValues.key as string}
                    onChange={(e) => handleChange(e, "key")}
                    className="p-2 flex-1 border border-slate-500 rounded-md"
                  />
                  <input
                    type="text"
                    value={editingValues.value}
                    onChange={(e) => handleChange(e, "value")}
                    className="p-2 flex-1 border border-slate-500 rounded-md"
                  />
                  <button
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="flex gap-4 items-center justify-around w-full">
                  <span className="p-2 flex-1 border border-slate-300 rounded-md">
                    {key}
                  </span>
                  <span className="p-2 flex-1 border border-slate-300 rounded-md">
                    {value}
                  </span>
                  <button
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={() => handleEdit(key, value)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDelete(key)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
          <div>
            <button
              className="px-2 py-1 bg-[#5820AB] text-white rounded hover:bg-[#6D28A0]"
              onClick={handleAdd}
            >
              Add Variable
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            className="px-2 py-1 bg-[#5820AB] text-white rounded hover:bg-[#6D28A0]"
            onClick={handleAdd}
          >
            Add Variable
          </button>
        </div>
      )}
    </div>
  );
}
