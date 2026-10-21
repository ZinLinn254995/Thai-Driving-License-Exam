// Auto-generated 191 Thai Driving Test Questions
// Topic 1: Traffic Signs and Markings (117 Questions) - https://thaidriveexam.com/article-1000000000015
// Topic 2: Traffic Laws (74 Questions) - https://thaidriveexam.com/article-1000000000016

export type QuestionCategory = 'traffic_signs' | 'traffic_laws';

export interface QuestionOption {
  th: string;
  en: string;
  my: string;
  image?: string | null;
  isCorrect: boolean;
}

export interface QuestionItem {
  id: number;
  category: QuestionCategory;
  image?: string | null;
  q_th: string;
  q_en: string;
  q_my: string;
  options: QuestionOption[];
}

export const CATEGORY_LABELS: Record<QuestionCategory, { en: string; my: string; th: string }> = {
  traffic_signs: {
    en: 'Traffic Signs and Markings',
    my: 'ဆိုင်းဘုတ်နှင့် လမ်းအမှတ်အသားများ',
    th: 'ป้ายและเครื่องหมายจราจร'
  },
  traffic_laws: {
    en: 'Traffic Laws',
    my: 'ယာဉ်စည်းကမ်း လမ်းစည်းကမ်း ဥပဒေများ',
    th: 'กฎหมายจราจร'
  }
};

