<template>
  <div class="bg-[white] pt-[14px] pl-[24px] pr-[24px]">
    <div
      class="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-ภ gap-4 mt-[14px] w-[100%]"
    >
      <div
        class="rounded-[16px] p-[14px] h-[auto] mb-[24px] border cursor-pointer flex flex-col items-center justify-center"
        @click="
          (create = true),
            (accountBankName = ''),
            (bankName = ''),
            (accountNumber = ''),
            (filepaymentForm = [])
        "
      >
        <div>
          <svg
            width="68"
            height="69"
            viewBox="0 0 68 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="34" cy="34.457" r="34" fill="#F3F7FA" />
            <mask
              id="mask0_1373_22044"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="6"
              y="7"
              width="56"
              height="55"
            >
              <rect
                x="6.80078"
                y="7.25586"
                width="54.4"
                height="54.4"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_1373_22044)">
              <path
                d="M33.9984 49.7561C33.5165 49.7561 33.1129 49.5932 32.7874 49.2674C32.4619 48.9416 32.2992 48.5379 32.2992 48.0562V36.1561H20.3992C19.9175 36.1561 19.5138 35.9932 19.188 35.6672C18.8621 35.3412 18.6992 34.9373 18.6992 34.4555C18.6992 33.9736 18.8621 33.5699 19.188 33.2444C19.5138 32.919 19.9175 32.7562 20.3992 32.7562H32.2992V20.8562C32.2992 20.3745 32.4622 19.9708 32.7881 19.6449C33.1141 19.3191 33.518 19.1562 33.9999 19.1562C34.4818 19.1562 34.8855 19.3191 35.2109 19.6449C35.5364 19.9708 35.6991 20.3745 35.6991 20.8562V32.7562H47.5992C48.0808 32.7562 48.4846 32.9192 48.8104 33.2452C49.1362 33.5712 49.2991 33.9751 49.2991 34.4569C49.2991 34.9388 49.1362 35.3425 48.8104 35.668C48.4846 35.9934 48.0808 36.1561 47.5992 36.1561H35.6991V48.0562C35.6991 48.5379 35.5361 48.9416 35.2102 49.2674C34.8842 49.5932 34.4803 49.7561 33.9984 49.7561Z"
                fill="#B9CCDC"
              />
            </g>
          </svg>
        </div>
        <div class="text-[#5C6B79] mt-[8px] font-bold">เพิ่มบัญชีธนาคาร</div>
      </div>
      <div
        class="border rounded-[12px] pl-[8px] pr-[8px] pt-[12px] pb-[12px] mb-[24px]"
        v-for="data in buildingPayment"
      >
        <div class="flex flex-col h-[100%]">
          <div class="flex justify-between">
            <div class="flex">
              <div>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_902_17580"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="21"
                  >
                    <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_902_17580)">
                    <path
                      d="M5.41728 14.6647C5.24013 14.6647 5.09172 14.6048 4.97205 14.4851C4.8524 14.3653 4.79257 14.2168 4.79257 14.0398V9.01886C4.79257 8.84686 4.8525 8.70317 4.97234 8.58778C5.09219 8.47241 5.24069 8.41472 5.41784 8.41472C5.595 8.41472 5.74341 8.47461 5.86307 8.59438C5.98273 8.71418 6.04255 8.86261 6.04255 9.0397V14.0606C6.04255 14.2326 5.98263 14.3763 5.86278 14.4917C5.74293 14.6071 5.59443 14.6647 5.41728 14.6647ZM10.0006 14.6647C9.82343 14.6647 9.67502 14.6048 9.55537 14.4851C9.43571 14.3653 9.37589 14.2168 9.37589 14.0398V9.01886C9.37589 8.84686 9.4358 8.70317 9.55564 8.58778C9.67548 8.47241 9.82398 8.41472 10.0011 8.41472C10.1783 8.41472 10.3267 8.47461 10.4464 8.59438C10.566 8.71418 10.6258 8.86261 10.6258 9.0397V14.0606C10.6258 14.2326 10.5659 14.3763 10.4461 14.4917C10.3262 14.6071 10.1777 14.6647 10.0006 14.6647ZM2.91276 17.5814C2.74075 17.5814 2.59705 17.5215 2.48168 17.4016C2.36629 17.2818 2.30859 17.1333 2.30859 16.9561C2.30859 16.7789 2.36849 16.6305 2.48828 16.5109C2.60807 16.3912 2.75651 16.3314 2.93359 16.3314H17.089C17.261 16.3314 17.4047 16.3913 17.5201 16.5112C17.6354 16.631 17.6931 16.7795 17.6931 16.9567C17.6931 17.1338 17.6332 17.2822 17.5134 17.4019C17.3937 17.5216 17.2452 17.5814 17.0681 17.5814H2.91276ZM14.5839 14.6647C14.4067 14.6647 14.2583 14.6048 14.1387 14.4851C14.019 14.3653 13.9592 14.2168 13.9592 14.0398V9.01886C13.9592 8.84686 14.0191 8.70317 14.1389 8.58778C14.2588 8.47241 14.4073 8.41472 14.5844 8.41472C14.7616 8.41472 14.91 8.47461 15.0297 8.59438C15.1493 8.71418 15.2092 8.86261 15.2092 9.0397V14.0606C15.2092 14.2326 15.1492 14.3763 15.0294 14.4917C14.9095 14.6071 14.761 14.6647 14.5839 14.6647ZM10.6627 2.12309L17.2829 5.35066C17.4146 5.41982 17.5159 5.51617 17.5868 5.6397C17.6577 5.76322 17.6931 5.90245 17.6931 6.05736C17.6931 6.25329 17.6245 6.41739 17.4872 6.54966C17.3499 6.68192 17.1825 6.74805 16.9848 6.74805H3.02172C2.83155 6.74805 2.66516 6.68192 2.52253 6.54966C2.37991 6.41739 2.30859 6.25329 2.30859 6.05736C2.30859 5.90245 2.34305 5.76356 2.41197 5.6407C2.48087 5.51784 2.58584 5.42543 2.72686 5.36347L9.33901 2.12309C9.54705 2.02801 9.76733 1.98047 9.99984 1.98047C10.2324 1.98047 10.4533 2.02801 10.6627 2.12309ZM5.26368 5.49807H14.7381L10.0009 3.20641L5.26368 5.49807Z"
                      fill="#003765"
                    />
                  </g>
                </svg>
              </div>
              <div class="text-[16px] ml-[4px]">
                {{ data.attributes.bankName }}
              </div>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="10.0013"
                  cy="4.16667"
                  rx="1.66667"
                  ry="1.66667"
                  transform="rotate(90 10.0013 4.16667)"
                  fill="#5C6B79"
                />
                <circle
                  cx="10.0013"
                  cy="10.0007"
                  r="1.66667"
                  transform="rotate(90 10.0013 10.0007)"
                  fill="#5C6B79"
                />
                <ellipse
                  cx="10.0013"
                  cy="15.8327"
                  rx="1.66667"
                  ry="1.66667"
                  transform="rotate(90 10.0013 15.8327)"
                  fill="#5C6B79"
                />
              </svg>
            </div>
          </div>
          (Bank Number: {{ data.attributes.bankNumber }})
          <div
            class="flex justify-between border rounded-[12px] pl-[14px] pr-[14px] pt-[4px] pb-[4px] mt-[14px]"
          >
            <div>ชื่อบัญชี</div>
            <div class="font-bold">{{ data.attributes.accountName }}</div>
          </div>
          <div
            class="flex justify-between border rounded-[12px] pl-[14px] pr-[14px] pt-[4px] pb-[4px] mt-[14px]"
          >
            <div>เลขที่บัญชี</div>
            <div class="font-bold">{{ data.attributes.accountNumber }}</div>
          </div>

          <div
            v-if="data.attributes.QRCode.data"
            class="flex justify-center w-[100%] mt-[14px] h-[100%]"
          >
            <img
              class="w-[150px] h-[150px] items-center"
              :src="
                'https://api.resguru.app' +
                data.attributes.QRCode.data.attributes.url
              "
            />
          </div>
          <div
            v-else
            class="flex items-center justify-center w-[100%] mt-[14px] h-[100%]"
          >
            <div
              class="flex justify-center items-center mt-[14px] w-[150px] h-[150px] text-center"
            >
              Please Upload Your Building QR Payment
            </div>
          </div>
          <div class="flex justify-center mt-[14px]">
            <div
              class="flex bg-[#D44769] rounded-[12px] pl-[12px] pr-[12px] pt-[4px] pb-[4px]"
            >
              <div
                class="flex items-center justify-center"
                @click="removePayment(data.id)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="removePayment(data.id)"
                >
                  <mask
                    id="mask0_967_25233"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>

                  <g mask="url(#mask0_967_25233)">
                    <path
                      d="M6.08975 17.0822C5.66881 17.0822 5.3125 16.9363 5.02083 16.6447C4.72917 16.353 4.58333 15.9967 4.58333 15.5758V4.99886H4.375C4.19765 4.99886 4.04915 4.93904 3.9295 4.81939C3.80983 4.69973 3.75 4.55123 3.75 4.37389C3.75 4.19654 3.80983 4.04804 3.9295 3.92839C4.04915 3.80872 4.19765 3.74889 4.375 3.74889H7.49998C7.49998 3.5395 7.57316 3.36429 7.71952 3.22326C7.8659 3.08223 8.04378 3.01172 8.25319 3.01172H11.7468C11.9562 3.01172 12.1341 3.08223 12.2804 3.22326C12.4268 3.36429 12.5 3.5395 12.5 3.74889H15.625C15.8023 3.74889 15.9508 3.80872 16.0705 3.92839C16.1901 4.04804 16.25 4.19654 16.25 4.37389C16.25 4.55123 16.1901 4.69973 16.0705 4.81939C15.9508 4.93904 15.8023 4.99886 15.625 4.99886H15.4166V15.5758C15.4166 15.9967 15.2708 16.353 14.9791 16.6447C14.6875 16.9363 14.3312 17.0822 13.9102 17.0822H6.08975ZM5.83331 4.99886V15.5758C5.83331 15.6506 5.85735 15.712 5.90544 15.7601C5.95352 15.8082 6.01496 15.8322 6.08975 15.8322H13.9102C13.985 15.8322 14.0464 15.8082 14.0945 15.7601C14.1426 15.712 14.1666 15.6506 14.1666 15.5758V4.99886H5.83331ZM7.83654 13.5406C7.83654 13.7179 7.89637 13.8664 8.01602 13.9861C8.13567 14.1057 8.28417 14.1655 8.46152 14.1655C8.63887 14.1655 8.78737 14.1057 8.90702 13.9861C9.02669 13.8664 9.08652 13.7179 9.08652 13.5406V7.29051C9.08652 7.11316 9.02669 6.96466 8.90702 6.84501C8.78737 6.72536 8.63887 6.66553 8.46152 6.66553C8.28417 6.66553 8.13567 6.72536 8.01602 6.84501C7.89637 6.96466 7.83654 7.11316 7.83654 7.29051V13.5406ZM10.9134 13.5406C10.9134 13.7179 10.9733 13.8664 11.0929 13.9861C11.2126 14.1057 11.3611 14.1655 11.5384 14.1655C11.7158 14.1655 11.8643 14.1057 11.9839 13.9861C12.1036 13.8664 12.1634 13.7179 12.1634 13.5406V7.29051C12.1634 7.11316 12.1036 6.96466 11.9839 6.84501C11.8643 6.72536 11.7158 6.66553 11.5384 6.66553C11.3611 6.66553 11.2126 6.72536 11.0929 6.84501C10.9733 6.96466 10.9134 7.11316 10.9134 7.29051V13.5406ZM5.83331 4.99886V15.5758C5.83331 15.6506 5.85735 15.712 5.90544 15.7601C5.95352 15.8082 6.01496 15.8322 6.08975 15.8322H5.83331V4.99886Z"
                      fill="#ffffff"
                    />
                  </g>
                </svg>
              </div>
              <div
                class="text-white flex items-center justify-center ml-[4px] cursor-pointer"
                @click="removePayment(data.id)"
              >
                Delete
              </div>
            </div>
            <!-- <div class="flex bg-[#3A89CB]  rounded-[12px] pl-[12px] pr-[12px] pt-[4px] pb-[4px] ml-[14px] ">
                            <div class="flex items-center justify-center">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.25129 11.0782C8.01623 11.0782 8.66473 10.8122 9.19678 10.2801C9.72883 9.74807 9.99485 9.09958 9.99485 8.33462C9.99485 7.56966 9.72883 6.92116 9.19678 6.38912C8.66473 5.85708 8.01623 5.59105 7.25129 5.59105C6.48633 5.59105 5.83783 5.85708 5.30579 6.38912C4.77373 6.92116 4.5077 7.56966 4.5077 8.33462C4.5077 9.09958 4.77373 9.74807 5.30579 10.2801C5.83783 10.8122 6.48633 11.0782 7.25129 11.0782ZM2.12309 13.3346C1.78634 13.3346 1.5013 13.2179 1.26797 12.9846C1.03464 12.7513 0.917969 12.4662 0.917969 12.1295V4.53977C0.917969 4.20301 1.03464 3.91797 1.26797 3.68464C1.5013 3.4513 1.78634 3.33464 2.12309 3.33464H4.15899L5.03079 2.38977C5.14105 2.27025 5.27387 2.17562 5.42925 2.1059C5.58463 2.03617 5.74753 2.0013 5.91795 2.0013H8.8154C8.98612 2.0013 9.12923 2.05905 9.24472 2.17455C9.36021 2.29004 9.41795 2.43315 9.41795 2.60387V4.33462L2.12309 4.53977H1.91795V12.1295C1.91795 12.1893 1.93718 12.2385 1.97564 12.2769C2.0141 12.3154 2.06325 12.3346 2.12309 12.3346H12.3795C12.4393 12.3346 12.4885 12.3154 12.5269 12.2769C12.5654 12.2385 12.5846 12.1893 12.5846 12.1295V6.16794H12.982C12.9513 6.16794 12.9668 6.1846 13.0288 6.21794C13.0908 6.25127 13.163 6.29636 13.2455 6.3532C13.328 6.41004 13.4051 6.47585 13.4769 6.55064C13.5487 6.62541 13.5846 6.6987 13.5846 6.7705V12.1295C13.5846 12.4662 13.4679 12.7513 13.2346 12.9846C13.0013 13.2179 12.7162 13.3346 12.3795 13.3346H2.12309ZM12.591 3.00129H11.7577C11.616 3.00129 11.4973 2.95335 11.4014 2.85747C11.3056 2.7616 11.2577 2.6428 11.2577 2.50107C11.2577 2.35935 11.3056 2.24062 11.4014 2.1449C11.4973 2.04917 11.616 2.0013 11.7577 2.0013H12.591V1.16797C12.591 1.0263 12.639 0.907552 12.7348 0.811719C12.8307 0.715885 12.9495 0.667969 13.0912 0.667969C13.233 0.667969 13.3517 0.715885 13.4474 0.811719C13.5431 0.907552 13.591 1.0263 13.591 1.16797V2.0013H14.4244C14.566 2.0013 14.6848 2.04924 14.7806 2.14512C14.8764 2.241 14.9243 2.3598 14.9243 2.50152C14.9243 2.64325 14.8764 2.76198 14.7806 2.8577C14.6848 2.95342 14.566 3.00129 14.4244 3.00129H13.591V3.83464C13.591 3.97629 13.5431 4.09504 13.4472 4.19087C13.3513 4.2867 13.2325 4.33462 13.0908 4.33462C12.9491 4.33462 12.8303 4.2867 12.7346 4.19087C12.6389 4.09504 12.591 3.97629 12.591 3.83464V3.00129Z"
                                        fill="white" />
                                </svg>
                            </div>
                            <input class="h-[28px] w-[120px] rounded-[12px] border flex justify-start " id="uploadBanner" ref="paymentImage" hidden
                                    type="file" @change="editPaymentImagewithUpload(data.id)" />
                            <label for="uploadBanner">
                            <div class="text-white flex items-center justify-center ml-[4px] cursor-pointer">เปลี่ยนรูป</div>
                            </label>
                        </div> -->
          </div>
        </div>
      </div>
    </div>
    <b-modal
      centered
      v-model="create"
      size="l"
      hide-backdrop
      hide-header-close
      hide-header
      hide-footer
      class="p-[-20px] text-custom"
    >
      <div>
        <div class="flex justify-between">
          <div
            class="text-custom flex justify-center items-center text-[16px] font-bold"
          >
            เพิ่มบัญชีธนาคาร
          </div>
          <div @click="create = false" class="cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_417_4814"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_417_4814)">
                <path
                  d="M12.0005 13.0538L6.92737 18.1269C6.78892 18.2654 6.61489 18.3362 6.40527 18.3394C6.19567 18.3426 6.01844 18.2718 5.87357 18.1269C5.72869 17.982 5.65625 17.8064 5.65625 17.6C5.65625 17.3936 5.72869 17.218 5.87357 17.0731L10.9466 12L5.87357 6.92689C5.73511 6.78844 5.66427 6.6144 5.66107 6.40479C5.65786 6.19519 5.72869 6.01795 5.87357 5.87309C6.01844 5.7282 6.19407 5.65576 6.40047 5.65576C6.60687 5.65576 6.78251 5.7282 6.92737 5.87309L12.0005 10.9462L17.0736 5.87309C17.212 5.73462 17.3861 5.66379 17.5957 5.66059C17.8053 5.65737 17.9825 5.7282 18.1274 5.87309C18.2723 6.01795 18.3447 6.19359 18.3447 6.39999C18.3447 6.60639 18.2723 6.78202 18.1274 6.92689L13.0543 12L18.1274 17.0731C18.2658 17.2115 18.3367 17.3856 18.3399 17.5952C18.3431 17.8048 18.2723 17.982 18.1274 18.1269C17.9825 18.2718 17.8069 18.3442 17.6005 18.3442C17.3941 18.3442 17.2184 18.2718 17.0736 18.1269L12.0005 13.0538Z"
                  fill="#5C6B79"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          class="w-[100%] h-[1px] mt-[24px] mb-[14px] bg-gray-200 border-0 dark:bg-gray-700"
        ></div>
        <div class="mt-[14px]">
          <div class="text-custom">ชื่อธนาคาร</div>
          <div>
            <select
              placeholder="Select"
              v-model="bankName"
              class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
            >
              <option label="เลือก" value="0" disabled>เลือก</option>
              <option label="ธนาคารกรุงเทพ" value="ธนาคารกรุงเทพ">
                ธนาคารกรุงเทพ
              </option>
              <option label="ธนาคารกสิกรไทย" value="ธนาคารกสิกรไทย">
                ธนาคารกสิกรไทย
              </option>
              <option label="ธนาคารกรุงไทย" value="ธนาคารกรุงไทย">
                ธนาคารกรุงไทย
              </option>
              <option label="ธนาคารทหารไทย" value="ธนาคารทหารไทย">
                ธนาคารทหารไทย
              </option>
              <option label="ธนาคารไทยพาณิชย์" value="ธนาคารไทยพาณิชย์">
                ธนาคารไทยพาณิชย์
              </option>
              <option label="ธนาคารกรุงศรีอยุธยา" value="ธนาคารกรุงศรีอยุธยา">
                ธนาคารกรุงศรีอยุธยา
              </option>
              <option label="ธนาคารเกียรตินาคิน" value="ธนาคารเกียรตินาคิน">
                ธนาคารเกียรตินาคิน
              </option>
              <option label="ธนาคารซีไอเอ็มบีไทย" value="ธนาคารซีไอเอ็มบีไทย">
                ธนาคารซีไอเอ็มบีไทย
              </option>
              <option label="ธนาคารทิสโก้" value="ธนาคารทิสโก้">
                ธนาคารทิสโก้
              </option>
              <option label="ธนาคารธนชาต" value="ธนาคารธนชาต">
                ธนาคารธนชาต
              </option>
              <option label="ธนาคารยูโอบี" value="ธนาคารยูโอบี">
                ธนาคารยูโอบี
              </option>
              <option
                label="ธนาคารสแตนดาร์ดชาร์เตอร์ด"
                value="ธนาคารสแตนดาร์ดชาร์เตอร์ด"
              >
                ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)
              </option>
              <option
                label="ธนาคารไทยเครดิตเพื่อรายย่อย"
                value="ธนาคารไทยเครดิตเพื่อรายย่อย"
              >
                ธนาคารไทยเครดิตเพื่อรายย่อย
              </option>
              <option
                label="ธนาคารแลนด์แอนด์เฮาส์ "
                value="ธนาคารแลนด์แอนด์เฮาส์"
              >
                ธนาคารแลนด์ แอนด์ เฮาส์
              </option>
              <option label="ธนาคารไอซีบีซี" value="ธนาคารไอซีบีซี">
                ธนาคารไอซีบีซี (ไทย)
              </option>
              <option
                label="ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย"
                value="ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย"
              >
                ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย
              </option>
              <option
                label="ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร"
                value="ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร"
              >
                ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร
              </option>
              <option
                label="ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย"
                value="ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย"
              >
                ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย
              </option>
              <option label="ธนาคารออมสิน" value="ธนาคารออมสิน">
                ธนาคารออมสิน
              </option>
              <option label="ธนาคารอาคารสงเคราะห์" value="ธนาคารอาคารสงเคราะห์">
                ธนาคารอาคารสงเคราะห์
              </option>
              <option
                label="ธนาคารอิสลามแห่งประเทศไทย"
                value="ธนาคารอิสลามแห่งประเทศไทย"
              >
                ธนาคารอิสลามแห่งประเทศไทย
              </option>
              <option label="ธนาคารแห่งประเทศจีน" value="ธนาคารแห่งประเทศจีน">
                ธนาคารแห่งประเทศจีน
              </option>
              <option
                label="ธนาคารซูมิโตโมมิตซุยทรัสต์"
                value="ธนาคารซูมิโตโมมิตซุยทรัสต์"
              >
                ธนาคารซูมิโตโม มิตซุย ทรัสต์ (ไทย)
              </option>
              <option
                label="ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น"
                value="ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น"
              >
                ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น จำกัด
              </option>
            </select>
          </div>
        </div>
        <div class="mt-[14px]">
          <div class="text-custom">ชื่อบัญชีธนาคาร</div>
          <div>
            <input
              class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
              v-model="accountBankName"
            />
          </div>
        </div>
        <div class="mt-[14px]">
          <div class="text-custom">เลขบัญชี</div>
          <div>
            <input
              class="w-[100%] h-[36px] rounded-[12px] pl-[8px] pr-[8px] text-custom bg-[#F3F7FA] mt-[8px]"
              v-model="accountNumber"
            />
          </div>
        </div>
        <div class="mt-[14px]">
          <div class="text-custom">QR Code</div>
          <div class="mt-[4px] flex">
            <input
              class="h-[28px] w-[120px] rounded-[12px] border flex justify-start"
              id="upload"
              @input="tempUploadFilePayment()"
              ref="fileForm"
              hidden
              type="file"
            />
            <label for="upload">
              <div
                class="h-[28px] w-[120px] flex justify-center text-custom items-center bg-[#165D98] text-[14px] text-[white] rounded-[12px]"
              >
                อัพโหลดรูปภาพ
              </div>
            </label>
            <div
              class="text-[#5C6B79] text-custom flex justify-center items-center ml-[8px] text-[12px]"
            >
              {{
                filepaymentForm.length == 0
                  ? "ยังไม่ได้เลือกไฟล์"
                  : "อัพโหลดรูปแล้ว"
              }}
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-[30px]">
          <div>
            <vs-button dark shadow @click="create = false">
              <div class="text-custom">ยกเลิก</div>
            </vs-button>
          </div>
          <div>
            <vs-button @click="createPaymentOfBuilding()" color="#003765">
              <div class="text-custom">บันทึก</div>
            </vs-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      create: false,
      buildingPayment: [],
      bankName: "",
      accountBankName: "",
      accountNumber: 0,
      filePayment: [],
      filepaymentForm: [],
    };
  },
  created() {
    const loading = this.$vs.loading({});
    setTimeout(() => {
      loading.close();
    }, 1000);
  },
  mounted() {
    this.getPaymentBuilding();
  },
  methods: {
    getPaymentBuilding() {
      const loading = this.$vs.loading();
      fetch(
        "https://api.resguru.app/api" +
          "/building-pay-methods?populate=*&filters[building][id][$eq]=" +
          this.$store.state.building
      )
        .then((response) => response.json())
        .then((resp) => {
          console.log("Return from getOther()", resp.data);
          this.buildingPayment = resp.data;
        })
        .finally(() => {
          loading.close();
        });
    },
    tempUploadFilePayment() {
      this.filepaymentForm = this.$refs.fileForm.files[0];
    },
    createPaymentOfBuilding() {
      // if (this.bankName != '' && this.accountBankName != '' && this.accountNumber != '' && this.filepaymentForm.length != 0) {
      if (this.bankName != "" && this.accountBankName != "") {
        axios
          .post(`https://api.resguru.app/api/building-pay-methods/`, {
            data: {
              bankName: this.bankName,
              accountName: this.accountBankName,
              accountNumber: this.accountNumber,
              building: this.$store.state.building,
            },
          })
          .then((resp) => {
            if (this.filepaymentForm.length != 0) {
              let formData = new FormData();
              formData.append("files", this.filepaymentForm);
              formData.append("refId", String(resp.data.data.id));
              formData.append(
                "ref",
                "api::building-pay-method.building-pay-method"
              );
              formData.append("field", "QRCode");

              axios
                .post("https://api.resguru.app/api/upload", formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                .then((result) => {
                  console.log("Upload file", result);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
            this.getPaymentBuilding();
          })
          .catch((error) => {
            const errorMessage = error.message
              ? error.message
              : "Error updating information";
            this.$showNotification("danger", errorMessage);
          })
          .finally(() => {
            this.create = false;
            this.$showNotification("#3A89CB", "Create Payment Success");
          });
      } else {
        this.$showNotification("danger", "Please fill this form");
      }
    },
    updateUserBuildingPayment(buildingID) {
      axios
        .put(`https://api.resguru.app/api/building-pay-methods/${buildingID}`, {
          data: {
            waterUnitPrice: this.waterUnitPrice,
          },
        })
        .then((resp) => {
          console.log(resp);
        })
        .catch((error) => {
          const errorMessage = error.message
            ? error.message
            : "Error updating information";
          this.$showNotification("danger", errorMessage);
        })
        .finally(() => {
          this.getPaymentBuilding();
          this.$showNotification("#3A89CB", "Update Building Payment Success");
        });
    },
    editPaymentImagewithUpload(Editid) {
      console.log("payment Image", this.$refs.paymentImage);
      console.log("ID", Editid);
      // this.filePayment = this.$refs.paymentImage.files[0]
      // if(this.filePayment.length != 0){
      //             let formData = new FormData();
      //             formData.append("files", this.filePayment);
      //             formData.append("refId", String(Editid));
      //             formData.append("ref", "api::building-pay-method.building-pay-method");
      //             formData.append("field", "QRCode");

      //             axios.post("https://api.resguru.app/api/upload", formData, {
      //                 headers: {
      //                 "Content-Type": "multipart/form-data",
      //                 },
      //             }).then( (result) => { console.log("Upload file",result)})
      //             .catch((error) => {
      //                         console.log(error);
      //             })
      // }
      // alert("QRCode is uploaded")
    },
    removePayment(adminID) {
      if (confirm("Do you really want to delete this payment method?")) {
        axios
          .delete(
            `https://api.resguru.app/api/building-pay-methods/${adminID}`,
            {}
          )
          .then((resp) => {
            console.log(resp);
          })
          .catch((error) => {
            const errorMessage = error.message
              ? error.message
              : "Error updating information";
            this.$showNotification("danger", errorMessage);
          })
          .finally(() => {
            this.getPaymentBuilding();
            this.$showNotification("#3A89CB", "Delete Payment Method Success");
          });
      }
    },
  },
};
</script>
