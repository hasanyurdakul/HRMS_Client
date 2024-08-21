import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

function HelpCard() {
  return (
    <div className=" flex flex-col col-span-full row-span-1 sm:col-span-6 xl:col-span-6 bg-white dark:bg-black shadow-sm rounded-xl bg-no-repeat bg-bottom bg-cardWaveBottomRight">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Destek
        </h2>
      </header>

      <div className="flex flex-col grow gap-2 overflow-y-scroll no-scrollbar max-h-64">
        {/* AccordionElement */}
        <Accordion className="bg-transparent border-none shadow-none ">
          <AccordionSummary
            className="bg-transparent mb-0 py-0 my-0 cursor-pointer"
            expandIcon={<ExpandMore />}
          >
            <div className="flex items-center">
              <img
                src="/assets/images/logo-icon.png"
                className="w-8 h-8 mr-2"
              />
              <h1 className="text-left font-semibold text-sm">
                hrmap sisteminde nasıl kullanıcı oluşturabilirim?
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails className="bg-transparent mt-0 pt-0">
            hrmap sisteminde kullanıcı oluşturmak için öncelikle yetkili bir
            kullanıcı hesabıyla giriş yapmanız gerekmektedir. Ardından,
            kullanıcı yönetimi sayfasına giderek "Yeni Kullanıcı Oluştur"
            butonuna tıklayın ve gerekli bilgileri doldurun.
          </AccordionDetails>
        </Accordion>
        {/* AccordionElement */}
        <Accordion className="bg-transparent border-none shadow-none ">
          <AccordionSummary
            className="bg-transparent mb-0 py-0 my-0 cursor-pointer"
            expandIcon={<ExpandMore />}
          >
            <div className="flex items-center">
              <img
                src="/assets/images/logo-icon.png"
                className="w-8 h-8 mr-2"
              />
              <h1 className="text-left font-semibold text-sm">
                Şifre sıfırlama işlemi nasıl yapılır?
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails className="bg-transparent mt-0 pt-0">
            Şifrenizi sıfırlamak için giriş ekranında "Şifremi Unuttum"
            bağlantısına tıklayın. E-posta adresinizi girerek şifre sıfırlama
            bağlantısını alın ve yeni bir şifre belirleyin.
          </AccordionDetails>
        </Accordion>
        {/* AccordionElement */}
        <Accordion className="bg-transparent border-none shadow-none ">
          <AccordionSummary
            className="bg-transparent mb-0 py-0 my-0 cursor-pointer"
            expandIcon={<ExpandMore />}
          >
            <div className="flex items-center">
              <img
                src="/assets/images/logo-icon.png"
                className="w-8 h-8 mr-2"
              />
              <h1 className="text-left font-semibold text-sm">
                İzin talebimi nasıl iletebilirim?
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails className="bg-transparent mt-0 pt-0">
            İzin talebi göndermek için giriş yaptıktan sonra "İzin Talep Et"
            butonuna tıklayın. İzin tarihlerini ve nedenini girerek talebinizi
            oluşturabilirsiniz.
          </AccordionDetails>
        </Accordion>
        {/* AccordionElement */}
        <Accordion className="bg-transparent border-none shadow-none ">
          <AccordionSummary
            className="bg-transparent mb-0 py-0 my-0 cursor-pointer"
            expandIcon={<ExpandMore />}
          >
            <div className="flex items-center">
              <img
                src="/assets/images/logo-icon.png"
                className="w-8 h-8 mr-2"
              />
              <h1 className="text-left font-semibold text-sm">
                Kişisel bilgilerimi nasıl güncelleyebilirim?
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails className="bg-transparent mt-0 pt-0">
            Kişisel bilgilerinizi güncellemek için giriş yaptıktan sonra profil
            sayfanıza gidin. Burada isim, e-posta ve diğer bilgilerinizi
            güncelleyebilirsiniz.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default HelpCard;