export const QUESTIONS_BANK: QuestionItem[] = [
  {
    "id": 1,
    "category": "traffic_signs",
    "image": "/exam_images/q_001.webp",
    "q_th": "จากภาพเส้นแบ่งช่องทางบนพื้นถนน หมายความว่าอย่างไร",
    "q_en": "From the image, what does the lane dividing line on the road surface mean?",
    "q_my": "ပုံပါ လမ်းမျက်နှာပြင်ပေါ်ရှိ ယာဉ်ကြောခွဲမျဉ်းအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ผู้ขับขี่กลับรถได้",
        "en": "U-turn permitted",
        "my": "ယာဉ်မောင်းသူများ ယူကွေ့ (U-turn) ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามผู้ขับขี่แซงเข้าไปในทางเดินรถด้านขวา",
        "en": "Do not overtake into the right lane",
        "my": "ညာဘက်ယာဉ်ကြောသို့ကျော်တက်ခြင်းမပြုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ผู้ขับขี่เลี้ยวขวาได้",
        "en": "Right turn permitted",
        "my": "ယာဉ်မောင်းသူများ ညာဘက်သို့ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่จอดรถได้",
        "en": "Parking permitted",
        "my": "ယာဉ်ရပ်နားခွင့်ရှိသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 2,
    "category": "traffic_signs",
    "image": "/exam_images/q_002.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามเลี้ยวขวา",
        "en": "No right turn",
        "my": "ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ใช้ความเร็ว",
        "en": "Minimum speed limit applies",
        "my": "သတ်မှတ်အမြန်နှုန်းအတိုင်း မောင်းနှင်ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เลี้ยวซ้าย",
        "en": "Turn left",
        "my": "ဘယ်ဘက်သို့ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สุดเขตบังคับ",
        "en": "End of restrictions",
        "my": "စည်းကမ်းသတ်မှတ်ချက် ကုန်ဆုံးသည့်နေရာ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 3,
    "category": "traffic_signs",
    "image": "/exam_images/q_003.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถช้าลง และระวังข้างหน้าเป็นสวนสัตว์",
        "en": "Slow down, beware of zoo ahead",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် တိရစ္ဆာန်ဥယျာဉ်ရှိသည်ကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถช้าลง และระมัดระวังอาจมีสัตว์ข้ามทาง",
        "en": "Slow down and watch for crossing animals",
        "my": "အရှိန်လျှော့မောင်းပါ၊ လမ်းဖြတ်ကူးသော တိရစ္ဆာန်များရှိနိုင်သဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถช้าลง และระวังเด็กนักเรียน",
        "en": "Slow down and watch for schoolchildren",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ကျောင်းသားကျောင်းသူများကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถช้าลง และระมัดระวังคนข้ามถนน",
        "en": "Slow down and watch for pedestrians crossing",
        "my": "အရှိန်လျှော့မောင်းပါ၊ လမ်းဖြတ်ကူးသူများကို သတိထားပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 4,
    "category": "traffic_signs",
    "image": "/exam_images/q_004.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ห้ามเดินรถตรงไปทางเดียว",
        "en": "Do not go straight only",
        "my": "တည့်တည့်တစ်လမ်းမောင်း မောင်းနှင်ခြင်းမပြုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เดินรถทางเดียวไปทางขวา",
        "en": "One-way traffic to the right",
        "my": "ညာဘက်သို့ တစ်လမ်းမောင်းအတိုင်း မောင်းနှင်ရန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้เดินรถไปทางซ้ายได้ทางเดียว",
        "en": "One-way traffic to the left only",
        "my": "ဘယ်ဘက်သို့ တစ်လမ်းမောင်းသာ မောင်းနှင်ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเดินรถไปทางขวา",
        "en": "No traffic to the right",
        "my": "ညာဘက်သို့ သွားလာခြင်းမပြုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 5,
    "category": "traffic_signs",
    "image": "/exam_images/q_005.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ห้ามขับรถทุกชนิดเข้าไปในทิศทางที่ติดตั้งป้าย",
        "en": "No entry for all vehicles past this sign",
        "my": "ဆိုင်းဘုတ်ရှိသည့်ဘက်သို့ မည်သည့်ယာဉ်မျှ မဝင်ရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามเฉพาะรถเก๋งเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "Passenger cars prohibited in this area",
        "my": "ဆိုင်းဘုတ်ရှိသည့် ဧရိယာအတွင်းသို့ အိမ်စီးကားများ မဝင်ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถเข้าไปได้ในเขตที่ติดตั้งป้าย",
        "en": "Vehicles permitted to enter this area",
        "my": "ဆိုင်းဘုတ်ရှိသည့် ဧရိယာအတွင်းသို့ မော်တော်ယာဉ်များ ဝင်ရောက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้คนเดินเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "Pedestrians only in this area",
        "my": "ဆိုင်းဘုတ်ရှိသည့် ဧရိယာအတွင်းသို့ လမ်းလျှောက်သူများ ဝင်ရောက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 6,
    "category": "traffic_signs",
    "image": "/exam_images/q_006.webp",
    "q_th": "เครื่องหมายนี้ หมายความว่าอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်ကို ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ห้ามเลี้ยวซ้ายหรือเลี้ยวขวา",
        "en": "No left or right turn",
        "my": "ဘယ်ဘက် (သို့) ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถไปทางเดียวด้านซ้าย",
        "en": "One-way traffic to the left",
        "my": "ဘယ်ဘက်ခြမ်း တစ်လမ်းမောင်းအတိုင်း မောင်းနှင်ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เส้นทึบห้ามผ่าน แต่เส้นประอาจแซงได้เมื่อเห็นว่าปลอดภัย",
        "en": "Do not cross solid line; dashed line may overtake when safe",
        "my": "မျဉ်းဖြောင့်အပိတ်ကို မကျော်ရ၊ သို့သော် မျဉ်းပြတ်ဘက်မှ ဘေးကင်းပါက ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามขับรถตรงไปหรือเลี้ยวขวา",
        "en": "No straight through or right turn",
        "my": "တည့်တည့်မောင်းနှင်ခြင်း သို့မဟုတ် ညာဘက်သို့ကွေ့ခြင်း မပြုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 7,
    "category": "traffic_signs",
    "image": "/exam_images/q_007.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "เพิ่มความระมัดระวัง แล้วจอดรถ",
        "en": "Proceed with caution and park",
        "my": "ပိုမိုသတိထား၍ ယာဉ်ကိုရပ်နားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลงถ้าเห็นว่าไม่ปลอดภัยต่อรถคันอื่น หรือคนเดินเท้าในทางข้างหน้า ต้องหยุดรถก่อนถึงเส้นให้ทาง",
        "en": "Slow down; if unsafe for other vehicles or pedestrians, stop before the give-way line",
        "my": "အရှိန်လျှော့မောင်းပါ၊ အခြားယာဉ်များနှင့် လမ်းလျှောက်သူများအတွက် အန္တရာယ်ရှိပါက လမ်းပေးမျဉ်းမတိုင်မီ ရပ်တန့်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพิ่มความระมัดระวัง แล้วหยุดรถ",
        "en": "Proceed with caution and stop",
        "my": "ပိုမိုသတိထား၍ ယာဉ်ကိုရပ်တန့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพิ่มความระมัดระวัง เขตหยุดรับ-ส่ง",
        "en": "Caution: passenger pick-up and drop-off zone",
        "my": "ပိုမိုသတိထားပါ၊ ခရီးသည်တင်/ချ ရပ်နားဇုန်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 8,
    "category": "traffic_signs",
    "image": "/exam_images/q_008.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ห้ามกลับรถไปทางขวา",
        "en": "No right U-turn",
        "my": "ညာဘက်သို့ ယူကွေ့ (U-turn) မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้กลับรถไปทางขวา",
        "en": "U-turn to the right",
        "my": "ညာဘက်သို့ ယူကွေ့ (U-turn) ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ทางแก่รถหรือคนเดินเท้าบนทางขวางหน้าผ่านไปก่อน",
        "en": "Give way to crossing vehicles or pedestrians first",
        "my": "ရှေ့လမ်းဆုံရှိ ယာဉ်များ သို့မဟုတ် လမ်းလျှောက်သူများကို ဦးစားပေးလမ်းဖယ်ပေးပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามกลับรถไปทางซ้าย",
        "en": "No left U-turn",
        "my": "ဘယ်ဘက်သို့ ယူကွေ့ (U-turn) မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 9,
    "category": "traffic_signs",
    "image": "/exam_images/q_009.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ให้ขับรถช้าลง และระมัดระวัง เครื่องจักรกำลังทำงาน",
        "en": "Slow down and watch for machinery in operation",
        "my": "အရှိန်လျှော့မောင်းပါ၊ စက်ယန္တရားများ အလုပ်လုပ်နေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวัง คนงานกำลังทำงาน",
        "en": "Slow down and watch for road workers",
        "my": "အရှိန်လျှော့မောင်းပါ၊ အလုပ်သမားများ လုပ်ကိုင်နေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวัง ข้างหน้ามีงานสำรวจทาง",
        "en": "Slow down and watch for road survey work ahead",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် လမ်းတိုင်းတာစစ်ဆေးနေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวังคนงานกำลัง สำรวจสิ่งก่อสร้าง",
        "en": "Slow down and watch for construction survey work",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ဆောက်လုပ်ရေးစစ်ဆေးမှုများ လုပ်ဆောင်နေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 10,
    "category": "traffic_signs",
    "image": "/exam_images/q_010.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลงและสามารถกลับรถได้เมื่อปลอดภัย",
        "en": "Slow down and U-turn when safe",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ဘေးကင်းပါက ယူကွေ့ (U-turn) ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลงและสามารถกลับรถได้เฉพาะรถยนต์",
        "en": "Slow down; U-turn permitted for passenger cars only",
        "my": "အရှိန်လျှော့မောင်းပါ၊ မော်တော်ကားများသာ ယူကွေ့ (U-turn) ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ห้ามกลับรถ",
        "en": "Slow down, no U-turn",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ယူကွေ့ (U-turn) မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลงและให้เลี้ยวซ้ายได้",
        "en": "Slow down and left turn permitted",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ဘယ်ဘက်သို့ ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 11,
    "category": "traffic_signs",
    "image": "/exam_images/q_011.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ให้เลี้ยวขวา",
        "en": "Turn right",
        "my": "ညာဘက်သို့ကွေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เลี้ยวซ้าย",
        "en": "Turn left",
        "my": "ဘယ်ဘက်သို့ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวซ้าย",
        "en": "No left turn",
        "my": "ဘယ်ဘက်သို့မကွေ့ရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามเลี้ยวขวา",
        "en": "No right turn",
        "my": "ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 12,
    "category": "traffic_signs",
    "image": "/exam_images/q_012.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ต้องหยุดให้รถและคนเดินเท้าในทางขวางหน้าผ่านไปก่อน เมื่อเห็นว่าปลอดภัยแล้ว จึงขับรถต่อไปได้",
        "en": "Must stop to let vehicles and pedestrians on the cross road pass first; proceed only when safe",
        "my": "ရှေ့မှဖြတ်သန်းသွားသော ယာဉ်များနှင့် လမ်းလျှောက်သူများကို ဦးစွာသွားခွင့်ပြုရန် ရပ်ရမည်၊ ဘေးကင်းမှသာ ဆက်လက်မောင်းနှင်ရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ขับรถไปได้เฉพาะรถเก๋ง เพราะเป็นทางเอก",
        "en": "Only passenger cars are allowed to proceed because it is a major road",
        "my": "ပင်မလမ်းဖြစ်သောကြောင့် အိမ်စီးကားငယ်များကိုသာ မောင်းနှင်ခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามหยุดรถทุกชนิด",
        "en": "No stopping for all types of vehicles",
        "my": "မည်သည့်ယာဉ်မျှ မရပ်ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ลดความเร็วลง และขับต่อไปช้าๆ",
        "en": "Reduce speed and proceed slowly",
        "my": "အရှိန်လျှော့ပြီး ဖြည်းဖြည်းချင်း ဆက်လက်မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 13,
    "category": "traffic_signs",
    "image": "/exam_images/q_013.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ขับรถด้วยความเร็ว เพราะมีหินร่วง",
        "en": "Slow down and be extra cautious, drive fast due to falling rocks",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ကျောက်တုံးပြုတ်ကျမှုရှိသဖြင့် အရှိန်ဖြင့်မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวังให้ปลดเกียร์ หรือดับเครื่องทันทีเพื่อความปลอดภัย",
        "en": "Slow down and be extra cautious, shift into neutral or turn off the engine immediately for safety",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ဘေးကင်းစေရန်အတွက် ဂီယာဖြုတ်ပါ သို့မဟုတ် ချက်ချင်းအင်ဂျင်ပိတ်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังอันตรายจากรถที่สวนมา ทางข้างหน้าเป็นทางขึ้นลาดชัน",
        "en": "Slow down and watch for oncoming traffic; steep uphill ahead",
        "my": "အရှိန်လျှော့ပြီး မျက်နှာချင်းဆိုင်ယာဉ်များကို သတိပြုပါ၊ ရှေ့တွင် မတ်စောက်သော ကုန်းတက်လမ်းရှိသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวังทางลงลาดชันให้ใช้เกียร์ว่าง",
        "en": "Slow down and be extra cautious on steep downhill, use neutral gear",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ မတ်စောက်သော ကုန်းဆင်းတွင် ဂီယာဖရီး (Neutral) အသုံးပြုပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 14,
    "category": "traffic_signs",
    "image": "/exam_images/q_014.webp",
    "q_th": "เครื่องหมายขอบทางสีขาว-แดง หมายความว่าอะไร",
    "q_en": "What does the red-and-white curb marking mean?",
    "q_my": "အနီ-အဖြူ လမ်းဘေးဘောင်အမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်နည်း။",
    "options": [
      {
        "th": "ห้ามหยุดห้ามจอดรถทุกชนิด",
        "en": "No stopping and no parking for all types of vehicles",
        "my": "မည်သည့်ယာဉ်မျှ လုံးဝမရပ်ရ၊ ယာဉ်မရပ်နားရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามจอดรถทุกชนิดยกเว้นรถยนต์",
        "en": "No parking for all types of vehicles except passenger cars",
        "my": "မော်တော်ကားမှလွဲ၍ မည်သည့်ယာဉ်မျှ မရပ်နားရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามจอดแต่หยุดได้ชั่วขณะ",
        "en": "No parking, but temporary stopping is allowed",
        "my": "ယာဉ်မရပ်နားရ၊ သို့သော် ခေတ္တခဏရပ်တန့်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามหยุดแต่สามารถจอดรถได้ทุกชนิด",
        "en": "No stopping, but parking is permitted for all types of vehicles",
        "my": "ခေတ္တမရပ်ရ၊ သို့သော် မည်သည့်ယာဉ်မဆို ရပ်နားထားနိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 15,
    "category": "traffic_signs",
    "image": "/exam_images/q_015.webp",
    "q_th": "เครื่องหมายนี้หมายความว่าอะไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်နည်း။",
    "options": [
      {
        "th": "ทางข้างหน้าเป็นทางแคบลง",
        "en": "Road narrows ahead",
        "my": "ရှေ့တွင် လမ်းကျဉ်းပါမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางข้างหน้ามีทางเอกตัดกัน",
        "en": "Crossroad with major road ahead",
        "my": "ရှေ့တွင် ပင်မလမ်းမကြီး လမ်းဆုံလမ်းခွရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางข้างหน้าจะเป็นทางแยก มีวงเวียน",
        "en": "Roundabout intersection ahead",
        "my": "ရှေ့တွင် အဝိုင်းပတ်လမ်းဆုံရှိသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางข้างหน้าเป็นทางแยก",
        "en": "Intersection ahead",
        "my": "ရှေ့တွင် လမ်းခွဲ/လမ်းဆုံရှိသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 16,
    "category": "traffic_signs",
    "image": "/exam_images/q_016.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังทางข้างหน้ามีทางคู่ข้างหน้า",
        "en": "Slow down and be careful; dual carriageway ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပြုမောင်းနှင်ပါ၊ ရှေ့တွင် တွဲဖက်လမ်း (Dual Carriageway) ရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังทางข้างหน้ามีทางร่วมด้านซ้าย",
        "en": "Slow down and be cautious; side road joins from the left ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပြုမောင်းနှင်ပါ၊ ရှေ့ဘယ်ဘက်တွင် လမ်းဆုံလမ်းခွရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังทางข้างหน้าอาจมีรถเข้ามาร่วมจากทางขวา",
        "en": "Slow down and be cautious; traffic may merge from the right ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပြုမောင်းနှင်ပါ၊ ရှေ့ညာဘက်မှ ယာဉ်များပေါင်းဝင်လာနိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังทางข้างหน้ามีทางเอกตัดกัน",
        "en": "Slow down and be cautious; major crossroad ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပြုမောင်းနှင်ပါ၊ ရှေ့တွင် ပင်မလမ်းဖြတ်လမ်းဆုံရှိသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 17,
    "category": "traffic_signs",
    "image": "/exam_images/q_017.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ให้ขับรถช้าลง และชิดซ้าย ขับรถไปตามทางโค้งกลับรัศมีแคบเริ่มซ้าย",
        "en": "Slow down, keep left, and follow the hairpin curve starting to the left",
        "my": "အရှိန်လျှော့၍ ဘယ်ဘက်ကပ်ပါ၊ ဘယ်ဘက်မှစသော အကွေ့ကျဉ်းကွေ့အတိုင်း မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และชิดซ้ายด้วยความระมัดระวัง ทางข้างหน้าเป็นทางคดเคี้ยวเริ่มซ้าย",
        "en": "Slow down and carefully keep left; winding road ahead starting to the left",
        "my": "အရှိန်လျှော့ပြီး သတိဖြင့် ဘယ်ဘက်ကပ်မောင်းပါ၊ ရှေ့တွင် ဘယ်ဘက်မှစတင်သော ကွေ့ကောက်သည့်လမ်းရှိသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ขับรถช้าลง และชิดซ้าย ขับรถไปตามทางโค้งกลับรัศมีแคบเริ่มขวา",
        "en": "Slow down, keep left, and follow the hairpin curve starting to the right",
        "my": "အရှိန်လျှော့၍ ဘယ်ဘက်ကပ်ပါ၊ ညာဘက်မှစသော အကွေ့ကျဉ်းကွေ့အတိုင်း မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และชิดขวา ขับรถไปตามทางคดเคี้ยวเริ่มซ้าย",
        "en": "Slow down, keep right, and follow the winding road starting to the left",
        "my": "အရှိန်လျှော့၍ ညာဘက်ကပ်ပါ၊ ဘယ်ဘက်မှစတင်သော ကွေ့ကောက်သည့်လမ်းအတိုင်း မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 18,
    "category": "traffic_signs",
    "image": "/exam_images/q_018.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้าเป็นทางลงลาดชัน",
        "en": "Slow down and be extra cautious; steep downhill ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ရှေ့တွင် မတ်စောက်သော ကုန်းဆင်းလမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้ามีสะพานแคบ",
        "en": "Slow down and be extra cautious; narrow bridge ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ရှေ့တွင် တံတားကျဉ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้าต้องใช้ทางเบี่ยงซ้าย",
        "en": "Slow down and be extra cautious; detour to the left ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ရှေ့တွင် ဘယ်ဘက်လမ်းလွှဲကို အသုံးပြုရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้าเป็นทางขึ้นลาดชัน",
        "en": "Slow down and be extra cautious; steep uphill ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ရှေ့တွင် မတ်စောက်သော ကုန်းတက်လမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 19,
    "category": "traffic_signs",
    "image": "/exam_images/q_019.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ห้ามใช้เสียง",
        "en": "No horn / quiet zone",
        "my": "ဟွန်းမတီးရ / အသံမပြုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้หยุดรถ",
        "en": "Stop",
        "my": "ယာဉ်ကို ရပ်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ใช้เสียงได้",
        "en": "Horn allowed",
        "my": "ဟွန်းတီးနိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามจอดรถ",
        "en": "No parking",
        "my": "ယာဉ်မရပ်နားရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 20,
    "category": "traffic_signs",
    "image": "/exam_images/q_020.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถชิดไปด้านซ้ายด้วยความระมัดระวัง ทางข้างหน้าเป็นทางแคบด้านขวา",
        "en": "Carefully keep left; road narrows on the right ahead",
        "my": "သတိဖြင့် ဘယ်ဘက်သို့ကပ်မောင်းပါ၊ ရှေ့တွင် ညာဘက်ခြမ်းလမ်းကျဉ်းပါမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถชิดไปด้านซ้ายด้วยความระมัดระวัง ทางข้างหน้าเป็นทางลงลาดชัน",
        "en": "Carefully keep left; steep downhill ahead",
        "my": "သတိဖြင့် ဘယ်ဘက်သို့ကပ်မောင်းပါ၊ ရှေ့တွင် မတ်စောက်သော ကုန်းဆင်းလမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถชิดไปด้านซ้ายด้วยความระมัดระวัง ทางข้างหน้าเป็นทางแคบด้านซ้าย",
        "en": "Carefully keep left; road narrows on the left ahead",
        "my": "သတိဖြင့် ဘယ်ဘက်သို့ကပ်မောင်းပါ၊ ရှေ့တွင် ဘယ်ဘက်ခြမ်းလမ်းကျဉ်းပါမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถชิดไปด้านซ้ายด้วยความระมัดระวัง ทางข้างหน้าเป็นทางคู่มีเกาะ",
        "en": "Carefully keep left; divided highway with median ahead",
        "my": "သတိဖြင့် ဘယ်ဘက်သို့ကပ်မောင်းပါ၊ ရှေ့တွင် လမ်းလယ်ကျွန်းပါသော တွဲဖက်လမ်းရှိသည်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 21,
    "category": "traffic_signs",
    "image": "/exam_images/q_021.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ทางข้าม",
        "en": "Pedestrian crossing / crosswalk",
        "my": "လူကူးမျဉ်းကြား / လမ်းဖြတ်ကူးရာနေရာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บริเวณคนข้ามถนน",
        "en": "Pedestrian crossing zone",
        "my": "လူဖြတ်ကူးသော ဧရိယာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เฉพาะคนเดิน",
        "en": "Pedestrians only",
        "my": "ခြေလျင်လျှောက်သူများသာ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามคนผ่าน",
        "en": "No pedestrians",
        "my": "ခြေလျင်ဖြတ်သန်းသွားလာခြင်း မပြုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 22,
    "category": "traffic_signs",
    "image": "/exam_images/q_022.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และระมัดระวัง ทางข้างหน้ามีทางแคบ",
        "en": "Slow down and proceed with caution; road narrows ahead",
        "my": "အရှိန်လျှော့၍ သတိပြုမောင်းနှင်ပါ၊ ရှေ့တွင် လမ်းကျဉ်းပါသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวัง ทางข้างหน้ามีทางแคบด้านซ้าย",
        "en": "Slow down and proceed with caution; road narrows on the left ahead",
        "my": "အရှိန်လျှော့၍ သတိပြုမောင်းနှင်ပါ၊ ရှေ့တွင် ဘယ်ဘက်လမ်းကျဉ်းပါသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวัง รถที่สวนมาจากอีกฝั่งหนึ่งของสะพาน",
        "en": "Slow down and watch for oncoming traffic from the other side of the bridge",
        "my": "အရှိန်လျှော့၍ သတိပြုမောင်းနှင်ပါ၊ တံတားတစ်ဖက်မှ လာသော မျက်နှာချင်းဆိုင်ယာဉ်များကို သတိပြုပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวัง ทางข้างหน้ามีช่องการจราจรลดลง",
        "en": "Slow down and proceed with caution; lane reduction ahead",
        "my": "အရှိန်လျှော့၍ သတိပြုမောင်းနှင်ပါ၊ ရှေ့တွင် ယာဉ်ကြောလျော့နည်းသွားမည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 23,
    "category": "traffic_signs",
    "image": "/exam_images/q_023.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง ให้เลี้ยวขวา",
        "en": "Slow down and turn right",
        "my": "အရှိန်လျှော့ပြီး ညာဘက်သို့ ကွေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพิ่มความระมัดระวัง ห้ามเลี้ยวซ้าย",
        "en": "Exercise caution; no left turn",
        "my": "သတိပိုမိုထားပါ၊ ဘယ်ဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถไปทางขวา ให้เลี้ยวซ้าย",
        "en": "Keep right, then turn left",
        "my": "ညာဘက်သို့ မောင်းနှင်ပြီး ဘယ်ဘက်သို့ ကွေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถภายในช่องจราจร ห้ามแซง ห้ามขับรถผ่านหรือคร่อมเส้นโดยเด็ดขาด",
        "en": "Stay in lane; no overtaking; strictly do not cross or straddle lane markings",
        "my": "ယာဉ်ကြောအတွင်းသာ မောင်းပါ၊ ကျော်မတက်ရ၊ ယာဉ်ကြောစည်းမျဉ်းကို ဖြတ်ကျော်ခြင်း လုံးဝမပြုရ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 24,
    "category": "traffic_signs",
    "image": "/exam_images/q_024.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง พร้อมที่จะหยุด สะพานแคบ",
        "en": "Slow down and prepare to stop; narrow bridge",
        "my": "အရှိန်လျှော့ပြီး ရပ်တန့်ရန် အသင့်ပြင်ပါ၊ တံတားကျဉ်းပါသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถเร็วได้ไม่ต้องหยุดรถ ทางข้ามทางรถไฟไม่มีเครื่องกั้น",
        "en": "Can proceed without stopping; railway crossing has no barrier",
        "my": "ကားမရပ်ဘဲ မောင်းနှင်နိုင်သည်၊ ဂိတ်အတားအဆီးမရှိသော မီးရထားသံလမ်းဖြတ်လမ်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง พร้อมที่จะหยุดรถเมื่อมีเสียงสัญญาณหรือมีเครื่องกั้นทางปิดกั้น",
        "en": "Slow down and be prepared to stop when the signal sounds or the barrier is closed",
        "my": "အရှိန်လျှော့ပြီး အချက်ပေးသံမြည်လျှင် သို့မဟုတ် ဂိတ်တံခါးပိတ်ထားပါက ရပ်တန့်ရန် အသင့်ပြင်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง พร้อมที่จะหยุด ทางข้างหน้า ไม่มีเครื่องกั้น",
        "en": "Slow down and prepare to stop; uncontrolled crossing ahead (no barrier)",
        "my": "အရှိန်လျှော့ပြီး ရပ်တန့်ရန် အသင့်ပြင်ပါ၊ ရှေ့တွင် အတားအဆီးမရှိပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 25,
    "category": "traffic_signs",
    "image": "/exam_images/q_025.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้าเป็นทางขึ้นลาดชัน",
        "en": "Slow down and be extra cautious; steep uphill ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ရှေ့တွင် မတ်စောက်သော ကုန်းတက်လမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้ามีสะพานแคบ",
        "en": "Slow down and be extra cautious; narrow bridge ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ရှေ့တွင် တံတားကျဉ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้าเป็นทางลงลาดชัน",
        "en": "Slow down and be extra cautious; steep downhill ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပိုထားပါ၊ ရှေ့တွင် မတ်စောက်သော ကုန်းဆင်းလမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้าต้องใช้ทางเบี่ยงขวา",
        "en": "Slow down and exercise caution; detour to the right ahead",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ ရှေ့တွင် ညာဘက်လမ်းလွှဲကို အသုံးပြုရမည်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 26,
    "category": "traffic_signs",
    "image": "/exam_images/q_026.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางข้างหน้าสูงกว่า 2.50 เมตร ให้ผ่านได้",
        "en": "Slow down and exercise caution; height clearance ahead is over 2.50 meters, passage allowed",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ ရှေ့တွင် အမြင့် ၂.၅၀ မီတာထက်ကျော်ပြီး ဖြတ်သန်းခွင့်ရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางข้างหน้าลอดต่ำกว่า 2.50 เมตรให้ผ่านได้",
        "en": "Slow down and exercise caution; underpass ahead is lower than 2.50 meters, passage allowed",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ ရှေ့တွင် အမြင့် ၂.၅၀ မီတာအောက် လျှောက်လမ်းအား ဖြတ်သန်းခွင့်ရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง รถมีขนาดกว้างไม่เกิน 2.50 เมตร ให้ผ่านได้",
        "en": "Slow down and exercise caution; vehicles not exceeding 2.50 meters in width may pass",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ ယာဉ်အကျယ် ၂.၅၀ မီတာထက် မပိုသောယာဉ်များသာ ဖြတ်သန်းခွင့်ရှိသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางข้างหน้ากว้างเกิน 2.50 เมตร ให้ผ่านได้",
        "en": "Slow down and exercise caution; road width ahead exceeds 2.50 meters, passage allowed",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ ရှေ့တွင် လမ်းအကျယ် ၂.၅၀ မီတာထက် ပိုကျယ်ပြီး ဖြတ်သန်းခွင့်ရှိသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 27,
    "category": "traffic_signs",
    "image": "/exam_images/q_027.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางเอกแยกทางเอกทางซ้าย",
        "en": "Slow down and exercise caution; major road junctions with another major road on the left",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ အဓိကလမ်းမကြီးမှ ဘယ်ဘက်အဓိကလမ်းမကြီးသို့ လမ်းခွဲပါသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางโทแยกทางโททางขวา",
        "en": "Slow down and exercise caution; minor road junctions with another minor road on the right",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ လမ်းသွယ်မှ ညာဘက်လမ်းသွယ်သို့ လမ်းခွဲပါသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางข้างหน้ามีทางโทแยกไปทางขวา",
        "en": "Slow down and exercise caution; minor road junction on the right ahead",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ ရှေ့တွင် ညာဘက်သို့ လမ်းသွယ်လမ်းခွဲရှိပါသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางเอกแยกทางเอกทางขวา",
        "en": "Slow down and exercise caution; major road junctions with another major road on the right",
        "my": "အရှိန်လျှော့၍ သတိပိုထားပါ၊ အဓိကလမ်းမကြီးမှ ညာဘက်အဓိကလမ်းမကြီးသို့ လမ်းခွဲပါသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 28,
    "category": "traffic_signs",
    "image": "/exam_images/q_028.webp",
    "q_th": "เครื่องหมายนี้หมายความว่าอะไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်နည်း။",
    "options": [
      {
        "th": "ช่องจราจรปิดทั้งสองด้าน",
        "en": "Lanes closed on both sides",
        "my": "နှစ်ဖက်စလုံး ယာဉ်ကြောပိတ်ထားသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่องจราจรปิดด้านซ้าย",
        "en": "Left lane closed",
        "my": "ဘယ်ဘက် ယာဉ်ကြောပိတ်ထားသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ช่องจราจรปิดด้านขวา",
        "en": "Right lane closed",
        "my": "ညာဘက် ယာဉ်ကြောပိတ်ထားသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่องจราจรลดลงด้านซ้าย",
        "en": "Lane reduction on the left",
        "my": "ဘယ်ဘက် ယာဉ်ကြောလျော့နည်းသွားမည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 29,
    "category": "traffic_signs",
    "image": "/exam_images/q_029.webp",
    "q_th": "เครื่องหมายนี้หมายความว่าอะไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်နည်း။",
    "options": [
      {
        "th": "ทางแคบด้านซ้าย",
        "en": "Road narrows on the left",
        "my": "ဘယ်ဘက် လမ်းကျဉ်းသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางกว้างขึ้นทั้งสองด้าน",
        "en": "Road widens on both sides",
        "my": "နှစ်ဖက်စလုံး လမ်းကျယ်လာသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางแคบทั้งสองด้าน",
        "en": "Road narrows on both sides",
        "my": "နှစ်ဖက်စလုံး လမ်းကျဉ်းသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางแคบด้านขวา",
        "en": "Road narrows on the right",
        "my": "ညာဘက် လမ်းကျဉ်းသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 30,
    "category": "traffic_signs",
    "image": "/exam_images/q_030.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้ชิดขวา",
        "en": "Keep right",
        "my": "ညာဘက်သို့ ကပ်မောင်းပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ชิดซ้าย",
        "en": "Keep left",
        "my": "ဘယ်ဘက်သို့ ကပ်မောင်းပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามชิดซ้าย",
        "en": "Do not keep left",
        "my": "ဘယ်ဘက်သို့ မကပ်ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามชิดขวา",
        "en": "Do not keep right",
        "my": "ညာဘက်သို့ မကပ်ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 31,
    "category": "traffic_signs",
    "image": "/exam_images/q_031.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามรถยนต์ทุกชนิดผ่าน",
        "en": "No motor vehicles allowed",
        "my": "မော်တော်ကားအမျိုးအစားအားလုံး ဖြတ်သန်းခွင့်မပြု",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถจักรยานยนต์ผ่าน",
        "en": "Motorcycles allowed",
        "my": "မော်တော်ဆိုင်ကယ်များ ဖြတ်သန်းခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามรถจักรยานยนต์ผ่าน",
        "en": "No motorcycles",
        "my": "မော်တော်ဆိုင်ကယ်များ ဖြတ်သန်းခွင့်မပြု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้รถยนต์ทุกชนิดผ่าน",
        "en": "All motor vehicles allowed",
        "my": "မော်တော်ကားအမျိုးအစားအားလုံး ဖြတ်သန်းခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 32,
    "category": "traffic_signs",
    "image": "/exam_images/q_032.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามขับรถตรงไปหรือเลี้ยวขวา ห้ามเปลี่ยนช่องการจราจร",
        "en": "Do not go straight or turn right; do not change lanes",
        "my": "တည့်တည့်မောင်းခြင်း သို့မဟုတ် ညာဘက်ကွေ့ခြင်း မပြုရ၊ ယာဉ်ကြောမပြောင်းရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สามารถเปลี่ยนช่องเดินรถหรือช่องจราจรหรือสามารถแซงได้",
        "en": "Lanes may be changed or overtaking is permitted",
        "my": "ယာဉ်ကြောပြောင်းနိုင်သည် သို့မဟုတ် ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามเลี้ยวซ้ายหรือเลี้ยวขวา ห้ามเปลี่ยนช่องการจราจร",
        "en": "No left or right turns, no lane changes",
        "my": "ဘယ်ကွေ့၊ ညာကွေ့မပြုရ၊ ယာဉ်ကြောမပြောင်းရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถไปทางเดียวด้านซ้าย ห้ามเปลี่ยนช่องการจราจร",
        "en": "One-way traffic to the left, no lane changes",
        "my": "ဘယ်ဘက်တစ်လမ်းမောင်းသွားပါ၊ ယာဉ်ကြောမပြောင်းရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 33,
    "category": "traffic_signs",
    "image": "/exam_images/q_033.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้เลี้ยวซ้ายหรือกลับรถ",
        "en": "Turn left or make a U-turn",
        "my": "ဘယ်ဘက်သို့ကွေ့ပါ သို့မဟုတ် ယာဉ်ကိုအလှည့်ယူပါ (U-turn)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวซ้ายหรือกลับรถ",
        "en": "No left turns or U-turns",
        "my": "ဘယ်ကွေ့ခြင်းနှင့် ယာဉ်အလှည့်ယူခြင်း (U-turn) မပြုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้เลี้ยวขวาหรือกลับรถ",
        "en": "Turn right or make a U-turn",
        "my": "ညာဘက်သို့ကွေ့ပါ သို့မဟုတ် ယာဉ်ကိုအလှည့်ယူပါ (U-turn)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวขวาหรือกลับรถ",
        "en": "No right turns or U-turns",
        "my": "ညာကွေ့ခြင်းနှင့် ယာဉ်အလှည့်ယူခြင်း (U-turn) မပြုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 34,
    "category": "traffic_signs",
    "image": "/exam_images/q_034.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถได้อย่างรวดเร็วเพราะไม่มีสิ่งกีดขวาง",
        "en": "Drive fast as there are no obstacles",
        "my": "အတားအဆီးမရှိသဖြင့် အရှိန်ပြင်းစွာမောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ถ้ามีรถไฟกำลังจะผ่าน ให้หยุดรถห่างจากทางรถไฟอย่างน้อย 5 เมตร",
        "en": "Slow down; if a train is approaching, stop at least 5 meters from the railway track",
        "my": "အရှိန်လျှော့ပါ၊ ရထားဖြတ်သန်းမည်ဆိုပါက ရထားလမ်းနှင့် အနည်းဆုံး ၅ မီတာအကွာတွင် ကားကိုရပ်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถด้วยความเร็วปกติ แต่ให้ระวังรถไฟกำลังผ่าน",
        "en": "Drive at normal speed, but watch out for passing trains",
        "my": "ပုံမှန်အရှိန်ဖြင့်မောင်းပါ၊ သို့သော် ဖြတ်သန်းနေသောရထားကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถอย่างรวดเร็ว เพราะมีรถไฟกำลังผ่าน",
        "en": "Drive fast because a train is passing",
        "my": "ရထားဖြတ်သန်းနေသဖြင့် အရှိန်မြှင့်၍ မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 35,
    "category": "traffic_signs",
    "image": "/exam_images/q_035.webp",
    "q_th": "เครื่องหมายนี้หมายความว่าอะไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်နည်း။",
    "options": [
      {
        "th": "เขตห้ามแซง",
        "en": "No overtaking zone",
        "my": "ကျော်တက်ခြင်းမပြုရဇုန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เขตแซงได้",
        "en": "Overtaking permitted zone",
        "my": "ကျော်တက်နိုင်သောဇုန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เขตให้หยุดรถ",
        "en": "Stop zone",
        "my": "ယာဉ်ရပ်တန့်ရမည့်ဇုန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เขตให้ทาง",
        "en": "Give way / Yield zone",
        "my": "လမ်းဦးစားပေးရမည့်ဇုန်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 36,
    "category": "traffic_signs",
    "image": "/exam_images/q_036.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้รถทุกชนิดน้ำหนักเกิน 10 ตันผ่าน",
        "en": "Vehicles over 10 tons permitted",
        "my": "အလေးချိန် ၁၀ တန်ထက်ကျော်သော မည်သည့်ယာဉ်မဆို ဖြတ်သန်းခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถทุกชนิดกว้างเกินกำหนดผ่าน",
        "en": "Overwidth vehicles permitted",
        "my": "သတ်မှတ်ချက်ထက် အကျယ်ပိုသော မည်သည့်ယာဉ်မဆို ဖြတ်သန်းခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามรถทุกชนิดน้ำหนักเกิน 10 ตันผ่าน",
        "en": "No vehicles over 10 tons",
        "my": "အလေးချိန် ၁၀ တန်ထက်ကျော်သော မည်သည့်ယာဉ်မျှ ဖြတ်သန်းခွင့်မပြု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามรถทุกชนิดยาวเกินกำหนดผ่าน",
        "en": "No vehicles exceeding the maximum length",
        "my": "သတ်မှတ်ချက်ထက် အလျားပိုရှည်သော မည်သည့်ယာဉ်မျှ ဖြတ်သန်းခွင့်မပြု",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 37,
    "category": "traffic_signs",
    "image": "/exam_images/q_037.webp",
    "q_th": "เครื่องหมายนี้หมายความว่าอะไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်နည်း။",
    "options": [
      {
        "th": "ทางคดเคี้ยว",
        "en": "Winding road",
        "my": "အကွေ့အကောက်များသောလမ်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางขึ้นลาดชัน",
        "en": "Steep hill upwards",
        "my": "မတ်စောက်သော တောင်တက်လမ်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางลงลาดชัน",
        "en": "Steep hill downwards",
        "my": "မတ်စောက်သော တောင်ဆင်းလမ်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สะพานแคบ",
        "en": "Narrow bridge",
        "my": "တံတားကျဉ်း",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 38,
    "category": "traffic_signs",
    "image": "/exam_images/q_038.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้เลี้ยวขวา",
        "en": "Turn right",
        "my": "ညာဘက်သို့ကွေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เลี้ยวซ้าย",
        "en": "Turn left",
        "my": "ဘယ်ဘက်သို့ကွေ့ရန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามเลี้ยวขวา",
        "en": "No right turn",
        "my": "ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวซ้าย",
        "en": "No left turn",
        "my": "ဘယ်ဘက်သို့မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 39,
    "category": "traffic_signs",
    "image": "/exam_images/q_039.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามล้อเลื่อนลากเข็นจอด",
        "en": "No parking for handcarts or trolleys",
        "my": "တွန်းလှည်း၊ လက်တွန်းလှည်းများ ရပ်နားခြင်းမပြုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามจอด",
        "en": "No parking",
        "my": "ယာဉ်မရပ်ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามหยุด",
        "en": "No stopping",
        "my": "ယာဉ်လုံးဝမရပ်ရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้รถจักรยานยนต์จอด",
        "en": "Motorcycle parking",
        "my": "ဆိုင်ကယ်ရပ်နားရန်နေရာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 40,
    "category": "traffic_signs",
    "image": "/exam_images/q_040.webp",
    "q_th": "เครื่องหมายนี้หมายความว่าอะไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်နည်း။",
    "options": [
      {
        "th": "ลานจอดรถภายในสนามบิน",
        "en": "Airport parking lot",
        "my": "လေဆိပ်အတွင်း ယာဉ်ရပ်နားကွင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จุดนัดพบบริเวณสนามบิน",
        "en": "Airport meeting point",
        "my": "လေဆိပ်ချိန်းဆိုတွေ့ဆုံရာနေရာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จุดรับส่งสัมภาระเครื่องบิน",
        "en": "Airport baggage drop-off and pick-up area",
        "my": "လေဆိပ်ခရီးဆောင်အိတ် အတင်အချနေရာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระวังเครื่องบิน บินต่ำ",
        "en": "Low-flying aircraft",
        "my": "လေယာဉ်ပျံအနိမ့် ပျံသန်းနေသဖြင့် သတိပြုရန်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 41,
    "category": "traffic_signs",
    "image": "/exam_images/q_041.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามเลี้ยวขวา",
        "en": "No right turn",
        "my": "ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เลี้ยวขวา",
        "en": "Turn right",
        "my": "ညာဘက်သို့ကွေ့ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้เลี้ยวซ้าย",
        "en": "Turn left",
        "my": "ဘယ်ဘက်သို့ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวซ้าย",
        "en": "No left turn",
        "my": "ဘယ်ဘက်သို့မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 42,
    "category": "traffic_signs",
    "image": "/exam_images/q_042.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้หยุดก่อนถึงเส้นแนวหยุด",
        "en": "Stop before the stop line",
        "my": "မှတ်တိုင်မျဉ်းမရောက်မီ ရပ်ပေးပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ผู้ขับขี่ชะลอความเร็วลง และรีบเร่งเครื่องไปก่อน",
        "en": "Slow down and speed up to pass quickly",
        "my": "အရှိန်လျှော့ပြီး အမြန်ကျော်တက်သွားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ผู้ขับขี่ขับรถอย่างรวดเร็ว",
        "en": "Drive fast",
        "my": "မော်တော်ယာဉ်ကို အမြန်မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ผู้ขับขี่ ขับรถให้ช้าลง แล้วแซงได้",
        "en": "Slow down and overtake",
        "my": "အရှိန်လျှော့ပြီး ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 43,
    "category": "traffic_signs",
    "image": "/exam_images/q_043.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ให้ขับรถช้าลง และระมัดระวัง คนงานกำลังทำงาน",
        "en": "Slow down and watch for road workers",
        "my": "အရှိန်လျှော့မောင်းပါ၊ အလုပ်သမားများ လုပ်ကိုင်နေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวัง ข้างหน้ามีงานสำรวจทาง",
        "en": "Slow down and watch for road survey work ahead",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် လမ်းတိုင်းတာစစ်ဆေးနေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวังคนงานกำลัง สำรวจสิ่งก่อสร้าง",
        "en": "Slow down and watch for construction survey work",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ဆောက်လုပ်ရေးစစ်ဆေးမှုများ လုပ်ဆောင်နေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวัง เครื่องจักรกำลังทำงาน",
        "en": "Slow down and watch for machinery in operation",
        "my": "အရှိန်လျှော့မောင်းပါ၊ စက်ယန္တရားများ အလုပ်လုပ်နေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 44,
    "category": "traffic_signs",
    "image": "/exam_images/q_044.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามเดินรถตรงไปข้างหน้า",
        "en": "No straight ahead",
        "my": "ရှေ့တည့်တည့် မောင်းနှင်ခြင်း တားမြစ်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เดินรถตรงไปข้างหน้าทางเดียว",
        "en": "Go straight only",
        "my": "ရှေ့တည့်တည့်သာ မောင်းနှင်ရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้เดินรถไปทางซ้าย",
        "en": "Keep left",
        "my": "ဘယ်ဘက်သို့ မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเดินรถเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "No entry",
        "my": "အဆိုပါလမ်းအတွင်း ဝင်ရောက်ခြင်း တားမြစ်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 45,
    "category": "traffic_signs",
    "image": "/exam_images/q_045.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ให้ผู้ขับรถเตรียมพร้อมที่จะจอดรถได้",
        "en": "Prepare to stop",
        "my": "ယာဉ်ရပ်ရန် အသင့်ပြင်ထားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลงและระมัดระวังเตรียมพร้อมที่จะหยุดเมื่อถึงป้าย",
        "en": "Slow down and prepare to stop at the sign",
        "my": "အရှိန်လျှော့ပြီး ဆိုင်းဘုတ်ရောက်လျှင် ရပ်ရန် သတိပြုပြင်ဆင်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ผู้ขับรถเตรียมพร้อมที่จะให้ทาง",
        "en": "Prepare to give way",
        "my": "လမ်းဦးစားပေးရန် အသင့်ပြင်ထားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ผู้ขับรถเตรียมพร้อมที่จะเลี้ยวซ้ายได้",
        "en": "Prepare to turn left",
        "my": "ဘယ်ဘက်ကွေ့ရန် အသင့်ပြင်ထားပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 46,
    "category": "traffic_signs",
    "image": "/exam_images/q_046.webp",
    "q_th": "เครื่องหมายนี้ (เส้นสีขาว) คือเครื่องหมายอะไร",
    "q_en": "What is this marking (white line)?",
    "q_my": "ဤအမှတ်အသား (အဖြူရောင်မျဉ်း) သည် မည်သည့်အမှတ်အသားနည်း။",
    "options": [
      {
        "th": "ให้เลี้ยวรถได้",
        "en": "Turn allowed",
        "my": "ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวรถ",
        "en": "No turning",
        "my": "ကွေ့ခြင်း တားမြစ်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เส้นชะลอความเร็ว",
        "en": "Rumble strips",
        "my": "အရှိန်လျှော့ရန် အမှတ်အသားမျဉ်းများ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้จอดรถได้",
        "en": "Parking allowed",
        "my": "ယာဉ်ရပ်နားနိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 47,
    "category": "traffic_signs",
    "image": "/exam_images/q_047.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "เพิ่มความระมัดระวัง และห้ามแซง",
        "en": "Caution: No overtaking",
        "my": "သတိပြုပါ၊ ကျော်တက်ခြင်း တားမြစ်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ขับรถคร่อมเส้นได้",
        "en": "Slow down and lane straddling allowed",
        "my": "အရှိန်လျှော့ပြီး မျဉ်းကိုကျော်၍ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถในช่องการจราจร ห้ามคร่อมเส้น แต่แซงได้",
        "en": "Stay in lane, no straddling, overtaking allowed",
        "my": "လမ်းကြောင်းအတိုင်းမောင်းပါ၊ မျဉ်းမကျော်ရ၊ သို့သော် ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพิ่มความระมัดระวัง ห้ามเปลี่ยนช่องการจราจร",
        "en": "Caution: Do not change lanes",
        "my": "သတိပြုပါ၊ လမ်းကြောင်းမပြောင်းရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 48,
    "category": "traffic_signs",
    "image": "/exam_images/q_048.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้หยุดรถก่อน ในเขตที่มีเครื่องหมายนี้",
        "en": "Stop before the marked area",
        "my": "ဤအမှတ်အသားရှိသည့်နေရာတွင် ရှေးဦးစွာ ရပ်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถแซงคันอื่นได้เลย ในเขตที่มีเครื่องหมายนี้",
        "en": "Overtaking allowed",
        "my": "ဤအမှတ်အသားရှိသောနေရာတွင် အခြားယာဉ်များကို ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามขับรถแซงขึ้นหน้ารถคันอื่น ในเขตทางที่ติดตั้งป้าย",
        "en": "No overtaking",
        "my": "ဤဆိုင်းဘုတ်ရှိသည့်နေရာတွင် အခြားယာဉ်ကို ကျော်တက်ခြင်း တားမြစ်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ทางแก่รถคันอื่นก่อน ในเขตที่มีเครื่องหมายนี้",
        "en": "Give way",
        "my": "ဤအမှတ်အသားရှိသောနေရာတွင် အခြားယာဉ်ကို လမ်းဦးစားပေးပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 49,
    "category": "traffic_signs",
    "image": "/exam_images/q_049.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามกลับรถไปทางขวา",
        "en": "No right U-turn",
        "my": "ညာဘက်သို့ ယူကွေ့ (U-turn) မကွေ့ရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้กลับรถไปทางขวา",
        "en": "U-turn to the right",
        "my": "ညာဘက်သို့ ယူကွေ့ (U-turn) ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามกลับรถไปทางซ้าย",
        "en": "No left U-turn",
        "my": "ဘယ်ဘက်သို့ ယူကွေ့ (U-turn) မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้กลับรถไปทางซ้าย",
        "en": "U-turn to the left",
        "my": "ဘယ်ဘက်သို့ လှည့်ပြန်မောင်းပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 50,
    "category": "traffic_signs",
    "image": "/exam_images/q_050.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามกลับรถไปทางซ้าย",
        "en": "No left U-turn",
        "my": "ဘယ်ဘက်သို့ ယူကွေ့ (U-turn) မကွေ့ရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้กลับรถไปทางซ้าย",
        "en": "U-turn to the left",
        "my": "ဘယ်ဘက်သို့ လှည့်ပြန်မောင်းပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้กลับรถไปทางขวา",
        "en": "U-turn to the right",
        "my": "ညာဘက်သို့ ယူကွေ့ (U-turn) ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามกลับรถไปทางขวา",
        "en": "No right U-turn",
        "my": "ညာဘက်သို့ ယူကွေ့ (U-turn) မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 51,
    "category": "traffic_signs",
    "image": "/exam_images/q_051.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้กลับรถไปทางขวา",
        "en": "U-turn to the right",
        "my": "ညာဘက်သို့ ယူကွေ့ (U-turn) ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามกลับรถไปทางซ้าย",
        "en": "No left U-turn",
        "my": "ဘယ်ဘက်သို့ ယူကွေ့ (U-turn) မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้กลับรถไปทางซ้าย",
        "en": "U-turn to the left",
        "my": "ဘယ်ဘက်သို့ လှည့်ပြန်မောင်းပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวขวา",
        "en": "No right turn",
        "my": "ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 52,
    "category": "traffic_signs",
    "image": "/exam_images/q_052.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามเปลี่ยนช่องเดินรถไปทางขวา",
        "en": "No changing to right lane",
        "my": "ညာဘက်လမ်းကြောင်းသို့ မကူးရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้เปลี่ยนช่องเดินรถไปทางซ้าย",
        "en": "Change to left lane",
        "my": "ဘယ်ဘက်လမ်းကြောင်းသို့ ပြောင်းရွှေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เปลี่ยนช่องเดินรถไปทางขวา",
        "en": "Change to right lane",
        "my": "ညာဘက်လမ်းကြောင်းသို့ ပြောင်းရွှေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเปลี่ยนช่องเดินรถไปทางซ้าย",
        "en": "No changing to left lane",
        "my": "ဘယ်ဘက်လမ်းကြောင်းသို့ မကူးရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 53,
    "category": "traffic_signs",
    "image": "/exam_images/q_053.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ให้เลี้ยวขวาหรือกลับรถ",
        "en": "Turn right or make a U-turn",
        "my": "ညာဘက်သို့ကွေ့ပါ သို့မဟုတ် ယာဉ်ကိုအလှည့်ယူပါ (U-turn)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวขวาหรือกลับรถ",
        "en": "No right turns or U-turns",
        "my": "ညာကွေ့ခြင်းနှင့် ယာဉ်အလှည့်ယူခြင်း (U-turn) မပြုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามเลี้ยวซ้ายหรือกลับรถ",
        "en": "No left turns or U-turns",
        "my": "ဘယ်ကွေ့ခြင်းနှင့် ယာဉ်အလှည့်ယူခြင်း (U-turn) မပြုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เลี้ยวซ้ายหรือกลับรถ",
        "en": "Turn left or make a U-turn",
        "my": "ဘယ်ဘက်သို့ကွေ့ပါ သို့မဟုတ် ယာဉ်ကိုအလှည့်ယူပါ (U-turn)",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 54,
    "category": "traffic_signs",
    "image": "/exam_images/q_054.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ห้ามรถยนต์ผ่านเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "No motor vehicles",
        "my": "မော်တော်ယာဉ်များ ဝင်ရောက်ခွင့်မပြု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามรถทุกชนิดผ่านเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "No vehicles",
        "my": "ယာဉ်အမျိုးအစားအားလုံး ဝင်ရောက်ခွင့်မပြု",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถยนต์ทุกชนิดผ่านเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "Motor vehicles allowed",
        "my": "မော်တော်ယာဉ်များ ဝင်ရောက်ခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถยนต์จอด และหยุดรับ-ส่งได้ในเขตที่ติดตั้งป้าย",
        "en": "Parking and standing allowed",
        "my": "ယာဉ်ရပ်နားခြင်းနှင့် ခရီးသည်တင်/ချခြင်း ခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 55,
    "category": "traffic_signs",
    "image": "/exam_images/q_055.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ห้ามรถบรรทุกทุกชนิดผ่านเข้าออกในเขตทางที่ติดตั้งป้าย",
        "en": "No trucks",
        "my": "ကုန်တင်ယာဉ်များ ဝင်ရောက်ခွင့်မပြု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้รถยนต์ทุกชนิดผ่านเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "Motor vehicles allowed",
        "my": "မော်တော်ယာဉ်များ ဝင်ရောက်ခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถบรรทุกผ่านเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "Trucks allowed",
        "my": "ကုန်တင်ယာဉ်များ ဝင်ရောက်ခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามรถยนต์ทุกชนิดผ่านเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "No motor vehicles",
        "my": "မော်တော်ယာဉ်အမျိုးအစားအားလုံး ဝင်ရောက်ခွင့်မပြု",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 56,
    "category": "traffic_signs",
    "image": "/exam_images/q_056.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ให้รถยนต์ทุกชนิดผ่านเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "Motor vehicles allowed",
        "my": "မော်တော်ယာဉ်များ ဝင်ရောက်ခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามรถยนต์ผ่านเข้าไปในเขตที่ติดตั้งป้าย",
        "en": "No motor vehicles",
        "my": "မော်တော်ယာဉ်များ ဝင်ရောက်ခွင့်မပြု",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามรถจักรยานยนต์และรถยนต์ทุกชนิดผ่านเข้าออก",
        "en": "No motorcycles or motor vehicles",
        "my": "ဆိုင်ကယ်နှင့် မော်တော်ယာဉ်များ ဝင်ရောက်/ထွက်ခွာခွင့်မပြု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามรถยนต์จอด แต่หยุดรับ-ส่งได้ในเขตที่ติดตั้งป้าย",
        "en": "No parking, standing allowed",
        "my": "ယာဉ်ရပ်နားခွင့်မပြု၊ ခရီးသည်တင်/ချခြင်း ခွင့်ပြုသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 57,
    "category": "traffic_signs",
    "image": "/exam_images/q_057.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้หยุดรถ",
        "en": "Stop",
        "my": "ယာဉ်ကို ရပ်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ทาง",
        "en": "Give way",
        "my": "လမ်းဦးစားပေးရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามจอดรถทุกชนิด",
        "en": "No parking",
        "my": "ယာဉ်ရပ်နားခွင့်မပြု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามหยุด",
        "en": "No stopping",
        "my": "ယာဉ်လုံးဝမရပ်ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 58,
    "category": "traffic_signs",
    "image": "/exam_images/q_058.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ห้ามใช้ความเร็วเกิน 50 กิโลเมตรต่อชั่วโมง",
        "en": "Speed limit 50 km/h",
        "my": "တစ်နာရီ ၅၀ ကီလိုမီတာထက် ပိုမိုမောင်းနှင်ခွင့်မပြု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ใช้น้ำหนักไม่เกิน 50 กิโลกรัม",
        "en": "Weight limit 50 kg",
        "my": "အလေးချိန် ၅၀ ကီလိုဂရမ်ထက် မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ใช้ความเร็วเกิน 50 กิโลเมตรต่อชั่วโมง",
        "en": "Minimum speed 50 km/h",
        "my": "တစ်နာရီ ၅၀ ကီလိုမီတာထက် ပိုမိုမောင်းနှင်ရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามใช้เสียงเกิน 50 เดซิเบล A",
        "en": "Noise limit 50 dB(A)",
        "my": "အသံ ၅၀ ဒက်စီဘယ်ထက် ပိုမိုမပြုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 59,
    "category": "traffic_signs",
    "image": "/exam_images/q_059.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ต้องหยุดรถตรงตำแหน่งที่ติดตั้งป้ายและให้รถที่กำลังสวนทางมาผ่านไปก่อน",
        "en": "Stop and give way to oncoming traffic",
        "my": "ဆိုင်းဘုတ်နေရာတွင် ရပ်ပေးပြီး ဆန့်ကျင်ဘက်မှလာသောယာဉ်များကို ဦးစားပေးရန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ลดความเร็วแล้วขับรถเบี่ยงไปทางด้านซ้าย",
        "en": "Slow down and keep left",
        "my": "အရှိန်လျှော့ပြီး ဘယ်ဘက်သို့ ကပ်မောင်းရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามขับรถยนต์ผ่าน",
        "en": "No entry for motor vehicles",
        "my": "မော်တော်ယာဉ်များ ဖြတ်သန်းခွင့်မပြု",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ลดความเร็วแล้วขับรถเบี่ยงไปทางด้านขวา",
        "en": "Slow down and keep right",
        "my": "အရှိန်လျှော့ပြီး ညာဘက်သို့ ကပ်မောင်းရန်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 60,
    "category": "traffic_signs",
    "image": "/exam_images/q_060.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ให้เดินรถทางเดียวไปทางซ้าย",
        "en": "One-way to the left",
        "my": "ဘယ်ဘက်သို့ တစ်လမ်းမောင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ขับรถไปทางขวาเท่านั้น",
        "en": "Keep right",
        "my": "ညာဘက်သို့သာ မောင်းနှင်ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไปได้เฉพาะทางขวาเท่านั้น",
        "en": "Turn right only",
        "my": "ညာဘက်သို့သာ သွားရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามขับรถไปทางขวา",
        "en": "No right turn",
        "my": "ညာဘက်သို့ မောင်းနှင်ခွင့်မပြု",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 61,
    "category": "traffic_signs",
    "image": "/exam_images/q_061.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ให้เลี้ยวซ้าย",
        "en": "Turn left",
        "my": "ဘယ်ဘက်သို့ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ชิดขวา",
        "en": "Keep right",
        "my": "ညာဘက်သို့ ကပ်မောင်းပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้เลี้ยวขวา",
        "en": "Turn right",
        "my": "ညာဘက်သို့ကွေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ชิดซ้าย",
        "en": "Keep left",
        "my": "ဘယ်ဘက်သို့ ကပ်မောင်းပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 62,
    "category": "traffic_signs",
    "image": "/exam_images/q_062.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ให้ชิดซ้ายหรือชิดขวา",
        "en": "Keep left or right",
        "my": "ဘယ်ဘက် သို့မဟုတ် ညာဘက်သို့ ကပ်မောင်းရန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ชิดขวาอย่างเดียว",
        "en": "Keep right only",
        "my": "ညာဘက်သို့သာ ကပ်မောင်းရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามชิดซ้ายหรือชิดขวา",
        "en": "Do not keep left or right",
        "my": "ဘယ်ဘက် သို့မဟုတ် ညာဘက်သို့ ကပ်မမောင်းရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ชิดซ้ายอย่างเดียว",
        "en": "Keep left only",
        "my": "ဘယ်ဘက်သို့သာ ကပ်မောင်းရန်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 63,
    "category": "traffic_signs",
    "image": "/exam_images/q_063.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ให้เลี้ยวซ้ายหรือเลี้ยวขวา",
        "en": "Turn left or right",
        "my": "ဘယ်ဘက် သို့မဟုတ် ညာဘက်သို့ ကွေ့ရန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห้ามตรงไปหรือเลี้ยวขวา",
        "en": "No straight or right turn",
        "my": "တည့်တည့်မသွားရ သို့မဟုတ် ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวทางซ้ายหรือทางขวา",
        "en": "No left or right turn",
        "my": "ဘယ်ဘက် သို့မဟုတ် ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามตรงไปหรือเลี้ยวซ้าย",
        "en": "Do not go straight or turn left",
        "my": "တည့်တည့်မသွားရ (သို့) ဘယ်ဘက်မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 64,
    "category": "traffic_signs",
    "image": "/exam_images/q_064.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้ตรงไปหรือเลี้ยวซ้าย",
        "en": "Go straight or turn left",
        "my": "တည့်တည့်သွားပါ (သို့) ဘယ်ဘက်ကွေ့ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ตรงไปแต่ห้ามเลี้ยวซ้าย",
        "en": "Proceed straight, no left turn",
        "my": "တည့်တည့်သွားနိုင်သည်၊ ဘယ်ဘက်မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามตรงไปหรือเลี้ยวขวา",
        "en": "No straight or right turn",
        "my": "တည့်တည့်မသွားရ သို့မဟုတ် ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามตรงไปหรือเลี้ยวซ้าย",
        "en": "Do not go straight or turn left",
        "my": "တည့်တည့်မသွားရ (သို့) ဘယ်ဘက်မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 65,
    "category": "traffic_signs",
    "image": "/exam_images/q_065.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้ตรงไปหรือเลี้ยวขวา",
        "en": "Go straight or turn right",
        "my": "တည့်တည့်သွားပါ (သို့) ညာဘက်ကွေ့ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ตรงไปหรือเลี้ยวซ้าย",
        "en": "Go straight or turn left",
        "my": "တည့်တည့်သွားပါ (သို့) ဘယ်ဘက်ကွေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามตรงไปหรือเลี้ยวซ้าย",
        "en": "Do not go straight or turn left",
        "my": "တည့်တည့်မသွားရ (သို့) ဘယ်ဘက်မကွေ့ရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามตรงไปหรือเลี้ยวขวา",
        "en": "No straight or right turn",
        "my": "တည့်တည့်မသွားရ သို့မဟုတ် ညာဘက်သို့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 66,
    "category": "traffic_signs",
    "image": "/exam_images/q_066.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้ขับรถแทรกหรือตัดหน้ารถคันอื่นในวงเวียนได้",
        "en": "Permitted to cut in or overtake other vehicles in the roundabout",
        "my": "အဝိုင်းပတ်အတွင်း အခြားယာဉ်များကို ကျော်တက်ခြင်း သို့မဟုတ် ကြားဖြတ်မောင်းနှင်ခွင့်ရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถยนต์ขับรถทางเดียวด้านซ้าย",
        "en": "One-way traffic on the left for motor vehicles",
        "my": "မော်တော်ယာဉ်များ ဘယ်ဘက်တစ်လမ်းမောင်းသွားရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่รถต้องขับไปทางซ้ายของวงเวียนและหยุดรอให้รถที่อยู่ในวงเวียนผ่านไปก่อน",
        "en": "Drivers must keep left of the roundabout and give way to vehicles already in the roundabout",
        "my": "ယာဉ်မောင်းများသည် အဝိုင်းပတ်၏ ဘယ်ဘက်မှမောင်းရမည်ဖြစ်ပြီး အဝိုင်းပတ်အတွင်းရှိယာဉ်များကို ဦးစားပေးရပ်စောင့်ရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้รถทุกชนิดเดินวนด้านขวาของวงเวียน",
        "en": "All vehicles must circulate to the right of the roundabout",
        "my": "ယာဉ်အားလုံး အဝိုင်းပတ်၏ ညာဘက်သို့ ပတ်မောင်းရမည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 67,
    "category": "traffic_signs",
    "image": "/exam_images/q_067.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ห้ามแซงล้ำเข้าไปในช่องเดินรถประจำทาง",
        "en": "Do not overtake into the bus lane",
        "my": "ဘတ်စ်ကားသီးသန့်လမ်းကြောအတွင်းသို့ ကျော်တက်ဝင်ရောက်ခြင်းမပြုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ขับรถตรงไปหรือเลี้ยวขวา",
        "en": "Drive straight or turn right",
        "my": "တည့်တည့်မောင်းပါ (သို့) ညာဘက်ကွေ့ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถเข้าช่องเดินรถยนต์และรถจักรยานยนต์",
        "en": "Lane for cars and motorcycles only",
        "my": "မော်တော်ကားနှင့် မော်တော်ဆိုင်ကယ် သီးသန့်လမ်းကြောအတွင်းသို့ ဝင်မောင်းပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามขับรถตรงไปหรือเลี้ยวขวา",
        "en": "No straight through or right turn",
        "my": "တည့်တည့်မောင်းနှင်ခြင်း သို့မဟုတ် ညာဘက်သို့ကွေ့ခြင်း မပြုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 68,
    "category": "traffic_signs",
    "image": "/exam_images/q_068.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "รถมีคนนั่งไม่น้อยกว่า 3 คน สามารถใช้ช่องเดินรถนี้ได้",
        "en": "Vehicles with 3 or more occupants may use this lane",
        "my": "လူ ၃ ဦးထက်မနည်း စီးနင်းလာသောယာဉ်များ ဤလမ်းကြောကို အသုံးပြုနိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถมีคนนั่ง 2 คน เข้าไปในช่องเดินรถนี้ได้",
        "en": "Vehicles with 2 occupants may enter this lane",
        "my": "လူ ၂ ဦး စီးနင်းလာသောယာဉ်များ ဤလမ်းကြောအတွင်းသို့ ဝင်ရောက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถมีคนนั่ง 1 คน เข้าไปในช่องเดินรถนี้ได้",
        "en": "Vehicles with 1 occupant may enter this lane",
        "my": "လူ ၁ ဦး စီးနင်းလာသောယာဉ်များ ဤလမ်းကြောအတွင်းသို့ ဝင်ရောက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามรถมีคนเกิน 3 คน เข้าไปในช่องเดินรถนี้",
        "en": "Vehicles with more than 3 occupants are prohibited in this lane",
        "my": "လူ ၃ ဦးထက်ပို၍ စီးနင်းလာသောယာဉ်များ ဤလမ်းကြောအတွင်းသို့ ဝင်ရောက်ခြင်းမပြုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 69,
    "category": "traffic_signs",
    "image": "/exam_images/q_069.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ช่องเดินรถจักรยาน",
        "en": "Bicycle lane",
        "my": "စက်ဘီးသီးသန့်လမ်းကြော",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่องเดินรถจักรยานยนต์",
        "en": "Motorcycle lane",
        "my": "မော်တော်ဆိုင်ကယ်သီးသန့်လမ်းကြော",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เฉพาะคนเดิน",
        "en": "Pedestrians only",
        "my": "ခြေလျင်လျှောက်သူများသာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่องเดินรถมวลชน",
        "en": "High-Occupancy Vehicle (HOV) / Transit lane",
        "my": "လူအများစီးယာဉ် သီးသန့်လမ်းကြော",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 70,
    "category": "traffic_signs",
    "image": "/exam_images/q_070.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "รถยนต์ทุกชนิด จอดรถได้",
        "en": "Parking permitted for all vehicles",
        "my": "မော်တော်ယာဉ်အားလုံး ရပ်နား (ပါကင်ထိုး) နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถยนต์ทุกชนิด หยุดรถได้",
        "en": "Stopping permitted for all vehicles",
        "my": "မော်တော်ယာဉ်အားလုံး ခေတ္တရပ်တန့်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามหยุดรถทุกชนิดภายในกรอบเส้นทแยง ห้ามหยุดรถยกเว้นรถที่หยุดรอเพื่อเลี้ยวขวา",
        "en": "No stopping inside the yellow crisscross box, except vehicles waiting to turn right",
        "my": "မျဉ်းစောင်းဇယားကွက်အတွင်း ယာဉ်အားလုံး မရပ်ရ (ညာဘက်ကွေ့ရန် ရပ်စောင့်သောယာဉ်မှအပ)",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถยนต์ทุกชนิด กลับรถได้",
        "en": "U-turn permitted for all vehicles",
        "my": "မော်တော်ယာဉ်အားလုံး ယူကွေ့ (U-turn) ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 71,
    "category": "traffic_signs",
    "image": "/exam_images/q_071.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้ขับรถช้าลง และระมัดระวังคนงานกำลังทำงาน",
        "en": "Slow down and watch out for road workers",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် အလုပ်သမားများ လုပ်ကိုင်နေသည်ကို သတိပြုပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวังคนงานกำลัง สำรวจสิ่งก่อสร้าง",
        "en": "Slow down and watch for construction survey work",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ဆောက်လုပ်ရေးစစ်ဆေးမှုများ လုပ်ဆောင်နေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวังคนงานกำลังสำรวจทาง",
        "en": "Slow down and watch out for road survey crew",
        "my": "အရှိန်လျှော့မောင်းပါ၊ လမ်းတိုင်းတာစစ်ဆေးနေသော ဝန်ထမ်းများကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง และระมัดระวัง เครื่องจักรกำลังทำงาน",
        "en": "Slow down and watch for machinery in operation",
        "my": "အရှိန်လျှော့မောင်းပါ၊ စက်ယန္တရားများ အလုပ်လုပ်နေသဖြင့် သတိထားပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 72,
    "category": "traffic_signs",
    "image": "/exam_images/q_072.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ให้ขับรถช้าลง ทางข้างหน้าเป็นทางโค้งรัศมีแคบเลี้ยวขวา",
        "en": "Slow down, sharp curve to the right ahead",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် ညာဘက်အကွေ့ကျဉ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง ทางข้างหน้าเป็นทางคดเคี้ยวเริ่มซ้าย",
        "en": "Slow down, winding road ahead starting to the left",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် ဘယ်ဘက်မှစသော အကွေ့အကောက်များသောလမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถช้าลง ทางข้างหน้าเป็นทางคดเคี้ยวเริ่มขวา",
        "en": "Slow down, winding road ahead starting to the right",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် ညာဘက်မှစသော အကွေ့အကောက်များသောလမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ทางข้างหน้าเป็นทางโค้งรัศมีแคบเลี้ยวซ้าย",
        "en": "Slow down, sharp curve to the left ahead",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် ဘယ်ဘက်အကွေ့ကျဉ်းရှိသည်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 73,
    "category": "traffic_signs",
    "image": "/exam_images/q_073.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง ทางข้างหน้าเป็นทางคดเคี้ยวเริ่มขวา",
        "en": "Slow down, winding road ahead starting to the right",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် ညာဘက်မှစသော အကွေ့အကောက်များသောလမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ทางข้างหน้าเป็นทางโค้งรัศมีแคบเลี้ยวขวา",
        "en": "Slow down, sharp curve to the right ahead",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် ညာဘက်အကွေ့ကျဉ်းရှိသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง ทางข้างหน้าเป็นทางคดเคี้ยวเริ่มซ้าย",
        "en": "Slow down; winding road ahead starting to the left.",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် ဘယ်ဘက်မှစသော အကွေ့အကောက်များသောလမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ทางข้างหน้าเป็นทางโค้งรัศมีแคบเลี้ยวซ้าย",
        "en": "Slow down, sharp curve to the left ahead",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ရှေ့တွင် ဘယ်ဘက်အကွေ့ကျဉ်းရှိသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 74,
    "category": "traffic_signs",
    "image": "/exam_images/q_074.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ให้ขับรถด้วยความระมัดระวัง ทางข้างหน้าเป็นทางเอกตัดกันรูปตัวที",
        "en": "Drive with caution; major road T-junction ahead.",
        "my": "သတိပြု၍ မောင်းနှင်ပါ၊ ရှေ့တွင် ပင်မလမ်းမကြီး T ပုံသဏ္ဌာန် လမ်းဆုံရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางข้างหน้ามีทางโทแยกไปทางซ้าย",
        "en": "Slow down and use extra caution; minor road junction on the left ahead.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုဂရုစိုက်ပါ၊ ရှေ့တွင် ဘယ်ဘက်သို့ လမ်းသွယ်ခွဲရှိသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ขับรถด้วยความระมัดระวัง ทางข้างหน้าเป็นทางเอกตัดกันรูปตัววาย",
        "en": "Drive with caution; major road Y-junction ahead.",
        "my": "သတိပြု၍ မောင်းနှင်ပါ၊ ရှေ့တွင် ပင်မလမ်းမကြီး Y ပုံသဏ္ဌာန် လမ်းဆုံရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ขับรถด้วยความระมัดระวัง ทางข้างหน้าเป็นทางโทตัดกับทางโทรูปตัวที",
        "en": "Drive with caution; minor roads T-junction ahead.",
        "my": "သတိပြု၍ မောင်းနှင်ပါ၊ ရှေ့တွင် လမ်းသွယ်နှစ်ခုဆုံသော T ပုံသဏ္ဌာန် လမ်းဆုံရှိသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 75,
    "category": "traffic_signs",
    "image": "/exam_images/q_075.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ทางเอกตัดกันรูปตัวที",
        "en": "Major road T-junction",
        "my": "ပင်မလမ်းမကြီး T ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเอกตัดทางโทรูปตัววาย",
        "en": "Major road meets minor road Y-junction",
        "my": "ပင်မလမ်းနှင့် လမ်းသွယ်ဆုံသော Y ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเอกตัดกันรูปตัววาย",
        "en": "Major road Y-junction",
        "my": "ပင်မလမ်းမကြီး Y ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโทแยกทางเอกเยื้องกัน เริ่มซ้าย",
        "en": "Staggered side road junction, first on left",
        "my": "လမ်းသွယ် တဖက်တချက်ဆုံလမ်း (ဘယ်ဘက်အရင်)",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 76,
    "category": "traffic_signs",
    "image": "/exam_images/q_076.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ทางโทแยกทางเอกเยื้องกัน เริ่มขวา",
        "en": "Staggered side road junction, first on right",
        "my": "လမ်းသွယ် တဖက်တချက်ဆုံလမ်း (ညာဘက်အရင်)",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางเอกตัดทางโทรูปตัววาย",
        "en": "Major road meets minor road Y-junction",
        "my": "ပင်မလမ်းနှင့် လမ်းသွယ်ဆုံသော Y ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเอกตัดกันรูปตัววาย",
        "en": "Major road Y-junction",
        "my": "ပင်မလမ်းမကြီး Y ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเอกตัดกันรูปตัวที",
        "en": "Major road T-junction",
        "my": "ပင်မလမ်းမကြီး T ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 77,
    "category": "traffic_signs",
    "image": "/exam_images/q_077.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ทางโทเชื่อมทางเอกจากซ้าย",
        "en": "Side road joins main road from left",
        "my": "ဘယ်ဘက်မှ လမ်းသွယ် ပင်မလမ်းသို့ ဆုံခြင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางเอกตัดทางโทรูปตัวที",
        "en": "Major road meets minor road T-junction",
        "my": "ပင်မလမ်းနှင့် လမ်းသွယ်ဆုံသော T ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเอกตัดกันรูปตัวที",
        "en": "Major road T-junction",
        "my": "ပင်မလမ်းမကြီး T ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเอกตัดกันรูปตัววาย",
        "en": "Major road Y-junction",
        "my": "ပင်မလမ်းမကြီး Y ပုံသဏ္ဌာန် လမ်းဆုံ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 78,
    "category": "traffic_signs",
    "image": "/exam_images/q_078.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ทางโทเชื่อมทางเอกจากซ้าย",
        "en": "Side road joins main road from left",
        "my": "ဘယ်ဘက်မှ လမ်းသွယ် ပင်မလမ်းသို့ ဆုံခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโทเชื่อมทางโทจากซ้าย",
        "en": "Minor road joins minor road from left",
        "my": "ဘယ်ဘက်မှ လမ်းသွယ်အချင်းချင်း ဆုံခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโทเชื่อมทางเอกจากขวา",
        "en": "Side road joins main road from right",
        "my": "ညာဘက်မှ လမ်းသွယ် ပင်မလမ်းသို့ ဆုံခြင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางเอกเชื่อมทางเอกจากซ้าย",
        "en": "Major road joins major road from left",
        "my": "ဘယ်ဘက်မှ ပင်မလမ်းမကြီးအချင်းချင်း ဆုံခြင်း",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 79,
    "category": "traffic_signs",
    "image": "/exam_images/q_079.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ทางเอกแยกทางเอกจากซ้าย รูปตัววาย",
        "en": "Major road forks from major road on left (Y-junction)",
        "my": "ဘယ်ဘက်သို့ ပင်မလမ်းမကြီး ခွဲထွက်သော Y ပုံသဏ္ဌာန် လမ်းခွဲ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโทแยกทางเอกจากขวา รูปตัววาย",
        "en": "Side road forks from main road on right (Y-junction)",
        "my": "ညာဘက်သို့ လမ်းသွယ်ခွဲထွက်သော Y ပုံသဏ္ဌာန် လမ်းခွဲ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโทแยกทางเอกจากซ้าย รูปตัววาย",
        "en": "Side road forks from main road on left (Y-junction)",
        "my": "ဘယ်ဘက်သို့ လမ်းသွယ်ခွဲထွက်သော Y ပုံသဏ္ဌာန် လမ်းခွဲ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางโทแยกทางโทจากซ้าย รูปตัววาย",
        "en": "Minor road forks from minor road on left (Y-junction)",
        "my": "ဘယ်ဘက်သို့ လမ်းသွယ်အချင်းချင်း ခွဲထွက်သော Y ပုံသဏ္ဌာန် လမ်းခွဲ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 80,
    "category": "traffic_signs",
    "image": "/exam_images/q_080.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ทางโทแยกทางเอกจากขวา รูปตัววาย",
        "en": "Side road forks from main road on right (Y-junction)",
        "my": "ညာဘက်သို့ လမ်းသွယ်ခွဲထွက်သော Y ပုံသဏ္ဌာန် လမ်းခွဲ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางโทแยกทางเอกจากซ้าย รูปตัววาย",
        "en": "Side road forks from main road on left (Y-junction)",
        "my": "ဘယ်ဘက်သို့ လမ်းသွယ်ခွဲထွက်သော Y ပုံသဏ္ဌာန် လမ်းခွဲ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโทแยกทางโทจากซ้าย รูปตัววาย",
        "en": "Minor road forks from minor road on left (Y-junction)",
        "my": "ဘယ်ဘက်သို့ လမ်းသွယ်အချင်းချင်း ခွဲထွက်သော Y ပုံသဏ္ဌာန် လမ်းခွဲ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเอกแยกทางเอกจากซ้าย รูปตัววาย",
        "en": "Major road forks from major road on left (Y-junction)",
        "my": "ဘယ်ဘက်သို့ ပင်မလမ်းမကြီး ခွဲထွက်သော Y ပုံသဏ္ဌာန် လမ်းခွဲ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 81,
    "category": "traffic_signs",
    "image": "/exam_images/q_081.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ทางแคบลงด้านขวา",
        "en": "Road narrows on the right",
        "my": "ညာဘက်ခြမ်း လမ်းကျဉ်းမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางข้างหน้าแคบลงทั้งสองด้าน",
        "en": "Road narrows on both sides ahead",
        "my": "ရှေ့တွင် လမ်းဘေးနှစ်ဖက်စလုံး ကျဉ်းသွားမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางโค้งซ้าย",
        "en": "Left curve ahead",
        "my": "ဘယ်ဘက်ကွေ့ လမ်းကောက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางแคบลงด้านซ้าย",
        "en": "Road narrows on the left",
        "my": "ဘယ်ဘက်ခြမ်း လမ်းကျဉ်းမည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 82,
    "category": "traffic_signs",
    "image": "/exam_images/q_082.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ทางแคบลงด้านซ้าย",
        "en": "Road narrows on the left",
        "my": "ဘယ်ဘက်ခြမ်း လမ်းကျဉ်းမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางแคบด้านขวา",
        "en": "Road narrows on the right",
        "my": "ညာဘက် လမ်းကျဉ်းသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางกว้างขึ้นทั้งสองด้าน",
        "en": "Road widens on both sides",
        "my": "နှစ်ဖက်စလုံး လမ်းကျယ်လာသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางแคบลงทั้งสองด้าน",
        "en": "Road narrows on both sides",
        "my": "လမ်းဘေးနှစ်ဖက်စလုံး ကျဉ်းမည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 83,
    "category": "traffic_signs",
    "image": "/exam_images/q_083.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ช่องจราจรปิดทั้งสองด้าน",
        "en": "Lanes closed on both sides",
        "my": "နှစ်ဖက်စလုံး ယာဉ်ကြောပိတ်ထားသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่องจราจรลดลงด้านซ้าย",
        "en": "Lane reduction on the left",
        "my": "ဘယ်ဘက် ယာဉ်ကြောလျော့နည်းသွားမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่องจราจรปิดด้านขวา",
        "en": "Right lane closed",
        "my": "ညာဘက် ယာဉ်ကြောပိတ်ထားသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ช่องจราจรปิดด้านซ้าย",
        "en": "Left lane closed",
        "my": "ဘယ်ဘက် ယာဉ်ကြောပိတ်ထားသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 84,
    "category": "traffic_signs",
    "image": "/exam_images/q_084.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางแคบลงไม่เกิน 2.50 เมตร",
        "en": "Slow down and use extra caution; road narrows to no more than 2.50 meters.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုဂရုစိုက်ပါ၊ လမ်းအကျယ် ၂.၅၀ မီတာထက် မပိုဘဲ ကျဉ်းသွားမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง รถที่มีความสูงไม่เกิน 2.50 เมตรให้ผ่านได้",
        "en": "Slow down and use extra caution; vehicles not exceeding 2.50 meters in height may pass.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုဂရုစိုက်ပါ၊ အမြင့် ၂.၅၀ မီတာထက် မကျော်သော ယာဉ်များသာ ဖြတ်သန်းနိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางกว้างเกิน 2.50 เมตร",
        "en": "Slow down and use extra caution; road width exceeds 2.50 meters.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုဂရုစိုက်ပါ၊ လမ်းအကျယ် ၂.၅၀ မီတာထက် ပိုကျယ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางสูงเกิน 2.50 เมตร",
        "en": "Slow down and use extra caution; overhead clearance exceeds 2.50 meters.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုဂရုစိုက်ပါ၊ အမြင့်ကင်းလွတ်ခွင့် ၂.၅၀ မီတာထက် ကျော်လွန်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 85,
    "category": "traffic_signs",
    "image": "/exam_images/q_085.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ผิวทางร่วน",
        "en": "Slow down and use extra caution; loose road surface / loose chippings.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုဂရုစိုက်ပါ၊ ကျောက်စရစ်ချောင်/လမ်းမျက်နှာပြင် ချောင်နေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางข้างหน้าขรุขระมาก เป็นหลุม เป็นบ่อ",
        "en": "Slow down, beware of rough, bumpy road ahead",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် လမ်းမညီညာပြီး ကျင်းများရှိသဖြင့် သတိပြုမောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ทางลื่น",
        "en": "Slow down and use caution, slippery road.",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ပိုမိုသတိထားပါ၊ လမ်းချောသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพิ่มความระมัดระวัง ระวังหินร่วง",
        "en": "Slow down and use caution, beware of falling rocks.",
        "my": "အရှိန်လျှော့မောင်းပါ၊ ပိုမိုသတိထားပါ၊ ကျောက်တုံးပြုတ်ကျတတ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 86,
    "category": "traffic_signs",
    "image": "/exam_images/q_086.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางข้างหน้าเป็นแอ่ง",
        "en": "Slow down and increase caution, dip ahead.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုသတိထားမောင်းပါ၊ ရှေ့တွင် လမ်းချိုင့်ရှိသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางลงลาดชัน",
        "en": "Slow down and increase caution, steep descent ahead.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုသတိထားမောင်းပါ၊ မတ်စောက်သော ဆင်းလမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง เตือนรถกระโดด",
        "en": "Slow down and increase caution, speed hump / bump ahead.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုသတိထားမောင်းပါ၊ ရှေ့တွင် လမ်းဖောင်း/ခုန်တက်သောနေရာရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวัง ทางขึ้นลาดชัน",
        "en": "Slow down and increase caution, steep ascent ahead.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုသတိထားမောင်းပါ၊ မတ်စောက်သော တက်လမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 87,
    "category": "traffic_signs",
    "image": "/exam_images/q_087.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลงให้มาก และระมัดระวังเป็นพิเศษ ผิวทางร่วน",
        "en": "Slow down significantly and use extra caution, loose road surface.",
        "my": "အရှိန်ကို အထူးလျှော့ပါ၊ အထူးဂရုစိုက်ပါ၊ လမ်းမျက်နှာပြင် ကျောက်စရစ်ပွနေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลงให้มาก และระมัดระวังเป็นพิเศษ ทางข้างหน้าเป็นทางโค้ง",
        "en": "Slow down significantly and use extra caution, curve ahead.",
        "my": "အရှိန်ကို အထူးလျှော့ပါ၊ အထူးဂရုစိုက်ပါ၊ ရှေ့တွင် လမ်းကွေ့ရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลงให้มาก และระมัดระวังเป็นพิเศษ ทางแคบด้านขวา",
        "en": "Slow down significantly and use extra caution, road narrows on the right.",
        "my": "အရှိန်ကို အထူးလျှော့ပါ၊ အထူးဂရုစိုက်ပါ၊ ညာဘက်လမ်းကျဉ်းသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังการลื่นไถล  อย่าใช้ห้ามล้อโดยแรง",
        "en": "Slow down and beware of skidding, do not brake hard.",
        "my": "အရှိန်လျှော့ပြီး လမ်းချော်ထွက်ခြင်းကို သတိပြုပါ၊ ဘရိတ်ကို ပြင်းထန်စွာ မနင်းပါနှင့်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 88,
    "category": "traffic_signs",
    "image": "/exam_images/q_088.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และระมัดระวัง ทางลื่น",
        "en": "Slow down and drive with caution, slippery road.",
        "my": "အရှိန်လျှော့ပြီး သတိထားမောင်းပါ၊ လမ်းချောသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังอันตราย ทางข้างหน้าอาจมีวัสดุผิวทางหลุดกระเด็น",
        "en": "Slow down and be cautious, risk of flying loose stones ahead.",
        "my": "အရှိန်လျှော့ပြီး အန္တရာယ်ကို သတိပြုပါ၊ ရှေ့တွင် ကျောက်စရစ်ခဲများ လွင့်စင်လာနိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวัง ทางคดเคี้ยว",
        "en": "Slow down and drive with caution, winding road ahead.",
        "my": "အရှိန်လျှော့ပြီး သတိထားမောင်းပါ၊ ကွေ့ကောက်သော လမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวัง ระวังหินร่วง",
        "en": "Slow down and drive with caution, beware of falling rocks.",
        "my": "အရှိန်လျှော့ပြီး သတိထားမောင်းပါ၊ ကျောက်တုံးပြုတ်ကျတတ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 89,
    "category": "traffic_signs",
    "image": "/exam_images/q_089.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวังทางข้างหน้าอาจมีหินร่วง",
        "en": "Slow down and increase caution, falling rocks possible ahead.",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုသတိထားမောင်းပါ၊ ရှေ့တွင် ကျောက်တုံးပြုတ်ကျခြင်း ဖြစ်ပွားနိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวังเป็นพิเศษ ทางแคบ",
        "en": "Slow down and use extra caution, narrow road ahead.",
        "my": "အရှိန်လျှော့ပြီး အထူးဂရုပြုမောင်းပါ၊ ရှေ့လမ်းကျဉ်းသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวังเป็นพิเศษ ทางขึ้นลาดชัน",
        "en": "Slow down and use extra caution, steep ascent ahead.",
        "my": "အရှိန်လျှော့ပြီး အထူးဂရုပြုမောင်းပါ၊ မတ်စောက်သော တက်လမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวังเป็นพิเศษ ทางลงลาดชัน",
        "en": "Slow down and use extra caution, steep descent ahead.",
        "my": "အရှိန်လျှော့ပြီး အထူးဂရုပြုမောင်းပါ၊ မတ်စောက်သော ဆင်းလမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 90,
    "category": "traffic_signs",
    "image": "/exam_images/q_090.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "เตือนรถกระโดด",
        "en": "Speed hump / bump ahead",
        "my": "ရှေ့တွင် ကားခုန်တက်နိုင်သည့် အဖုအထစ် သတိပေးချက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผิวทางขรุขระ",
        "en": "Rough road surface",
        "my": "မညီညာသော လမ်းမျက်နှာပြင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเป็นแอ่ง",
        "en": "Dip in road",
        "my": "လမ်းချိုင့်ခွက်ရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สะพานเปิดได้",
        "en": "Opening bridge ahead",
        "my": "ဖွင့်ပိတ်နိုင်သော တံတား",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 91,
    "category": "traffic_signs",
    "image": "/exam_images/q_091.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "เปลี่ยนช่องเดินรถตามสัญลักษณ์ในป้าย",
        "en": "Change lane according to the sign symbol.",
        "my": "ဆိုင်းဘုတ်ပါ သင်္ကေတအတိုင်း ယာဉ်ကြောပြောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่เปลี่ยนช่องทางจราจร",
        "en": "Do not change lanes.",
        "my": "ယာဉ်ကြောမပြောင်းရ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ออกทางขนาน",
        "en": "Do not exit to the frontage road.",
        "my": "ဘေးတွဲလမ်းသို့ မထွက်ရ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ออกทางขนาน",
        "en": "Exit to the frontage road.",
        "my": "ဘေးတွဲလမ်းသို့ ထွက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 92,
    "category": "traffic_signs",
    "image": "/exam_images/q_092.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ผู้ขับรถบนทางหลักเตรียมตัวออกทางขนาน",
        "en": "Drivers on the main road, prepare to exit to the frontage road.",
        "my": "ပင်မလမ်းမပေါ်မှ ယာဉ်မောင်းများ ဘေးတွဲလမ်းသို့ ထွက်ရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่บนทางขนานเตรียมตัวเข้าทางหลัก",
        "en": "Drivers on the frontage road, prepare to merge into the main road.",
        "my": "ဘေးတွဲလမ်းပေါ်မှ ယာဉ်မောင်းများ ပင်မလမ်းသို့ ဝင်ရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ผู้ขับรถบนทางหลักให้ระมัดระวัง เตรียมตัวออกทางโค้งซ้าย",
        "en": "Drivers on the main road, exercise caution and prepare to exit into a left curve.",
        "my": "ပင်မလမ်းပေါ်မှ ယာဉ်မောင်းများ သတိပြုပါ၊ ဘယ်ဘက်ကွေ့ထွက်ရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับรถบนทางหลักให้ระมัดระวัง เตรียมตัวออกทางโค้งขวา",
        "en": "Drivers on the main road, exercise caution and prepare to exit into a right curve.",
        "my": "ပင်မလမ်းပေါ်မှ ယာဉ်မောင်းများ သတိပြုပါ၊ ညာဘက်ကွေ့ထွက်ရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 93,
    "category": "traffic_signs",
    "image": "/exam_images/q_093.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ผู้ขับรถในทางหลักเตรียมออกทางคดเคี้ยวเริ่มซ้าย",
        "en": "Main road drivers prepare to exit to winding road starting left",
        "my": "ပင်မလမ်းမပေါ်ရှိယာဉ်များ ဘယ်ဘက်မှစတင်ကွေ့ကောက်သည့်လမ်းသို့ ထွက်ရန်ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่บนทางหลักเตรียมตัวออกทางขนาน",
        "en": "Main road drivers prepare to exit to frontage road",
        "my": "ပင်မလမ်းမပေါ်ရှိယာဉ်များ ဘေးလမ်းမ (Frontage road) သို့ထွက်ရန်ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถในทางหลักเตรียมออกทางคดเคี้ยวเริ่มขวา",
        "en": "Main road drivers prepare to exit to winding road starting right",
        "my": "ပင်မလမ်းမပေါ်ရှိယာဉ်များ ညာဘက်မှစတင်ကွေ့ကောက်သည့်လမ်းသို့ ထွက်ရန်ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับรถในทางหลัก เตรียมเข้าทางคดเคี้ยวเริ่มซ้าย",
        "en": "Main road drivers prepare to enter winding road starting left",
        "my": "ပင်မလမ်းမပေါ်ရှိယာဉ်များ ဘယ်ဘက်မှစတင်ကွေ့ကောက်သည့်လမ်းသို့ ဝင်ရောက်ရန်ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 94,
    "category": "traffic_signs",
    "image": "/exam_images/q_094.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังทางข้างหน้ามีทางเอกตัดกัน",
        "en": "Slow down and be cautious; major crossroad ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပြုမောင်းနှင်ပါ၊ ရှေ့တွင် ပင်မလမ်းဖြတ်လမ်းဆုံရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังทางข้างหน้ามีทางคู่ข้างหน้า",
        "en": "Slow down and be careful; dual carriageway ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပြုမောင်းနှင်ပါ၊ ရှေ့တွင် တွဲဖက်လမ်း (Dual Carriageway) ရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังทางข้างหน้ามีทางร่วมด้านซ้าย",
        "en": "Slow down and be cautious; side road joins from the left ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပြုမောင်းနှင်ပါ၊ ရှေ့ဘယ်ဘက်တွင် လမ်းဆုံလမ်းခွရှိသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังทางข้างหน้าอาจมีรถเข้ามาร่วมจากทางขวา",
        "en": "Slow down and be cautious; traffic may merge from the right ahead",
        "my": "အရှိန်လျှော့ပြီး သတိပြုမောင်းနှင်ပါ၊ ရှေ့ညာဘက်မှ ယာဉ်များပေါင်းဝင်လာနိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 95,
    "category": "traffic_signs",
    "image": "/exam_images/q_095.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และชิดซ้าย เพิ่มความระมัดระวัง ทางร่วมด้านขวา",
        "en": "Slow down, keep left, beware of junction on the right",
        "my": "အရှိန်လျှော့ပါ၊ ဘယ်ဘက်ကပ်မောင်းပါ၊ ညာဘက်မှလာမည့်လမ်းဆုံကို သတိပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และชิดซ้าย เพิ่มความระมัดระวัง ทางร่วมด้านซ้าย",
        "en": "Slow down, keep left, beware of junction on the left",
        "my": "အရှိန်လျှော့ပါ၊ ဘယ်ဘက်ကပ်မောင်းပါ၊ ဘယ်ဘက်မှလာမည့်လမ်းဆုံကို သတိပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และชิดซ้าย เพิ่มความระมัดระวังทางข้างหน้าเป็นทางร่วมไม่มีเกาะ",
        "en": "Slow down, keep left, beware of junction without traffic island ahead",
        "my": "အရှိန်လျှော့ပါ၊ ဘယ်ဘက်ကပ်မောင်းပါ၊ ရှေ့တွင်အလယ်ကျွန်းမပါသောလမ်းဆုံရှိသဖြင့် သတိပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และชิดซ้าย เพิ่มความระมัดระวัง ทางคู่ข้างหน้า",
        "en": "Slow down, keep left, beware of divided road ahead",
        "my": "အရှိန်လျှော့ပါ၊ ဘယ်ဘက်ကပ်မောင်းပါ၊ ရှေ့တွင်လမ်းနှစ်လမ်းခွဲရှိသဖြင့် သတိပြုပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 96,
    "category": "traffic_signs",
    "image": "/exam_images/q_096.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ทางข้างหน้ามีที่กลับรถด้านขวา",
        "en": "U-turn ahead on the right",
        "my": "ရှေ့တွင်ညာဘက်၌ ယူတန်း (U-turn) ပြုလုပ်နိုင်သောနေရာရှိသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางข้างหน้าห้ามกลับรถ",
        "en": "No U-turn ahead",
        "my": "ရှေ့တွင် ယူတန်း (U-turn) ပြုလုပ်ခြင်းကို တားမြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางข้างหน้าจะมีที่สิ้นสุดทางคู่",
        "en": "End of divided road ahead",
        "my": "ရှေ့တွင်လမ်းနှစ်လမ်းခွဲခြင်း (Divided road) ပြီးဆုံးသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางข้างหน้าจะมีทางโค้งซ้าย",
        "en": "Curve to the left ahead",
        "my": "ရှေ့တွင်ဘယ်ဘက်သို့ကွေ့သောလမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 97,
    "category": "traffic_signs",
    "image": "/exam_images/q_097.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร ?",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ทางข้างหน้ามีที่กลับรถด้านซ้าย",
        "en": "U-turn ahead on the left",
        "my": "ရှေ့တွင်ဘယ်ဘက်၌ ယူတန်း (U-turn) ပြုလုပ်နိုင်သောနေရာရှိသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้เลี้ยวซ้าย",
        "en": "Turn left",
        "my": "ဘယ်ဘက်သို့ကွေ့ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สิ้นสุดทางคู่",
        "en": "End of divided road",
        "my": "လမ်းနှစ်လမ်းခွဲခြင်း (Divided road) ပြီးဆုံးသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโค้งซ้าย",
        "en": "Left curve ahead",
        "my": "ဘယ်ဘက်ကွေ့ လမ်းကောက်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 98,
    "category": "traffic_signs",
    "image": "/exam_images/q_098.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และให้ชิดซ้าย ทางข้างหน้ามีทางเดินรถทางเดียวด้านซ้าย",
        "en": "Slow down, keep left, one-way road entry on the left",
        "my": "အရှိန်လျှော့ပါ၊ ဘယ်ဘက်ကပ်မောင်းပါ၊ ရှေ့တွင်ဘယ်ဘက်သို့ဝင်သော တစ်လမ်းမောင်းလမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังอันตรายจากรถที่สวนทางมา",
        "en": "Slow down, beware of oncoming traffic",
        "my": "အရှိန်လျှော့ပါ၊ ဆန့်ကျင်ဘက်မှလာသောယာဉ်များကို သတိပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และให้ชิดซ้าย ทางข้างหน้ามีทางเดินรถทางเดียวด้านขวา",
        "en": "Slow down, keep left, one-way road entry on the right",
        "my": "အရှိန်လျှော့ပါ၊ ဘယ်ဘက်ကပ်မောင်းပါ၊ ရှေ့တွင်ညာဘက်သို့ဝင်သော တစ်လမ်းမောင်းလမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และให้ชิดซ้าย ทางข้างหน้ามีทางเดินรถทางเดียว",
        "en": "Slow down, keep left, one-way road ahead",
        "my": "အရှိန်လျှော့ပါ၊ ဘယ်ဘက်ကပ်မောင်းပါ၊ ရှေ့တွင်တစ်လမ်းမောင်းလမ်းရှိသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 99,
    "category": "traffic_signs",
    "image": "/exam_images/q_099.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และพร้อมที่จะเข้าทางเดินรถสองทาง",
        "en": "Slow down, prepare to enter two-way traffic",
        "my": "အရှိန်လျှော့ပါ၊ နှစ်လမ်းမောင်းလမ်းသို့ ဝင်ရောက်ရန်အသင့်ပြင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และพร้อมที่จะกลับรถ ในทางข้างหน้า",
        "en": "Slow down, prepare for U-turn ahead",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် ယူတန်း (U-turn) ပြုလုပ်ရန်အသင့်ပြင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และพร้อมที่จะปฏิบัติตามสัญญาณไฟจราจร",
        "en": "Slow down, prepare to follow traffic signals",
        "my": "အရှိန်လျှော့ပါ၊ မီးပွိုင့်အချက်ပြမှုကို လိုက်နာရန်အသင့်ပြင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และพร้อมที่จะเข้าทางเดินทางเดียวไปข้างหน้า",
        "en": "Slow down, prepare to enter one-way road ahead",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် တစ်လမ်းမောင်းလမ်းသို့ ဝင်ရောက်ရန်အသင့်ပြင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 100,
    "category": "traffic_signs",
    "image": "/exam_images/q_100.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และเตรียมพร้อมที่จะไปในทางเดินรถสองทาง",
        "en": "Slow down, prepare to enter two-way traffic",
        "my": "အရှိန်လျှော့ပါ၊ နှစ်လမ်းမောင်းလမ်းသို့ သွားရောက်ရန်အသင့်ပြင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเตรียมพร้อมที่จะกลับรถข้างหน้า",
        "en": "Slow down, prepare to make a U-turn ahead",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် ယူတန်း (U-turn) ပြုလုပ်ရန်အသင့်ပြင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และเตรียมพร้อมที่จะให้ทางแก่รถด้านหน้าเมื่อถึงป้ายให้ทาง",
        "en": "Slow down, prepare to yield at yield sign",
        "my": "အရှိန်လျှော့ပါ၊ လမ်းပေး (Yield) ဆိုင်းဘုတ်ရောက်လျှင် ရှေ့မှယာဉ်ကို လမ်းဦးစားပေးရန်အသင့်ပြင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และเตรียมพร้อมที่จะไปในทางเดินรถทางเดียว",
        "en": "Slow down, prepare to enter one-way traffic",
        "my": "အရှိန်လျှော့ပါ၊ တစ်လမ်းမောင်းလမ်းသို့ သွားရောက်ရန်အသင့်ပြင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 101,
    "category": "traffic_signs",
    "image": "/exam_images/q_101.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง เพราะทางข้างหน้ามีเขตโรงเรียน",
        "en": "Slow down, school zone ahead",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင်ကျောင်းဧရိယာရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพราะทางข้างหน้ามีคนกำลังทำงาน",
        "en": "Slow down, road work ahead",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင်လမ်းလုပ်ငန်းခွင်ရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง เพราะทางข้างหน้า ให้ระวังเด็กนักเรียน",
        "en": "Slow down, watch for school children ahead",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် ကျောင်းသူကျောင်းသားများကို သတိပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ระมัดระวังคนข้ามทาง",
        "en": "Slow down and watch for pedestrians",
        "my": "အရှိန်လျှော့ပါ၊ လမ်းဖြတ်ကူးသူများကို သတိပြုပါ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 102,
    "category": "traffic_signs",
    "image": "/exam_images/q_102.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ข้างหน้าเป็นเขตโรงเรียน ระมัดระวังอันตรายคนข้ามถนน",
        "en": "School zone ahead, watch for pedestrians",
        "my": "ကျောင်းဇုန်ဖြစ်သည်၊ လမ်းဖြတ်ကူးသူများကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ข้างหน้าเป็นเขตโรงเรียน ระมัดระวังอันตรายเขตเฉพาะคนเดิน",
        "en": "School zone ahead, pedestrian area",
        "my": "ကျောင်းဇုန်ဖြစ်သည်၊ လူသွားလမ်းဧရိယာကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ข้างหน้าเป็นเขตโรงเรียน ระมัดระวังอันตรายที่เกิดขึ้นแก่เด็กนักเรียน",
        "en": "School zone ahead, watch for children",
        "my": "ကျောင်းဇုန်ဖြစ်သည်၊ ကျောင်းသားများကို သတိပြုပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ข้างหน้าเป็นเขตโรงเรียน ระมัดระวังอันตรายมีผู้ใช้รถจักรยาน",
        "en": "School zone ahead, watch for cyclists",
        "my": "ကျောင်းဇုန်ဖြစ်သည်၊ စက်ဘီးစီးသူများကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 103,
    "category": "traffic_signs",
    "image": "/exam_images/q_103.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และเพิ่มความระมัดระวังทางข้างหน้าอาจมีอันตรายเช่น เกิดอุบัติเหตุทางทรุด เป็นต้น",
        "en": "Slow down and be cautious of hazards ahead (e.g., accidents, road damage)",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် မတော်တဆမှု သို့မဟုတ် လမ်းပျက်စီးမှုကဲ့သို့သော အန္တရာယ်များကို သတိပြုပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังคนข้ามถนนเป็นพิเศษ",
        "en": "Slow down and be extra cautious of pedestrians",
        "my": "အရှိန်လျှော့ပါ၊ လမ်းဖြတ်ကူးသူများကို အထူးသတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังเด็กนักเรียนเป็นพิเศษ",
        "en": "Slow down and be extra cautious of students",
        "my": "အရှိန်လျှော့ပါ၊ ကျောင်းသားများကို အထူးသတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และระมัดระวังสัตว์",
        "en": "Slow down and watch for animals",
        "my": "အရှိန်လျှော့ပါ၊ တိရစ္ဆာန်များကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 104,
    "category": "traffic_signs",
    "image": "/exam_images/q_104.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง ทางข้างหน้าไม่มีการเปลี่ยนแปลง ห้ามแซง",
        "en": "Slow down, road ahead unchanged, no overtaking",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် လမ်းအခြေအနေမပြောင်းလဲပါ၊ ကျော်တက်ခြင်းမပြုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ทางข้างหน้าไม่มีการเปลี่ยนแปลง ให้ชิดขวา",
        "en": "Slow down, road ahead unchanged, keep right",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် လမ်းအခြေအနေမပြောင်းလဲပါ၊ ယာဘက်မှမောင်းပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ทางตอนนั้นมีการเปลี่ยนแนวทางตามทิศทางที่ชี้ไป",
        "en": "Slow down, follow the indicated direction",
        "my": "အရှိန်လျှော့ပါ၊ လမ်းညွှန်ပြသထားသည့်အတိုင်း လိုက်နာမောင်းနှင်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง ทางข้างหน้าไม่มีการเปลี่ยนแปลง ให้ชิดซ้าย",
        "en": "Slow down, road ahead unchanged, keep left",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် လမ်းအခြေအနေမပြောင်းလဲပါ၊ ဝဲဘက်မှမောင်းပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 105,
    "category": "traffic_signs",
    "image": "/exam_images/q_105.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "สลับกันไป",
        "en": "Alternate / Merging traffic",
        "my": "အလှည့်ကျမောင်းနှင်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางโค้งซ้าย",
        "en": "Left curve ahead",
        "my": "ဘယ်ဘက်ကွေ့ လမ်းကောက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโค้งกลับเริ่มซ้าย",
        "en": "U-turn curve begins on left",
        "my": "ဝဲဘက်မှစတင်သော U-turn အကွေ့",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโค้งกลับเริ่มขวา",
        "en": "U-turn curve begins on right",
        "my": "ယာဘက်မှစတင်သော U-turn အကွေ့",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 106,
    "category": "traffic_signs",
    "image": "/exam_images/q_106.webp",
    "q_th": "เครื่องหมายนี้ หมายความอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သို့ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ทางข้างหน้าโค้งซ้าย",
        "en": "Curve ahead to the left",
        "my": "ရှေ့တွင် ဝဲဘက်သို့ကွေ့သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางข้างหน้าเป็นทางโค้งไปทางขวา",
        "en": "Curve ahead to the right",
        "my": "ရှေ့တွင် ယာဘက်သို့ကွေ့သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางข้างหน้าโค้งรัศมีแคบเลี้ยวซ้าย",
        "en": "Sharp curve ahead to the left",
        "my": "ရှေ့တွင် အကွေ့ကျဉ်း ဝဲဘက်သို့ကွေ့သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางข้างหน้าโค้งกลับเริ่มขวา",
        "en": "Hairpin bend ahead to the right",
        "my": "ရှေ့တွင် U-turn အကွေ့ ယာဘက်သို့စတင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 107,
    "category": "traffic_signs",
    "image": "/exam_images/q_107.webp",
    "q_th": "เครื่องหมายนี้ คือเครื่องหมายอะไร",
    "q_en": "What sign is this?",
    "q_my": "ဤဆိုင်းဘုတ်သည် မည်သည့်ဆိုင်းဘုတ်အမျိုးအစားနည်း။",
    "options": [
      {
        "th": "ที่ห้ามกลับรถ",
        "en": "No U-turn",
        "my": "U-turn ပြန်ကွေ့ခြင်းမပြုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ที่ห้ามแซง",
        "en": "No overtaking",
        "my": "ကျော်တက်ခြင်းမပြုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ที่กลับรถ",
        "en": "U-turn area",
        "my": "U-turn ပြန်ကွေ့ရန်နေရာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เริ่มต้นทางด่วน (ทางหลวงพิเศษ)",
        "en": "Expressway starts",
        "my": "အမြန်လမ်းအစ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 108,
    "category": "traffic_signs",
    "image": "/exam_images/q_108.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง ระมัดระวังและเป็นที่ห้ามคนข้ามถนน",
        "en": "Slow down, be cautious, no pedestrian crossing",
        "my": "အရှိန်လျှော့ပါ၊ သတိပြုပါ၊ လူကူးခွင့်မရှိပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ระมัดระวังช่องเดินรถจักรยาน",
        "en": "Slow down and watch for bicycle lane",
        "my": "အရှိန်လျှော့ပါ၊ စက်ဘီးလမ်းကြောင်းကို သတိပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง ระมัดระวังและหยุดรถให้คนข้ามทาง",
        "en": "Slow down, be cautious, and stop for pedestrians",
        "my": "အရှိန်လျှော့ပါ၊ သတိပြုပါ၊ လမ်းဖြတ်ကူးသူများအတွက် ကားရပ်ပေးပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง ระมัดระวังและกลับรถได้",
        "en": "Slow down, be cautious, and U-turn allowed",
        "my": "အရှိန်လျှော့ပါ၊ သတိပြုပါ၊ U-turn ပြန်ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 109,
    "category": "traffic_signs",
    "image": "/exam_images/q_109.webp",
    "q_th": "จากภาพผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "From the image, what must the driver do?",
    "q_my": "ပုံအရ ယာဉ်မောင်းသူသည် မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ขับรถผ่านไปได้ทันทีเนื่องจากมีป้ายให้ทางแสดงไว้",
        "en": "Proceed immediately as 'Give Way' sign is displayed",
        "my": "လမ်းပေးရန် အမှတ်အသားရှိသဖြင့် ချက်ချင်းမောင်းနှင်သွားနိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถและรอให้รถในทางขวางหน้าขับผ่านไปก่อน",
        "en": "Stop and wait for crossing traffic",
        "my": "ကားရပ်ပြီး လမ်းဖြတ်ကူးမည့်ယာဉ်များကို ဦးစွာသွားခွင့်ပေးပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถผ่านไปได้ทันทีเนื่องจากเป็นเส้นประ",
        "en": "Proceed immediately as it is a broken line",
        "my": "မျဉ်းကျဲဖြစ်သောကြောင့် ချက်ချင်းမောင်းနှင်ကျော်ဖြတ်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ชะลอรถแล้วหยุดคร่อมเส้นประเพื่อให้มองเห็นรถที่มาจากด้านขวามือ",
        "en": "Slow down and stop across the broken line to see traffic from the right",
        "my": "ယာဉ်ကိုအရှိန်လျှော့ပြီး ညာဘက်မှလာသောယာဉ်များကိုမြင်နိုင်ရန် မျဉ်းကျဲပေါ်တွင်ရပ်တန့်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 110,
    "category": "traffic_signs",
    "image": "/exam_images/q_110.webp",
    "q_th": "เส้นทึบข้างทางแสดงว่าอะไร",
    "q_en": "What does the solid edge line indicate?",
    "q_my": "လမ်းဘေးမျဉ်းဆက်သည် မည်သည်ကို ဖော်ပြသနည်း။",
    "options": [
      {
        "th": "ข้างหน้ามีสัญญาณไฟจราจร",
        "en": "Traffic signal ahead",
        "my": "ရှေ့တွင် မီးပွိုင့်ရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เส้นแบ่งเขตรถจักรยาน",
        "en": "Bicycle lane marking",
        "my": "စက်ဘီးလမ်းကြောင်း အမှတ်အသား",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มีทางเดินเท้าอยู่ด้านซ้าย",
        "en": "Pedestrian path on the left",
        "my": "ဘယ်ဘက်တွင် လမ်းလျှောက်သူများအတွက် လမ်းရှိသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เส้นขอบถนน",
        "en": "Road edge line",
        "my": "လမ်းဘေးမျဉ်း",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 111,
    "category": "traffic_signs",
    "image": "/exam_images/q_111.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้จอดรถทับเส้นได้ตลอดเวลา",
        "en": "Parking on the line is allowed at all times",
        "my": "မျဉ်းပေါ်တွင် အမြဲတမ်းရပ်နားနိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้หยุดรถก่อนถึงเส้นแนวหยุดหรือเส้นให้ทาง เพื่อให้คนเดินเท้าข้ามทางผ่านไปก่อน",
        "en": "Stop before the stop line or give-way line to let pedestrians cross",
        "my": "လမ်းလျှောက်သူများဖြတ်ကူးနိုင်ရန် ရပ်တန့်ရမည့်မျဉ်း သို့မဟုတ် လမ်းပေးရမည့်မျဉ်းမတိုင်မီ ရပ်တန့်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้หยุดรถทับเส้นได้ตลอดเวลา",
        "en": "Stopping on the line is allowed at all times",
        "my": "မျဉ်းပေါ်တွင် အမြဲတမ်းရပ်တန့်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เขตหยุดรับ-ส่ง ได้ตลอดเวลา",
        "en": "Pick-up and drop-off zone at all times",
        "my": "လူတင်/လူချရန် အမြဲတမ်းရပ်နားနိုင်သည့်နေရာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 112,
    "category": "traffic_signs",
    "image": "/exam_images/q_112.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what should the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถให้ช้าลง และชิดขวา ขับรถไปตามทางโค้งกลับรัศมีแคบเริ่มซ้าย",
        "en": "Slow down, keep right, and follow the sharp hairpin curve starting left",
        "my": "အရှိန်လျှော့ပြီး ညာဘက်ကိုကပ်မောင်းပါ၊ ဘယ်ဘက်မှစတင်သော အကွေ့ကျဉ်းအတိုင်း မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และชิดขวา ขับรถไปตามทางคดเคี้ยวเริ่มซ้าย",
        "en": "Slow down, keep right, and follow the winding road starting left",
        "my": "အရှိန်လျှော့ပြီး ညာဘက်ကိုကပ်မောင်းပါ၊ ဘယ်ဘက်မှစတင်သော ကွေ့ကောက်သည့်လမ်းအတိုင်း မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง และชิดซ้าย ระมัดระวังทางข้างหน้าเป็นทางคดเคี้ยวเริ่มขวา",
        "en": "Slow down, keep left, and watch out for the winding road starting right",
        "my": "အရှိန်လျှော့ပြီး ဘယ်ဘက်ကိုကပ်မောင်းပါ၊ ညာဘက်မှစတင်သော ကွေ့ကောက်သည့်လမ်းဖြစ်၍ သတိထားပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถให้ช้าลง และชิดซ้าย ขับรถไปตามทางโค้งกลับรัศมีแคบเริ่มขวา",
        "en": "Slow down, keep left, and follow the sharp hairpin curve starting right",
        "my": "အရှိန်လျှော့ပြီး ဘယ်ဘက်ကိုကပ်မောင်းပါ၊ ညာဘက်မှစတင်သော အကွေ့ကျဉ်းအတိုင်း မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 113,
    "category": "traffic_signs",
    "image": "/exam_images/q_113.webp",
    "q_th": "เครื่องหมายนี้ หมายความว่าอย่างไร",
    "q_en": "What does this sign / marking mean?",
    "q_my": "ဤအမှတ်အသားသည် မည်သည့်အဓိပ္ပာယ်ကို ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "เขตปลอดภัย หรือเกาะสี",
        "en": "Safety zone or traffic island markings",
        "my": "ဘေးကင်းလုံခြုံသောနေရာ သို့မဟုတ် ယာဉ်အသွားအလာခွဲခြားသည့်အမှတ်အသား",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เขตหยุดรถ",
        "en": "No stopping zone",
        "my": "ယာဉ်ရပ်တန့်ရန်နေရာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เขตหยุดรับ-ส่ง",
        "en": "Pick-up and drop-off zone",
        "my": "လူတင်/လူချရန် ယာဉ်ရပ်နားသည့်နေရာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เขตจอดรถ",
        "en": "Parking zone",
        "my": "ယာဉ်ရပ်နားရန်နေရာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 114,
    "category": "traffic_signs",
    "image": "/exam_images/q_114.webp",
    "q_th": "เมื่อพบเครื่องหมายนี้ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When encountering this sign, what must the driver do?",
    "q_my": "ဤဆိုင်းဘုတ်အမှတ်အသားကို တွေ့ရှိပါက ယာဉ်မောင်းသူ မည်သို့လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ให้ผู้ขับขี่ชะลอความเร็วลง และรีบเร่งเครื่องไปก่อน",
        "en": "Slow down and speed up to pass quickly",
        "my": "အရှိန်လျှော့ပြီး အမြန်ကျော်တက်သွားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ผู้ขับขี่ ขับรถให้ช้าลง แล้วแซงได้",
        "en": "Slow down and overtake",
        "my": "အရှိန်လျှော့ပြီး ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ผู้ขับขี่ขับรถอย่างรวดเร็ว",
        "en": "Drive fast",
        "my": "မော်တော်ယာဉ်ကို အမြန်မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้ช้าลง หากเห็นรถคันอื่นหรือคนเดินเท้าในทางขวางหน้า ต้องหยุดรถก่อนถึงแนวเส้นให้ทาง",
        "en": "Slow down; if other vehicles or pedestrians are crossing, stop before the give-way line",
        "my": "အရှိန်လျှော့ပါ၊ ရှေ့တွင် အခြားယာဉ် သို့မဟုတ် လမ်းလျှောက်သူများရှိပါက လမ်းပေးရမည့်မျဉ်းမတိုင်မီ ရပ်တန့်ပါ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 115,
    "category": "traffic_signs",
    "image": "/exam_images/q_115.webp",
    "q_th": "เมื่อต้องขับรถเข้าใกล้ทางรถไฟที่ไม่มีเครื่องกั้น ข้อใดต่อไปนี้กล่าวถูกต้อง",
    "q_en": "When driving near an unguarded railway crossing, which of the following is correct?",
    "q_my": "အတားအဆီးမရှိသော မီးရထားလမ်းကူးအနီးသို့ မောင်းနှင်သည့်အခါ အောက်ပါတို့အနက် မည်သည်မှာ မှန်ကန်သနည်း။",
    "options": [
      {
        "th": "ชะลอรถและควรเตรียมพร้อมที่จะหยุดรถ",
        "en": "Slow down and prepare to stop",
        "my": "အရှိန်လျှော့ပြီး ရပ်တန့်ရန် အသင့်ပြင်ထားပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรเตือนเพื่อความปลอดภัย",
        "en": "Sound horn for safety",
        "my": "ဘေးကင်းစေရန် ဟွန်းတီးအချက်ပေးပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพิ่มความเร็วเพื่อให้ผ่านไปได้เร็ว",
        "en": "Increase speed to pass quickly",
        "my": "မြန်မြန်ကျော်ဖြတ်နိုင်ရန် အရှိန်မြှင့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟฉุกเฉิน",
        "en": "Turn on hazard lights",
        "my": "အရေးပေါ်မီး (Hazard light) ဖွင့်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 116,
    "category": "traffic_signs",
    "image": "/exam_images/q_116.webp",
    "q_th": "เมื่อขับผ่านทางที่มีป้ายเตือนว่า “ระวังหินร่วง” ท่านควรปฏิบัติอย่างไร",
    "q_en": "When driving past a warning sign that says 'Watch for Falling Rocks', what should you do?",
    "q_my": "'ကျောက်တုံးများ ပြုတ်ကျနိုင်သည်ကို သတိပြုရန်' သတိပေးဆိုင်းဘုတ်ရှိသော လမ်းကို ဖြတ်မောင်းသည့်အခါ မည်သို့ဆောင်ရွက်သင့်သနည်း။",
    "options": [
      {
        "th": "ไม่ต้องทำอะไร เพราะโอกาสที่จะเกิดยาก",
        "en": "Do nothing, as it is unlikely to happen",
        "my": "ဘာမှလုပ်စရာမလိုပါ၊ ဖြစ်နိုင်ခြေနည်းသောကြောင့်ဖြစ်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หลีกเลี่ยงไปใช้เส้นทางอื่น",
        "en": "Avoid and use an alternative route",
        "my": "ရှောင်လွှဲပြီး အခြားလမ်းကြောင်းကို အသုံးပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รีบเร่งความเร็วเพื่อผ่านไปอย่างรวดเร็ว",
        "en": "Speed up to pass through quickly",
        "my": "မြန်မြန်ဖြတ်သန်းသွားနိုင်ရန် အရှိန်အမြန်မြှင့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็วลง ขับขี่ด้วยความระมัดระวังมากขึ้น",
        "en": "Slow down and drive with extra caution",
        "my": "အရှိန်လျှော့ပြီး ပိုမိုသတိထား၍ မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 117,
    "category": "traffic_signs",
    "image": "/exam_images/q_117.webp",
    "q_th": "เมื่อท่านขับรถมองเห็นเครื่องหมายบนพื้นทาง (เส้นชะลอความเร็ว Rumble Strips) ตามภาพ ท่านต้องปฏิบัติอย่างไร",
    "q_en": "When you see the rumble strips marking on the road surface as shown in the picture, what must you do?",
    "q_my": "ပုံပါ လမ်းမျက်နှာပြင်ပေါ်ရှိ အရှိန်လျှော့တုန်ခါမျဉ်း (Rumble Strips) ကို မြင်တွေ့ရပါက သင်မည်သို့ ဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "ทิ้งระยะห่างจากโค้ง",
        "en": "Keep distance from the curve",
        "my": "အကွေ့မှ အကွာအဝေးထား၍ မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เลือกใช้ช่องทางให้ถูกต้อง",
        "en": "Choose the correct lane",
        "my": "မှန်ကန်သောယာဉ်ကြောကို ရွေးချယ်အသုံးပြုပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เว้นระยะห่างให้ถูกต้อง",
        "en": "Maintain a safe following distance",
        "my": "လုံခြုံသောအကွာအဝေးကို ထိန်းသိမ်းမောင်းနှင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความเร็วอย่างระมัดระวัง",
        "en": "Drive with caution",
        "my": "သတိထား၍ မောင်းနှင်ပါ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 118,
    "category": "traffic_laws",
    "image": null,
    "q_th": "หากใบอนุญาตขับรถชำรุด สูญหาย ต้องดำเนินการภายในกี่วัน?",
    "q_en": "If your driving license is damaged or lost, within how many days must you take action?",
    "q_my": "ယာဉ်မောင်းလိုင်စင် ပျက်စီးသွားပါက သို့မဟုတ် ပျောက်ဆုံးသွားပါက ရက်ပေါင်းမည်မျှအတွင်း အကြောင်းကြားရမည်နည်း။",
    "options": [
      {
        "th": "15 วัน",
        "en": "15 days",
        "my": "၁၅ ရက်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "7 วัน",
        "en": "7 days",
        "my": "၇ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "30 วัน",
        "en": "30 days",
        "my": "၃၀ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "20 วัน",
        "en": "20 days",
        "my": "၂၀ ရက်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 119,
    "category": "traffic_laws",
    "image": null,
    "q_th": "จากภาพต่อไปนี้ ข้อใดถูกต้อง",
    "q_en": "From the following images, which one is correct?",
    "q_my": "အောက်ပါပုံများထဲမှ မည်သည့်ပုံသည် မှန်ကန်သနည်း။",
    "options": [
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000019.webp",
        "isCorrect": true
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000017.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000020.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000018.webp",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 120,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ในเขตกรุงเทพ เมืองพัทยา หรือเทศบาล ต้องขับด้วยความเร็วไม่เกินเท่าไหร่ (สำหรับรถยนต์ส่วนบุคคล)",
    "q_en": "What is the speed limit in Bangkok, Pattaya, or municipal areas for private cars?",
    "q_my": "ဘန်ကောက်၊ ဖတ္တရား သို့မဟုတ် မြို့ပြနယ်မြေများအတွင်း ကိုယ်ပိုင်ကားများအတွက် အမြန်နှုန်းကန့်သတ်ချက်မှာ မည်မျှဖြစ်သနည်း။",
    "options": [
      {
        "th": "ไม่เกิน 80 กิโลเมตรต่อชั่วโมง",
        "en": "Not exceeding 80 km/h",
        "my": "တစ်နာရီလျှင် ၈၀ ကီလိုမီတာထက် မပိုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่เกิน 100 กิโลเมตรต่อชั่วโมง",
        "en": "Not exceeding 100 km/h",
        "my": "တစ်နာရီလျှင် ၁၀၀ ကီလိုမီတာထက် မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เกิน 90 กิโลเมตรต่อชั่วโมง",
        "en": "Not exceeding 90 km/h",
        "my": "တစ်နာရီလျှင် ၉၀ ကီလိုမီတာထက် မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เกิน 60 กิโลเมตรต่อชั่วโมง",
        "en": "Not exceeding 60 km/h",
        "my": "တစ်နာရီလျှင် ၆၀ ကီလိုမီတာထက် မပိုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 121,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000024.webp",
    "q_th": "จากภาพรถคันใดมีสิทธิ์ใช้ทางได้ก่อน",
    "q_en": "From the image, which vehicle has the right of way?",
    "q_my": "ပုံအရ မည်သည့်ယာဉ်က ဦးစွာသွားပိုင်ခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "รถคัน ก. เนื่องจากอยู่ในทางโท",
        "en": "Vehicle A, because it is on the minor road",
        "my": "ကား A (လမ်းသွယ်ဖြစ်သောကြောင့်)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคัน ข. เนื่องจากอยู่ในทางโท",
        "en": "Vehicle B, because it is on the minor road",
        "my": "ကား B (လမ်းသွယ်ဖြစ်သောကြောင့်)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคัน ข. เนื่องจากอยู่ในทางเอก",
        "en": "Vehicle B, because it is on the major road",
        "my": "ကား B (လမ်းမကြီးပေါ်တွင် ရှိသောကြောင့်)",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถคัน ก. เนื่องจากอยู่ในทางเอก",
        "en": "Vehicle A, because it is on the major road",
        "my": "ကား A (လမ်းမကြီးပေါ်တွင် ရှိသောကြောင့်)",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 122,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000026.webp",
    "q_th": "จากภาพรถคัน ก. ต้องการขับรถตรงไปจะต้องปฏิบัติอย่างไร",
    "q_en": "From the image, if vehicle A wants to go straight, what should the driver do?",
    "q_my": "ပုံအရ ကား A သည် တည့်တည့်မောင်းသွားလိုလျှင် မည်သို့ပြုလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "ขับผ่านไปได้เลย",
        "en": "Drive through",
        "my": "တိုက်ရိုက်မောင်းနှင်သွားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรอให้รถคัน ข. และ ค. ขับผ่านไปก่อน",
        "en": "Wait for vehicle B and C to pass first",
        "my": "ကား B နှင့် C တို့ကို ရှောင်ပေးရန် ခေတ္တစောင့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรอให้รถคัน ข. ขับผ่านไปก่อน",
        "en": "Wait for vehicle B to pass first",
        "my": "ကား B ကို ရှောင်ပေးရန် ခေတ္တစောင့်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หยุดรอให้รถคัน ค. ขับผ่านไปก่อน",
        "en": "Wait for vehicle C to pass first",
        "my": "ကား C ကို ရှောင်ပေးရန် ခေတ္တစောင့်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 123,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ขับรถกระทำผิดตามกฎหมายจราจรทางบกและได้รับใบสั่ง ต้องติดต่อชำระค่าปรับภายในกี่วัน",
    "q_en": "A driver who violates traffic law and receives a ticket must pay the fine within how many days?",
    "q_my": "ယာဉ်စည်းကမ်းဖောက်ဖျက်၍ ဒဏ်ငွေဆောင်ရန် လက်မှတ်ရရှိပါက ရက်ပေါင်းမည်မျှအတွင်း ပေးဆောင်ရမည်နည်း။",
    "options": [
      {
        "th": "7 วัน",
        "en": "7 days",
        "my": "၇ ရက်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "15 วัน",
        "en": "15 days",
        "my": "၁၅ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "10 วัน",
        "en": "10 days",
        "my": "၁၀ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "30 วัน",
        "en": "30 days",
        "my": "၃၀ ရက်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 124,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000029.webp",
    "q_th": "กรณีรถทั้งสองคันมาถึงพร้อมกันบนทางร่วมทางแยก รถคันใดมีสิทธิ์ขับผ่านไปได้ก่อน",
    "q_en": "If both vehicles arrive at an intersection at the same time, which vehicle has the right of way?",
    "q_my": "ယာဉ်နှစ်စီးလမ်းဆုံသို့ တစ်ပြိုင်နက်ရောက်ရှိလာပါက မည်သည့်ယာဉ်က ဦးစွာသွားပိုင်ခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "รถคัน B",
        "en": "Vehicle B",
        "my": "ကား B",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทั้งรถ A และรถ B",
        "en": "Both vehicle A and B",
        "my": "ကား A နှင့် B နှစ်စီးလုံး",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคัน A",
        "en": "Vehicle A",
        "my": "ကား A",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คันที่มาถึงทางร่วมทางแยกก่อน",
        "en": "The vehicle that arrived first",
        "my": "လမ်းဆုံသို့ အရင်ရောက်သည့်ကား",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 125,
    "category": "traffic_laws",
    "image": null,
    "q_th": "การย้ายรถต้องแจ้งต่อนายทะเบียนภายในกี่วัน",
    "q_en": "When moving/transferring a vehicle, you must notify the registrar within how many days?",
    "q_my": "ယာဉ်ပြောင်းရွှေ့ပါက မှတ်ပုံတင်ရုံးသို့ ရက်ပေါင်းမည်မျှအတွင်း အကြောင်းကြားရမည်နည်း။",
    "options": [
      {
        "th": "15 วัน",
        "en": "15 days",
        "my": "၁၅ ရက်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "20 วัน",
        "en": "20 days",
        "my": "၂၀ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "25 วัน",
        "en": "25 days",
        "my": "၂၅ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "30 วัน",
        "en": "30 days",
        "my": "၃၀ ရက်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 126,
    "category": "traffic_laws",
    "image": null,
    "q_th": "จากภาพต่อไปนี้ ภาพใดแสดงการจอดรถอย่างถูกต้อง",
    "q_en": "From the following images, which one shows the correct parking method?",
    "q_my": "အောက်ပါပုံများထဲမှ မည်သည့်ပုံသည် မှန်ကန်သောကားပါကင်စနစ်ကို ပြသနေသနည်း။",
    "options": [
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000237.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000240.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000238.webp",
        "isCorrect": true
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000239.webp",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 127,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ขับรถที่ดื่มสุราเมื่อวัดระดับแอลกอฮอล์ในลมหายใจจะต้องไม่เกินเท่าใด",
    "q_en": "For drivers who have consumed alcohol, what is the maximum permissible breath alcohol concentration?",
    "q_my": "အရက်သေစာသောက်စားပြီး မောင်းနှင်သူများ၏ အသက်ရှူလမ်းကြောင်းအတွင်း အရက်ပြန်ပါဝင်မှုပမာဏ မည်မျှထက် မပိုရသနည်း။",
    "options": [
      {
        "th": "ไม่เกิน 60 มิลลิกรัมเปอร์เซ็น",
        "en": "Not exceeding 60 mg%",
        "my": "၆၀ မီလီဂရမ်ရာခိုင်နှုန်းထက် မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เกิน 80 มิลลิกรัมเปอร์เซ็น",
        "en": "Not exceeding 80 mg%",
        "my": "၈၀ မီလီဂရမ်ရာခိုင်နှုန်းထက် မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เกิน 70 มิลลิกรัมเปอร์เซ็น",
        "en": "Not exceeding 70 mg%",
        "my": "၇၀ မီလီဂရမ်ရာခိုင်နှုန်းထက် မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เกิน 50 มิลลิกรัมเปอร์เซ็น",
        "en": "Not exceeding 50 mg%",
        "my": "၅၀ မီလီဂရမ်ရာခိုင်နှုန်းထက် မပိုရ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 128,
    "category": "traffic_laws",
    "image": null,
    "q_th": "การต่ออายุใบอนุญาตขับรถส่วนบุคคล (5 ปี) สามารถต่อก่อนล่วงหน้าได้เท่าใด",
    "q_en": "How many months in advance can you renew a 5-year personal driver's license?",
    "q_my": "ပုဂ္ဂလိကယာဉ်မောင်းလိုင်စင် (၅ နှစ်သက်တမ်း) ကို ဘယ်နှလကြိုတင် သက်တမ်းတိုးနိုင်သလဲ။",
    "options": [
      {
        "th": "4 เดือน",
        "en": "4 months",
        "my": "၄ လ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "6 เดือน",
        "en": "6 months",
        "my": "၆ လ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "3 เดือน",
        "en": "3 months",
        "my": "၃ လ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "5 เดือน",
        "en": "5 months",
        "my": "၅ လ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 129,
    "category": "traffic_laws",
    "image": null,
    "q_th": "การจอดรถต้องจอดให้ห่างขอบทางไม่เกินกี่เซ็นติเมตร",
    "q_en": "How many centimeters from the curb must you park your vehicle?",
    "q_my": "ကားရပ်သည့်အခါ လမ်းဘေးပလက်ဖောင်းနှင့် ဘယ်နှစ်စင်တီမီတာထက်မပိုဘဲ ရပ်ရမည်နည်း။",
    "options": [
      {
        "th": "ห่างไม่เกิน 35 เซ็นติเมตร",
        "en": "No more than 35 cm",
        "my": "၃၅ စင်တီမီတာထက်မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห่างไม่เกิน 25 เซ็นติเมตร",
        "en": "No more than 25 cm",
        "my": "၂၅ စင်တီမီတာထက်မပိုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ห่างไม่เกิน 30 เซ็นติเมตร",
        "en": "No more than 30 cm",
        "my": "၃၀ စင်တီမီတာထက်မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห่างไม่เกิน 40 เซ็นติเมตร",
        "en": "No more than 40 cm",
        "my": "၄၀ စင်တီမီတာထက်မပိုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 130,
    "category": "traffic_laws",
    "image": null,
    "q_th": "การเปลี่ยนสีรถต้องแจ้งต่อนายทะเบียนภายในกี่วัน",
    "q_en": "Within how many days must you notify the registrar if you change your vehicle's color?",
    "q_my": "ယာဉ်အရောင်ပြောင်းလဲပါက မော်တော်ယာဉ်ဌာနသို့ ဘယ်နှစ်ရက်အတွင်း အကြောင်းကြားရမည်နည်း။",
    "options": [
      {
        "th": "10 วัน",
        "en": "10 days",
        "my": "၁၀ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "15 วัน",
        "en": "15 days",
        "my": "၁၅ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "20 วัน",
        "en": "20 days",
        "my": "၂၀ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "7 วัน",
        "en": "7 days",
        "my": "၇ ရက်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 131,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ขับรถใช้ใบอนุญาตขับรถที่สิ้นอายุมีความผิดอย่างไร",
    "q_en": "What is the penalty for driving with an expired license?",
    "q_my": "သက်တမ်းကုန်လွန်နေသော ယာဉ်မောင်းလိုင်စင်ကို အသုံးပြု၍ မောင်းနှင်ပါက မည်သို့အပြစ်ပေးခံရမည်နည်း။",
    "options": [
      {
        "th": "ปรับไม่เกินสองพันบาท",
        "en": "Fine up to 2,000 Baht",
        "my": "ဒဏ်ငွေ ဘတ် ၂၀၀၀ ထက်မပိုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จำคุกไม่เกินหนึ่งเดือน",
        "en": "Imprisonment up to 1 month",
        "my": "ထောင်ဒဏ် ၁ လထက်မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปรับไม่เกินห้าพันบาท",
        "en": "Fine up to 5,000 Baht",
        "my": "ဒဏ်ငွေ ဘတ် ၅၀၀၀ ထက်မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จำคุกไม่เกินสามเดือน",
        "en": "Imprisonment up to 3 months",
        "my": "ထောင်ဒဏ် ၃ လထက်မပိုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 132,
    "category": "traffic_laws",
    "image": null,
    "q_th": "สาเหตุใดที่ทำให้เกิดอุบัติเหตุมากที่สุด",
    "q_en": "What is the most common cause of traffic accidents?",
    "q_my": "ယာဉ်မတော်တဆမှု အများဆုံးဖြစ်ပွားရသည့် အကြောင်းရင်းမှာ အဘယ်နည်း။",
    "options": [
      {
        "th": "ขับรถจี้ท้ายรถคันหน้า",
        "en": "Tailgating",
        "my": "အရှေ့မှကားကို ကပ်၍မောင်းနှင်ခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถเร็วเกินอัตราที่กฎหมายกำหนด",
        "en": "Speeding (exceeding the legal limit)",
        "my": "ဥပဒေကသတ်မှတ်ထားသည့် အရှိန်နှုန်းထက် ပိုမိုမောင်းနှင်ခြင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงในที่ห้ามแซง",
        "en": "Overtaking in prohibited areas",
        "my": "အကျော်မခံသည့်နေရာတွင် ကျော်တက်ခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถตัดหน้าอย่างกระชั้นชิด",
        "en": "Cutting off other vehicles",
        "my": "အရှေ့မှရုတ်တရက် ဝင်ရောက်မောင်းနှင်ခြင်း",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 133,
    "category": "traffic_laws",
    "image": null,
    "q_th": "จากภาพต่อไปนี้ ภาพใดแสดงการจอดรถอย่างถูกต้อง",
    "q_en": "Which of the following images shows correct parking?",
    "q_my": "အောက်ပါပုံများအနက် မည်သည့်ပုံသည် ကားရပ်နားခြင်းကို မှန်ကန်စွာ ပြသထားသနည်း။",
    "options": [
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000333.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000336.webp",
        "isCorrect": true
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000334.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000000335.webp",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 134,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ขณะขับรถตรวจพบแอลกอฮอล์ในร่างกายเกินกว่าที่กฎหมายกำหนดมีโทษอย่างไร",
    "q_en": "What is the penalty for driving with blood alcohol content exceeding the legal limit?",
    "q_my": "ယာဉ်မောင်းနှင်စဉ် အရက်သေစာသောက်စားပြီး ဥပဒေကသတ်မှတ်ထားသည်ထက် ပိုမိုပါဝင်နေပါက မည်သို့အပြစ်ပေးခံရမည်နည်း။",
    "options": [
      {
        "th": "จำคุกไม่เกิน 3 เดือนหรือปรับตั้งแต่ 1,000 ถึง 50,000 บาท",
        "en": "Imprisonment up to 3 months or fine from 1,000 to 50,000 Baht",
        "my": "ထောင်ဒဏ် ၃ လထက်မပိုရ သို့မဟုတ် ဘတ် ၁,၀၀၀ မှ ၅၀,၀၀၀ အထိ ဒဏ်ငွေဆောင်ရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปรับไม่เกิน 10,000 บาท",
        "en": "Fine up to 10,000 Baht",
        "my": "ဒဏ်ငွေ ဘတ် ၁၀,၀၀၀ ထက်မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จำคุกไม่เกิน 1 ปีหรือปรับตั้งแต่ 5,000 ถึง 20,000 บาท หรือทั้งจำทั้งปรับ",
        "en": "Imprisonment up to 1 year or fine from 5,000 to 20,000 Baht, or both",
        "my": "ထောင်ဒဏ် ၁ နှစ်ထက်မပိုရ သို့မဟုတ် ဘတ် ၅,၀၀၀ မှ ၂၀,၀၀၀ အထိ ဒဏ်ငွေဆောင်ရမည် (သို့မဟုတ်) နှစ်ရပ်လုံးပြစ်ဒဏ်ခံရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ปรับไม่เกิน 50,000 บาท",
        "en": "Fine up to 50,000 Baht",
        "my": "ဒဏ်ငွေ ဘတ် ၅၀,၀၀၀ ထက်မပိုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 135,
    "category": "traffic_laws",
    "image": null,
    "q_th": "รถที่ไม่เสียภาษีประจำปีภายในกำหนดจะต้องเสียเงินเพิ่มเท่าใด",
    "q_en": "What is the surcharge for failing to pay annual vehicle tax on time?",
    "q_my": "နှစ်စဉ်ယာဉ်ခွန်ကို သတ်မှတ်ရက်အတွင်း မပေးဆောင်ပါက မည်မျှပိုပေးဆောင်ရမည်နည်း။",
    "options": [
      {
        "th": "ร้อยละ 20 ต่อปี",
        "en": "20% per year",
        "my": "တစ်နှစ်လျှင် ၂၀ ရာခိုင်နှုန်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ร้อยละ 10 ต่อเดือน",
        "en": "10% per month",
        "my": "တစ်လလျှင် ၁၀ ရာခိုင်နှုန်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ร้อยละ 1 ต่อเดือน",
        "en": "1% per month",
        "my": "တစ်လလျှင် ၁ ရာခိုင်နှုန်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ร้อยละ 1 ต่อปี",
        "en": "1% per year",
        "my": "တစ်နှစ်လျှင် ၁ ရာခိုင်နှုန်း",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 136,
    "category": "traffic_laws",
    "image": null,
    "q_th": "รถจักรยานยนต์ที่มีอายุครบกี่ปีต้องนำไปตรวจสภาพรถก่อนเสียภาษีประจำปี",
    "q_en": "How old must a motorcycle be before it requires an inspection prior to paying annual tax?",
    "q_my": "ဆိုင်ကယ်သက်တမ်း ဘယ်နှစ်နှစ်ပြည့်လျှင် နှစ်စဉ်ယာဉ်ခွန်မဆောင်မီ စစ်ဆေးမှုခံယူရမည်နည်း။",
    "options": [
      {
        "th": "2 ปี",
        "en": "2 years",
        "my": "၂ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "1 ปี",
        "en": "1 year",
        "my": "၁ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "3 ปี",
        "en": "3 years",
        "my": "၃ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "5 ปี",
        "en": "5 years",
        "my": "၅ နှစ်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 137,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ใดได้รับยกเว้นไม่ต้องสวมหมวกนิรภัยขณะโดยสารรถจักรยานยนต์",
    "q_en": "Who is exempted from wearing a helmet while riding as a passenger on a motorcycle?",
    "q_my": "ဆိုင်ကယ်စီးနင်းစဉ် မည်သူတို့သည် ဦးထုပ်ဆောင်းရန် မလိုဟု ကင်းလွတ်ခွင့်ရသနည်း။",
    "options": [
      {
        "th": "คนโดยสาร",
        "en": "Passenger",
        "my": "ခရီးသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ภิกษุ สามเณร",
        "en": "Monks and Novices",
        "my": "ရဟန်းနှင့် ကိုရင်များ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เด็ก",
        "en": "Child",
        "my": "ကလေး",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนขับรถ",
        "en": "Driver",
        "my": "ယာဉ်မောင်းသူ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 138,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ในขณะขับรถผู้ขับขี่ต้องมีเอกสารใดใช้คู่กับใบอนุญาตขับรถ",
    "q_en": "While driving, which document must the driver carry alongside their driver's license?",
    "q_my": "ယာဉ်မောင်းနှင်နေစဉ် ယာဉ်မောင်းလိုင်စင်နှင့်အတူ မည်သည့်စာရွက်စာတမ်းကို ဆောင်ထားရမည်နည်း။",
    "options": [
      {
        "th": "บัตรประจำตัวประชาชน",
        "en": "National ID card",
        "my": "နိုင်ငံသားစိစစ်ရေးကတ်ပြား",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บัตรประกันสังคม",
        "en": "Social security card",
        "my": "လူမှုဖူလုံရေးကတ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สำเนาทะเบียนบ้าน",
        "en": "House registration copy",
        "my": "အိမ်ထောင်စုစာရင်းမိတ္တူ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สำเนาภาพถ่ายคู่มือจดทะเบียนรถ",
        "en": "Copy of the vehicle registration book",
        "my": "ယာဉ်မှတ်ပုံတင်စာအုပ်မိတ္တူ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 139,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ขับรถไม่มีใบอนุญาตขับรถ มีความผิดอย่างไร",
    "q_en": "What is the penalty for driving without a driver's license?",
    "q_my": "ယာဉ်မောင်းလိုင်စင်မပါဘဲ ယာဉ်မောင်းနှင်ပါက မည်သို့အပြစ်ပေးခံရမည်နည်း။",
    "options": [
      {
        "th": "ปรับไม่เกิน 2,000 บาท",
        "en": "Fine not exceeding 2,000 Baht",
        "my": "ဒဏ်ငွေ ၂,၀၀၀ ဘတ်ထက်မပိုစေရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จำคุกไม่เกิน 1 เดือน หรือปรับไม่เกิน 1,000 บาท หรือทั้งจำทั้งปรับ",
        "en": "Imprisonment not exceeding 1 month, or a fine not exceeding 1,000 Baht, or both",
        "my": "ထောင်ဒဏ် (၁) လထက်မပိုစေရ သို့မဟုတ် ငွေဒဏ် (၁,၀၀၀) ဘတ်ထက်မပိုစေရ သို့မဟုတ် ဒဏ်နှစ်ရပ်လုံးကျခံစေရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จำคุกไม่เกิน 1 ปี",
        "en": "Imprisonment not exceeding 1 year",
        "my": "ထောင်ဒဏ် (၁) နှစ်ထက်မပိုစေရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปรับไม่เกิน 5,000 บาท",
        "en": "Fine not exceeding 5,000 Baht",
        "my": "ဒဏ်ငွေ ၅,၀၀၀ ဘတ်ထက်မပိုစေရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 140,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ใบอนุญาตขับรถชนิดชั่วคราวมีอายุกี่ปี",
    "q_en": "How many years is a temporary driver's license valid for?",
    "q_my": "ယာယီယာဉ်မောင်းလိုင်စင်၏ သက်တမ်းမှာ မည်မျှရှိသနည်း။",
    "options": [
      {
        "th": "4 ปี",
        "en": "4 years",
        "my": "၄ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "1 ปี",
        "en": "1 year",
        "my": "၁ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "3 ปี",
        "en": "3 years",
        "my": "၃ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "2 ปี",
        "en": "2 years",
        "my": "၂ နှစ်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 141,
    "category": "traffic_laws",
    "image": null,
    "q_th": "การโอนรถต้องแจ้งต่อนายทะเบียนภายในกี่วัน",
    "q_en": "Within how many days must a vehicle transfer be registered with the registrar?",
    "q_my": "ယာဉ်ပိုင်ရှင်အမည်ပြောင်းလဲခြင်း (အမည်ပေါက်လွှဲပြောင်းခြင်း) ကို မည်မျှရက်အတွင်း မှတ်ပုံတင်ရုံးသို့ အကြောင်းကြားရမည်နည်း။",
    "options": [
      {
        "th": "20 วัน",
        "en": "20 days",
        "my": "၂၀ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "15 วัน",
        "en": "15 days",
        "my": "၁၅ ရက်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "30 วัน",
        "en": "30 days",
        "my": "၃၀ ရက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "45 วัน",
        "en": "45 days",
        "my": "၄၅ ရက်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 142,
    "category": "traffic_laws",
    "image": null,
    "q_th": "รถยนต์ที่มีอายุครบกี่ปีต้องนำไปตรวจสภาพรถก่อนเสียภาษีประจำปี",
    "q_en": "How old must a vehicle be before it requires a mandatory inspection prior to annual tax payment?",
    "q_my": "ယာဉ်သက်တမ်း မည်မျှရှိပါက နှစ်စဉ်အခွန်မဆောင်မီ ယာဉ်စစ်ဆေးမှုခံယူရမည်နည်း။",
    "options": [
      {
        "th": "6 ปี",
        "en": "6 years",
        "my": "၆ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "3 ปี",
        "en": "3 years",
        "my": "၃ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "5 ปี",
        "en": "5 years",
        "my": "၅ နှစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "7 ปี",
        "en": "7 years",
        "my": "၇ နှစ်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 143,
    "category": "traffic_laws",
    "image": null,
    "q_th": "การหยุดรถบริเวณทางแยกผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "How must a driver stop at an intersection?",
    "q_my": "လမ်းဆုံလမ်းခွများတွင် ယာဉ်ကိုရပ်တန့်သည့်အခါ မည်သို့ပြုမူရမည်နည်း။",
    "options": [
      {
        "th": "หยุดทับเส้นแนวหยุด",
        "en": "Stop on the stop line",
        "my": "ရပ်တန့်သည့်မျဉ်းပေါ်တွင် တင်ရပ်ခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดเลยเส้นแนวหยุด",
        "en": "Stop past the stop line",
        "my": "ရပ်တန့်သည့်မျဉ်းကို ကျော်ရပ်ခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดเลยป้ายหยุด",
        "en": "Stop past the stop sign",
        "my": "ရပ်တန့်သည့်အမှတ်အသားကို ကျော်ရပ်ခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดหลังเส้นแนวหยุด",
        "en": "Stop behind the stop line",
        "my": "ရပ်တန့်သည့်မျဉ်း၏ အနောက်ဘက်တွင် ရပ်ခြင်း",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 144,
    "category": "traffic_laws",
    "image": null,
    "q_th": "เขตปลอดภัย หมายความว่าอย่างไร",
    "q_en": "What does a 'Safety Zone' mean?",
    "q_my": "လုံခြုံရေးဇုန် (Safety Zone) ဆိုသည်မှာ အဘယ်နည်း။",
    "options": [
      {
        "th": "พื้นที่ในทางเดินรถที่มีเครื่องหมายแสดงไว้ให้เห็นได้ชัดเจนทุกเวลาสำหรับให้คนเดินเท้าที่ข้ามทางหยุดรอ หรือให้คนที่ขึ้นหรือลงจากรถหยุดรอก่อนจะข้ามทางต่อไป",
        "en": "An area in the roadway clearly marked at all times for pedestrians waiting to cross or for passengers to wait before crossing.",
        "my": "လမ်းသွားလမ်းလာများ လမ်းကူးရန်စောင့်ဆိုင်းရန် သို့မဟုတ် ကားပေါ်တက်/ဆင်းသူများ စောင့်ဆိုင်းရန်အတွက် နေရာတိုင်းတွင် ရှင်းလင်းစွာ အမှတ်အသားပြုထားသော နေရာဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "พื้นที่มีเครื่องหมายแสดงไว้ให้ผู้ขับขี่เห็นว่าปลอดภัยขับต่อไปได้",
        "en": "An area marked to show drivers that it is safe to proceed.",
        "my": "ယာဉ်မောင်းသူများ ဆက်လက်မောင်းနှင်ရန် လုံခြုံကြောင်း အမှတ်အသားပြထားသည့်နေရာဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เขตที่คนเดินเท้าสามารถข้ามทางได้โดยไม่ต้องหยุดรอ",
        "en": "An area where pedestrians can cross without waiting.",
        "my": "လမ်းသွားလမ်းလာများ စောင့်ဆိုင်းစရာမလိုဘဲ ကူးနိုင်သောနေရာဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เขตที่ผู้ขับขี่สามารถนำรถผ่านเข้าไปได้",
        "en": "An area where drivers can drive their vehicles through.",
        "my": "ယာဉ်မောင်းသူများ ယာဉ်ဖြင့်ဖြတ်သန်းသွားလာနိုင်သောနေရာဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 145,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ขับขี่ต้องขับรถให้ห่างจากรถคันหน้าเท่าไร",
    "q_en": "What distance should the driver maintain from the vehicle in front?",
    "q_my": "ယာဉ်မောင်းသူသည် ရှေ့ယာဉ်နှင့် မည်မျှကွာဟချက်ထား၍ မောင်းနှင်ရမည်နည်း။",
    "options": [
      {
        "th": "ในระยะที่จะสามารถหยุดรถได้โดยปลอดภัย",
        "en": "At a distance that allows for a safe stop",
        "my": "လုံခြုံစိတ်ချစွာ ရပ်တန့်နိုင်သည့်အကွာအဝေး",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่น้อยกว่า 3 เมตร",
        "en": "Not less than 3 meters",
        "my": "၃ မီတာထက် မနည်းစေရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่น้อยกว่า 2 เมตร",
        "en": "Not less than 2 meters",
        "my": "၂ မီတာထက် မနည်းစေရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่น้อยกว่า 1 เมตร",
        "en": "Not less than 1 meter",
        "my": "၁ မီတာထက် မနည်းစေရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 146,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ขับขี่ต้องการจะเลี้ยวซ้ายต้องขับรถในช่องเดินรถด้านซ้ายก่อนถึงทางเลี้ยวกี่เมตร",
    "q_en": "How many meters before an intersection must a driver move into the left lane to turn left?",
    "q_my": "ယာဉ်မောင်းသူသည် ဘယ်ဘက်ကိုကွေ့လိုပါက ကွေ့မည့်လမ်းမရောက်မီ မည်မျှအကွာအဝေးတွင် ဘယ်ဘက်လမ်းကြောင်းသို့ ရောက်ရှိနေရမည်နည်း။",
    "options": [
      {
        "th": "ไม่น้อยกว่า 25 เมตร",
        "en": "Not less than 25 meters",
        "my": "၂၅ မီတာထက် မနည်းစေရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่น้อยกว่า 15 เมตร",
        "en": "Not less than 15 meters",
        "my": "၁၅ မီတာထက် မနည်းစေရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่น้อยกว่า 30 เมตร",
        "en": "Not less than 30 meters",
        "my": "၃၀ မီတာထက် မနည်းစေရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่น้อยกว่า 20 เมตร",
        "en": "Not less than 20 meters",
        "my": "၂၀ မီတာထက် မနည်းစေရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 147,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ขับขี่ต้องเปิดไฟหน้าหรือไฟท้ายรถ ให้รถคันอื่นเห็นได้ในระยะไม่น้อยกว่าเท่าใด",
    "q_en": "How far must a driver's headlights or taillights be visible to other vehicles?",
    "q_my": "ယာဉ်မောင်းသူသည် အခြားယာဉ်များမြင်နိုင်ရန် ရှေ့မီး သို့မဟုတ် နောက်မီးကို မည်မျှအကွာအဝေးမှ မြင်နိုင်အောင် ဖွင့်ထားရမည်နည်း။",
    "options": [
      {
        "th": "100 เมตร",
        "en": "100 meters",
        "my": "၁၀၀ မီတာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "60 เมตร",
        "en": "60 meters",
        "my": "၆၀ မီတာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "150 เมตร",
        "en": "150 meters",
        "my": "၁၅၀ မီတာ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "120 เมตร",
        "en": "120 meters",
        "my": "၁၂၀ မီတာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 148,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ห้ามมิให้ผู้ขับขี่รถแซงเพื่อขึ้นหน้ารถคันอื่นขณะที่มีหมอก ฝุ่น ฝน หรือควัน จนไม่อาจเห็นทางข้างหน้าได้ในระยะ เท่าใด",
    "q_en": "Drivers are prohibited from overtaking another vehicle when visibility ahead is reduced by fog, dust, rain, or smoke within what distance?",
    "q_my": "မြူ၊ ဖုန်၊ မိုး သို့မဟုတ် မီးခိုးများကြောင့် ရှေ့လမ်းကို မည်မျှအကွာအဝေးအတွင်း မမြင်နိုင်ပါက အခြားယာဉ်ကို ကျော်တက်ခြင်း မပြုရသနည်း။",
    "options": [
      {
        "th": "60 เมตร",
        "en": "60 meters",
        "my": "မီတာ ၆၀",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "80 เมตร",
        "en": "80 meters",
        "my": "မီတာ ၈၀",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "90 เมตร",
        "en": "90 meters",
        "my": "မီတာ ၉၀",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "70 เมตร",
        "en": "70 meters",
        "my": "မီတာ ၇၀",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 149,
    "category": "traffic_laws",
    "image": null,
    "q_th": "บริเวณใดแซงได้",
    "q_en": "In which area is overtaking permitted?",
    "q_my": "မည်သည့်နေရာတွင် ကျော်တက်ခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "ทางร่วมทางแยก",
        "en": "Intersections and junctions",
        "my": "လမ်းဆုံလမ်းခွများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บนพื้นทางที่มีเครื่องหมายจราจรให้แซงได้",
        "en": "On road surfaces with road markings permitting overtaking",
        "my": "ကျော်တက်ခွင့်ပြုထားသော လမ်းအမှတ်အသားရှိသည့် လမ်းမျက်နှာပြင်ပေါ်တွင်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สะพานเดินรถทางเดียว",
        "en": "One-way bridges",
        "my": "တစ်လမ်းမောင်း တံတားများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางโค้งรัศมีแคบ",
        "en": "Sharp curves",
        "my": "အကွေ့ကျဉ်းသော ကွေ့များ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 150,
    "category": "traffic_laws",
    "image": null,
    "q_th": "บริเวณใดใช้สัญญาณเสียงแตรได้",
    "q_en": "In which area is using the horn permitted?",
    "q_my": "မည်သည့်နေရာတွင် ဟွန်းတီးခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "สถานที่ราชการ",
        "en": "Government offices",
        "my": "အစိုးရရုံးများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สวนสาธารณะ",
        "en": "Public parks",
        "my": "အများပြည်သူ ပန်းခြံများ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "โรงเรียน",
        "en": "Schools",
        "my": "ကျောင်းများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "โรงพยาบาล",
        "en": "Hospitals",
        "my": "ဆေးရုံများ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 151,
    "category": "traffic_laws",
    "image": null,
    "q_th": "นอกเขตกรุงเทพ เมืองพัทยา หรือเทศบาล ต้องขับด้วยความเร็วไม่เกินเท่าไหร่ (สำหรับรถยนต์ส่วนบุคคล)",
    "q_en": "Outside Bangkok, Pattaya, or municipal areas, what is the maximum speed limit? (For private passenger cars)",
    "q_my": "ဘန်ကောက်၊ ပတ္တရား သို့မဟုတ် စည်ပင်သာယာနယ်နိမိတ် ပြင်ပတွင် အများဆုံး မည်သည့်အမြန်နှုန်းထက် မကျော်ဘဲ မောင်းနှင်ရမည်နည်း။ (ကိုယ်ပိုင်ကားများအတွက်)",
    "options": [
      {
        "th": "ไม่เกิน 100 กิโลเมตรต่อชั่วโมง",
        "en": "Not exceeding 100 km/h",
        "my": "တစ်နာရီလျှင် ကီလိုမီတာ ၁၀၀ ထက်မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เกิน 120 กิโลเมตรต่อชั่วโมง",
        "en": "Not exceeding 120 km/h",
        "my": "တစ်နာရီလျှင် ကီလိုမီတာ ၁၂၀ ထက်မပိုရ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เกิน 90 กิโลเมตรต่อชั่วโมง",
        "en": "Not exceeding 90 km/h",
        "my": "တစ်နာရီလျှင် ကီလိုမီတာ ၉၀ ထက်မပိုရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่เกิน 80 กิโลเมตรต่อชั่วโมง",
        "en": "Not exceeding 80 km/h",
        "my": "တစ်နာရီလျှင် ကီလိုမီတာ ၈၀ ထက်မပိုရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 152,
    "category": "traffic_laws",
    "image": null,
    "q_th": "บริเวณทางร่วมทางแยกและมีเครื่องหมายห้ามกลับรถแต่เจ้าพนักงานจราจรอนุญาตให้กลับรถได้ผู้ขับขี่ ต้องปฏิบัติอย่างไร",
    "q_en": "At an intersection with a 'No U-Turn' sign, but a traffic officer permits a U-turn, what should the driver do?",
    "q_my": "လမ်းဆုံလမ်းခွတွင် ယူကွေ့ (U-turn) မကွေ့ရ သင်္ကေတရှိသော်လည်း ယာဉ်ထိန်းရဲက ယူကွေ့ခွင့်ပြုပါက ယာဉ်မောင်းသည် မည်သို့လုပ်ဆောင်ရမည်နည်း။",
    "options": [
      {
        "th": "กลับรถได้ตามคำสั่งของเจ้าพนักงาน",
        "en": "Can make a U-turn following the officer's instructions",
        "my": "ယာဉ်ထိန်းရဲ၏ ညွှန်ကြားချက်အတိုင်း ယူကွေ့ ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "กลับรถได้ถ้าไม่ใช่ทางร่วมทางแยก",
        "en": "Can make a U-turn if it is not an intersection",
        "my": "လမ်းဆုံလမ်းခွ မဟုတ်ပါက ယူကွေ့ ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กลับรถได้ถ้าไม่มีเครื่องหมายห้ามกลับรถ",
        "en": "Can make a U-turn only if there is no 'No U-Turn' sign",
        "my": "ယူကွေ့မကွေ့ရ သင်္ကေတ မရှိမှသာ ယူကွေ့ ကွေ့နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กลับรถไม่ได้",
        "en": "Cannot make a U-turn",
        "my": "ယူကွေ့ မကွေ့ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 153,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ในการบรรทุกสิ่งของ ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When carrying cargo/loads, what must the driver comply with?",
    "q_my": "ကုန်ပစ္စည်းများ တင်ဆောင်ရာတွင် ယာဉ်မောင်းသည် မည်သို့ လိုက်နာဆောင်ရွက်ရမည်နည်း။",
    "options": [
      {
        "th": "บรรทุกยื่นพ้นตัวรถด้านหลังไม่เกิน 2.50 เมตร",
        "en": "The load must not extend beyond the rear of the vehicle by more than 2.50 meters",
        "my": "ယာဉ်၏ နောက်ဘက်သို့ ၂.၅၀ မီတာထက် ပိုမထွက်ရ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บรรทุกสูงโดยวัดจากสิ่งของที่บรรทุกได้เกิน 5 เมตร",
        "en": "The load height measured from the cargo can exceed 5 meters",
        "my": "တင်ဆောင်ထားသော အမြင့်ကို တိုင်းတာရာတွင် ၅ မီတာထက် ကျော်လွန်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บรรทุกได้กว้างกว่าความกว้างของตัวรถข้างละ 1 เมตร",
        "en": "The load can extend wider than the vehicle width by 1 meter on each side",
        "my": "ယာဉ်၏ ဘေးတစ်ဖက်စီထက် ၁ မီတာ ပိုမိုကျယ်ဝန်းစွာ တင်ဆောင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บรรทุกยื่นพ้นตัวรถด้านหน้าไม่เกิน 2.50 เมตร",
        "en": "The load must not extend beyond the front of the vehicle by more than 2.50 meters",
        "my": "ယာဉ်၏ ရှေ့ဘက်သို့ ၂.၅၀ မီတာထက် ပိုမထွက်ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 154,
    "category": "traffic_laws",
    "image": null,
    "q_th": "รถที่ใช้ความเร็วต่ำ ผู้ขับขี่จะต้องปฏิบัติอย่างไร",
    "q_en": "When driving at low speed, what must the driver do?",
    "q_my": "အမြန်နှုန်း လျှော့၍ အနှေးမောင်းသောအခါ ယာဉ်မောင်းသည် မည်သို့ မောင်းနှင်ရမည်နည်း။",
    "options": [
      {
        "th": "ขับรถที่บริเวณไหล่ทาง",
        "en": "Drive on the road shoulder",
        "my": "လမ်းပခုံးပေါ်တွင် မောင်းနှင်ရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถได้ทั้งด้านซ้ายและด้านขวา",
        "en": "Can drive on either the left or the right side",
        "my": "ဘယ်ဘက်ရော ညာဘက်ပါ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถชิดขอบด้านซ้าย",
        "en": "Drive close to the left edge of the roadway",
        "my": "လမ်း၏ ဘယ်ဘက်အစွန်းသို့ ကပ်၍ မောင်းနှင်ရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถชิดขอบด้านขวา",
        "en": "Drive close to the right edge of the roadway",
        "my": "လမ်း၏ ညာဘက်အစွန်းသို့ ကပ်၍ မောင်းနှင်ရမည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 155,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000269.webp",
    "q_th": "จากรูปรถคันใดสามารถขับแซงรถคันอื่นได้",
    "q_en": "From the image, which vehicle is allowed to overtake another vehicle?",
    "q_my": "ပုံအရ မည်သည့်ယာဉ်သည် အခြားယာဉ်ကို ကျော်တက်ခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "รถคัน ก และ ข",
        "en": "Vehicle A and B",
        "my": "ယာဉ် (က) နှင့် (ခ)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคัน ก",
        "en": "Vehicle A",
        "my": "ယာဉ် (က)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์",
        "en": "Motorcycle",
        "my": "ဆိုင်ကယ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคัน ข",
        "en": "Vehicle B",
        "my": "ယာဉ် (ခ)",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 156,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ใครได้รับข้อยกเว้นให้เดินทางโดยไม่คาดเข็มขัด",
    "q_en": "Who is exempted from wearing a seatbelt while traveling?",
    "q_my": "မည်သူသည် ထိုင်ခုံခါးပတ် မပတ်ဘဲ သွားလာခွင့် ကင်းလွတ်ခွင့် ရရှိသနည်း။",
    "options": [
      {
        "th": "คนที่ได้รับข้อยกเว้นเนื่องมาจากเหตุผลทางการแพทย์",
        "en": "Persons exempted due to medical reasons",
        "my": "ကျန်းမာရေး သို့မဟုတ် ဆေးဘက်ဆိုင်ရာ အကြောင်းပြချက်ကြောင့် ကင်းလွတ်ခွင့် ရထားသူများ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เด็กอายุต่ำกว่า 14 ปี",
        "en": "Children under 14 years old",
        "my": "အသက် ၁၄ နှစ်အောက် ကလေးများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนที่นั่งอยู่เบาะหลัง",
        "en": "Passengers sitting in the back seat",
        "my": "နောက်ခန်းထိုင်ခုံတွင် ထိုင်သူများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เด็กที่มีส่วนสูงต่ำกว่า 1.50 เมตร",
        "en": "Children shorter than 1.50 meters",
        "my": "အရပ်အမြင့် ၁.၅၀ မီတာအောက် ကလေးများ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 157,
    "category": "traffic_laws",
    "image": null,
    "q_th": "หากท่านพบเห็นสัญญาณไฟจราจรเปลี่ยนเป็นสีเหลือง ท่านควรปฏิบัติอย่างไร",
    "q_en": "If you see the traffic light turn yellow, what should you do?",
    "q_my": "ယာဉ်ကြောမီးပွိုင့် အဝါရောင်ပြောင်းသွားသည်ကို တွေ့ပါက သင်မည်သို့ လုပ်ဆောင်သင့်သနည်း။",
    "options": [
      {
        "th": "เร่งความเร็วและขับผ่านไป",
        "en": "Accelerate and speed through",
        "my": "အရှိန်မြှင့်ပြီး ဖြတ်မောင်းသွားရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหยียบเบรกเพื่อหยุดรถทันที",
        "en": "Slam on the brakes to stop immediately",
        "my": "ချက်ချင်းရပ်တန့်ရန် ဘရိတ်ကို ရုတ်တရက် အပြင်းအထန် နင်းရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ค่อยๆ เหยียบเบรก เพื่อเตือนรถข้างหลัง ระวังและเตรียมหยุด",
        "en": "Gently apply the brakes to warn vehicles behind, take caution, and prepare to stop",
        "my": "နောက်ကားကို သတိပေးရန် ဘရိတ်ကို ဖြည်းဖြည်းချင်းနင်းပြီး သတိထားကာ ရပ်တန့်ရန် ပြင်ဆင်ရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรและขับผ่านไป",
        "en": "Honk the horn and drive through",
        "my": "ဟွန်းတီးပြီး ဖြတ်မောင်းသွားရမည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 158,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ป่วยโรคความดันสูง ซึ่งอยู่ระหว่างการรับยา สามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person with high blood pressure who is currently taking medication drive a vehicle?",
    "q_my": "သွေးတိုးရောဂါရှိသူနှင့် ဆေးဝါးသောက်သုံးနေရသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ไม่ควร",
        "en": "Should not",
        "my": "မမောင်းသင့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้",
        "en": "Can",
        "my": "မောင်းနှင်နိုင်ပါသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 159,
    "category": "traffic_laws",
    "image": null,
    "q_th": "รถที่สามารถนำมาจดทะเบียนต้องมีลักษณะอย่างไร",
    "q_en": "What are the requirements for a vehicle to be registered?",
    "q_my": "ယာဉ်မှတ်ပုံတင်ရန်အတွက် ယာဉ်တစ်စီးတွင် မည်ကဲ့သို့သော အင်္ဂါရပ်များ ရှိရမည်နည်း။",
    "options": [
      {
        "th": "รถต้องมีอุปกรณ์ส่วนควบครบถ้วนถูกต้องและผ่านการตรวจสภาพรถ",
        "en": "The vehicle must have complete and correct equipment and pass a vehicle inspection.",
        "my": "ယာဉ်တွင် လိုအပ်သောဆက်စပ်ပစ္စည်းများ အပြည့်အစုံပါရှိရမည်ဖြစ်ပြီး စစ်ဆေးမှုအောင်မြင်ရမည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถที่ผ่านการตรวจสภาพรถจากสถานตรวจสภาพรถเอกชน",
        "en": "Vehicles that have passed inspection from a private inspection station.",
        "my": "ပုဂ္ဂလိကယာဉ်စစ်ဆေးရေးဌာနမှ စစ်ဆေးမှုအောင်မြင်ပြီးသောယာဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถต้องมีอุปกรณ์ส่วนควบถูกต้อง",
        "en": "The vehicle must have correct equipment.",
        "my": "ယာဉ်တွင် ဆက်စပ်ပစ္စည်းများ မှန်ကန်စွာပါရှိရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถที่ซื้อจากศูนย์จำหน่ายรถทั่วไป",
        "en": "Vehicles purchased from general car dealerships.",
        "my": "ကားအရောင်းဆိုင်များမှ ဝယ်ယူသောယာဉ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 160,
    "category": "traffic_laws",
    "image": null,
    "q_th": "การแซงในข้อใดที่ผู้ขับขี่ไม่ควรปฏิบัติ",
    "q_en": "Which of the following overtaking maneuvers should a driver avoid?",
    "q_my": "မည်သည့်အခြေအနေမျိုးတွင် ယာဉ်ကိုကျော်တက်ခြင်း မပြုလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "การแซงด้านซ้ายเมื่อคันหน้าจะเลี้ยวขวา",
        "en": "Overtaking on the left when the vehicle in front is turning right.",
        "my": "ရှေ့ယာဉ်သည် ညာဘက်သို့ကွေ့မည်ဆိုပါက ဘယ်ဘက်မှကျော်တက်ခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงรถในเขตเส้นทึบ",
        "en": "Overtaking in a solid line zone.",
        "my": "မျဉ်းဖြတ်တားဧရိယာတွင် ကျော်တက်ခြင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงรถบรรทุกขนาดใหญ่เมื่อปลอดภัย",
        "en": "Overtaking large trucks when safe.",
        "my": "လုံခြုံစိတ်ချရပါက ကုန်တင်ကားကြီးများကို ကျော်တက်ခြင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงรถในเขตเส้นประเมื่อปลอดภัย",
        "en": "Overtaking in a dashed line zone when safe.",
        "my": "လုံခြုံစိတ်ချရပါက မျဉ်းကျဲဧရိယာတွင် ကျော်တက်ခြင်း",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 161,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000297.webp",
    "q_th": "กรณีรถทั้งสองคันมาถึงพร้อมกันบนทางร่วมทางแยก รถคันใดมีสิทธิ์ขับผ่านไปได้ก่อน",
    "q_en": "If two vehicles arrive at an intersection at the same time, which vehicle has the right of way?",
    "q_my": "လမ်းဆုံလမ်းခွသို့ ယာဉ်နှစ်စီး တစ်ပြိုင်နက်ရောက်ရှိလာပါက မည်သည့်ယာဉ်က ဦးစွာဖြတ်သန်းခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "รถ ก.",
        "en": "Vehicle A",
        "my": "ယာဉ် (က)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทั้งรถ ก. และ ข.",
        "en": "Both vehicle A and B",
        "my": "ယာဉ် (က) နှင့် (ခ) နှစ်စီးလုံး",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถ ข.",
        "en": "Vehicle B",
        "my": "ယာဉ် (ခ)",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "คันที่มาถึงทางร่วมทางแยกก่อน",
        "en": "The one that arrived at the intersection first.",
        "my": "လမ်းဆုံသို့ ဦးစွာရောက်ရှိလာသောယာဉ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 162,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้รับประทานยานอนหลับและยาคลายกังวลควรขับขี่ยานพาหนะหรือไม่",
    "q_en": "Should a person who has taken sleeping pills or anti-anxiety medication drive a vehicle?",
    "q_my": "အိပ်ဆေး သို့မဟုတ် စိတ်ငြိမ်ဆေးသောက်သုံးထားသူသည် ယာဉ်မောင်းနှင်သင့်ပါသလား။",
    "options": [
      {
        "th": "ได้ทุกกรณี",
        "en": "Yes, in all cases.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport.",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควรทุกกรณี",
        "en": "Should not, in any case.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မမောင်းနှင်သင့်ပါ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 163,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ที่มีสายตาผิดปกติ แต่สามารถแก้ไขได้โดยการใส่แว่น สามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person with vision problems, which can be corrected by wearing glasses, drive a vehicle?",
    "q_my": "မျက်မှန်တပ်ခြင်းဖြင့် အမြင်အာရုံကို ပြုပြင်နိုင်သည့် မျက်စိအားနည်းသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport.",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้",
        "en": "Yes.",
        "my": "မောင်းနှင်နိုင်ပါသည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควร",
        "en": "Should not.",
        "my": "မမောင်းသင့်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 164,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000320.webp",
    "q_th": "จากภาพผู้ขับขี่คันนี้ต้องปฏิบัติอย่างไร",
    "q_en": "Based on the image, what should this driver do?",
    "q_my": "ပုံအရ ယာဉ်မောင်းသူသည် မည်သို့ပြုမူရမည်နည်း။",
    "options": [
      {
        "th": "หยุดรถและรอให้รถในทางขวางหน้าขับผ่านไปก่อน",
        "en": "Stop the vehicle and wait for the vehicle on the crossing road to pass first.",
        "my": "ယာဉ်ကိုရပ်တန့်ပြီး လမ်းဖြတ်ကူးနေသောယာဉ်များ ဦးစွာဖြတ်သွားသည်အထိ စောင့်ဆိုင်းပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้ชะลอรถแล้วหยุดคร่อมเส้นประเพื่อให้มองเห็นรถที่มาจากด้านขวามือ",
        "en": "Slow down and stop across the dashed line to see vehicles coming from the right.",
        "my": "ယာဉ်ကိုအရှိန်လျှော့၍ ညာဘက်မှလာသောယာဉ်များကို မြင်နိုင်စေရန် မျဉ်းကျဲပေါ်တွင် ရပ်တန့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถผ่านไปได้ทันทีเนื่องจากเป็นเส้นประ",
        "en": "Drive through immediately because it is a dashed line.",
        "my": "မျဉ်းကျဲဖြစ်သောကြောင့် ချက်ချင်းမောင်းနှင်ဖြတ်သန်းသွားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถผ่านไปได้ทันทีเนื่องจากมีป้ายให้ทางแสดงไว้",
        "en": "Drive through immediately because there is a give way sign.",
        "my": "လမ်းပေးရန်အချက်ပြဆိုင်းဘုတ်ပါရှိသောကြောင့် ချက်ချင်းဖြတ်သန်းသွားပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 165,
    "category": "traffic_laws",
    "image": null,
    "q_th": "จากภาพต่อไปนี้ แสดงการเลี้ยวรถที่ถูกต้อง",
    "q_en": "The following images show correct turning techniques.",
    "q_my": "အောက်ပါပုံများသည် မှန်ကန်သောယာဉ်ကွေ့ခြင်းနည်းလမ်းကို ပြသထားသည်။",
    "options": [
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000001294.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000001295.webp",
        "isCorrect": true
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000001293.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000001296.webp",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 166,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000347.webp",
    "q_th": "จากภาพ รถคัน ก. จะต้องปฏิบัติอย่างไร",
    "q_en": "Based on the image, what should vehicle A do?",
    "q_my": "ပုံအရ ယာဉ် (က) သည် မည်သို့ပြုမူရမည်နည်း။",
    "options": [
      {
        "th": "หยุดรถเพื่อให้รถทางด้านขวามือขับผ่านไปก่อน",
        "en": "Stop to let vehicles on the right pass first.",
        "my": "ယာဉ်ကိုရပ်တန့်၍ ညာဘက်မှလာသောယာဉ်များ ဦးစွာဖြတ်သွားစေရန် လမ်းပေးပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถเพื่อให้รถจากทางด้านซ้ายขับผ่านไปก่อน",
        "en": "Stop to let vehicles on the left pass first.",
        "my": "ယာဉ်ကိုရပ်တန့်၍ ဘယ်ဘက်မှလာသောယာဉ်များ ဦးစွာဖြတ်သွားစေရန် လမ်းပေးပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถผ่านทางร่วมทางแยกไปได้เลย",
        "en": "Drive through the intersection immediately.",
        "my": "လမ်းဆုံလမ်းခွကို ချက်ချင်းဖြတ်သန်းမောင်းနှင်သွားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วของรถเพื่อให้รถทางด้านซ้ายและขวาขับผ่านไปก่อน",
        "en": "Slow down to let vehicles from both the left and right pass first.",
        "my": "ဘယ်ဘက်နှင့်ညာဘက်မှလာသောယာဉ်များ ဦးစွာဖြတ်သွားစေရန် ယာဉ်အရှိန်ကိုလျှော့ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 167,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000359.webp",
    "q_th": "จากรูป รถคันสีแดงและรถคันสีเหลืองต้องการไปในทิศทางเดียวกัน รถคันใดมีสิทธิ์ไปก่อนเมื่อมีสัญญาณให้หยุดทั้งสองทิศทาง",
    "q_en": "Based on the image, the red and yellow cars want to go in the same direction. Which car has the right of way when there is a stop signal in both directions?",
    "q_my": "ပုံအရ အနီရောင်ယာဉ်နှင့် အဝါရောင်ယာဉ်တို့သည် တစ်လမ်းတည်းသို့ သွားလိုကြသည်။ နှစ်ဖက်စလုံးတွင် ရပ်တန့်ရန် အချက်ပြထားပါက မည်သည့်ယာဉ်က ဦးစွာသွားခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "คันใดก็ตามที่ขับด้วยความเร็วที่สูงกว่า",
        "en": "Whichever is driving at a higher speed.",
        "my": "အရှိန်ပိုမြန်သောယာဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันสีเหลือง",
        "en": "Yellow car.",
        "my": "အဝါရောင်ယာဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันสีแดง",
        "en": "Red car.",
        "my": "အနီရောင်ယာဉ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "คันใดก็ตามที่มาถึงทางแยกก่อน",
        "en": "Whichever arrives at the intersection first.",
        "my": "လမ်းဆုံသို့ ဦးစွာရောက်ရှိလာသောယာဉ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 168,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ป่วยที่เป็นโรคหลอดเลือดหัวใจตีบควรขับขี่ยานพาหนะหรือไม่",
    "q_en": "Should patients with coronary artery disease drive a vehicle?",
    "q_my": "နှလုံးသွေးကြောကျဉ်းရောဂါရှိသူများသည် ယာဉ်မောင်းနှင်သင့်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรหลีกเลี่ยง",
        "en": "Should avoid",
        "my": "ရှောင်ကြဉ်သင့်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ได้ทุกกรณี",
        "en": "In all cases",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport",
        "my": "အများသုံးယာဉ်သာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 169,
    "category": "traffic_laws",
    "image": null,
    "q_th": "จากภาพ ข้อใดแสดงการหยุดรถที่ไม่ถูกต้อง",
    "q_en": "From the image, which one shows an incorrect way of stopping the vehicle?",
    "q_my": "ပုံတွင်ဖော်ပြထားသော အချက်များအနက် မည်သည့်ပုံသည် ယာဉ်ရပ်တန့်သည့်နည်းလမ်း မမှန်ကန်ကြောင်း ပြသနေသနည်း။",
    "options": [
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000001474.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000001475.webp",
        "isCorrect": true
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000001473.webp",
        "isCorrect": false
      },
      {
        "th": "รูปภาพ",
        "en": "Image",
        "my": "ပုံ",
        "image": "/exam_images/law/1000000001476.webp",
        "isCorrect": false
      }
    ]
  },
  {
    "id": 170,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ภาวะหัวใจเต้นผิดจังหวะ สามารถทำการขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person with an irregular heartbeat drive a vehicle?",
    "q_my": "နှလုံးခုန်နှုန်းမမှန်သည့်ရောဂါရှိသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport",
        "my": "အများသုံးယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้ หากไม่มีอาการที่ส่งผลต่อการควบคุมยานพาหนะ",
        "en": "Yes, if there are no symptoms affecting vehicle control",
        "my": "ယာဉ်ကိုထိန်းချုပ်ရာတွင် ထိခိုက်စေနိုင်သည့် လက္ခဏာများမရှိပါက မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่ควร",
        "en": "Should not",
        "my": "မမောင်းနှင်သင့်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 171,
    "category": "traffic_laws",
    "image": null,
    "q_th": "บุคคลใดในข้อต่อไปนี้สามารถขอรับใบอนุญาตขับรถส่วนบุคคลได้",
    "q_en": "Which of the following persons can apply for a private driver's license?",
    "q_my": "အောက်ပါတို့အနက် မည်သူသည် ကိုယ်ပိုင်ယာဉ်မောင်းလိုင်စင် လျှောက်ထားနိုင်သနည်း။",
    "options": [
      {
        "th": "นายชาย ไม่เป็นผู้มีร่างกายพิการจนเป็นที่เห็นได้ว่าไม่สามารถขับรถได้",
        "en": "Mr. Chai, who is not physically disabled to the extent of being unable to drive",
        "my": "မစ္စတာချိုင်း (ယာဉ်မောင်းနှင်နိုင်စွမ်းမရှိစေလောက်အောင် ကိုယ်အင်္ဂါချို့ယွင်းချက်မရှိသူ)",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "นายดำ เป็นผู้อยู่ระหว่างถูกยึดใบอนุญาต",
        "en": "Mr. Dam, who is currently under license confiscation",
        "my": "မစ္စတာဒမ် (လိုင်စင်သိမ်းဆည်းခံထားရသူ)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นางหญิง เป็นบุคคลวิกลจริตหรือจิตฟั่นเฟือน",
        "en": "Ms. Ying, who is mentally ill or insane",
        "my": "မစ္စယင် (စိတ်မနှံ့သူ သို့မဟုတ် စိတ်ဝေဒနာရှိသူ)",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นางแดง เป็นผู้อยู่ระหว่างถูกพักใช้ใบอนุญาต",
        "en": "Ms. Daeng, who is currently under license suspension",
        "my": "မစ္စဒန်း (လိုင်စင်ဆိုင်းငံ့ခံထားရသူ)",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 172,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้สูญเสียดวงตาไปข้างหนึ่ง แต่เมื่อได้รับการตรวจโดยจักษุแพทย์ว่ายังคงมีสายตาปกติ ขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person who lost one eye drive a vehicle if an ophthalmologist confirms they still have normal vision?",
    "q_my": "မျက်လုံးတစ်ဖက်ဆုံးရှုံးထားသော်လည်း မျက်စိအထူးကုဆရာဝန်၏ စစ်ဆေးချက်အရ မျက်စိအမြင်အာရုံ ပုံမှန်ရှိနေသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport",
        "my": "အများသုံးယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้",
        "en": "Yes",
        "my": "မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ได้ทุกกรณี",
        "en": "No, in any case",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မမောင်းနှင်ရ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 173,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ป่วยโรคลมชักสามารถขับยานพาหนะได้หรือไม่",
    "q_en": "Can epilepsy patients drive a vehicle?",
    "q_my": "ဝက်ရူးပြန်ရောဂါရှိသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport",
        "my": "အများသုံးယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้ทุกกรณี",
        "en": "In all cases",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ได้ทุกกรณี",
        "en": "No, in any case",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မမောင်းနှင်ရ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 174,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ป่วยโรคเบาหวานสามารถขับยานพาหนะได้หรือไม่",
    "q_en": "Can diabetic patients drive a vehicle?",
    "q_my": "ဆီးချိုရောဂါရှိသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้ หากไม่มีอาการที่เสี่ยงต่อการหมดสติหรือ ไม่สามารถควบคุมยานพาหนะ",
        "en": "Yes, if there is no risk of fainting or losing control of the vehicle",
        "my": "သတိလစ်ခြင်း သို့မဟုတ် ယာဉ်ကိုထိန်းချုပ်ရန် မစွမ်းဆောင်နိုင်ခြင်း စသည့်အန္တရာယ်ရှိသည့် လက္ခဏာများမရှိပါက မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับขี่ได้หลังจากหยุดยาทั้งหมด",
        "en": "Can drive after stopping all medications",
        "my": "ဆေးဝါးအားလုံးရပ်တန့်ပြီးမှ မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควรขับขี่",
        "en": "Should not drive",
        "my": "မမောင်းနှင်သင့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่มีข้อใดถูก",
        "en": "None of the above",
        "my": "အထက်ပါအချက်များ မမှန်ကန်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 175,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ที่มีสายตาผิดปกติข้างหนึ่ง แต่อีกข้างหนึ่งปกติ สามารถขับยานพาหนะได้หรือไม่",
    "q_en": "Can a person with vision impairment in one eye, but normal vision in the other, drive a vehicle?",
    "q_my": "မျက်စိတစ်ဖက် အမြင်အာရုံချို့ယွင်းသော်လည်း အခြားတစ်ဖက်ပုံမှန်ရှိသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่ควร",
        "en": "Should not",
        "my": "မမောင်းနှင်သင့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport",
        "my": "အများသုံးယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้",
        "en": "Yes",
        "my": "မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 176,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้เป็นใบ้ สามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a mute person drive a vehicle?",
    "q_my": "အသံမထွက်နိုင်သူ (အပြောအဆိုမစွမ်းသူ) သည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้",
        "en": "Yes",
        "my": "မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่มีข้อใดถูก",
        "en": "None of the above",
        "my": "အထက်ပါအချက်များ မမှန်ကန်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้ แต่ต้องมีผู้อื่นนั่งรถไปด้วย",
        "en": "Yes, but must have another person in the vehicle",
        "my": "မောင်းနှင်နိုင်သည်၊ သို့သော် အခြားသူတစ်ဦးဦး လိုက်ပါရမည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควรขับขี่",
        "en": "Should not drive",
        "my": "မမောင်းနှင်သင့်ပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 177,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ที่ได้รับการผ่าตัดหัวใจ หรือมีประวัติภาวะกล้ามเนื้อหัวใจขาดเลือด สามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person who has undergone heart surgery or has a history of myocardial ischemia (heart attack) drive a vehicle?",
    "q_my": "နှလုံးခွဲစိတ်ကုသမှုခံယူထားသူ သို့မဟုတ် နှလုံးကြွက်သားသွေးငတ်ခြင်း ရောဂါအခံရှိသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ไม่ควรทุกกรณี",
        "en": "No, in any case",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မမောင်းနှင်သင့်ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ได้ทุกกรณี",
        "en": "In all cases",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Only private vehicles",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Only public transport",
        "my": "အများသုံးယာဉ်သာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 178,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ป่วยโรคใดสามารถขับขี่ยานพาหนะได้",
    "q_en": "Patients with which condition are permitted to drive?",
    "q_my": "မည်သည့်ရောဂါသည်ယာဉ်မောင်းနှင်ခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "โรคเหงือกอักเสบ",
        "en": "Gingivitis",
        "my": "သွားဖုံးရောင်ရောဂါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "โรคหัวใจขาดเลือด",
        "en": "Ischemic heart disease",
        "my": "နှလုံးသွေးကြောကျဉ်းရောဂါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "โรคลมชัก",
        "en": "Epilepsy",
        "my": "ဝက်ရူးပြန်ရောဂါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เบาหวาน (ใช้ยาฉีด)",
        "en": "Diabetes (insulin-dependent)",
        "my": "ဆီးချိုရောဂါ (ဆေးထိုးကုသသူ)",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 179,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้สูญเสียแขนขวา สามารถทำการขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person who has lost their right arm drive a vehicle?",
    "q_my": "ညာဘက်လက်ဆုံးရှုံးသွားသူတစ်ဦး ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้แต่ต้องแสดงความสามารถในการขับขี่ ในการควบคุมยานพาหนะให้แก่เจ้าพนักงานได้อย่างดี",
        "en": "Yes, but they must demonstrate the ability to control the vehicle to the official.",
        "my": "မောင်းနှင်နိုင်သည်၊ သို့သော် ယာဉ်အားထိန်းချုပ်နိုင်စွမ်းရှိကြောင်း တာဝန်ရှိသူအားပြသရမည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ได้ทุกกรณี",
        "en": "Yes, in all cases.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ได้ทุกกรณี",
        "en": "No, in any case.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မမောင်းနှင်ရ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Yes, only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 180,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ป่วยโรคกล้ามเนื้ออ่อนแรงสามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person with muscle weakness drive a vehicle?",
    "q_my": "ကြွက်သားအားနည်းရောဂါရှိသူ ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้ทุกกรณี",
        "en": "Yes, in all cases.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควรทุกกรณี",
        "en": "No, it is not recommended in any case.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မမောင်းနှင်သင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Yes, only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Yes, only public vehicles.",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 181,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้มีอาการเจ็บหน้าอก และแพทย์สงสัยว่าจะมีสาเหตุจากโรคหัวใจ ควรขับขี่ยานพาหนะหรือไม่",
    "q_en": "Should a person with chest pain, suspected by a doctor to be heart-related, drive a vehicle?",
    "q_my": "ရင်ဘတ်အောင့်ခြင်းဖြစ်ပွားပြီး နှလုံးရောဂါဟု ဆရာဝန်ကသံသယရှိပါက ယာဉ်မောင်းနှင်သင့်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Yes, only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Yes, only public vehicles.",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้ทุกกรณี",
        "en": "Yes, in all cases.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ได้ทุกกรณี",
        "en": "No, in any case.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မမောင်းနှင်ရ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 182,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ป่วยเป็นมะเร็งสมอง สามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person with brain cancer drive a vehicle?",
    "q_my": "ဦးနှောက်ကင်ဆာရောဂါရှိသူ ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Yes, only public vehicles.",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Yes, only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้ทุกกรณี",
        "en": "Yes, in all cases.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควร เนื่องจากมีความเสี่ยงจะเกิดอาการชัก",
        "en": "No, because there is a risk of having a seizure.",
        "my": "ဝက်ရူးပြန်ရောဂါဖြစ်ပွားနိုင်ခြေရှိသဖြင့် မမောင်းနှင်သင့်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 183,
    "category": "traffic_laws",
    "image": null,
    "q_th": "นาย ก.ได้รับการวินิจฉัยจากแพทย์ว่ามีอาการป่วยด้วยโรคพาร์กินสัน(มือสั่น) สามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Mr. A has been diagnosed with Parkinson's disease (shaking hands). Can he drive?",
    "q_my": "မစ္စတာ က. အား ပါကင်ဆန် (လက်တုန်) ရောဂါရှိကြောင်း ဆရာဝန်ကစစ်ဆေးတွေ့ရှိပါက ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้",
        "en": "Yes",
        "my": "မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควร",
        "en": "No",
        "my": "မမောင်းနှင်သင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Yes, only public vehicles.",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Yes, only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 184,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000523.webp",
    "q_th": "จากรูป ในกรณีที่ไม่มีสัญญาณไฟจราจร รถคันสีแดงหรือรถคันสีเหลืองมีสิทธิ์ที่จะได้ไปก่อน",
    "q_en": "In the picture, where there is no traffic light, which car, the red one or the yellow one, has the right of way?",
    "q_my": "ပုံတွင်ပါသည့်အတိုင်း ယာဉ်ထိန်းအချက်ပြမီးမရှိပါက အနီရောင်ယာဉ် သို့မဟုတ် အဝါရောင်ယာဉ် မည်သည့်ယာဉ်က ဦးစွာသွားပိုင်ခွင့်ရှိသနည်း။",
    "options": [
      {
        "th": "รถคันสีเหลือง",
        "en": "Yellow car",
        "my": "အဝါရောင်ယာဉ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถที่มีความเร็วสูงกว่า",
        "en": "The vehicle with higher speed",
        "my": "အမြန်နှုန်းပိုမြန်သောယာဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถที่มาถึงทางแยกก่อน",
        "en": "The vehicle that arrived at the intersection first",
        "my": "လမ်းဆုံသို့ ဦးစွာရောက်ရှိသောယာဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันสีแดง",
        "en": "Red car",
        "my": "အနီရောင်ယာဉ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 185,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้เป็นใบ้และหูหนวกสามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person who is mute and deaf drive a vehicle?",
    "q_my": "အသံမထွက်နိုင်သူ (အပြောမတတ်သူ) နှင့် နားမကြားသူသည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Yes, only public vehicles.",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควร",
        "en": "No",
        "my": "မမောင်းနှင်သင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้",
        "en": "Yes",
        "my": "မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Yes, only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 186,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000615.webp",
    "q_th": "ดังรูปในกรณีที่รถสีน้ำเงินออกมาจากซอย รถคันใดต้องหยุดให้ทาง",
    "q_en": "As shown in the picture, if the blue car is coming out of a side street, which vehicle must stop and give way?",
    "q_my": "ပုံပါအတိုင်း အပြာရောင်ယာဉ်သည် လမ်းသွယ်မှထွက်လာပါက မည်သည့်ယာဉ်က လမ်းဦးစွာပေးရမည်နည်း။",
    "options": [
      {
        "th": "รถคันใดก็ได้",
        "en": "Any car",
        "my": "မည်သည့်ယာဉ်မဆို",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันสีน้ำเงิน",
        "en": "Blue car",
        "my": "အပြာရောင်ယာဉ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถคันสีน้ำตาล",
        "en": "Brown car",
        "my": "အညိုရောင်ယာဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันที่มีความเร็วต่ำกว่า",
        "en": "The vehicle with lower speed",
        "my": "အမြန်နှုန်းပိုနှေးသောယာဉ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 187,
    "category": "traffic_laws",
    "image": null,
    "q_th": "ผู้ซึ่งมีการได้ยินบกพร่อง สามารถขับขี่ยานพาหนะได้หรือไม่",
    "q_en": "Can a person with hearing impairment drive a vehicle?",
    "q_my": "နားကြားမှုအားနည်းသူ (နားလေးသူ) သည် ယာဉ်မောင်းနှင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "ได้ทุกกรณี",
        "en": "Yes, in all cases.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะรถสาธารณะ",
        "en": "Yes, only public vehicles.",
        "my": "အများသုံးယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ได้เฉพาะยานพาหนะส่วนตัว",
        "en": "Yes, only private vehicles.",
        "my": "ကိုယ်ပိုင်ယာဉ်သာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่ได้ทุกกรณี",
        "en": "No, in any case.",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မမောင်းနှင်ရ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 188,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000621.webp",
    "q_th": "จากรูป รถคันสีเหลืองควรปฏิบัติอย่างไร",
    "q_en": "As shown in the image, what should the yellow car do?",
    "q_my": "ပုံပါအတိုင်း အဝါရောင်ကားသည် မည်သို့ပြုမူသင့်သနည်း။",
    "options": [
      {
        "th": "ขับออกไปทันที",
        "en": "Drive out immediately",
        "my": "ချက်ချင်းမောင်းထွက်သွားပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เลี้ยวซ้ายแล้วกลับรถที่จุดกลับรถ",
        "en": "Turn left and make a U-turn at the U-turn point",
        "my": "ဘယ်ဘက်ကွေ့ပြီး U-turn ချိုးသည့်နေရာတွင် ပြန်ကွေ့ပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้สัญญาณแตรเพื่อให้รถคันอื่นหยุดให้ท่าน",
        "en": "Use the horn to signal other vehicles to stop for you",
        "my": "အခြားယာဉ်များကို မိမိအတွက် ရပ်ပေးရန် ဟွန်းတီးပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ค่อยๆ ขับเคลื่อนไปข้างหน้าทีละน้อย",
        "en": "Slowly inch forward",
        "my": "ဖြည်းဖြည်းချင်း ရှေ့သို့တိုးမောင်းပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 189,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000623.webp",
    "q_th": "หากท่านต้องการที่จะจอดรถดังรูป ท่านสามารถจอดได้หรือไม่",
    "q_en": "If you want to park as shown in the picture, can you park there?",
    "q_my": "ပုံပါအတိုင်း ကားရပ်လိုပါက ရပ်နိုင်ပါသလား။",
    "options": [
      {
        "th": "จอดได้หากท่านเปิดไฟฉุกเฉิน",
        "en": "Can park if you turn on the hazard lights",
        "my": "အရေးပေါ်မီးဖွင့်ထားပါက ရပ်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดได้หากท่านอยู่ในรถ",
        "en": "Can park if you remain inside the car",
        "my": "ကားထဲတွင်ရှိနေပါက ရပ်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดไม่ได้ ถ้าไม่ได้จ่ายเงินให้แก่ผู้ดูแลรถ",
        "en": "Cannot park if you have not paid the parking attendant",
        "my": "ယာဉ်ထိန်းသိမ်းသူအား ပိုက်ဆံမပေးပါက မရပ်နိုင်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดไม่ได้ทุกกรณี",
        "en": "Cannot park in any case",
        "my": "မည်သည့်အခြေအနေတွင်မဆို မရပ်နိုင်ပါ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 190,
    "category": "traffic_laws",
    "image": "/exam_images/law/1000000000624.webp",
    "q_th": "จากรูปข้อใดต่อไปนี้ถูกต้องเกี่ยวกับการแซง",
    "q_en": "According to the image, which of the following is correct regarding overtaking?",
    "q_my": "ပုံအရ ကျော်တက်ခြင်းနှင့်ပတ်သက်၍ အောက်ပါတို့အနက် မည်သည်မှာ မှန်ကန်သနည်း။",
    "options": [
      {
        "th": "รถคันหลังสามารถแซงได้หากไม่มีป้ายหยุดบนขอบทาง",
        "en": "The vehicle behind can overtake if there is no stop sign on the roadside",
        "my": "လမ်းဘေးတွင် ရပ်ရန်အချက်ပြမရှိပါက နောက်မှလာသောကား ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันหลังไม่สามารถแซงคันหน้าได้",
        "en": "The vehicle behind cannot overtake the vehicle in front",
        "my": "နောက်မှလာသောကားသည် ရှေ့မှကားကို ကျော်တက်၍မရပါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถคันหลังสามารถแซงได้หากไม่มีคนข้ามถนน",
        "en": "The vehicle behind can overtake if there are no pedestrians",
        "my": "လမ်းကူးသူမရှိပါက နောက်မှလာသောကား ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันหลังสามารถแซงได้หากไม่มีรถสวนมา",
        "en": "The vehicle behind can overtake if there is no oncoming traffic",
        "my": "ရှေ့မှဆန့်ကျင်ဘက်ကားမလာပါက နောက်မှလာသောကား ကျော်တက်နိုင်သည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 191,
    "category": "traffic_laws",
    "image": null,
    "q_th": "เมื่อผู้โดยสารที่เป็นเด็กอายุ 13 ปี และมีผู้ปกครองนั่งไปด้วย ใครมีหน้าที่รับผิดชอบในการตรวจดูว่าเด็กคาดเข็มขัดนิรภัยเรียบร้อยแล้ว",
    "q_en": "When a 13-year-old child passenger is accompanied by a guardian, who is responsible for ensuring the child is properly wearing a seatbelt?",
    "q_my": "အသက် ၁၃ နှစ်အရွယ် ကလေးတစ်ဦး လိုက်ပါလာပြီး အုပ်ထိန်းသူပါလာပါက ကလေး၏ ထိုင်ခုံခါးပတ် (Seatbelt) စနစ်တကျပတ်ထားခြင်း ရှိ၊ မရှိ စစ်ဆေးရမည့်တာဝန်မှာ မည်သူ့တွင်ရှိသနည်း။",
    "options": [
      {
        "th": "ตัวเด็กเอง",
        "en": "The child himself/herself",
        "my": "ကလေးကိုယ်တိုင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ปกครองของเด็ก",
        "en": "The child's guardian",
        "my": "ကလေး၏အုပ်ထိန်းသူ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนโดยสารที่อยู่ด้านหน้า",
        "en": "The passenger in the front seat",
        "my": "ရှေ့မှလိုက်ပါလာသူ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนขับรถ",
        "en": "The driver",
        "my": "ယာဉ်မောင်းသူ",
        "image": null,
        "isCorrect": true
      }
    ]
  }
];
