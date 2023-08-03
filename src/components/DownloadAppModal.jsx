import React from "react";
import appIcon from "../images/appIcon.png";
import { Modal } from "antd";

function DownloadAppModal({ visible, closeModal = () => {} }) {
  return (
    <Modal
      className="downloadApp"
      title={false}
      closable={false}
      style={{ top: 20 }}
      open={visible}
      footer={false}
      width="85%"
      onCancel={closeModal}
    >
      <div className="w-full h-[75px] flex flex-row items-start justify-between">
        <div className="w-[25%] h-full rounded-[11px]">
          <img
            className="w-full h-full max-w-[75px] max-h-[70px] rounded-[11px]"
            width="100%"
            height="100%"
            src={appIcon}
            alt="appIcon"
          />
        </div>
        <div className="w-[70%] h-full flex flex-col justify-between items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.edonish.market"
            target="_blank"
            className="w-full h-[50%] bg-[#2B31A4] text-white text-[12px] font-[400] rounded-[9px] text-center pt-2"
          >
            Скачать приложение
          </a>
          <button
            onClick={closeModal}
            className="text-[#897575] text-[12px] font-[400]"
          >
            Нет, спасибо
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DownloadAppModal;
