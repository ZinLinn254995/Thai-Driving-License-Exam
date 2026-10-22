// Auto-generated 598 Thai Driving Test Questions
// Topic 1: Traffic Signs and Markings (117 Questions) - https://thaidriveexam.com/article-1000000000015
// Topic 2: Traffic Laws (74 Questions) - https://thaidriveexam.com/article-1000000000016
// Topic 3: Safe Driving (249 Questions) - https://thaidriveexam.com/article-1000000000022
// Topic 4: Vehicle Maintenance (81 Questions) - https://thaidriveexam.com/article-1000000000017
// Topic 5: Accident Prediction (77 Questions) - https://thaidriveexam.com/article-1000000000023

export type QuestionCategory = 'traffic_signs' | 'traffic_laws' | 'safe_driving' | 'vehicle_maintenance' | 'accident_prediction';

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
  },
  safe_driving: {
    en: 'Safe Driving',
    my: 'အန္တရာယ်ကင်းစွာ မောင်းနှင်ခြင်း',
    th: 'การขับขี่ปลอดภัย'
  },
  vehicle_maintenance: {
    en: 'Vehicle Maintenance',
    my: 'ယာဉ်ထိန်းသိမ်းစောင့်ရှောက်မှု',
    th: 'การบำรุงรักษารถ'
  },
  accident_prediction: {
    en: 'Accident Prediction',
    my: 'မတော်တဆမှု ကြိုတင်ခန့်မှန်းခြင်း',
    th: 'การคาดการณ์อุบัติเหตุ'
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
  },
  {
    "id": 192,
    "category": "safe_driving",
    "image": null,
    "q_th": "ก่อนจะแซงหรือเปลี่ยนช่องทางเดินรถ ต้องปฏิบัติอย่างไร?",
    "q_en": "Before overtaking or changing lanes. What must be done?",
    "q_my": "ကျော်တက်ခြင်း သို့မဟုတ် လမ်းကြောမပြောင်းမီ။ ဘာလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "รีบเร่งเครื่องแซงอย่างรวดเร็ว",
        "en": "Hurry to overtake the machine quickly.",
        "my": "စက်ကို မြန်မြန်ကျော်ဖို့ မြန်မြန်လုပ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ต้องให้สัญญาณแก่ผู้อื่นรับรู้",
        "en": "You must give a signal to others.",
        "my": "တခြားသူတွေကို အချက်ပြရမယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รีบเปลี่ยนช่องทางอย่างรวดเร็ว",
        "en": "Quickly change channels",
        "my": "ချန်နယ်များကို အမြန်ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงแล้วเหยียบเบรกทันที",
        "en": "Pass and immediately step on the brakes.",
        "my": "ကျော်ဖြတ်ပြီး ဘရိတ်ကို ချက်ချင်းနင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 193,
    "category": "safe_driving",
    "image": null,
    "q_th": "การปฏิบัติตนข้อใดไม่ถูกต้อง",
    "q_en": "Which behavior is incorrect?",
    "q_my": "ဘယ်အပြုအမူက မမှန်တာလဲ။",
    "options": [
      {
        "th": "จอดรถบริเวณทางร่วมทางแยก",
        "en": "Park at the intersection.",
        "my": "လမ်းဆုံမှာ ကားရပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ลดความเร็วเมื่อถึงวงเวียน",
        "en": "Reduce your speed when reaching a roundabout.",
        "my": "အဝိုင်းသို့ရောက်သောအခါ အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วเมื่อมีคนข้ามถนน",
        "en": "Reduce your speed when people cross the road.",
        "my": "လူတွေ လမ်းဖြတ်ကူးတဲ့အခါ အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วเมื่อถึงที่คับขัน",
        "en": "Reduce your speed when reaching a tight spot.",
        "my": "တင်းကျပ်တဲ့နေရာကိုရောက်တဲ့အခါ အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 194,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดเป็นการเปิดไฟหน้ารถที่ไม่ถูกต้อง?",
    "q_en": "Which of the following is incorrect turning on the car's headlights?",
    "q_my": "အောက်ဖော်ပြပါအရာများထဲမှ မည်သည့်အရာသည် ကားရှေ့မီးဖွင့်ခြင်း မှားယွင်းနေသနည်း။",
    "options": [
      {
        "th": "เมื่อฝนตกหนัก",
        "en": "When it rains heavily",
        "my": "မိုးသည်းထန်စွာရွာသောအခါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อไม่สามารถมองเห็นทางในระยะต่ำกว่า 150 เมตร",
        "en": "When the road cannot be seen at a distance of less than 150 meters.",
        "my": "လမ်းကို မီတာ ၁၅၀ အောက် အကွာအဝေးမှာ မမြင်ရဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อเร่งรีบไปทำงาน",
        "en": "When rushing to work",
        "my": "အလုပ်သို့ အပြေးအလွှား သွားသောအခါ၊",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เมื่อมีควันไฟปกคลุมถนน",
        "en": "When smoke covers the road",
        "my": "မီးခိုးတွေက လမ်းကို ဖုံးလွှမ်းသွားတဲ့အခါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 195,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000007.webp",
    "q_th": "ผู้ขับขี่รถ ก ต้องการจะเลี้ยวขวาและมีรถทางตรงวิ่งสวนมาต้องปฏิบัติอย่างไร",
    "q_en": "The driver of Car A wants to turn right and there is a car coming in the opposite direction. What should he do?",
    "q_my": "ကား A ၏ ယာဉ်မောင်းသည် ညာဘက်ကွေ့လိုပြီး ဆန့်ကျင်ဘက်သို့ ကားတစ်စီး ဝင်လာသည်။ သူဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "หยุดรถให้รถทางขวามือผ่านไปก่อนจึงเลี้ยวขวาได้",
        "en": "Stop the car to let the car on your right pass before you can turn right.",
        "my": "ညာဘက်သို့မကွေ့မီ ကားကိုညာဘက်မှဖြတ်သွားစေရန် ကားကိုရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามเลี้ยวรถ",
        "en": "Do not turn the car.",
        "my": "ကားကို လှည့်မကြည့်ပါနဲ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถให้รถทางตรงวิ่งสวนมาก่อนจึงเลี้ยวขวาได้",
        "en": "Stop the car to allow oncoming traffic before turning right.",
        "my": "ညာဘက်မကွေ့မီ လာနေသော ယာဉ်ကြောပိတ်ဆို့မှုကို ခွင့်ပြုရန် ကားကို ရပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เลี้ยวขวาได้ทันที",
        "en": "You can turn right immediately.",
        "my": "ချက်ချင်း ညာဘက်ကို ကွေ့နိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 196,
    "category": "safe_driving",
    "image": null,
    "q_th": "การจับพวงมาลัยนิ้วมือควรอยู่ในลักษณะใด",
    "q_en": "How should your fingers grip the steering wheel?",
    "q_my": "၎) လက်ချောင်းတွေက စတီယာရင်ကို ဘယ်လို ချုပ်ကိုင်သင့်လဲ။",
    "options": [
      {
        "th": "ให้นิ้วหัวแม่มือและนิ้วชี้จับพวงมาลัยเพียงสองนิ้ว",
        "en": "Keep only two fingers on the steering wheel with your thumb and forefinger.",
        "my": "စတီယာရင်ဘီးပေါ်တွင် လက်နှစ်ချောင်းကိုသာ လက်မနှင့် လက်ညှိုးဖြင့် ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นิ้วมือทั้งห้ากำพวงมาลัยให้แน่นที่สุด",
        "en": "All five fingers grip the steering wheel as tightly as possible.",
        "my": "လက်ငါးချောင်းစလုံးသည် စတီယာရင်ဘီးကို တတ်နိုင်သမျှ တင်းတင်းကျပ်ကျပ် ဆုပ်ကိုင်ထားသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นิ้วมือทั้งห้าแตะที่พวงมาลัย สามารถหมุนพวงมาลัยด้วยมือข้างเดียว",
        "en": "All five fingers touch the steering wheel. Can turn the steering wheel with one hand.",
        "my": "လက်ငါးချောင်းစလုံးသည် စတီယာရင်ဘီးကို ထိသည်။ စတီယာရင်ကို လက်တစ်ဖက်တည်းဖြင့် လှည့်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นิ้วมือทั้งห้า จับพวงมาลัยให้กระชับ สามารถหมุนได้คล่องตัว",
        "en": "five fingers Hold the steering wheel firmly. Can rotate flexibly",
        "my": "လက်ငါးချောင်းဖြင့် စတီယာရင်ကို မြဲမြံစွာ ကိုင်ထားပါ။ လိုက်လျောညီထွေ လှည့်လို့ရတယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 197,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดกล่าวถูกต้อง",
    "q_en": "Which of the following is correct?",
    "q_my": "အောက်ပါအချက်များထဲမှ ဘယ်ဟာမှန်ပါသလဲ။",
    "options": [
      {
        "th": "รถเก่า แรงน้อย ต้องหลบซ้าย",
        "en": "Old car, low power, must duck to the left.",
        "my": "ကားဟောင်း၊ ပါဝါနည်းပါးပြီး ဘယ်ဘက်ခြမ်းမှာ ပါရမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถวิ่งเร็วต้องเปิดไฟสูงตลอดเวลา",
        "en": "Cars traveling fast must have their high beams on at all times.",
        "my": "အမြန်ခရီးသွားသောကားများသည် အလင်းတန်းများကို အချိန်တိုင်းတွင် တပ်ဆင်ထားရပါမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถทุกคันต้องวิ่งตามความเร็วที่กฎหมายกำหนด",
        "en": "All vehicles must follow the legal speed limit.",
        "my": "ယာဉ်အားလုံးသည် ဥပဒေအရ အမြန်နှုန်း ကန့်သတ်ချက်ကို လိုက်နာရမည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถใหม่ราคาแพง ต้องชิดขวา",
        "en": "Expensive new car. Must keep to the right.",
        "my": "ဈေးကြီးတဲ့ကားအသစ်။ ညာဘက်ကို ထိန်းထားရမယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 198,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดถูกต้อง",
    "q_en": "Which is correct?",
    "q_my": "ဘယ်ဟာမှန်လဲ။",
    "options": [
      {
        "th": "รถจักรยานยนต์ต้องขับในช่องซ้ายสุด",
        "en": "Motorcycles must drive in the leftmost lane.",
        "my": "မော်တော်ဆိုင်ကယ်များသည် ဘယ်ဘက်ဆုံးလမ်းကြားတွင် မောင်းနှင်ရမည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "การเปลี่ยนช่องทางเดินรถไปซ้ายหรือขวาไม่ต้องดูกระจกด้านซ้ายหรือขวา",
        "en": "Changing lanes to the left or right does not require looking at the left or right mirror.",
        "my": "လမ်းကြောများကို ဘယ် သို့မဟုတ် ညာသို့ ပြောင်းခြင်းသည် ဘယ် သို့မဟုတ် ညာမှန်ကို ကြည့်ရန် မလိုအပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบรรทุกสิ่งของต้องขับช่องขวาสุด",
        "en": "Trucks carrying goods must drive in the rightmost lane.",
        "my": "ကုန်တင်ကားများသည် ညာဘက်ဆုံးလမ်းကြားတွင် မောင်းနှင်ရမည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบรรทุกคนโดยสารต้องขับช่องขวาสุด",
        "en": "Trucks with passengers must drive in the rightmost lane.",
        "my": "ခရီးသည်များပါရှိသော ကုန်တင်ကားများသည် ညာဘက်ဆုံးလမ်းကြားတွင် မောင်းနှင်ရမည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 199,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ควรปฏิบัติในขณะขับรถเข้าโค้งในตอนกลางคืน",
    "q_en": "Which thing should not be done while driving around a curve at night?",
    "q_my": "ညဘက် ကွေ့ပတ်ပြီး ကားမောင်းရင် ဘယ်အရာက မလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "บีบแตรเตือนหลายๆ ครั้งก่อนถึงโค้ง",
        "en": "Honk the horn several times. The time before the curve",
        "my": "ဟွန်း အကြိမ်ကြိမ် ဟွန်း။ မျဉ်းကွေး မရောက်မီအချိန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ชะลอความเร็วให้เหมาะสมกับโค้ง",
        "en": "Slow down to suit the curve.",
        "my": "မျဉ်းကွေးနှင့်ကိုက်ညီစေရန် နှေးကွေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เตือนด้วยการเปิดไฟสูง-ต่ำ",
        "en": "Warning by turning on high-low beams",
        "my": "မြင့်မားသောအနိမ့်တန်းများကိုဖွင့်ခြင်းဖြင့်သတိပေးသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความระมัดระวังมากขึ้น",
        "en": "Drive more carefully.",
        "my": "ပိုသတိထားမောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 200,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000022.webp",
    "q_th": "เมื่อคันข้างหน้าให้สัญญาณจะเลี้ยวรถหรือเปลี่ยนช่องทางเดินรถ ผู้ขับขี่ที่ขับรถตามหลังต้องปฏิบัติอย่างไร",
    "q_en": "When the vehicle in front gives a signal to turn or change lanes. What must the driver driving behind do?",
    "q_my": "ရှေ့မှယာဉ်သည် ကွေ့ရန် သို့မဟုတ် လမ်းသွားပြောင်းရန် အချက်ပြသည့်အခါ။ နောက်က ယာဉ်မောင်းက ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "ชะลอความเร็วและให้ทางแก่เขาไปก่อน",
        "en": "Slow down and give him the go-ahead.",
        "my": "အရှိန်လျှော့ပြီး သူ့ကို ရှေ့ကို တိုးပေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เร่งความเร็วเพื่อจะไปก่อน",
        "en": "Accelerate to go first.",
        "my": "အရှိန်မြှင့်ပြီး အရင်သွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถ",
        "en": "Stop the car",
        "my": "ကားရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถ",
        "en": "park the car",
        "my": "ကားရပ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 201,
    "category": "safe_driving",
    "image": null,
    "q_th": "พฤติกรรมการขับรถข้อใดไม่ปลอดภัย",
    "q_en": "Which driving behavior is unsafe?",
    "q_my": "ဘယ်ကားမောင်းတဲ့အပြုအမူက အန္တရာယ်ကင်းလဲ။",
    "options": [
      {
        "th": "ขับรถในเขตเทศบาลใช้ความเร็วไม่เกิน 80 กิโลเมตรต่อชั่วโมง",
        "en": "Driving in municipal areas must not exceed 80 kilometers per hour.",
        "my": "စည်ပင်သာယာနယ်နိမိတ်အတွင်း မောင်းနှင်ရာတွင် တစ်နာရီ ကီလိုမီတာ ၈၀ ထက်မပိုစေရပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถตามความพอใจของตัวเอง",
        "en": "Drive according to your own satisfaction.",
        "my": "ကိုယ့်စိတ်ကျေနပ်မှုအတိုင်း မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับช้าและชิดด้านซ้าย",
        "en": "Drive slowly and keep to the left.",
        "my": "ဖြည်းဖြည်းမောင်းပြီး ဘယ်ဘက်ကို ဆက်သွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถนอกเขตเทศบาลใช้ความเร็วไม่เกิน 90 กิโลเมตรต่อชั่วโมง",
        "en": "Driving outside the municipality does not exceed 90 kilometers per hour.",
        "my": "မြို့တော်အပြင်ဘက်တွင် တစ်နာရီလျှင် ကီလိုမီတာ ၉၀ ထက်မကျော်လွန်ဘဲ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 202,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถตามข้อใดปฏิบัติได้ถูกต้อง",
    "q_en": "Driving according to which of the following is correct?",
    "q_my": "၎) အောက်ဖော်ပြပါအချက်များအတိုင်း မောင်းနှင်ခြင်းသည် မည်သည့်အရာမှန်သနည်း။",
    "options": [
      {
        "th": "ขับรถคร่อมเส้นแบ่งช่องทางเดินรถ",
        "en": "Drive astride the lane divider.",
        "my": "လမ်းဆုံလမ်းခွကို ဖယ်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงรถในอุโมงค์",
        "en": "Overtaking cars in the tunnel",
        "my": "ဥမင်လိုဏ်ခေါင်းထဲတွင် ကားများကို ကျော်တက်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถใช้ความเร็วไม่เกินอัตราที่กฎหมายกำหนด",
        "en": "Drive at a speed not exceeding the speed specified by law.",
        "my": "ဥပဒေအရ သတ်မှတ်ထားသည့် အမြန်နှုန်းထက် မကျော်လွန်ဘဲ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถกีดขวางการจราจร",
        "en": "Driving obstructing traffic",
        "my": "ယာဉ်ကြောပိတ်ဆို့ မောင်းနှင်ခြင်း။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 203,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อเกิดอุบัติเหตุและมีผู้บาดเจ็บ ผู้ขับขี่ควรคำนึงถึงสิ่งใดเป็นอันดับแรก",
    "q_en": "When there is an accident and someone is injured. What should drivers consider first?",
    "q_my": "မတော်တဆ ထိခိုက်ဒဏ်ရာရရှိတဲ့အခါ၊ ယာဉ်မောင်းတွေက ဘာတွေကို အရင်စဉ်းစားသင့်လဲ။",
    "options": [
      {
        "th": "รอพบเจ้าหน้าที่ตำรวจ",
        "en": "Waiting to see the police",
        "my": "ရဲကိုတွေ့ဖို့စောင့်နေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การเคลื่อนย้ายรถที่เกิดเหตุ",
        "en": "Moving the vehicle at the scene",
        "my": "အခင်းဖြစ်ရာနေရာသို့ မော်တော်ယာဉ်ကို ရွှေ့ပြောင်းပေးခဲ့သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รอประกันภัย",
        "en": "Waiting for insurance",
        "my": "အာမခံကို စောင့်နေပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การช่วยเหลือผู้บาดเจ็บ",
        "en": "Helping the injured",
        "my": "ဒဏ်ရာရသူတွေကို ကူညီတယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 204,
    "category": "safe_driving",
    "image": null,
    "q_th": "การปลูกจิตสำนึกความปลอดภัยในการใช้รถใช้ถนนควรกระทำที่บุคคลใดมากที่สุด",
    "q_en": "Cultivating road safety awareness should be done to which person?",
    "q_my": "၎) လမ်းအန္တရာယ်ကင်းရှင်းရေး အသိပညာကို ပြုစုပျိုးထောင်ရာတွင် မည်သည့်ပုဂ္ဂိုလ်အား လုပ်ဆောင်သင့်သနည်း။",
    "options": [
      {
        "th": "คนขับรถเท่านั้น",
        "en": "Driver only",
        "my": "ယာဉ်မောင်းသာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บุคคลทุกคน",
        "en": "every person",
        "my": "လူတိုင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "คนเดินเท้าเท่านั้น",
        "en": "Pedestrians only",
        "my": "လမ်းသွားလမ်းလာများသာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้โดยสารเท่านั้น",
        "en": "Passengers only",
        "my": "ခရီးသည်များသာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 205,
    "category": "safe_driving",
    "image": null,
    "q_th": "ก่อนขับรถเข้าโค้งหรือมุมเลี้ยว ควรใช้ความเร็วอย่างไร",
    "q_en": "Before driving into a curve or turning corner. What speed should I use?",
    "q_my": "လမ်းကွေ့ သို့မဟုတ် ကွေ့ထောင့်သို့ မမောင်းမီ။ ဘယ်အမြန်နှုန်းကို သုံးရမလဲ။",
    "options": [
      {
        "th": "เพิ่มความเร็วให้มากขึ้นกว่าเดิม",
        "en": "Increase speed more than before",
        "my": "အရင်ကထက် အရှိန်မြှင့်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วลงให้มากที่สุด",
        "en": "Reduce your speed as much as possible.",
        "my": "အရှိန်ကို တတ်နိုင်သမျှ လျှော့ချပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความเร็วคงที่",
        "en": "Use a constant speed",
        "my": "အဆက်မပြတ်အမြန်နှုန်းကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควบคุมความเร็วให้เหมาะสมกับโค้งหรือมุมเลี้ยว",
        "en": "Control the speed to suit the curve or turning angle.",
        "my": "မျဉ်းကွေး သို့မဟုတ် ကွေ့ထောင့်နှင့် ကိုက်ညီစေရန် အမြန်နှုန်းကို ထိန်းချုပ်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 206,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000056.webp",
    "q_th": "กรณีรถเลี้ยวซ้ายและเลี้ยวขวาพร้อมกันในเส้นทางเดียวกันผู้ขับขี่ต้องทำอย่างไร",
    "q_en": "In the case of a car turning left and turning right at the same time on the same route, what should the driver do?",
    "q_my": "၎) လမ်းကြောင်းတစ်ခုတည်းမှာ ဘယ်ညာကွေ့ပြီး ညာဘက်ကွေ့ရင် ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ห้ามเลี้ยวซ้าย",
        "en": "Do not turn left",
        "my": "ဘယ်ဘက်သို့ မလှည့်ပါနှင့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ที่จะเลี้ยวซ้ายต้องหยุดให้ทางแก่รถที่เลี้ยวมาจากทางขวาก่อน",
        "en": "Those turning left must first stop to give way to vehicles turning from the right.",
        "my": "လက်ယာမှ ကွေ့နေသော ယာဉ်များကို လမ်းပေးရန်အတွက် လက်ဝဲကွေ့ကို ဦးစွာ ရပ်တန့်ရမည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ผู้ที่จะเลี้ยวขวาต้องหยุดให้ทางแก่รถที่เลี้ยวมาจากทางซ้ายก่อน",
        "en": "Those turning right must first stop to give way to vehicles turning from the left.",
        "my": "ညာကွေ့သူများသည် လက်ဝဲဘက်မှ ကွေ့နေသောယာဉ်များကို ဦးစွာရပ်တန့်ရပါမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ที่จะเลี้ยวซ้ายเลี้ยวได้ทันที",
        "en": "Those who wish to turn left can turn immediately.",
        "my": "ဘယ်ဘက်ကွေ့ချင်သူတွေ ချက်ချင်းကွေ့နိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 207,
    "category": "safe_driving",
    "image": null,
    "q_th": "อุบัติเหตุบนท้องถนนส่วนใหญ่เกิดจากอะไร",
    "q_en": "What causes most road accidents?",
    "q_my": "၎) ယာဉ်မတော်တဆမှု အများဆုံးဖြစ်စေသည့်အရာများ။",
    "options": [
      {
        "th": "สิ่งแวดล้อม",
        "en": "Environment",
        "my": "ပတ်ဝန်းကျင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถนน",
        "en": "road",
        "my": "လမ်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่",
        "en": "rider",
        "my": "မြင်းစီးသူ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถ",
        "en": "car",
        "my": "ကား",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 208,
    "category": "safe_driving",
    "image": null,
    "q_th": "พฤติกรรมใดเป็นการเปิดไฟสูงที่ถูกต้อง",
    "q_en": "Which behavior is the correct way to turn on the high beams?",
    "q_my": "အမြင့်တန်းများကိုဖွင့်ရန် မည်သည့်အပြုအမူသည် မှန်ကန်သောနည်းလမ်းဖြစ်သနည်း။",
    "options": [
      {
        "th": "เปิดไฟสูงขณะรถสวนกัน",
        "en": "Turn on the high beams when cars pass each other.",
        "my": "ကားတွေဖြတ်သွားတဲ့အခါ high beam ကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟสูงขณะที่ไม่มีรถสวนทางมา",
        "en": "Turn on your high beams when there are no cars coming in the opposite direction.",
        "my": "ဆန့်ကျင်ဘက်ဦးတည်လာသောကားများမရှိသောအခါ သင်၏အမြင့်တန်းများကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟสูงขณะขับรถตามหลังรถคันอื่น",
        "en": "Turn on your high beams while driving behind another vehicle.",
        "my": "အခြားယာဉ်နောက်မှ မောင်းနှင်နေစဉ် သင်၏အမြင့်တန်းများကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟสูงเพื่อไล่รถคันหน้า",
        "en": "Turn on your high beams to catch the car ahead.",
        "my": "ရှေ့ကားကိုဖမ်းရန် သင်၏အမြင့်တန်းများကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 209,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในช่องทางเดินรถตั้งแต่สองช่องทางขึ้นไปในทิศทางเดียวกัน ผู้ขับขี่รถจักรยานยนต์ ต้องปฏิบัติอย่างไร",
    "q_en": "In two or more lanes going in the same direction. motorcycle rider What must be done?",
    "q_my": "တူညီသော ဦးတည်ရာသို့ သွားနေသော လမ်းနှစ်သွယ် သို့မဟုတ် ထို့ထက်ပိုသော လမ်းသွယ်။ မော်တော်ဆိုင်ကယ်စီးသူ ဘာလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "ต้องขับคร่อมเส้นแบ่งช่องทางเดินรถ",
        "en": "Must drive across the lane divider.",
        "my": "လမ်းသွယ်မျဉ်းကို ဖြတ်ကျော်မောင်းနှင်ရမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ต้องขับรถชิดด้านขวาสุด",
        "en": "Must drive on the far right side.",
        "my": "ညာဘက်အစွန်ဘက် မောင်းနှင်ရမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ต้องขับรถชิดด้านซ้ายสุด",
        "en": "Must drive on the far left side.",
        "my": "ဘယ်ဘက်အစွန်ဆုံး မောင်းနှင်ရမည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ต้องขับรถอยู่ในช่องทางที่ให้ขับตรงไป",
        "en": "Must drive in the lane that allows driving straight.",
        "my": "ဖြောင့်ဖြောင့် မောင်းနှင်နိုင်စေမည့် လမ်းကြားတွင် မောင်းနှင်ရမည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 210,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะขับรถ ถ้ากระจกบังลมหน้าแตกร้าวควรปฏิบัติอย่างไร",
    "q_en": "While driving, if the windshield is cracked, what should you do?",
    "q_my": "၎) ကားမောင်းနေစဉ် လေကာမှန်ကွဲသွားပါက ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ตั้งสติ ลดความเร็ว จอดรถข้างทาง เปิดไฟฉุกเฉิน",
        "en": "Stay calm, reduce your speed, park on the side of the road, turn on your emergency lights.",
        "my": "ငြိမ်ငြိမ်နေပါ၊ အရှိန်လျှော့ပါ၊ လမ်းဘေးမှာ ရပ်ပါ၊ အရေးပေါ်မီးတွေကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตั้งสติ เปิดไฟฉุกเฉิน และหยุดรถทันที",
        "en": "Stay calm and turn on emergency lights. and stop the car immediately",
        "my": "ငြိမ်ငြိမ်ထားပြီး အရေးပေါ်မီးများဖွင့်ပါ။ ပြီးတော့ ကားကို ချက်ချင်းရပ်လိုက်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติ เปิดไฟฉุกเฉิน และขับรถต่อไป",
        "en": "Stay calm and turn on emergency lights. and keep driving",
        "my": "ငြိမ်ငြိမ်ထားပြီး အရေးပေါ်မီးများဖွင့်ပါ။ ဆက်လက်မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติ จอดรถข้างทาง",
        "en": "Be mindful and park on the side of the road.",
        "my": "သတိထားပြီး လမ်းဘေးမှာ ကားရပ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 211,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000082.webp",
    "q_th": "เมื่อการจราจรติดขัด รถคัน ข. ไม่สามารถเคลื่อนตัวข้างหน้าได้ ผู้ขับขี่รถคัน ก. ต้องการจะขับตรงไป จะต้องปฏิบัติอย่างไร",
    "q_en": "When traffic is congested, Car B cannot move forward. The driver of Car A wants to drive straight. What must be done?",
    "q_my": "၎) ယာဉ်ကြော ပိတ်ဆို့မှု ဖြစ်သောအခါ ကား B သည် ရှေ့သို့ မရွေ့နိုင်ပါ။ ကားမောင်းသူက ဖြောင့်ဖြောင့်မောင်းချင်သည်။ ဘာလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "หยุดรถให้รถคัน ข. ขับผ่านไปก่อน",
        "en": "Stop the car to let Car B pass by first.",
        "my": "ကား B ဖြတ်သွားနိုင်အောင် ကားကို အရင်ရပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถไปต่อท้ายรถคัน ข. เพื่อไม่ให้เกิดช่องว่าง",
        "en": "Drive to the back of Car B so as not to create a gap.",
        "my": "ကွာဟချက်မဖြစ်အောင် Car B ၏နောက်ဘက်သို့ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถไปต่อท้ายรถคัน ข. และเปิดไฟฉุกเฉิน",
        "en": "Drive to the back of Car B and turn on the emergency lights.",
        "my": "Car B နောက်ဘက်သို့ မောင်းပြီး အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถไปจอดคู่กับรถคัน ข. ทางด้านขวา",
        "en": "Drive to park alongside car B on the right.",
        "my": "ညာဘက်တွင် ကား B နှင့် တွဲရပ်ရန် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 212,
    "category": "safe_driving",
    "image": null,
    "q_th": "เหตุใดขณะขับรถลุยน้ำต้องเลี้ยงคลัทช์และเร่งเครื่องยนต์มากกว่าปกติเล็กน้อย",
    "q_en": "Why do I have to engage the clutch and accelerate the engine a little more than normal while driving through water?",
    "q_my": "အဘယ်ကြောင့် ကျွန်ုပ်သည် clutch ကို ချိတ်ဆက်ပြီး အင်ဂျင်ကို ပုံမှန်ထက် အနည်းငယ်ပို၍ အရှိန်မြှင့်ရသနည်း ။",
    "options": [
      {
        "th": "เพื่อให้รถมีความเร็วมากขึ้น",
        "en": "To make the car have more speed",
        "my": "ကားကို အရှိန်ပိုရစေရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อให้เครื่องยนต์ร้อน",
        "en": "to keep the engine hot",
        "my": "အင်ဂျင်ပူနေစေရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อให้ความร้อนของเครื่องยนต์สูงกว่าปกติ",
        "en": "To make the engine heat higher than normal",
        "my": "အင်ဂျင်အပူကို သာမာန်ထက် မြင့်အောင် လုပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อป้องกันไม่ให้เครื่องยนต์ดับ",
        "en": "To prevent the engine from shutting down",
        "my": "အင်ဂျင်ပိတ်ခြင်းမှကာကွယ်ရန်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 213,
    "category": "safe_driving",
    "image": null,
    "q_th": "เพื่อความปลอดภัยก่อนขับรถ ผู้ขับขี่ควรเตรียมตัวอย่างไร",
    "q_en": "For safety before driving How should drivers prepare?",
    "q_my": "ကားမမောင်းမီ ဘေးကင်းစေရန် ယာဉ်မောင်းများ မည်သို့ ပြင်ဆင်သင့်သနည်း။",
    "options": [
      {
        "th": "นอนหลับพักผ่อนให้เพียงพอ",
        "en": "Get enough sleep.",
        "my": "လုံလောက်အောင် အိပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ต่อทะเบียนรถให้เรียบร้อย",
        "en": "Complete your vehicle registration.",
        "my": "သင်၏ယာဉ်မှတ်ပုံတင်ခြင်းကို ဖြည့်စွက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมน้ำมันให้เต็มถัง",
        "en": "Fill the tank with gas.",
        "my": "တိုင်ကီကို ဓာတ်ငွေ့ဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รับประทานเครื่องดื่มกระตุ้นประสาทชนิดเข้มข้น",
        "en": "Consume strong stimulating drinks.",
        "my": "ပြင်းပြင်းထန်ထန် လှုံ့ဆော်ပေးသော အချိုရည်များကို သောက်သုံးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 214,
    "category": "safe_driving",
    "image": null,
    "q_th": "การหยุดรถอย่างกะทันหัน (รถไม่ใช้เบรก ABS) ควรปฏิบัติอย่างไร",
    "q_en": "Sudden stopping of the vehicle (The car does not use ABS brakes.) What should I do?",
    "q_my": "ယာဉ် ရုတ်တရက် ရပ်ခြင်း (ကားသည် ABS ဘရိတ်များ မသုံးပါ။) ကျွန်ုပ် ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "เหยียบเบรกแรงๆ โดยไม่ต้องถอนเบรก",
        "en": "Step on the brakes hard. without removing the brakes",
        "my": "ဘရိတ်ကို ပြင်းပြင်းထန်ထန် နင်းပါ။ ဘရိတ်မဖြုတ်ဘဲ၊",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหยียบและปล่อยเบรกสลับกัน (ย้ำเบรกซ้ำๆ)",
        "en": "Pedal and release the brakes alternately. (repeatedly brakes)",
        "my": "စက်ဘီးနင်းပြီး ဘရိတ်ကို တလှည့်စီ လွှတ်ပါ။ (အကြိမ်ကြိမ် ဘရိတ်အုပ်ခြင်း)",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหยียบเบรกและคลัทช์พร้อมกัน",
        "en": "Push the brake and clutch at the same time.",
        "my": "ဘရိတ်နှင့် ကလစ်ကို တချိန်တည်းတွန်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหยียบคลัทช์ก่อน แล้วจึงเหยียบเบรก",
        "en": "Step on the clutch first. Then step on the brake",
        "my": "ပထမဦးစွာ clutch ကိုတက်ပါ။ ထို့နောက် ဘရိတ်ကို နင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 215,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ควรปฏิบัติขณะขับรถเมื่อฝนตกหนัก",
    "q_en": "Which thing should not be done while driving when it is raining heavily?",
    "q_my": "မိုးသည်းထန်စွာရွာနေချိန် ကားမောင်းရင်း ဘယ်အရာတွေ မလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ลดความเร็วลงและเพิ่มความระมัดระวังให้มากขึ้น",
        "en": "Slow down and be more careful.",
        "my": "အရှိန်လျှော့ပြီး ပိုသတိထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความเร็วไม่เกิน 20 กิโลเมตรต่อชั่วโมง",
        "en": "Use a speed not exceeding 20 kilometers per hour.",
        "my": "တစ်နာရီ ကီလိုမီတာ ၂၀ ထက်မပိုသော အမြန်နှုန်းကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เบรกรถอย่างรุนแรงและรวดเร็ว",
        "en": "Brake the car hard and quickly.",
        "my": "ကားကို ပြင်းပြင်းထန်ထန် မြန်မြန်ဘရိတ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟหน้ารถในขณะขับรถ",
        "en": "Turn on your car's headlights while driving.",
        "my": "မောင်းနှင်နေစဉ် သင့်ကား၏ ရှေ့မီးကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 216,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะขับรถลงทางลาดชัน ถ้าเครื่องยนต์ดับควรปฏิบัติอย่างไร",
    "q_en": "While driving down a steep slope If the engine stops, what should you do?",
    "q_my": "မတ်စောက်သော တောင်စောင်းတွင် မောင်းနှင်နေစဉ် အင်ဂျင်ရပ်တန့်ပါက ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ปล่อยให้รถไหลไป แล้วค่อยประคองรถ",
        "en": "let the car flow Then slowly support the car.",
        "my": "ကားကို စီးဆင်းစေပြီးနောက် ကားကို ဖြည်းညှင်းစွာ ထောက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปลี่ยนเป็นเกียร์ต่ำ ดึงเบรกมือ และติดเครื่องใหม่",
        "en": "Shift into a lower gear, pull the parking brake, and restart the engine.",
        "my": "အောက်ဂီယာသို့ပြောင်းပါ၊ ပါကင်ဘရိတ်ကိုဆွဲကာ အင်ဂျင်ကိုပြန်လည်စတင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหยียบเบรก ดึงเบรกมือ เข้าเกียร์ว่าง และติดเครื่องใหม่",
        "en": "Step on the brakes, pull the handbrake, and shift into neutral. and install a new engine",
        "my": "ဘရိတ်ကိုနင်းပါ၊ လက်ဘရိတ်ကိုဆွဲပါ၊ ကြားနေသို့ပြောင်းပါ။ အင်ဂျင်အသစ် တပ်ဆင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหยียบเบรก ดึงเบรกมือ และติดเครื่องใหม่",
        "en": "Step on the brakes, pull the handbrake, and restart the engine.",
        "my": "ဘရိတ်ကိုနင်းပါ၊ လက်ဘရိတ်ကိုဆွဲပါ၊ အင်ဂျင်ကိုပြန်လည်စတင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 217,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในการขับรถสวนทางกัน ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "In driving in the opposite direction. What must the driver do?",
    "q_my": "ဆန့်ကျင်ဘက်သို့ မောင်းနှင်ခြင်း။ ယာဉ်မောင်းက ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "แซงเข้าไปในช่องเดินรถประจำทางได้",
        "en": "Can pass into the bus lane.",
        "my": "ဘတ်စကားလမ်းကြားသို့ ကူးနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ชะลอความเร็วและขับรถชิดด้านซ้าย",
        "en": "Slow down and drive on the left side.",
        "my": "အရှိန်လျှော့ပြီး ဘယ်ဘက်ခြမ်းကို မောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ในทางแคบที่ไม่อาจสวนกันได้ ผู้ขับรถคันที่เล็กกว่า ต้องหยุดชิดด้านซ้ายให้รถคันที่ใหญ่กว่าไปก่อน",
        "en": "In the narrow path that cannot be crossed Driver of a smaller car You must stop on the left side to let larger cars go first.",
        "my": "ဖြတ်မကူးနိုင်သော ကျဉ်းမြောင်းသောလမ်းတွင် ကားငယ်၏ ယာဉ်မောင်းသည် ပိုကြီးသောကားများကို ဦးစွာသွားခွင့်ပြုရန် ဘယ်ဘက်ခြမ်းတွင် ရပ်ရပါမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ในทางที่มีสิ่งกีดขวางอยู่ข้างหน้าไม่ต้องหยุดรอให้รถที่สวนมาผ่านไปก่อน",
        "en": "In the road where there are obstacles in front, you do not have to stop and wait for oncoming cars to pass first.",
        "my": "ရှေ့တွင် အတားအဆီးများရှိနေသောလမ်းတွင် လာမည့်ကားများကို ဦးစွာဖြတ်ရန် စောင့်ဆိုင်းရန် မလိုအပ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 218,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000121.webp",
    "q_th": "จากรูป หากท่านต้องการที่จะเลี้ยวขวา ท่านควรระมัดระวังและปฏิบัติอย่างไร",
    "q_en": "From the picture, if you want to turn right What precautions should you take and take?",
    "q_my": "၎) ပုံထဲကအတိုင်း ညာဘက်ကွေ့ချင်ရင် ဘာသတိထားရမလဲ။",
    "options": [
      {
        "th": "ขับรถไปในช่องทางด้านขวาเพื่อทำการเลี้ยว",
        "en": "Drive into the right lane to make a turn.",
        "my": "ကွေ့ရန် ညာဘက်လမ်းကြားသို့ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วเพื่อเลี้ยวขวาทันที",
        "en": "Immediately accelerate to turn right.",
        "my": "ညာဘက်ကို ကွေ့ဖို့ ချက်ချင်းအရှိန်မြှင့်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรเลี้ยวให้ทันทีเนื่องจากมีรถคันใหญ่ขวางรถฝั่งตรงข้าม",
        "en": "You should turn immediately because there is a large car blocking the car on the opposite side.",
        "my": "တစ်ဖက်ခြမ်းတွင် ကားကြီးတစ်စီး ပိတ်ဆို့နေသောကြောင့် ချက်ချင်းကွေ့သင့်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรอในตำแหน่งที่จะเลี้ยวและเลี้ยวได้เมื่อปลอดภัย",
        "en": "Stop and wait in a position to turn and turn when it is safe to do so.",
        "my": "ထိုသို့ပြုလုပ်ရန် ဘေးကင်းသည့်အခါတွင် ရပ်ပြီး လှည့်ရန် အနေအထားတွင် စောင့်ဆိုင်းပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 219,
    "category": "safe_driving",
    "image": null,
    "q_th": "ผู้ขับขี่ต้องการกลับรถต้องปฏิบัติอย่างไร",
    "q_en": "What should the driver do if he wants to make a U-turn?",
    "q_my": "ဂငယ်ကွေ့ချင်ရင် ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "กลับรถในบริเวณที่คับขัน",
        "en": "Make a U-turn in a tight area",
        "my": "ကြပ်သောနေရာတွင် ဂငယ်ကွေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กลับรถที่บริเวณเส้นทแยงเหลือง",
        "en": "Make a U-turn at the yellow diagonal line.",
        "my": "အဝါရောင်ထောင့်ဖြတ်မျဉ်းတွင် ဂငယ်ကွေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กลับรถช่องทางไหนก็ได้",
        "en": "You can make a U-turn in any lane.",
        "my": "မည်သည့်လမ်းကြောတွင်မဆို ဂငယ်ကွေ့နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เข้าช่องทางให้ถูกต้องและให้กลับรถได้เมื่อปลอดภัย",
        "en": "Enter the lane correctly and make a U-turn when it is safe to do so.",
        "my": "ထိုသို့ပြုလုပ်ရန် အန္တရာယ်ကင်းသည့်အခါ လမ်းကြောကို မှန်ကန်စွာဝင်ပြီး ဂငယ်ကွေ့ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 220,
    "category": "safe_driving",
    "image": null,
    "q_th": "ก่อนออกเดินทางข้อใดปฏิบัติไม่ถูกต้อง",
    "q_en": "Before leaving, which one is incorrect?",
    "q_my": "မထွက်ခင် ဘယ်ဟာ မှားလဲ။",
    "options": [
      {
        "th": "เตรียมสภาพรถให้พร้อมใช้งาน",
        "en": "Prepare the car for use.",
        "my": "ကားအသုံးပြုရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ศึกษาเส้นทางที่จะไป",
        "en": "Study the route you will take.",
        "my": "သင်သွားမည့်လမ်းကြောင်းကို လေ့လာပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดื่มสุราก่อนออกเดินทาง",
        "en": "Drink alcohol before leaving",
        "my": "မထွက်ခင် အရက်သောက်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เตรียมความพร้อมของร่างกาย",
        "en": "Prepare your body",
        "my": "သင့်ခန္ဓာကိုယ်ကိုပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 221,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถแซงรถคันหน้าต้องแซงด้านขวามือ ยกเว้นกรณีใดที่สามารถแซงด้านซ้ายมือได้",
    "q_en": "Driving to pass the car in front must pass on the right-hand side. Except in any case where you can pass on the left hand side.",
    "q_my": "၎) ရှေ့ကားကိုဖြတ်ရန် ညာဖက်ခြမ်းမှ ဖြတ်သွားရမည်။ ဘယ်ဘက်ခြမ်းကို ဖြတ်သွားနိုင်တဲ့ ကိစ္စကလွဲရင်ပေါ့။",
    "options": [
      {
        "th": "เมื่อรถที่จะถูกแซงกำลังเลี้ยวขวา หรือให้สัญญาณว่าจะเลี้ยวขวา",
        "en": "When the car that is about to be overtaken is turning right. or give a signal to turn right",
        "my": "ကျော်တက်မည့်ကားသည် ညာဘက်သို့ကွေ့သည်။ သို့မဟုတ် ညာဘက်ကွေ့ရန် အချက်ပြပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงรถคันอื่นทางด้านซ้ายขณะรถวิ่งบนสะพาน",
        "en": "Passing another vehicle on the left while driving on the bridge.",
        "my": "တံတားပေါ်တွင် မောင်းနှင်နေစဉ် လက်ဝဲဘက်ရှိ အခြားယာဉ်တစ်စီး ဖြတ်သွားပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงรถคันอื่นทางด้านซ้ายในทางเดินรถช่องทางเดียว",
        "en": "Passing another vehicle on the left in a single lane roadway",
        "my": "လမ်းသွားလမ်းကြားတစ်ခုအတွင်း လက်ဝဲဘက်ရှိ အခြားယာဉ်တစ်စီး ဖြတ်သွားခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงรถคันอื่นในช่องทางซ้ายเมื่ออยู่ในเขตชุมชน",
        "en": "Passing other cars in the left lane when in a community area",
        "my": "ရပ်ရွာဧရိယာအတွင်း အခြားကားများ ဖြတ်သွားသည့်အခါ လက်ဝဲလမ်းကြား",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 222,
    "category": "safe_driving",
    "image": null,
    "q_th": "ผู้ขับขี่ต้องขับรถในทางเดินรถด้านซ้าย ยกเว้นกรณีใดสามารถเดินรถทางขวาหรือ ล้ำกึ่งกลางของทางเดินรถได้",
    "q_en": "The driver must drive in the left-hand lane. Except in which case can the vehicle be driven on the right? Can cross the middle of the roadway.",
    "q_my": "၎) ယာဉ်မောင်းသည် ဘယ်ဘက်လမ်းကြားတွင် မောင်းနှင်ရမည်။ ဘယ်အခြေအနေမှာမှ ညာဖက်ကို မောင်းနှင်နိုင်ပါ့မလား။ လမ်းလယ်ကို ဖြတ်လို့ရတယ်။",
    "options": [
      {
        "th": "ทางเดินรถกว้างมาก",
        "en": "The driveway is very wide.",
        "my": "ကားလမ်းက အရမ်းကျယ်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ด้านซ้ายของทางเดินรถมีสิ่งกีดขวาง",
        "en": "There is an obstacle on the left side of the road.",
        "my": "လမ်းရဲ့ဘယ်ဘက်ခြမ်းမှာ အတားအဆီးတစ်ခုရှိတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่มีรถสวนทางมา",
        "en": "There are no cars coming in the opposite direction.",
        "my": "ဆန့်ကျင်ဘက်ဘက်ကို လာတဲ့ကားတွေ မရှိဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเดินรถมีน้ำท่วมขัง",
        "en": "The driveway is flooded.",
        "my": "ကားလမ်းက ရေမြုပ်နေတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 223,
    "category": "safe_driving",
    "image": null,
    "q_th": "บริเวณใดสามารถกลับรถได้",
    "q_en": "In which areas can you make a U-turn?",
    "q_my": "၎) မည်သည့်နေရာများတွင် ဂငယ်ကွေ့နိုင်သနည်း။",
    "options": [
      {
        "th": "ระยะ 100 เมตร จากทางราบของเชิงสะพาน",
        "en": "Distance: 100 meters from the level of the foot of the bridge",
        "my": "အကွာအဝေး- တံတားခြေရင်းမှ မီတာ 100 အကွာအဝေး",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางเดินรถที่มีเครื่องหมายห้ามกลับรถ",
        "en": "The road has a sign prohibiting U-turns.",
        "my": "လမ်းတွင် ဂငယ်ကွေ့ တားသည့် ဆိုင်းဘုတ် ရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เขตปลอดภัย",
        "en": "safe zone",
        "my": "လုံခြုံဇုန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บริเวณบนสะพาน",
        "en": "Area on the bridge",
        "my": "တံတားပေါ်ရှိ ဧရိယာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 224,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อผู้ขับขี่พบเครื่องหมาย \"เลี้ยวซ้ายผ่านตลอด\" ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When the driver encounters the sign \"Always turn left.\" What should drivers do?",
    "q_my": "ယာဉ်မောင်းသည် \"အမြဲဘယ်ဘက်သို့ကွေ့ပါ\" ဟူသော ဆိုင်းဘုတ်ကိုတွေ့သောအခါ၊ ယာဉ်မောင်းတွေ ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ลดความเร็วของรถลงและเลี้ยวซ้ายผ่านไปได้ทันที",
        "en": "Slow down the car and turn left immediately.",
        "my": "ကားကို အရှိန်လျှော့ပြီး ဘယ်ဘက်ကို ချက်ချင်းကွေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เลี้ยวซ้ายผ่านไปได้ทันที",
        "en": "Turn left and pass immediately.",
        "my": "ဘယ်ဘက်ကွေ့ပြီး ချက်ချင်းဖြတ်သွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรอจนกว่าจะได้รับสัญญาณไฟเขียวจึงเลี้ยวซ้ายไปได้",
        "en": "Stop and wait until you get the green light to turn left.",
        "my": "ဘယ်ဘက်ကွေ့ရန် မီးစိမ်းပြသည်အထိ ရပ်ပြီး စောင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรอให้คนข้ามถนนและรถที่มาจากทางด้านขวามือขับผ่านไปก่อนแล้วจึงเลี้ยวซ้ายผ่านไป",
        "en": "Stop and wait for pedestrians crossing the road and cars coming from your right to pass before turning left.",
        "my": "လမ်းဖြတ်ကူးသူတွေကို ရပ်ပြီး ဘယ်ဘက်မကွေ့ခင် လက်ယာဘက်ကလာတဲ့ ကားတွေကို ရပ်ပြီး စောင့်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 225,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านกำลังขับรถจะออกจากถนนรอง เพราะเหตุใดจึงควรระมัดระวังรถจักรยานยนต์เป็นพิเศษ",
    "q_en": "When you are driving off the secondary road. Why should you be especially careful with motorcycles?",
    "q_my": "၎) အလယ်တန်းလမ်းကို ဖြတ်မောင်းတဲ့အခါ။ ဆိုင်ကယ်တွေကို ဘာကြောင့် အထူးသတိထားသင့်လဲ။",
    "options": [
      {
        "th": "รถจักรยานยนต์มักจะใช้ความเร็วมากกว่ารถยนต์",
        "en": "Motorcycles tend to reach faster speeds than cars.",
        "my": "မော်တော်ဆိုင်ကယ်များသည် ကားများထက် အရှိန်ပိုမြန်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์มีสิทธิ์ไปก่อน",
        "en": "Motorcycles have the right to go first.",
        "my": "ဆိုင်ကယ် အရင်သွားပိုင်ခွင့်ရှိတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์ถูกบดบังจากสิ่งกีดขวางได้ง่าย",
        "en": "Motorcycles are easily obscured by obstacles.",
        "my": "မော်တော်ဆိုင်ကယ်များသည် အတားအဆီးများဖြင့် အလွယ်တကူ ဖုံးကွယ်နေပါသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตำรวจสายตรวจมักจะใช้รถจักรยานยนต์",
        "en": "Police patrols often use motorcycles.",
        "my": "ရဲတပ်ဖွဲ့ဝင်များသည် မော်တော်ဆိုင်ကယ်များကို မကြာခဏ အသုံးပြုကြသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 226,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อถึงทางรถไฟและมีรถไฟกำลังแล่นผ่าน ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When you reach the railroad and there is a train passing by. What must the driver do?",
    "q_my": "၎) ရထားလမ်းကို ရောက်တဲ့အခါ ရထားက ဖြတ်သွားတာရှိတယ်။ ယာဉ်မောင်းက ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "ให้เสียงสัญญาณแตรเตือนและขับผ่านไปได้",
        "en": "Sound the warning horn and drive past.",
        "my": "သတိပေးဟွန်းကို တီးပြီး ကျော်ဖြတ်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถให้ห่างจากทางรถไฟไม่น้อยกว่า 5 เมตร",
        "en": "Stop the vehicle at least 5 meters away from the railroad tracks.",
        "my": "ရထားသံလမ်းမှ အနည်းဆုံး 5 မီတာအကွာတွင် ယာဉ်ကို ရပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หยุดรอสัญญาณไฟและเปิดไฟฉุกเฉิน",
        "en": "Stop, wait for the light and turn on your emergency lights.",
        "my": "ရပ်ပါ၊ မီးကိုစောင့်ပြီး အရေးပေါ်မီးများကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถผ่านไปโดยเร็ว",
        "en": "Drive past quickly.",
        "my": "အမြန်ဖြတ်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 227,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อเกิดอุบัติเหตุผู้ขับขี่หลบหนีจะมีผลอย่างไร",
    "q_en": "When an accident occurs, what are the consequences of the driver fleeing?",
    "q_my": "၎) မတော်တဆမှုတစ်ခု ဖြစ်ပွားသောအခါ ယာဉ်မောင်းထွက်ပြေးခြင်း၏ ဆိုးကျိုးများကား အဘယ်နည်း။",
    "options": [
      {
        "th": "ไม่มีผล เพราะไม่ใช่ฝ่ายผิด",
        "en": "It has no effect because it is not the party at fault.",
        "my": "ပါတီရဲ့အပြစ်မဟုတ်တဲ့အတွက် သက်ရောက်မှုမရှိပါဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะได้รับการกันไว้เป็นพยาน",
        "en": "will be set aside as a witness",
        "my": "သက်သေအဖြစ် ဖယ်ထားမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สันนิษฐานว่าผู้นั้นเป็นผู้กระทำผิด",
        "en": "It is assumed that that person is the perpetrator.",
        "my": "အဲဒီလူက ကျူးလွန်သူလို့ ယူဆတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "มีผลให้เป็นฝ่ายถูก",
        "en": "Resulting in being right",
        "my": "ရလာဒ်က မှန်တယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 228,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดเปิดไฟฉุกเฉินได้ถูกต้อง",
    "q_en": "Which is the correct way to turn on emergency lights?",
    "q_my": "အရေးပေါ်မီးများဖွင့်ရန် ဘယ်နည်းက မှန်ကန်သနည်း။",
    "options": [
      {
        "th": "มีหมอก",
        "en": "It's foggy.",
        "my": "မှိုင်းတွေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถเสียหรือรถเกิดอุบัติเหตุ",
        "en": "Broken down car or car accident",
        "my": "ကားပျက် သို့မဟုတ် ယာဉ်တိုက်မှု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ผ่านทางแยก",
        "en": "through the intersection",
        "my": "လမ်းဆုံမှတဆင့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปิดได้ตลอดเวลา",
        "en": "Closed at any time",
        "my": "အချိန်မရွေး ပိတ်ပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 229,
    "category": "safe_driving",
    "image": null,
    "q_th": "การลากจูงรถที่ไม่สามารถใช้พวงมาลัยหรือเบรกได้ควรทำอย่างไร",
    "q_en": "What should I do to tow a car that cannot use the steering wheel or brakes?",
    "q_my": "စတီယာရင်ဘီး သို့မဟုတ် ဘရိတ်ကို အသုံးမပြုနိုင်သော ကားကို ဆွဲတင်ရန် ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ใช้คนดันไป",
        "en": "Use someone to push it.",
        "my": "တွန်းရန်တစ်စုံတစ်ဦးကိုအသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้วิธีการยกหน้าหรือยกท้ายลากไป",
        "en": "Use the method of lifting the front or lifting the rear and dragging it.",
        "my": "အရှေ့ကို မြှောက်ခြင်း သို့မဟုတ် အနောက်ကို မြှောက်ပြီး ဆွဲယူခြင်းနည်းလမ်းကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้รถดันไป",
        "en": "Use a car to push it.",
        "my": "တွန်းဖို့ ကားကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้สายพ่วงลากจูงไป",
        "en": "Use a tow cable to tow it.",
        "my": "တွဲဆွဲရန် ကြိုးကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 230,
    "category": "safe_driving",
    "image": null,
    "q_th": "การกระทำของผู้ขับขี่ข้อใด ที่อาจก่อให้เกิดอุบัติเหตุมากที่สุด",
    "q_en": "Which action of the driver? that may cause the most accidents",
    "q_my": "ယာဉ်မောင်းရဲ့ လုပ်ရပ်က ဘာလဲ။ မတော်တဆမှု အများဆုံး ဖြစ်စေနိုင်ပါတယ်။",
    "options": [
      {
        "th": "ร้องเพลง",
        "en": "sing a song",
        "my": "သီချင်းဆိုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พูดคุยกับคนที่อยู่ข้างๆ",
        "en": "Talk to the person next to you.",
        "my": "သင့်ဘေးနားရှိလူနှင့် စကားပြောပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "โทรศัพท์มือถือในขณะขับรถ",
        "en": "Mobile phone while driving",
        "my": "ကားမောင်းနေစဉ် လက်ကိုင်ဖုန်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดวิทยุฟังเพลง",
        "en": "Turn on the radio and listen to music.",
        "my": "ရေဒီယိုကိုဖွင့်ပြီး သီချင်းနားထောင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 231,
    "category": "safe_driving",
    "image": null,
    "q_th": "สำนวนใดที่เตือนใจผู้ขับขี่เพื่อให้เกิดความปลอดภัย",
    "q_en": "Which expression reminds drivers to be safe?",
    "q_my": "ဘယ်အသုံးအနှုန်းက ယာဉ်မောင်းတွေကို ဘေးကင်းဖို့ သတိပေးသလဲ။",
    "options": [
      {
        "th": "กล้าได้กล้าเสีย",
        "en": "enterprising",
        "my": "တက်ကြွသော",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ฆ่าได้แต่หยามไม่ได้",
        "en": "You can kill but you can't insult.",
        "my": "သတ်နိုင်ပေမယ့် စော်ကားလို့မရဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความประมาทเป็นบ่อเกิดแห่งความตาย",
        "en": "Negligence is the root of death.",
        "my": "ပေါ့ဆခြင်းသည် သေခြင်း၏အမြစ်ဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "กระต่ายตื่นตูม",
        "en": "The rabbit was alarmed.",
        "my": "ယုန်သည် ထိတ်လန့်သွားသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 232,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อเห็นคนเดินเท้าข้ามถนนผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When you see a pedestrian crossing the road, what should the driver do?",
    "q_my": "၎) လမ်းဖြတ်ကူးနေတာကို တွေ့ရင် ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "บีบแตรไล่",
        "en": "Honk the horn",
        "my": "ဟွန်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถต้องหยุดให้คนเดินเท้าผ่านไปก่อน",
        "en": "Cars must stop to allow pedestrians to pass first.",
        "my": "လမ်းသွားလမ်းလာများကို ဦးစွာဖြတ်သန်းခွင့်ပြုရန် မော်တော်ကားများ ရပ်တန့်ထားရမည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับผ่านไปได้โดยไม่ต้องหยุดรถ",
        "en": "You can drive past without having to stop your car.",
        "my": "သင့်ကားကို ရပ်စရာမလိုဘဲ ဖြတ်ကျော်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้การวัดใจ",
        "en": "Use the heart test.",
        "my": "နှလုံးစမ်းသပ်မှုကို အသုံးပြု.",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 233,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถทิ้งระยะห่างจากรถคันหน้ามากเกินไป จะมีผลอย่างไร",
    "q_en": "Driving leaves too much distance from the car in front. What effect will it have?",
    "q_my": "၎) မောင်းနှင်ခြင်းသည် ရှေ့ကားနှင့် အလွန်အလှမ်းဝေးသည်။ ဘယ်လိုအကျိုးသက်ရောက်မှုရှိမလဲ။",
    "options": [
      {
        "th": "เกิดปัญหาการจราจรติดขัด",
        "en": "There was a traffic jam.",
        "my": "ယာဉ်ကြောပိတ်ဆို့မှုဖြစ်ခဲ့သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ลดอุบัติเหตุ",
        "en": "Reduce accidents",
        "my": "ယာဉ်မတော်တဆမှုများ လျှော့ချပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การจราจรคล่องตัวมากขึ้น",
        "en": "Traffic is more fluid.",
        "my": "အသွားအလာက ပိုအဆင်ပြေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะขับรถด้วยความปลอดภัยมากขึ้น",
        "en": "will drive with more safety",
        "my": "ပိုမိုလုံခြုံစွာ မောင်းနှင်နိုင်မည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 234,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดที่ผู้ขับขี่ไม่ควรปฏิบัติ",
    "q_en": "Which thing should drivers not do?",
    "q_my": "၎) ယာဉ်မောင်းများ မည်သည့်အရာကို မလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถด้วยความระมัดระวังขณะฝนตก ถนนลื่น",
        "en": "Drive with caution during rain. The roads are slippery.",
        "my": "မိုးတွင်းမှာ သတိနဲ့မောင်းပါ။ လမ်းတွေက ချောတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณไฟเพื่อขอแซง",
        "en": "Give a signal to pass.",
        "my": "ကျော်ဖြတ်ရန် အချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความเร็วสูงในที่ที่มีการจราจรพลุกพล่าน",
        "en": "Driving at high speeds in busy traffic.",
        "my": "စည်ကားနေသော ယာဉ်ကြောပိတ်ဆို့မှုများတွင် အရှိန်ပြင်းပြင်း မောင်းနှင်ခြင်း။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ปฏิบัติตามกฎจราจรอย่างเคร่งครัด",
        "en": "Strictly follow traffic rules.",
        "my": "ယာဉ်စည်းကမ်းကို တိကျစွာလိုက်နာပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 235,
    "category": "safe_driving",
    "image": null,
    "q_th": "มารยาทที่ดีในการจอดรถ คือข้อใด",
    "q_en": "What is good parking etiquette?",
    "q_my": "ကောင်းမွန်တဲ့ ကားပါကင်ကျင့်ဝတ်ဆိုတာ ဘာလဲ။",
    "options": [
      {
        "th": "จอดรถขวางทางเข้า-ออก",
        "en": "Parking is blocking the entrance and exit.",
        "my": "ကားပါကင်သည် ဝင်ပေါက်နှင့် ထွက်ပေါက်များကို ပိတ်ဆို့ထားသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถซ้อนคัน",
        "en": "Double parking",
        "my": "နှစ်ထပ်ပါကင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดบริเวณที่มีเครื่องหมายห้ามจอด",
        "en": "Park in areas with no parking signs.",
        "my": "ကားပါကင် ဆိုင်းဘုတ်မရှိသော နေရာများတွင် ရပ်နားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดโดยไม่กีดขวางผู้อื่นและไม่ฝ่าฝืนกฎจราจร",
        "en": "Park without obstructing others and without violating traffic rules.",
        "my": "ယာဉ်စည်းကမ်း မဖောက်ဖျက်ဘဲ အခြားသူများကို အတားအဆီးမရှိ ရပ်နားပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 236,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถขณะฝนตก ข้อใดที่ผู้ขับขี่ไม่ควรปฏิบัติ",
    "q_en": "Driving while it rains Which thing should drivers not do?",
    "q_my": "မိုးရွာနေချိန်မှာ ယာဉ်မောင်းတွေ ဘယ်အရာတွေ မလုပ်သင့်သလဲ။",
    "options": [
      {
        "th": "เปิดที่ปัดน้ำฝน",
        "en": "Turn on the windshield wipers.",
        "my": "လေကာမှန် wipers ကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความระมัดระวังเพิ่มมากขึ้น",
        "en": "Use more caution.",
        "my": "ပိုသတိထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินตลอดเส้นทาง",
        "en": "Turn on emergency lights along the route.",
        "my": "လမ်းကြောင်းတစ်လျှောက် အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ลดความเร็วของรถลงกว่าปกติ",
        "en": "Reduce the speed of the car more than normal.",
        "my": "ကားရဲ့အရှိန်ကို ပုံမှန်ထက် ပိုလျှော့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 237,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อเกิดรถเสีย ควรปฏิบัติอย่างไร",
    "q_en": "When a car breaks down What should I do?",
    "q_my": "၎) ကားပျက်ကျရင် ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "จอดรถทิ้งไว้กลางถนน",
        "en": "Leave your car in the middle of the road.",
        "my": "သင့်ကားကို လမ်းလယ်တွင် ထားခဲ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นำรถจอดเข้าข้างทาง, เปิดไฟฉุกเฉิน",
        "en": "Park the car on the side of the road and turn on the emergency lights.",
        "my": "ကားကို လမ်းဘေးမှာ ရပ်ပြီး အရေးပေါ် မီးဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "นำกิ่งไม้วางไว้ท้ายรถ",
        "en": "Put the branch in the back of the car.",
        "my": "သစ်ကိုင်းကို ကားနောက်ခန်းမှာ ထားလိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เผาป่าข้างทางหากเป็นกลางคืน",
        "en": "Burn the forest beside the road if it's night.",
        "my": "ညဘက်ဆိုရင် လမ်းဘေးက တောကို မီးရှို့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 238,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อผู้ขับขี่ขับรถเสียหลักบนถนนเปียกลื่น ควรปฏิบัติอย่างไร",
    "q_en": "When the driver loses control on a wet and slippery road. What should I do?",
    "q_my": "စိုစွတ်ပြီး ချောတဲ့လမ်းမှာ ယာဉ်မောင်းက ထိန်းချုပ်မှု ဆုံးရှုံးသွားတဲ့အခါ။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ถอนคันเร่ง เหยียบเบรกเพื่อใช้เกียร์ต่ำ",
        "en": "Release the accelerator and step on the brake to shift into a lower gear.",
        "my": "အရှိန်မြှင့်ပြီး ဂီယာအောက်သို့ပြောင်းရန် ဘရိတ်ကို အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถอนคันเร่ง จับพวงมาลัยให้มั่นประคองรถต่อไป",
        "en": "Release the accelerator, hold the steering wheel firmly and keep the car steady.",
        "my": "အရှိန်မြှင့်ပြီး စတီယာရင်ကို မြဲမြဲကိုင်ထားပြီး ကားကို တည်ငြိမ်အောင်ထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหยียบเบรกทันที แล้วค่อยๆออกตัวเร่งความเร็วใหม่",
        "en": "Step on the brakes immediately. Then slowly start to accelerate again.",
        "my": "ဘရိတ်ကို ချက်ချင်းနင်းပါ။ ထို့နောက် ဖြည်းဖြည်းချင်း ပြန်ပြီး အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติให้มั่น จับพวงมาลัยให้ดี เร่งความเร็วหนีให้พ้นไป",
        "en": "Stay calm. Hold the steering wheel well. Speed up and get away.",
        "my": "တည်တည်ငြိမ်ငြိမ်နေပါ။ စတီယာရင်ကို ကောင်းစွာကိုင်ထားပါ။ အရှိန်မြှင့်ပြီး ထွက်သွားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 239,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะขับรถ ถ้ากระจกบังลมหน้ารถแตกร้าว ควรปฏิบัติอย่างไร",
    "q_en": "While driving, if the windshield of the car is cracked. What should I do?",
    "q_my": "၎) ကားမောင်းနေစဉ် လေကာမှန်ကွဲသွားပါက၊ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ตั้งสติ ลดความเร็ว จอดรถข้างทาง เปิดไฟฉุกเฉิน",
        "en": "Stay calm, reduce your speed, park on the side of the road, turn on your emergency lights.",
        "my": "ငြိမ်ငြိမ်နေပါ၊ အရှိန်လျှော့ပါ၊ လမ်းဘေးမှာ ရပ်ပါ၊ အရေးပေါ်မီးတွေကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตั้งสติ จอดรถข้างทาง",
        "en": "Be mindful and park on the side of the road.",
        "my": "သတိထားပြီး လမ်းဘေးမှာ ကားရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติ เปิดไฟฉุกเฉิน และขับรถต่อไป",
        "en": "Stay calm and turn on emergency lights. and keep driving",
        "my": "ငြိမ်ငြိမ်ထားပြီး အရေးပေါ်မီးများဖွင့်ပါ။ ဆက်လက်မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติ เปิดไฟฉุกเฉิน และหยุดรถทันที",
        "en": "Stay calm and turn on emergency lights. and stop the car immediately",
        "my": "ငြိမ်ငြိမ်ထားပြီး အရေးပေါ်မီးများဖွင့်ပါ။ ပြီးတော့ ကားကို ချက်ချင်းရပ်လိုက်တယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 240,
    "category": "safe_driving",
    "image": null,
    "q_th": "การปรับระดับที่นั่งคนขับห่างเกินไป จะมีผลอย่างไร",
    "q_en": "The driver's seat adjustment is too far away. What effect will it have?",
    "q_my": "ယာဉ်မောင်းထိုင်ခုံ ချိန်ညှိမှုသည် အဝေးကြီးဖြစ်သည်။ ဘယ်လိုအကျိုးသက်ရောက်မှုရှိမလဲ။",
    "options": [
      {
        "th": "ทำให้เข้าเกียร์ได้ง่าย",
        "en": "Makes it easy to shift into gear",
        "my": "ဂီယာပြောင်းရန် လွယ်ကူစေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้เบรกรถสะดวก",
        "en": "Makes car braking convenient",
        "my": "ကားဘရိတ်ကို အဆင်ပြေစေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้ทัศนวิสัยในการมองเห็นชัดเจนดีมาก สามารถตัดสินใจได้ดี",
        "en": "Makes visibility very clear. able to make good decisions",
        "my": "မြင်နိုင်စွမ်းကို အလွန်ရှင်းလင်းစေသည်။ ကောင်းသောဆုံးဖြတ်ချက်များချနိုင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บังคับพวงมาลัยลําบาก ใช้อุปกรณ์ต่างๆ ไม่สะดวก เกิดเหตุฉุกเฉินไม่สามารถใช้คลัทช์ และเบรกได้",
        "en": "Difficulty controlling the steering wheel Inconvenient to use various equipment. In an emergency, unable to use the clutch and brake.",
        "my": "စတီယာရင်ဘီးကို ထိန်းချုပ်ရန် ခက်ခဲခြင်း စက်ပစ္စည်းအမျိုးမျိုးကို အသုံးပြုရန် အဆင်မပြေပါ။ အရေးပေါ်အခြေအနေတွင်၊ clutch နှင့် ဘရိတ်ကို အသုံးမပြုနိုင်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 241,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถถอยหลังควรใช้ความเร็วระดับใด",
    "q_en": "What speed should you drive in reverse?",
    "q_my": "နောက်ပြန်မောင်းရင် ဘယ်အရှိန်နဲ့မောင်းရမလဲ။",
    "options": [
      {
        "th": "ถอยช้าๆ แล้วใช้ความระมัดระวัง",
        "en": "Back up slowly and use caution.",
        "my": "ဖြည်းညှင်းစွာ အရန်ကူးပြီး သတိထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้ความเร็วตามสภาพของรถ",
        "en": "Use the speed according to the condition of the car.",
        "my": "ကား၏အခြေအနေအရ အရှိန်ကိုအသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถอยแบบไหนก็ได้",
        "en": "You can retreat any way you want.",
        "my": "ကြိုက်သလို ဆုတ်သွားနိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถอยเหมือนกับเดินหน้า",
        "en": "Retreat is the same as moving forward.",
        "my": "ဆုတ်ခွာခြင်း သည် ရှေ့တိုးခြင်း နှင့် အတူတူပင် ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 242,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับขี่ขึ้นหรือลงทางลาดชัน ควรใช้เกียร์ใด",
    "q_en": "Driving up or down a slope What gear should I use?",
    "q_my": "တောင်စောင်းအတက်အဆင်း မောင်းနှင်ရာတွင် မည်သည့်ဂီယာကို အသုံးပြုသင့်သနည်း။",
    "options": [
      {
        "th": "เกียร์ต่ำ",
        "en": "low gear",
        "my": "အနိမ့်ဂီယာ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เกียร์ใดก็ได้",
        "en": "Any gear",
        "my": "မည်သည့်ဂီယာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เกียร์สูง",
        "en": "high gear",
        "my": "ဂီယာမြင့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เกียร์ว่าง",
        "en": "Neutral gear",
        "my": "ကြားနေဂီယာ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 243,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในการขับขี่ลงทางลาดชัน ผู้ขับขี่ควรใช้เกียร์ต่ำเนื่องจากสาเหตุใด",
    "q_en": "In driving down a steep slope Why should drivers use a lower gear?",
    "q_my": "မတ်စောက်သော တောင်စောင်းကို မောင်းနှင်ရာတွင် ယာဉ်မောင်းများသည် အဘယ်ကြောင့် အောက်ဂီယာကို အသုံးပြုသင့်သနည်း။",
    "options": [
      {
        "th": "เพื่อลดความร้อนของเครื่องยนต์",
        "en": "To reduce the heat of the engine",
        "my": "အင်ဂျင်၏အပူကိုလျှော့ချရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อเพิ่มกำลังของรถ",
        "en": "To increase the power of the car",
        "my": "ကား၏ စွမ်းအားကို မြှင့်တင်ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อเพิ่มความเร็วของรถ",
        "en": "to increase the speed of the car",
        "my": "ကားအရှိန်မြှင့်ဖို့",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อหน่วงความเร็วของรถ",
        "en": "to slow down the speed of the car",
        "my": "ကား၏အရှိန်ကိုနှေးကွေးစေရန်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 244,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในการขับขี่ลุยน้ำ ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "In driving through water What should the driver do?",
    "q_my": "၎) ရေထဲမှာ ယာဉ်မောင်းသူ ဘာလုပ်သင့်သလဲ။",
    "options": [
      {
        "th": "เปิดไฟฉุกเฉิน",
        "en": "Turn on emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความรวดเร็ว",
        "en": "drive quickly",
        "my": "မြန်မြန်မောင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วลง แต่เร่งเครื่องยนต์ให้มากกว่าปกติเล็กน้อย",
        "en": "Reduce your speed, but rev the engine slightly more than normal.",
        "my": "အရှိန်လျှော့သော်လည်း အင်ဂျင်ကို ပုံမှန်ထက် အနည်းငယ်ပို၍ လည်ပတ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถด้วยความเร็วปกติ",
        "en": "Drive at normal speed",
        "my": "ပုံမှန်အရှိန်ဖြင့် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 245,
    "category": "safe_driving",
    "image": null,
    "q_th": "ท่านควรปฏิบัติอย่างไรขณะขับรถผ่านบริเวณน้ำท่วม",
    "q_en": "What should you do while driving through a flooded area?",
    "q_my": "ရေမြုပ်နေတဲ့နေရာကို ဖြတ်မောင်းရင်း ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ขับช้าๆ ตามหลังรถคันหน้าในระยะห่างพอสมควร",
        "en": "Drive slowly, following the car in front at a reasonable distance.",
        "my": "ရှေ့ကားကို သင့်လျော်သောအကွာအဝေးတွင် ဖြည်းဖြည်းချင်းမောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟฉุกเฉินตลอดเวลา",
        "en": "Turn on emergency lights at all times.",
        "my": "အရေးပေါ်မီးများကို အချိန်တိုင်းဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พยายามไม่ใช้เบรกโดยเด็ดขาด",
        "en": "Try not to use the brakes at all.",
        "my": "ဘရိတ်ကို လုံးဝမသုံးဖို့ ကြိုးစားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พยายามขับจี้ท้ายรถคันหน้าตลอดเวลา",
        "en": "Try to drive behind the car in front all the time.",
        "my": "ရှေ့က ကားနောက်ကို တစ်ချိန်လုံး မောင်းကြည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 246,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับขี่ในทางลักษณะใดที่ไม่จำเป็นต้องให้สัญญาณไฟเลี้ยว",
    "q_en": "What type of driving does not require a turn signal?",
    "q_my": "ဘယ်အမျိုးအစားက ကွေ့အချက်ပြမှု မလိုအပ်တာလဲ။",
    "options": [
      {
        "th": "ทางบังคับเลี้ยว",
        "en": "Steering path",
        "my": "စတီယာရင်လမ်းကြောင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทางเลี้ยวซ้ายออกจากซอย",
        "en": "Turn left out of the alley.",
        "my": "လမ်းကြားထဲက ဘယ်ဘက်ကွေ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางเลี้ยวซ้ายเข้าซอย",
        "en": "Turn left into the alley.",
        "my": "လမ်းဘေးဝဲယာသို့ ကွေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางกลับรถ",
        "en": "U-turn",
        "my": "ဂငယ်ကွေ့",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 247,
    "category": "safe_driving",
    "image": null,
    "q_th": "การใช้เกียร์เพื่อขึ้นและลงเขาข้อใดถูก",
    "q_en": "Using gear to go up and down the mountain, which is correct?",
    "q_my": "တောင်ပေါ်အတက်အဆင်းမှာ ဂီယာသုံးပြီး ဘယ်ဟာမှန်လဲ။",
    "options": [
      {
        "th": "ขึ้นใช้เกียร์ต่ำและลงใช้เกียร์ว่าง",
        "en": "Go up in low gear and down in neutral.",
        "my": "ဂီယာအနိမ့်ဖြင့်တက်ပြီး ကြားနေဖြင့်ဆင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขึ้นและลงใช้เกียร์ต่ำ",
        "en": "Go up and down using a low gear.",
        "my": "အနိမ့်ဂီယာသုံးပြီး အတက်အဆင်း။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขึ้นและลงใช้เกียร์สูง",
        "en": "Up and down use high gear.",
        "my": "အတက်အဆင်း မြင့်သောဂီယာကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขึ้นใช้เกียร์ต่ำและลงใช้เกียร์สูง",
        "en": "Go up in a low gear and down in a high gear.",
        "my": "ဂီယာနိမ့်ဖြင့်တက်ကာ ဂီယာမြင့်သောနေရာတွင်ဆင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 248,
    "category": "safe_driving",
    "image": null,
    "q_th": "ก่อนขับรถ ผู้ขับขี่ที่ดีควรเตรียมความพร้อมของตนเองอย่างไร",
    "q_en": "Before driving, how should a good driver prepare himself?",
    "q_my": "၎) ကားမမောင်းခင်မှာ ယာဉ်မောင်းကောင်းတစ်ယောက်ဟာ သူ့ကိုယ်သူ ဘယ်လိုပြင်ဆင်သင့်လဲ။",
    "options": [
      {
        "th": "พักผ่อนให้เพียงพอ",
        "en": "Get enough rest.",
        "my": "လုံလောက်စွာ အနားယူပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เที่ยวดึก",
        "en": "Traveling late at night",
        "my": "ညဉ့်နက်မှ ခရီးသွားခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดื่มเหล้า",
        "en": "drink alcohol",
        "my": "အရက်သောက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กินยาบ้า",
        "en": "Take amphetamine",
        "my": "အမ်ဖီတမင်း သောက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 249,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดเป็นปัจจัยสำคัญที่ก่อให้เกิดอุบัติเหตุทางถนนมากที่สุด",
    "q_en": "Which is the most important factor causing road accidents?",
    "q_my": "၎) ယာဉ်မတော်တဆမှုဖြစ်စေတဲ့ အရေးကြီးဆုံးအချက်က ဘာလဲ။",
    "options": [
      {
        "th": "ถนน",
        "en": "road",
        "my": "လမ်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไฟส่องถนนบริเวณทางร่วมทางแยก",
        "en": "Road lights at intersections",
        "my": "လမ်းဆုံများတွင် လမ်းမီးများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่รถ",
        "en": "motorist",
        "my": "ကားသမား",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สัญญาณไฟจราจร",
        "en": "traffic light",
        "my": "မီးပွိုင့်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 250,
    "category": "safe_driving",
    "image": null,
    "q_th": "ก่อนออกรถจากไหล่ทางด้านซ้าย ผู้ขับขี่ต้องปฏิบัติอย่างไรให้ปลอดภัยมากที่สุด",
    "q_en": "Before leaving the vehicle from the left shoulder. What must drivers do to be as safe as possible?",
    "q_my": "ယာဉ်မထွက်ခွာမီ ဘယ်ဘက်ပခုံးမှ ခွာပါ။ ယာဉ်မောင်းများ တတ်နိုင်သမျှ ဘေးကင်းစေရန် ဘာလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "มองกระจกมองข้างด้านขวา เปิดไฟเลี้ยวขวา พร้อมกับหันศีรษะมองข้ามไหล่ขวาไปทางด้านหลังก่อนออกรถ",
        "en": "Look in the right side mirror. Turn on the right turn signal Turn your head and look over your right shoulder to the back before getting out of the car.",
        "my": "ညာဖက်မှန်ကို ကြည့်လိုက်ပါ။ ညာဘက်အကွေ့အချက်ပြချက်ကိုဖွင့်ပါ သင့်ဦးခေါင်းကိုလှည့်ကာ ကားထဲမှမထွက်မီ သင့်ညာဖက်ပခုံးကို နောက်သို့လှည့်ကြည့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "มองกระจกมองข้างด้านขวา",
        "en": "Look in the right side mirror.",
        "my": "ညာဖက်မှန်ကို ကြည့်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มองกระจกมองหลัง",
        "en": "Looking in the rearview mirror",
        "my": "နောက်ကြည့်မှန်ကိုကြည့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟเลี้ยวซ้าย หันศีรษะไปด้านซ้าย",
        "en": "Turn on the left turn signal Turn your head to the left.",
        "my": "ဘယ်ဘက်အလှည့်အချက်ပြကိုဖွင့်ပါ သင့်ခေါင်းကို ဘယ်ဘက်သို့လှည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 251,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ใช่การมองที่ถูกวิธีในขณะขับรถ",
    "q_en": "Which is not the correct way to look while driving?",
    "q_my": "၎) ကားမောင်းနေစဉ် ကြည့်ရှုရန် ဘယ်နည်းက မှန်ကန်ပါသနည်း။",
    "options": [
      {
        "th": "มองไปยังสิ่งที่ไม่เกี่ยวข้องกับการขับรถ",
        "en": "Look at things not related to driving.",
        "my": "ကားမောင်းခြင်းနှင့် မသက်ဆိုင်သော အရာများကို ကြည့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "การมองถึงสภาพของถนนที่แตกต่างกัน",
        "en": "Looking at different road conditions",
        "my": "မတူညီတဲ့ လမ်းအခြေအနေတွေကို ကြည့်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การมองเห็นฝูงสัตว์เลี้ยงกำลังข้ามถนน",
        "en": "Seeing a herd of pets crossing the road",
        "my": "လမ်းဖြတ်ကူးနေတဲ့ အိမ်မွေးတိရိစ္ဆာန် တစ်စုကို တွေ့လိုက်ရတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การมองการเคลื่อนไหวของรถและคน",
        "en": "Looking at the movement of cars and people",
        "my": "ကားတွေနဲ့ လူတွေရဲ့ လှုပ်ရှားမှုကို ကြည့်တယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 252,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดที่ทำให้การหยุดรถต้องใช้ระยะทางมากขึ้นจึงสามารถหยุดรถได้",
    "q_en": "Which of the following causes the car to need more distance to stop the car?",
    "q_my": "အောက်ဖော်ပြပါအရာများထဲမှ မည်သည့်အရာများက ကားကိုရပ်တန့်ရန် အကွာအဝေးပိုလိုအပ်သနည်း။",
    "options": [
      {
        "th": "ความเร็วในการเหยียบเบรก",
        "en": "Brake pedal speed",
        "my": "ဘရိတ်နင်းအရှိန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำหนักบรรทุกเพิ่มมากขึ้น",
        "en": "The load weight has increased.",
        "my": "ဝန်အလေးချိန်တိုးလာသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ความรวดเร็วในการตัดสินใจ",
        "en": "speed of decision",
        "my": "ဆုံးဖြတ်ချက်၏အရှိန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำหนักบรรทุกลดน้อยลง",
        "en": "The payload weight is reduced.",
        "my": "ဝန်အလေးချိန် လျော့သွားသည် ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 253,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ควรใช้เบรกมือ",
    "q_en": "Which one should not use the handbrake?",
    "q_my": "ဘယ်ဟာက လက်ဘရိတ်ကို မသုံးသင့်လဲ။",
    "options": [
      {
        "th": "หยุดรถติดไฟแดง",
        "en": "Stop traffic at a red light",
        "my": "မီးနီတွင် မီးပွိုင့်ရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดบนทางลาดชัน",
        "en": "Stop on the slope",
        "my": "တောင်စောင်းမှာ ရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถลงทางลาดชัน",
        "en": "Drive down the slope",
        "my": "ကုန်းစောင်းကို မောင်းချပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จอดรถ",
        "en": "park the car",
        "my": "ကားရပ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 254,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่มีผลให้ระยะการหยุดรถ (ระยะเบรก) ยาวขึ้น",
    "q_en": "Which of the following does not result in a longer stopping distance (braking distance)?",
    "q_my": "အောက်ဖော်ပြပါများထဲမှ မည်သည့်အရာသည် ရပ်တန့်ခြင်းအကွာအဝေး (ဘရိတ်ဖမ်းသည့်အကွာအဝေး) ကို မဖြစ်ပေါ်စေပါ။",
    "options": [
      {
        "th": "น้ำมันหล่อลื่น",
        "en": "Lubricating oil",
        "my": "ချောဆီ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สภาพพื้นผิวถนน",
        "en": "Road surface condition",
        "my": "လမ်းမျက်နှာပြင်အခြေအနေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความเร็วของรถ",
        "en": "car speed",
        "my": "ကားအရှိန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำหนักบรรทุก",
        "en": "Payload",
        "my": "ဝန်ဆောင်ခ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 255,
    "category": "safe_driving",
    "image": null,
    "q_th": "การจอดลงทางลาดชัน ล้อหน้าควรอยู่ในลักษณะใด",
    "q_en": "Parking down a slope What should the front wheels be like?",
    "q_my": "ကုန်းစောင်းမှာ ကားရပ်ရင် ရှေ့ဘီးတွေက ဘယ်လိုမျိုးဖြစ်သင့်လဲ။",
    "options": [
      {
        "th": "หันเข้าหาขอบทาง",
        "en": "Facing the curb",
        "my": "ကန့်လန့်ကာကို မျက်နှာမူပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หันออกจากขอบทาง",
        "en": "Turn away from the curb",
        "my": "ကန့်လန့်ကာမှ လှည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "อยู่อย่างไรก็ได้",
        "en": "Live however you want.",
        "my": "သင်ဆန္ဒအတိုင်းနေထိုင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรงและขนานกับขอบทางหรือฟุตบาต",
        "en": "Straight and parallel to the curb or sidewalk.",
        "my": "လမ်းဆုံ သို့မဟုတ် လမ်းဘေး တည့်တည့်နှင့် အပြိုင်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 256,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อควรปฏิบัติขณะขับรถฝ่าหมอกควันหรือฝนคือข้อใด",
    "q_en": "What should you do while driving through smog or rain?",
    "q_my": "မီးခိုးမြူတွေ မိုးရွာလို့ ကားမောင်းရင်း ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "เปิดไฟส่องสว่างหน้า",
        "en": "Turn on the front light",
        "my": "ရှေ့မီးကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟหรี่",
        "en": "Turn on the dimmer lights",
        "my": "မီးမှိန်မှိန်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถช้าๆ โดยไม่ต้องเปิดไฟ",
        "en": "Drive slowly without turning on your lights.",
        "my": "မီးမဖွင့်ဘဲ ဖြည်းဖြည်းမောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรแล้วขับให้เร็วเพื่อป้องกันรถคันหลังชนท้าย",
        "en": "Honk your horn and drive fast to prevent the car behind you from being rear-ended.",
        "my": "သင့်နောက်ကားကို နောက်စေ့မဖြစ်အောင် ဟွန်းတီးပြီး အမြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 257,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถยนต์บนทางด่วนที่ถูกต้อง เหมาะสม ควรปฏิบัติอย่างไร",
    "q_en": "How should driving a car on the expressway be correct and appropriate?",
    "q_my": "၎) အမြန်လမ်းပေါ်တွင် ကားမောင်းနှင်ခြင်းသည် မည်သို့မှန်ကန်ပြီး သင့်လျော်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถช้าในช่องทางด้านขวา",
        "en": "Drive slowly in the right lane.",
        "my": "ညာဘက်လမ်းကြားတွင် ဖြည်းညှင်းစွာ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถอย่างรวดเร็วในช่องทางด้านขวา",
        "en": "Drive quickly in the right lane.",
        "my": "ညာဘက်လမ်းကြားတွင် အမြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ขับรถเร็วเกินอัตราที่กฎหมายกำหนด",
        "en": "Do not drive faster than the speed specified by law.",
        "my": "ဥပဒေအရ သတ်မှတ်ထားတဲ့ အရှိန်ထက် ပိုမြန်အောင် မမောင်းပါနဲ့။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่ให้ขับรถแซงทางด้านซ้าย",
        "en": "Do not overtake drivers on the left side.",
        "my": "ဘယ်ဘက်ခြမ်းက ယာဉ်မောင်းတွေကို မကျော်ပါနဲ့။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 258,
    "category": "safe_driving",
    "image": null,
    "q_th": "ผู้ขับขี่ไม่ควรรับประทานยานอนหลับก่อนขับขี่ไม่ว่ากรณีใดๆ ใช่หรือไม่",
    "q_en": "Should drivers not take sleeping pills before driving under any circumstances?",
    "q_my": "ယာဉ်မောင်းများသည် မည်သည့်အခြေအနေမျိုးတွင်မဆို ကားမမောင်းမီ အိပ်ဆေးမသောက်သင့်ပါ။",
    "options": [
      {
        "th": "ขึ้นอยู่กับอาหารการกิน",
        "en": "Depends on the food you eat",
        "my": "သင်စားသောအစားအစာပေါ် မူတည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขึ้นอยู่กับชนิดของยานพาหนะที่ขับขี่",
        "en": "It depends on the type of vehicle being driven.",
        "my": "မောင်းနှင်နေတဲ့ ယာဉ်အမျိုးအစားပေါ် မူတည်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ใช่",
        "en": "No",
        "my": "မရှိ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช่",
        "en": "Yes",
        "my": "ဟုတ်ကဲ့",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 259,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถที่มีน้ำหนักบรรทุกมากข้อใดถูกต้องมากที่สุด",
    "q_en": "When driving a vehicle with a heavy load, which statement is most correct?",
    "q_my": "၎) လေးလံသောယာဉ်ကို မောင်းနှင်သည့်အခါ မည်သည့်ဖော်ပြချက်သည် အမှန်ကန်ဆုံးလဲ။",
    "options": [
      {
        "th": "เครื่องยนต์ทำงานเต็มประสิทธิภาพ",
        "en": "The engine works at full efficiency.",
        "my": "အင်ဂျင်သည် စွမ်းဆောင်ရည်အပြည့်ဖြင့် အလုပ်လုပ်ပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบบกันสะเทือนจะนุ่มนวลมากขึ้น",
        "en": "The suspension will be smoother.",
        "my": "ဆိုင်းထိန်းစနစ်က ပိုချောလာမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควันไอเสียจะมากขึ้น",
        "en": "Exhaust smoke will increase.",
        "my": "အခိုးအငွေ့တွေ တိုးလာမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะใช้ระยะในการเบรกยาวขึ้น",
        "en": "Will use a longer braking distance.",
        "my": "ပိုကြာတဲ့ ဘရိတ်အကွာအဝေးကို သုံးမယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 260,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้เป็นการปฏิบัติที่ไม่ถูกต้อง",
    "q_en": "Which of the following is an incorrect practice?",
    "q_my": "အောက်ပါအချက်များထဲမှ မည်သည့်အရာသည် မှားယွင်းသောအလေ့အကျင့်ဖြစ်သနည်း။",
    "options": [
      {
        "th": "เร่งความเร็วขณะที่รถข้างหลังกำลังแซงรถของท่าน",
        "en": "Accelerate while the car behind is passing your car.",
        "my": "နောက်ကားက သင့်ကားကိုဖြတ်သွားစဉ် အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่แซงหากมีรถวิ่งสวนมาในระยะใกล้",
        "en": "Do not overtake if there is a car passing nearby.",
        "my": "အနီးနားတွင် ကားရှိလျှင် ကျော်မတက်ပါနှင့်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่แซงหากรถคันหน้ากำลังแซงอยู่",
        "en": "Do not overtake if the car in front is overtaking.",
        "my": "ရှေ့ကားက ကျော်တက်ရင် မကျော်ပါနဲ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงได้หากรถข้างหน้าของท่านเปิดไฟเลี้ยวซ้ายและชะลอความเร็วลง",
        "en": "You can overtake if the car in front of you turns on the left turn signal and slows down.",
        "my": "ရှေ့ကားက ဘယ်ဘက်ကွေ့အချက်ပြပြီး အရှိန်လျှော့ရင် ကျော်တက်နိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 261,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในการประเมินสถานการณ์อุบัติเหตุที่เกิดขึ้น ไม่ต้องคำนึงถึงข้อใด",
    "q_en": "In evaluating the accident situation that occurred No need to consider anything.",
    "q_my": "မတော်တဆ ဖြစ်ပွားမှု အခြေအနေကို အကဲဖြတ်ရာတွင် ဘာမှ ထည့်သွင်းစဉ်းစားရန် မလိုအပ်ပါ။",
    "options": [
      {
        "th": "ช่วงเวลาที่เกิดอุบัติเหตุ",
        "en": "The time of the accident",
        "my": "မတော်တဆမှုဖြစ်ချိန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พิจารณาผู้ที่ได้รับบาดเจ็บว่ามีกี่คน",
        "en": "Consider how many people are injured.",
        "my": "လူမည်မျှ ဒဏ်ရာရသည်ကို သုံးသပ်ကြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความรุนแรงของอุบัติเหตุที่เกิดขึ้น",
        "en": "The severity of the accident",
        "my": "မတော်တဆမှု၏ပြင်းထန်မှု",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ค่าใช้จ่ายที่เกิดจากการรักษาพยาบาล",
        "en": "Expenses incurred from medical treatment",
        "my": "ဆေးကုသစရိတ်များ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 262,
    "category": "safe_driving",
    "image": null,
    "q_th": "สาเหตุสำคัญด้านสิ่งแวดล้อมที่ทำให้การขับรถในเวลากลางคืนมีความเสี่ยงต่อการเกิดอุบัติเหตุสูงกว่าในเวลากลางวันคือข้อใด",
    "q_en": "What is the main environmental cause that makes driving at night a higher risk of accidents than during the daytime?",
    "q_my": "နေ့ခင်းဘက်ထက် ညဘက်မောင်းနှင်မှု မတော်တဆဖြစ်နိုင်ခြေ ပိုများစေသည့် အဓိက ပတ်ဝန်းကျင် အကြောင်းရင်းကား အဘယ်နည်း။",
    "options": [
      {
        "th": "คนขับหลับในเนื่องจากเหนื่อยล้า",
        "en": "The driver fell asleep due to fatigue.",
        "my": "ယာဉ်မောင်းက ပင်ပန်းနွမ်းနယ်မှုကြောင့် အိပ်ပျော်သွားတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถในขณะมึนเมา",
        "en": "Driving while intoxicated",
        "my": "အရက်မူးပြီး ကားမောင်းခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สภาพร่างกายของผู้ขับขี่และสภาพรถไม่พร้อม",
        "en": "The physical condition of the driver and the vehicle are not ready.",
        "my": "ယာဉ်မောင်းနှင့် ယာဉ်၏ ပကတိအခြေအနေမှာ အဆင်သင့်မဖြစ်သေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แสงสว่างไม่เพียงพอต่อการมองเห็นในขณะขับรถ",
        "en": "There is not enough light to see while driving.",
        "my": "ကားမောင်းနေစဉ် မြင်နိုင်သောအလင်းရောင် လုံလောက်စွာမရှိပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 263,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากกระจกแตกขณะขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "If your glass breaks while driving, what should you do?",
    "q_my": "၎) ကားမောင်းနေရင်း မှန်ကွဲသွားရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ขับรถตรงไปข้างหน้าเพื่อหาศูนย์บริการ",
        "en": "Drive straight ahead to find a service center.",
        "my": "ဝန်ဆောင်မှုစင်တာကိုရှာရန် ရှေ့တည့်တည့်ကို မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟฉุกเฉินและจอดรถชิดทางด้านซ้าย",
        "en": "Turn on your emergency lights and park on the left side.",
        "my": "အရေးပေါ်မီးများကိုဖွင့်ပြီး ဘယ်ဘက်ခြမ်းတွင် ရပ်နားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถถอยหลังเพื่อหาที่จอดรถ",
        "en": "Drive in reverse to find parking.",
        "my": "ကားပါကင်ရှာရန် လမ်းပြောင်းပြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชิดทางด้านขวาเพื่อจอดรถ",
        "en": "Keep to the right to park.",
        "my": "ကားရပ်ရန် ညာဘက်တွင် ထားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 264,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านต้องขับรถผ่านถนนที่มีระดับน้ำซึ่งมีความลึก ควรปฏิบัติอย่างไร เพื่อให้เบรกทำงานได้เป็นปกติ",
    "q_en": "When you have to drive through a road with a deep water level. What should I do? so that the brakes can work normally",
    "q_my": "ရေနက်တဲ့လမ်းကိုဖြတ်ပြီး မောင်းရတဲ့အခါ။ ကျွန်တော်ဘာလုပ်သင့်သလဲ? ဒါမှ ဘရိတ်တွေ ပုံမှန်အတိုင်း အလုပ်လုပ်နိုင်မှာပါ။",
    "options": [
      {
        "th": "หลีกเลี่ยงการใช้เบรกในช่วงระยะทางสั้นๆ",
        "en": "Avoid using the brakes for short distances.",
        "my": "တိုတောင်းသောအကွာအဝေးအတွက် ဘရိတ်အသုံးပြုခြင်းကို ရှောင်ကြဉ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถอย่างช้าๆ ในขณะที่ค่อยๆ เหยียบเบรกเรื่อยๆ",
        "en": "drive slowly while gradually Keep stepping on the brakes.",
        "my": "ဖြည်းညှင်းစွာ မောင်းနှင်နေစဉ် ဘရိတ်ကို ဖြည်းဖြည်းချင်း နင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เร่งความเร็วและรักษาความเร็วให้สูงในช่วงเวลาสั้นๆ",
        "en": "Accelerate and maintain a high speed for a short period of time.",
        "my": "အချိန်တိုအတွင်း အရှိန်မြှင့်ပြီး အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถเป็นเวลาอย่างน้อย 1 ชั่วโมงเพื่อให้ระบบเบรกแห้ง",
        "en": "Stop the vehicle for at least 1 hour to allow the brake system to dry.",
        "my": "ဘရိတ်စနစ်ခြောက်သွေ့စေရန်အတွက် ယာဉ်ကို အနည်းဆုံး 1 နာရီ ရပ်တန့်ထားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 265,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากทราบว่าผู้ขับขี่รถคันข้างหน้าเป็นผู้สูงอายุ ท่านควรปฏิบัติอย่างไร",
    "q_en": "If you know that the driver of the car in front is an elderly person. What should you do?",
    "q_my": "ရှေ့က ကားကို မောင်းသူက အသက်ကြီးကြီး လို့ သိရင်။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "ขับตามหลังในระยะกระชั้นชิด",
        "en": "Driving closely behind",
        "my": "နောက်ကနေ နီးနီးကပ်ကပ် မောင်းတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณโดยกะพริบไฟและขับแซงขึ้นหน้าเลย",
        "en": "Give the signal by flashing your lights and pass in front of you.",
        "my": "မင်းရဲ့မီးတွေကို မှိတ်တုတ်မှိတ်တုတ်လုပ်ပြီး မင်းရှေ့ကိုဖြတ်ပြီး အချက်ပြပေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คาดการณ์ไว้ว่าผู้สูงอายุที่ขับรถอยู่ข้างหน้าท่านอาจขับรถแย่",
        "en": "It is anticipated that the elderly person driving in front of you may drive poorly.",
        "my": "သင့်ရှေ့တွင် မောင်းနှင်နေသော သက်ကြီးရွယ်အိုများသည် ဆိုးရွားစွာ မောင်းနှင်နိုင်မည်ဟု ခန့်မှန်းထားသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตระหนักไว้เสมอว่าผู้ขับรถสูงอายุอาจมีปฏิกิริยาตอบสนองไม่ว่องไว",
        "en": "Keep in mind that elderly drivers may not have quick reflexes.",
        "my": "သက်ကြီးရွယ်အိုယာဉ်မောင်းများသည် အမြန်တုံ့ပြန်မှုမရရှိနိုင်ကြောင်း သတိပြုပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 266,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000294.webp",
    "q_th": "เมื่อท่านขับรถถึงทางแยก ต้องปฏิบัติอย่างไร",
    "q_en": "When you drive to an intersection What must be done?",
    "q_my": "၎) လမ်းဆုံတစ်ခုသို့ မောင်းနှင်သောအခါ ဘာလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "หยุดเฉพาะกรณีที่เลี้ยว",
        "en": "Stop only when turning.",
        "my": "အလှည့်ရောက်မှသာ ရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดเฉพาะเมื่อมีรถบนถนนหลัก",
        "en": "Stop only when there is a car on the main road.",
        "my": "လမ်းမကြီးပေါ်တွင် ကားရှိမှသာ ရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดหน้าเส้นในจุดที่สามารถมองเห็นได้ชัดเจน",
        "en": "Stop in front of the line in a place where you can clearly see it.",
        "my": "ရှင်းရှင်းလင်းလင်းမြင်နိုင်သော နေရာတွင် မျဉ်းရှေ့တွင်ရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดหลังเส้น และค่อยๆ เคลื่อนไปข้างหน้าเพื่อให้มองเห็นได้ชัดขึ้น",
        "en": "Stop behind the line and slowly move forward for better visibility.",
        "my": "လိုင်းနောက်ကိုရပ်ပြီး ပိုမိုကောင်းမွန်သောမြင်နိုင်စွမ်းအတွက် ရှေ့သို့ ဖြည်းဖြည်းချင်းရွှေ့ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 267,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในขณะที่ท่านขับรถและสังเกตเห็นว่าด้านหน้ามีผู้กำลังจะข้ามถนน ท่านจะทำอย่างไร",
    "q_en": "While you were driving and noticed that there was someone in front of you who was about to cross the road. What will you do?",
    "q_my": "သင်ကားမောင်းနေစဉ် လမ်းဖြတ်ကူးတော့မည့် သင့်ရှေ့တွင် တစ်စုံတစ်ယောက်ရှိနေသည်ကို သတိပြုမိလိုက်သည်။ သင်ဘာလုပ်မလဲ?",
    "options": [
      {
        "th": "บีบแตรเสียงดัง และขับรถผ่านไปอย่างรวดเร็ว",
        "en": "Honk loudly and drove past quickly.",
        "my": "ကျယ်လောင်စွာ ဟွန်းတီးကာ အမြန်ဖြတ်မောင်းသွားခဲ့သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เบรกหยุดรถอย่างรวดเร็ว เพื่อให้คนข้ามถนน",
        "en": "The brakes stop the car quickly. to let people cross the road",
        "my": "ဘရိတ်က ကားကို အမြန်ရပ်လိုက်သည်။ လူတွေကို လမ်းဖြတ်ကူးဖို့၊",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วและหยุดรถด้วยความปลอดภัย เพื่อให้คนข้ามถนน",
        "en": "Reduce speed and stop your car safely. to let people cross the road",
        "my": "အရှိန်လျှော့ပြီး သင့်ကားကို ဘေးကင်းစွာ ရပ်ပါ။ လူတွေကို လမ်းဖြတ်ကူးဖို့၊",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "พยายามขับรถผ่านไปอย่างรวดเร็ว",
        "en": "Try to drive past quickly.",
        "my": "အမြန်ဖြတ်ကျော်ဖို့ ကြိုးစားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 268,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่ออยู่ในอุโมงค์ หากรถเกิดเพลิงไหม้และไม่สามารถขับรถต่อไปได้ ควรปฏิบัติอย่างไร",
    "q_en": "When in the tunnel If the car catches fire and cannot be driven further What should I do?",
    "q_my": "ဥမင်လိုဏ်ခေါင်းထဲမှာ ကားမီးလောင်ပြီး နောက်ထပ်မမောင်းနိုင်ရင် ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "อยู่ในตัวรถและปิดกระจกทั้งหมด",
        "en": "Stay inside the vehicle and close all windows.",
        "my": "ကားအတွင်း၌နေ၍ ပြတင်းပေါက်များအားလုံးကို ပိတ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปล่อยให้เครื่องยนต์ทำงาน",
        "en": "Let the engine run.",
        "my": "အင်ဂျင်လည်ပတ်ပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปิดไฟทั้งหมด",
        "en": "Turn off all lights",
        "my": "မီးအားလုံးကိုပိတ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉิน",
        "en": "Turn on emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 269,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อพบผู้สูงวัยกำลังจะข้ามถนนควรปฏิบัติอย่างไร",
    "q_en": "When encountering an elderly person about to cross the road, what should you do?",
    "q_my": "၎) လမ်းဖြတ်ကူးတော့မယ့် သက်ကြီးရွယ်အိုတစ်ယောက်နဲ့ တွေ့တဲ့အခါ ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "หยุดรถและโบกมือให้ข้ามถนน",
        "en": "Stop the car and wave to cross the road.",
        "my": "ကားကိုရပ်ပြီး လမ်းဖြတ်ကူးဖို့ ဝှေ့ယမ်းလိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คาดหวังว่าผู้สูงอายุจะรอ ให้รถผ่านไปก่อนจึงข้าม",
        "en": "It is expected that the elderly will wait. Let the car pass first before crossing.",
        "my": "သက်ကြီးရွယ်အိုများ စောင့်ဆိုင်းနေမည်ဟု မျှော်လင့်ရသည်။ မဖြတ်ခင် ကားကို အရင်ဖြတ်ပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วเพื่อให้ผ่านไปโดยเร็วที่สุด",
        "en": "Accelerate to get through as quickly as possible.",
        "my": "မြန်နိုင်သမျှ မြန်မြန် ကျော်ဖြတ်နိုင်ပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระมัดระวังเพราะผู้สูงวัยอาจจะประมาณความเร็วของรถผิดพลาด",
        "en": "Be careful because elderly people may misjudge the speed of the vehicle.",
        "my": "သက်ကြီးရွယ်အိုများသည် ယာဉ်၏အရှိန်ကို လွဲမှားစေနိုင်သောကြောင့် သတိထားပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 270,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านรับประทานยาแก้ไอที่ได้จากเพื่อน ก่อนขับรถควรปฏิบัติอย่างไร",
    "q_en": "When you take cough medicine given by a friend. What should you do before driving?",
    "q_my": "၎) ချောင်းဆိုးပျောက်ဆေးကို သူငယ်ချင်းတစ်ယောက်ဆီက သောက်တယ်။ ကားမမောင်းခင် ဘာတွေလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ดื่มกาแฟสูตรเข้มข้น 1 ชั่วโมงก่อนการขับรถ",
        "en": "Drink strong coffee 1 hour before driving.",
        "my": "ကားမမောင်းခင် 1 နာရီ ကော်ဖီပြင်းပြင်း သောက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับเป็นระยะสั้นๆ เพื่อสังเกตดูว่ายาที่ใช้มีผลต่อการขับรถหรือไม่",
        "en": "Drive for a short distance. To observe whether the medicine used affects driving or not.",
        "my": "မလှမ်းမကမ်းကို မောင်းပါ။ အသုံးပြုသောဆေးသည် ကားမောင်းနှင်ခြင်းနှင့် သက်ဆိုင်ခြင်း ရှိ၊ မရှိ စောင့်ကြည့်ရန်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถามเพื่อนว่ายาที่รับประทานมีผลต่อการขับรถหรือไม่",
        "en": "Ask a friend if the medications you take affect your driving.",
        "my": "သင်သောက်သောဆေးများသည် သင့်ကားမောင်းခြင်းကို အကျိုးသက်ရောက်မှုရှိမရှိ သူငယ်ချင်းတစ်ဦးအား မေးမြန်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบฉลากว่ายาที่ใช้มีผลต่อการขับรถหรือไม่",
        "en": "Check the label to see if the medicine you use affects driving.",
        "my": "သင်အသုံးပြုသောဆေးသည် ကားမောင်းနှင်ခြင်းကို အကျိုးသက်ရောက်မှုရှိမရှိ စစ်ဆေးရန် အညွှန်းကိုစစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 271,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000301.webp",
    "q_th": "รถคันสีแดงเปิดสัญญาณไฟเลี้ยวขวาขอทางเพราะด้านซ้ายมีรถเสียจอดกีดขวาง รถคันสีเหลืองต้องปฏิบัติอย่างไร",
    "q_en": "A red car turned on its right turn signal to ask for directions because on the left side there was a broken down car blocking the road. What must you do with a yellow car?",
    "q_my": "လမ်းဘေးဝဲယာမှာ ကျိုးကျနေတဲ့ ကားတစ်စီးက လမ်းပိတ်ဆို့နေတာကြောင့် ညာဘက်အကွေ့မှာ ကားအနီက ညာဘက်အကွေ့အချက်ပြ ညွှန်ပြခဲ့ပါတယ်။ အဝါရောင်ကားနဲ့ ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ให้สัญญาณแตรเสียงยาว",
        "en": "Give a long horn signal.",
        "my": "ဟွန်းရှည်အချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับไปจอดต่อท้ายรถที่เสียพร้อมกับเปิดสัญญาณไฟฉุกเฉิน",
        "en": "Drove to the back of the broken down car with the emergency lights turned on.",
        "my": "အရေးပေါ်အချက်ပြမီးဖွင့်ထားသဖြင့် ကျိုးကျနေသော ကားနောက်ဘက်သို့ မောင်းသွားခဲ့သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับไปจอดต่อท้ายให้ชิดกับรถคันหน้ามากที่สุด",
        "en": "Drive and park as close to the car in front as possible.",
        "my": "ရှေ့ကားကို တတ်နိုင်သမျှ နီးအောင် မောင်းပြီး ရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถให้รถที่เปิดสัญญาณไฟเลี้ยวขวาไปก่อน",
        "en": "Stop the car and let the car with the right turn signal on first.",
        "my": "ကားကိုရပ်ပြီး ညာဖက်အချက်ပြမီးကို ဦးစွာဖွင့်ထားလိုက်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 272,
    "category": "safe_driving",
    "image": null,
    "q_th": "กรณีที่ท่านเห็นรถคันอื่นให้สัญญาณเพื่อเลี้ยวรถหรือเปลี่ยนช่องทางการเดินรถ ท่านต้องปฏิบัติอย่างไร",
    "q_en": "In the event that you see another vehicle giving a signal to turn or change the driving lane. What must you do?",
    "q_my": "အခြားယာဉ်သည် ကွေ့ရန် သို့မဟုတ် မောင်းနှင်ရန် လမ်းပြောင်းရန် အချက်ပြပေးနေသည်ကို သင်တွေ့သောအခါ။ သင်ဘာလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "จอดรถ",
        "en": "park the car",
        "my": "ကားရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถ",
        "en": "Stop the car",
        "my": "ကားရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วเพื่อจะไปก่อน",
        "en": "Accelerate to go first.",
        "my": "အရှိန်မြှင့်ပြီး အရင်သွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็วและให้ทาง",
        "en": "Slow down and give way.",
        "my": "အရှိန်လျှော့ပြီး လမ်းပေးပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 273,
    "category": "safe_driving",
    "image": null,
    "q_th": "เพราะเหตุใดคนขับรถจักรยานยนต์ควรมองข้ามหลังตนเองก่อนการเลี้ยวขวา",
    "q_en": "Why should motorcycle drivers look behind themselves before making a right turn?",
    "q_my": "မော်တော်ဆိုင်ကယ်မောင်းသူများသည် ညာဘက်အကွေ့တွင် အဘယ်ကြောင့် မိမိတို့ကိုယ်ကို အနောက်မှကြည့်သင့်သနည်း။",
    "options": [
      {
        "th": "เพื่อตรวจสอบจุดบอดด้านหลัง",
        "en": "To check rear blind spots",
        "my": "နောက်ဘက် ကန်းကွက်များကို စစ်ဆေးရန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพื่อฟังเสียงรถที่วิ่งตามมา",
        "en": "To listen to the sound of cars running behind",
        "my": "နောက်က ပြေးလာတဲ့ ကားသံကို နားထောင်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อสามารถทรงตัวได้เมื่อทำการเลี้ยว",
        "en": "To be able to maintain balance when making turns.",
        "my": "အလှည့်ကျတဲ့အခါ ဟန်ချက်ညီအောင် ထိန်းသိမ်းနိုင်ရမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์ไม่มีกระจก",
        "en": "Motorcycles do not have mirrors.",
        "my": "ဆိုင်ကယ်တွေမှာ မှန်တွေ မရှိဘူး။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 274,
    "category": "safe_driving",
    "image": null,
    "q_th": "ท่านควรปฏิบัติอย่างไรต่อคนขับรถที่อ่อนประสบการณ์",
    "q_en": "How should you treat inexperienced drivers?",
    "q_my": "အတွေ့အကြုံမရှိသော ယာဉ်မောင်းများကို မည်သို့ ဆက်ဆံသင့်သနည်း။",
    "options": [
      {
        "th": "อดทนและเตรียมพร้อม เนื่องจากคนขับอาจตอบสนองได้ช้า",
        "en": "Be patient and prepared. This is because the driver may be slow to respond.",
        "my": "စိတ်ရှည်ရှည်ထားပြီး ပြင်ဆင်ပါ။ အဘယ်ကြောင့်ဆိုသော် ယာဉ်မောင်းသည် တုံ့ပြန်ရန် နှေးကွေးနေခြင်းကြောင့်ဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "กะพริบไฟเพื่อบอกคนขับรถว่าปลอดภัยที่จะไปได้",
        "en": "Flashes lights to tell the driver it's safe to go.",
        "my": "မောင်းသွားရင် အန္တရာယ်ကင်းတယ်လို့ ပြောဖို့ မီးရောင်တွေ လင်းနေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงให้เร็วที่สุดเท่าที่ทำได้",
        "en": "Overtake as fast as you can.",
        "my": "တတ်နိုင်သမျှ မြန်မြန်ကျော်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรเพื่อเตือนว่ามีรถอยู่",
        "en": "Honk the horn to warn of the presence of a car.",
        "my": "ကားတစ်စီးရှိနေတာကိုသတိပေးဖို့ ဟွန်းတီးတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 275,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดเป็นพฤติกรรมที่ถูกต้องและแสดงมารยาทที่ดีของผู้ขับรถ",
    "q_en": "Which is correct behavior and shows good manners for drivers?",
    "q_my": "ဘယ်ဟာက မှန်ကန်တဲ့ အပြုအမူဖြစ်ပြီး ယာဉ်မောင်းတွေအတွက် ကောင်းမွန်တဲ့ အမူအကျင့်တွေ ပြသမလဲ ။",
    "options": [
      {
        "th": "ต้องการไปทางตรงแต่ขับรถในช่องจราจรเลี้ยวซ้ายหรือเลี้ยวขวาหรือกลับรถ",
        "en": "Want to go straight but drive in the traffic lane, turn left or right, or make a U-turn?",
        "my": "ဖြောင့်ဖြောင့်သွားချင်သော်လည်း ယာဉ်ကြောလမ်းကြားတွင် မောင်း၊ ဘယ် သို့မဟုတ် ညာကွေ့ချင် သို့မဟုတ် ဂငယ်ကွေ့ချင်ပါသလား။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ใช่ผู้พิการแต่จอดรถในพื้นที่จอดรถของผู้พิการ",
        "en": "Not disabled but parked in a disabled parking space",
        "my": "မသန်စွမ်းသော်လည်း မသန်စွမ်းကားပါကင်တွင် ရပ်ထားသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถขวางรถคันอื่นโดยเข้าเกียร์และเบรกมือ",
        "en": "Park your car in front of another car with the car in gear and the handbrake on.",
        "my": "သင့်ကားကို အခြားကားရှေ့တွင် ဂီယာပါရှိထားပြီး လက်ဘရိတ်ဖြင့် ကားကိုရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กลับรถที่จุดกลับรถทุกครั้งแม้จะอยู่ไกล",
        "en": "Always make a U-turn at the U-turn point, even if it is far away.",
        "my": "ဝေးနေရင်တောင် ဂငယ်ကွေ့မှာ အမြဲတမ်း ဂငယ်ကွေ့ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 276,
    "category": "safe_driving",
    "image": null,
    "q_th": "ยาแก้เวียนศีรษะเมารถ มีผลข้างเคียงที่รบกวนต่อการขับขี่หรือไม่",
    "q_en": "Medicine to cure dizziness and motion sickness Are there any side effects that interfere with driving?",
    "q_my": "မူးဝေခြင်း နှင့် လှုပ်ရှားမှု ဖျားနာခြင်းကို ကုသရန် ဆေးဝါးများသည် ကားမောင်းခြင်းကို အနှောင့်အယှက်ဖြစ်စေသော ဘေးထွက်ဆိုးကျိုးများ ရှိပါသလား။",
    "options": [
      {
        "th": "มี แต่ไม่เกี่ยวข้องกับการขับขี่",
        "en": "Yes, but not related to driving.",
        "my": "ဟုတ်တယ်၊ ဒါပေမယ့် ကားမောင်းတာနဲ့ မဆိုင်ဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขึ้นกับความรุนแรงของโรค",
        "en": "Depending on the severity of the disease",
        "my": "ရောဂါ၏ပြင်းထန်မှုပေါ် မူတည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มี เช่น มึนงง เวียนศีรษะ มองเห็นไม่ชัด",
        "en": "There are things like drowsiness, dizziness, and blurred vision.",
        "my": "အိပ်ငိုက်ခြင်း၊ မူးဝေခြင်းနှင့် အမြင်မှုန်ဝါးခြင်းစသည့်အရာများ ရှိပါသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่มี",
        "en": "None",
        "my": "တစ်ခုမှ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 277,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับตามรถบรรทุกเข้าสู่ทางแยก คนขับรถบรรทุกให้สัญญาณเลี้ยวซ้าย ควรปฏิบัติอย่างไร",
    "q_en": "When you follow the truck into an intersection Truck driver signals to turn left What should I do?",
    "q_my": "လမ်းဆုံတစ်ခုသို့ ကုန်တင်ကားနောက်လိုက်သည့်အခါ ဘယ်ဘက်ကွေ့ရန် အချက်ပြပြီး ထရပ်ကားမောင်းသူက ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "แซงรถบรรทุก หากมีพื้นที่มากพอ",
        "en": "Overtake trucks if you have enough space.",
        "my": "နေရာအလုံအလောက်ရှိလျှင် ထရပ်ကားများကို ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามแซงรถบรรทุกขณะอยู่ที่ทางแยก",
        "en": "Do not overtake trucks while at intersections.",
        "my": "လမ်းဆုံများတွင် ကုန်တင်ယာဉ်များကို ကျော်တက်ခြင်း မပြုပါနှင့်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงรถบรรทุกเฉพาะในกรณีที่ไม่มีรถสวน",
        "en": "Overtake trucks only if there are no oncoming vehicles.",
        "my": "လာမည့်ယာဉ်များမရှိမှသာ ထရပ်ကားများကို ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามแซงรถบรรทุกจนกว่ารถบรรทุกจะเริ่มเลี้ยว",
        "en": "Do not overtake a truck until the truck has begun to turn.",
        "my": "ကုန်တင်ကားကို ကွေ့ပြီးသည်အထိ ထရပ်ကားကို မကျော်ပါနှင့်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 278,
    "category": "safe_driving",
    "image": null,
    "q_th": "แอลกอฮอล์มีผลอย่างไรกับผู้ขับรถ",
    "q_en": "What effect does alcohol have on drivers?",
    "q_my": "အရက်သည် ယာဉ်မောင်းများအပေါ် မည်သို့အကျိုးသက်ရောက်မှုရှိသနည်း။",
    "options": [
      {
        "th": "ปฏิกิริยาการตอบสนองต่อเหตุการณ์ช้าลง",
        "en": "Slow reactions to events",
        "my": "ဖြစ်ရပ်များအပေါ် တုံ့ပြန်မှု နှေးကွေးခြင်း။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทำให้สามารถรับรู้สถานการณ์เพิ่มขึ้น",
        "en": "Makes it possible to be more aware of the situation",
        "my": "အခြေအနေကို ပိုသတိထားနိုင်စေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยเร่งปฏิกิริยาการตอบสนองต่อเหตุการณ์",
        "en": "Helps speed up reactions to events.",
        "my": "အဖြစ်အပျက်များကို တုံ့ပြန်မှုများကို မြန်ဆန်စေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยพัฒนาปฏิสัมพันธ์กับสภาวะรอบตัว",
        "en": "Helps develop interactions with surrounding conditions.",
        "my": "ပတ်ဝန်းကျင်အခြေအနေများနှင့် အပြန်အလှန်ဆက်သွယ်မှုကို တိုးတက်စေရန် ကူညီပေးသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 279,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านจะทำการแซงรถจักรยาน ควรเว้นระยะห่างให้มาก เพราะเหตุใด",
    "q_en": "When you will overtake a bicycle. Why should you keep a large distance?",
    "q_my": "၎) စက်ဘီးကို ကျော်တက်တဲ့အခါ ဘာကြောင့် အကွာအဝေးကြီးကို ထားသင့်တာလဲ။",
    "options": [
      {
        "th": "ผู้ใช้รถจักรยาน อาจลงจากรถ",
        "en": "Bicycle users may get out of their vehicles.",
        "my": "စက်ဘီးအသုံးပြုသူများသည် ၎င်းတို့၏ယာဉ်များမှ ထွက်သွားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ใช้รถจักรยาน อาจหักเลี้ยวกะทันหัน",
        "en": "Bicycle users May swerve suddenly",
        "my": "စက်ဘီးအသုံးပြုသူများသည် ရုတ်တရက် ကွေ့ပတ်သွားနိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ผู้ใช้รถจักรยาน อาจจำเป็นต้องเลี้ยวซ้าย",
        "en": "Bicycle users It may be necessary to turn left.",
        "my": "စက်ဘီးအသုံးပြုသူများသည် ဘယ်ဘက်သို့ လှည့်ရန် လိုအပ်ပေမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ใช้รถจักรยาน อาจเร่งความเร็ว",
        "en": "Bicycle users may speed up",
        "my": "စက်ဘီးအသုံးပြုသူများသည် အရှိန်မြှင့်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 280,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถผ่านทางร่วมทางแยกต้องปฏิบัติอย่างไร",
    "q_en": "What must you do when driving through an intersection?",
    "q_my": "၎) လမ်းဆုံကိုဖြတ်မောင်းရင် ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "หากไม่มีสัญญาณไฟจราจรให้รถคันที่ใหญ่กว่าผ่านทางร่วมทางแยกไปก่อน",
        "en": "If there is no traffic light, allow larger vehicles to pass through the intersection first.",
        "my": "မီးပွိုင့်မရှိပါက လမ်းဆုံလမ်းခွမှ ယာဉ်ကြီးများကို ဦးစွာဖြတ်သန်းခွင့်ပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถที่มีอยู่ในทางร่วมทางแยกขับผ่านไปก่อน",
        "en": "Let existing vehicles at the intersection drive past first.",
        "my": "လမ်းဆုံမှာ ရှိပြီးသားယာဉ်တွေကို အရင်ဖြတ်ကျော်ပါစေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เมื่อพบป้ายเตือนสัญญาณไฟบริเวณทางร่วมทางแยกให้ขับรถไปตามปกติ",
        "en": "When you see a warning sign at an intersection, drive as normal.",
        "my": "လမ်းဆုံမှာသတိပေးဆိုင်းဘုတ်တွေ့ရင် ပုံမှန်အတိုင်း မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อพบป้ายเตือนทางร่วมทางแยกให้ขับรถด้วยความเร็วปกติ",
        "en": "When you see a warning sign at an intersection, drive at normal speed.",
        "my": "လမ်းဆုံတွင်သတိပေးသည့် ဆိုင်းဘုတ်တွေ့ပါက ပုံမှန်အရှိန်ဖြင့် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 281,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ใช่หลักการเคลื่อนย้ายผู้ป่วยที่ควรปฏิบัติ",
    "q_en": "Which is not a principle for patient transport that should be followed?",
    "q_my": "ဘယ်ဟာက လူနာသယ်ယူပို့ ဆောင်ရေးမှာ လိုက်နာသင့် တဲ့ နိယာမလဲ။",
    "options": [
      {
        "th": "ต้องให้การปฐมพยาบาลก่อนการเคลื่อนย้าย",
        "en": "First aid must be given before moving.",
        "my": "မရွေ့မီ ရှေးဦးသူနာပြုစုရပါမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ต้องเคลื่อนย้ายอย่างถูกต้อง",
        "en": "must be moved correctly",
        "my": "မှန်ကန်စွာ ရွှေ့ပြောင်းရပါမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ต้องเคลื่อนย้ายทันทีไม่ต้องดูอาการ",
        "en": "Must be moved immediately, no symptoms required.",
        "my": "ရောဂါလက္ခဏာမပြဘဲ ချက်ချင်းရွှေ့ရပါမယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ต้องทราบว่าผู้บาดเจ็บได้รับบาดเจ็บบริเวณไหน",
        "en": "You must know where the injured person was injured.",
        "my": "ဒဏ်ရာရသူသည် ဒဏ်ရာရသည့်နေရာကို သိရမည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 282,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อต้องการแซงรถบรรทุกที่วิ่งช้าบนถนนที่มีการจราจรหนาแน่นควรปฏิบัติอย่างไร",
    "q_en": "What should you do when you want to overtake a slow truck on a road with heavy traffic?",
    "q_my": "ယာဉ်ကြောထူထပ်တဲ့လမ်းမှာ အနှေးထရပ်ကားကို ကျော်တက်ချင်ရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "เว้นระยะให้ห่างจากรถบรรทุกเพื่อที่จะสามารถเห็นด้านหน้าว่าสามารถแซงได้หรือไม่",
        "en": "Keep your distance from the truck so that you can see in front of you whether you can overtake it or not.",
        "my": "ကျော်တက်နိုင်သည်ဖြစ်စေ မကျော်နိုင်သည်ကို ရှေ့မှမြင်နိုင်စေရန် ထရပ်ကားနှင့် အကွာအဝေးကို ထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตามหลังอย่างกระชั้นชิดและคอยเคลื่อนที่ออกเพื่อมองถนนข้างหน้า",
        "en": "Follow closely behind and keep moving to look at the road ahead.",
        "my": "နောက်သို့ အနီးကပ်လိုက်ကာ ရှေ့သွားမည့်လမ်းကို လှမ်းကြည့်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กะพริบไฟเพื่อให้รถที่สวนมาให้ทาง",
        "en": "Flash your lights to let oncoming vehicles give way.",
        "my": "လာမည့်ကားများကို လမ်းလွှဲနိုင်စေရန် သင့်မီးများကို မီးညှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รอด้านหลังรถบรรทุก จนกว่าคนขับจะโบกมือให้สัญญาณว่าผ่านได้",
        "en": "Waiting behind the truck until the driver waves to signal that they can pass.",
        "my": "ယာဉ်မောင်းက ဖြတ်သွားနိုင်ကြောင်း အချက်ပြသည့်အထိ ထရပ်ကားနောက်တွင် စောင့်နေသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 283,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในการขับรถช่วงเวลากลางคืน ควรที่จะมีการใช้ไฟหน้ารถอย่างไร",
    "q_en": "In driving at night How should car headlights be used?",
    "q_my": "၎) ညဘက်မောင်းနှင်ရာတွင် ကားရှေ့မီးကို မည်သို့အသုံးပြုသင့်သနည်း။",
    "options": [
      {
        "th": "เปิดไฟสูง ตลอดเวลาที่ขับขี่",
        "en": "Turn on the high beams all the time while driving.",
        "my": "ကားမောင်းနေစဉ် အမြင့်တန်းများကို အမြဲဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟต่ำเมื่อมีรถอยู่ด้านหน้าและรถสวนทางมา",
        "en": "Turn on low beam when there is a car in front of you and traffic coming in the opposite direction.",
        "my": "သင့်ရှေ့တွင် ကားရှိ၍ ဆန့်ကျင်ဘက်လမ်းကြောင်းသို့ လာသောအခါတွင် low beam ကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดทั้งไฟหน้า และไฟตัดหมอก",
        "en": "Turn on both the headlights and fog lights.",
        "my": "ရှေ့မီးနှင့် မြူမီးနှစ်လုံးကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟหน้า ไฟตัดหมอก และไฟกะพริบฉุกเฉิน",
        "en": "Turn on your headlights, fog lights, and emergency flashers.",
        "my": "သင့်ရှေ့မီးများ၊ မြူမီးများနှင့် အရေးပေါ် မီးရောင်များကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 284,
    "category": "safe_driving",
    "image": null,
    "q_th": "ยาทุกชนิดที่มีจำหน่ายในร้านขายยา สามารถรับประทานได้โดยไม่มีผลต่อการขับขี่ใช่หรือไม่",
    "q_en": "All types of medicines available in pharmacies. Can it be eaten without affecting driving?",
    "q_my": "၎) ဆေးဆိုင်များတွင် ရနိုင်သော ဆေးဝါးအမျိုးအစားအားလုံး။ ကားမောင်းတာကို မထိခိုက်စေဘဲ စားလို့ရလား။",
    "options": [
      {
        "th": "ใช่",
        "en": "Yes",
        "my": "ဟုတ်ကဲ့",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ใช่",
        "en": "No",
        "my": "မရှိ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขึ้นอยู่กับชนิดของยานพาหนะที่ขับขี่",
        "en": "It depends on the type of vehicle being driven.",
        "my": "မောင်းနှင်နေတဲ့ ယာဉ်အမျိုးအစားပေါ် မူတည်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขึ้นอยู่กับอาหารการกิน",
        "en": "Depends on the food you eat",
        "my": "သင်စားသောအစားအစာပေါ် မူတည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 285,
    "category": "safe_driving",
    "image": null,
    "q_th": "วิธีปฏิบัติเป็นสิ่งแรกเมื่อรถยางแตกคือข้อใด",
    "q_en": "What is the first thing to do when your car's tire bursts?",
    "q_my": "၎) သင့်ကားတာယာကွဲသောအခါ ပထမဆုံးလုပ်ရမည့်အရာကဘာလဲ။",
    "options": [
      {
        "th": "จับพวงมาลัยให้มั่นประคองรถให้ปลอดภัย",
        "en": "Hold the steering wheel firmly to keep the car safe.",
        "my": "ကားအန္တရာယ်ကင်းစေရန် စတီယာရင်ကို မြဲမြံစွာကိုင်ထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "มองกระจกหลัง",
        "en": "Look in the rear mirror",
        "my": "နောက်မှန်ကိုကြည့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหยียบคันเร่ง",
        "en": "Step on the gas pedal.",
        "my": "ဓာတ်ငွေ့နင်းစက်ကို နင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรล็อกประตูรถทุกบาน",
        "en": "All car doors should be locked.",
        "my": "ကားတံခါးအားလုံးကို သော့ခတ်ထားသင့်ပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 286,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อผู้โดยสารเป็นเด็ก 5 ขวบที่มีความสูงน้อยกว่า 1.35 เมตร หากไม่มีที่นั่งสำหรับเด็กให้เด็กนั่งอย่างไร",
    "q_en": "When the passenger is a 5-year-old child whose height is less than 1.35 meters, if there is no child seat, how can the child sit?",
    "q_my": "ခရီးသည်သည် အရပ် 1.35 မီတာအောက်ရှိသော အသက် 5 နှစ်အရွယ် ကလေးဖြစ်သောအခါ ကလေးထိုင်ခုံမရှိပါက ကလေးသည် မည်သို့ထိုင်နိုင်မည်နည်း။",
    "options": [
      {
        "th": "ให้เด็กนั่งที่นั่งปกติและคาดเข็มขัดนิรภัยร่วมกับผู้ใหญ่",
        "en": "Place your child in a normal seat and wear a seat belt with an adult.",
        "my": "သင့်ကလေးကို ပုံမှန်ထိုင်ခုံတွင် ထားကာ လူကြီးတစ်ဦးနှင့် ထိုင်ခုံခါးပတ်ကို ဝတ်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เด็กนั่งที่นั่งปกติและคาดเข็มขัดนิรภัยสำหรับผู้ใหญ่",
        "en": "Put the child in a regular seat and fasten the adult seat belt.",
        "my": "ကလေးကို ပုံမှန်ထိုင်ခုံမှာထားပြီး လူကြီးထိုင်ခုံခါးပတ်ကို ပတ်ထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "นั่งระหว่างเด็กคนอื่นๆ",
        "en": "Sit between other children",
        "my": "တခြားကလေးတွေကြားမှာ ထိုင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นั่งหลังที่นั่งผู้โดยสาร",
        "en": "Sit behind the passenger seat",
        "my": "ခရီးသည်ထိုင်ခုံနောက်မှာ ထိုင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 287,
    "category": "safe_driving",
    "image": null,
    "q_th": "พฤติกรรมใดที่ผู้ขับขี่ไม่ควรปฏิบัติขณะขับขี่บนถนน",
    "q_en": "What behavior should drivers not do while driving on the road?",
    "q_my": "၎) လမ်းပေါ်မှာ ကားမောင်းရင်း ယာဉ်မောင်းတွေ ဘာတွေ မလုပ်သင့်ဘူး။",
    "options": [
      {
        "th": "ไม่ขับรถจี้หลังกระชั้นชิด",
        "en": "Don't drive too close behind.",
        "my": "နောက်ကနေ အရမ်းမမောင်းပါနဲ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้สัญญาณไฟเลี้ยวเมื่อต้องการเลี้ยวหรือเปลี่ยนเลน",
        "en": "Use your turn signal when turning or changing lanes.",
        "my": "ကွေ့ရန် သို့မဟုတ် လမ်းများပြောင်းသည့်အခါ သင့်အလှည့်အချက်ပြကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินเพื่อวิ่งตรงบนทางแยก",
        "en": "Turn on your emergency lights to drive straight at the intersection.",
        "my": "လမ်းဆုံတွင် ဖြောင့်တန်းစွာ မောင်းနှင်ရန် သင်၏ အရေးပေါ်မီးများကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่แซงกระชั้นชิด",
        "en": "Not overtaking too closely",
        "my": "အရမ်းမလွန်ပါဘူး။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 288,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000327.webp",
    "q_th": "จากรูป ในขณะสัญญาณไฟเขียว หากท่านต้องการจะขับตรงไป แต่ท่านได้ยินสัญญาณรถพยาบาลมาทางขวามือของท่าน ท่านควร",
    "q_en": "From the picture at the time of the green light If you want to drive straight But you hear an ambulance signal coming to your right. You should",
    "q_my": "မီးစိမ်းနေတဲ့အချိန်မှာ ပုံထဲကအတိုင်း တည့်တည့် မောင်းချင်ရင် လူနာတင်ယာဉ် အချက်ပြသံ ကြားလိုက်ရတယ်။ လုပ်သင့်တယ်။",
    "options": [
      {
        "th": "ขับผ่านไปตามปกติ",
        "en": "Drive past as usual",
        "my": "ထုံးစံအတိုင်း ဖြတ်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรอรถพยาบาลไปก่อน",
        "en": "Stop and wait for the ambulance.",
        "my": "ရပ်ပြီး လူနာတင်ကားကို စောင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้สัญญาณแตรเพื่อเตือนรถพยาบาลให้รู้ว่าท่านจะไปก่อน",
        "en": "Use your horn to alert the ambulance that you will go first.",
        "my": "မင်းအရင်သွားရမယ့် လူနာတင်ကားကို သတိပေးဖို့ မင်းရဲ့ဟွန်းကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รีบๆ ขับผ่านไปจะได้ไม่ขวางทางรถพยาบาล",
        "en": "Hurry and drive past so you don't get in the way of the ambulance.",
        "my": "မြန်မြန်ကျော်ပြီး လူနာတင်ကားပေါ်မတက်စေနဲ့။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 289,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านต้องการเลี้ยวซ้ายจากถนนรองเข้าถนนหลัก มีรถบรรทุกวิ่งมาทางด้านขวา เพราะเหตุใดจึงควรหยุดรอแม้ว่ามีเวลาพอที่จะเลี้ยวเข้าทางหลัก",
    "q_en": "When you want to turn left from the secondary road onto the main road. There's a truck coming to the right. Why is it a good idea to stop and wait even if there is enough time to turn onto the main road?",
    "q_my": "အလယ်တန်းလမ်းကနေ ဘယ်ဘက်ကွေ့ချင်တဲ့အခါ လမ်းမကြီးပေါ်တက်ပါ။ ညာဘက်တွင် ထရပ်ကားတစ်စီး ရောက်လာသည်။ လမ်းမကြီးပေါ်တက်ဖို့ အချိန်အလုံအလောက်ရှိရင်တောင် ရပ်ပြီး စောင့်ဖို့ ဘာကြောင့် စိတ်ကူးကောင်းလဲ။",
    "options": [
      {
        "th": "รถบรรทุกอาจบดบังรถทางด้านซ้ายได้",
        "en": "Trucks may block vehicles on the left.",
        "my": "ထရပ်ကားများသည် ဘယ်ဘက်ရှိ ယာဉ်များကို ပိတ်ဆို့နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบรรทุกอาจเลี้ยวในทันทีทันใด",
        "en": "The truck may suddenly turn.",
        "my": "ထရပ်ကား ရုတ်တရက် ကွေ့သွားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบรรทุกควบคุมได้ยากในทางตรง",
        "en": "The truck is difficult to control in a straight line.",
        "my": "ထရပ်ကားသည် မျဉ်းဖြောင့်အတိုင်း ထိန်းချုပ်ရန် ခက်ခဲသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบรรทุกอาจบดบังรถยนต์ที่ทำการแซงได้",
        "en": "Trucks may block overtaking cars.",
        "my": "ထရပ်ကားများသည် ကျော်တက်ကားများကို ပိတ်ဆို့နိုင်သည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 290,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถตามหลังรถบรรทุกโดยเว้นระยะห่างไว้ แต่มีรถยนต์เข้ามาแทรกในระยะห่างนั้น ควรปฏิบัติอย่างไร",
    "q_en": "When you drive behind a truck, keeping a distance But there were cars inserted in that distance. What should I do?",
    "q_my": "ထရပ်ကားနောက်က လိုက်မောင်းတဲ့အခါ အကွာအဝေးကို ထိန်းထားပေမယ့် အဲဒီအကွာအဝေးမှာ ကားတွေ ပါ၀င်ပါတယ်။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "บีบแตร",
        "en": "Honk the horn",
        "my": "ဟွန်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เริ่มทำการแซง",
        "en": "Start overtaking",
        "my": "စတင်ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เว้นระยะห่างออกไปอีก",
        "en": "Keep the distance further apart.",
        "my": "အကွာအဝေးကို ခပ်ခွာခွာထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "กะพริบไฟ",
        "en": "Flashing lights",
        "my": "မှိတ်တုတ်မှိတ်တုတ်မီးများ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 291,
    "category": "safe_driving",
    "image": null,
    "q_th": "สาเหตุของการเกิดอุบัติเหตุ",
    "q_en": "Cause of the accident",
    "q_my": "ယာဉ်တိုက်မှုဖြစ်ရတဲ့အကြောင်းရင်း",
    "options": [
      {
        "th": "คน รถ ถนน",
        "en": "people car road",
        "my": "လူတွေ ကားလမ်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คน รถ",
        "en": "people car",
        "my": "လူကား",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คน",
        "en": "people",
        "my": "လူတွေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คน รถ ถนน สิ่งแวดล้อม",
        "en": "people, cars, roads, environment",
        "my": "လူ၊ ကား၊ လမ်း၊ ပတ်ဝန်းကျင်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 292,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000333.webp",
    "q_th": "เมื่อท่านขับรถขณะจะเลี้ยวซ้ายตรงทางแยกและมีคนกำลังข้ามถนน ควรปฏิบัติอย่างไร",
    "q_en": "When you are driving while turning left at an intersection and someone is crossing the road. What should I do?",
    "q_my": "၎) လမ်းဆုံမှာ ဘယ်ဘက်ကွေ့ပြီး တစ်စုံတစ်ယောက် လမ်းဖြတ်ကူးနေချိန် ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "เลี้ยวซ้ายและเว้นระยะห่างจากคนข้ามถนนไว้",
        "en": "Turn left and keep your distance from pedestrians.",
        "my": "ဘယ်ဘက်ကွေ့ပြီး လမ်းသွားလမ်းလာတွေနဲ့ ခပ်လှမ်းလှမ်းမှာထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดและโบกมือให้คนข้ามถนนข้ามไปก่อน",
        "en": "Stop and wave to pedestrians to cross the road first.",
        "my": "လမ်းဖြတ်ကူးဖို့ လမ်းသွားလမ်းလာတွေကို ရပ်ပြီး လက်ဝှေ့ယမ်းပြပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ทางแก่คนข้ามถนน",
        "en": "Give way to people crossing the road",
        "my": "လမ်းဖြတ်ကူးသူတွေကို လမ်းပေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรและทำการเลี้ยว",
        "en": "Honk the horn and make a turn.",
        "my": "ဟွန်းတီးပြီး လှည့်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 293,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อขับรถในช่วงที่มีการจราจรเคลื่อนตัวช้า ก่อนเปลี่ยนช่องทางเดินรถควรปฏิบัติอย่างไร",
    "q_en": "When driving during slow-moving traffic What should you do before changing the bus lane?",
    "q_my": "အနှေးယာဉ်ကြောမှာ မောင်းနှင်တဲ့အခါ ဘတ်စ်ကားလမ်းကြောမပြောင်းခင် ဘာတွေလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ให้สัญญาณมือ 'ขับช้าลง'",
        "en": "Give the hand signal 'drive more slowly'.",
        "my": "လက်အချက်ပြပြီး 'ဖြည်းဖြည်းမောင်းပါ'။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปลี่ยนเป็นเกียร์ 1",
        "en": "Change to 1st gear",
        "my": "1st gear သို့ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรและกะพริบไฟ",
        "en": "Honk the horn and flash the lights.",
        "my": "ဟွန်းကို ဟွန်းတီးပြီး မီးညှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจดูรถจักรยานยนต์ที่แทรกตามช่องว่างระหว่างรถ",
        "en": "Check the motorcycles that are inserted into the gaps between the vehicles.",
        "my": "ယာဉ်များကြားရှိ ကွက်လပ်များတွင် ထည့်သွင်းထားသော ဆိုင်ကယ်များကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 294,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อต้องการเลี้ยวขวาจากทางหลักเข้าสู่ทางรอง ควรปฏิบัติอย่างไรก่อนทำการเลี้ยว",
    "q_en": "When you want to turn right from the main road onto the secondary road. What should you do before making a turn?",
    "q_my": "လမ်းမကြီးမှ ညာဘက်သို့ ကွေ့လိုသောအခါ အလယ်တန်းလမ်းပေါ်သို့ တက်ပါ။ အလှည့်မကျခင် ဘာတွေလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ใช้เกียร์ 1",
        "en": "Use 1st gear",
        "my": "1st gear ကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจดูว่ามีรถที่กำลังจะแซงหรือไม่",
        "en": "Check to see if there is a car that is about to overtake you.",
        "my": "သင့်အား ကျော်တက်မည့် ကားရှိမရှိ စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หยุดและใช้เบรกมือ",
        "en": "Stop and use the handbrake.",
        "my": "ရပ်ပြီး လက်ဘရိတ်ကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปิดไฟเลี้ยวขวา",
        "en": "Turn off the right turn signal",
        "my": "ညာဘက်ကွေ့ အချက်ပြကို ပိတ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 295,
    "category": "safe_driving",
    "image": null,
    "q_th": "เพราะเหตุใดจึงจำเป็นต้องหมุนกระจกให้น้ำไหลเข้าในรถ เมื่อขับรถตกน้ำ",
    "q_en": "Why is it necessary to turn the window to let water flow into the car? When driving into water",
    "q_my": "၎) ကားထဲကို ရေစီးဝင်အောင် ပြတင်းပေါက်ကို လှည့်ဖို့ ဘာကြောင့် လိုအပ်တာလဲ။ ရေထဲ မောင်းတဲ့အခါ",
    "options": [
      {
        "th": "เพื่อดูดอากาศหายใจให้เข้าปอดมากที่สุด",
        "en": "To suck inhaled air into the lungs as much as possible",
        "my": "အဆုတ်ထဲကို တတ်နိုင်သမျှ ရှူသွင်းတဲ့လေကို စုပ်ယူပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อปรับความดันในรถและนอกรถให้เท่ากัน",
        "en": "To equalize the pressure in the car and outside the car.",
        "my": "ကားအတွင်းနှင့် ကားအပြင်ဘက်ရှိ ဖိအားကို ညီမျှစေရန်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพื่อเป็นทางออกสำหรับผู้ติดอยู่ในรถ",
        "en": "To provide a solution for people stuck in cars.",
        "my": "ကားပိတ်နေသူများအတွက် ဖြေရှင်းချက်ပေးရန်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อไม่ให้กระจกรถแตก",
        "en": "To prevent the car window from breaking",
        "my": "ကားပြတင်းပေါက် ကွဲမရအောင်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 296,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000337.webp",
    "q_th": "เมื่อเข้าสู่วงเวียนขนาดเล็ก หากเห็นรถบรรทุกให้สัญญาณไฟเลี้ยวซ้ายแต่ขับชิดขวา ควรทำอย่างไร",
    "q_en": "When entering a small roundabout If you see a truck giving a left turn signal but driving on the right, what should you do?",
    "q_my": "အဝိုင်းသေးသေးလေးထဲကို ဝင်တဲ့ ထရပ်ကားက ဘယ်ကွေ့အချက်ပြပေမယ့် ညာဘက်ကို မောင်းနေတာတွေ့ရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "บีบแตร",
        "en": "Honk the horn",
        "my": "ဟွန်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำตามรถบรรทุก",
        "en": "Follow the truck",
        "my": "ထရပ်ကားနောက်ကိုလိုက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เว้นระยะห่าง",
        "en": "keep distance",
        "my": "အကွာအဝေးထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงจากทางด้านซ้าย",
        "en": "Passing from the left",
        "my": "ဘယ်ဘက်မှ ဖြတ်သွားသည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 297,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000338.webp",
    "q_th": "จากรูป หากท่านต้องการที่จะเลี้ยวขวาที่ทางแยกรูปตัว T ท่านจะต้องปฏิบัติอย่างไร",
    "q_en": "From the picture, if you want to turn right at a T-shaped intersection, what should you do?",
    "q_my": "ပုံထဲက T ပုံသဏ္ဍာန်လမ်းဆုံမှာ ညာဘက်ကွေ့ချင်ရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ให้ทั้งรถทางขวาและซ้ายไปก่อน",
        "en": "Let both cars on the right and left go first.",
        "my": "ညာဖက်နဲ့ ဘယ်ဘက် ကားနှစ်စီးစလုံး အရင်သွားပါစေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้รถทางซ้ายไปก่อน",
        "en": "Let the car on the left go first.",
        "my": "ဘယ်ဘက်ခြမ်းက ကားကို အရင်သွားပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เลี้ยวขวาได้ทันที",
        "en": "You can turn right immediately.",
        "my": "ချက်ချင်း ညာဘက်ကို ကွေ့နိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถทางขวาไปก่อน",
        "en": "Let the car on the right go first.",
        "my": "ညာဘက်က ကားကို အရင်သွားပါစေ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 298,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000339.webp",
    "q_th": "จากรูป รถคันใดจะต้องให้ทาง",
    "q_en": "From the picture, which car must give way?",
    "q_my": "ပုံထဲက ဘယ်ကားက ပေးရမလဲ။",
    "options": [
      {
        "th": "รถคันสีแดง",
        "en": "red car",
        "my": "ကားအနီ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันสีขาว",
        "en": "white car",
        "my": "ကားအဖြူ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถที่มีความเร็วสูงกว่า",
        "en": "Cars with higher speeds",
        "my": "မြန်နှုန်းမြင့်ကားများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถที่มีความเร็วต่ำกว่า",
        "en": "Cars with a lower speed",
        "my": "အရှိန်လျှော့ထားသော ကားများ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 299,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000340.webp",
    "q_th": "จากรูป หากท่านกำลังขับขี่เข้าสู่บริเวณทางข้ามท่านควรปฏิบัติอย่างไร",
    "q_en": "From the picture, if you are driving into the crossing area, what should you do?",
    "q_my": "၎) ပုံမှာပြထားတဲ့အတိုင်း လမ်းဖြတ်ကူးတဲ့နေရာမှာ ကားမောင်းရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "เพิ่มความเร็ว",
        "en": "increase speed",
        "my": "အရှိန်မြှင့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับด้วยความเร็วเท่าเดิม",
        "en": "Drive at the same speed as before.",
        "my": "အရင်ကလို အရှိန်နဲ့ မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็วและเตรียมพร้อมที่จะหยุดรถ",
        "en": "Slow down and prepare to stop.",
        "my": "အရှိန်လျှော့ပြီး ရပ်ရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรเพื่อเร่งให้คนรีบเดิน",
        "en": "Honk the horn to hasten people to walk.",
        "my": "လမ်းလျှောက်ဖို့ လူတွေကို အရှိန်မြှင့်ဖို့ ဟွန်းတီးတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 300,
    "category": "safe_driving",
    "image": null,
    "q_th": "ท่านคิดว่าข้อใดเป็นการขับขี่ที่ไร้ซึ่งมารยาทอย่างมาก",
    "q_en": "What do you think is the most rude driving behavior?",
    "q_my": "အရိုင်းစိုင်းဆုံး ကားမောင်းတဲ့ အပြုအမူက ဘာထင်လဲ။",
    "options": [
      {
        "th": "ขับรถชิดซ้าย หรือให้ทางแก่รถฉุกเฉิน",
        "en": "Drive on the left or give way to emergency vehicles.",
        "my": "ဘယ်ဘက်တွင် မောင်းနှင်ပါ သို့မဟုတ် အရေးပေါ်ယာဉ်များဆီသို့ လမ်းပေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความเร็วรถปกติ เมื่อมีรถคันอื่นกะพริบไฟขอทาง",
        "en": "Use normal vehicle speed. When another car flashes its lights asking for directions",
        "my": "ပုံမှန်ယာဉ်အမြန်နှုန်းကို အသုံးပြုပါ။ အခြားကားက မီးမှိတ်တုတ်မှိတ်တုတ် ညွှန်ပြသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถจี้ท้าย และบีบแตรไล่บนทางด่วน",
        "en": "Driving behind the scenes and honking the horn on the expressway.",
        "my": "ကားနောက်ကနေ ကားမောင်းပြီး အမြန်လမ်းပေါ်မှာ ဟွန်းဟွန်းတီးတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ชะลอความเร็วให้รถคันอื่นแซง",
        "en": "Slow down to allow other cars to pass.",
        "my": "အခြားကားများ ဖြတ်သန်းခွင့်ပြုရန် အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 301,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อพบคนเดินเท้า ข้อใดที่ผู้ขับขี่ไม่ควรปฏิบัติ",
    "q_en": "When meeting a pedestrian Which thing should drivers not do?",
    "q_my": "၎) လမ်းသွားလမ်းလာတွေနဲ့ တွေ့ဆုံတဲ့အခါ ဘယ်ယာဉ်မောင်းတွေ မလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "บีบแตรเพื่อไล่คนเดินเท้า",
        "en": "Honk your horn to chase away pedestrians.",
        "my": "လမ်းသွားလမ်းလာများကို မောင်းထုတ်ရန် သင့်ဟွန်းကို ဟွန်းတီးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพิ่มความระมัดระวังในการขับรถ",
        "en": "Increase caution when driving",
        "my": "ကားမောင်းတဲ့အခါ သတိထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถให้คนเดินเท้าข้าม",
        "en": "Stop the car to let pedestrians cross.",
        "my": "လမ်းသွားလမ်းလာတွေကို ဖြတ်ကျော်ဖို့ ကားကို ရပ်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็ว",
        "en": "slow down",
        "my": "နှေးကွေး",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 302,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากต้องขับรถผ่านผิวการจราจรชำรุด ผู้ขับขี่ไม่ควรปฏิบัติอย่างไร",
    "q_en": "If you have to drive through damaged traffic surfaces What should drivers not do?",
    "q_my": "ပျက်စီးနေသော ယာဉ်ကြောမျက်နှာပြင်များကို ဖြတ်ကျော်မောင်းနှင်ရပါက ယာဉ်မောင်းများ ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับขี่อย่างระมัดระวัง",
        "en": "Drive carefully.",
        "my": "ဂရုတစိုက်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความเร็วสูง",
        "en": "Driving at high speed",
        "my": "အရှိန်ပြင်းပြင်းနဲ့ မောင်းတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้ความเร็วต่ำ",
        "en": "Use low speed",
        "my": "အနိမ့်အမြန်နှုန်းကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เบรกกะทันหันระหว่างที่ขับขี่อยู่บริเวณที่มีผิวทางชำรุด",
        "en": "Do not brake suddenly while driving in areas with damaged pavement.",
        "my": "ပျက်စီးနေသော အခင်းဖြစ်နေရာများတွင် မောင်းနှင်နေစဉ် ရုတ်တရက် ဘရိတ်မတိုက်ပါနှင့်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 303,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในการขับรถข้ามทางรถไฟที่ไม่มีเครื่องกั้นเมื่อคันด้านหน้าขับข้ามทางรถไฟไปแล้วท่านควรปฏิบัติอย่างไร",
    "q_en": "When driving across the railroad without a barrier, what should you do when the vehicle in front of you has already crossed the railroad?",
    "q_my": "အတားအဆီးမရှိဘဲ ရထားလမ်းကို ဖြတ်ကျော်မောင်းနှင်တဲ့အခါ ရှေ့ကယာဉ်က ရထားလမ်းကို ဖြတ်ကျော်ပြီးတဲ့အခါ ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "รอสัญญาณไฟเขียว",
        "en": "Waiting for the green light",
        "my": "မီးစိမ်းကို စောင့်နေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรอเจ้าหน้าที่ให้สัญญาณ",
        "en": "Stop and wait for the officer to give the signal.",
        "my": "ရပ်ပြီး အရာရှိက အချက်ပြပေးမယ့်သူကို စောင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ก่อนข้ามทางรถไฟต้องตรวจสอบความปลอดภัยอีกครั้ง",
        "en": "Before crossing the railway line, safety must be checked again.",
        "my": "မီးရထားလမ်းကို မဖြတ်ခင် လုံခြုံရေးကို ထပ်ပြီး စစ်ဆေးရပါမယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับตามคันด้านหน้าไปได้เลย",
        "en": "You can follow the car in front.",
        "my": "ရှေ့က ကားနောက်ကို လိုက်နိုင်တယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 304,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000345.webp",
    "q_th": "เมื่อท่านพบรถประจำทางเปิดไฟเลี้ยวขวาเพื่อออกจากป้ายรถเมล์ ท่านควรปฏิบัติอย่างไร",
    "q_en": "When you see a bus, turn on your right turn signal to leave the bus stop. What should you do?",
    "q_my": "ဘတ်စ်ကားတစ်စီးကိုတွေ့သောအခါ၊ ဘတ်စ်ကားမှတ်တိုင်မှထွက်ခွာရန် သင်၏ညာဘက်အလှည့်အချက်ပြကိုဖွင့်ပါ။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "ไม่ต้องสนใจและขับแซงรถประจำทางไปในทันที",
        "en": "Ignore it and immediately overtake the bus.",
        "my": "အဲဒါကို လျစ်လျူရှုပြီး ဘတ်စ်ကားကို ချက်ချင်းကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟฉุกเฉิน เพื่อบอกให้รถประจำทางไปก่อน",
        "en": "Turn on the emergency lights to tell the bus to go first",
        "my": "ဘတ်စ်ကားကို အရင်သွားခိုင်းဖို့ အရေးပေါ်မီးတွေဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็วและให้รถประจำทางไปก่อน",
        "en": "Slow down and let the bus go first.",
        "my": "အရှိန်လျှော့ပြီး ဘတ်စ်ကားကို အရင်လွှတ်လိုက်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรหรือกะพริบไฟสูง",
        "en": "Honk your horn or flash your high beams.",
        "my": "မင်းရဲ့ဦးချိုကို ဟွန်းတီးလိုက် ဒါမှမဟုတ် မင်းရဲ့အမြင့်တန်းတွေကို မီးညှိလိုက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 305,
    "category": "safe_driving",
    "image": null,
    "q_th": "สิ่งใดต่อไปนี้ช่วยลดการบาดเจ็บที่คอได้เมื่อเกิดการชน",
    "q_en": "Which of the following can help reduce neck injuries in a crash?",
    "q_my": "ယာဉ်တိုက်မှုတွင် လည်ပင်းဒဏ်ရာများကို လျှော့ချပေးနိုင်သည့် အောက်ပါအချက်များ",
    "options": [
      {
        "th": "ระบบเบรก ABS",
        "en": "ABS braking system",
        "my": "ABS ဘရိတ်စနစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หมอนรองศีรษะที่ปรับระดับได้เหมาะสม",
        "en": "Adjustable headrest pillow",
        "my": "ချိန်ညှိနိုင်သော ခေါင်းအုံး",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เบาะสปริงลม",
        "en": "air spring cushion",
        "my": "air spring ကူရှင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แกนพวงมาลัยแบบยุบตัวได้",
        "en": "Collapsible steering shaft",
        "my": "ခေါက်သိမ်းနိုင်သော စတီယာရင်ရှပ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 306,
    "category": "safe_driving",
    "image": null,
    "q_th": "สถานการณ์ใดใช้ไฟฉุกเฉินได้อย่างเหมาะสม",
    "q_en": "In what situations can emergency lights be used appropriately?",
    "q_my": "၎) အရေးပေါ်မီးများကို မည်သည့်အခြေအနေများတွင် သင့်လျော်စွာအသုံးပြုနိုင်သနည်း။",
    "options": [
      {
        "th": "เปิดไฟฉุกเฉินเมื่อกำลังจะเลี้ยวซ้ายบริเวณทางแยกที่ไม่มีสัญญาณไฟจราจร",
        "en": "Turn on your emergency lights when turning left at an intersection where there are no traffic lights.",
        "my": "မီးပွိုင့်မရှိသော လမ်းဆုံတွင် ဘယ်ဘက်သို့ ကွေ့သောအခါတွင် သင်၏ အရေးပေါ်အချက်ပြမီးများကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินเมื่อรถจอดเสียอยู่บริเวณไหล่ทาง",
        "en": "Turn on emergency lights when the car breaks down on the shoulder of the road.",
        "my": "ကားသည် လမ်းပခုံးပေါ်မှ ပြုတ်ကျသောအခါ အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟฉุกเฉินในขณะที่หมอกลงจัด",
        "en": "Turn on emergency lights during heavy fog.",
        "my": "မြူထူထပ်နေချိန်တွင် အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินเพื่อให้ผู้ขับขี่ท่านอื่นทราบว่าตนจะวิ่งตรงไป",
        "en": "Turn on your emergency lights to let other drivers know you will be moving straight ahead.",
        "my": "သင်သည် ရှေ့တည့်တည့်သို့ ရွေ့နေမည်ကို အခြားယာဉ်မောင်းများအား အသိပေးရန်အတွက် သင်၏ အရေးပေါ်မီးများကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 307,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อกำลังจะเดินทางกลับบ้านหลังจากช่วงวันหยุดหลายวัน หากท่านไม่สบายและแพทย์สั่งยาที่มีผลต่อการขับรถ ควรปฏิบัติอย่างไร",
    "q_en": "When returning home after several holidays. If you are sick and your doctor prescribes medicine that affects your driving. What should I do?",
    "q_my": "အားလပ်ရက်များစွာကြာပြီးနောက် အိမ်သို့ပြန်လာသည်။ အကယ်၍ သင်သည် နေမကောင်းဖြစ်ပြီး သင့်ကားမောင်းခြင်းကို ထိခိုက်စေသော ဆေးကို သင့်ဆရာဝန်က ညွှန်ကြားသည်။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ไม่ขับรถเกินกว่า 50 กิโลเมตรต่อชั่วโมง",
        "en": "Do not drive more than 50 kilometers per hour.",
        "my": "တစ်နာရီ ကီလိုမီတာ ၅၀ ထက် ပိုမမောင်းပါနဲ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ผู้อื่นขับรถแทน",
        "en": "Let someone else drive instead.",
        "my": "အစား တခြားသူကို မောင်းပါစေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หลีกเลี่ยงการขับรถบนทางหลวงพิเศษ",
        "en": "Avoid driving on expressways.",
        "my": "အမြန်လမ်းများပေါ်တွင် မောင်းနှင်ခြင်းမှ ရှောင်ကြဉ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถได้เมื่อมีคนโดยสารไปด้วยเท่านั้น",
        "en": "You can drive only when you have a passenger.",
        "my": "သင့်တွင် ခရီးသည်ရှိမှသာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 308,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ควรปฏิบัติหากพบอุบัติเหตุข้างหน้า",
    "q_en": "Which thing should not be done if there is an accident ahead?",
    "q_my": "ရှေ့တွင် မတော်တဆဖြစ်လျှင် မည်သည့်အရာကို မလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "โทรเรียกสายด่วนรถพยาบาล",
        "en": "Call the ambulance hotline.",
        "my": "လူနာတင်ယာဉ် hotline ကိုခေါ်ဆိုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สังเกตการณ์อยู่บนรถ หากไม่ใช่คนรู้จักจึงขับรถไปต่อ",
        "en": "Observe in the car If it's not someone you know, then drive on.",
        "my": "ကားထဲမှာ သင်သိတဲ့လူမဟုတ်ရင် ကားပေါ်ကို သတိပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ชะลอความเร็วและให้การช่วยเหลือเบื้องต้น",
        "en": "Slow down and provide first aid.",
        "my": "နှေးကွေးပြီး ရှေးဦးသူနာပြုစုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถข้างทางแสดงสัญลักษณ์เตือนให้ระมัดระวัง",
        "en": "Parking on the side of the road shows signs warning you to be careful.",
        "my": "လမ်းဘေးမှာ ကားရပ်ရင် သတိထားဖို့ ဆိုင်းဘုတ်တွေ ပြထားတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 309,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากผู้ขับขี่ทานยาแก้แพ้ ยาแก้เมารถ แล้วมีอาการเวียนศีรษะ มึนงง ควรปฏิบัติอย่างไร",
    "q_en": "If the driver takes antihistamines and motion sickness medication and feels dizzy and dizzy, what should he do?",
    "q_my": "၎) ယာဉ်မောင်းသူသည် antihistamines နှင့် motion sickness ဆေးသောက်ပြီး မူးဝေမူးဝေ ခံစားရပါက ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "นั่งพัก 10 นาทีจึงสามารถขับขี่รถได้",
        "en": "Sit and rest for 10 minutes before you can drive.",
        "my": "ကားမမောင်းခင် 10 မိနစ်လောက် ထိုင်ပြီး အနားယူပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "งดเว้นการขับขี่ เนื่องจากมีอาการง่วง",
        "en": "refrain from driving Due to feeling sleepy",
        "my": "အိပ်ငိုက်ခြင်းကြောင့် ကားမောင်းခြင်းမှ ရှောင်ကြဉ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สามารถขับขี่รถได้ปกติ",
        "en": "Can drive normally",
        "my": "ပုံမှန်အတိုင်း မောင်းနှင်နိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับได้แต่ต้องดื่มน้ำตามเยอะๆ",
        "en": "You can drive but you must drink lots of water.",
        "my": "ကားမောင်းနိုင်ပေမယ့် ရေများများသောက်ရပါမယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 310,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดคือความสำคัญของการจัดตำแหน่งที่หมอนรองศีรษะให้เหมาะสม",
    "q_en": "What is the importance of proper positioning of the head restraint?",
    "q_my": "၎) ဦးခေါင်းအထိန်းအချုပ်ကို မှန်ကန်စွာနေရာချခြင်း၏ အရေးကြီးမှုသည် အဘယ်နည်း။",
    "options": [
      {
        "th": "ช่วยทำให้รักษาตำแหน่งท่าในการขับรถได้ดีขึ้น",
        "en": "Helps maintain a better driving position.",
        "my": "ပိုမိုကောင်းမွန်သော မောင်းနှင်မှုအနေအထားကို ထိန်းသိမ်းရန် ကူညီပေးသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยทำให้ผ่อนคลาย",
        "en": "Helps to relax",
        "my": "အပန်းဖြေရန် ကူညီပေးသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยลดอาการบาดเจ็บที่คอกรณีเกิดอุบัติเหตุ",
        "en": "Helps reduce neck injuries in the event of an accident.",
        "my": "မတော်တဆမှုဖြစ်တဲ့အခါ လည်ပင်းဒဏ်ရာတွေကို လျော့ပါးစေပါတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ช่วยทำให้สบายมากขึ้น",
        "en": "Helps make you more comfortable.",
        "my": "သင့်ကို ပိုသက်တောင့်သက်သာဖြစ်စေပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 311,
    "category": "safe_driving",
    "image": null,
    "q_th": "การจอดรถขวางทางคันอื่น ควรปฏิบัติอย่างไร",
    "q_en": "Parking in the way of other cars. What should I do?",
    "q_my": "၎) အခြားကားများလမ်းတွင် ရပ်နားပါ။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ใส่เกียร์เดินหน้า",
        "en": "Put the gear forward",
        "my": "ဂီယာကို ရှေ့သို့ချထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใส่เกียร์ถอยหลัง",
        "en": "Put the gear in reverse.",
        "my": "ဂီယာကို ပြောင်းပြန်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใส่เบรกมือไว้",
        "en": "Put the handbrake on.",
        "my": "လက်ဘရိတ်ကိုတပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปลดเกียร์ว่าง ไม่ใช้เบรกมือ",
        "en": "Put the gear in neutral. Do not use the handbrake",
        "my": "ဂီယာကို neutral ထားပါ။ လက်ဘရိတ်ကို မသုံးပါနှင့်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 312,
    "category": "safe_driving",
    "image": null,
    "q_th": "สิ่งใดที่ผู้ขับรถไม่ควรทำเมื่อได้รับสัญญาณไฟเขียวให้ขับเคลื่อนรถไปได้",
    "q_en": "What should drivers not do when given the green light to drive?",
    "q_my": "ယာဉ်မောင်းများ မောင်းနှင်ရန် မီးစိမ်းပြသောအခါ ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ตรวจสอบรถในทางแยกอื่นที่อาจวิ่งออกมาก่อนที่จะขับเข้าสู่ทางแยกด้านหน้า",
        "en": "Check for vehicles in other intersections that may exit before entering the front intersection.",
        "my": "ရှေ့လမ်းဆုံသို့မဝင်မီ အခြားလမ်းဆုံများတွင် ထွက်နိုင်သောယာဉ်များကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรเร่งรถคันหน้าให้เคลื่อนตัวออกโดยเร็ว",
        "en": "Honk the horn and accelerate the car in front to move away quickly.",
        "my": "ဟွန်းကို ဟွန်းတီးပြီး ရှေ့က ကားကို အရှိန်မြှင့်ပြီး အဝေးကို အမြန်မောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ค่อยๆ เคลื่อนรถออกโดยทิ้งช่วงห่างกับคันหน้าพอสมควร",
        "en": "Slowly move the car away, leaving a considerable distance from the vehicle in front.",
        "my": "ကားကို ဖြည်းညှင်းစွာ ရွှေ့ပြီး ရှေ့ယာဉ်နှင့် အတော်အတန်အကွာအဝေးကို ချန်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอให้รถจักรยานยนต์หรือรถยนต์ที่อยู่ด้านหน้าเคลื่อนออกไปก่อน",
        "en": "Slow down to allow the motorcycle or car in front to move away first.",
        "my": "ရှေ့မှ မော်တော်ဆိုင်ကယ် သို့မဟုတ် ကားကို အဝေးသို့ ဦးစွာရွှေ့ခွင့်ပြုရန် အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 313,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อรถที่ขับตามหลังมาให้สัญญาณขอแซง มารยาทที่ดีเพื่อแสดงการตอบรับว่ายินยอมให้แซง คือ",
    "q_en": "When a car driving behind gives a signal to overtake. Good manners to express your consent to overtaking are:",
    "q_my": "၎) နောက်က မောင်းလာတဲ့ ကားက ကျော်တက်ဖို့ အချက်ပြပေးတယ်။ ကျော်တက်ရန် သင်၏သဘောတူချက်ကို ဖော်ပြရန် အမူအကျင့်ကောင်းများမှာ-",
    "options": [
      {
        "th": "ให้สัญญาณไฟเลี้ยวซ้าย ชิดซ้าย และลดความเร็วลง",
        "en": "Give the left turn signal, keep to the left and reduce your speed.",
        "my": "ဘယ်ဘက်အလှည့်အချက်ပြပါ၊ ဘယ်ဘက်ကိုဆက်ပြီး အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้สัญญาณแตร และลดความเร็วลง",
        "en": "Give the horn signal and reduce speed.",
        "my": "ဟွန်းအချက်ပြပြီး အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณไฟสูง และลดความเร็วลง",
        "en": "Give a high signal and reduce speed",
        "my": "မြင့်မားသောအချက်ပြပြီး အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณไฟฉุกเฉิน",
        "en": "Give emergency light signal",
        "my": "အရေးပေါ် မီးအချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 314,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000364.webp",
    "q_th": "ท่านกำลังขับขี่ผ่านบริเวณที่มีรถจอดอยู่ข้างทาง แต่ท่านสังเกตเห็นลูกบอลกลิ้งออกมา ท่านควรปฏิบัติอย่างใด",
    "q_en": "You are driving through an area where there are cars parked on the side of the road. But he noticed the ball rolling out. What should you do?",
    "q_my": "မင်းလမ်းဘေးမှာ ကားတွေရပ်ထားတဲ့နေရာကို ဖြတ်မောင်းနေတာ။ ဒါပေမယ့် သူက ဘောလုံးထွက်နေတာကို သတိထားမိတယ်။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "ลดความเร็วลงและเตรียมที่จะหยุดรถ",
        "en": "Slow down and prepare to stop.",
        "my": "အရှိန်လျှော့ပြီး ရပ်ရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จอดรถและโบกมือให้เด็กไปเก็บลูกบอล",
        "en": "Park the car and wave to the child to go collect the ball.",
        "my": "ကားကိုရပ်ပြီး ဘောလုံးသွားယူဖို့ ကလေးကို ဝှေ့ယမ်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความเร็วเท่าเดิมและให้สัญญาณไฟสูง",
        "en": "Drive at the same speed and keep your lights on.",
        "my": "တူညီသော အရှိန်ဖြင့် မောင်းနှင်ပြီး မီးကို ဖွင့်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความเร็วเท่าเดิมและให้สัญญาณแตร",
        "en": "Drive at the same speed and signal your horn.",
        "my": "တူညီသောအမြန်နှုန်းဖြင့်မောင်းပြီး သင်၏ဟွန်းကို အချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 315,
    "category": "safe_driving",
    "image": null,
    "q_th": "ผู้ขับขี่ต้องระมัดระวังทิศทางใดบ้างในระหว่างการขับขี่",
    "q_en": "What direction must drivers be careful while driving?",
    "q_my": "၎) ယာဉ်မောင်းများ မောင်းနှင်ရာတွင် မည်သည့်လမ်းကြောင်းကို သတိထားရမည်နည်း။",
    "options": [
      {
        "th": "ด้านการขับขี่",
        "en": "Driving side",
        "my": "ကားမောင်းသွားတာပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ด้านข้างๆ",
        "en": "On the side",
        "my": "ဘက်မှာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ด้านความปลอดภัย",
        "en": "Safety",
        "my": "ဘေးကင်းရေး",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ด้านหน้า หลัง ซ้าย ขวา",
        "en": "front, back, left, right",
        "my": "ရှေ့၊နောက်၊ဘယ်၊ညာ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 316,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000366.webp",
    "q_th": "จากรูป เมื่อรถคันสีเหลืองต้องการที่จะขับตรงไป ควรปฏิบัติอย่างไร",
    "q_en": "From the picture, when the yellow car wants to drive straight. What should I do?",
    "q_my": "ပုံထဲက အဝါရောင်ကားက တည့်တည့် မောင်းချင်တဲ့အခါ။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "หยุดรอจนกว่ารถที่ขวางทางจะผ่านไป",
        "en": "Stop and wait until the vehicle blocking your way has passed.",
        "my": "သင့်လမ်းကို ပိတ်ဆို့နေသော ယာဉ်သည် ကျော်သွားသည်အထိ ရပ်ပြီး စောင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟสัญญาณไฟฉุกเฉิน",
        "en": "Turn on the emergency light",
        "my": "အရေးပေါ်မီးကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรอย่างต่อเนื่อง",
        "en": "honk continuously",
        "my": "ဟွန်း အဆက်မပြတ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรไล่และพยายามขับเบียดแทรกอย่างรวดเร็ว",
        "en": "Honk your horn and try to drive in quickly.",
        "my": "မင်းရဲ့ဟွန်းကို ဟွန်းတီးပြီး မြန်မြန်မောင်းဝင်ကြည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 317,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดเป็นการขับรถเข้าทางโค้งอย่างปลอดภัย",
    "q_en": "Which is the safest way to drive into a curve?",
    "q_my": "လမ်းကွေ့တစ်ခုသို့ မောင်းနှင်ရန် ဘယ်လမ်းက အလုံခြုံဆုံးလဲ။",
    "options": [
      {
        "th": "เปลี่ยนเกียร์ขณะเข้าทางโค้ง",
        "en": "Change gear while entering a curve.",
        "my": "မျဉ်းကွေးသို့ဝင်စဉ် ဂီယာပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วก่อนเข้าโค้ง",
        "en": "Reduce speed before entering a curve.",
        "my": "မျဉ်းကွေးမဝင်မီ အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหยียบเบรกกะทันหันขณะเข้าทางโค้ง",
        "en": "Slam on the brakes suddenly while entering a curve.",
        "my": "မျဉ်းကွေးတစ်ခုထဲသို့ ဝင်ရောက်စဉ် ဘရိတ်ကို ရုတ်တရက် ဆောင့်တိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความเร็วสูงกว่าที่กำหนด",
        "en": "Use a higher speed than specified.",
        "my": "သတ်မှတ်ထားသည်ထက် မြင့်မားသော မြန်နှုန်းကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 318,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000374.webp",
    "q_th": "หากท่านขับรถในตำแหน่งของรถคันสีเทา (ลูกศรชี้) ควรระมัดระวังสิ่งใดมากที่สุด",
    "q_en": "If you drive in the position of the gray car (pointed by the arrow), what should you be most careful of?",
    "q_my": "မီးခိုးရောင်ကား (မြှားဖြင့်ညွှန်ပြသော) နေရာတွင် မောင်းနှင်ပါက အဘယ်အရာကို သတိထားသင့်သနည်း။",
    "options": [
      {
        "th": "รถที่จอดอยู่อาจเปิดประตู",
        "en": "Parked cars may open their doors.",
        "my": "ရပ်ထားသောကားများသည် တံခါးဖွင့်နိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ที่จอดรถที่ว่างอยู่",
        "en": "Vacant parking lot",
        "my": "ကားပါကင် လစ်လပ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พื้นผิวถนนที่ขรุขระ",
        "en": "rough road surface",
        "my": "ကြမ်းတမ်းသောလမ်းမျက်နှာပြင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถที่ตามหลังมา",
        "en": "The car following behind",
        "my": "ကားနောက်ကလိုက်သွားတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 319,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อมีผู้อื่นแบ่งปันน้ำใจในการใช้รถใช้ถนนให้ท่าน ข้อใดไม่ควรปฏิบัติ",
    "q_en": "When others share kindness in using the road for you. Which thing should not be done?",
    "q_my": "၎) သင့်အတွက် လမ်းကိုအသုံးပြုရာတွင် အခြားသူများကို ကြင်နာမှုပေးသောအခါ။ မည်သည့်အရာကို မလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "โค้งศีรษะแสดงความขอบคุณ",
        "en": "Bow your head in gratitude",
        "my": "ကျေးဇူးသိစိတ်ဖြင့် ခေါင်းညွှတ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยกมือขวาขึ้นระดับคิ้วแสดงการขอบคุณ",
        "en": "Raise your right hand to eyebrow level to express your thanks.",
        "my": "ကျေးဇူးတင်ကြောင်းဖော်ပြရန် သင်၏ညာလက်ကို မျက်ခုံးမွေးအဆင့်သို့ မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟสูงแสดงการขอบคุณ",
        "en": "Turn on your high beams to show your appreciation.",
        "my": "သင်၏တန်ဖိုးထားမှုကိုပြသရန် သင်၏အမြင့်တန်းများကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ส่งยิ้มแสดงการขอบคุณ",
        "en": "Send a smile to express your thanks.",
        "my": "ကျေးဇူးတင်ကြောင်းဖော်ပြရန် အပြုံးတစ်ခုပေးပို့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 320,
    "category": "safe_driving",
    "image": null,
    "q_th": "ผู้ขับขี่ไม่ควรดื่มแอลกอฮอล์ก่อนการขับขี่ ไม่ว่ากรณีใดๆ ใช่หรือไม่",
    "q_en": "Drivers should not drink alcohol before driving. In any case, yes or no?",
    "q_my": "ယာဉ်မောင်းများသည် ကားမမောင်းမီ အရက်မသောက်သင့်ပါ။ မည်သို့ပင်ဆိုစေ၊ ဟုတ်သည်ဖြစ်စေ၊ မဟုတ်သည်ဖြစ်စေ။",
    "options": [
      {
        "th": "ขึ้นอยู่กับชนิดของยานพาหนะที่ขับขี่",
        "en": "It depends on the type of vehicle being driven.",
        "my": "မောင်းနှင်နေတဲ့ ယာဉ်အမျိုးအစားပေါ် မူတည်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช่ เพราะทำให้ร่างกายตอบสนองช้า",
        "en": "Yes, because it makes the body respond slowly.",
        "my": "ဟုတ်တယ်၊ ဘာကြောင့်လဲဆိုတော့ ခန္ဓာကိုယ်က တုံ့ပြန်မှုကို နှေးကွေးစေလို့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขึ้นอยู่กับอาหารการกิน",
        "en": "Depends on the food you eat",
        "my": "သင်စားသောအစားအစာပေါ် မူတည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ใช่",
        "en": "No",
        "my": "မရှိ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 321,
    "category": "safe_driving",
    "image": null,
    "q_th": "อุบัติเหตุบนถนนที่เกิดจากการแซง มักจะเกิดการชนแบบใด",
    "q_en": "Road accidents caused by overtaking What kind of collisions usually occur?",
    "q_my": "ကျော်တက်ခြင်းကြောင့် ဖြစ်ပေါ်လာသော ယာဉ်မတော်တဆမှုများသည် မည်သို့သော ယာဉ်တိုက်မှုမျိုး ဖြစ်ပွားလေ့ရှိသနည်း။",
    "options": [
      {
        "th": "ชนจากทางด้านข้าง",
        "en": "Hit from the side",
        "my": "ဘေးကနေရိုက်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชนฟุตบาทหรือริมถนน",
        "en": "Hitting the sidewalk or roadside",
        "my": "လမ်းဘေး သို့မဟုတ် လမ်းဘေးကို တိုက်မိခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชนคนเดินเท้า",
        "en": "Hit a pedestrian",
        "my": "လမ်းသွားလမ်းလာကို ဝင်တိုက်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชนแบบประสานงา",
        "en": "A coordinated collision",
        "my": "ညှိနှိုင်းနေမြဲ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 322,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะที่ขับรถกลับบ้าน ถ้าท่านรู้สึกเหนื่อยและปวดหัวอย่างมาก ควรปฏิบัติอย่างไรเพื่อให้เกิดความปลอดภัยในการขับรถมากที่สุด",
    "q_en": "While driving home If you feel extremely tired and have a headache What should be done to ensure the greatest safety in driving?",
    "q_my": "အိမ်ကားမောင်းနေစဉ် အလွန်ပင်ပန်းနွမ်းနယ်ပြီး ခေါင်းကိုက်ပါက ကားမောင်းရာတွင် ဘေးကင်းစေရန်အတွက် ဘာတွေလုပ်ဆောင်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถกลับบ้าน ถ้ายังมีสติ",
        "en": "Drive home if you're still conscious.",
        "my": "သတိရှိနေရင် အိမ်ပြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รอเป็นระยะเวลาสั้นๆ แล้วค่อยๆขับรถกลับบ้าน",
        "en": "Wait for a short period of time. Then slowly drove home",
        "my": "အချိန်တိုအတွင်း စောင့်ပါ။ ထို့နောက် အိမ်သို့ ဖြည်းညှင်းစွာ မောင်းလာခဲ့သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รับประทานยาแก้ปวด แล้วขับรถกลับบ้าน",
        "en": "Take painkillers then drive home",
        "my": "အကိုက်အခဲပျောက်ဆေးသောက်ပြီး အိမ်ပြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รอจนกระทั่งร่างกายมีความพร้อมในการขับรถ",
        "en": "Wait until your body is ready to drive.",
        "my": "ကားမောင်းရန် အသင့်ဖြစ်သည်အထိ စောင့်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 323,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถที่มีระบบเบรก ABS ควรเหยียบเบรกอย่างไรในกรณีที่ต้องการหยุดเมื่อเกิดเหตุฉุกเฉิน",
    "q_en": "When you drive a car with an ABS braking system, how should you apply the brakes in case you want to stop in an emergency?",
    "q_my": "ABS ဘရိတ်စနစ်နဲ့ ကားတစ်စီးကို မောင်းနှင်တဲ့အခါ အရေးပေါ်အခြေအနေမှာ ရပ်ချင်ရင် ဘရိတ်ကို ဘယ်လိုအသုံးပြုသင့်လဲ။",
    "options": [
      {
        "th": "เหยียบเบรกอย่างช้าๆ แต่เต็มที่",
        "en": "Apply the brakes slowly but fully.",
        "my": "ဘရိတ်ကို ဖြည်းဖြည်းချင်း အပြည့်သွင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหยียบเบรกอย่างค่อยๆ และช้าๆ",
        "en": "Step on the brakes gently and slowly.",
        "my": "ဘရိတ်ကို ဖြည်းညှင်းစွာ ဖြည်းဖြည်းချင်းနင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหยียบเบรกอย่างรวดเร็วและเต็มที่",
        "en": "Apply the brakes quickly and fully.",
        "my": "ဘရိတ်ကို လျင်မြန်ပြီး အပြည့်သုံးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหยียบเบรกอย่างค่อยๆ อย่างรวดเร็ว",
        "en": "Apply the brakes slowly and quickly.",
        "my": "ဘရိတ်ကို ဖြည်းညှင်းစွာနှင့် မြန်မြန် ထားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 324,
    "category": "safe_driving",
    "image": null,
    "q_th": "สิ่งที่ผู้ขับรถควรทำเมื่อเห็นคนยืนบนฟุตบาทและแสดงท่าทีจะข้ามถนนตรงทางข้าม",
    "q_en": "What should a driver do when he sees someone standing on the sidewalk and showing signs of crossing the road at a pedestrian crossing?",
    "q_my": "၎) လမ်းဖြတ်ကူးသူတစ်ဦးက လမ်းဖြတ်ကူးတဲ့ လက္ခဏာတွေပြပြီး လမ်းဘေးမှာ ရပ်နေတဲ့ ယာဉ်မောင်းတစ်ယောက်ကို တွေ့တဲ့အခါ ဘာလုပ်သင့်သလဲ။",
    "options": [
      {
        "th": "ขับรถตามหลังท้ายคันหน้าอย่างกระชั้นชิดโดยไม่หยุดให้คนข้ามถนน",
        "en": "Driving closely behind the car in front without stopping to let people cross the road.",
        "my": "လူတွေကို လမ်းဖြတ်ကူးဖို့ မရပ်ဘဲ ရှေ့ကားနောက်ကို အနီးကပ် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรเตือนคนที่จะข้ามถนนและเร่งความเร็วผ่านไป",
        "en": "Honk your horn to warn people crossing the road and speeding past.",
        "my": "လမ်းဖြတ်ကူးသူများနှင့် အရှိန်လွန်နေသူများကို သတိပေးရန် သင့်ဟွန်းကို ဟွန်းတီးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แตะเบรกเตือนให้รถหลังรู้ว่าท่านกำลังจะหยุดรถ และหยุดรถตรงทางข้าม",
        "en": "Tap the brakes to alert the vehicle behind you that you are about to stop. and stopped the car at the crossing",
        "my": "သင်ရပ်တန့်တော့မည့်ယာဉ်ကို သင့်နောက်မှသတိပေးရန်အတွက် ဘရိတ်ကို တို့ပါ။ လမ်းဖြတ်ကူးတဲ့နေရာမှာ ကားကိုရပ်လိုက်တယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถแซงคันที่จอดรถให้คนข้ามและขับผ่านไปโดยเร็ว",
        "en": "Drive past cars that are parking to let people cross and drive past quickly.",
        "my": "လူများဖြတ်ကျော်ပြီး အမြန်ဖြတ်ကျော်နိုင်စေရန် ပါကင်ထိုးထားသော အတိတ်ကားများကို မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 325,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อขับเข้าใกล้บริเวณทางข้ามหน้าโรงเรียน ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When driving near the crossing area in front of the school. What should the driver do?",
    "q_my": "၎) ကျောင်းရှေ့လမ်းကူး အနီးတွင် ကားမောင်းသည့်အခါ၊ ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ลดความเร็วลงและเพิ่มความระมัดระวัง",
        "en": "Slow down and be more careful.",
        "my": "အရှိန်လျှော့ပြီး ပိုသတိထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "พยายามใช้ความเร็วคงที่ในการผ่านบริเวณนั้น",
        "en": "Try to use a constant speed to pass through the area.",
        "my": "ဧရိယာဖြတ်ကျော်ရန် အဆက်မပြတ်အရှိန်ကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณเตือนผู้คนในละแวกนั้น",
        "en": "Give a warning to people in the area.",
        "my": "ရပ်ကွက်နေပြည်သူများအား သတိပေးချက်ထုတ်ပြန်ထားသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถชิดขอบทางด้านซ้ายด้วยความระมัดระวัง",
        "en": "Drive carefully to the left edge.",
        "my": "ဘယ်ဘက်အစွန်းကို ဂရုတစိုက်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 326,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากไปถึงที่เกิดเหตุเป็นคนแรกในสถานการณ์ที่มีคนบาดเจ็บรุนแรง เมื่อได้ทำการเปิดไฟฉุกเฉินและตรวจสอบว่าเครื่องยนต์ดับเรียบร้อยแล้ว ควรปฏิบัติอย่างไรต่อไป",
    "q_en": "If you are the first to arrive at the scene of a situation where someone is seriously injured. When turning on the emergency lights and checking that the engine has turned off. What should I do next?",
    "q_my": "အကယ်၍ သင်သည် တစ်စုံတစ်ဦး အပြင်းအထန် ဒဏ်ရာရသွားသော အခင်းဖြစ်ပွားရာနေရာကို ပထမဆုံးရောက်ရှိသူဖြစ်ပါက။ အရေးပေါ်မီးများကိုဖွင့်ပြီး အင်ဂျင်ပိတ်သွားသည့်အခါ စစ်ဆေးပါ။ ငါဘာဆက်လုပ်ရမလဲ။",
    "options": [
      {
        "th": "เคลื่อนย้ายผู้บาดเจ็บออกจากรถ",
        "en": "Move the injured person out of the vehicle.",
        "my": "ဒဏ်ရာရသူအား ကားပေါ်မှ ရွှေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ติดต่อรถช่วยเหลือฉุกเฉิน",
        "en": "Contact emergency assistance",
        "my": "အရေးပေါ်အကူအညီကို ဆက်သွယ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หยุดรถคันอื่นๆ และขอความช่วยเหลือจากคนขับรถ",
        "en": "Stop other cars and ask for help from the driver",
        "my": "အခြားကားများကို ရပ်ပြီး ယာဉ်မောင်းထံမှ အကူအညီတောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พยายามให้ผู้บาดเจ็บดื่มอะไรบางอย่าง",
        "en": "Try to get the injured person to drink something.",
        "my": "ဒဏ်ရာရသူကို တစ်ခုခုသောက်ခိုင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 327,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะที่ขับรถอยู่นั้น หากมีรถขับตามหลังมาในระยะกระชั้นชิดท่านควรปฏิบัติอย่างไร",
    "q_en": "While driving If there is a car driving behind at a close distance, what should you do?",
    "q_my": "၎) ကားမောင်းနေစဉ် အနီးကပ်အကွာအဝေးတွင် ကားနောက်မှ မောင်းနှင်လာပါက ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "เปิดไฟเลี้ยวซ้าย และโบกมือให้รถทางด้านหลังแซง",
        "en": "Turn on the left turn signal and waved his hand to let the car behind him pass.",
        "my": "ဘယ်ဘက်အကွေ့အချက်ပြကိုဖွင့်ပြီး သူ့နောက်ကကားကို ဖြတ်သွားနိုင်အောင် လက်ကိုဝှေ့ယမ်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วลง โดยเพิ่มระยะห่างจากรถด้านหน้าเพื่อให้มีระยะหยุดรถเพียงพอ",
        "en": "Reduce your speed, increasing your distance from the vehicle in front to allow sufficient stopping distance.",
        "my": "လုံလောက်သော ရပ်တန့်ထားသော အကွာအဝေးကို ခွင့်ပြုရန် သင့်အမြန်နှုန်းကို လျှော့ချပါ၊ ရှေ့ယာဉ်နှင့် အကွာအဝေးကို တိုးမြှင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เคลื่อนที่ไปติดด้านซ้ายและเส้นกลางของถนน",
        "en": "Move to the left and center lines of the road.",
        "my": "လမ်း၏ ဘယ်ဘက်နှင့် အလယ်မျဉ်းများကို ရွှေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพิกเฉยต่อคนขับรถด้านหลัง และขับต่อไปด้วยความเร็วภายใต้ที่กฎหมายกำหนด",
        "en": "Ignore the driver behind you. and continue driving at a speed within the limits of the law",
        "my": "သင့်နောက်ကယာဉ်မောင်းကို လျစ်လျူရှုပါ။ ဥပဒေဘောင်အတွင်းမှ အရှိန်ဖြင့် ဆက်လက်မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 328,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000393.webp",
    "q_th": "เมื่อรถคันสีขาวเปิดไฟเลี้ยวขวาเพื่อขอทางดังรูป รถคันสีแดงต้องปฏิบัติอย่างไร",
    "q_en": "When the white car turns on the right turn signal to ask for directions as shown in the picture. What should you do with a red car?",
    "q_my": "အဖြူရောင်ကားသည် ညာဖက်လှည့်အချက်ပြသည့်အခါ ပုံတွင်ပြထားသည့်အတိုင်း လမ်းညွှန်ချက်တောင်းပါ။ ကားအနီနဲ့ ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ใช้สัญญาณแตรเตือน",
        "en": "Use the warning horn signal.",
        "my": "သတိပေးဟွန်းအချက်ပြကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วขึ้น",
        "en": "speed up",
        "my": "အရှိန်မြှင့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วลง",
        "en": "slow down",
        "my": "နှေးကွေး",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟสูงเตือน",
        "en": "Turn on high beam warning",
        "my": "မြင့်မားသောအလင်းသတိပေးချက်ကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 329,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดคือการกระทำที่ถูกต้องก่อนขับรถ",
    "q_en": "Which is the correct action before driving?",
    "q_my": "ကားမမောင်းခင် ဘယ်ဟာက မှန်ကန်သလဲ။",
    "options": [
      {
        "th": "นางสาว ค. อดนอนก่อนขับรถ",
        "en": "Miss K. lacked sleep before driving.",
        "my": "Miss K. ကားမမောင်းခင် အိပ်ရေးပျက်ခဲ့တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นางสาว ก. ดื่มเครื่องดื่มแอลกอฮอล์ก่อนขับรถ",
        "en": "Miss A. drank alcohol before driving.",
        "my": "A. ကားမမောင်းခင် အရက်သောက်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นาย ข ได้ยาเบาหวานแบบฉีดจึงหยุดขับรถ",
        "en": "Mr. B received injections of diabetes medicine and stopped driving.",
        "my": "မစ္စတာ B သည် ဆီးချိုဆေးကို ထိုးပေးပြီး ကားမမောင်းဘဲ ရပ်လိုက်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "นางสาว ข. ทานยาแก้แพ้ก่อนขับรถ",
        "en": "Miss K. took antihistamines before driving.",
        "my": "ကားမမောင်းခင် Miss K.",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 330,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้ หากผู้ขับขี่ปฏิบัติจะไม่ช่วยลดจุดบอดได้",
    "q_en": "Which of the following? If the driver does this, it will not help reduce blind spots.",
    "q_my": "၎) အောက်ပါတို့ထဲမှ ဘယ်ဟာလဲ။ ယာဉ်မောင်းက ဒီလိုလုပ်ရင် မျက်မမြင်အစက်အပြောက်တွေကို လျော့ပါးစေမှာ မဟုတ်ပါဘူး။",
    "options": [
      {
        "th": "ติดตั้งเบรกที่มีสมรรถนะสูง",
        "en": "Equipped with high performance brakes.",
        "my": "စွမ်းဆောင်ရည်မြင့် ဘရိတ်များ တပ်ဆင်ထားသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขณะถอยหลัง ควรให้แน่ใจว่าไม่มีคนหรือสิ่งของอยู่ข้างหลัง",
        "en": "When reversing, make sure there are no people or objects behind you.",
        "my": "နောက်ပြန်လှည့်သည့်အခါ၊ သင့်နောက်တွင် လူ သို့မဟုတ် အရာဝတ္ထုများ မရှိကြောင်း သေချာပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปรับกระจกมองข้างและมองหลังให้เหมาะสม",
        "en": "Adjust the side and rear view mirrors appropriately.",
        "my": "ဘေးနှင့် နောက်ကြည့်မှန်များကို သင့်လျော်သလို ချိန်ညှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นั่งท่าขับรถที่ถูกต้อง",
        "en": "Sit in the correct driving position.",
        "my": "မှန်ကန်သော အနေအထားတွင် ထိုင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 331,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะที่รถบรรทุกขนาดใหญ่กำลังจะแซงรถของท่าน ท่านควรปฏิบัติอย่างไร",
    "q_en": "While a large truck is about to overtake your car. What should you do?",
    "q_my": "ကုန်တင်ကားကြီးတစ်စီးက သင့်ကားကိုဖြတ်သွားတော့မည်။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "เร่งความเร็ว",
        "en": "Accelerate",
        "my": "အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รักษาความเร็วให้คงที่",
        "en": "Maintain a constant speed",
        "my": "အဆက်မပြတ် အရှိန်ထိန်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็ว",
        "en": "reduce speed",
        "my": "အရှိန်လျှော့",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปลี่ยนทิศทาง",
        "en": "change direction",
        "my": "ဦးတည်ချက်ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 332,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากท่านขับรถอยู่ในความเร็วที่กฎหมายกำหนดและมีรถด้านหลังพยายามจะทำการแซง ท่านควรปฏิบัติอย่างไร",
    "q_en": "If you are driving at the legal speed and a car behind is trying to overtake you. What should you do?",
    "q_my": "အကယ်၍ သင်သည် ဥပဒေအတိုင်း အရှိန်ဖြင့် မောင်းနှင်နေပါက နောက်မှ ကားသည် သင့်အား ကျော်တက်ရန် ကြိုးစားနေပါသည်။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "เร่งความเร็วเพื่อทิ้งระยะจากรถด้านหลัง",
        "en": "Accelerate to gain distance from the car behind you.",
        "my": "သင့်နောက်မှ ကားနှင့် အကွာအဝေးရရှိရန် အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถเข้าใกล้รถคันหน้า เพื่อให้รถด้านหลังไม่มีพื้นที่ในการแซง",
        "en": "Driving close to the car in front So that the car behind has no space to overtake.",
        "my": "ရှေ့ကားနှင့် နီးကပ်စွာ မောင်းနှင်ပါက နောက်ကားသည် ကျော်တက်ရန် နေရာမရှိပေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รักษาระยะและให้รถด้านหลังทำการแซง",
        "en": "Keep your distance and allow the car behind you to overtake.",
        "my": "သင်၏အကွာအဝေးကိုထိန်းပြီး သင့်နောက်မှကားကို ကျော်တက်ခွင့်ပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "โบกมือให้รถด้านหลังแซงได้เมื่อเห็นว่าปลอดภัย",
        "en": "Wave your hand to allow vehicles behind you to pass when it is safe to do so.",
        "my": "ထိုသို့ပြုလုပ်ရန် အန္တရာယ်ကင်းသည့်အချိန်တွင် သင့်နောက်မှယာဉ်များကို ဖြတ်သန်းခွင့်ပြုရန် သင့်လက်ကို ဝှေ့ယမ်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 333,
    "category": "safe_driving",
    "image": null,
    "q_th": "การเคลื่อนย้ายผู้บาดเจ็บโดยผู้ช่วยเหลือสองคน เหมาะกับผู้ป่วยแบบใด",
    "q_en": "Moving the injured person by two helpers. Suitable for what kind of patients?",
    "q_my": "ဒဏ်ရာရသူအား ကူညီသူနှစ်ဦးဖြင့် ရွှေ့ပြောင်းပေးခြင်းသည် မည်သို့သော လူနာများအတွက် သင့်လျော်သနည်း။",
    "options": [
      {
        "th": "สำหรับผู้บาดเจ็บที่ไม่รู้สึกตัว",
        "en": "For injured people who are unconscious",
        "my": "သတိလစ် ဒဏ်ရာရသူတွေ အတွက်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหมาะสำหรับผู้ป่วยที่รู้สึกตัวดี",
        "en": "Suitable for patients who feel well.",
        "my": "ဝေဒနာရှင်များအတွက် သင့်လျော်ပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้บาดเจ็บที่มีน้ำหนักน้อย",
        "en": "The injured person is underweight.",
        "my": "ဒဏ်ရာရသူသည် ကိုယ်အလေးချိန်မပြည့်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหมาะที่จะใช้ในกรณีฉุกเฉิน",
        "en": "Suitable for use in emergencies.",
        "my": "အရေးပေါ်အခြေအနေများတွင် အသုံးပြုရန် သင့်တော်ပါသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 334,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากเห็นคนพิการกำลังข้ามถนน ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "If you see a disabled person crossing the road What should the driver do?",
    "q_my": "၎) မသန်စွမ်းသူတစ်ဦး လမ်းဖြတ်ကူးနေတာကို တွေ့ရင် ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ลดความเร็วและกะพริบไฟสูงใส่คนพิการ",
        "en": "Slow down and flash your high beams at a disabled person.",
        "my": "မသန်စွမ်းသူတစ်ဦးကို အရှိန်လျှော့ပြီး အမြင့်တန်းများကို မီးညှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดและให้สัญญาณแตรจนกว่าคนพิการข้ามจนพ้นทาง",
        "en": "Stop and signal the horn until the disabled person is clear of the crossing.",
        "my": "မသန်စွမ်းသူသည် လမ်းဖြတ်ကူးခြင်းမှ ကင်းစင်သည်အထိ ရပ်ပြီး ဟွန်းကို အချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถให้คนพิการข้ามผ่านทางไปก่อน",
        "en": "Stop the car to let the disabled person cross the road first.",
        "my": "မသန်စွမ်းသူကို လမ်းဖြတ်ကူးရန် ကားကိုရပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เร่งความเร็วและขับอ้อมไปทางด้านขวาของคนพิการ",
        "en": "Accelerate and drive around the right side of the disabled person.",
        "my": "မသန်စွမ်းသူ၏ ညာဘက်ခြမ်းကို အရှိန်မြှင့်ပြီး မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 335,
    "category": "safe_driving",
    "image": null,
    "q_th": "วิธีเคลื่อนย้ายผู้บาดเจ็บ แบบนั่งบนมือทั้งสี่ที่จับประสานกันเป็นแคร่หรือยกโดยใช้เก้าอี้ เหมาะสำหรับผู้บาดเจ็บแบบใด",
    "q_en": "How to move the injured person Sitting on four hands held together to form a litter or being lifted using a chair. Suitable for what kind of injuries?",
    "q_my": "ဒဏ်ရာရသူအား အမှိုက်ပုံသဏ္ဍာန်ပြုလုပ်ရန် လက်လေးချောင်းပေါ်တွင် ချိတ်တွဲ၍ထိုင်ခြင်း သို့မဟုတ် ကုလားထိုင်ကို အသုံးပြု၍ မြှောက်ခြင်းအား မည်ကဲ့သို့ ရွှေ့ရမည်နည်း။ ဘယ်လိုဒဏ်ရာမျိုးနဲ့ သင့်တော်လဲ။",
    "options": [
      {
        "th": "ผู้บาดเจ็บที่ไม่รู้สึกตัว",
        "en": "injured person who is unconscious",
        "my": "သတိလစ် ဒဏ်ရာရရှိသူ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้บาดเจ็บที่ลำตัว หรือกระดูกหัก",
        "en": "injured person in the torso or broken bones",
        "my": "ဒဏ်ရာရသူ သို့မဟုတ် အရိုးကျိုးခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้บาดเจ็บในกรณีฉุกเฉิน",
        "en": "injured person in emergency",
        "my": "ဒဏ်ရာရသူ အရေးပေါ်အခြေအနေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้บาดเจ็บที่ขาเจ็บ แต่รู้สึกตัวดี และสามารถใช้แขนทั้งสองข้างได้",
        "en": "injured person with injured leg But I feel good. and can use both arms",
        "my": "ဒဏ်ရာရသူ ခြေထောက် ဒဏ်ရာရပေမယ့် နေလို့ကောင်းတယ်။ လက်နှစ်ဖက်စလုံးကို အသုံးပြုနိုင်ပါတယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 336,
    "category": "safe_driving",
    "image": null,
    "q_th": "ท่านควรใช้สัญญาณไฟฉุกเฉินในกรณีใด",
    "q_en": "In which cases should you use emergency lights?",
    "q_my": "၎) အရေးပေါ်မီးများကို မည်သည့်ကိစ္စများတွင် အသုံးပြုသင့်သနည်း။",
    "options": [
      {
        "th": "เมื่อท่านต้องการขับผ่านสี่แยกไปในทิศทางตรง",
        "en": "When you want to drive through an intersection in a straight direction.",
        "my": "လမ်းဆုံလမ်းခွကို ဖြတ်ကျော်ချင်တဲ့အခါ ဖြောင့်ဖြောင့်တန်းတန်း မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อท่านขับรถด้วยความเร็วต่ำขณะที่กำลังหลงทาง",
        "en": "When you drive at low speed while lost.",
        "my": "အရှိန်နည်းနည်းနဲ့ မောင်းတဲ့အခါ ပျောက်သွားတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อท่านขับรถด้วยความเร็วต่ำเนื่องจากฝนตกหนัก",
        "en": "When you drive at low speed due to heavy rain.",
        "my": "မိုးသည်းထန်မှုကြောင့် အရှိန်နည်းနည်းနဲ့ မောင်းတဲ့အခါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อรถของท่านเสีย หรือ เกิดอุบัติเหตุ",
        "en": "When your car breaks down or has an accident.",
        "my": "သင့်ကား ပြိုကျချိန် သို့မဟုတ် မတော်တဆမှုဖြစ်သည့်အခါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 337,
    "category": "safe_driving",
    "image": null,
    "q_th": "ความหมายของคำว่า \"ความเร็วที่ปลอดภัย\" ข้อใดถูกต้องที่สุด",
    "q_en": "The meaning of the word Which \"safe speed\" is the most accurate?",
    "q_my": "ဟူသော စကားလုံး၏ အဓိပ္ပါယ်မှာ မည်သည့် \"လုံခြုံသော မြန်နှုန်း\" သည် အမှန်ကန်ဆုံးဖြစ်သနည်း။",
    "options": [
      {
        "th": "ความเร็วที่เหมาะสมกับสภาพถนน สภาพอากาศ สภาพการจราจร ซึ่งเป็นความเร็วที่ไม่ก่ออันตรายแก่ผู้อื่น",
        "en": "A speed that is appropriate for road conditions, weather conditions, and traffic conditions, which is a speed that does not cause harm to others.",
        "my": "လမ်းအခြေအနေ၊ ရာသီဥတုအခြေအနေနှင့် ယာဉ်အသွားအလာအခြေအနေများအတွက် သင့်လျော်သောအမြန်နှုန်းဖြစ်ပြီး အခြားသူများကို အန္တရာယ်မဖြစ်စေသော အမြန်နှုန်းတစ်ခုဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ความเร็วสูงสุดที่สามารถขับได้",
        "en": "Maximum speed that can be driven",
        "my": "မောင်းနှင်နိုင်သော အမြင့်ဆုံးအမြန်နှုန်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความเร็วที่ผู้ขับขี่คิดว่าปลอดภัย",
        "en": "The speed that the driver considers safe",
        "my": "ယာဉ်မောင်းသူသည် အန္တရာယ်ကင်းသည်ဟု ယူဆသော အရှိန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความเร็วที่กฎหมายกำหนด",
        "en": "Speed set by law",
        "my": "ဥပဒေအရ သတ်မှတ်ထားတဲ့ အရှိန်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 338,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ใช่มารยาทที่ดีในการแซงหรือเปลี่ยนช่องทางเดินรถ",
    "q_en": "Which is not good etiquette for overtaking or changing lanes?",
    "q_my": "ကျော်တက်ခြင်း သို့မဟုတ် လမ်းပြောင်းခြင်းအတွက် ဘယ်ဟာက မကောင်းတဲ့ ကျင့်ဝတ်လဲ။",
    "options": [
      {
        "th": "ถนนยิ่งแคบยิ่งต้องขับช้าๆ และแซงด้วยความระมัดระวัง",
        "en": "The narrower the road, the more slowly you have to drive. and overtake with caution",
        "my": "လမ်းကျဉ်းလေလေ ဖြည်းညင်းစွာ မောင်းနှင်ရလေဖြစ်သည်။ သတိနှင့် ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่แซงในที่คับขันหรือเขตห้ามแซง",
        "en": "Do not overtake in tight places or overtaking zones.",
        "my": "ကြပ်သောနေရာများနှင့် ကျော်တက်သည့်နေရာများတွင် မကျော်ပါနှင့်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณไฟเลี้ยว ก่อนแซงทุกครั้ง",
        "en": "Give a turn signal before overtaking every time",
        "my": "အချိန်တိုင်းမကျော်မီ ကွေ့အချက်ပြပေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อแซงรถคันหน้าแล้วปาดหน้าชิดซ้ายทันที",
        "en": "When overtaking the car in front, immediately cut in front of you to the left.",
        "my": "ရှေ့ကားကို ကျော်တက်သောအခါ၊ ရှေ့မှ ဘယ်ဘက်သို့ ချက်ချင်းဖြတ်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 339,
    "category": "safe_driving",
    "image": null,
    "q_th": "ทัศนคติและจิตสำนึกในการขับรถอย่างปลอดภัยของผู้ขับรถคืออะไร",
    "q_en": "What is the driver's attitude and conscience for safe driving?",
    "q_my": "အန္တရာယ်ကင်းစွာ မောင်းနှင်နိုင်ရေးအတွက် ယာဉ်မောင်း၏ သဘောထားနှင့် ကြံဆမှုကား အဘယ်နည်း။",
    "options": [
      {
        "th": "ขับรถช้า ใจเย็น",
        "en": "Drive slowly, be calm.",
        "my": "ဖြည်းဖြည်းမောင်းပါ၊ စိတ်အေးအေးထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถดีไม่เกิดอุบัติเหตุ",
        "en": "Drive well, no accidents.",
        "my": "ကောင်းစွာ မောင်းနှင်ပါ၊ ယာဉ်တိုက်မှု မရှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถเก่งคล่องแคล่ว",
        "en": "Driving skillfully",
        "my": "ကျွမ်းကျင်စွာ မောင်းနှင်ခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถอย่างมีสติเคร่งครัดวินัยจราจรแสดงออกถึงมารยาทและน้ำใจ",
        "en": "Drive mindfully and strictly adhere to traffic discipline, showing manners and consideration.",
        "my": "ယာဉ်စည်းကမ်း၊ အမူအကျင့်၊ အမူအကျင့်များကို ပြသ၍ သတိရှိရှိ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 340,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดถูกต้อง",
    "q_en": "Which is correct?",
    "q_my": "ဘယ်ဟာမှန်လဲ။",
    "options": [
      {
        "th": "ไม่ควรเติมน้ำมันหล่อลื่นลงไปผสมในน้ำมันเชื้อเพลิง",
        "en": "Lubricating oil should not be added to the fuel.",
        "my": "လောင်စာဆီတွင် ချောဆီမထည့်သင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "การเติมน้ำมันควรเติมในช่วงกลางวันเท่านั้น",
        "en": "Refueling should only be done during the daytime.",
        "my": "နေ့ခင်းဘက်တွင်သာ ဆီဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำมันที่แพงคือน้ำมันที่ดีที่สุด",
        "en": "Expensive oil is the best oil.",
        "my": "စျေးကြီးသောဆီသည် အကောင်းဆုံးဆီဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมน้ำมันค่าออกเทน 95 แทนออกเทน 91 ไม่ได้",
        "en": "Can't fill up with 95 octane gas instead of 91 octane.",
        "my": "91 octane အစား 95 octane ဓာတ်ငွေ့ဖြင့် မဖြည့်နိုင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 341,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดกล่าวถูกต้อง",
    "q_en": "Which of the following is correct?",
    "q_my": "အောက်ပါအချက်များထဲမှ ဘယ်ဟာမှန်ပါသလဲ။",
    "options": [
      {
        "th": "ผู้ป่วยโรคเบาหวาน ไม่สามารถขับรถยนต์ส่วนตัวได้",
        "en": "Diabetics Unable to drive a personal car",
        "my": "ဆီးချိုသမားများသည် ကိုယ်ပိုင်ကားမမောင်းနိုင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ป่วยที่มีสายตาสั้น ไม่สามารถขับรถยนต์สาธารณะได้",
        "en": "Patients with nearsightedness Unable to drive public vehicles",
        "my": "အနီးမှုန်သောလူနာများသည် အများသူငှာယာဉ်များ မမောင်းနှင်နိုင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ป่วยที่ติดเชื้อ HIV ไม่สามารถขับรถได้",
        "en": "HIV-infected patients cannot drive.",
        "my": "HIV ပိုးရှိသူများသည် ကားမမောင်းနိုင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ป่วยโรคความดันโลหิตสูงขณะปรากฏอาการไม่ควรขับรถ",
        "en": "Patients with high blood pressure when symptoms appear should not drive.",
        "my": "လက္ခဏာများပေါ်လာသောအခါ သွေးတိုးလူနာများ ကားမမောင်းသင့်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 342,
    "category": "safe_driving",
    "image": null,
    "q_th": "ก่อนทำการแซงรถบรรทุก ควรเว้นระยะห่างให้มากเพราะเหตุใด",
    "q_en": "Before overtaking the truck. Why should you keep a large distance?",
    "q_my": "ထရပ်ကားကို မကျော်မှီ။ ဘာလို့ အကွာအဝေးကြီးကို ထားသင့်တာလဲ။",
    "options": [
      {
        "th": "เพื่อให้มีพื้นที่ให้รถคันอื่นสามารถแซงได้",
        "en": "To allow space for other cars to overtake.",
        "my": "အခြားကားများကို ကျော်တက်ရန် နေရာလွတ်များ ထားရှိရန်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อทัศนวิสัยในการมองเห็นได้ดีที่สุด",
        "en": "For the best visibility",
        "my": "အကောင်းဆုံးမြင်နိုင်စွမ်းအတွက်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพื่อให้มีพื้นที่ในกรณีที่รถบรรทุกหยุด",
        "en": "To provide space in case the truck stops.",
        "my": "ထရပ်ကားရပ်သည့်အခါ နေရာလွတ်ပေးရန်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อให้มีพื้นที่ในการเร่งความเร็ว โดยจะช่วยให้ทำการแซงได้เร็วขึ้นในช่วงทางโค้งที่เป็นจุดบอด",
        "en": "To have space to accelerate It will help make overtaking faster during curves that are blind spots.",
        "my": "အရှိန်မြှင့်ရန် နေရာရှိရန် ၎င်းသည် မျက်မမြင်အစက်အပြောက်များဖြစ်သည့် လမ်းကွေ့များအတွင်း အမြန်ကျော်တက်ရန် ကူညီပေးပါမည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 343,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากมีผู้ขับรถกำลังกลับรถเข้ามาในช่องทางที่ท่านขับรถอยู่ ท่านจะตัดสินใจทำอย่างไร",
    "q_en": "If there is a driver making a U-turn into the lane in which you are driving. What will you decide to do?",
    "q_my": "၎) ယာဉ်မောင်းသည် သင်မောင်းနှင်နေသည့်လမ်းကြားသို့ ဂငယ်ကွေ့ကွေ့၍ဖြစ်စေ၊ ဘာလုပ်ဖို့ ဆုံးဖြတ်မှာလဲ။",
    "options": [
      {
        "th": "หงุดหงิด บีบแตรไล่ แต่หยุดรถให้",
        "en": "Irritated, I honked my horn but stopped the car.",
        "my": "စိတ်တိုတိုနဲ့ ဟွန်း ဟွန်းတီးပေမယ့် ကားကို ရပ်လိုက်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หลบรถโดยแซงไปอีกช่องทางหนึ่ง",
        "en": "Dodge the car by passing in another lane.",
        "my": "အခြားလမ်းကြားတွင် ဖြတ်သန်းကာ ကားကိုရှောင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วเพื่อขอทางไม่ให้กลับรถ",
        "en": "Accelerate to ask for directions so as not to make a U-turn.",
        "my": "ဂငယ်ကွေ့မကွေ့မိစေရန် လမ်းညွှန်ချက်တောင်းရန် အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มีน้ำใจชะลอความเร็วและให้ทางแก่ผู้กลับรถ",
        "en": "Be considerate in slowing down and giving way to those making a U-turn.",
        "my": "ဂငယ်ကွေ့ကွေ့သူများကို အရှိန်လျှော့၍ လမ်းပေးရာတွင် သတိထားပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 344,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถเข้าสู่ทางม้าลายแล้วพบว่ามีคนนั่งรถเข็นรอข้ามถนน ท่านควรปฏิบัติอย่างไร",
    "q_en": "When you drive into a zebra crossing and find that there is a person in a wheelchair waiting to cross the road. What should you do?",
    "q_my": "သင်မြင်းကျားလမ်းကူးသို့ မောင်းလာသောအခါ လမ်းဖြတ်ကူးရန် ဘီးတပ်ကုလားထိုင်ဖြင့် လူတစ်ယောက် ရှိနေသည်ကို တွေ့ရှိရသည်။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "โบกมือให้คนนั่งรถเข็นหยุดรอ",
        "en": "Wave to the person in the wheelchair to stop and wait.",
        "my": "ရပ်ပြီး စောင့်ဆိုင်းရန် ဘီးတပ်ကုလားထိုင်ရှိလူကို ဝှေ့ယမ်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เตรียมพร้อมที่จะหยุด",
        "en": "Get ready to stop",
        "my": "ရပ်ရန် အသင့်ပြင်ထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับต่อไป",
        "en": "Keep driving.",
        "my": "ဆက်မောင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "โบกมือให้คนนั่งรถเข็นข้ามได้",
        "en": "Wave to people in wheelchairs to cross.",
        "my": "ဖြတ်ကူးဖို့ ဘီးတပ်ကုလားထိုင်နဲ့ လူတွေကို ဝှေ့ယမ်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 345,
    "category": "safe_driving",
    "image": null,
    "q_th": "การแก้ไขสถานการณ์ จะต้องตั้งสมมุติฐานไว้ตามข้อใด",
    "q_en": "Resolving the situation What assumptions must be made?",
    "q_my": "အခြေအနေတွေကို ဖြေရှင်းရာမှာ ဘယ်လိုယူဆချက်တွေကို လုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "การป้องกันไว้ก่อน เพื่อตัดสินใจแก้ไขสถานการณ์",
        "en": "precaution to decide to resolve the situation",
        "my": "အခြေအနေကို ဖြေရှင်းရန် ကြိုတင်သတိထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่จำเป็นต้องคิดอะไร เพื่อจะเกิดอุบัติเหตุค่อยแก้ไขปัญหาทันที",
        "en": "No need to think about anything. In order to have an accident, solve the problem immediately.",
        "my": "ဘာမှ စဉ်းစားနေဖို့ မလိုပါဘူး။ မတော်တဆမှုဖြစ်ဖို့အတွက် ပြဿနာကို ချက်ချင်းဖြေရှင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะต้องปลอดภัยไว้ก่อน โดยไม่นึกถึงรถคันอื่นบนท้องถนน",
        "en": "Must be safe first. without thinking of other cars on the road",
        "my": "လုံခြုံအောင် အရင်လုပ်ရမယ်။ လမ်းမှာ တခြားကားတွေကို မစဉ်းစားဘဲနဲ့",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถไปตามปกติเพราะรถเรามีการป้องกันอุบัติเหตุที่ดีอยู่แล้ว",
        "en": "Drive normally because our cars already have good accident prevention.",
        "my": "ကျွန်ုပ်တို့၏ကားများသည် ယာဉ်မတော်တဆမှုကို ကြိုတင်ကာကွယ်ပြီးသားဖြစ်သောကြောင့် ပုံမှန်အတိုင်းမောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 346,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่ออยู่ในสถานที่เกิดเหตุ สามารถช่วยผู้บาดเจ็บที่หมดสติได้อย่างไร",
    "q_en": "When at the scene of the incident How can one help an injured person who is unconscious?",
    "q_my": "၎) အခင်းဖြစ်ပွားတဲ့နေရာမှာ သတိလစ်နေတဲ့ ဒဏ်ရာရသူတွေကို ဘယ်လိုကူညီမလဲ။",
    "options": [
      {
        "th": "ตรวจสอบว่าหายใจเป็นปกติหรือไม่",
        "en": "Check if breathing is normal.",
        "my": "အသက်ရှုပုံမှန်ရှိမရှိ စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ถ่ายรูปสถานที่เกิดเหตุ",
        "en": "Take photos of the crime scene",
        "my": "မှုခင်းမြင်ကွင်းဓာတ်ပုံရိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้น้ำเย็นสาดใส่หน้าผู้บาดเจ็บ",
        "en": "Use cold water to splash the injured person's face.",
        "my": "ဒဏ်ရာရသူ၏ မျက်နှာကို ရေအေးဖြင့် ဖြန်းပေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เคลื่อนย้ายผู้บาดเจ็บไปยังที่ที่สบายกว่า",
        "en": "Move the injured person to a more comfortable location.",
        "my": "ဒဏ်ရာရသူကို ပိုသက်တောင့်သက်သာရှိတဲ့ နေရာကို ရွှေ့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 347,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ควรปฏิบัติในการขับรถให้ถึงจุดหมายปลายทางอย่างปลอดภัย",
    "q_en": "Which thing should not be done to drive the car to reach the destination safely?",
    "q_my": "၎) လိုရာခရီးကို အန္တရာယ်ကင်းစွာ မောင်းနှင်ဖို့ ဘယ်အရာက မလုပ်သင့်သလဲ။",
    "options": [
      {
        "th": "ทำความคุ้นเคยกับรถที่จะขับขี่ ในกรณีที่เป็นรถที่ไม่เคยขับขี่มาก่อน",
        "en": "Familiarize yourself with the vehicle you will be driving. In the case of a car that has never been driven before",
        "my": "သင်မောင်းနှင်မည့်ယာဉ်နှင့် သင့်ကိုယ်သင် ရင်းနှီးပါ။ တခါမှ မမောင်းဖူးတဲ့ ကားမျိုး ဆိုရင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มีจิตสำนึกในการขับขี่อย่างรับผิดชอบ",
        "en": "Have awareness of driving responsibly",
        "my": "စည်းကမ်းရှိစွာ မောင်းနှင်ရန် သတိရှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พักผ่อนให้เพียงพอและไม่ดื่มสุรา",
        "en": "Get enough rest and don't drink alcohol.",
        "my": "လုံလောက်စွာ အနားယူပြီး အရက်မသောက်ပါနဲ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความเร็วสูงเพื่อให้ถึงปลายทางก่อนที่จะมืด",
        "en": "Drive at high speed to reach your destination before dark.",
        "my": "မမှောင်မီ သင်၏ဦးတည်ရာသို့ ရောက်ရန် အရှိန်ပြင်းပြင်းဖြင့် မောင်းပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 348,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อต้องใช้เบาะนั่งสำหรับเด็กแบบหันหน้าเข้าหาเบาะรถบนที่นั่งด้านหน้าซึ่งมีระบบถุงลมนิรภัยติดตั้งอยู่ ต้องปฏิบัติอย่างไรก่อนออกเดินทาง",
    "q_en": "When using a forward-facing child restraint system in a front seat equipped with an airbag system. What must be done before leaving?",
    "q_my": "လေအိတ်စနစ်ပါရှိသော ရှေ့ထိုင်ခုံတွင် ရှေ့မျက်နှာစာ ကလေးထိန်းစနစ်ကို အသုံးပြုသည့်အခါ။ မထွက်ခင် ဘာတွေလုပ်ရမလဲ။",
    "options": [
      {
        "th": "เปลี่ยนเบาะนั่งสำหรับเด็กให้หันออกไปยังหน้ารถ",
        "en": "Change the child seat to face towards the front of the car.",
        "my": "ကလေးထိုင်ခုံကို ကားရှေ့သို့ မျက်နှာမူရန် ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขอให้คนโดยสารอุ้มเด็กไว้",
        "en": "Ask the passenger to hold the child.",
        "my": "ခရီးသည်ကို ကလေးထိန်းခိုင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้เด็กนั่งที่นั่งปกติและคาดเข็มขัดนิรภัยสำหรับผู้ใหญ่",
        "en": "Put the child in a regular seat and fasten the adult seat belt.",
        "my": "ကလေးကို ပုံမှန်ထိုင်ခုံမှာထားပြီး လူကြီးထိုင်ခုံခါးပတ်ကို ပတ်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปิดการใช้ถุงลมนิรภัย",
        "en": "Disable the airbag.",
        "my": "လေအိတ်ပိတ်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 349,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะที่ท่านกำลังรอเพื่อที่จะเคลื่อนรถออกจากข้างทางเพราะเหตุใดท่านต้องระวังรถจักรยานยนต์",
    "q_en": "While you are waiting to move your vehicle off the side of the road, why do you need to be careful with motorcycles?",
    "q_my": "သင့်ယာဉ်ကို လမ်းဘေးမှ ရွှေ့ရန် စောင့်ဆိုင်းနေစဉ် မော်တော်ဆိုင်ကယ်များကို အဘယ်ကြောင့် သတိထားရန် လိုအပ်သနည်း။",
    "options": [
      {
        "th": "เพราะรถจักรยานยนต์มีสิทธิ์ใช้ทางก่อนรถยนต์เสมอ",
        "en": "Because motorcycles always have the right of way before cars.",
        "my": "အဘယ်ကြောင့်ဆိုသော် မော်တော်ဆိုင်ကယ်များသည် ကားများရှေ့တွင် အမြဲတမ်းလမ်းမှန်ရှိသောကြောင့်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพราะรถจักรยานยนต์อนุญาตให้ต้องวิ่งทางด้านขวา",
        "en": "Because motorcycles are allowed to run on the right side.",
        "my": "အဘယ်ကြောင့်ဆိုသော် မော်တော်ဆိုင်ကယ်များကို ညာဘက်ခြမ်းတွင် ပြေးဆွဲခွင့်ရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพราะรถจักรยานยนต์มีขนาดเล็กและสังเกตเห็นได้ยาก",
        "en": "Because motorcycles are small and difficult to notice.",
        "my": "မော်တော်ဆိုင်ကယ်များသည် သေးငယ်ပြီး သတိထားရခက်သောကြောင့် ဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพราะตำรวจจราจรมักใช้รถจักรยานยนต์เป็นพาหนะ",
        "en": "Because traffic police often use motorcycles as vehicles.",
        "my": "အဘယ်ကြောင့်ဆိုသော် ယာဉ်ထိန်းရဲများသည် မော်တော်ဆိုင်ကယ်များကို ယာဉ်များအဖြစ် အသုံးပြုလေ့ရှိသောကြောင့် ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 350,
    "category": "safe_driving",
    "image": null,
    "q_th": "สิ่งใดที่ผู้ขับรถควรทำเมื่อได้รับสัญญาณไฟเหลือง",
    "q_en": "What should drivers do when they receive a yellow light?",
    "q_my": "၎) ယာဉ်မောင်းများသည် အဝါရောင်အလင်းတန်းတစ်ခုရသောအခါ ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ชะลอรถและหยุดรถหลังเส้นให้หยุดรถ",
        "en": "Slow down and stop behind the stop line.",
        "my": "အရှိန်လျှော့ပြီး မှတ်တိုင်အနောက်မှာ ရပ်လိုက်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับเปลี่ยนเลนเพื่อแซงรถขึ้นไปให้พ้นสัญญาณไฟแดง",
        "en": "Change lanes to pass the car and get past the red light.",
        "my": "ကားကိုဖြတ်ပြီး မီးနီကိုဖြတ်ရန် လမ်းပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับตามคันหน้าไปโดยฝ่าสัญญาณไฟแดง",
        "en": "Follow the vehicle in front, passing the red light.",
        "my": "မီးနီကိုဖြတ်ပြီး ရှေ့ကယာဉ်နောက်ကို လိုက်သွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรเร่งรถคันหน้าให้ขับเร็วขึ้น",
        "en": "Honk the horn and accelerate the car in front to drive faster.",
        "my": "ကားဟွန်းကို ဟွန်းတီးပြီး အရှိန်မြှင့်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 351,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในการตรวจสอบสิ่งอันตรายต่างๆ รอบตัวรถขณะขับรถ ข้อใดไม่ใช่ข้อที่ควรปฏิบัติ",
    "q_en": "To check for various hazards Around the car while driving Which is not a thing that should be done?",
    "q_my": "ကားမောင်းနေစဉ် ကားပတ်ပတ်လည်တွင် အန္တရာယ်အမျိုးမျိုးကို စစ်ဆေးရန် မည်သည့်အရာက မလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ตรวจสอบจุดบอดของรถเป็นระยะๆ",
        "en": "Check your car's blind spots periodically.",
        "my": "သင့်ကား၏ မမြင်နိုင်သောနေရာများကို အခါအားလျော်စွာ စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดูกระจกเป็นระยะ",
        "en": "Look in the mirror periodically.",
        "my": "မှန်ထဲမှာ ခဏခဏကြည့်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มองไปข้างหน้าในระยะไกล 200-300 เมตร",
        "en": "Look ahead at a distance of 200-300 meters.",
        "my": "မီတာ 200-300 အကွာအဝေးကို ကြိုကြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มองป้ายโฆษณาบริเวณข้างทาง",
        "en": "Look at the billboards on the side of the road.",
        "my": "လမ်းဘေးက ကြော်ငြာဘုတ်တွေကို ကြည့်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 352,
    "category": "safe_driving",
    "image": null,
    "q_th": "สิ่งสำคัญที่สุดเมื่อเกิดอุบัติเหตุรถไฟไหม้คือข้อใด",
    "q_en": "What is the most important thing in the event of a car fire accident?",
    "q_my": "၎) ကားမီးလောင်မှုဖြစ်စဉ်မှာ အရေးကြီးဆုံးက ဘာလဲ။",
    "options": [
      {
        "th": "เปิดไฟฉุกเฉิน",
        "en": "Turn on emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติ รีบออกจากตัวรถทันที",
        "en": "Remain calm and get out of the car immediately.",
        "my": "ငြိမ်ငြိမ်လေးနေပြီး ကားပေါ်ကနေ ချက်ချင်းဆင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จอดรถข้างทาง",
        "en": "Parking on the side of the road",
        "my": "လမ်းဘေးမှာ ကားရပ်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถอดขั้วแบตเตอรี่",
        "en": "Remove the battery terminals.",
        "my": "ဘက်ထရီ terminals များကိုဖယ်ရှားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 353,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดคือวิธีป้องกันอุบัติเหตุ หากกำลังมีคนข้ามถนน",
    "q_en": "Which is a way to prevent accidents? If someone is crossing the road",
    "q_my": "ဘယ်လမ်းက မတော်တဆမှုမှ ကာကွယ်နိုင်မလဲ။ တစ်ယောက်ယောက်က လမ်းဖြတ်ကူးရင်",
    "options": [
      {
        "th": "จอดรถทันที",
        "en": "Park the car immediately.",
        "my": "ကားကို ချက်ချင်းရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพิ่มความเร็วขึ้น",
        "en": "speed up",
        "my": "အရှိန်မြှင့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การลดความเร็วลง",
        "en": "slowing down",
        "my": "အရှိန်လျှော့",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับตามปกติ",
        "en": "Drive normally",
        "my": "ပုံမှန်အတိုင်း မောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 354,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000437.webp",
    "q_th": "จากรูป หากท่านต้องการแซงรถข้างหน้า ท่านจะต้องให้สัญญาณไฟอย่างไร",
    "q_en": "From the picture, if you want to overtake the car in front How do you signal the light?",
    "q_my": "ပုံထဲကအတိုင်း ရှေ့ကားကို ကျော်တက်ချင်ရင် မီးကို ဘယ်လို အချက်ပြမလဲ။",
    "options": [
      {
        "th": "เปิดสัญญาณไฟเลี้ยวซ้ายขณะแซง",
        "en": "Turn on the left turn signal while overtaking.",
        "my": "ကျော်တက်နေစဉ် ဘယ်ဘက်ကွေ့အချက်ပြကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่จำเป็นต้องเปิดสัญญาณไฟหากรถคันหน้าขับด้วยความเร็วต่ำ",
        "en": "There is no need to turn on the lights if the vehicle in front is driving at a low speed.",
        "my": "ရှေ့ယာဉ်သည် အရှိန်အဟုန်ဖြင့် မောင်းနှင်နေပါက မီးဖွင့်ရန် မလိုအပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟเลี้ยวขวาก่อนและตามด้วยสัญญาณไฟเลี้ยวซ้ายขณะแซง",
        "en": "Turn on the right turn signal first and then the left turn signal when overtaking.",
        "my": "ညာကွေ့အချက်ပြကို အရင်ဖွင့်ပြီးမှ ကျော်တက်တဲ့အခါ ဘယ်ဘက်ကွေ့အချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟเลี้ยวขวา และแซงได้เมื่อปลอดภัย",
        "en": "Turn on the right turn signal and can overtake when safe",
        "my": "ညာဘက်ကွေ့အချက်ပြကိုဖွင့်ပြီး အန္တရာယ်ကင်းသည့်အချိန်တွင် ကျော်တက်နိုင်သည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 355,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000438.webp",
    "q_th": "ในขณะที่ท่านกำลังหยุดรอสัญญาณไฟอยู่ที่ทางแยก แล้วไฟจราจรเปลี่ยนเป็นสีเขียว ท่านควรปฏิบัติอย่างไร",
    "q_en": "While you are stopping and waiting for the light at an intersection. Then the traffic light changed to green. What should you do?",
    "q_my": "၎) လမ်းဆုံတစ်ခုတွင် ရပ်ပြီး အလင်းရောင်ကို စောင့်နေစဉ်။ နောက်တော့ မီးပွိုင့်က အစိမ်းရောင်ပြောင်းသွားတယ်။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "รอจนกว่ารถคันข้างหลังของท่านจะให้สัญญาณแตร แล้วจึงออกรถ",
        "en": "Wait until the vehicle behind you signals its horn and then pull out.",
        "my": "မင်းနောက်ကကားက ဟွန်းအချက်ပြပြီး ထွက်လာတဲ့အထိ စောင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปฏิบัติอย่างไรก็ได้ แล้วแต่ผู้ขับขี่",
        "en": "You can do whatever you want. It depends on the driver.",
        "my": "မင်းလုပ်ချင်တာလုပ်လို့ရတယ်။ ယာဉ်မောင်းအပေါ် မူတည်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถผ่านทางแยกไปโดยเร็ว เพื่อไม่ให้รถคันหลังเสียเวลา",
        "en": "Drive through the intersection quickly. So as not to waste time on the car behind you.",
        "my": "လမ်းဆုံကို အမြန်ဖြတ်မောင်းပါ။ သင့်နောက်က ကားပေါ်မှာ အချိန်မဖြုန်းဖို့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบการจราจรรอบๆ ข้างก่อน เมื่อปลอดภัยจึงออกรถ",
        "en": "Check surrounding traffic before driving off when it is safe.",
        "my": "အန္တရာယ်ကင်းသည့်အခါ မမောင်းမီ အနီးပတ်ဝန်းကျင်ရှိ ယာဉ်ကြောများကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 356,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดแสดงถึงการมีจิตสำนึกในการขับขี่อย่างปลอดภัย โดยหลีกเลี่ยงพฤติกรรมเสี่ยงภัย",
    "q_en": "Which of the following shows having awareness of safe driving? By avoiding risky behavior",
    "q_my": "ဘေးကင်းလုံခြုံစွာ မောင်းနှင်ခြင်းဆိုင်ရာ သတိရှိခြင်းကို ဖော်ပြပါရှိသည့် မည်သည့်အရာများ။ အန္တရာယ်ရှိသော အပြုအမူကို ရှောင်ကြဉ်ခြင်းဖြင့်၊",
    "options": [
      {
        "th": "ปรับแต่งท่อรถให้มีเสียงดังเกินกว่าที่กฎหมายกำหนด",
        "en": "Adjust the car's exhaust pipes to make the noise exceed the legal limit.",
        "my": "တရားဝင် ကန့်သတ်ချက်ထက် ကျော်လွန်၍ အသံဆူညံစေရန် ကား၏ အိပ်ဇောပိုက်များကို ချိန်ညှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉิน เมื่อจอดรถในที่ห้ามจอด",
        "en": "Turn on emergency lights When parking in a prohibited area",
        "my": "တားမြစ်ထားသောနေရာ၌ ကားရပ်သည့်အခါ အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดัดแปลงไฟหน้ารถให้สว่างโดยผิดจากที่กฎหมายกำหนด",
        "en": "Modifying car headlights to make them brighter than what is required by law.",
        "my": "ကားရှေ့မီးများကို ဥပဒေအရ လိုအပ်သည်ထက် ပိုမိုတောက်ပစေရန် ပြုပြင်ခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปฏิบัติตามกฎจราจรตลอดเวลาที่ขับขี่โดยไม่ต้องรอให้ตำรวจจราจรบังคับ",
        "en": "Follow traffic rules at all times while driving without waiting for the traffic police to enforce you.",
        "my": "ယာဉ်ထိန်းရဲများ လိုက်နာရမည့်အချိန်ကို စောင့်မနေဘဲ ယာဉ်စည်းကမ်း လမ်းစည်းကမ်းကို အချိန်တိုင်း လိုက်နာပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 357,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดเป็นพฤติกรรมที่ควรปฏิบัติเมื่ออยู่บนถนน",
    "q_en": "Which is the behavior that should be followed when on the road?",
    "q_my": "၎) လမ်းမှာ လျှောက်ရမယ့် အကျင့်က ဘယ်ဟာလဲ။",
    "options": [
      {
        "th": "ขับรถย้อนศรเพื่อประหยัดน้ำมัน",
        "en": "Drive in reverse to save gas.",
        "my": "ဂက်စ်ချွေတာရန် နောက်ပြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถแล้วเจอแสงแดด ยกมือขึ้นมาป้องเพื่อป้องกันแสงเข้าตา",
        "en": "Driving and seeing sunlight Raise your hand to prevent light from entering your eyes.",
        "my": "ကားမောင်းခြင်းနှင့် နေရောင်ခြည်ကိုမြင်ခြင်း သင့်မျက်လုံးထဲသို့ အလင်းရောင်ဝင်ရောက်ခြင်းမှ ကာကွယ်ရန် သင့်လက်ကို မြှောက်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถจี้ท้ายรถบรรทุกขนาดใหญ่ เพื่อป้องกันรถอื่นวิ่งสวนทางเข้ามาชน",
        "en": "Driving in the back of a large truck To prevent other cars running in the opposite direction from colliding.",
        "my": "ကုန်တင်ကားကြီး၏ နောက်ဘက်တွင် မောင်းနှင်နေသော အခြားကားများ တိုက်မိခြင်းမှ တားဆီးရန်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความเร็วไม่เกินที่กำหนด และปฏิบัติตามเครื่องหมายจราจร",
        "en": "Driving at a speed not exceeding the speed limit and follow traffic signs",
        "my": "သတ်မှတ်အမြန်နှုန်းထက် မကျော်လွန်ဘဲ အရှိန်ဖြင့် မောင်းနှင်ပြီး ယာဉ်ထိန်းအမှတ်အသားများကို လိုက်နာပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 358,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดเป็นการขับรถอย่างปลอดภัย",
    "q_en": "Which is safe driving?",
    "q_my": "၎) ဘယ်ဟာ လုံခြုံစွာ မောင်းနှင်မလဲ။",
    "options": [
      {
        "th": "เปิดไฟสูงตลอดเวลาในการขับรถเวลากลางคืน",
        "en": "Always turn on your high beams when driving at night.",
        "my": "ညဘက် ကားမောင်းတဲ့အခါ အမြင့်တန်းတွေကို အမြဲဖွင့်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เว้นระยะห่างจากรถคันหน้าในระยะที่ผู้ขับขี่สามารถหยุดรถได้ทัน",
        "en": "Keep a distance from the vehicle in front that allows the driver to stop in time.",
        "my": "ယာဉ်မောင်းကို အချိန်မီရပ်တန့်နိုင်စေမည့် ရှေ့ကားနှင့် အကွာအဝေးထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงรถคันข้างหน้าขณะเข้าโค้ง",
        "en": "Overtake the vehicle in front while entering a curve.",
        "my": "မျဉ်းကွေးတစ်ခုထဲသို့ ဝင်စဉ် ရှေ့ယာဉ်ကို ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงด้านซ้ายในถนน 2 ช่องจราจร เมื่อรถคันหน้าขับช้า",
        "en": "Passing on the left in a 2-lane road when the vehicle in front is driving slowly.",
        "my": "ရှေ့မှ မော်တော်ကားသည် ဖြည်းညှင်းစွာ မောင်းနှင်လာသောအခါ (၂) လမ်းသွားလမ်းတွင် လက်ဝဲဘက်သို့ ဖြတ်သန်းသွားသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 359,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ถูกต้องเกี่ยวกับการเปิดประตูเมื่อรถยนต์ตกน้ำ",
    "q_en": "Which is incorrect regarding opening the door when a car falls into the water?",
    "q_my": "ကားရေထဲကျသွားတဲ့အခါ တံခါးဖွင့်တာနဲ့ ပတ်သက်ပြီး ဘယ်ဟာက မှားနေလဲ။",
    "options": [
      {
        "th": "หมุนกระจกให้น้ำไหลเข้ารถเพื่อปรับความดันให้เท่ากับภายนอกรถ",
        "en": "Turn the window to let water flow into the car to equalize the pressure outside the car.",
        "my": "ကားအပြင်ဘက်ရှိ ဖိအားကို ညီမျှစေရန် ကားထဲသို့ ရေစီးဝင်စေရန် ပြတင်းပေါက်ကို လှည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปลดล็อกประตูทุกบาน",
        "en": "Unlock all doors",
        "my": "တံခါးအားလုံးကိုသော့ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดประตูเมื่อความดันภายในและภายนอกรถเท่ากัน",
        "en": "Open the door when the pressure inside and outside the vehicle is equal.",
        "my": "ယာဉ်အတွင်းနှင့် အပြင်ဘက် ဖိအားညီမျှနေသောအခါ တံခါးကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พยายามสตาร์ทเครื่องยนต์",
        "en": "Try to start the engine",
        "my": "အင်ဂျင်ကိုစတင်ရန်ကြိုးစားပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 360,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในกรณีที่ท่านขับรถทางตรงผ่านซอย ที่มีรถรอออกเป็นจำนวนมากควรปฏิบัติอย่างไร",
    "q_en": "In the case that you drive directly through the alley. Where there are a lot of cars waiting to leave, what should be done?",
    "q_my": "လမ်းကြားကိုတိုက်ရိုက်မောင်းတဲ့ကိစ္စ။ ထွက်ဖို့ စောင့်နေတဲ့ ကားတွေ အများကြီးရှိတဲ့ နေရာတွေမှာ ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "พยายามขับให้ชิดคันหน้าเพื่อไม่ให้รถในซอยแทรกออกมา",
        "en": "Try to drive close to the car in front so that cars in the alley don't come out.",
        "my": "လမ်းကြားရှိ ကားများ မထွက်စေရန် ရှေ့ကားနှင့် နီးကပ်စွာ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถผ่านซอยด้วยความเร็วเพื่อส่งสัญญาณว่าขอไปก่อน",
        "en": "Drive through the alley at speed to signal that you want to go first.",
        "my": "သင်သွားလိုကြောင်း အချက်ပြရန် လမ်းကြားကို အရှိန်ဖြင့် ဖြတ်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดทางให้รถออกจากซอยได้บ้างสลับกับรถทางตรง",
        "en": "Open the way for cars to leave the alley, alternating with cars going straight.",
        "my": "လမ်းကြားမှ မော်တော်ကားများ ထွက်ခွာရန် လမ်းဖွင့်ထားပြီး တည့်တည့်သွားနေသည့် ကားများ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรหรือให้สัญญาณไฟเตือนรถที่จะออกจากซอยก่อนขับผ่านไป",
        "en": "Honk your horn or signal your lights to warn cars about to leave the alley before driving past.",
        "my": "ကားများမမောင်းမီ လမ်းကြားမှ ထွက်ခွာမည့် ကားများကို သတိပေးရန် သင့်ဟွန်းကို ဟွန်းတီးပါ သို့မဟုတ် မီးအချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 361,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในการขับรถลงทางลาดชัน ท่านควรปฏิบัติอย่างไรเพื่อควบคุมความเร็วของรถให้มีความปลอดภัย",
    "q_en": "In driving down a steep slope What should you do to control your car's speed to be safe?",
    "q_my": "မတ်စောက်သော တောင်စောင်းကို မောင်းနှင်ရာတွင် သင့်ကား၏အရှိန်ကို လုံခြုံစေရန် သင်ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ใช้เกียร์สูงและเหยียบเบรกเต็มที่",
        "en": "Use a high gear and apply the brakes fully.",
        "my": "မြင့်မားသောဂီယာကိုအသုံးပြုပြီး ဘရိတ်ကို အပြည့်အဝအသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้เกียร์ต่ำและค่อยๆเหยียบเบรก",
        "en": "Use a low gear and slowly apply the brakes.",
        "my": "ဂီယာအနိမ့်ကိုသုံး၍ ဘရိတ်ကို ဖြည်းညှင်းစွာ အသုံးချပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้เกียร์ต่ำและหลีกเลี่ยงการใช้เบรก",
        "en": "Use a low gear and avoid using the brakes.",
        "my": "ဂီယာအနိမ့်ကို အသုံးပြုပြီး ဘရိတ်ကို ရှောင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้เกียร์สูงและค่อยๆเหยียบเบรก",
        "en": "Use a high gear and slowly apply the brakes.",
        "my": "ဂီယာအမြင့်ကိုသုံး၍ ဘရိတ်ကို ဖြည်းညှင်းစွာအသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 362,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้ถูกต้อง",
    "q_en": "Which of the following is correct?",
    "q_my": "အောက်ပါအချက်များထဲမှ ဘယ်ဟာမှန်ပါသလဲ။",
    "options": [
      {
        "th": "หากพบรถที่ขับขี่ผิดปกติ ชะลอความเร็ว เว้นระยะห่างจากรถ ไม่เข้าใกล้หรือแซงระยะกระชั้นชิด",
        "en": "If you encounter a vehicle driving erratically, slow down and keep your distance from the vehicle. Do not approach or overtake in close distance.",
        "my": "အကယ်၍ သင်သည် မှားယွင်းစွာ မောင်းနှင်နေသည့် ယာဉ်ကို ကြုံတွေ့ရပါက၊ အရှိန်လျှော့ပြီး ယာဉ်နှင့် အကွာအဝေးကို ထားပါ။ အနီးကပ်အကွာအဝေးတွင် ချဉ်းကပ်ခြင်း သို့မဟုတ် မကျော်ပါနှင့်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เมื่อผ่านสี่แยกในช่วงกลางคืน หากพบว่าไม่มีรถ ควรรีบเร่งความเร็วให้พ้นสี่แยก เพื่อไม่ให้เสียเวลา",
        "en": "When passing through an intersection at night If you find that there is no car You should quickly accelerate to get out of the intersection. In order not to waste time",
        "my": "ညဘက်လမ်းဆုံမှာ ကားမရှိလို့ ဖြတ်သွားတဲ့အခါ လမ်းဆုံကနေ အမြန်ထွက်ဖို့ အရှိန်မြှင့်သင့်တယ်။ အချိန်မဖြုန်းမိစေရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หากพบเห็นผู้ที่เมาแล้วขับให้ขับขึ้นไปปาดหน้า",
        "en": "If you see someone driving drunk, drive up and cut them off.",
        "my": "အရက်မူးပြီး ကားမောင်းတာတွေ့ရင် ကားပေါ်တက်ပြီး ဖြတ်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถตามหลังอย่างกระชั้นชิด",
        "en": "Driving closely behind",
        "my": "နောက်ကနေ နီးနီးကပ်ကပ် မောင်းတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 363,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากท่านกำลังขับรถตามหลังรถขนาดใหญ่ที่กำลังเปิดสัญญาณไฟเลี้ยวซ้ายแต่ตัวรถค่อยๆ เคลื่อนตัวไปทางขวา ท่านควรปฏิบัติอย่างไร",
    "q_en": "If you are driving behind a large vehicle that is turning on the left turn signal but the vehicle slowly Move to the right What should you do?",
    "q_my": "၎) ဘယ်ဘက်အချက်ပြမီးဖွင့်ထားတဲ့ ယာဉ်ကြီးတစ်စီးနောက်မှာ မောင်းနှင်နေပေမယ့် ယာဉ်ကို ညာဘက်ကို ဖြည်းဖြည်းချင်းရွှေ့ရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "รักษาระยะห่างในระยะปลอดภัย",
        "en": "Keep a safe distance.",
        "my": "ဘေးကင်းသောအကွာအဝေးကိုထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงไปทางด้านซ้าย",
        "en": "Overtake to the left",
        "my": "ဘယ်ဘက်သို့ ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับตามรถใหญ่ในระยะกระชั้นชิด",
        "en": "Follow a large vehicle in close proximity.",
        "my": "မလှမ်းမကမ်းတွင် ယာဉ်ကြီးတစ်စီးနောက်ကို လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณแตร",
        "en": "Give the horn signal",
        "my": "ဟွန်းအချက်ပြပေးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 364,
    "category": "safe_driving",
    "image": null,
    "q_th": "การชะลอและหยุดรถทันทีเมื่อมีคนเดินข้ามถนน เป็นการป้องกันอุบัติเหตุอย่างไร",
    "q_en": "Slowing down and stopping the car immediately when someone walks across the road. How is it to prevent accidents?",
    "q_my": "လမ်းကိုဖြတ်ပြီး လူတစ်ယောက် လမ်းလျှောက်လာတဲ့အခါ အရှိန်လျှော့ပြီး ကားကို ချက်ချင်းရပ်လိုက်ပါ။ မတော်တဆမှုတွေ ဘယ်လိုကာကွယ်ရမလဲ။",
    "options": [
      {
        "th": "ป้องกันการแซง",
        "en": "Prevent overtaking",
        "my": "ကျော်တက်ခြင်းကို တားဆီးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ป้องกันการชนกรณีคนวิ่งข้ามตัดหน้ารถ",
        "en": "Prevent collisions in the case of people crossing in front of the car.",
        "my": "ကားရှေ့ကလူဖြတ်ကူးတဲ့ကိစ္စမှာ ယာဉ်တိုက်မှုမဖြစ်ရအောင်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ป้องกันรถสวนทางมา",
        "en": "Protect against oncoming cars",
        "my": "ဝင်လာသောကားများကိုကာကွယ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ป้องกันรถจักรยานยนต์ตัดหน้า",
        "en": "Prevents motorcycles from cutting in front",
        "my": "ဆိုင်ကယ်ရှေ့ဖြတ်မရအောင်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 365,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถผ่านรถที่จอดอยู่และสังเกตเห็นว่ามีล้อจักรยานยื่นออกมา ควรปฏิบัติอย่างไร",
    "q_en": "When you drive past a parked car and notice that a bicycle wheel is sticking out. What should I do?",
    "q_my": "ရပ်ထားသည့်ကားကို ဖြတ်မောင်းပြီး စက်ဘီးဘီးပေါက်နေသည်ကို သတိပြုမိသည်။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ลดความเร็วและเตรียมหยุดให้รถจักรยานไปก่อน",
        "en": "Reduce your speed and prepare to stop for the bicycle.",
        "my": "အရှိန်လျှော့ပြီး စက်ဘီးရပ်ရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ลดความเร็วและโบกมือให้ผู้ใช้รถจักรยานข้ามไป",
        "en": "Slow down and wave to bicyclists to cross.",
        "my": "အရှိန်လျှော့ပြီး ဖြတ်ကျော်ဖို့ စက်ဘီးစီးသူတွေကို ဝှေ့ယမ်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เบรกอย่างรวดเร็วและกะพริบไฟ",
        "en": "Brake quickly and flash the lights.",
        "my": "လျင်မြန်စွာ ဘရိတ်အုပ်ပြီး မီးကို နှိပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วผ่านไปและบีบแตรเตือน",
        "en": "Speed past and honk the warning horn.",
        "my": "အရှိန်လွန်ပြီး သတိပေးဟွန်းကို ဟွန်းတီးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 366,
    "category": "safe_driving",
    "image": null,
    "q_th": "ท่านไม่ควรพยายามขับแซงรถจักรยานในเหตุการณ์ใด",
    "q_en": "Under no circumstances should you attempt to overtake a bicycle.",
    "q_my": "စက်ဘီးကို ကျော်တက်ဖို့ ဘယ်လိုအခြေအနေမျိုးမှာမှ မလုပ်သင့်ပါဘူး။",
    "options": [
      {
        "th": "ขณะขับบนถนนที่รถขับสวนทางกัน",
        "en": "While driving on a road where cars are driving in opposite directions",
        "my": "ကားတွေ ဆန့်ကျင်ဘက် မောင်းနှင်နေတဲ့ လမ်းမပေါ်မှာ မောင်းနှင်နေစဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขณะขับบนถนนเดินทางเดียว",
        "en": "While driving on a one-way road",
        "my": "တစ်လမ်းမောင်းတွင် ကားမောင်းနေစဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขณะขับในทางตรง",
        "en": "while driving in a straight direction",
        "my": "ဖြောင့်ဖြောင့်မောင်းနှင်နေစဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขณะที่กำลังจะเลี้ยวซ้าย",
        "en": "While turning left",
        "my": "လက်ဝဲဘက်လှည့်နေစဉ်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 367,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดกล่าวไม่ถูกต้อง",
    "q_en": "Which of the above is incorrect?",
    "q_my": "အထက်ပါအချက်များ သည် မည်သည့်အရာများ မှားယွင်းနေသနည်း။",
    "options": [
      {
        "th": "เมื่อมีรถวิ่งสวนมาเวลากลางคืนควรใช้ไฟต่ำ",
        "en": "When there are cars passing by at night, you should use low beam lights.",
        "my": "ညဘက် ဖြတ်သွားသည့် ကားများရှိပါက အလင်းတန်းနိမ့် မီးများကို အသုံးပြုသင့်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การขับรถในเขตชุมชนต้องใช้ความระมัดระวังมากกว่าปกติ",
        "en": "Driving in a community area requires more caution than usual.",
        "my": "ရပ်ရွာဧရိယာအတွင်း ကားမောင်းခြင်းသည် ပုံမှန်ထက် ပိုမိုသတိရှိရန် လိုအပ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วงเวลากลางคืน จะต้องใช้ความระมัดระวังมากกว่าปกติ",
        "en": "night time More caution than usual will be required.",
        "my": "ညအချိန် ခါတိုင်းထက်ပို၍ သတိထားရန် လိုအပ်ပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อวิ่งตามหลังรถคันหน้าสามารถเปิดไฟสูงได้ เพราะไม่มีผลต่อการขับขี่ของรถคันหน้า",
        "en": "When running behind the car in front, you can turn on your high beams. Because it does not affect the driving of the car in front.",
        "my": "ရှေ့က ကားနောက်ကို ပြေးတဲ့အခါ မင်းရဲ့ high beam တွေကို ဖွင့်နိုင်တယ်။ အဘယ်ကြောင့်ဆိုသော် ရှေ့ကား၏ မောင်းနှင်မှုကို မထိခိုက်စေပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 368,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อรู้สึกตาพร่าจากแสงจากรถทางด้านหลังในตอนกลางคืน ควรปฏิบัติอย่างไร",
    "q_en": "When you feel dazzled by the light from the car behind you at night. What should I do?",
    "q_my": "ညဘက် ကားနောက်က အလင်းရောင်ကြောင့် စူးစူးဝါးဝါး ခံစားရချိန်။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ตั้งกระจกให้อยู่ในตำแหน่งที่ไม่ทำให้ตาพร่า",
        "en": "Set the mirror in a position where it won't dazzle.",
        "my": "မှန်ကို မှိန်မသွားစေမယ့် အနေအထားမှာထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดปิดไฟข้างไปมา",
        "en": "Turn the side light on and off.",
        "my": "ဘေးဘက်မီးကို အဖွင့်အပိတ်လုပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหยียบเบรกอย่างรวดเร็วเพื่อหยุดรถ",
        "en": "Press the brakes quickly to stop the car.",
        "my": "ကားရပ်ရန် ဘရိတ်ကို အမြန်နှိပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งกระจกสะท้อนไปยังคนขับรถคันอื่น",
        "en": "Set mirrors to reflect other drivers.",
        "my": "အခြားယာဉ်မောင်းများကို ထင်ဟပ်စေရန် မှန်များကို သတ်မှတ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 369,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากกำลังขับขี่รถอยู่บนถนน แล้วฝนเริ่มตกผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "If driving on the road And when it starts to rain, what should drivers do?",
    "q_my": "၎) လမ်းမှာ ကားမောင်းရင် မိုးရွာတဲ့အခါ ယာဉ်မောင်းတွေက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ลดความเร็วของรถลง",
        "en": "Reduce the speed of the car.",
        "my": "ကားအရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เร่งความเร็วของรถเพื่อให้ผ่านฝนไปให้เร็ว",
        "en": "Accelerate your car to make it through the rain quickly.",
        "my": "မိုးကို အမြန်ဖြတ်ဖို့ သင့်ကားကို အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถข้างทางทันที",
        "en": "Stop the car on the side of the road immediately.",
        "my": "လမ်းဘေးမှာ ကားကို ချက်ချင်းရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินและรีบขับผ่านบริเวณนั้นไป",
        "en": "Turn on your emergency lights and drive quickly through the area.",
        "my": "သင့်အရေးပေါ်မီးများကိုဖွင့်ပြီး ဧရိယာတစ်လျှောက် အမြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 370,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้กล่าวได้ถูกต้องเกี่ยวกับการแซงรถคันหน้าที่เคลื่อนตัวด้วยความเร็วที่ใกล้เคียงกัน",
    "q_en": "Which of the following statements is correct regarding overtaking cars in front that are moving at similar speeds?",
    "q_my": "အလားတူ အရှိန်ဖြင့် ရွေ့နေသော ရှေ့ကားများကို ကျော်တက်ခြင်းနှင့် ပတ်သက်သော အောက်ပါဖော်ပြချက် များထဲမှ မည်သည့်စကားများ မှန်ကန်သနည်း။",
    "options": [
      {
        "th": "ใช้ระยะทางเท่าเดิม เวลาในการแซงมากขึ้น",
        "en": "Use the same distance as before. More time for overtaking",
        "my": "ယခင်အတိုင်း အကွာအဝေးကို အသုံးပြုပါ။ ကျော်တက်ဖို့ အချိန်ပိုရတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ระยะทางมากขึ้น เวลาในการแซงเท่าเดิม",
        "en": "Use more distance Overtaking time remains the same.",
        "my": "အကွာအဝေးကို ပိုသုံးပါ Overtaking time သည် အတူတူပင်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ระยะทางและเวลาในการแซงมากขึ้น",
        "en": "Use more distance and time for overtaking.",
        "my": "ကျော်တက်ရန်အတွက် အကွာအဝေးနှင့် အချိန်ပိုသုံးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้ระยะทางและเวลาในการแซงน้อยลง",
        "en": "Use less distance and time for overtaking.",
        "my": "ကျော်တက်ရန်အတွက် အကွာအဝေးနှင့် အချိန်ကို လျှော့သုံးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 371,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดเป็นพฤติกรรมที่มีมารยาทที่ควรปฏิบัติเมื่ออยู่บนถนน",
    "q_en": "Which is a polite behavior that should be followed when on the road?",
    "q_my": "၎) လမ်းပေါ်ရောက်တဲ့အခါ လိုက်နာရမယ့် ယဉ်ကျေးသိမ်မွေ့တဲ့ အမူအကျင့်တစ်ခုပါ။",
    "options": [
      {
        "th": "ทิ้งขยะบนไหล่ทางหรือเกาะกลางถนน",
        "en": "Dump garbage on the shoulder or in the middle of the road.",
        "my": "ပခုံးပေါ် သို့မဟုတ် လမ်းလယ်တွင် အမှိုက်များ စွန့်ပစ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ใช้เสียงแตรไล่คนเดินเท้า",
        "en": "Do not use the horn to chase away pedestrians.",
        "my": "လမ်းသွားလမ်းလာများကို မောင်းထုတ်ရန် ဟွန်းကို မသုံးပါနှင့်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขว้างกระป๋องเครื่องดื่มออกนอกตัวรถขณะรถวิ่ง",
        "en": "Throwing a beverage can outside the vehicle while driving",
        "my": "ကားမောင်းနေစဉ်အတွင်း အဖျော်ယမကာကို ကားအပြင်သို့ ပစ်ချနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดเพลงเสียงดังแล้วเปิดกระจกรถรบกวนผู้อื่น",
        "en": "Turn up the music loudly and open the car windows to disturb others.",
        "my": "သီချင်းကို ကျယ်လောင်စွာဖွင့်ပြီး အခြားသူများကို နှောင့်ယှက်ရန် ကားပြတင်းပေါက်များကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 372,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากช่องทางด้านซ้ายมีสิ่งกีดขวางและมีรถวิ่งสวนมา ท่านต้องปฏิบัติอย่างไร",
    "q_en": "If the left lane has an obstacle and there is a car passing by. What must you do?",
    "q_my": "၎) ဘယ်ဘက်လမ်းကြားတွင် အတားအဆီးတစ်ခုရှိပြီး ကားဖြတ်သန်းသွားပါက၊ သင်ဘာလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "หยุดรอให้รถที่ขับสวนมาผ่านไปก่อนแล้วค่อยขับผ่านไปได้",
        "en": "Stop and wait for oncoming traffic to pass before you can drive past.",
        "my": "ရပ်တန့်ပြီး ဖြတ်ကျော်သွားမည့် ယာဉ်ကြောပိတ်ဆို့မှုကို စောင့်ဆိုင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หากท่านคิดว่าท่านขับได้เร็วกว่ารถที่สวนมาแล้ว จึงทำการแซงได้ทันที",
        "en": "If you think you can drive faster than the oncoming car. Therefore overtaking can be done immediately.",
        "my": "အကယ်၍ သင်သည် လာမည့်ကားထက် ပိုမြန်အောင် မောင်းနှင်နိုင်သည်ဟု သင်ယူဆပါက။ ထို့ကြောင့် ချက်ချင်း ကျော်တက်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับผ่านไปได้เลยโดยไม่ต้องสนใจรถที่สวนมา",
        "en": "You can drive past without paying attention to oncoming cars.",
        "my": "လာမည့်ကားများကို ဂရုမစိုက်ဘဲ ကျော်ဖြတ်မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟฉุกเฉินแล้วแซงไปได้เลย",
        "en": "Turn on your emergency lights and pass.",
        "my": "သင်၏အရေးပေါ်မီးများကိုဖွင့်ပြီး ဖြတ်သန်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 373,
    "category": "safe_driving",
    "image": null,
    "q_th": "ทำไมผู้ขับรถจึงต้องคอยสังเกตรถจักรยานยนต์และรถจักรยานเป็นพิเศษเมื่อมาถึงทางแยก",
    "q_en": "Why do drivers need to pay special attention to motorcycles and bicycles at intersections?",
    "q_my": "ယာဉ်မောင်းများသည် လမ်းဆုံများတွင် ဆိုင်ကယ်နှင့် စက်ဘီးများကို အဘယ်ကြောင့် အထူးဂရုပြုရန် လိုအပ်သနည်း။",
    "options": [
      {
        "th": "เพราะรถจักรยานและรถจักรยานยนต์อาจต้องการจะเลี้ยวเข้าข้างทางได้",
        "en": "Because bicycles and motorcycles may want to turn onto the side of the road.",
        "my": "အဘယ်ကြောင့်ဆိုသော် စက်ဘီးနှင့်ဆိုင်ကယ်များသည် လမ်းဘက်သို့ ကွေ့ချင်နေပေလိမ့်မည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพราะรถจักรยานและรถจักรยานยนต์อาจจะลดความเร็วเพื่อให้ท่านเลี้ยวไปก่อนได้",
        "en": "Bicycles and motorcycles may slow down to allow you to turn first.",
        "my": "သင့်အား ဦးစွာကွေ့နိုင်စေရန် စက်ဘီးနှင့် ဆိုင်ကယ်များသည် နှေးကွေးသွားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพราะรถจักรยานและรถจักรยานยนต์เป็นรถที่สังเกตเห็นได้ยากเนื่องจากขนาดเล็ก",
        "en": "Because bicycles and motorcycles are difficult to notice due to their small size.",
        "my": "အဘယ်ကြောင့်ဆိုသော် စက်ဘီးနှင့် မော်တော်ဆိုင်ကယ်များသည် အရွယ်အစားသေးငယ်သောကြောင့် သတိထားရန်ခက်ခဲသောကြောင့်ဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพราะรถจักรยานและรถจักรยานยนต์อาจจะไม่เห็นว่าท่านต้องการเลี้ยว",
        "en": "Because bicycles and motorcycles may not see that you want to turn.",
        "my": "ဘာဖြစ်လို့လဲဆိုတော့ စက်ဘီးနဲ့ဆိုင်ကယ်ကို လှည့်မကြည့်ချင်ဘူး။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 374,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000468.webp",
    "q_th": "ในสถานการณ์ใดที่เสากระจกกันลมด้านหน้า (A pillars) จะบดบังทัศนวิสัยในการมองเห็น",
    "q_en": "In what situations will the front windshield pillars (A pillars) obstruct visibility?",
    "q_my": "ရှေ့လေကာမှန်တိုင်များ (A pillars) သည် မြင်နိုင်စွမ်းကို အဟန့်အတားဖြစ်စေမည့် အခြေအနေမျိုးတွင် ရှိပါသလား။",
    "options": [
      {
        "th": "เมื่อขับรถอยู่บนทางคู่",
        "en": "When driving on a double track",
        "my": "နှစ်ထပ်လမ်းပေါ် မောင်းနှင်သောအခါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อขับรถอยู่บนทางหลวงพิเศษ",
        "en": "When driving on the expressway",
        "my": "အမြန်လမ်းပေါ်မှာ မောင်းတဲ့အခါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อเข้าสู่ทางโค้งและทางแยก",
        "en": "When entering curves and intersections",
        "my": "လမ်းကွေ့များနှင့် လမ်းဆုံများ အတွင်းသို့ ဝင်ရောက်သည့်အခါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เมื่อเข้าสู่ถนนเดินรถทางเดียว  (one-way)",
        "en": "When entering a one-way road (one-way)",
        "my": "တစ်လမ်းမောင်း (တစ်လမ်းမောင်း) ဝင်တဲ့အခါ၊",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 375,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้กล่าวไม่ถูกต้องสำหรับการเปิดสัญญาณไฟฉุกเฉินตลอดเวลา",
    "q_en": "Which of the following is incorrect for keeping the emergency lights on at all times?",
    "q_my": "အရေးပေါ်မီးများကို အချိန်တိုင်းဖွင့်ထားခြင်းကြောင့် အောက်ပါတို့ထဲမှ မည်သည့်အရာသည် မှားယွင်းနေသနည်း။",
    "options": [
      {
        "th": "ทำให้ผู้ขับขี่คันอื่นสับสนว่ารถคันที่เปิดไฟฉุกเฉินกำลังเลี้ยวไปด้านใดด้านหนึ่ง",
        "en": "This causes other drivers to become confused as to whether the car with its emergency lights on is turning to one side or the other.",
        "my": "၎င်းသည် အရေးပေါ်အချက်ပြမီးဖွင့်ထားသည့် ကားသည် တစ်ဖက်သို့ တစ်ဖက်သို့ လှည့်နေသလားဟု အခြားယာဉ်မောင်းများ စိတ်ရှုပ်ထွေးစေပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้ผู้ขับขี่คันอื่นคิดว่ารถกำลังเกิดอุบัติเหตุ",
        "en": "This makes other drivers think that their car is about to have an accident.",
        "my": "ယင်းကြောင့် အခြားယာဉ်မောင်းများက ၎င်းတို့၏ကား မတော်တဆဖြစ်တော့မည်ဟု ထင်စေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้ผู้ขับขี่คันอื่นเข้าใจว่าเป็นรถที่ขับเร็ว",
        "en": "Make other drivers understand that the car is driving fast.",
        "my": "ကားက အမြန်မောင်းနေတယ်ဆိုတာ တခြားယာဉ်မောင်းတွေကို နားလည်အောင်လုပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทำให้ผู้ขับขี่คันอื่นคิดว่าเป็นรถที่จอดนิ่งอยู่",
        "en": "causing other drivers to think it was a stationary vehicle",
        "my": "အခြားယာဉ်မောင်းများက ၎င်းကို ရပ်တန့်ထားသော ယာဉ်ဟု ထင်စေခဲ့သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 376,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ใช่ความหมายของคำว่า \"ความเร็วที่ควรใช้\" ถูกต้องที่สุด",
    "q_en": "Which is not the meaning of the word The \"speed that should be used\" is the most accurate.",
    "q_my": "ဟူသော စကားလုံး၏ အဓိပ္ပါယ်မဟုတ်သော \"အမြန်နှုန်းကို အသုံးပြုသင့်သည်\" သည် အမှန်ကန်ဆုံးဖြစ်သည်။",
    "options": [
      {
        "th": "ความเร็วที่สามารถหยุดรถได้ทัน",
        "en": "Speed ​​at which the car can be stopped in time",
        "my": "ကားကို အချိန်မီ ရပ်တန့်နိုင်တဲ့ အရှိန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความเร็วที่เหมาะสมกับสภาพแวดล้อม ถนน",
        "en": "Speed ​​appropriate to the road environment",
        "my": "အရှိန်အဟုန်ဖြင့် သင့်လျော်သော လမ်းပတ်ဝန်းကျင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความเร็วตามความพึงพอใจ",
        "en": "Satisfactory speed",
        "my": "ကျေနပ်လောက်တဲ့အရှိန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ความเร็วจำกัดตามป้ายสัญญาณ",
        "en": "Speed limit according to signs",
        "my": "ဆိုင်းဘုတ်များအလိုက် အမြန်နှုန်းကန့်သတ်ချက်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 377,
    "category": "safe_driving",
    "image": null,
    "q_th": "การให้สัญญาณไฟที่ถูกต้องเมื่อขับรถเข้าสู่ทางร่วมทางแยก",
    "q_en": "Providing correct signal lights when driving into an intersection.",
    "q_my": "လမ်းဆုံသို့ မောင်းနှင်သည့်အခါ မှန်ကန်သော အချက်ပြမီးများ ပေးဆောင်ခြင်း။",
    "options": [
      {
        "th": "ให้สัญญาณไฟทุกครั้งเมื่อต้องการเลี้ยวซ้ายหรือขวา",
        "en": "Always give a signal when turning left or right.",
        "my": "ဘယ် သို့မဟုတ် ညာကွေ့သည့်အခါ အမြဲတမ်း အချက်ပြပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้สัญญาณไฟเฉพาะเลี้ยวขวาเท่านั้น",
        "en": "Give the signal only to turn right.",
        "my": "ညာဘက်ကွေ့ရန်သာ အချက်ပြပေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่จำเป็นต้องให้สัญญาณไฟเลี้ยวขวาหรือซ้าย",
        "en": "There is no need to give a right or left turn signal.",
        "my": "ညာဘက် သို့မဟုတ် ဘယ်ဘက်ကွေ့ရန် အချက်ပြရန် မလိုအပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณไฟฉุกเฉินเมื่อต้องการขับรถตรงไป",
        "en": "Give emergency lights when driving straight.",
        "my": "ဖြောင့်တန်းမောင်းနှင်သောအခါတွင် အရေးပေါ်မီးများ ပေးဆောင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 378,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากท่านขับรถด้วยความเร็ว 90 กิโลเมตรต่อชั่วโมงแต่ท่านรู้สึกว่าเร็วเกินไปท่านควรปฏิบัติอย่างไร",
    "q_en": "If you drive at a speed of 90 kilometers per hour but you feel that it is too fast, what should you do?",
    "q_my": "တစ်နာရီကို ကီလိုမီတာ ၉၀ နှုန်းနဲ့ မောင်းပေမယ့် အရမ်းမြန်တယ်လို့ ခံစားရရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ออกจากเส้นทางนั้น",
        "en": "Get off that path.",
        "my": "အဲဒီလမ်းကနေ ထွက်သွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็วลงจนท่านคิดว่าปลอดภัย",
        "en": "Slow down until you think it is safe.",
        "my": "ဘေးကင်းသည်ဟု သင်ထင်သည်အထိ အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หยุดรถของท่านทันที",
        "en": "Stop your car immediately.",
        "my": "သင့်ကားကို ချက်ချင်းရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับให้ใกล้เคียง 100 กม.ต่อชั่วโมง",
        "en": "Drive close to 100 km per hour.",
        "my": "တစ်နာရီကို ကီလိုမီတာ 100 နီးပါး မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 379,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถผ่านบริเวณทางแยก ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "Driving through an intersection What should the driver do?",
    "q_my": "၎) လမ်းဆုံကိုဖြတ်၍ မောင်းနှင်ပါက ယာဉ်မောင်း ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ชะลอรถแล้วมองซ้าย-ขวา",
        "en": "Slow down the car and look left-right.",
        "my": "ကားကို အရှိန်လျှော့ပြီး ဘယ်ညာကြည့်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ยกมือขอทาง",
        "en": "Raise your hand to ask for directions.",
        "my": "လမ်းညွှန်ချက်တောင်းရန် လက်ကို မြှောက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉิน",
        "en": "Turn on emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วแล้วบีบแตรขอทาง",
        "en": "Accelerate and honk your horn to ask for directions.",
        "my": "လမ်းညွှန်ချက်တောင်းရန် အရှိန်မြှင့်ပြီး ဟွန်းကို ဟွန်းတီးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 380,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อขับรถเข้าใกล้บริเวณทางข้าม แต่ไม่มีคนข้ามทาง ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When driving near the crossing area But no one crossed the path. What should the driver do?",
    "q_my": "လမ်းဖြတ်ကူးသည့်နေရာအနီးတွင် ကားမောင်းလာသောအခါ လမ်းဖြတ်ကူးသူ တစ်ယောက်မှမရှိပေ။ ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ชะลอความเร็วลง และสังเกตซ้ายขวาเพื่อความปลอดภัย",
        "en": "slow down and observe left and right for safety",
        "my": "အရှိန်လျှော့ပြီး ဘေးကင်းစေရန် ဘယ်ညာ သတိပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้สัญญาณแตรเสียงสั้นเพื่อเตือน",
        "en": "Use a short horn signal to warn.",
        "my": "သတိပေးရန် ဟွန်းအတိုကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้สัญญาณแตรเสียงยาวเพื่อเตือน",
        "en": "Use a long horn signal to warn.",
        "my": "သတိပေးရန် ဟွန်းရှည်အချက်ပြမှုကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้สัญญาณไฟสูงเพื่อเตือน",
        "en": "Use a high beam signal to warn.",
        "my": "သတိပေးရန် high beam signal ကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 381,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากพบว่ารถจักรยานยนต์แซงขณะที่รถกำลังสวนทางมา ผู้ขับขี่ควรแก้ไขอย่างไร",
    "q_en": "If you find that a motorcycle is overtaking while a car is coming in the opposite direction. How should the driver fix this?",
    "q_my": "၎) မော်တော်ဆိုင်ကယ်သည် ဆန့်ကျင်ဘက်သို့ ဦးတည်လာနေချိန်တွင် ဆိုင်ကယ်ကျော်တက်နေသည်ကို တွေ့ရှိပါက၊ ယာဉ်မောင်းက ဒါကို ဘယ်လိုပြင်သင့်လဲ။",
    "options": [
      {
        "th": "จอดรถทันที",
        "en": "Park the car immediately.",
        "my": "ကားကို ချက်ချင်းရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วลง ชิดซ้าย เปิดช่องทางให้แซง",
        "en": "Reduce your speed, stay to the left, open the lane for passing.",
        "my": "အရှိန်လျှော့ပါ၊ ဘယ်ဘက်တွင်နေ၊ ဖြတ်သန်းရန်အတွက် လမ်းသွားဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รีบเปลี่ยนช่องทางเดินรถ",
        "en": "Hurry and change lanes.",
        "my": "အမြန်လမ်းပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตร และให้สัญญาณไฟกะพริบรถคันที่สวนทางมา",
        "en": "Honk your horn and flash your lights on cars coming in the opposite direction.",
        "my": "မင်းဟွန်းကို ဟွန်းတီးပြီး ဆန့်ကျင်ဘက် ဦးတည်လာတဲ့ ကားတွေကို မီးညှိလိုက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 382,
    "category": "safe_driving",
    "image": null,
    "q_th": "เทคนิคในการคาดการณ์นอกจากการคาดการณ์การเคลื่อนไหวของรถคันอื่นแล้ว ผู้ใช้ถนนควรคาดคะเนข้อใดด้วย",
    "q_en": "Techniques for forecasting besides predicting the movement of other cars. What should road users expect?",
    "q_my": "အခြားကားများ၏ ရွေ့လျားမှုကို ခန့်မှန်းခြင်းအပြင် ကြိုတင်ခန့်မှန်းခြင်းအတွက် နည်းပညာများ။ လမ်းအသုံးပြုသူများ ဘာမျှော်လင့်သင့်လဲ။",
    "options": [
      {
        "th": "คาดคะเนว่าคนที่ใช้ถนนจะเคลื่อนไหวไปอย่างไร",
        "en": "Predict how people using the road will move.",
        "my": "လမ်းအသုံးပြုသူများ မည်ကဲ့သို့ ရွေ့လျားမည်ကို ခန့်မှန်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "คาดคะเนว่าเราขับรถอย่างไร",
        "en": "Predict how we drive.",
        "my": "ဘယ်လိုမောင်းရမလဲဆိုတာကို ခန့်မှန်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คาดคะเนว่าเราจะเลี้ยวไปทางไหน",
        "en": "Predict where we will turn.",
        "my": "ဘယ်ကို လှည့်မလဲဆိုတာ ခန့်မှန်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คาดคะเนว่ารถเราจะเกิดอุบัติเหตุไหม",
        "en": "Predict if our car will have an accident?",
        "my": "ကျွန်ုပ်တို့၏ကား မတော်တဆဖြစ်မည်ကို ခန့်မှန်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 383,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านต้องการเลี้ยวขวาบนถนนที่มีรถวิ่งสวนทาง (มีเกาะกลางถนน) ข้อใดต่อไปนี้ถูกต้องที่สุด",
    "q_en": "When you want to turn right on a road with cars moving in the opposite direction. (There is an island in the middle of the road.) Which of the following is most correct?",
    "q_my": "၎) ဆန့်ကျင်ဘက်သို့ ရွေ့လျားနေသော ကားလမ်းပေါ်တွင် ညာဘက်ကွေ့လိုသောအခါ၊ (လမ်းအလယ်တွင် ကျွန်းတစ်ကျွန်းရှိသည်။) အောက်ပါတို့အနက် ဘယ်ဟာမှန်ဆုံးလဲ။",
    "options": [
      {
        "th": "เว้นระยะจากรถด้านหลังให้เพียงพอ",
        "en": "Leave enough distance from the vehicle behind.",
        "my": "ယာဉ်နောက်မှ လုံလောက်သောအကွာအဝေးကို ချန်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้อยู่ในตำแหน่งด้านซ้ายของถนน",
        "en": "Drive in a position on the left side of the road.",
        "my": "လမ်း၏ ဘယ်ဘက်ခြမ်းတွင် အနေအထားဖြင့် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถ โดยให้ส่วนหน้าของรถต้องไม่ล้ำเข้าไปในช่องทางเดินรถที่สวนทางกัน",
        "en": "Stop the vehicle so that the front of the vehicle does not enter the opposite lane.",
        "my": "ယာဉ်၏ ရှေ့သည် ဆန့်ကျင်ဘက်လမ်းကြားသို့ မဝင်စေရန် ယာဉ်ကို ရပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หยุด จากนั้นใช้เบรกมือและเลือกใช้เกียร์ต่ำ",
        "en": "Stop, then apply the parking brake and select a low gear.",
        "my": "ရပ်ပါ၊ ထို့နောက် ပါကင်ဘရိတ်ကို အသုံးပြုပြီး ဂီယာနိမ့်ကို ရွေးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 384,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อขับรถในเวลากลางคืน ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When driving at night What should the driver do?",
    "q_my": "၎) ညဘက် ကားမောင်းတဲ့အခါ ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "พยายามขับรถเข้าไปให้ใกล้กับรถคันหน้าเพื่อให้รถคันหน้าเห็นรถเราได้ชัดเจน",
        "en": "Try to drive closer to the car in front so that the car in front can clearly see your car.",
        "my": "ရှေ့ကားက သင့်ကားကို ရှင်းရှင်းလင်းလင်းမြင်နိုင်စေရန် ရှေ့ကားနှင့် ပိုနီးအောင် မောင်းကြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ไฟสูงตลอดทางของการขับรถ",
        "en": "Use high beams throughout the entire drive.",
        "my": "Drive တစ်ခုလုံးတွင် high beam ကိုအသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินขณะทำการแซงรถคันหน้า",
        "en": "Turn on emergency lights while overtaking the vehicle in front.",
        "my": "ရှေ့မှယာဉ်ကို ကျော်တက်နေစဉ် အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทิ้งระยะห่างระหว่างรถคันหน้าให้มากกว่าปกติ",
        "en": "Leave more distance between the car in front than normal.",
        "my": "ကားရှေ့ကို ပုံမှန်ထက် အကွာအဝေးပိုထားပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 385,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถถอยหลังเข้าสู่ถนนรองและมีคนกำลังรอข้ามถนนอยู่ ควรปฏิบัติอย่างไร",
    "q_en": "When you drive in reverse onto a secondary road and there are people waiting to cross the road. What should I do?",
    "q_my": "၎) အလယ်တန်းလမ်းကို ပြောင်းပြန်မောင်းတဲ့အခါ လမ်းဖြတ်ကူးဖို့ စောင့်နေတဲ့ လူတွေရှိတယ်။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "บีบแตรเพื่อเตือนคนข้ามถนน",
        "en": "Honk your horn to warn people crossing the road.",
        "my": "လမ်းဖြတ်ကူးသူတွေကို သတိပေးဖို့ မင်းရဲ့ဟွန်းကို ဟွန်းတီးလိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ทางแก่คนข้ามถนน",
        "en": "Give way to people crossing the road",
        "my": "လမ်းဖြတ်ကူးသူတွေကို လမ်းပေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ถอยหลังเข้าก่อนที่คนข้ามถนนจะเริ่มข้าม",
        "en": "Back in before pedestrians start crossing.",
        "my": "လမ်းသွားလမ်းလာတွေ မဖြတ်ခင် ပြန်ရောက်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "โบกมือให้คนข้ามถนนหยุดรอ",
        "en": "Wave your hand to stop the person crossing the street.",
        "my": "လမ်းဖြတ်ကူးသူကို ရပ်ရန် လက်ဝှေ့ယမ်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 386,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ใช่วิธีการขับรถที่ปลอดภัยในขณะที่ฝนตก",
    "q_en": "Which is not a safe way to drive while it is raining?",
    "q_my": "မိုးရွာနေချိန်မှာ ဘယ်လမ်းက မောင်းရမလုံခြုံဘူး။",
    "options": [
      {
        "th": "เปิดไฟหน้า",
        "en": "Turn on the headlights",
        "my": "ရှေ့မီးကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินตลอดเวลาที่ฝนตก",
        "en": "Turn on emergency lights at all times when it rains.",
        "my": "မိုးရွာချိန်တိုင်း အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทิ้งช่วงห่างจากรถคันหน้า เผื่อไว้มากๆ",
        "en": "Leave plenty of distance from the car in front, just in case.",
        "my": "ကားရှေ့ကနေ အကွာအဝေးများများ ချန်ထားပေးပါ၊",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้อัตราความเร็วที่ปลอดภัย",
        "en": "Use a safe speed.",
        "my": "လုံခြုံသောအမြန်နှုန်းကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 387,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อมีสัญญาณไฟเหลืองกะพริบอยู่ใต้เครื่องหมายเตือนว่าเข้าใกล้บริเวณโรงเรียน ผู้ขับรถควรปฏิบัติอย่างไร",
    "q_en": "When there is a flashing yellow light under the warning sign that is approaching the school area. What should the driver do?",
    "q_my": "ကျောင်းအနီးသို့ ချဉ်းကပ်လာသော သတိပေးဆိုင်းဘုတ်အောက်တွင် အဝါရောင်အလင်းတန်းတစ်ခု ပေါ်လာသောအခါ၊ ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "หยุดรอที่สัญญาณไฟจนกว่าสัญญาณไฟจะเปลี่ยนเป็นสีเขียว",
        "en": "Stop and wait at the light until the light turns green.",
        "my": "မီးစိမ်းသွားတဲ့အထိ ရပ်ပြီး မီးရောင်မှာ စောင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็ว จนกว่าจะแน่ใจว่าไม่มีเด็กข้ามถนนแล้วจึงไปต่อ",
        "en": "Reduce your speed until you are sure there are no children crossing the road and then continue.",
        "my": "လမ်းဖြတ်ကူးသည့်ကလေးများ မရှိကြောင်း သေချာသည်အထိ အရှိန်လျှော့ပြီး ရှေ့ဆက်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รักษาความเร็วเดิมและให้สัญญาณแตร",
        "en": "Maintain the same speed and signal the horn.",
        "my": "တူညီသောအရှိန်ကိုထိန်းပြီး ဟွန်းကို အချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วเพื่อให้ผ่านทางข้ามไปให้เร็วที่สุด",
        "en": "Accelerate to get through the crossing as quickly as possible.",
        "my": "အမြန်ဖြတ်ကူးရန် အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 388,
    "category": "safe_driving",
    "image": null,
    "q_th": "ท่านได้แวะรับประทานอาหารในร้านที่มีสุราบริการด้วย ก่อนจะขับรถเดินทางไกล ท่านควรทำอย่างไร",
    "q_en": "You stopped to eat at a restaurant that also served liquor. Before driving on a long trip What should you do?",
    "q_my": "အရက်သောက်တဲ့ စားသောက်ဆိုင်မှာ မင်းမစားတော့ဘူး။ ခရီးဝေးမမောင်းခင် ဘာတွေလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ห้ามดื่มเครื่องดื่มแอลกอฮอล์โดยเด็ดขาด",
        "en": "Drinking alcoholic beverages is strictly prohibited.",
        "my": "အရက်သေစာ သောက်သုံးခြင်းကို တင်းတင်းကျပ်ကျပ် တားမြစ်ထားသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทานอาหารร้อน ๆ ร่วมกับเครื่องดื่มแอลกอฮอล์",
        "en": "Eat hot food with alcoholic beverages.",
        "my": "ပူသောအစာကို အရက်ယမကာဖြင့် စားသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดื่มเครื่องดื่มชูกำลังร่วมกับเครื่องดื่มแอลกอฮอล์",
        "en": "Drink energy drinks with alcohol.",
        "my": "အားဖြည့်အချိုရည်များကို အရက်နှင့်အတူ သောက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดื่มนมก่อนดื่มเครื่องดื่มแอลกอฮอล์",
        "en": "Drink milk before drinking alcohol.",
        "my": "အရက်မသောက်ခင် နွားနို့သောက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 389,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในขณะที่ท่านเติมน้ำมันเชื้อเพลิงท่านควรปฏิบัติอย่างไร",
    "q_en": "While you are refueling, what should you do?",
    "q_my": "ဆီဖြည့်နေတုန်း ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ดับเครื่องยนต์",
        "en": "Turn off the engine.",
        "my": "အင်ဂျင်ကိုပိတ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ลงจากรถและเดินออกให้ไกล",
        "en": "Get out of the car and walk far away.",
        "my": "ကားပေါ်ကဆင်းပြီး အဝေးကို လမ်းလျှောက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ติดเครื่องยนต์ไว้",
        "en": "Put the engine on.",
        "my": "အင်ဂျင်တပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ต้องทำอะไร",
        "en": "Don't have to do anything.",
        "my": "ဘာမှလုပ်စရာမလိုဘူး။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 390,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อการจราจรติดขัดในเวลากลางคืน ต้องปฏิบัติอย่างไรเพื่อไม่ให้แสงจากไฟเบรกรถของท่านทำให้คนขับรถที่อยู่คันหลังตาพร่า",
    "q_en": "When traffic is congested at night What must you do so that the light from your car's brake lights does not dazzle the drivers behind you?",
    "q_my": "ညဘက် ယာဉ်ကြောပိတ်ဆို့မှုဖြစ်တဲ့အခါ သင့်ကားရဲ့ဘရိတ်မီးတွေက သင့်နောက်ကယာဉ်မောင်းတွေကို မှိန်မသွားအောင် ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "ใช้ทั้งเบรกมือและเบรกเท้า",
        "en": "Use both the hand brake and the foot brake.",
        "my": "လက်ဘရိတ်နှင့် ခြေဘရိတ် နှစ်မျိုးလုံးကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ครัชร่วมกับคันเร่ง",
        "en": "Use the clutch in conjunction with the accelerator.",
        "my": "အရှိန်မြှင့်စက်နှင့် တွဲဖက်၍ ကလစ်ကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้เบรกมือเท่านั้น",
        "en": "Only use the handbrake.",
        "my": "လက်ဘရိတ်ကိုသာသုံးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้เบรกเท้าเท่านั้น",
        "en": "Use the foot brake only.",
        "my": "ခြေဘရိတ်ကိုသာ အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 391,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถเข้าวงเวียนที่ไม่มีสัญญาณไฟจราจรควรปฏิบัติอย่างไร",
    "q_en": "What should you do when driving into a roundabout with no traffic lights?",
    "q_my": "၎) မီးပွိုင့်မရှိသော အဝိုင်းသို့ မောင်းနှင်သည့်အခါ ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ให้รถทางขวามือของเราที่อยู่ในวงเวียนไปก่อน",
        "en": "Let the car on our right that is in the roundabout go first.",
        "my": "အဝိုင်းမှာရှိတဲ့ ငါတို့ညာဘက်က ကားကို အရင်သွားပါစေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้รถทางซ้ายมือของเราที่อยู่ในวงเวียนไปก่อน",
        "en": "Let the car on our left that is in the roundabout go first.",
        "my": "အဝိုင်းမှာရှိတဲ့ ငါတို့ ဘယ်ဘက်ခြမ်းက ကားကို အရင်သွားပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถที่เข้าวงเวียนและจะตรงไปให้ไปก่อน",
        "en": "Let cars entering the roundabout and going straight go first.",
        "my": "အဝိုင်းထဲသို့ဝင်၍ ဖြောင့်သွားသောကားများကို ဦးစွာသွားပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถที่เข้าวงเวียนและจะเลี้ยวซ้ายไปก่อน",
        "en": "Let cars entering the roundabout and turning left go first.",
        "my": "အဝိုင်းထဲကိုဝင်ပြီး ဘယ်ဘက်ကွေ့တဲ့ကားတွေကို အရင်သွားပါစေ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 392,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถตามหลังและไม่มั่นใจว่ารถจักรยานยนต์ที่ขับด้านหน้าจะขับรถไปในทิศทางใด ควรปฏิบัติอย่างไร",
    "q_en": "When you are driving behind and are not sure which direction the motorcycle in front will drive. What should I do?",
    "q_my": "၎) နောက်ကနေ မောင်းလာတဲ့အခါ ရှေ့က ဆိုင်ကယ်က ဘယ်ကို ဦးတည်မောင်းမယ်ဆိုတာ မသေချာဘူး။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ขับตามหลัง",
        "en": "drive behind",
        "my": "နောက်ကနေ မောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงทางด้านซ้าย",
        "en": "Overtaking on the left",
        "my": "ဘယ်ဘက်တွင် ကျော်တက်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงทางด้านขวา",
        "en": "Overtaking on the right",
        "my": "ညာဘက်တွင် ကျော်တက်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เคลื่อนที่เข้าใกล้ขึ้น",
        "en": "Move closer",
        "my": "နီးကပ်စွာ ရွှေ့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 393,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อพบนักขี่จักรยาน ผู้ขับขี่ไม่ควรปฏิบัติตามข้อใด",
    "q_en": "When meeting a cyclist What should the driver not do?",
    "q_my": "၎) စက်ဘီးသမားနဲ့တွေ့တဲ့အခါ ယာဉ်မောင်းက ဘာလုပ်သင့်သလဲ။",
    "options": [
      {
        "th": "เพิ่มความระมัดระวังเป็นพิเศษ",
        "en": "Be extra careful.",
        "my": "အထူးသတိထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรสังเกตจากทั้งบนถนนและทางเท้าเป็นพิเศษ",
        "en": "It should be especially noted from both the road and the sidewalk.",
        "my": "အထူးသတိပြုသင့်သည်မှာ လမ်းနှင့် လူသွားလမ်းများဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรทักทาย",
        "en": "Honk your horn to say hello.",
        "my": "နှုတ်ဆက်စကားပြောဖို့ မင်းရဲ့ဟွန်းကို ဟွန်းလိုက်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เว้นระยะห่างให้เพียงพอ",
        "en": "Leave enough distance.",
        "my": "လုံလောက်သောအကွာအဝေးကိုချန်ထားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 394,
    "category": "safe_driving",
    "image": null,
    "q_th": "ปัจจัยใดต่อไปนี้มีผลต่อการเกิดสถานการณ์อุบัติเหตุมากที่สุด",
    "q_en": "Which of the following factors has the greatest effect on the occurrence of an accident situation?",
    "q_my": "အောက်ဖော်ပြပါအချက်များထဲမှ မည်သည့်အချက်များသည် မတော်တဆမှုဖြစ်ပွားမှုအခြေအနေအပေါ် အကြီးမားဆုံးအကျိုးသက်ရောက်မှုရှိသနည်း။",
    "options": [
      {
        "th": "การเคลื่อนที่ของรถ หรือคนเดินเท้า",
        "en": "car movement or pedestrians",
        "my": "ကားလှုပ်ရှားမှု သို့မဟုတ် လမ်းသွားလမ်းလာများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความไม่พร้อมของผู้ขับขี่",
        "en": "Driver's unpreparedness",
        "my": "ယာဉ်မောင်း၏ ကြိုတင်ပြင်ဆင်မှု",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สภาพผิวจราจร",
        "en": "Road surface condition",
        "my": "လမ်းမျက်နှာပြင်အခြေအနေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลักษณะทางภูมิประเทศ",
        "en": "topographical features",
        "my": "မြေမျက်နှာသွင်ပြင်လက္ခဏာများ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 395,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อพบคนบาดเจ็บ ข้อใดไม่ควรปฏิบัติ",
    "q_en": "When finding an injured person Which thing should not be done?",
    "q_my": "ထိခိုက်ဒဏ်ရာရသူကိုရှာတဲ့အခါ ဘယ်အရာက မလုပ်သင့်သလဲ။",
    "options": [
      {
        "th": "ผู้ช่วยเหลือต้องแน่ใจว่าเราปลอดภัย",
        "en": "Helpers make sure we are safe.",
        "my": "အကူအညီပေးသူများသည် ကျွန်ုပ်တို့ ဘေးကင်းကြောင်း သေချာပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เคลื่อนย้ายผู้บาดเจ็บโดยทันที",
        "en": "Move the injured person immediately.",
        "my": "ဒဏ်ရာရသူကို ချက်ချင်း ရွှေ့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ประเมินผู้บาดเจ็บและเสียชีวิต มีจำนวนเท่าใด",
        "en": "Assessing the injured and deceased How many?",
        "my": "ဒဏ်ရာရသူနှင့် သေဆုံးသူ မည်မျှရှိသည်ကို အကဲဖြတ်ခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ประเมินสถานการณ์สงบสติอารมณ์",
        "en": "Assess the situation, stay calm.",
        "my": "အခြေအနေကို အကဲဖြတ်ပြီး စိတ်အေးအေးထားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 396,
    "category": "safe_driving",
    "image": null,
    "q_th": "หลังจากขับรถลุยน้ำ เมื่อเราขึ้นที่แห้งแล้วควรปฏิบัติเช่นไรเป็นอันดับแรก",
    "q_en": "After driving through water When we reach dry land, what should we do first?",
    "q_my": "၎) ရေဖြတ်မောင်းပြီး ခြောက်သွေ့တဲ့မြေကို ရောက်တဲ့အခါ ဘာကို အရင်လုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ทดสอบไฟเลี้ยวหลาย ๆ ครั้ง",
        "en": "Test the turn signal several times.",
        "my": "ကွေ့အချက်ပြခြင်းကို အကြိမ်များစွာ စမ်းသပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทดสอบสัญญาณแตร",
        "en": "Horn signal test",
        "my": "ဟွန်းအချက်ပြစမ်းသပ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทดสอบไฟสูงต่ำ",
        "en": "Test high and low beams",
        "my": "အမြင့်နှင့် အနိမ့်တန်းများကို စမ်းသပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทดสอบเบรกหลาย ๆ ครั้ง",
        "en": "Test the brakes several times.",
        "my": "ဘရိတ်ကို အကြိမ်ကြိမ် စမ်းသပ်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 397,
    "category": "safe_driving",
    "image": null,
    "q_th": "ช่วงที่ท่านกำลังป่วย ความสามารถในการขับรถจะถดถอยลง ท่านต้อง",
    "q_en": "While you are sick Your ability to drive will deteriorate. You must",
    "q_my": "နေမကောင်းဖြစ်နေချိန်မှာ မောင်းနှင်နိုင်မှု အားနည်းလာမယ်။ သင် ... ရမည်",
    "options": [
      {
        "th": "นำยาติดตัวไปด้วยทั้งหมดเมื่อท่านขับรถ",
        "en": "Take all your medicine with you when you drive.",
        "my": "ကားမောင်းတဲ့အခါ ဆေးတွေအကုန်ယူသွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถตามปกติ",
        "en": "Drive normally",
        "my": "ပုံမှန်အတိုင်း မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ขับรถหลังจากทานยาที่ทำให้เกิดอาการง่วง",
        "en": "Do not drive after taking medicine that causes drowsiness.",
        "my": "ငိုက်မျဉ်းစေသော ဆေးသောက်ပြီးနောက် ကားမမောင်းပါနှင့်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ลดปริมาณยาที่ทานลง",
        "en": "Reduce the amount of medicine you take.",
        "my": "သင်သောက်သောဆေးပမာဏကို လျှော့ချပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 398,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อเราจะขับรถแซงรถคันหน้า เราควรปฏิบัติเช่นไรเป็นอันดับแรก",
    "q_en": "When we drive to pass the car in front. What should we do first?",
    "q_my": "ရှေ့က ကားကို ကျော်ဖြတ်မောင်းတဲ့အခါ။ ငါတို့ဘာအရင်လုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ให้สัญญาณไฟก่อน",
        "en": "Give the light signal first.",
        "my": "ဦးစွာ မီးအချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินแล้วแซงได้เลย",
        "en": "Turn on your emergency lights and pass.",
        "my": "သင်၏အရေးပေါ်မီးများကိုဖွင့်ပြီး ဖြတ်သန်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รีบเร่งเครื่องแล้วแซงได้เลย",
        "en": "Hurry and accelerate the engine and overtake.",
        "my": "အင်ဂျင်ကို အရှိန်မြှင့်ပြီး ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้ดูกระจกก่อน ทั้งด้านข้างและด้านหลังเพื่อตรวจสอบจุดบอด",
        "en": "Let's look in the mirror first. Both sides and rear to check blind spots",
        "my": "မှန်ထဲမှာ အရင်ကြည့်ရအောင်။ နှစ်ဖက်စလုံးနှင့် အနောက်ဘက် ကန်းကွက်များကို စစ်ဆေးရန်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 399,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดไม่ใช่ผลที่เกิดจากการขับรถด้วยความเร็ว",
    "q_en": "Which is not a result of driving at speed?",
    "q_my": "အရှိန်လွန်မောင်းနှင်မှုကြောင့် ဖြစ်ပေါ်လာသည့် ရလဒ်ကား အဘယ်နည်း။",
    "options": [
      {
        "th": "สามารถหยุดรถได้ทันท่วงที",
        "en": "Can stop the car in time.",
        "my": "ကားကို အချိန်မီရပ်နိုင်ပါစေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สิ้นเปลืองพลังงาน",
        "en": "Wastes energy",
        "my": "စွမ်းအင်ကို ဖြုန်းတီးတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มีโอกาสในการเกิดอุบัติเหตุสูง",
        "en": "There is a high chance of accidents.",
        "my": "ယာဉ်တိုက်မှုဖြစ်နိုင်ခြေ မြင့်မားပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความรุนแรงในการบาดเจ็บหากเกิดอุบัติเหตุมากขึ้น",
        "en": "The severity of injuries in the event of an accident increases.",
        "my": "မတော်တဆ ထိခိုက်ဒဏ်ရာရမှု ပြင်းထန်မှု ပိုများလာသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 400,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากเกิดอุบัติเหตุขับรถชนคนเดินถนนที่ความเร็ว 30 กิโลเมตรต่อชั่วโมง จะส่งผลอย่างไร",
    "q_en": "If there is an accident, the car hits a pedestrian at a speed of 30 kilometers per hour. What will be the effect?",
    "q_my": "၎) မတော်တဆမှုဖြစ်လျှင် ကားသည် တစ်နာရီလျှင် ကီလိုမီတာ ၃၀ အရှိန်ဖြင့် လမ်းသွားလမ်းလာကို ဝင်တိုက်သည်။ အကျိုးသက်ရောက်မှုက ဘာဖြစ်မလဲ။",
    "options": [
      {
        "th": "คนผู้นั้นจะไม่เป็นอะไรเลย",
        "en": "That person will be nothing.",
        "my": "အဲဒီလူက ဘာမှမဖြစ်ဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนผู้นั้นมีโอกาสสูงที่จะเสียชีวิต",
        "en": "That person has a high chance of dying.",
        "my": "အဲဒီလူက သေဖို့ အခွင့်အလမ်း များတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนผู้นั้นมีโอกาสเจ็บแต่ไม่เสียชีวิต",
        "en": "That person is likely to be hurt but not killed.",
        "my": "အဲဒီလူဟာ ဒဏ်ရာ ရနိုင်ပေမယ့် မသေပါဘူး။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "คนผู้นั้นจะเสียชีวิตทันที",
        "en": "That person will die immediately.",
        "my": "အဲဒီလူက ချက်ချင်းသေလိမ့်မယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 401,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อเห็นรถด้านหน้าหยุดบริเวณทางร่วมทางแยกที่ไม่มีสัญญาณไฟจราจรขณะถนนโล่ง ควรปฏิบัติอย่างไร",
    "q_en": "When you see a car in front stopping at an intersection with no traffic lights while the road is clear. What should I do?",
    "q_my": "၎) လမ်းရှင်းနေချိန်တွင် မီးပွိုင့်မရှိသော လမ်းဆုံတွင် ရပ်နေသော ရှေ့ကားတစ်စီးကို တွေ့သောအခါ၊ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "บีบแตรเพื่อให้รถคันหน้าเคลื่อนตัว",
        "en": "Honk the horn to make the car in front move.",
        "my": "ရှေ့ကားကို ရွေ့သွားစေရန် ဟွန်းကို ဟွန်းတီးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงโดยทันที",
        "en": "overtake immediately",
        "my": "ချက်ချင်းကျော်တက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ห้ามแซงโดยเด็ดขาด",
        "en": "Overtaking is strictly prohibited.",
        "my": "ကျော်တက်ခြင်းကို တင်းတင်းကျပ်ကျပ် တားမြစ်ထားသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ชะลอรถและแซง",
        "en": "Slow down and overtake",
        "my": "အရှိန်လျှော့ပြီး ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 402,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถเข้าใกล้รถที่จอดอยู่ข้างทาง ท่านควรปฏิบัติอย่างไรจึงจะเหมาะสมที่สุด",
    "q_en": "When you drive near a car parked on the side of the road What should you do to be most appropriate?",
    "q_my": "၎) လမ်းဘေးမှာ ရပ်ထားတဲ့ ကားအနီးကို ကားမောင်းတဲ့အခါ အသင့်တော်ဆုံးဖြစ်အောင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ให้สัญญาณไฟสูงเพียงอย่างเดียวก็เพียงพอ",
        "en": "A high beam signal alone is sufficient.",
        "my": "High beam signal တစ်ခုတည်းနဲ့ လုံလောက်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับต่อไปโดยไม่ต้องระวังสิ่งใด",
        "en": "Continue driving without any caution.",
        "my": "သတိမရှိဘဲ ဆက်လက်မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วผ่านไปทันที",
        "en": "Accelerate immediately.",
        "my": "ချက်ချင်းအရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพิ่มความระมัดระวังมากขึ้น เตรียมพร้อมที่จะหยุดเสมอ",
        "en": "Be more careful Always be prepared to stop.",
        "my": "ရပ်တန့်ရန် အမြဲသတိထားပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 403,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านมองเห็นว่ารถที่ขับอยู่ด้านหน้าลืมปิดไฟเลี้ยวขวา ควรปฏิบัติอย่างไร",
    "q_en": "When you see that the car driving in front forgot to turn off the right turn signal. What should I do?",
    "q_my": "ရှေ့က မောင်းနှင်လာတဲ့ ကားကို တွေ့တဲ့အခါ ညာဘက်ကွေ့ အချက်ပြကို ပိတ်ဖို့ မေ့သွားတယ်။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "แซงซ้าย ถ้ามีพื้นที่ให้สามารถแซงได้",
        "en": "Overtake on the left if there is space to overtake.",
        "my": "ကျော်တက်ရန် နေရာရှိလျှင် ဘယ်ဘက်တွင် ကျော်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กะพริบไฟเพื่อเตือนรถคันข้างหน้า",
        "en": "Flashes lights to warn cars ahead",
        "my": "ရှေ့က ကားတွေကို သတိပေးဖို့ မီးရောင်တွေ လင်းနေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรก่อนที่จะแซง",
        "en": "Honk the horn before passing.",
        "my": "မဖြတ်ခင် ဟွန်းတီးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับอยู่ข้างหลังต่อไปและไม่ทำการแซง",
        "en": "Continue driving behind and do not overtake.",
        "my": "နောက်မှ ဆက်မောင်းပြီး ကျော်မတက်ပါနဲ့။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 404,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในขณะขับรถที่มีลมพัดแรง เพราะเหตุใดจึงควรเว้นระยะห่างจากรถจักรยานยนต์ให้มากขึ้น",
    "q_en": "While driving with strong wind blowing Why should we keep more distance from motorcycles?",
    "q_my": "လေပြင်းတွေတိုက်ပြီး မောင်းနေရင်း ဆိုင်ကယ်တွေနဲ့ ဘာကြောင့် ပိုဝေးနေရတာလဲ။",
    "options": [
      {
        "th": "คนขับรถจักรยานยนต์อาจถูกพัดมาด้านหน้ารถ",
        "en": "The motorcyclist may have been blown in front of the vehicle.",
        "my": "မော်တော်ဆိုင်ကယ် မောင်းနှင်သူသည် ယာဉ်ရှေ့တွင် လွင့်စင်သွားနိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "คนขับรถจักรยานยนต์อาจขับเร็วกว่าปกติ",
        "en": "Motorcycle drivers may drive faster than normal.",
        "my": "မော်တော်ဆိုင်ကယ် ယာဉ်မောင်းများသည် ပုံမှန်ထက် ပိုမြန်စွာ မောင်းနှင်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนขับรถจักรยานยนต์อาจหยุดกะทันหัน",
        "en": "Motorcyclists may stop suddenly.",
        "my": "ဆိုင်ကယ်စီးသူများ ရုတ်တရက် ရပ်တန့်သွားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนขับรถจักรยานยนต์อาจขับออกกะทันหันเพื่อหลีกเลี่ยงลม",
        "en": "Motorcycle drivers may pull off suddenly to avoid the wind.",
        "my": "မော်တော်ဆိုင်ကယ် ယာဉ်မောင်းများသည် လေတိုက်ခြင်းကို ရှောင်ရှားရန် ရုတ်တရက် ရပ်တန့်သွားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 405,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดปฏิบัติถูกต้องในการขับขี่ออกจากซอยไปสู่ถนนใหญ่",
    "q_en": "Which is the correct practice when driving out of the alley onto the main road?",
    "q_my": "၎) လမ်းကြားကနေ လမ်းမကြီးပေါ်ကို ကားမောင်းတဲ့အခါ ဘယ်ဟာက မှန်ကန်တဲ့ အလေ့အကျင့်လဲ။",
    "options": [
      {
        "th": "ขับออกไปให้เร็วที่สุดเพื่อที่จะได้ไม่เสียเวลา",
        "en": "Drive away as quickly as possible so you don't waste time.",
        "my": "အချိန်မဖြုန်းဘဲ တတ်နိုင်သမျှ မြန်မြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่จำเป็นต้องเปิดไฟเลี้ยวก็ได้",
        "en": "There is no need to turn on the turn signal.",
        "my": "turn signal ဖွင့်ရန်မလိုအပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรอให้รถในทางหลักและคนเดินเท้าไปก่อน",
        "en": "Stop and wait for cars on the main road and pedestrians to go first.",
        "my": "လမ်းမကြီးပေါ်ရှိ ကားများကိုရပ်ပြီး လမ်းသွားလမ်းလာများကို ဦးစွာသွားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรเพื่อขอทางจากรถคันอื่น",
        "en": "Honk your horn to ask for directions from other cars.",
        "my": "အခြားကားများထံမှ လမ်းညွှန်ချက်တောင်းရန် သင့်ဟွန်းကို ဟွန်းတီးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 406,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากผู้ขับขี่พบพื้นที่ปรับปรุงผิวถนน ผู้ขับขี่ควรปฏิบัติตามข้อใด",
    "q_en": "If the driver finds an area to improve the road surface What should the driver do?",
    "q_my": "ယာဉ်မောင်းသည် လမ်းမျက်နှာပြင်ကို မြှင့်တင်ရန် ဧရိယာတစ်ခုကို တွေ့ရှိပါက ယာဉ်မောင်းသည် ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "เปิดไฟฉุกเฉิน ใช้ความเร็วปกติ",
        "en": "Turn on emergency lights Use normal speed",
        "my": "အရေးပေါ်မီးများကိုဖွင့်ပါ ပုံမှန်အမြန်နှုန်းကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วลงและขับด้วยความระมัดระวัง",
        "en": "Reduce your speed and drive with caution.",
        "my": "အရှိန်လျှော့ပြီး သတိနဲ့မောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เร่งความเร็ว",
        "en": "Accelerate",
        "my": "အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถแล้วหลีกเลี่ยงเส้นทางนั้น",
        "en": "Stop the car and avoid that route.",
        "my": "ကားကိုရပ်ပြီး ထိုလမ်းကြောင်းကို ရှောင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 407,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านกำลังจะเลี้ยวขวาเข้าสู่ถนนรอง ควรตรวจสอบกระจกด้านขวาก่อนเลี้ยวเพราะเหตุใด",
    "q_en": "When you are about to turn right onto a secondary road. Why should you check your right mirror before turning?",
    "q_my": "အလယ်တန်းလမ်းပေါ် ညာဘက်ကွေ့တော့မည်။ မလှည့်ခင် ညာဘက်မှန်ကို ဘာကြောင့် စစ်သင့်တာလဲ။",
    "options": [
      {
        "th": "เพื่อมองหาคนข้ามถนนที่กำลังจะข้าม",
        "en": "To look for people crossing the road who are about to cross.",
        "my": "လမ်းဖြတ်ကူးမည့်သူများကို ရှာဖွေရန်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อตรวจดูว่าถนนรองว่าง",
        "en": "to check that the secondary road is free",
        "my": "အလယ်တန်းလမ်းကို အခမဲ့စစ်ဆေးရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อตรวจดูรถที่ออกมา",
        "en": "to inspect the cars coming out",
        "my": "ထွက်လာသည့်ကားများကို စစ်ဆေးရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อตรวจหารถที่จะทำการแซง",
        "en": "To detect cars that are about to overtake.",
        "my": "ကျော်တက်မည့်ကားများကို သိရှိနိုင်စေရန်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 408,
    "category": "safe_driving",
    "image": null,
    "q_th": "เพราะเหตุใดจึงต้องเว้นระยะห่างที่ปลอดภัยเมื่อขับรถตามหลังรถบรรทุก",
    "q_en": "Why is it important to keep a safe distance when driving behind a truck?",
    "q_my": "ထရပ်ကားနောက်မှာ မောင်းနှင်တဲ့အခါ လုံခြုံတဲ့အကွာအဝေးကို ထားဖို့ ဘာကြောင့်အရေးကြီးတာလဲ။",
    "options": [
      {
        "th": "เพื่อให้สามารถกันลมได้ดีขึ้น",
        "en": "In order to be able to block the wind better",
        "my": "လေကို ပိတ်ဆို့နိုင်စေရန်အတွက် ပိုမိုကောင်းမွန်ပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อช่วยให้รถบรรทุกหยุดได้ง่ายขึ้น",
        "en": "To make it easier for trucks to stop",
        "my": "ကုန်တင်ယာဉ်များ ရပ်တန့်ရန် လွယ်ကူစေရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อให้คนขับรถบรรทุกสามารถมองเห็นรถของท่านจากกระจกได้",
        "en": "So that the truck driver can see your vehicle from the mirror.",
        "my": "သို့မှသာ ထရပ်ကားမောင်းသူသည် သင့်ကားကို မှန်မှမြင်နိုင်မည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพื่อป้องกันอันตรายที่อาจเกิดจากแรงดูดระหว่างรถ",
        "en": "To prevent danger that may arise from the suction force between cars.",
        "my": "ကားများကြားတွင် စုပ်ယူမှုမှ ဖြစ်ပေါ်လာနိုင်သည့် အန္တရာယ်ကို ကာကွယ်ရန်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 409,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000518.webp",
    "q_th": "จากรูปรถคันสีน้ำเงิน หรือรถสีเขียวมีสิทธิ์ที่จะผ่านไปก่อน",
    "q_en": "From the picture of a blue car. Or the green car has the right to pass first?",
    "q_my": "အပြာကားပုံထဲက။ ဒါမှမဟုတ် အစိမ်းရောင်ကားကို အရင်ဖြတ်သန်းခွင့်ရှိလား။",
    "options": [
      {
        "th": "รถคันไหนไปก่อนก็ได้ หากมาถึงก่อน",
        "en": "Whichever car can go first is fine if it arrives first.",
        "my": "ဘယ်ကားက အရင်သွားလို့ရလဲ အရင်ရောက်ရင် ကောင်းပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันไหนไปก่อนก็ได้ หากมีความเร็วสูงกว่า",
        "en": "Which car can go first? If there is a higher speed",
        "my": "ဘယ်ကားက အရင်သွားနိုင်မလဲ။ အရှိန်မြင့်လာလျှင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้รถคันสีเขียวไปก่อน",
        "en": "Let the green car go first.",
        "my": "အစိမ်းရောင်ကားကို အရင်သွားပါစေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้รถคันสีน้ำเงินไปก่อน",
        "en": "Let the blue car go first.",
        "my": "အပြာကား အရင်သွားပါစေ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 410,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000519.webp",
    "q_th": "จากรูป ในขณะสัญญาณไฟเขียว หากท่านต้องการจะเลี้ยวขวาแต่ท่านได้ยินสัญญาณรถดับเพลิงมาทางขวามือของท่าน ท่านควร",
    "q_en": "From the picture at the time of the green light If you want to turn right but you hear a fire truck signal coming to your right, you should",
    "q_my": "၎) မီးစိမ်းနေတဲ့အချိန်မှာ ပုံထဲကအတိုင်း ညာဘက်ကွေ့ချင်ပေမယ့် ညာဘက်ကို မီးထရပ်ကား အချက်ပြသံကြားရင်၊",
    "options": [
      {
        "th": "เลี้ยวไปได้เลยโดยไม่ต้องสนใจรถดับเพลิง",
        "en": "Just turn around without paying attention to the fire truck.",
        "my": "မီးသတ်ကားကို ဂရုမစိုက်ဘဲ လှည့်ကြည့်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟเลี้ยวขวาเพื่อให้รถดับเพลิงรู้ว่าท่านจะไปก่อน",
        "en": "Turn on your right turn signal to let the fire truck know you will go first.",
        "my": "မီးသတ်ကားကို ဦးစွာသွားမည်ဖြစ်ကြောင်း အသိပေးရန် သင်၏ညာဘက်ကွေ့အချက်ပြကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เลี้ยวขวาไปก่อนรถดับเพลิงจะมาถึง",
        "en": "Turn right before the fire truck arrives.",
        "my": "မီးသတ်ကားမရောက်မီ ညာဘက်သို့ကွေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รอให้รถดับเพลิงไปก่อนแล้วจึงเลี้ยว",
        "en": "Wait for the fire truck to go and then turn.",
        "my": "မီးသတ်ကား လာစောင့်ပြီးမှ အလှည့်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 411,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000520.webp",
    "q_th": "จากสถานการณ์ดังรูป ผู้ขับขี่ประสงค์ขับรถออกจากช่องจอดต้องปฏิบัติอย่างไรเป็นลำดับแรก",
    "q_en": "From the situation as shown in the picture What should a driver who wishes to drive out of a parking space do first?",
    "q_my": "ပုံတွင်ပြထားသည့်အတိုင်း) ကားပါကင်နေရာမှ မောင်းထုတ်လိုသော ယာဉ်မောင်းသည် အဘယ်အရာကို ဦးစွာလုပ်ဆောင်သင့်သနည်း။",
    "options": [
      {
        "th": "เปิดสัญญาณไฟฉุกเฉิน",
        "en": "Turn on the emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบความปลอดภัยทางด้านขวา",
        "en": "Safety check on the right side",
        "my": "ညာဘက်ခြမ်းတွင် လုံခြုံရေးစစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถออกจากช่องจอดรถได้ทันที",
        "en": "Drive out of the parking space immediately.",
        "my": "ကားပါကင်နေရာမှ ချက်ချင်းမောင်းထွက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดกระจกแล้วโบกมือชะลอความเร็ว",
        "en": "Lower the window and wave your hand to slow down.",
        "my": "ပြတင်းပေါက်ကို နှိမ့်ချပြီး အရှိန်လျှော့ရန် သင့်လက်ကို ဝှေ့ယမ်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 412,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000521.webp",
    "q_th": "เมื่อท่านขับรถเข้าใกล้รถโดยสารประจำทางที่ส่งสัญญาณว่ากำลังจะออกจากป้ายรถโดยสารประจำทาง ควรปฏิบัติอย่างไร",
    "q_en": "When you drive near a bus that signals that it is about to leave a bus stop. What should I do?",
    "q_my": "ဘတ်စ်ကားမှတ်တိုင်မှ ထွက်ခွာတော့မည်ဟု အချက်ပြသော ဘတ်စ်ကားအနီးတွင် မောင်းနှင်သောအခါ၊ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "กะพริบไฟเมื่อเข้าใกล้",
        "en": "Flashes light when approaching",
        "my": "နီးကပ်လာသောအခါ အလင်းတန်းများ လင်းလက်လာသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยอมให้รถโดยสารประจำทางออกมาก่อน",
        "en": "Allow the bus to leave first.",
        "my": "ဘတ်စ်ကားကို အရင်ထွက်ခွင့်ပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้สัญญาณไฟเลี้ยวซ้าย แล้วโบกให้รถโดยสารประจำทางออกไปก่อน",
        "en": "Give the left turn signal. Then waved for the bus to leave first.",
        "my": "ဘယ်ဘက်လှည့်အချက်ပြပေးပါ။ ထို့နောက် ဘတ်စ်ကားကို ဦးစွာ ထွက်ခွာရန် လက်ပြလိုက်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รีบแซงก่อนที่รถโดยสารประจำทางจะออกมา",
        "en": "Hurry and overtake before the bus comes out.",
        "my": "ဘတ်စကားမထွက်ခင် မြန်မြန်ကျော်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 413,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000522.webp",
    "q_th": "จากรูป เมื่อท่านขับรถมาถึงทางแยกพบสัญญาณไฟเขียว แต่เกิดจราจรติดขัดในเส้นทางที่ท่านจะสัญจร ท่านควรปฏิบัติอย่างไร",
    "q_en": "From the picture, when you drive to the intersection you will see a green light. But there was a traffic jam on the route you were traveling on. What should you do?",
    "q_my": "၎) လမ်းဆုံကို မောင်းနှင်တဲ့အခါ ပုံမှာပြထားတဲ့အတိုင်း မီးစိမ်းပြပါလိမ့်မယ်။ ဒါပေမယ့် သင်သွားနေတဲ့ လမ်းကြောင်းမှာ ယာဉ်ကြောပိတ်ဆို့မှု ဖြစ်ခဲ့ပါတယ်။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "ขับรถเข้าไปตรงกลางแยก แล้วรอจนกว่ารถข้างหน้าจะเคลื่อนตัว",
        "en": "Drive into the middle of the intersection. Then wait until the car ahead moves.",
        "my": "လမ်းဆုံအလယ်သို့ မောင်းနှင်ပါ။ ထို့နောက် ရှေ့ကားရွေ့သွားသည်အထိ စောင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รอจนกว่ารถข้างหน้าของท่านจะเคลื่อนตัว แล้วจึงขับรถผ่านไปได้",
        "en": "Wait until the car in front of you moves. Then you can drive past.",
        "my": "ရှေ့ကားရွေ့သွားသည်အထိ စောင့်ပါ။ ပြီးရင် ကျော်ဖြတ်မောင်းလို့ရတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับรถเข้าไปต่อคันหน้า",
        "en": "Drive into the car in front.",
        "my": "ရှေ့က ကားထဲကို မောင်းဝင်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พยายามขับแทรกไปทางขวาของรถคันหน้า",
        "en": "Try to drive to the right of the car in front.",
        "my": "ရှေ့ကား၏ ညာဘက်သို့ မောင်းကြည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 414,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000524.webp",
    "q_th": "จากรูป ผู้ขับขี่รถคันสีแดงควรปฏิบัติอย่างไร",
    "q_en": "From the picture, what should the driver of the red car do?",
    "q_my": "ပုံထဲက အနီရောင်ကားမောင်းသူ ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "เร่งความเร็วไปข้างหน้าและรีบเปลี่ยนช่องจราจร",
        "en": "Accelerate forward and quickly change lanes.",
        "my": "ရှေ့ကိုအရှိန်မြှင့်ပြီး လမ်းကြောများကို အမြန်ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มองกระจกข้าง ให้สัญญาณไฟเลี้ยวขวา และเปลี่ยนช่องทางเมื่อปลอดภัย",
        "en": "Look in the side mirror and signal to turn right. and change channels when safe",
        "my": "ဘေးမှန်ကိုကြည့်ကာ ညာဘက်ကွေ့ရန် အချက်ပြပါ။ ဘေးကင်းသောအခါတွင် ချန်နယ်များကို ပြောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เร่งความเร็วขึ้นและแซงโดยไม่ต้องมองกระจกข้าง",
        "en": "Accelerate and pass without looking in the side mirrors.",
        "my": "အရှိန်မြှင့်ပြီး ဘေးကြည့်မှန်ကို မကြည့်ဘဲ ကျော်သွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มองกระจกข้าง ให้สัญญาณไฟฉุกเฉิน และเปลี่ยนช่องทางเมื่อปลอดภัย",
        "en": "Look in the side mirror and signal the emergency lights. and change channels when safe",
        "my": "ဘေးမှန်ကိုကြည့်ကာ အရေးပေါ်မီးများကို အချက်ပြပါ။ ဘေးကင်းသောအခါတွင် ချန်နယ်များကို ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 415,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000525.webp",
    "q_th": "หากท่านกำลังขับตามหลังคนขี่จักรยาน แต่ท่านต้องการที่จะเลี้ยวซ้าย ท่านควรปฏิบัติอย่างไร",
    "q_en": "If you are driving behind a cyclist. But you want to turn left. What should you do?",
    "q_my": "စက်ဘီးစီးသူနောက်က မောင်းနေရင်။ ဒါပေမယ့် ဘယ်ဘက်ကို လှည့်ချင်လဲ။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "ชะลอความเร็วจนกว่าจักรยานจะผ่านทางเลี้ยว",
        "en": "Slow down until the bike passes the turn.",
        "my": "စက်ဘီးကွေ့ပြီးသည်အထိ အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทำการเลี้ยวโดยไม่ต้องสนใจจักรยาน",
        "en": "Make turns without paying attention to the bike.",
        "my": "စက်ဘီးကို ဂရုမစိုက်ဘဲ လှည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พยายามจะแซงจักรยานก่อนที่จะถึงทางเลี้ยว",
        "en": "Try to pass the bike before it reaches the turn.",
        "my": "အကွေ့မရောက်မီ စက်ဘီးကို ကျော်ဖြတ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถเพื่อรถคนขี่จักรยานจะผ่านทางเลี้ยว",
        "en": "Park the car so the cyclist will pass the turn.",
        "my": "စက်ဘီးစီးသူက အကွေ့ကို ကျော်သွားအောင် ကားကိုရပ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 416,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000526.webp",
    "q_th": "จากรูป หากท่านต้องการขับตรงไป ท่านควรระมัดระวังและปฏิบัติอย่างไร",
    "q_en": "From the picture, if you want to drive straight What precautions should you take and take?",
    "q_my": "ပုံထဲကအတိုင်း တည့်တည့် မောင်းချင်ရင် ဘယ်လို သတိထားရမလဲ။",
    "options": [
      {
        "th": "บีบแตรเพื่อให้รถคันหน้าเร่งความเร็ว",
        "en": "Honk the horn to make the car in front speed up.",
        "my": "ရှေ့ကားကို အရှိန်မြှင့်ရန် ဟွန်းကို ဟွန်းတီးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินและขับผ่านไปด้วยความรวดเร็ว",
        "en": "Turn on your emergency lights and drive past quickly.",
        "my": "အရေးပေါ်မီးများကိုဖွင့်ပြီး အမြန်ဖြတ်ကျော်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับต่อไปด้วยความเร็วเท่าเดิม",
        "en": "Continue driving at the same speed.",
        "my": "တူညီသောအရှိန်ဖြင့် ဆက်လက်မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วลง และให้ทางแก่รถที่เลี้ยวออกมา",
        "en": "Slow down and give way to vehicles turning out.",
        "my": "အရှိန်လျှော့ပြီး ကွေ့နေတဲ့ ယာဉ်တွေကို လမ်းပေးပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 417,
    "category": "safe_driving",
    "image": null,
    "q_th": "การบีบแตรให้สัญญาณเตือนรถคันอื่น ในขณะเกิดเหตุการณ์คับขัน นับว่าเหมาะสมหรือไม่",
    "q_en": "Honking the horn to warn other cars. During the critical incident Is that considered appropriate?",
    "q_my": "အခြားကားများကို သတိပေးရန် ဟွန်းတီးခြင်း။ အရေးကြီးသော အဖြစ်အပျက်အတွင်း ယင်းသည် သင့်လျော်သည်ဟု ယူဆပါသလား။",
    "options": [
      {
        "th": "ไม่เหมาะสม เนื่องจากรบกวนสมาธิในการขับขี่ของผู้ขับอื่นๆ",
        "en": "It is inappropriate because it disturbs the concentration of other drivers.",
        "my": "အခြားယာဉ်မောင်းများ၏ အာရုံစူးစိုက်မှုကို နှောင့်ယှက်သောကြောင့် ၎င်းသည် မသင့်လျော်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหมาะสม ควรให้สัญญาณในเวลาที่จำเป็น",
        "en": "Appropriately, signals should be given when necessary.",
        "my": "လိုအပ်ပါက အချက်ပြမှုများကို သင့်လျော်စွာ ပေးသင့်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหมาะสม ควรบีบแตรถี่ๆ เพื่อเตือน",
        "en": "Appropriately, you should honk the horn frequently to warn.",
        "my": "သင့်လျော်စွာ သတိပေးရန် မကြာခဏ ဟွန်းတီးသင့်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เหมาะสม ผู้ขับอื่นๆอาจจะเข้าใจผิด",
        "en": "It's not appropriate. Other drivers may misunderstand.",
        "my": "မသင့်တော်ပါဘူး။ အခြားယာဉ်မောင်းများ နားလည်မှုလွဲနိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 418,
    "category": "safe_driving",
    "image": null,
    "q_th": "สาเหตุหลักในการชนท้ายคืออะไร",
    "q_en": "What is the main cause of rear-end collisions?",
    "q_my": "နောက်စေ့ကို တိုက်မိခြင်းရဲ့ အဓိက အကြောင်းရင်းက ဘာလဲ။",
    "options": [
      {
        "th": "สุนัขวิ่งตัดหน้ารถ",
        "en": "Dog runs in front of car",
        "my": "ခွေးက ကားရှေ့ပြေးတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถชิดคันหน้ามากเกินไป",
        "en": "Driving too close to the car in front",
        "my": "ရှေ့ကားနှင့် အလွန်နီးကပ်စွာ မောင်းနှင်ခြင်း။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เบรกรถที่แยกไม่ทัน",
        "en": "Braking the car that couldn't separate in time",
        "my": "အချိန်မီမခွဲနိုင်သောကားကို ဘရိတ်အုပ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หักเลี้ยวเพื่อจอดรถข้างทาง",
        "en": "Swerve to park on the side of the road.",
        "my": "လမ်းဘေးမှာ ကားရပ်ဖို့ ကွေ့တယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 419,
    "category": "safe_driving",
    "image": null,
    "q_th": "เหตุใดจึงห้ามเปิดไฟสูงขณะที่ขับรถตามคันหน้าหรือรถที่วิ่งสวนทางมา",
    "q_en": "Why is it prohibited to turn on the high beams while following the vehicle in front or the vehicle passing in the opposite direction?",
    "q_my": "ရှေ့မှ ကားနောက်သို့ လိုက်နေစဉ် သို့မဟုတ် ဆန့်ကျင်ဘက်သို့ ဖြတ်သွားသည့် အမြင့်တန်းများကို အဘယ်ကြောင့် ဖွင့်ရန် တားမြစ်ထားသနည်း။",
    "options": [
      {
        "th": "จะทำให้ผู้ขับรถคันหน้าและรถที่วิ่งสวนทางมาหลับใน",
        "en": "It will cause the driver of the car in front and cars passing in the opposite direction to fall asleep.",
        "my": "ရှေ့ဘက်သို့ မောင်းနှင်လာသည့် ကားနှင့် ဆန့်ကျင်ဘက်သို့ ဖြတ်သွားသော ကားများသည် အိပ်ပျော်သွားစေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะทำให้ผู้ขับรถคันหน้าและรถที่วิ่งสวนทางมามองทางไม่ชัดเจน",
        "en": "This will cause the driver in front and cars passing in the opposite direction to have a unclear view of the road.",
        "my": "၎င်းသည် ရှေ့မှ ယာဉ်မောင်းနှင့် ဆန့်ကျင်ဘက်သို့ ဖြတ်သွားသော ကားများသည် လမ်း၏ ရှင်းလင်းပြတ်သားသော မြင်ကွင်းကို ဖြစ်စေသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จะทำให้เรามองทางข้างหน้าไม่ชัดเจน",
        "en": "It will cause us to see the road ahead unclearly.",
        "my": "ရှေ့လမ်းကို ရှင်းရှင်းလင်းလင်း မြင်နိုင်စေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะทำให้รถที่วิ่งสวนทางมาหลับใน",
        "en": "It will cause cars passing in the opposite direction to fall asleep.",
        "my": "ဆန့်ကျင်ဘက်သို့ ဖြတ်သွားသော ကားများ အိပ်ပျော်သွားစေသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 420,
    "category": "safe_driving",
    "image": null,
    "q_th": "ในกรณีที่รถของผู้ขับขี่เสีย ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "In the event that the driver's car breaks down What should the driver do?",
    "q_my": "ယာဉ်မောင်း၏ ကားပျက်ကျပါက ယာဉ်မောင်းသည် ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "จอดรถกลางถนน และโทรขอความช่วยเหลือ",
        "en": "Park your car in the middle of the road and call for help.",
        "my": "သင့်ကားကို လမ်းလယ်တွင်ရပ်ပြီး အကူအညီတောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ประคองรถเข้าข้างทาง และเปิดไฟฉุกเฉิน",
        "en": "Support the car to the side of the road. and turn on emergency lights",
        "my": "ကားကို လမ်းဘေးသို့ ထောက်ပါ။ အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จอดรถกลางถนน และออกมายืนโบกรถ",
        "en": "Parked the car in the middle of the road and stood up to hitchhike.",
        "my": "ကားကို လမ်းလယ်မှာ ရပ်ပြီး ဆိုက်ကားစီးဖို့ ထရပ်လိုက်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถกลางถนน และเปิดไฟฉุกเฉิน",
        "en": "Park your car in the middle of the road and turn on your emergency lights.",
        "my": "သင့်ကားကို လမ်းလယ်တွင်ရပ်ပြီး အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 421,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้เป็นการปฏิบัติที่ไม่ถูกต้อง",
    "q_en": "Which of the following is an incorrect practice?",
    "q_my": "အောက်ပါအချက်များထဲမှ မည်သည့်အရာသည် မှားယွင်းသောအလေ့အကျင့်ဖြစ်သနည်း။",
    "options": [
      {
        "th": "ไม่แซงหากมีรถวิ่งสวนมาในระยะใกล้",
        "en": "Do not overtake if there is a car passing nearby.",
        "my": "အနီးနားတွင် ကားရှိလျှင် ကျော်မတက်ပါနှင့်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่แซงหากรถคันหน้ากำลังแซงอยู่",
        "en": "Do not overtake if the car in front is overtaking.",
        "my": "ရှေ့ကားက ကျော်တက်ရင် မကျော်ပါနဲ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงขณะที่รถข้างหลังกำลังจะแซงรถของท่าน",
        "en": "Overtake while the car behind is about to overtake your car.",
        "my": "သင့်ကားကို ကျော်တက်ခါနီးတွင် နောက်မှကားကို ကျော်တက်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "แซงได้หากรถข้างหน้าของท่านเปิดไฟเลี้ยวซ้ายและชะลอความเร็วลง",
        "en": "You can overtake if the car in front of you turns on the left turn signal and slows down.",
        "my": "ရှေ့ကားက ဘယ်ဘက်ကွေ့အချက်ပြပြီး အရှိန်လျှော့ရင် ကျော်တက်နိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 422,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะขับรถหากเกิดคันเร่งค้างควรทำอย่างไร",
    "q_en": "While driving, if the accelerator pedal happens to be stuck, what should you do?",
    "q_my": "ကားမောင်းနေစဉ် အရှိန်မြှင့်စက် နင်းမိပါက ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ย้ำคันเร่งหลายๆ ครั้ง",
        "en": "Press the accelerator pedal several times.",
        "my": "အရှိန်မြှင့်စက်ကို အကြိမ်များစွာ နှိပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติ ใช้ปลายเท้างัดคันเร่งขึ้นมา",
        "en": "Stay calm and use the tip of your foot to push the accelerator up.",
        "my": "တည်တည်ငြိမ်ငြိမ်နေ၍ အရှိန်မြှင့်စက်ကို တွန်းရန် သင်၏ခြေဖျားကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ดึงเบรกมือ",
        "en": "Pull the handbrake",
        "my": "လက်ဘရိတ်ကိုဆွဲပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉิน",
        "en": "Turn on emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 423,
    "category": "safe_driving",
    "image": null,
    "q_th": "การเคลื่อนย้ายผู้บาดเจ็บโดยใช้ผ้าห่ม ไม่เหมาะกับผู้ป่วยบริเวณใด",
    "q_en": "Moving the injured person using a blanket Not suitable for patients in any area",
    "q_my": "ထိခိုက်ဒဏ်ရာရသူအား စောင်ကိုအသုံးပြု၍ ရွှေ့ပေးခြင်းသည် မည်သည့်နေရာတွင်မဆို လူနာအတွက် မသင့်လျော်ပါ။",
    "options": [
      {
        "th": "ไม่เหมาะกับผู้บาดเจ็บบริเวณแขนและขา",
        "en": "Not suitable for people with injuries to the arms and legs.",
        "my": "ခြေလက်များ ထိခိုက်ဒဏ်ရာရသူများအတွက် မသင့်တော်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่เหมาะกับผู้บาดเจ็บบริเวณหลัง",
        "en": "Not suitable for people with back injuries.",
        "my": "နောက်ကျောဒဏ်ရာရှိသူများအတွက် မသင့်တော်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่เหมาะกับผู้บาดเจ็บบริเวณศรีษะ",
        "en": "Not suitable for people with head injuries.",
        "my": "ဦးခေါင်းဒဏ်ရာရှိသူများအတွက် မသင့်တော်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่มีข้อใดถูก",
        "en": "There is no correct answer.",
        "my": "အဖြေမှန်မရှိပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 424,
    "category": "safe_driving",
    "image": null,
    "q_th": "การเปลี่ยนช่องทางจราจร ควรปฏิบัติอย่างไร",
    "q_en": "Changing traffic lanes What should I do?",
    "q_my": "ယာဉ်လမ်းကြောတွေပြောင်းရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ดูกระจกมองข้าง เปิดสัญญาณไฟแล้วเปลี่ยนช่องทางเมื่อเห็นว่าปลอดภัย",
        "en": "Look at the side mirror. Turn on your lights and change lanes when it is safe to do so.",
        "my": "ဘေးမှန်ကို ကြည့်လိုက်ပါ။ ထိုသို့ပြုလုပ်ရန် အန္တရာယ်ကင်းသောအခါတွင် သင့်မီးများကိုဖွင့်ပြီး လမ်းများပြောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปลี่ยนช่องทางทันที เมื่อความเร็วเหมาะสม",
        "en": "Change the channel immediately When the speed is appropriate",
        "my": "မြန်နှုန်းသင့်လျော်သောအခါတွင် ချန်နယ်ကို ချက်ချင်းပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปลี่ยนช่องทางโดยเร็วเพื่อหลบรถคันอื่น",
        "en": "Change lanes quickly to avoid other cars.",
        "my": "အခြားကားများကိုရှောင်ရန် လမ်းကြောများကို အမြန်ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟแล้วเปลี่ยนช่องทางได้เลย",
        "en": "Turn on the lights and change channels.",
        "my": "မီးများကိုဖွင့်ပြီး လိုင်းများပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 425,
    "category": "safe_driving",
    "image": null,
    "q_th": "ข้อใดคือความหมายที่ถูกต้องของจุดบอดของรถ",
    "q_en": "What is the correct definition of a car's blind spot?",
    "q_my": "ကားတစ်စီးရဲ့ ကန်းကွက်ရဲ့ မှန်ကန်တဲ့ အဓိပ္ပါယ်က ဘာလဲ။",
    "options": [
      {
        "th": "บริเวณด้านหลังของรถที่กระจกมองหลัง จับภาพไม่ได้",
        "en": "The area behind the car that the rearview mirror cannot capture.",
        "my": "ကားနောက်ကြည့်မှန်က ဖမ်းလို့မရတဲ့ ဧရိယာ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บริเวณที่คนขับไม่สามารถมองเห็นได้ชัดในขณะขับรถ",
        "en": "An area where the driver cannot see clearly while driving.",
        "my": "ကားမောင်းနေစဉ် ယာဉ်မောင်းက ရှင်းရှင်းလင်းလင်း မမြင်နိုင်သော ဧရိယာ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บริเวณด้านซ้ายของรถที่ผู้ขับขี่ไม่สามารถมองเห็นได้",
        "en": "The area on the left side of the vehicle that the driver cannot see.",
        "my": "ယာဉ်၏ဘယ်ဘက်ခြမ်းရှိ ဧရိယာသည် ယာဉ်မောင်းမမြင်နိုင်ပေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บริเวณด้านหน้าของรถที่ผู้ขับขี่ไม่สามารถมองเห็นได้",
        "en": "The area in front of the vehicle that the driver cannot see.",
        "my": "ယာဉ်မောင်းသူ မမြင်နိုင်သော ယာဉ်ရှေ့ ဧရိယာ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 426,
    "category": "safe_driving",
    "image": null,
    "q_th": "ไหล่ทาง ใช้สำหรับเหตุการณ์ใด",
    "q_en": "The shoulder is used for which event?",
    "q_my": "ပခုံးကို ဘယ်ပွဲအတွက် သုံးတာလဲ။",
    "options": [
      {
        "th": "ในกรณีที่การจราจรหนาแน่น",
        "en": "In the case of heavy traffic",
        "my": "ယာဉ်အသွားအလာ ထူထပ်သောကိစ္စ၊",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สำหรับรถเข็นขายของสัญจร",
        "en": "For traveling sales carts",
        "my": "နယ်လှည့်အရောင်းတွန်းလှည်းများအတွက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ในกรณีที่มีรถเสีย",
        "en": "In the event of a car breakdown",
        "my": "ကားပျက်ကျတဲ့ကိစ္စ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สำหรับรถจักรยานยนต์สัญจร",
        "en": "For traveling motorcycles",
        "my": "ခရီးသွား ဆိုင်ကယ်များအတွက်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 427,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อคนกำลังข้ามถนนบริเวณทางข้าม ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "When people are crossing the road at the crossing. What must the driver do?",
    "q_my": "လမ်းဖြတ်ကူးတဲ့အခါ လမ်းကူးမှာ။ ယာဉ်မောင်းက ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "ตะโกนด่าผู้ขับขี่คันอื่นที่ทำให้ไม่พอใจ",
        "en": "Shouting at other drivers who offend you.",
        "my": "မင်းကို စော်ကားတဲ့ တခြားကားသမားတွေကို အော်ငေါက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถให้คนข้ามถนนบริเวณทางข้าม",
        "en": "Stop cars to let people cross the road at the crossing.",
        "my": "လမ်းဖြတ်ကူးသူတွေကို လမ်းဖြတ်ကူးဖို့ ကားတွေ ရပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สูบบุหรี่และเขี่ยทิ้งก้นบุหรี่ลงบนถนน",
        "en": "Smoking cigarettes and throwing cigarette butts on the road",
        "my": "စီးကရက်သောက်ပြီး စီးကရက်ဘူးတွေကို လမ်းမပေါ် ပစ်ချတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถ่มน้ำลายหรือเสมหะลงบนถนน",
        "en": "Spitting or phlegm on the road",
        "my": "လမ်းပေါ်တွင် တံတွေးထွေးခြင်း သို့မဟုတ် ချွဲသလိပ်များ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 428,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อเกิดสถานการณ์ฉุกเฉิน รถเสียบนทางด่วน ผู้ขับขี่ควรปฏิบัติอย่างไรเป็นอย่างแรก",
    "q_en": "When an emergency situation occurs Car breaks down on the expressway What should the driver do first?",
    "q_my": "၎) အရေးပေါ်အခြေအနေ အမြန်လမ်းပေါ်တွင် ကားပျက်ကျပါက ယာဉ်မောင်းက ဘာအရင်လုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ชะลอความเร็ว",
        "en": "slow down",
        "my": "နှေးကွေး",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ติดต่อขอความช่วยเหลือ",
        "en": "Contact for help",
        "my": "အကူအညီအတွက် ဆက်သွယ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟฉุกเฉิน",
        "en": "Turn on the emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติและขับรถเข้าไหล่ทางด้านซ้ายพร้อมกับให้สัญญาณไฟฉุกเฉิน",
        "en": "Remain calm and drive onto the left shoulder while flashing your emergency lights.",
        "my": "ငြိမ်ငြိမ်ထားပြီး အရေးပေါ်မီးမှိတ်တုတ်မှိတ်တုတ်မှိတ်တုတ်ဖြင့် ဘယ်ဘက်ပခုံးပေါ်သို့ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 429,
    "category": "safe_driving",
    "image": null,
    "q_th": "ผู้ขับขี่จะต้องหันหน้ามองข้ามไหล่ก่อนทำการเปลี่ยนช่องจราจร เพราะเหตุใด",
    "q_en": "Drivers must look over their shoulders before changing lanes. Why?",
    "q_my": "လမ်းကြောမပြောင်းမီ ယာဉ်မောင်းများသည် ၎င်းတို့၏ ပခုံးများကို ကျော်ကြည့်ရပါမည်။ ဘာကြောင့်လဲ?",
    "options": [
      {
        "th": "จะทำให้สามารถเปลี่ยนช่องจราจรได้รวดเร็วมากขึ้น",
        "en": "It will allow you to change traffic lanes more quickly.",
        "my": "၎င်းသည် သင့်အား ယာဉ်လမ်းကြောင်းများကို ပိုမိုလျင်မြန်စွာ ပြောင်းလဲနိုင်စေမည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อเปลี่ยนช่องจราจรในกรณีที่ไม่ต้องการเปิดสัญญาณไฟเลี้ยว",
        "en": "To change traffic lanes in cases where you do not want to turn on the turn signal.",
        "my": "ကွေ့အချက်ပြမှု မဖွင့်ချင်သော ကိစ္စများတွင် ယာဉ်လမ်းကြောများ ပြောင်းလဲရန်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อให้สามารถเห็นผู้คนที่เดินอยู่บริเวณทางเดินเท้า",
        "en": "To be able to see people walking on the sidewalk.",
        "my": "လမ်းဘေးမှာ လမ်းလျှောက်နေတဲ့လူတွေကို မြင်အောင်ကြည့်ဖို့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อตรวจดูจุดบอดของรถ",
        "en": "To check the car's blind spots",
        "my": "ကား၏မမြင်နိုင်သောနေရာများကို စစ်ဆေးရန်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 430,
    "category": "safe_driving",
    "image": null,
    "q_th": "การขับรถทางไกลเมื่อรู้สึกว่าตนเองง่วงควรปฏิบัติอย่างไร",
    "q_en": "What should you do when driving long distances when you feel drowsy?",
    "q_my": "အဝေးပြေးကားမောင်းတဲ့အခါ ငိုက်မျဉ်းနေတဲ့အခါ ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ขับรถหวาดเสียวเพื่อให้ระบบประสาทตื่นตัว",
        "en": "Take an exciting drive to keep your nervous system alert.",
        "my": "သင့်အာရုံကြောစနစ်သတိရှိရန် စိတ်လှုပ်ရှားဖွယ်ကောင်းသော မောင်းနှင်မှုတစ်ခုကို ယူပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งเครื่องเพื่อให้ถึงจุดหมายโดยเร็ว",
        "en": "Accelerate your engine to reach your destination quickly.",
        "my": "သင့်ပန်းတိုင်ကို မြန်မြန်ရောက်ဖို့ သင့်အင်ဂျင်ကို အရှိန်မြှင့်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดพักนอนหรือยืดเส้นยืดสายตามจุดพัก",
        "en": "Take breaks to sleep or stretch at resting points.",
        "my": "အနားယူအိပ်စက်ရန် သို့မဟုတ် အနားယူရန်နေရာများတွင် အနားယူပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "วิ่งแล้วเบรกบ่อยๆ เพื่อให้หายง่วง",
        "en": "Run and brake often. To relieve sleepiness",
        "my": "မကြာခဏ ပြေးပြီး ဘရိတ်အုပ်ပါ။ အိပ်ငိုက်ခြင်းကို သက်သာစေရန်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 431,
    "category": "safe_driving",
    "image": null,
    "q_th": "ผู้ขับขี่ไม่ควรขับรถขนานตีคู่กับรถชนิดใดเพื่อความปลอดภัย",
    "q_en": "Drivers should not drive in parallel with any type of vehicle for safety.",
    "q_my": "ယာဉ်မောင်းများသည် အန္တရာယ်ကင်းစေရန် မည်သည့်ယာဉ်အမျိုးအစားနှင့်မဆို အပြိုင်မမောင်းသင့်ပါ။",
    "options": [
      {
        "th": "รถสามล้อ",
        "en": "Tricycle",
        "my": "သုံးဘီးဆိုင်ကယ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบรรทุก",
        "en": "truck",
        "my": "ထရပ်ကား",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถจักรยานยนต์",
        "en": "motorcycle",
        "my": "ဆိုင်ကယ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถกระบะ",
        "en": "Pickup truck",
        "my": "ပစ်ကပ်ကား",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 432,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากท่านจอดรถชิดขอบทางทางด้านซ้ายอยู่ และต้องการที่จะเคลื่อนตัวออก ท่านควรปฏิบัติอย่างไร",
    "q_en": "If you park your car on the left side of the road. and want to move out What should you do?",
    "q_my": "၎) သင့်ကားကို လမ်းရဲ့ဘယ်ဘက်ခြမ်းမှာ ရပ်ထားရင်။ ထွက်သွားချင်ရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ให้สัญญาณมือเพื่อขอทาง",
        "en": "Give hand signals to ask for directions.",
        "my": "လမ်းညွှန်ချက်တောင်းရန် လက်အချက်ပြမှုများပေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มองกระจกข้างด้านขวาและกระจกมองหลัง เปิดไฟเลี้ยวขวา ออกรถเมื่อปลอดภัย",
        "en": "Look in the right side mirror and the rearview mirror. Turn on the right turn signal Get out of the car when it's safe.",
        "my": "ညာဖက်မှန်နဲ့ နောက်ကြည့်မှန်ကို ကြည့်ပါ။ ညာဘက်အကွေ့အချက်ပြပါ ဘေးကင်းသောအခါ ကားထဲမှ ဆင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่จำเป็นต้องหันมองดูรถที่จอดอยู่ข้างหน้า มองแค่รถที่ตามมาก็พอ",
        "en": "There is no need to turn around and look at the car parked in front of you. Just looking at the car following is enough.",
        "my": "သင့်ရှေ့မှာ ရပ်ထားတဲ့ ကားကို လှည့်ကြည့်ဖို့ မလိုပါဘူး။ နောက်ကားကိုကြည့်ရုံနဲ့ လုံလောက်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟเพื่อเตือนให้รถคันที่ตามมาชะลอความเร็วลง",
        "en": "Turn on your lights to warn oncoming vehicles to slow down.",
        "my": "အရှိန်လျှော့ရန် လာမည့်ယာဉ်များကို သတိပေးရန် သင့်မီးများကို ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 433,
    "category": "safe_driving",
    "image": null,
    "q_th": "หากพบรถฉุกเฉินเปิดสัญญาณเสียงไซเรนกำลังวิ่งตามหลัง ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "If you find an emergency vehicle with the siren on and running behind. What should the driver do?",
    "q_my": "၎) အရေးပေါ်ယာဉ်ကို ဥသြသံဖွင့်ပြီး နောက်ကနေ ပြေးနေတာတွေ့ရင်။ ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "เปิดช่องทางเดินรถให้รถฉุกเฉินขับผ่านไปได้",
        "en": "Open the lane for emergency vehicles to drive through.",
        "my": "အရေးပေါ်ယာဉ်များ ဖြတ်သန်းမောင်းနှင်နိုင်ရန် လမ်းဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปลี่ยนช่องจราจรไปทางด้านขวาทันที",
        "en": "Immediately change traffic lanes to the right.",
        "my": "ယာဉ်လမ်းကြောင်းများကို ညာဘက်သို့ ချက်ချင်းပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินและเร่งความเร็วทันที",
        "en": "Turn on your emergency lights and accelerate immediately.",
        "my": "အရေးပေါ်မီးများကိုဖွင့်ပြီး ချက်ချင်းအရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟเลี้ยวขวาและขับรถต่อไป",
        "en": "Turn on your right turn signal and continue driving.",
        "my": "သင့်ညာဘက်အကွေ့အချက်ပြကိုဖွင့်ပြီး ဆက်လက်မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 434,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อท่านขับรถอยู่ในสภาพการจราจรที่หนาแน่นและถนนเปียก ซึ่งอาจมีละอองน้ำทำให้มองเห็นสิ่งรอบข้างไม่ชัดเจน ควรใช้ไฟอย่างไร",
    "q_en": "When you drive in heavy traffic and wet roads. There may be water mist making the surroundings unclear. How should I use electricity?",
    "q_my": "ယာဉ်ကြောထူထပ်ပြီး စိုစွတ်သောလမ်းများတွင် မောင်းနှင်သည့်အခါ။ ပတ်ဝန်းကျင်ကို မရှင်းမလင်းဖြစ်စေတဲ့ ရေမြူတွေ ရှိနေနိုင်ပါတယ်။ လျှပ်စစ်ကို ဘယ်လိုသုံးရမလဲ။",
    "options": [
      {
        "th": "ใช้ไฟฉุกเฉิน",
        "en": "Use emergency power",
        "my": "အရေးပေါ်ပါဝါသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ไฟต่ำ",
        "en": "Use low power",
        "my": "ပါဝါနည်းသုံးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้ไฟสูง",
        "en": "Use high power",
        "my": "စွမ်းအားမြင့်သုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ไฟข้างเท่านั้น",
        "en": "Use side lights only.",
        "my": "ဘေးမီးများကိုသာ အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 435,
    "category": "safe_driving",
    "image": null,
    "q_th": "ขณะกำลังจะเลี้ยวรถ และมองเห็นคนกำลังข้ามถนน ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "While turning the car and saw people crossing the road What should the driver do?",
    "q_my": "ကားကို ကွေ့ပြီး လမ်းဖြတ်ကူးတဲ့လူတွေကို တွေ့တော့ ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "บีบแตรไล่เพื่อไม่ให้ผู้คนเดินผ่าน",
        "en": "Honk your horn to keep people from passing by.",
        "my": "လူများမဖြတ်သွားစေရန် မင်းရဲ့ဟွန်းကို ဟွန်းတီးလိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รอจนกว่าคนเดินเท้าจะเดินผ่านไปแล้วจึงเลี้ยว",
        "en": "Wait until the pedestrian has passed before turning.",
        "my": "မကွေ့မီ ခြေကျင်လျှောက်သွားသည်အထိ စောင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "โบกมือและตะโกนต่อว่าเพื่อเร่งให้ผู้คนเดินผ่านไป",
        "en": "Waving and yelling to rush people past.",
        "my": "ဝှေ့ယမ်းပြီး အော်ဟစ်အော်ငေါက်နေပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับเข้าไปใกล้คนเดินเท้าในระยะกระชั้นชิด",
        "en": "Drive close to pedestrians.",
        "my": "လမ်းသွားလမ်းလာများနှင့် နီးကပ်စွာ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 436,
    "category": "safe_driving",
    "image": null,
    "q_th": "การใช้ไฟฉุกเฉินควรใช้เมื่อใด",
    "q_en": "When should emergency lighting be used?",
    "q_my": "အရေးပေါ်အလင်းရောင်ကို ဘယ်အချိန်မှာ အသုံးပြုသင့်လဲ။",
    "options": [
      {
        "th": "เมื่อรถเสียและกีดขวางการจราจร",
        "en": "When a car breaks down and obstructs traffic",
        "my": "ကားပျက်ပြီး ယာဉ်ကြောပိတ်ဆို့တဲ့အခါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เมื่อจอดรถซ้อนคันบนถนนที่มีการเดินรถสวนทาง",
        "en": "When parking two cars on a road with traffic in the opposite direction",
        "my": "ဆန့်ကျင်ဘက် လမ်းကြောင်းတစ်ခုတွင် ကားနှစ်စီးကို ရပ်နားသည့်အခါ၊",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อไฟเลี้ยวไม่ทำงาน",
        "en": "When the turn signal doesn't work",
        "my": "အကွေ့အချက်ပြအလုပ်မလုပ်သောအခါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อเตือนรถที่สวนทางว่าคุณกำลังจะหยุดรถ",
        "en": "To warn oncoming traffic that you are about to stop.",
        "my": "ရပ်တန့်တော့မည့် ယာဉ်ကြောပိတ်ဆို့မှုကို သတိပေးရန်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 437,
    "category": "safe_driving",
    "image": null,
    "q_th": "บริเวณใดสามารถแซงได้",
    "q_en": "Which areas can be overtaken?",
    "q_my": "ဘယ်ဒေသတွေကို ကျော်တက်နိုင်မလဲ။",
    "options": [
      {
        "th": "ไหล่ทาง",
        "en": "shoulder",
        "my": "ပခုံး",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางแยก",
        "en": "crossroads",
        "my": "လမ်းဆုံများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทางลงสะพาน",
        "en": "bridge descent",
        "my": "တံတားအဆင်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถนน 4 เลนที่มีเส้นแบ่งถนนเป็นเส้นประ",
        "en": "4 lane road with dotted road dividers.",
        "my": "အစက်အပြောက်များဖြင့် လမ်းခွဲထားသော 4 လမ်းသွားလမ်း။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 438,
    "category": "safe_driving",
    "image": null,
    "q_th": "เมื่อเกิดสถานการณ์ฉุกเฉิน รถยางแตก ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When an emergency situation occurs, a car's tire bursts, what should the driver do?",
    "q_my": "၎) အရေးပေါ်အခြေအနေ ဖြစ်ပေါ်လာပါက ကားတာယာကွဲပါက ယာဉ်မောင်း ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ค่อยๆ แตะเบรก",
        "en": "Gently tap the brakes.",
        "my": "ဘရိတ်ကို ညင်သာစွာ နှိပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ติดต่อขอความช่วยเหลือ",
        "en": "Contact for help",
        "my": "အကူအညီအတွက် ဆက်သွယ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปล่อยรถให้ไหล พร้อมเปิดสัญญาณไฟฉุกเฉิน",
        "en": "let the car flow Ready to turn on emergency lights",
        "my": "ကားကို စီးဆင်းပါစေ အရေးပေါ်မီးများဖွင့်ရန် အဆင်သင့်ဖြစ်ပါစေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดสัญญาณไฟฉุกเฉิน",
        "en": "Turn on the emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 439,
    "category": "safe_driving",
    "image": null,
    "q_th": "ผู้ที่ได้รับการบาดเจ็บและหยุดเคลื่อนไหวเป็นเวลานาน ๆ เช่นใส่เฝือก หลังจากเสร็จสิ้นการรักษา (ถอดเฝือก) จะส่งผลอย่างไร",
    "q_en": "People who have been injured and have stopped moving for a long time, such as wearing a cast, what will be the effect after treatment (removing the cast) is done?",
    "q_my": "သွန်းဝတ်ဆင်ခြင်းကဲ့သို့သော အချိန်အကြာကြီး လှုပ်ရှားသွားလာမှု ရပ်တန့်သွားသော ဒဏ်ရာရသူများ၊ ကုသမှုခံယူပြီးနောက် မည်ကဲ့သို့ အကျိုးသက်ရောက်မှုရှိမည်နည်း။",
    "options": [
      {
        "th": "ต้องเปลี่ยนวิธีการขับขี่",
        "en": "You must change your driving method.",
        "my": "သင်၏မောင်းနှင်မှုနည်းလမ်းကို ပြောင်းလဲရမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พิการถาวร",
        "en": "Permanently disabled",
        "my": "အပြီးတိုင် ပိတ်ထားသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่มีผลใดๆ",
        "en": "No effect",
        "my": "သက်ရောက်မှုမရှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ความสามารถในการควบคุมยานพาหนะลดชั่วคราว",
        "en": "The ability to control the vehicle is temporarily reduced.",
        "my": "ယာဉ်ကို ထိန်းချုပ်နိုင်မှု ခေတ္တ လျော့ပါးလာသည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 440,
    "category": "safe_driving",
    "image": "/exam_images/safe/1000000000622.webp",
    "q_th": "หากท่านเห็นรถบรรทุกที่อยู่ข้างหน้าเปิดไฟเลี้ยวซ้ายแต่กำลังเคลื่อนไปทางขวา ท่านควรปฏิบัติอย่างไร",
    "q_en": "If you see a truck in front of you with its left turn signal on but moving to the right. What should you do?",
    "q_my": "၎) ဘယ်ဘက်ကွေ့အချက်ပြပြီး ရှေ့ကထရပ်ကားကိုတွေ့ရင် ညာဘက်ကိုရွှေ့ပါ။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "รักษาระยะห่างไว้และรอให้รถใหญ่เคลื่อนไปในทิศทางที่แน่นอน",
        "en": "Keep your distance and wait for the big vehicle to move in a certain direction.",
        "my": "သင့်အကွာအဝေးကို ထိန်းထားပြီး တိကျသော ဦးတည်ရာသို့ ရွေ့လျားသွားမည့် ယာဉ်ကြီးအား စောင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ให้เข้าใจว่าผู้ขับขี่รถใหญ่นั้นเปิดสัญญาณไฟผิด",
        "en": "Understand that the driver of a large vehicle turned on the wrong light.",
        "my": "ယာဉ်ကြီးတစ်စင်း၏ ယာဉ်မောင်းသည် မီးလင်းမှားသွားသည်ကို နားလည်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับเข้าไปใกล้ๆ เพื่อเตรียมแซง",
        "en": "drive closer to prepare to overtake",
        "my": "ကျော်တက်ရန် ပြင်ဆင်ရန် အနီးကပ် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เตรียมแซงเมื่อรถใหญ่เริ่มชะลอความเร็ว",
        "en": "Prepare to overtake when large vehicles begin to slow down.",
        "my": "ယာဉ်ကြီးများ နှေးကွေးလာသောအခါ ကျော်တက်ရန် ပြင်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 441,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การเติมน้ำกลั่นควรอยู่ระดับใดของแบตเตอรี่",
    "q_en": "At what level should I add distilled water to the battery?",
    "q_my": "ဘက်ထရီထဲကို ပေါင်းခံရေကို ဘယ်အဆင့်မှာ ထည့်ရမလဲ။",
    "options": [
      {
        "th": "เติมให้อยู่ในระดับที่กำหนด",
        "en": "Fill it to the specified level.",
        "my": "သတ်မှတ်ထားတဲ့ အဆင့်အထိ ဖြည့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เติมให้สูงกว่าที่กำหนดเล็กน้อย",
        "en": "Fill slightly higher than required.",
        "my": "သတ်မှတ်ထားသည့်ထက် အနည်းငယ်ပိုမြင့်အောင် ဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมจนล้นแล้วปิดฝา",
        "en": "Fill until overflowing and close the lid.",
        "my": "ရေလျှံသည်အထိ ဖြည့်ပြီး အဖုံးပိတ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมให้ต่ำกว่าที่กำหนดเล็กน้อย",
        "en": "Add slightly less than specified.",
        "my": "သတ်မှတ်ထားသည့်ထက် အနည်းငယ်လျော့ထည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 442,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การตรวจสอบความตึงหย่อนของสายพานเครื่องยนต์เบื้องต้น ควรตรวจสอบอย่างไร",
    "q_en": "Basic inspection of engine belt tension. How should I check?",
    "q_my": "အင်ဂျင်ခါးပတ်တင်းအားကို အခြေခံစစ်ဆေးခြင်း။ ဘယ်လိုစစ်ဆေးရမလဲ။",
    "options": [
      {
        "th": "ดูด้วยตาเปล่า",
        "en": "See with the naked eye",
        "my": "ပကတိမျက်စိနဲ့ကြည့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ติดเครื่องฟังเสียงสายพานเครื่องยนต์",
        "en": "Install a sound machine to listen to the engine belt sound.",
        "my": "အင်ဂျင်ခါးပတ်သံကို နားထောင်ရန် အသံချဲ့စက်ကို တပ်ဆင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้มือคลำสายพานเครื่องยนต์",
        "en": "Use your hand to feel the engine belt.",
        "my": "အင်ဂျင်ခါးပတ်ကို ခံစားရန် သင့်လက်ကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้นิ้วมือกดสายพานเครื่องยนต์",
        "en": "Use your fingers to press on the engine belt.",
        "my": "အင်ဂျင်ခါးပတ်ကို နှိပ်ရန် သင့်လက်ချောင်းများကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 443,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "น้ำที่ใช้เติมแบตเตอรี่ ควรใช้น้ำชนิดใด",
    "q_en": "Water used to fill batteries What kind of water should I use?",
    "q_my": "ဘက်ထရီအားဖြည့်အသုံးပြုသောရေသည် မည်သို့သောရေကိုသုံးသင့်သနည်း။",
    "options": [
      {
        "th": "น้ำฝน",
        "en": "Rain water",
        "my": "မိုးရေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำสบู่",
        "en": "Soapy water",
        "my": "ဆပ်ပြာရေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำกลั่น",
        "en": "Distilled water",
        "my": "ပေါင်းခံရေ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "น้ำบาดาล",
        "en": "Groundwater",
        "my": "မြေအောက်ရေ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 444,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การเติมน้ำในถังพักหม้อน้ำควรอยู่ในระดับใด",
    "q_en": "To what level should water be filled in the radiator reservoir?",
    "q_my": "ရေတိုင်ကီ ရေလှောင်ကန်တွင် ရေကို မည်သည့်အဆင့်ထိ ဖြည့်သင့်သနည်း။",
    "options": [
      {
        "th": "ครึ่งถัง",
        "en": "Half bucket",
        "my": "တစ်ဝက်ပုံး",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมเท่าไหร่ก็ได้",
        "en": "You can add as much as you want.",
        "my": "ကြိုက်သလောက်ထည့်လို့ရပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "อยู่ระหว่างเกณฑ์สูง-ต่ำ ที่กำหนดไว้ข้างถังพักน้ำ",
        "en": "Between high and low criteria specified next to the water tank",
        "my": "ရေတိုင်ကီဘေးတွင် သတ်မှတ်ထားသော အမြင့်နှင့် အနိမ့် စံနှုန်းများ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เต็มถัง",
        "en": "Full tank",
        "my": "tank အပြည့်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 445,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดใช้คลัทช์ผิดวิธี",
    "q_en": "Which is the wrong way to use the clutch?",
    "q_my": "Clutch ကို အသုံးပြုရန် မည်သည့်နည်းမှာ မှားယွင်းသနည်း။",
    "options": [
      {
        "th": "ขณะจะหยุดรถ",
        "en": "While stopping the car",
        "my": "ကားရပ်နေစဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขณะขับรถลงทางลาดชัน",
        "en": "While driving down a steep slope",
        "my": "မတ်စောက်သော တောင်စောင်းသို့ မောင်းနှင်နေစဉ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขณะจะเปลี่ยนเกียร์",
        "en": "While changing gear",
        "my": "ဂီယာပြောင်းနေစဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขณะจะสตาร์ทเครื่อง",
        "en": "While starting the machine",
        "my": "စက်စတင်နေစဉ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 446,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ยางที่หมดอายุจะมีลักษณะอย่างไร",
    "q_en": "What do expired tires look like?",
    "q_my": "သက်တမ်းလွန်တာယာတွေက ဘယ်လိုပုံစံလဲ။",
    "options": [
      {
        "th": "มีรอยแตกร้าวตามแนวขอบยาง",
        "en": "There are cracks along the edge of the tire.",
        "my": "တာယာအစွန်းတလျှောက် အက်ကွဲကြောင်းများရှိသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เวลาเปียกน้ำจะไม่เกาะยาง",
        "en": "When it's wet, it won't stick to the rubber.",
        "my": "စိုစွတ်တဲ့အခါ ရော်ဘာနဲ့ ကပ်မနေပါဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยางจะมีสีขาวนวล",
        "en": "The rubber will be soft white.",
        "my": "ရော်ဘာသည် ပျော့ပျောင်းဖြူလာလိမ့်မည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยางจะมีสีดำสนิท",
        "en": "The rubber will be completely black.",
        "my": "ရော်ဘာသည် လုံးဝအနက်ရောင်ဖြစ်လိမ့်မည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 447,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การตรวจสอบลมยางที่ถูกต้องควรปฏิบัติอย่างไร",
    "q_en": "How should you check the correct tire pressure?",
    "q_my": "တာယာလေဖိအားကို ဘယ်လိုစစ်ဆေးသင့်လဲ။",
    "options": [
      {
        "th": "เอาเหล็กมาตีที่หน้ายาง",
        "en": "Take an iron and hit it on the front of the tire.",
        "my": "သံကိုယူ၍ တာယာရှေ့ကို ရိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้เครื่องวัดลมยาง",
        "en": "Use a tire pressure gauge.",
        "my": "တာယာဖိအားတိုင်းကိရိယာကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ดูด้วยตาเปล่า",
        "en": "See with the naked eye",
        "my": "ပကတိမျက်စိနဲ့ကြည့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้มือคลำ",
        "en": "Use your hands to feel.",
        "my": "ခံစားဖို့ လက်ကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 448,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "กรณีออกรถ ถ้าปล่อยคลัทช์เร็วจะมีผลอย่างไร",
    "q_en": "In the case of starting the car, what will be the effect if the clutch is released quickly?",
    "q_my": "ကားကိုစပြီးလုပ်တဲ့အခါ Clutch မြန်မြန်ထွက်ရင် ဘယ်လိုအကျိုးသက်ရောက်မှုရှိမလဲ။",
    "options": [
      {
        "th": "ออกตัวได้เร็ว",
        "en": "Get out quickly",
        "my": "မြန်မြန်ထွက်သွား",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจะแรง",
        "en": "The car will be strong.",
        "my": "ကားအားကောင်းလာမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะกระตุกและดับ",
        "en": "Will jerk and turn off",
        "my": "လှုပ်ပြီး ပိတ်သွားလိမ့်မယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ควบคุมกำลังรถได้ง่าย",
        "en": "Easy to control vehicle power",
        "my": "မော်တော်ကားပါဝါကို ထိန်းချုပ်ရန် လွယ်ကူသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 449,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ถ้าเหยียบคลัทช์ไม่สุด ขณะเข้าเกียร์จะมีผลอย่างไร",
    "q_en": "If you don't step on the clutch all the way What effect will it have when shifting into gear?",
    "q_my": "Clutch ကို တောက်လျှောက်မနင်းရင် ဂီယာပြောင်းတဲ့အခါ ဘယ်လိုအကျိုးသက်ရောက်မှုရှိမလဲ။",
    "options": [
      {
        "th": "ประหยัดน้ำมัน",
        "en": "Save fuel",
        "my": "လောင်စာဆီချွေတာပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เข้าเกียร์ง่ายขึ้น",
        "en": "Easier to shift into gear",
        "my": "ဂီယာပြောင်းရတာ ပိုလွယ်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ออกตัวดีขึ้นกว่าเดิม",
        "en": "Starting out better than before",
        "my": "အရင်ကထက် ပိုကောင်းလာမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้เกียร์มีเสียงดัง",
        "en": "Make the gear noise",
        "my": "ဂီယာကို ဆူညံအောင်လုပ်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 450,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การหมุนพวงมาลัยรถขณะรถจอดอยู่กับที่จะมีผลอย่างไร",
    "q_en": "What are the effects of turning the steering wheel while the car is stationary?",
    "q_my": "ကားရပ်နေစဉ် စတီယာရင်ဘီးလှည့်ခြင်းရဲ့ ဆိုးကျိုးတွေက ဘာတွေလဲ။",
    "options": [
      {
        "th": "สิ้นเปลืองน้ำมันเชื้อเพลิง",
        "en": "Fuel consumption",
        "my": "လောင်စာဆီသုံးစွဲမှု",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สิ้นเปลืองน้ำมันพาวเวอร์",
        "en": "Consuming power oil",
        "my": "ပါဝါဆီစားသုံးခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้หมุนพวงมาลัยง่ายขึ้น",
        "en": "Makes turning the steering wheel easier",
        "my": "စတီယာရင်ဘီးကို လှည့်ရလွယ်ကူစေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดอกยางสึกเร็วกว่าปกติ",
        "en": "Tire tread wears faster than normal.",
        "my": "တာယာနင်းခြင်းသည် ပုံမှန်ထက်ပိုမြန်သည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 451,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "หลังจากขับรถผ่านบริเวณน้ำท่วม ท่านควรทดสอบระบบใดเป็นลำดับแรก",
    "q_en": "After driving through the flooded area Which system should you test first?",
    "q_my": "ရေမြုပ်နေတဲ့နေရာကို ဖြတ်မောင်းပြီးရင် ဘယ်စနစ်ကို အရင်စမ်းသပ်သင့်လဲ။",
    "options": [
      {
        "th": "ระบบไฟฟ้า",
        "en": "Electrical system",
        "my": "လျှပ်စစ်စနစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบบสตาร์ทเครื่องยนต์",
        "en": "Engine starting system",
        "my": "အင်ဂျင်စတင်စနစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบบเบรก",
        "en": "Brake system",
        "my": "ဘရိတ်စနစ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ระบบช่วงล่าง",
        "en": "Suspension system",
        "my": "Suspension စနစ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 452,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ในขณะที่ขับรถอยู่ มีกลิ่นเหม็นไหม้ แอร์เริ่มไม่เย็น เครื่องยนต์เร่งไม่ขึ้นควรปฏิบัติอย่างไร",
    "q_en": "While driving There is a burning smell. The air conditioner is starting to not cool. The engine won't accelerate. What should I do?",
    "q_my": "ကားမောင်းနေစဉ် အနံ့ဆိုးထွက်နေသည်။ လေအေးပေးစက်က မအေးတော့ဘူး။ အင်ဂျင်က အရှိန်မတက်ဘူး။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ลดความเร็วลงแล้วขับต่อไป",
        "en": "Reduce your speed and keep driving.",
        "my": "အရှိန်လျှော့ပြီး ဆက်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับต่อไปเรื่อยๆ",
        "en": "Keep driving.",
        "my": "ဆက်မောင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถทันทีกลางถนนห้ามเคลื่อนย้าย",
        "en": "Immediately stop the vehicle in the middle of the road. Do not move.",
        "my": "ကားကို လမ်းလယ်မှာ ချက်ခြင်းရပ်ပါ။ မလှုပ်နဲ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถในที่ปลอดภัยแล้วเรียกช่างมาตรวจเช็ค",
        "en": "Park your car in a safe place and call a mechanic to come check it out.",
        "my": "သင့်ကားကို လုံခြုံသောနေရာတွင် ရပ်နားပြီး စစ်ဆေးရန် စက်ပြင်ဆရာကို ခေါ်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 453,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ในการถอดขั้วแบตเตอรี่ ควรถอดขั้วใดก่อน",
    "q_en": "To remove the battery terminals Which terminal should be disconnected first?",
    "q_my": "ဘက်ထရီစက်များကို ဖယ်ရှားရန် မည်သည့် terminal ကို ဦးစွာ ဖြုတ်သင့်သနည်း။",
    "options": [
      {
        "th": "ขั้วบวก",
        "en": "Anode",
        "my": "Anode",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขั้วไหนก่อนก็ได้",
        "en": "Whichever pole comes first is fine.",
        "my": "ဘယ်တိုင်ကို အရင်ရောက်တာ ကောင်းမလဲ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทั้งสองขั้วพร้อมกัน",
        "en": "Both terminals simultaneously",
        "my": "terminals နှစ်ခုလုံး တပြိုင်နက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขั้วลบ",
        "en": "Negative pole",
        "my": "အနှုတ်တိုင်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 454,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "สัญญาณไฟเตือนบนแผงหน้าปัดรถสีใด ที่ไม่ควรปรากฏขณะขับรถ",
    "q_en": "What color are the warning lights on the car's dashboard? that should not appear while driving",
    "q_my": "ကား၏ ဒက်ရှ်ဘုတ်ပေါ်ရှိ အချက်ပြမီးများသည် မည်သည့်အရောင်များ ဖြစ်သနည်း။ ကားမောင်းနေစဉ် မပေါ်သင့်ပါ။",
    "options": [
      {
        "th": "สีเหลือง",
        "en": "Yellow",
        "my": "အဝါရောင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สีแดง",
        "en": "Red",
        "my": "အနီရောင်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สีฟ้า",
        "en": "Blue",
        "my": "အပြာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สีเขียว",
        "en": "Green",
        "my": "အစိမ်းရောင်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 455,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เพื่อความปลอดภัยในการขับรถช่วงฤดูฝน ควรตรวจสอบอุปกรณ์ส่วนควบสิ่งใดของรถก่อนเป็นลำดับแรก",
    "q_en": "For safety in driving during the rainy season What equipment of the car should be checked first?",
    "q_my": "မိုးရာသီမှာ မောင်းနှင်ရာမှာ အန္တရာယ်ကင်းဖို့ ကားရဲ့ ဘယ်ပစ္စည်းတွေကို အရင်စစ်ဆေးသင့်လဲ။",
    "options": [
      {
        "th": "น้ำกลั่นแบตเตอรี่",
        "en": "Distilled battery water",
        "my": "ရေစက်ဘက်ထရီရေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ที่ปัดน้ำฝน",
        "en": "Windshield wiper",
        "my": "လေကာမှန် wiper",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตรวจเช็คประตูหน้าต่างรถ",
        "en": "Check car doors and windows",
        "my": "ကားတံခါးနှင့် ပြတင်းပေါက်များကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำในหม้อน้ำ",
        "en": "Water in the radiator",
        "my": "ရေတိုင်ကီထဲတွင် ရေ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 456,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "รถที่ขับมาด้วยความเร็วสูงแล้วเหยียบเบรกอย่างกะทันหัน (รถไม่ใช้เบรก ABS) จะมีผลอย่างไร",
    "q_en": "A car driving at high speed suddenly slams on the brakes. (The car does not use ABS brakes.) What will be the effect?",
    "q_my": "အရှိန်ပြင်းပြင်း မောင်းနှင်လာတဲ့ ကားတစ်စီးက ဘရိတ်ကို ရုတ်တရက် ဆောင့်တိုက်ပါတယ်။ (ကားသည် ABS ဘရိတ်ကို အသုံးမပြုပါ။) မည်သို့အကျိုးသက်ရောက်မည်နည်း။",
    "options": [
      {
        "th": "จะหยุดรถได้ตามระยะที่กำหนด",
        "en": "The car will be able to stop within the specified distance.",
        "my": "ကားသည် သတ်မှတ်ထားသော အကွာအဝေးအတွင်း ရပ်တန့်နိုင်မည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ล้อจะล็อค และรถจะหยุดทันที",
        "en": "The wheels will lock and the vehicle will stop immediately.",
        "my": "ဘီးများ လော့ခ်ကျသွားပြီး ကားသည် ချက်ချင်းရပ်သွားမည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ล้อจะล็อค และรถจะหมุน",
        "en": "The wheels will lock and the car will spin.",
        "my": "ဘီးတွေ သော့ခတ်ပြီး ကားက လှည့်သွားလိမ့်မယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถจะค่อยๆ ชะลอความเร็วลง",
        "en": "The car will gradually slow down.",
        "my": "ကားက တဖြည်းဖြည်း နှေးလာမယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 457,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ขณะขับรถยางรถแตก จะมีอาการอย่างไร",
    "q_en": "While driving, a car tire broke. What are the symptoms?",
    "q_my": "ကားမောင်းနေရင်း ကားတာယာကွဲသွားတယ်။ လက္ခဏာတွေက ဘာတွေလဲ။",
    "options": [
      {
        "th": "รถหยุดกะทันหัน",
        "en": "The car stopped suddenly",
        "my": "ကားက ရုတ်တရက် ရပ်သွားတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พวงมาลัยรถจะไร้น้ำหนัก",
        "en": "The car's steering wheel is weightless.",
        "my": "ကား၏စတီယာရင်ဘီးသည် အလေးချိန်ကင်းသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เบรกจะไม่ทำงาน",
        "en": "The brakes will not work.",
        "my": "ဘရိတ်တွေ အလုပ်မလုပ်ပါဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พวงมาลัยจะหนัก รถจะเอียง",
        "en": "The steering wheel becomes heavy and the car tilts.",
        "my": "စတီယာရင်ဘီးက လေးလံလာပြီး ကားက တိမ်းစောင်းသွားတယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 458,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ในขณะที่กำลังขับรถ ถ้าฝากระโปรงหน้ารถเปิด ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "While driving If the hood of the car is open What should the driver do?",
    "q_my": "ကားမောင်းနေစဉ် ကားအဖုံးပွင့်နေပါက ယာဉ်မောင်း ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "หักเลี้ยวรถเข้าข้างทางทันที เพื่อปิดฝากระโปรงให้เรียบร้อย",
        "en": "Immediately swerve the car onto the side of the road. To close the hood properly",
        "my": "ကားကို အမြန်လမ်းဘေးသို့ တွန်းချလိုက်သည်။ အဖုံးကို စနစ်တကျပိတ်ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เบรกกะทันหัน",
        "en": "Sudden braking",
        "my": "ရုတ်တရက် ဘရိတ်အုပ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็วแล้วจอดข้างทาง เพื่อปิดฝากระโปรงให้เรียบร้อย",
        "en": "Reduce your speed and park on the side of the road. To close the hood properly",
        "my": "အရှိန်လျှော့ပြီး လမ်းဘေးမှာ ရပ်ပါ။ အဖုံးကို စနစ်တကျပိတ်ရန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหยียบคันเร่งให้มิดเพื่อฝากระโปรงจะได้กระแทกปิด",
        "en": "Depress the gas pedal fully so that the hood can slam shut.",
        "my": "အဖုံးပိတ်နိုင်စေရန် ဓာတ်ငွေ့နင်းအား အပြည့်နှိမ့်ချပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 459,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การตรวจสอบว่าเข็มขัดนิรภัยยังใช้งานได้ดีหรือไม่ ควรตรวจสอบอย่างไร",
    "q_en": "Checking to see if the seat belt is still working properly. How should I check?",
    "q_my": "ထိုင်ခုံခါးပတ်သည် ကောင်းမွန်စွာအလုပ်လုပ်ခြင်း ရှိ၊ မရှိ စစ်ဆေးခြင်း ဘယ်လိုစစ်ဆေးရမလဲ။",
    "options": [
      {
        "th": "ดูว่าเข็มขัดมียี่ห้อหรือไม่",
        "en": "See if the belt has a brand or not.",
        "my": "ခါးပတ်တွင် အမှတ်တံဆိပ်ပါရှိ၊ မရှိကို ကြည့်ရှုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กระตุกดึงสายเข็มขัดอย่างเร็ว แล้วสายเข็มขัดต้องล็อค",
        "en": "Quickly tug on the belt. Then the belt must be locked.",
        "my": "ခါးပတ်ကို အမြန်ဆွဲလိုက်သည်။ ပြီးရင် ခါးပတ်ကို သော့ခတ်ထားရပါမယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ต้องมีสีเข้มๆ",
        "en": "Must have a dark color.",
        "my": "အနက်ရောင်ရှိရမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดูว่าเป็นของใหม่หรือไม่",
        "en": "See if it's new or not.",
        "my": "အသစ်ဟုတ်၊ မဟုတ် ကြည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 460,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การเข้าเกียร์ถอยหลังขณะรถยังไม่หยุดนิ่งมีผลเสียอย่างไร",
    "q_en": "What are the negative effects of shifting into reverse gear while the car is still stationary?",
    "q_my": "ကားရပ်ထားစဉ် ဂီယာပြောင်းပြန်ပြောင်းခြင်းရဲ့ ဆိုးကျိုးတွေက ဘာတွေလဲ။",
    "options": [
      {
        "th": "เข้าเกียร์ยากและทำให้เกียร์เสียเร็วกว่าปกติ",
        "en": "Difficulty shifting into gear and causing the transmission to fail faster than normal.",
        "my": "ဂီယာပြောင်းရာတွင် ခက်ခဲပြီး ဂီယာအား ပုံမှန်ထက် ပိုမြန်စေပါသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทำให้น้ำมันเกียร์หมดเร็ว",
        "en": "Makes the gear oil run out quickly.",
        "my": "ဂီယာဆီ အမြန်ကုန်စေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่มีผลต่อส่วนใดของรถ",
        "en": "It does not affect any part of the car.",
        "my": "ကား၏ မည်သည့်အစိတ်အပိုင်းကိုမျှ မထိခိုက်စေပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องยนต์กินน้ำมันเครื่อง",
        "en": "The engine consumes engine oil.",
        "my": "အင်ဂျင်က အင်ဂျင်ဆီလောင်တယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 461,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดเป็นการสตาร์ทเครื่องยนต์ที่ถูกต้อง",
    "q_en": "Which is the correct way to start the engine?",
    "q_my": "အင်ဂျင်စတင်ရန် ဘယ်နည်းက မှန်ကန်သနည်း။",
    "options": [
      {
        "th": "เหยียบคลัทช์-สตาร์ทเครื่องยนต์",
        "en": "Push the clutch - start the engine.",
        "my": "clutch ကိုတွန်းပါ - အင်ဂျင်ကိုစတင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขึ้นเบรกมือ-ปลดเกียร์ว่าง -ปิดอุปกรณ์ไฟฟ้า-เหยียบคลัทช์-สตาร์ทเครื่องยนต์",
        "en": "Put on the handbrake - shift into neutral. - Turn off electrical equipment - step on the clutch - start the engine",
        "my": "လက်ဘရိတ်ကိုတပ်ပါ - ကြားနေသို့ပြောင်းပါ။ - လျှပ်စစ်ပစ္စည်းများကိုပိတ်ပါ - ကလစ်ကိုလှမ်းဆွဲပါ - အင်ဂျင်ကိုစတင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ปลดเบรกมือ-ปิดอุปกรณ์ไฟฟ้า-สตาร์ทเครื่องยนต์",
        "en": "Release the handbrake - turn off electrical equipment - start the engine.",
        "my": "လက်ဘရိတ်ကို လွှတ်ပါ - လျှပ်စစ်ပစ္စည်းများကို ပိတ်ပါ - အင်ဂျင်ကို စတင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปลดเกียร์ว่าง-ขึ้นเบรกมือ-สตาร์ทเครื่องยนต์",
        "en": "Put the gear in neutral - put on the handbrake - start the engine.",
        "my": "ဂီယာကို ဘက်မလိုက်ဘဲထားပါ - လက်ဘရိတ်ကိုတပ်ပါ - အင်ဂျင်ကိုစတင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 462,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เพราะเหตุใดรถจึงลื่นไถลได้ง่ายขณะฝนตกใหม่ๆ",
    "q_en": "Why do cars easily slip and slide during fresh rain?",
    "q_my": "မိုးရာသီမှာ ကားတွေ ဘာကြောင့် လွယ်လွယ်နဲ့ ချော်လဲကျရတာလဲ။",
    "options": [
      {
        "th": "ถนนคอนกรีตดูดซับน้ำฝนได้เป็นอย่างดี",
        "en": "Concrete roads absorb rainwater very well.",
        "my": "ကွန်ကရစ်လမ်းများသည် မိုးရေကို ကောင်းစွာစုပ်ယူပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ฝนตกทำให้ถนนชำรุดเป็นหลุมเป็นบ่อ",
        "en": "The rain caused the road to become damaged and potholed.",
        "my": "မိုးရွာသွန်းမှုကြောင့် လမ်းများပျက်စီးကာ ရွှံ့နစ်သွားခဲ့သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำฝนจะชะล้างถนนให้สะอาด",
        "en": "Rainwater will wash the roads clean.",
        "my": "မိုးရေတွေက လမ်းတွေကို သန့်ရှင်းစေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำฝนจะกลายเป็นแผ่นฟิล์มรองรับระหว่างยางกับพื้นถนน",
        "en": "Rainwater turns into a protective film between the tires and the road surface.",
        "my": "မိုးရေသည် တာယာနှင့် လမ်းမျက်နှာပြင်ကြားတွင် အကာအကွယ်ဖလင်အဖြစ် ပြောင်းလဲသွားသည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 463,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เพื่อความปลอดภัยเมื่อออกรถเคลื่อนที่ไปข้างหน้าได้ประมาณ 3-4 เมตร ควรทดสอบอะไรเป็นอันดับแรก",
    "q_en": "For safety when moving the car forward about 3-4 meters, what should be tested first?",
    "q_my": "ဘေးကင်းစေရန်အတွက် ကားကို ရှေ့သို့ ၃-၄ မီတာခန့် ရွေ့သောအခါ ဘာကို အရင်စမ်းသပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ทดสอบไฟสูง",
        "en": "High beam test",
        "my": "မြင့်မားသောအလင်းစမ်းသပ်မှု",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทดสอบระบบเบรก",
        "en": "Brake system test",
        "my": "ဘရိတ်စနစ်စမ်းသပ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทดสอบไฟฟ้า",
        "en": "Electrical test",
        "my": "လျှပ်စစ်စမ်းသပ်မှု",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทดสอบสัญญาณแตร",
        "en": "Horn signal test",
        "my": "ဟွန်းအချက်ပြစမ်းသပ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 464,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดเป็นการเตรียมความพร้อมของรถก่อนขับรถ",
    "q_en": "Which is the preparation of the car before driving?",
    "q_my": "ကားမမောင်းခင် ဘယ်အရာက ပြင်ဆင်ထားလဲ။",
    "options": [
      {
        "th": "ดูหนังสือแผนที่ทางหลวงแผ่นดิน",
        "en": "Look at the national highway map book.",
        "my": "အမျိုးသားလမ်းမကြီး မြေပုံစာအုပ်ကို ကြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสภาพอากาศ",
        "en": "Check the weather",
        "my": "ရာသီဥတုကိုစစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจแรงดันลมยาง,เบรก,น้ำมันหล่อลื่น",
        "en": "Check tire pressure, brakes, lubricant",
        "my": "တာယာဖိအား၊ ဘရိတ်၊ ချောဆီတို့ကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ต่อใบอนุญาตขับรถ",
        "en": "Renew your driver's license",
        "my": "သင့်ယာဉ်မောင်းလိုင်စင်ကို သက်တမ်းတိုးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 465,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "หลังจากขับรถลุยน้ำ ผ้าเบรกเปียกมีวิธีแก้ไขให้แห้งได้อย่างไร",
    "q_en": "After driving through water How can we fix wet brake pads and keep them dry?",
    "q_my": "ရေဖြတ်မောင်းပြီးနောက် စိုစွတ်နေသော ဘရိတ်အုပ်များကို မည်သို့ပြုပြင်ပြီး ခြောက်သွေ့အောင်ထားနိုင်မည်နည်း။",
    "options": [
      {
        "th": "ขับรถให้เร็วๆ",
        "en": "Drive quickly.",
        "my": "မြန်မြန်မောင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถช้าๆ เหยียบเบรกเบาๆ แล้วปล่อยหลายๆ ครั้ง",
        "en": "Drive slowly, step on the brakes lightly. then release several times",
        "my": "ဖြည်းဖြည်းမောင်းပါ၊ ဘရိတ်ကို ပေါ့ပေါ့တန်တန် မောင်းပါ။ ပြီးရင် အကြိမ်ပေါင်းများစွာ လွှတ်လိုက်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เหยียบเบรกแรงๆ",
        "en": "Step on the brakes hard.",
        "my": "ဘရိတ်ကို ပြင်းပြင်းထန်ထန် နင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถเข้าเกียร์ว่างและเร่งเครื่องยนต์ไว้สัก 10 นาที",
        "en": "Put the car in neutral and rev the engine for 10 minutes.",
        "my": "ကားကို ဘက်မလိုက်ဘဲ အင်ဂျင်ကို 10 မိနစ်ခန့် နှပ်ထားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 466,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ขณะขับรถเครื่องยนต์เกิดความร้อนสูง ควรปฏิบัติอย่างไร",
    "q_en": "While driving, the engine overheats. What should I do?",
    "q_my": "ကားမောင်းနေစဉ် အင်ဂျင်အပူလွန်ကဲသည်။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "หยุดรถที่ปลอดภัย แล้วปล่อยให้เครื่องเย็นก่อน",
        "en": "Stop the car safely Then let the machine cool first.",
        "my": "ကားကို ဘေးကင်းစွာရပ်ပြီးနောက် စက်ကို အရင်အေးအောင်ထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หยุดรถที่ปลอดภัย แล้วเปิดฝาหม้อน้ำ เติมน้ำทันที",
        "en": "Stop the car safely Then open the radiator cap and add water immediately.",
        "my": "ကားကို ဘေးကင်းစွာရပ်ပြီး ရေတိုင်ကီထုပ်ကိုဖွင့်ပြီး ရေချက်ချင်းထည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถที่ปลอดภัย เอาน้ำเย็นมาราดเครื่องยนต์",
        "en": "Stop the car safely Take cold water and pour it over the engine.",
        "my": "ကားကို ဘေးကင်းစွာရပ်ပြီး ရေအေးယူကာ အင်ဂျင်ပေါ် လောင်းချပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถที่ปลอดภัย แล้วเอาน้ำมาราดเครื่องยนต์",
        "en": "Stop the car safely Then pour water on the engine.",
        "my": "ကားကို ဘေးကင်းစွာရပ်ပြီး အင်ဂျင်ပေါ်ရေလောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 467,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ลมยางล้อหน้าอ่อน จะมีผลต่อการขับขี่อย่างไร",
    "q_en": "Weak front tire pressure How will it affect driving?",
    "q_my": "ရှေ့တာယာဖိအား အားနည်းပါက မောင်းနှင်မှုအပေါ် မည်သို့အကျိုးသက်ရောက်နိုင်မည်နည်း။",
    "options": [
      {
        "th": "เวลานั่งรู้สึกเหมือนรถจะกระตุกอยู่ตลอดเวลา",
        "en": "When sitting, it feels like the car is jerking all the time.",
        "my": "ထိုင်တဲ့အခါ ကားက တချိန်လုံး တုန်နေသလို ခံစားရတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ประหยัดยางแต่เปลืองน้ำมัน",
        "en": "Saves on tires but wastes fuel.",
        "my": "တာယာကို သက်သာစေသော်လည်း လောင်စာဆီ ဖြုန်းတီးသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยางล้อหน้าสึกหรอ และรถกินน้ำมันมากขึ้น",
        "en": "Front tire wear and the car consumes more fuel",
        "my": "ရှေ့တာယာ ဟောင်းနွမ်းပြီး ကားက ဆီစား ပိုပါတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ประหยัดน้ำมันแต่เปลืองยาง",
        "en": "Saves gas but wastes tires.",
        "my": "ဓာတ်ငွေ့ကို သက်သာစေသော်လည်း တာယာများကို ဖြုန်းတီးသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 468,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การตรวจลมยางควรตรวจเมื่อใด",
    "q_en": "When should you check tire pressure?",
    "q_my": "တာယာဖိအားကို ဘယ်အချိန်မှာ စစ်ဆေးသင့်လဲ။",
    "options": [
      {
        "th": "ตรวจเมื่อไรก็ได้",
        "en": "You can check at any time.",
        "my": "အချိန်မရွေး စစ်ဆေးနိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขณะที่ยางยังเย็นอยู่",
        "en": "While the tires are still cool",
        "my": "တာယာများ အေးနေချိန်တွင်၊",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขณะที่บรรทุกของหนัก",
        "en": "While carrying heavy items",
        "my": "လေးလံသောပစ္စည်းများကို သယ်ဆောင်နေစဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขณะวิ่งใช้งานแล้วประมาณ 2 ชั่วโมง",
        "en": "While running, it has been used for about 2 hours.",
        "my": "လည်ပတ်နေစဉ် ၂ နာရီခန့် အသုံးပြုခဲ့သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 469,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ถ้าขั้วแบตเตอรี่มีคราบกรด วิธีการใดเป็นการแก้ไขที่ดีที่สุด",
    "q_en": "If the battery terminals have acid stains What is the best way to fix it?",
    "q_my": "ဘက်ထရီအိုးများတွင် အက်ဆစ်အစွန်းအထင်းများရှိနေပါက ၎င်းကိုပြုပြင်ရန် အကောင်းဆုံးနည်းလမ်းမှာ အဘယ်နည်း။",
    "options": [
      {
        "th": "ใช้น้ำส้มสายชูล้าง",
        "en": "Use vinegar to wash.",
        "my": "ဆေးကြောရန် ရှာလကာရည်ကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้น้ำมะนาวล้าง",
        "en": "Use lemon juice to wash.",
        "my": "လက်ဆေးဖို့ သံပုရာရည်ကို သုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้น้ำอุ่นล้างและทาจาระบี",
        "en": "Use warm water to wash and grease.",
        "my": "ရေနွေးနွေးလေးနဲ့ ဆေးကြောပြီး အဆီပြန်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้น้ำกลั่นล้าง",
        "en": "Use distilled water to wash.",
        "my": "ဆေးကြောရန် ရေပေါင်းရေကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 470,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การเติมน้ำในหม้อพักน้ำควรเติมให้อยู่ในระดับใด",
    "q_en": "To what level should water be added to the reservoir?",
    "q_my": "ရေလှောင်ကန်ထဲကို ရေဘယ်လောက်ထည့်သင့်လဲ။",
    "options": [
      {
        "th": "เติมให้อยู่ระหว่างระดับสูงสุดและต่ำสุด",
        "en": "Fill it between the highest and lowest levels.",
        "my": "အမြင့်ဆုံးနှင့် အနိမ့်ဆုံးအဆင့်ကြားတွင် ဖြည့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เติมให้ถึงฝาปิด",
        "en": "Fill it up to the lid.",
        "my": "အဖုံးအထိဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมให้ต่ำกว่าระดับต่ำสุด",
        "en": "Fill it below the minimum level.",
        "my": "အနိမ့်ဆုံးအဆင့်အောက်တွင် ဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมให้สูงกว่าระดับสูงสุด",
        "en": "Fill it above the maximum level.",
        "my": "အမြင့်ဆုံးအဆင့်ထက် ဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 471,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ท่านควรเติมน้ำมันเชื้อเพลิงรถเครื่องยนต์เบนซินอย่างไร",
    "q_en": "How should you refuel your gasoline engine car?",
    "q_my": "မင်းရဲ့ ဓာတ်ဆီအင်ဂျင်ကားကို ဘယ်လိုဆီဖြည့်သင့်လဲ။",
    "options": [
      {
        "th": "เติมน้ำมันที่มีค่าออกเทนตามที่ระบุไว้ในคู่มือรถ",
        "en": "Fill with gas with the octane rating specified in your vehicle's manual.",
        "my": "သင့်ကား၏လက်စွဲတွင်ဖော်ပြထားသော octane အဆင့်သတ်မှတ်ချက်ဖြင့် ဓာတ်ငွေ့ဖြည့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เติมสูงกว่าค่าที่กำหนดเพื่อป้องกันเครื่องยนต์เสียหาย",
        "en": "Fill higher than the specified value to prevent engine damage.",
        "my": "အင်ဂျင်ပျက်စီးခြင်းမှ ကာကွယ်ရန် သတ်မှတ်ထားသော တန်ဖိုးထက် ပိုမိုမြင့်မားသော ဖြည့်သွင်းမှု။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมค่าที่ต่ำกว่าค่าที่กำหนดเพื่อความประหยัด",
        "en": "Add a value lower than the specified value to save money.",
        "my": "ငွေစုရန် သတ်မှတ်ထားသော တန်ဖိုးထက် နိမ့်သောတန်ဖိုးကို ထည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมค่าเท่าใดก็ได้ตามความสะดวก",
        "en": "Add any value as per your convenience.",
        "my": "သင်အဆင်ပြေသည့်အတိုင်း မည်သည့်တန်ဖိုးကိုမဆို ထည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 472,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เหตุใดจึงไม่ควรเติมน้ำในถังพักหม้อน้ำให้เต็มถัง",
    "q_en": "Why shouldn't the radiator tank be filled with water?",
    "q_my": "ရေတိုင်ကီကို ရေတိုင်ကီကို ဘာကြောင့် ရေမဖြည့်သင့်တာလဲ။",
    "options": [
      {
        "th": "เพราะ น้ำในหม้อน้ำจะร้อนมากยิ่งขึ้น",
        "en": "Because the water in the radiator will become even hotter.",
        "my": "အဘယ်ကြောင့်ဆိုသော် ရေတိုင်ကီအတွင်းရှိ ရေသည် ပိုပူလာလိမ့်မည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพราะ จะทำให้หม้อน้ำเป็นสนิมมากยิ่งขึ้น",
        "en": "Because it will make the radiator rust even more.",
        "my": "အဘယ်ကြောင့်ဆိုသော် ရေတိုင်ကီကို သံချေးပိုတက်စေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพราะ สำรองเนื้อที่การขยายตัวของน้ำเมื่อเกิดความร้อน",
        "en": "Because it reserves the space for expansion of water when heat occurs.",
        "my": "အဘယ်ကြောင့်ဆိုသော် အပူဖြစ်ပေါ်လာသောအခါတွင် ရေကို ချဲ့ထွင်ရန် နေရာလွတ်ကို သိမ်းဆည်းထားသောကြောင့် ဖြစ်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพราะ จะทำให้เครื่องยนต์ชำรุด",
        "en": "Because it will damage the engine.",
        "my": "အင်ဂျင်ကို ပျက်စီးစေသောကြောင့်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 473,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ภายหลังออกรถไปประมาณ 3 ถึง 4 เมตร ควรทดสอบระบบใด",
    "q_en": "After leaving the vehicle approximately 3 to 4 meters, which system should be tested?",
    "q_my": "မီတာမှ 4 မီတာခန့်အကွာမှထွက်ခွာပြီးနောက် မည်သည့်စနစ်အား စမ်းသပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ปรับกระจกมองข้าง",
        "en": "Adjust the side mirror",
        "my": "ဘေးမှန်ကို ချိန်ညှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบบเบรก",
        "en": "Brake system",
        "my": "ဘရိတ်စနစ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไฟเลี้ยว",
        "en": "Turn signal",
        "my": "အချက်ပြလှည့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปรับกระจกมองหลัง",
        "en": "Adjust rearview mirror",
        "my": "နောက်ကြည့်မှန်ချိန်ညှိ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 474,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ยางมีหน้าที่อย่างไร",
    "q_en": "What is the function of rubber?",
    "q_my": "ရော်ဘာရဲ့လုပ်ဆောင်ချက်ကဘာလဲ။",
    "options": [
      {
        "th": "ระบายความร้อน",
        "en": "Cooling",
        "my": "အအေးခံခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยยึดเกาะถนนไม่ให้ลื่นไถล",
        "en": "Helps hold the road and prevent it from slipping.",
        "my": "လမ်းချော်ခြင်းမှ ကာကွယ်ရန် ကူညီပေးသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตัดต่อเครื่องยนต์",
        "en": "Engine editing",
        "my": "အင်ဂျင်တည်းဖြတ်ခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้รถมีกำลังขับเคลื่อน",
        "en": "Make the car have driving power",
        "my": "ကားကို မောင်းနှင်နိုင်စွမ်းရှိပါစေ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 475,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ถ้าระดับน้ำมันเครื่องยนต์ต่ำเกินไปจะมีผลอย่างไร",
    "q_en": "What are the effects if the engine oil level is too low?",
    "q_my": "အင်ဂျင်ဆီ ပမာဏ နည်းလွန်းရင် ဘယ်လို အကျိုးသက်ရောက်မှုတွေ ရှိလဲ။",
    "options": [
      {
        "th": "ทำให้ชิ้นส่วนของเครื่องยนต์สึกหรออย่างรวดเร็ว",
        "en": "This causes engine parts to wear out quickly.",
        "my": "ယင်းကြောင့် အင်ဂျင်အစိတ်အပိုင်းများ လျင်မြန်စွာ ယိုယွင်းပျက်စီးစေသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ประหยัดน้ำมันเชื้อเพลิง",
        "en": "Save fuel",
        "my": "လောင်စာဆီချွေတာပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องแรงสตาร์ทติดง่าย",
        "en": "Powerful engine, easy to start",
        "my": "အားကောင်းသောအင်ဂျင်၊ စတင်ရန်လွယ်ကူသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยืดอายุการทำงานของชิ้นส่วนเครื่องยนต์",
        "en": "Extends the life of engine parts",
        "my": "အင်ဂျင်အစိတ်အပိုင်းများ၏ သက်တမ်းကို တိုးစေသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 476,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เมื่อท่านใช้เบรกแล้วรถเคลื่อนที่ไปด้านใดด้านหนึ่ง ควรปฏิบัติอย่างไร",
    "q_en": "When you apply the brakes, the car moves to one side. What should I do?",
    "q_my": "ဘရိတ်ကို အုပ်လိုက်သောအခါ ကားသည် တစ်ဖက်သို့ ရွေ့သွားသည်။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "เปลี่ยนเกียร์และเหยียบเบรกขึ้นลง",
        "en": "Change gear and step on the brake.",
        "my": "ဂီယာပြောင်းပြီး ဘရိတ်ကို နင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบระบบเบรกโดยเร็วที่สุด",
        "en": "Check the brake system as soon as possible.",
        "my": "ဘရိတ်စနစ်ကို အမြန်ဆုံးစစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้เบรกมือร่วมด้วย",
        "en": "Use the handbrake as well.",
        "my": "လက်ဘရိတ်ကိုလည်း အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพิ่มความดันของลมยาง",
        "en": "Increase tire pressure",
        "my": "တာယာဖိအားကို တိုးပေးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 477,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "วิธียืดอายุการใช้งานของผ้าเบรกควรทำอย่างไร",
    "q_en": "How to extend the life of the brake pads?",
    "q_my": "ဘရိတ်အုပ်တွေရဲ့ သက်တမ်းကို ဘယ်လို သက်တမ်းတိုးမလဲ။",
    "options": [
      {
        "th": "ควรกะระยะในการหยุดรถและเบรกอย่างนุ่มนวล",
        "en": "You should estimate the distance to stop the car and brake gently.",
        "my": "ကားရပ်ရန် အကွာအဝေးကို ခန့်မှန်းပြီး ညင်သာစွာ ဘရိတ်အုပ်သင့်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ควรใช้เบรกมือและเบรกเท้าพร้อมกันเมื่อต้องการหยุดรถ",
        "en": "The handbrake and foot brake should be used simultaneously when stopping the vehicle.",
        "my": "ယာဉ်ကိုရပ်သည့်အခါ လက်ဘရိတ်နှင့် ခြေဘရိတ်ကို တစ်ပြိုင်နက် အသုံးပြုသင့်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรเบรกแบบกระชั้นชิด",
        "en": "You should brake closely.",
        "my": "အနီးကပ် ဘရိတ်အုပ်သင့်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรเบรกและหมุนพวงมาลัยไปทางซ้ายและขวาเล็กน้อย",
        "en": "You should brake and turn the steering wheel slightly left and right.",
        "my": "ဘရိတ်အုပ်ပြီး စတီယာရင်ကို ဘယ်ညာ အနည်းငယ်ကွေ့သင့်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 478,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดคือวิธีป้องกันไม่ให้เครื่องยนต์ร้อนจัด",
    "q_en": "What is the method to prevent the engine from overheating?",
    "q_my": "အင်ဂျင်အပူလွန်ကဲခြင်းမှ ကာကွယ်ရန်နည်းလမ်းမှာ အဘယ်နည်း။",
    "options": [
      {
        "th": "เปลี่ยนพัดลมให้แรงขึ้น",
        "en": "Change the fan to a stronger one.",
        "my": "ပန်ကာကို ပိုအားကောင်းအောင် ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมยางรถยนต์ให้มากกว่าปกติ",
        "en": "Fill your car tires more than usual.",
        "my": "သင့်ကားတာယာကို ပုံမှန်ထက် ပိုဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจระดับน้ำในหม้อน้ำก่อนใช้งานทุกครั้ง",
        "en": "Check the water level in the radiator before every use.",
        "my": "အသုံးမပြုမီ ရေတိုင်ကီအတွင်းရှိ ရေပမာဏကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดเครื่องปรับอากาศรถยนต์ให้แรง",
        "en": "Turn on the car's air conditioner.",
        "my": "ကား၏လေအေးပေးစက်ကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 479,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การเติมลมยาง ควรปฏิบัติอย่างไร",
    "q_en": "How should I inflate tires?",
    "q_my": "တာယာတွေကို ဘယ်လိုလေဖြည့်ရမလဲ။",
    "options": [
      {
        "th": "เติมเท่าไหร่ก็ได้",
        "en": "You can add as much as you want.",
        "my": "ကြိုက်သလောက်ထည့်လို့ရပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปฏิบัติตามคู่มือการใช้รถ",
        "en": "Follow the car user manual.",
        "my": "ကားအသုံးပြုသူလမ်းညွှန်ကို လိုက်နာပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "คาดคะเนด้วยสายตา",
        "en": "Guess with your eyes",
        "my": "မင်းမျက်လုံးနဲ့ ခန့်မှန်းကြည့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้วิธีเคาะแล้วฟังเสียงยาง",
        "en": "Use the knocking method and listen for the sound of the tires.",
        "my": "ခေါက်နည်းကိုသုံး၍ တာယာသံကို နားထောင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 480,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การตรวจเช็กแบตเตอรี่แบบง่ายๆ ว่ามีไฟปกติหรือไม่ กระทำได้อย่างไร",
    "q_en": "Simple battery check whether there is normal power or not How can I do it?",
    "q_my": "ရိုးရှင်းသောဘက်ထရီအား ပုံမှန်ပါဝါရှိ၊ မရှိ စစ်ဆေးရန် မည်သို့လုပ်ဆောင်နိုင်မည်နည်း။",
    "options": [
      {
        "th": "เหยียบคลัตช์และเข้าเกียร์ให้ครบ",
        "en": "Depress the clutch and shift into full gear.",
        "my": "clutch ကိုနှိမ့်ချပြီး ဂီယာအပြည့်ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรและฟังเสียงว่าปกติหรือเบาลง",
        "en": "Honk the horn and listen to see if the sound normalizes or softens.",
        "my": "ဟွန်းကို ဟွန်းတီးပြီး အသံကို ပုံမှန်ဖြစ်စေခြင်း သို့မဟုတ် ပျော့သွားခြင်း ရှိမရှိကို ကြည့်ရှုနားထောင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ออกรถ 2-3 เมตรแล้วทดสอบเบรก",
        "en": "Leave the car 2-3 meters and test the brakes.",
        "my": "ကားကို 2-3 မီတာအကွာတွင်ထားခဲ့ကာ ဘရိတ်ကိုစမ်းသပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หมุนพวงมาลัยไปด้านซ้ายและขวา",
        "en": "Turn the steering wheel left and right.",
        "my": "စတီယာရင်ကို ဘယ်ညာ လှည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 481,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "อุปกรณ์ใดที่ไม่มีส่วนช่วยเพิ่มประสิทธิภาพในการทำงานของเบรกรถ",
    "q_en": "Which equipment does not help increase the efficiency of the car's brakes?",
    "q_my": "ကားဘရိတ်၏ စွမ်းဆောင်ရည်ကို မြှင့်တင်ရန် မည်သည့်ကိရိယာကမှ မကူညီနိုင်ပါ။",
    "options": [
      {
        "th": "ระบบช่วงล่าง",
        "en": "Suspension system",
        "my": "Suspension စနစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เกียร์",
        "en": "Gear",
        "my": "ဂီယာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยางรถยนต์",
        "en": "Car tires",
        "my": "ကားတာယာများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พวงมาลัย",
        "en": "Steering wheel",
        "my": "စတီယာရင်ဘီး",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 482,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดเป็นการตรวจเช็กและบำรุงรักษาอุปกรณ์รถยนต์ที่ไม่ถูกต้อง",
    "q_en": "Which of the following is incorrect checking and maintenance of car equipment?",
    "q_my": "အောက်ဖော်ပြပါများထဲမှ မည်သည့်အရာသည် ကားပစ္စည်းကိရိယာများကို စစ်ဆေးခြင်းနှင့် ပြုပြင်ထိန်းသိမ်းမှု မှားယွင်းနေသနည်း။",
    "options": [
      {
        "th": "เติมน้ำบาดาลในถังหม้อพักน้ำ",
        "en": "Fill the reservoir tank with groundwater.",
        "my": "ရေလှောင်ကန်ကို မြေအောက်ရေဖြည့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ควรใช้น้ำกลั่นเติมลงในแบตเตอรี่",
        "en": "You should use distilled water to fill the battery.",
        "my": "ဘက်ထရီအားဖြည့်ရန် ပေါင်းခံရေကို အသုံးပြုသင့်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรตรวจสอบการรัดตรึงของหัวขั้วแบตเตอรี่ให้มีสภาพพร้อมใช้งานเสมอ",
        "en": "The battery terminal clamps should always be checked to ensure they are ready for use.",
        "my": "အသုံးပြုရန်အတွက် အဆင်သင့်ဖြစ်ကြောင်း သေချာစေရန် ဘက်ထရီ terminal clamps များကို အမြဲစစ်ဆေးသင့်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เติมน้ำมันเครื่องโดยเติมให้อยู่ระดับบนเสมอ",
        "en": "Always add engine oil to the top level.",
        "my": "အင်ဂျင်ဆီ အမြဲထည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 483,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เมื่อเห็นกลุ่มควันจากห้องเครื่องขณะขับรถ ผู้ขับรถควรปฏิบัติอย่างไร",
    "q_en": "When seeing smoke from the engine compartment while driving What should the driver do?",
    "q_my": "ကားမောင်းနေစဉ် အင်ဂျင်ခန်းမှ မီးခိုးငွေ့များ တွေ့ပါက ယာဉ်မောင်း ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ขับรถลงแม่น้ำข้างทาง",
        "en": "Driving down the river on the side of the road",
        "my": "ကားလမ်းဘေး မြစ်ကမ်းစပ်က ဆင်းတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แจ้งกู้ภัยทางหลวง",
        "en": "Notify highway rescue",
        "my": "အမြန်လမ်း ကယ်ဆယ်ရေးစခန်းသို့ အကြောင်းကြားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งสติและขับรถจอดข้างทาง",
        "en": "Stay calm and drive to the side of the road.",
        "my": "စိတ်အေးအေးထားပြီး လမ်းဘေးကို မောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จอดและสละรถทันที",
        "en": "Park and abandon your vehicle immediately.",
        "my": "ရပ်နားပြီး သင့်ကားကို ချက်ချင်းရပ်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 484,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ฝาปิดจุ๊บลมยางมีประโยชน์อย่างไร",
    "q_en": "What are the benefits of tire pressure caps?",
    "q_my": "Tyre Pressure Caps တွေရဲ့ အကျိုးကျေးဇူးတွေက ဘာတွေလဲ။",
    "options": [
      {
        "th": "ป้องกันการขโมยยาง",
        "en": "Prevent tire theft",
        "my": "တာယာခိုးယူခြင်းမှကာကွယ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ป้องกันไม่ให้ใครมาเติมลม",
        "en": "Prevent anyone from adding air.",
        "my": "မည်သူ့ကိုမျှ လေထည့်ခြင်းမှ တားမြစ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ป้องกันลมรั่วซึมและสิ่งสกปรกต่างๆ",
        "en": "Prevents air leaks and various dirt.",
        "my": "လေယိုစိမ့်ခြင်းနှင့် ဖုန်မျိုးစုံကို ကာကွယ်ပေးသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ป้องกันยางแตก",
        "en": "Prevents tire cracking",
        "my": "တာယာကွဲအက်ခြင်းကို ကာကွယ်ပေးသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 485,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ถ้าเติมลมยางแข็งเกินไป จะมีผลกับยางอย่างไร",
    "q_en": "If the tire is too inflated How will it affect the tires?",
    "q_my": "တာယာအရမ်းဖောင်းနေရင် တာယာကို ဘယ်လိုထိခိုက်မလဲ။",
    "options": [
      {
        "th": "การขับขี่จะนุ่มนวลขึ้น",
        "en": "Driving will be smoother.",
        "my": "မောင်းနှင်မှု ချောမွေ့လာမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดอกยางตรงกลางจะสึกหรอเร็วกว่าปกติ",
        "en": "The center tread of a tire will wear faster than normal.",
        "my": "တာယာ၏အလယ်ဗဟိုနင်းသည် ပုံမှန်ထက် ပိုမြန်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทำให้สิ้นเปลืองน้ำมันเชื้อเพลิง",
        "en": "Causing wastage of fuel",
        "my": "လောင်စာဆီ အလေအလွင့်ဖြစ်စေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ดอกยางด้านข้างจะสึกเร็วกว่าปกติ",
        "en": "The tread on the side of the tire will wear faster than normal.",
        "my": "တာယာ၏ဘေးတွင် နင်းခြင်းသည် ပုံမှန်ထက် ပိုမြန်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 486,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การตรวจสอบระดับน้ำมันเครื่องในเครื่องยนต์ ควรตรวจสอบเมื่อใด",
    "q_en": "Checking the oil level in the engine When should I check?",
    "q_my": "အင်ဂျင်အတွင်း ဆီ Level စစ်ဆေးခြင်းကို ဘယ်အချိန်မှာ စစ်ဆေးရမလဲ။",
    "options": [
      {
        "th": "ขณะที่จอดรถบนเนิน",
        "en": "While parking on a hill",
        "my": "တောင်ကုန်းပေါ်တွင် ကားရပ်နေစဉ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หลังดับเครื่องยนต์ทันที",
        "en": "Immediately after turning off the engine",
        "my": "အင်ဂျင်ပိတ်ပြီးတာနဲ့ ချက်ခြင်းပါပဲ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขณะที่เครื่องยนต์ยังเย็นอยู่",
        "en": "While the engine is still cool",
        "my": "အင်ဂျင်အေးနေချိန်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขณะที่เครื่องยนต์ทำงาน",
        "en": "While the engine is running",
        "my": "အင်ဂျင်လည်ပတ်နေစဉ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 487,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "หากน้ำหล่อเย็นในระบบเครื่องยนต์ไม่เพียงพอสำหรับการระบายความร้อน จะส่งผลอย่างไร",
    "q_en": "If the coolant in the engine system is not sufficient for cooling What will be the effect?",
    "q_my": "အင်ဂျင်စနစ်အတွင်း coolant သည် အအေးခံရန် မလုံလောက်ပါက မည်သို့အကျိုးသက်ရောက်မည်နည်း။",
    "options": [
      {
        "th": "น้ำมันหมด",
        "en": "Out of gas",
        "my": "ဓာတ်ငွေ့ထွက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หัวเทียนดับ",
        "en": "Spark plug goes out",
        "my": "Spark plug ထွက်လာတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องยนต์อุณหภูมิสูงผิดปกติ",
        "en": "The engine temperature is abnormally high.",
        "my": "အင်ဂျင်အပူချိန်က ပုံမှန်ထက် မြင့်နေတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่มีข้อใดถูก",
        "en": "There is no correct answer.",
        "my": "အဖြေမှန်မရှိပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 488,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดไม่ใช่สาเหตุที่ทำให้เครื่องยนต์ร้อนจัด",
    "q_en": "Which is not a cause of engine overheating?",
    "q_my": "အင်ဂျင်အပူလွန်ကဲခြင်း၏ အကြောင်းအရင်းမှာ မည်သည့်အရာမှ မဟုတ်ပါ။",
    "options": [
      {
        "th": "น้ำมันเครื่องแห้ง",
        "en": "Dry engine oil",
        "my": "အင်ဂျင်ဆီခြောက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำในหม้อน้ำแห้ง",
        "en": "The water in the radiator is dry.",
        "my": "ရေတိုင်ကီထဲက ရေတွေက ခြောက်သွေ့နေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำกลั่นแบตเตอรี่แห้ง",
        "en": "Distilled water, dry battery",
        "my": "ပေါင်းခံရေ၊ ဘက်ထရီခြောက်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สายพานพัดลมขาด",
        "en": "Broken fan belt",
        "my": "ပန်ကာကြိုးကျိုး",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 489,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้คือประโยชน์สูงสุดของการใช้เกียร์ต่ำในขณะลงทางลาดชัน",
    "q_en": "Which of the following is the greatest benefit of using a low gear while going downhill?",
    "q_my": "အောက်ဖော်ပြပါများထဲမှ မည်သည့်အရာသည် ကုန်းဆင်းတွင် ဂီယာနိမ့်သုံးခြင်း၏ အကြီးမားဆုံး အကျိုးကျေးဇူးဖြစ်သည်။",
    "options": [
      {
        "th": "ช่วยประหยัดน้ำมัน",
        "en": "Helps save fuel",
        "my": "လောင်စာဆီ သက်သာစေပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อเป็นการหน่วงความเร็วของรถ",
        "en": "In order to slow down the speed of the car",
        "my": "ကား၏အရှိန်ကို နှေးကွေးစေရန်၊",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพิ่มการทรงตัวของรถ",
        "en": "Increase the balance of the car",
        "my": "ကား၏လက်ကျန်ကိုတိုးစေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดการสึกหรอของผ้าเบรก",
        "en": "Reduce wear and tear on brake pads.",
        "my": "ဘရိတ်အုပ်များပေါ်ရှိ စုတ်ပြဲခြင်းနှင့် မျက်ရည်ယိုခြင်းကို လျှော့ချပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 490,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "หากเข็มวัดอุณหภูมิสูงจนถึงตัว H หมายความว่าอย่างไร",
    "q_en": "If the temperature gauge needle reaches the letter H, what does it mean?",
    "q_my": "အပူချိန်တိုင်းကိရိယာ အပ်သည် အက္ခရာ H သို့ ရောက်ပါက၊ ၎င်းသည် အဘယ်အရာကို ဆိုလိုသနည်း။",
    "options": [
      {
        "th": "ระบบระบายความร้อนอยู่ในระดับดีมาก",
        "en": "The cooling system is at a very good level.",
        "my": "အအေးပေးစနစ်သည် အလွန်ကောင်းမွန်သော အဆင့်တွင်ရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เกิดความผิดปกติในระบบระบายความร้อน",
        "en": "An abnormality has occurred in the cooling system.",
        "my": "အအေးခံစနစ်တွင် မူမမှန်မှုတစ်ခု ဖြစ်ပွားခဲ့သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ระบบระบายความร้อนเสีย",
        "en": "Broken cooling system",
        "my": "ကျိုးပဲ့နေသော အအေးပေးစနစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระดับปกติ",
        "en": "Normal level",
        "my": "ပုံမှန်အဆင့်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 491,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "หม้อน้ำรถยนต์มีหน้าที่อะไร",
    "q_en": "What is the function of a car radiator?",
    "q_my": "ကားရေတိုင်ကီရဲ့ လုပ်ဆောင်ချက်က ဘာလဲ။",
    "options": [
      {
        "th": "ทำให้ประหยัดน้ำมัน",
        "en": "It saves fuel.",
        "my": "၎င်းသည်လောင်စာဆီသက်သာစေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบายความร้อนของเครื่องยนต์",
        "en": "Engine cooling",
        "my": "အင်ဂျင်အအေးခံခြင်း။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทำให้รถวิ่งเร็วขึ้น",
        "en": "Make the car run faster",
        "my": "ကားကို မြန်မြန်ပြေးပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบายความร้อนในห้องผู้โดยสาร",
        "en": "Cooling in the passenger room",
        "my": "ခရီးသည်ခန်းထဲမှာ အအေးခံတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 492,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ถ้าเติมลมยางอ่อนเกินไป จะมีผลกับยางอย่างไร",
    "q_en": "If the tire pressure is too low How will it affect the tires?",
    "q_my": "တာယာဖိအားနည်းလွန်းရင် တာယာကို ဘယ်လိုထိခိုက်နိုင်မလဲ။",
    "options": [
      {
        "th": "ดอกยางตรงกลางจะสึกเร็วกว่าปกติ",
        "en": "The center tread of the tire will wear faster than normal.",
        "my": "တာယာ၏အလယ်ဗဟိုနင်းသည် ပုံမှန်ထက် ပိုမြန်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้ดอกยางทางด้านข้างทั้งสองสึกหรอ",
        "en": "This causes the tire tread on both sides to wear out.",
        "my": "ယင်းကြောင့် တာယာနှစ်ဖက်လုံးရှိ နင်းအား ဟောင်းနွမ်းသွားစေသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "การขับขี่จะแข็งกระด้าง",
        "en": "Driving becomes stiff.",
        "my": "မောင်းနှင်မှု တင်းမာလာသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้กินน้ำมันน้อยลง",
        "en": "Makes it consume less oil",
        "my": "ဆီစားသုံးမှုနည်းစေသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 493,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การตรวจสอบลมยางข้อใดปลอดภัยที่สุด",
    "q_en": "Which tire pressure check is the safest?",
    "q_my": "ဘယ်တာယာပေါင်ချိန်ကို စစ်ဆေးတာက အန္တရာယ်အကင်းဆုံးလဲ။",
    "options": [
      {
        "th": "เดือนละครั้ง",
        "en": "Once a month",
        "my": "တစ်လတစ်ကြိမ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทุกครั้งก่อนใช้งาน",
        "en": "Every time before use",
        "my": "အသုံးမပြုမီအချိန်တိုင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สัปดาห์ละครั้ง",
        "en": "Once a week",
        "my": "တစ်ပတ်တစ်ကြိမ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "วันละครั้ง",
        "en": "Once a day",
        "my": "တစ်နေ့တစ်ကြိမ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 494,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เหตุใดจึงไม่ควรเปิดฝาหม้อน้ำทันที เมื่อพบว่าเครื่องยนต์ร้อนจัด",
    "q_en": "Why shouldn't the radiator cap be opened immediately? When the engine is found to be very hot",
    "q_my": "ရေတိုင်ကီအဖုံးကို ဘာကြောင့် ချက်ချင်းမဖွင့်သင့်တာလဲ။ အင်ဂျင်က အရမ်းပူနေတာ တွေ့ရတယ်။",
    "options": [
      {
        "th": "เครื่องยนต์จะดับ",
        "en": "The engine will turn off.",
        "my": "အင်ဂျင်ပိတ်သွားမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องยนต์อาจจะระเบิด",
        "en": "The engine may explode.",
        "my": "အင်ဂျင်ပေါက်ကွဲနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องยนต์มีแรงดันสูง น้ำร้อนอาจพุ่งขึ้นมา",
        "en": "The engine has high pressure. Hot water may surge up.",
        "my": "အင်ဂျင်တွင် ဖိအားမြင့်သည်။ ရေနွေးက တက်လာနိုင်တယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เครื่องยนต์มีเสียงดัง",
        "en": "The engine is noisy.",
        "my": "အင်ဂျင်က ဆူညံနေတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 495,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อบกพร่องใดที่เป็นสาเหตุทำให้หน้ายางของรถสึกหรอ",
    "q_en": "What defect causes the tire tread of a vehicle to wear out?",
    "q_my": "ယာဉ်၏ တာယာနင်းမှု မည်သည် ချို့ယွင်းချက် ဖြစ်စေသနည်း။",
    "options": [
      {
        "th": "กระปุกเกียร์บกพร่อง",
        "en": "Defective gearbox",
        "my": "ဂီယာဘောက်စ်ချို့ယွင်းခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบบเบรกบกพร่อง",
        "en": "Defective braking system",
        "my": "ချို့ယွင်းနေသော ဘရိတ်စနစ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ระบบปล่อยควันเสียบกพร่อง",
        "en": "Defective exhaust system",
        "my": "အိတ်ဇောစနစ် ချို့ယွင်းနေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบบไฟฟ้าบกพร่อง",
        "en": "Defective electrical system",
        "my": "လျှပ်စစ်စနစ် ချို့ယွင်းခြင်း။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 496,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "สิ่งใดต่อไปนี้มีผลทำให้รถเปลืองน้ำมัน",
    "q_en": "Which of the following affects the car's fuel consumption?",
    "q_my": "အောက်ဖော်ပြပါများထဲမှ မည်သည့်အရာများသည် ကား၏ဆီစားသုံးမှုအပေါ် သက်ရောက်မှုရှိသနည်း။",
    "options": [
      {
        "th": "เปิดไฟหน้าในขณะขับรถ",
        "en": "Turn on your headlights while driving.",
        "my": "ကားမောင်းနေစဉ် သင့်ရှေ့မီးကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บรรทุกน้ำหนักเกินกว่าที่กำหนด",
        "en": "Carrying more weight than specified",
        "my": "သတ်မှတ်ထားသည့် အလေးချိန်ထက် ပိုတင်ဆောင်ခြင်း။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับด้วยความเร็วคงที่",
        "en": "Drive at a constant speed",
        "my": "အရှိန်အဟုန်ဖြင့် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระยะการปรับเบรกปกติ",
        "en": "Normal brake adjustment distance",
        "my": "ပုံမှန်ဘရိတ်ချိန်ညှိမှုအကွာအဝေး",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 497,
    "category": "vehicle_maintenance",
    "image": "/exam_images/maintenance/1000000000403.webp",
    "q_th": "ภาพนี้แสดงว่าเครื่องยนต์มีอาการอย่างไร",
    "q_en": "This picture shows how the engine behaves.",
    "q_my": "ဤပုံသည် အင်ဂျင်၏ ပြုမူပုံကို ပြသည်။",
    "options": [
      {
        "th": "ไม่มีข้อใดถูก",
        "en": "There is no correct answer.",
        "my": "အဖြေမှန်မရှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องยนต์เย็นจัด",
        "en": "The engine is very cold.",
        "my": "အင်ဂျင်က အရမ်းအေးတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องร้อนจัด (Over Heat)",
        "en": "The machine is very hot (Over Heat)",
        "my": "စက်က အရမ်းပူ (Over Heat)၊",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เครื่องยนต์อุณหภูมิปกติ",
        "en": "Engine temperature normal",
        "my": "အင်ဂျင်အပူချိန် ပုံမှန်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 498,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดไม่ใช่สาเหตุของการสตาร์ทรถไม่ติด",
    "q_en": "Which is not a cause of the car not starting?",
    "q_my": "ကားစမတက်ရတဲ့ အကြောင်းအရင်းက ဘယ်ဟာလဲ။",
    "options": [
      {
        "th": "สายพานหย่อน",
        "en": "The belt is slack.",
        "my": "ခါးပတ်က မလျော့ဘူး။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "มอเตอร์สตาร์ทเสีย",
        "en": "The starter motor is broken.",
        "my": "starter motor ပျက်သွားပါပြီ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำมันเชื้อเพลิงหมด",
        "en": "Out of fuel",
        "my": "လောင်စာဆီထဲက",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขั้วแบตเตอรี่หลวม",
        "en": "Loose battery terminals",
        "my": "ဘက်ထရီ terminals များ ဖြည်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 499,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้จะทำให้เกิดการสิ้นเปลืองเชื้อเพลิงมากที่สุด",
    "q_en": "Which of the following will cause the greatest fuel consumption?",
    "q_my": "အောက်ဖော်ပြပါများထဲမှ မည်သည့်အရာသည် လောင်စာဆီသုံးစွဲမှု အများဆုံးဖြစ်စေမည်နည်း။",
    "options": [
      {
        "th": "การใช้เกียร์สูงเป็นเวลานาน",
        "en": "Using high gear for a long time",
        "my": "မြင့်မားသောဂီယာကိုအချိန်အကြာကြီးအသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การเหยียบเบรกและคันเร่งอย่างรุนแรง",
        "en": "Severely pressing the brake and accelerator",
        "my": "ဘရိတ်နှင့် အရှိန်မြှင့်စက်ကို ပြင်းထန်စွာ နှိပ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "การควบคุมพวงมาลัยที่ไม่ดี",
        "en": "Poor steering control",
        "my": "စတီယာရင် ထိန်းချုပ်မှု ညံ့ဖျင်းခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การเร่งความเร็วช่วงทางโค้ง",
        "en": "Acceleration during curves",
        "my": "ကွေ့ကောက်နေစဉ် အရှိန်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 500,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "หากท่านตรวจพบว่าท่อน้ำมันเริ่มมีรอยน้ำมันซึมออกมาท่านควรทำอย่างไร",
    "q_en": "If you detect that the oil pipe begins to have oil leaks, what should you do?",
    "q_my": "ဆီပိုက်မှာ ဆီယိုစိမ့်နေတာတွေ့ရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ใช้เทปรัดให้แน่นขึ้น",
        "en": "Use tape to tighten it.",
        "my": "တင်းကျပ်ရန် တိပ်ကိုသုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สลับท่อไปไว้ในท่อแรงดันต่ำ",
        "en": "Switch the pipe to a low pressure pipe.",
        "my": "ပိုက်ကို low pressure pipe သို့ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำการเปลี่ยนท่อใหม่",
        "en": "Change a new pipe",
        "my": "ပိုက်အသစ်ပြောင်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้ไปได้จนกว่าจะพบรอยหยดของน้ำมัน",
        "en": "You can use it until you find a drop of oil.",
        "my": "ဆီတစ်စက်တွေ့တဲ့အထိ သုံးလို့ရတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 501,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "หากท่านเติมน้ำมันผิดประเภทควรปฏิบัติอย่างไร",
    "q_en": "If you fill up with the wrong type of fuel, what should you do?",
    "q_my": "လောင်စာ အမျိုးအစား မှားပြီး ဖြည့်ရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "เติมชนิดที่ถูกเข้าไปเพื่อทำให้เจือจาง",
        "en": "Add the correct type to dilute.",
        "my": "မှေးမှိန်ရန် မှန်ကန်သော အမျိုးအစားကို ထည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับไปถ้ามีผลต่อเครื่องยนต์ค่อยถ่ายออก",
        "en": "Drive on and if it affects the engine then drain it out.",
        "my": "မောင်းနှင်ပြီး အင်ဂျင်ကို ထိခိုက်မိပါက ရေထုတ်လိုက်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับไปให้หมดถังแล้วเติมชนิดที่ถูกเข้าไป",
        "en": "Empty the tank and fill it with the correct type.",
        "my": "အိုးကို ဗလာကျင်းပြီး မှန်ကန်သော အမျိုးအစားဖြင့် ဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำการเปลี่ยนถ่ายออกทันที",
        "en": "Make the transfer immediately.",
        "my": "ချက်ချင်းလွှဲပြောင်းပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 502,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "หากพบว่ารถของท่านเกิดท่อน้ำมันรั่วท่านควรทำอย่างไร",
    "q_en": "If you find that your car has a leaking fuel pipe, what should you do?",
    "q_my": "သင့်ကားတွင် လောင်စာဆီပိုက်ပေါက်နေသည်ကို တွေ့ရှိပါက သင်ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "นำขวดมารองน้ำมันที่รั่วและขับต่อไป",
        "en": "Take a bottle to catch the leaking oil and keep driving.",
        "my": "ပေါက်နေတဲ့ဆီတွေကို ဖမ်းဖို့ ပုလင်းတစ်လုံးယူပြီး ဆက်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้เทปรัดและขับไปหาช่าง",
        "en": "Use tape and drive to the mechanic.",
        "my": "တိပ်သုံးပြီး စက်ပြင်ဆရာထံ မောင်းသွားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ควรขับรถต่อไปเนื่องจากอาจเกิดไฟไหม้ได้",
        "en": "Do not drive further as there may be a fire hazard.",
        "my": "မီးဘေးအန္တရာယ်ရှိနိုင်သောကြောင့် ကားမမောင်းပါနှင့်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ขับไปหาศูนย์บริการเพื่อทำการซ่อม",
        "en": "Drive to a service center for repairs.",
        "my": "ပြုပြင်ရန်အတွက် ဝန်ဆောင်မှုစင်တာသို့ မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 503,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เพราะเหตุใดจึงไม่ควรใช้เบรกอย่างต่อเนื่องเป็นเวลานานในขณะขับขี่ลงทางลาดชัน",
    "q_en": "Why should you not use the brakes continuously for long periods of time while driving downhill?",
    "q_my": "ကုန်းဆင်းကားမောင်းနေစဉ် ဘရိတ်ကို အချိန်အကြာကြီး အဆက်မပြတ် အဘယ်ကြောင့် မသုံးသင့်သနည်း။",
    "options": [
      {
        "th": "จะทำให้รถเคลื่อนตัวได้ช้า",
        "en": "It will cause the car to move slowly.",
        "my": "ကားကို ဖြည်းညှင်းစွာ ရွေ့လျားစေပါလိမ့်မယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะทำให้ผ้าเบรกไหม้",
        "en": "It will cause the brake pads to burn.",
        "my": "ဘရိတ် pads တွေကို လောင်ကျွမ်းစေပါလိမ့်မယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จะทำให้เสียเวลาในการเดินทาง",
        "en": "Will waste time traveling.",
        "my": "ခရီးသွားရင် အချိန်ဖြုန်းမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะทำให้เปลืองน้ำมัน",
        "en": "It will waste oil.",
        "my": "ဆီဖြုန်းတီးမယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 504,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เมื่อระดับน้ำในแบตเตอรี่อยู่ในระดับต่ำ ควรเติมด้วยน้ำอะไร",
    "q_en": "When the water level in the battery is low What water should I fill it with?",
    "q_my": "ဘက္ထရီမှာ ရေနည်းနေတဲ့အခါ ဘယ်ရေဖြည့်ရမလဲ။",
    "options": [
      {
        "th": "น้ำยาหล่อเย็น",
        "en": "Coolant",
        "my": "coolant",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำกลั่น",
        "en": "Distilled water",
        "my": "ပေါင်းခံရေ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "น้ำกรด",
        "en": "Acid",
        "my": "အက်ဆစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้ำมันเครื่อง",
        "en": "Engine oil",
        "my": "အင်ဂျင်ဆီ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 505,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ถ้าปรากฏสัญลักษณ์เตือนเครื่องยนต์ร้อนจัดไม่ควรปฏิบัติอย่างไร",
    "q_en": "If a warning symbol appears showing the engine overheating, what should you not do?",
    "q_my": "အင်ဂျင်အပူလွန်ကဲမှုကို ပြသသည့် သတိပေးသင်္ကေတတစ်ခု ပေါ်လာပါက သင်ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "เติมน้ำในถังหม้อพักน้ำเมื่อเครื่องยนต์เย็นลง",
        "en": "Fill the reservoir tank with water when the engine is cool.",
        "my": "အင်ဂျင်အေးနေချိန်တွင် ရေလှောင်ကန်ကို ရေဖြည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เอาน้ำราดลงไปที่เครื่องยนต์จะทำให้เครื่องยนต์เย็น",
        "en": "Pouring water over the engine will keep it cool.",
        "my": "အင်ဂျင်ကို ရေလောင်းပေးခြင်းဖြင့် အင်ဂျင်အေးစေပါသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดฝากระโปรงเพื่อระบายความร้อน",
        "en": "Open the hood to release heat.",
        "my": "အပူကိုထုတ်ရန် ဘူးကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ปิดแอร์ เปิดหน้าต่างและจอดรถ",
        "en": "Turn off the air conditioner, open the window and park the car.",
        "my": "လေအေးပေးစက်ပိတ်၊ ပြတင်းပေါက်ဖွင့်ပြီး ကားကိုရပ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 506,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "กรณีเกิดรถเสียไม่สามารถเคลื่อนย้ายได้ ผู้ขับขี่ต้องปฏิบัติสิ่งใดเป็นอันดับแรก",
    "q_en": "In the event of a vehicle breakdown, it cannot be moved. What must the driver do first?",
    "q_my": "ယာဉ်ပျက်ကျပါက ရွှေ့၍မရပါ။ ယာဉ်မောင်းက ဘာအရင်လုပ်ရမလဲ။",
    "options": [
      {
        "th": "แจ้งประกันภัยรถยนต์",
        "en": "Notify car insurance",
        "my": "ကားအာမခံအကြောင်းကြားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แจ้งกู้ภัย",
        "en": "Notify rescue",
        "my": "ကယ်တင်ရန်အကြောင်းကြားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แจ้งตำรวจ",
        "en": "Report it to the police.",
        "my": "ရဲကို သတင်းပို့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณเพื่อเตือนให้รถอื่นทราบ",
        "en": "Give a signal to warn other vehicles.",
        "my": "အခြားယာဉ်များကို သတိပေးရန် အချက်ပြပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 507,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ถ้าเครื่องยนต์ดับขณะกำลังเคลื่อนที่ออกจากทางลาดชัน ท่านควรปฏิบัติอย่างไรเป็นอันดับแรก",
    "q_en": "If the engine stops while moving off a slope What should you do first?",
    "q_my": "တောင်စောင်းတစ်ခုမှ ရွေ့လျားနေစဉ် အင်ဂျင်ရပ်တန့်သွားပါက သင်ဘာကို ဦးစွာလုပ်ဆောင်သင့်သနည်း။",
    "options": [
      {
        "th": "ติดเครื่องใหม่",
        "en": "Restart the engine",
        "my": "အင်ဂျင်ကို ပြန်လည်စတင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉิน",
        "en": "Turn on emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปลี่ยนไปเข้าเกียร์ว่าง",
        "en": "Change into neutral gear.",
        "my": "neutral gear သို့ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำการเบรกทันทีเพื่อไม่ให้รถไหล",
        "en": "Apply the brakes immediately to prevent the vehicle from rolling.",
        "my": "ယာဉ်မလှုပ်မရအောင် ဘရိတ်ကို ချက်ခြင်းတပ်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 508,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การหมุนพวงมาลัยในขณะที่รถหยุดนิ่งจะส่งผลเสียแก่ส่วนใดของรถ",
    "q_en": "Turning the steering wheel while the vehicle is stationary will cause damage to which part of the vehicle?",
    "q_my": "ယာဉ်ရပ်နေစဉ် စတီယာရင်ဘီးကို လှည့်ခြင်းသည် ယာဉ်၏ ဘယ်အစိတ်အပိုင်းကို ပျက်စီးစေသနည်း။",
    "options": [
      {
        "th": "กระปุกเกียร์",
        "en": "Gearbox",
        "my": "ဂီယာဘောက်စ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เบรก",
        "en": "Brake",
        "my": "ဘရိတ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องยนต์",
        "en": "Engine",
        "my": "အင်ဂျင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยางรถ",
        "en": "Car tires",
        "my": "ကားတာယာများ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 509,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ถ้าไม่ปลดล็อกเบรกมือเมื่อเคลื่อนรถจะมีอาการอย่างไร",
    "q_en": "If the handbrake is not unlocked when moving the vehicle, what will the symptoms be?",
    "q_my": "ကားကိုရွှေ့တဲ့အခါ လက်ဘရိတ်ကို လော့ခ်မဖွင့်ရင် ဘယ်လိုလက္ခဏာတွေဖြစ်မလဲ။",
    "options": [
      {
        "th": "เมื่อรถเคลื่อนตัวจะรู้สึกว่ารถออกตัวเร็วขึ้น",
        "en": "When the car moves, it will feel like the car is pulling away faster.",
        "my": "ကားရွေ့သွားတဲ့အခါ ကားက ပိုမြန်သွားသလို ခံစားရပါလိမ့်မယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อหมุนพวงมาลัยจะรู้สึกหนัก",
        "en": "When turning the steering wheel, it feels heavy.",
        "my": "စတီယာရင်ကို ကွေ့လိုက်တဲ့အခါ လေးလံသွားသလို ခံစားရတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องยนต์มีอาการสะดุด",
        "en": "The engine is stumbling.",
        "my": "အင်ဂျင်က တုန်နေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อรถเคลื่อนตัวจะรู้สึกว่ารถเร่งความเร็วไม่ขึ้น",
        "en": "When the car moves, it feels like the car is not accelerating.",
        "my": "ကားရွေ့သွားတဲ့အခါ ကားက အရှိန်မတက်သလို ခံစားရတယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 510,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เมื่อรถของท่านเสียบริเวณกลางถนน ท่านควรปฏิบัติอย่างไร",
    "q_en": "When your car breaks down in the middle of the road What should you do?",
    "q_my": "လမ်းလယ်မှာ ကားပျက်သွားရင် ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ก่อกองไฟข้างทางในกรณีที่รถของท่านเสียเวลากลางคืน",
        "en": "Make a bonfire on the side of the road in case your car is lost at night.",
        "my": "ညဘက်ဆို ကားပျောက်သွားရင် လမ်းဘေးမှာ မီးစလုပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉินและนำรถจอดเข้าข้างทาง",
        "en": "Turn on your emergency lights and pull the car to the side of the road.",
        "my": "အရေးပေါ်မီးများဖွင့်ပြီး ကားကို လမ်းဘေးသို့ ဆွဲချပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จอดรถทิ้งไว้กลางถนน",
        "en": "Leave your car in the middle of the road.",
        "my": "သင့်ကားကို လမ်းလယ်တွင် ထားခဲ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นำสัญลักษณ์รูปสามเหลี่ยมมาไว้ท้ายรถของท่าน",
        "en": "Put the triangle symbol in the back of your car.",
        "my": "သင့်ကားနောက်ဘက်တွင် တြိဂံသင်္ကေတကို ထည့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 511,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดเป็นขั้นตอนการตรวจเช็กและเติมระดับน้ำมันหล่อลื่นเครื่องยนต์ ที่ถูกต้อง",
    "q_en": "Which is the correct procedure for checking and adding the engine lubricant level?",
    "q_my": "အင်ဂျင်ချောဆီအဆင့်ကို စစ်ဆေးခြင်းနှင့် ပေါင်းထည့်ခြင်းအတွက် မှန်ကန်သောနည်းလမ်းမှာ အဘယ်နည်း။",
    "options": [
      {
        "th": "จอดรถบนพื้นราบ เช็กน้ำมันขณะยังไม่ติดเครื่อง หรือดับเครื่องยนต์อย่างน้อย 10 นาที",
        "en": "Park the car on level ground. Check the oil while the engine is not started. Or turn off the engine for at least 10 minutes.",
        "my": "ကြမ်းပြင်ပေါ်တွင် ကားကို ရပ်ပါ။ အင်ဂျင်မစတင်မီ ဆီစစ်ပါ။ သို့မဟုတ် အင်ဂျင်ကို အနည်းဆုံး 10 မိနစ်ခန့် ပိတ်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จอดรถบนพื้นราบ เช็กน้ำมันหลังดับเครื่องยนต์ทันที",
        "en": "Park the car on level ground. Check the oil immediately after turning off the engine.",
        "my": "ကြမ်းပြင်ပေါ်တွင် ကားကို ရပ်ပါ။ အင်ဂျင်ပိတ်ပြီးတာနဲ့ ဆီစစ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถบนพื้นราบ เช็กน้ำมันขณะยังติดเครื่องยนต์ หรือดับเครื่องยนต์ทันที",
        "en": "Park the car on level ground. Check the oil while the engine is still running. or immediately turn off the engine",
        "my": "ကြမ်းပြင်ပေါ်တွင် ကားကို ရပ်ပါ။ အင်ဂျင်လည်ပတ်နေချိန်တွင် ဆီစစ်ပါ။ သို့မဟုတ် အင်ဂျင်ကိုချက်ချင်းပိတ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถบนพื้นราบ เช็กน้ำมันขณะยังติดเครื่องยนต์อยู่",
        "en": "Park the car on level ground. Check the oil while the engine is still running.",
        "my": "ကြမ်းပြင်ပေါ်တွင် ကားကို ရပ်ပါ။ အင်ဂျင်လည်ပတ်နေချိန်တွင် ဆီစစ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 512,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดคือหน้าที่ของน้ำมันเครื่องยนต์",
    "q_en": "What is the function of engine oil?",
    "q_my": "အင်ဂျင်ဆီရဲ့ လုပ်ဆောင်ချက်က ဘာလဲ။",
    "options": [
      {
        "th": "หล่อลื่นชิ้นส่วนที่เคลื่อนที่เพื่อลดการสึกหรอ",
        "en": "Lubricate moving parts to reduce wear.",
        "my": "ရွေ့လျားနေသော အစိတ်အပိုင်းများကို ချောဆီလိမ်းပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ระบายความร้อนออกจากหม้อน้ำ",
        "en": "Cooling from the radiator",
        "my": "ရေတိုင်ကီမှ အအေးခံခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำความสะอาดหม้อน้ำ",
        "en": "Clean the radiator",
        "my": "ရေတိုင်ကီကို သန့်ရှင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระบายความร้อนจากผ้าเบรก",
        "en": "Cools heat from the brake pads",
        "my": "ဘရိတ် pads များမှ အပူများကို အေးစေပါသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 513,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การตรวจเช็คระดับน้ำมันหล่อลื่นในเครื่องยนต์ ตรวจเช็คที่อุปกรณ์ส่วนใดของเครื่องยนต์",
    "q_en": "Checking the lubricant level in the engine Check which part of the engine?",
    "q_my": "အင်ဂျင်အတွင်းရှိ ချောဆီအဆင့်ကို စစ်ဆေးခြင်း အင်ဂျင်၏ မည်သည့်အစိတ်အပိုင်းကို စစ်ဆေးသနည်း။",
    "options": [
      {
        "th": "กรองน้ำมันเครื่อง",
        "en": "Engine oil filter",
        "my": "အင်ဂျင်ဆီစစ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ฝาเติมน้ำมันเครื่อง",
        "en": "Engine oil filler cap",
        "my": "အင်ဂျင်ဆီဖြည့်ထုပ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ก้านวัดน้ำมันเครื่อง",
        "en": "Oil dipstick",
        "my": "ဆီထည့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "อ่างน้ำมันเครื่อง",
        "en": "Engine oil pan",
        "my": "အင်ဂျင်ဆီဒယ်အိုး",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 514,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้ รถจะสิ้นเปลืองเชื้อเพลิงมาก",
    "q_en": "Which of the following? The car will consume a lot of fuel.",
    "q_my": "အောက်ပါတို့ထဲမှ ဘယ်ဟာလဲ။ ကားက လောင်စာဆီ အများကြီး လောင်လိမ့်မယ်။",
    "options": [
      {
        "th": "ใช้ยางรถที่มีลมยางน้อยเกินไป",
        "en": "Using tires that are under-inflated",
        "my": "ဖောင်းနေသော တာယာများကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ใช้ยางรถที่มีลมยางมากเกินไป",
        "en": "Using over-inflated tires",
        "my": "ဖောင်းလွန်းသောတာယာများကို အသုံးပြုခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ยางรถที่ต่างยี่ห้อกัน",
        "en": "Use different brands of tires.",
        "my": "တာယာတံဆိပ်အမျိုးမျိုးကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ยางรถใหม่",
        "en": "Use new tires",
        "my": "တာယာအသစ်သုံးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 515,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "จะเกิดอะไรขึ้นเมื่อล้อรถอยู่ในสภาวะที่ไม่สมดุล",
    "q_en": "What happens when the wheels of a car are out of balance?",
    "q_my": "ကားဘီးတွေ ဟန်ချက်မညီရင် ဘာဖြစ်မလဲ။",
    "options": [
      {
        "th": "พวงมาลัยจะเกิดการสั่น",
        "en": "The steering wheel will vibrate.",
        "my": "စတီယာရင် တုန်ခါသွားမယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เบรกจะใช้ไม่ได้",
        "en": "The brakes won't work.",
        "my": "ဘရိတ်တွေ အလုပ်မလုပ်ဘူး။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "พวงมาลัยจะดึงไปยังด้านใดด้านหนึ่ง",
        "en": "The steering wheel pulls to one side.",
        "my": "စတီယာရင်ဘီးက တစ်ဖက်ကိုဆွဲတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ยางรถจะแบน",
        "en": "The car tire will go flat.",
        "my": "ကားတာယာက ပြားသွားလိမ့်မယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 516,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ไม่ควรเปิดฝาหม้อน้ำในกรณีใด",
    "q_en": "Under no circumstances should you open the radiator cap.",
    "q_my": "ဘယ်လိုအခြေအနေမျိုးမှာမှ ရေတိုင်ကီအဖုံးကို ဖွင့်သင့်တယ်။",
    "options": [
      {
        "th": "เครื่องร้อนจัด",
        "en": "The machine is very hot.",
        "my": "စက်က အရမ်းပူတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดตอนเช้าขณะยังไม่ติดเครื่องยนต์",
        "en": "Open in the morning while the engine is not yet started.",
        "my": "အင်ဂျင်မဖွင့်ရသေးချိန်မှာ မနက်မိုးလင်းရင်ဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เครื่องเย็น",
        "en": "Cool machine",
        "my": "အအေးခံစက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดถังพักสำรองหม้อน้ำเพื่อเติมน้ำ",
        "en": "Open the radiator reserve tank to add water.",
        "my": "ရေထည့်ရန် ရေတိုင်ကီအရံတိုင်ကီကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 517,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ข้อใด ไม่ใช่การขับรถอย่างปลอดภัยและประหยัดพลังงาน",
    "q_en": "Which is not a safe and energy-efficient way to drive?",
    "q_my": "ဘယ်ဟာက ဘေးကင်းပြီး စွမ်းအင်သက်သာတဲ့ မောင်းနှင်မှုမျိုးမဟုတ်လဲ။",
    "options": [
      {
        "th": "ไม่ควรติดเครื่องยนต์ระหว่างจอดรถคอย",
        "en": "The engine should not be turned on while waiting.",
        "my": "စောင့်ဆိုင်းနေစဉ် အင်ဂျင်ကို မဖွင့်သင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถด้วยความเร็วที่เหมาะสม",
        "en": "Drive at a reasonable speed.",
        "my": "သင့်လျော်သောအရှိန်ဖြင့် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งเครื่องยนต์ก่อนออกรถ",
        "en": "Accelerate the engine before starting the car.",
        "my": "ကားမစတင်မီ အင်ဂျင်ကို အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไม่บรรทุกของเกินพิกัด",
        "en": "Do not overload the load.",
        "my": "ဝန်ပိုမချပါနဲ့။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 518,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ไดสตาร์ททำหน้าที่อะไร",
    "q_en": "What does the starter do?",
    "q_my": "စတင်သူဘာလုပ်သလဲ။",
    "options": [
      {
        "th": "ทำให้เครื่องยนต์ติด",
        "en": "Make the engine start",
        "my": "အင်ဂျင်ကိုစတင်ပါစေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทำให้ระบบเบรกทำงานดีขึ้น",
        "en": "Makes the braking system work better",
        "my": "ဘရိတ်စနစ်ကို ပိုကောင်းစေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้หมุนพวงมาลัยได้ดี",
        "en": "Makes you turn the steering wheel well",
        "my": "စတီယာရင်ကို ကောင်းစွာကွေ့နိုင်စေသည်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทำให้แอร์ในรถเย็นขึ้น",
        "en": "Makes the air conditioner in the car cooler.",
        "my": "ကားရှိ လေအေးပေးစက်ကို အေးမြစေသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 519,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "ในขณะขับรถ ยางรถแตกหรือระเบิด ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "While driving, a tire bursts or explodes. What should the driver do?",
    "q_my": "ကားမောင်းနေစဉ်၊ တာယာကွဲခြင်း သို့မဟုတ် ပေါက်ကွဲခြင်း။ ယာဉ်မောင်းက ဘာလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "หมุนพวงมาลัยอย่างรวดเร็วเพื่อหลบเข้าข้างทาง",
        "en": "Turn the steering wheel quickly to pull over to the side of the road.",
        "my": "လမ်းဘေးဘက်သို့ ဆွဲတင်ရန် စတီယာရင်ကို အမြန်လှည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รีบเหยียบเบรกให้เร็วที่สุด",
        "en": "Hurry and step on the brakes as quickly as possible.",
        "my": "မြန်မြန်ပြီး ဘရိတ်ကို တတ်နိုင်သမျှ မြန်မြန်နင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คุมสติ บังคับพวงมาลัย ลดความเร็วลงและไม่ควรเหยียบเบรกกะทันหัน",
        "en": "Control your mind and control the steering wheel. Reduce your speed and do not brake suddenly.",
        "my": "သင့်စိတ်ကို ထိန်းချုပ်ပြီး စတီယာရင်ကို ထိန်းချုပ်ပါ။ အရှိန်လျှော့ပြီး ရုတ်တရက် ဘရိတ်မတိုက်ပါနဲ့။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ปลดเกียร์ว่างแล้วรีบเหยียบเบรก",
        "en": "Put the gear in neutral and quickly step on the brake.",
        "my": "ဂီယာကို ဘက်မလိုက်ဘဲ ဘရိတ်ပေါ် အမြန်နင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 520,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "การขับขี่บนทางลาดชันผู้ขับขี่ไม่ควรใช้เบรกอย่างต่อเนื่องเป็นเวลานานเพราะเหตุใด",
    "q_en": "Driving on a steep slope, why should a driver not continuously apply the brakes for a long time?",
    "q_my": "မတ်စောက်သော တောင်စောင်းတွင် မောင်းနှင်သူသည် အဘယ်ကြောင့် အချိန်အကြာကြီး ဘရိတ်ကို အဆက်မပြတ် မသုံးသင့်သနည်း။",
    "options": [
      {
        "th": "จะทำให้เร่งเครื่องได้ช้า",
        "en": "It will cause the engine to accelerate slowly.",
        "my": "အင်ဂျင်ကို ဖြည်းညှင်းစွာ အရှိန်မြှင့်ပေးပါလိမ့်မယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะทำให้ผ้าเบรกไหม้",
        "en": "It will cause the brake pads to burn.",
        "my": "ဘရိတ် pads တွေကို လောင်ကျွမ်းစေပါလိမ့်မယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จะทำให้เปลืองน้ำมัน",
        "en": "It will waste oil.",
        "my": "ဆီဖြုန်းတီးမယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จะทำให้รถไหล",
        "en": "Will make the car flow",
        "my": "ကားစီးလာမယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 521,
    "category": "vehicle_maintenance",
    "image": null,
    "q_th": "เมื่อท่านขับรถผ่านถนนที่มีน้ำท่วมขังแล้ว ท่านควรปฏิบัติอย่างไร",
    "q_en": "When you drive through a road that is flooded. What should you do?",
    "q_my": "ရေလျှံနေတဲ့လမ်းကို ဖြတ်မောင်းတဲ့အခါ။ ဘာလုပ်သင့်လဲ?",
    "options": [
      {
        "th": "หยุดรถ ตรวจสอบยาง",
        "en": "Stop the car and check the tires.",
        "my": "ကားကိုရပ်ပြီး တာယာတွေကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้เร็วขึ้นเพื่อให้ผ้าเบรกแห้ง",
        "en": "Drive faster to dry the brake pads.",
        "my": "ဘရိတ်အုပ်များကိုခြောက်သွေ့စေရန် မြန်မြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถ รอผ้าเบรกให้แห้ง",
        "en": "Stop the car and wait for the brake pads to dry.",
        "my": "ကားရပ်ပြီး ဘရိတ်အုပ်များ ခြောက်သွားအောင် စောင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้เท้าแตะเบรกเพื่อให้ผ้าเบรกแห้งเร็ว",
        "en": "Use your foot to touch the brakes to dry the brake pads quickly.",
        "my": "ဘရိတ်အုပ်များကို အမြန်ခြောက်သွေ့စေရန် ဘရိတ်ကိုထိရန် သင့်ခြေထောက်ကို အသုံးပြုပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 522,
    "category": "accident_prediction",
    "image": null,
    "q_th": "หากเกิดฝนตกหนักจนมองเห็นทางไม่ชัดเจน ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "If there is heavy rain and the road is not clearly visible What should the driver do?",
    "q_my": "မိုးသည်းထန်စွာရွာသွန်းပြီး လမ်းကို ရှင်းရှင်းလင်းလင်းမမြင်ရပါက ယာဉ်မောင်း ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "เร่งความเร็วให้ผ่านบริเวณที่ฝนตกโดยเร็ว",
        "en": "Accelerate quickly to pass through rainy areas.",
        "my": "မိုးရွာတဲ့ ဒေသတွေကို ဖြတ်ကျော်ဖို့ အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จอดรถบริเวณที่ปลอดภัย เปิดไฟหน้ารถและเปิดไฟฉุกเฉิน",
        "en": "Park your car in a safe area. Turn on the car's headlights and turn on the emergency lights.",
        "my": "သင့်ကားကို ဘေးကင်းသောနေရာတွင် ရပ်ပါ။ ကားရှေ့မီးကိုဖွင့်ပြီး အရေးပေါ်မီးကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "จอดรถทันที",
        "en": "Park the car immediately.",
        "my": "ကားကို ချက်ချင်းရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟหน้าเร่งความเร็วผ่านบริเวณที่ฝนตกหนัก",
        "en": "Turn on your headlights and speed through areas of heavy rain.",
        "my": "သင့်ရှေ့မီးကိုဖွင့်ပြီး မိုးသည်းထန်စွာရွာသောနေရာများကို အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 523,
    "category": "accident_prediction",
    "image": null,
    "q_th": "สิ่งใดที่ท่านควรระวังเป็นพิเศษเมื่อพบรถโดยสารจอดอยู่ในถนนฝั่งตรงข้าม",
    "q_en": "What should you be especially careful of when you see a bus parked on the opposite side of the road?",
    "q_my": "လမ်းတစ်ဖက်ခြမ်းမှာ ရပ်ထားတဲ့ ဘတ်စ်ကားကို တွေ့တဲ့အခါ ဘာကို အထူးသတိထားသင့်လဲ။",
    "options": [
      {
        "th": "รถโดยสารอาจเคลื่อนที่โดยฉับพลัน",
        "en": "The bus may move suddenly.",
        "my": "ဘတ်စ်ကားသည် ရုတ်တရက် ရွေ့သွားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ต้องระวัง เนื่องจากเป็นถนนฝั่งตรงข้าม",
        "en": "Don't be careful as it is on the opposite side of the road.",
        "my": "လမ်းရဲ့ တစ်ဖက်ခြမ်းမှာရှိလို့ သတိမထားပါနဲ့။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้เดินเท้าอาจเดินออกมาทางข้างหลังรถโดยสาร",
        "en": "Pedestrians may exit behind the bus.",
        "my": "လမ်းသွားလမ်းလာများသည် ဘတ်စ်ကားနောက်မှ ထွက်နိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถโดยสารอาจเสียอยู่",
        "en": "The bus may be broken down.",
        "my": "ဘတ်စ်ကား ပျက်သွားနိုင်တယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 524,
    "category": "accident_prediction",
    "image": null,
    "q_th": "หากคาดการณ์ว่าข้างหน้าอาจจะเกิดอุบัติเหตุ เราควรเตรียมตัวอย่างไร",
    "q_en": "If it is predicted that there may be an accident ahead. How should we prepare?",
    "q_my": "ကြိုတင်ခန့်မှန်းထားရင် မတော်တဆမှုတွေ ဖြစ်နိုင်ပါတယ်။ ဘယ်လိုပြင်ဆင်ရမလဲ။",
    "options": [
      {
        "th": "จอดรถทันที",
        "en": "Park the car immediately.",
        "my": "ကားကို ချက်ချင်းရပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถให้เร็วขึ้น",
        "en": "Drive faster.",
        "my": "မြန်မြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับตามปกติ",
        "en": "Drive normally",
        "my": "ပုံမှန်အတိုင်း မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดความเร็ว",
        "en": "reduce speed",
        "my": "အရှိန်လျှော့",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 525,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การเว้นระยะห่างจากรถคันหน้าในทัศนวิสัยใด ที่ควรเพิ่มความระมัดระวังให้มากกว่าปกติ",
    "q_en": "What is the distance from the vehicle in front in which visibility? That should be more careful than usual.",
    "q_my": "မြင်နိုင်စွမ်းရှိသော ရှေ့ယာဉ်နှင့် အကွာအဝေးက ဘယ်လောက်လဲ။ ပုံမှန်ထက် ပိုသတိထားရမယ်။",
    "options": [
      {
        "th": "สภาพการจราจรคล่องตัว",
        "en": "Traffic conditions are fluid.",
        "my": "ယာဉ်အသွားအလာအခြေအနေက ပျော့ပျောင်းနေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ฝนตก มีหมอก ถนนลื่น",
        "en": "Rain, fog, slippery road",
        "my": "မိုးရွာ ၊ မြူ ၊ လမ်း ချော",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เวลากลางคืนแสงไฟสว่างเพียงพอ",
        "en": "At night the lights are bright enough.",
        "my": "ညဘက်ဆို မီးတွေက လင်းထိန်နေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เวลากลางวันไม่มีฝนตก",
        "en": "There is no rain during the daytime.",
        "my": "နေ့ခင်းဘက် မိုးမရွာဘူး။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 526,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การเว้นระยะห่างจากด้านข้างรถ กับรถที่จอดอยู่ อย่างน้อยควรเว้นระยะเท่าใด",
    "q_en": "Distance from the side of the car with a parked car How much distance should be at least?",
    "q_my": "ရပ်ထားသောကားနှင့် ကား၏ဘေးအကွာအဝေးသည် အနည်းဆုံးမည်မျှအကွာအဝေးရှိသင့်သနည်း။",
    "options": [
      {
        "th": "อย่างน้อย 2 เมตร เหลือพื้นที่ให้รถยนต์แซง",
        "en": "At least 2 meters, leaving space for cars to overtake.",
        "my": "အနည်းဆုံး 2 မီတာအကွာတွင် ကားများကျော်တက်ရန် နေရာချန်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "อย่างน้อย 4 เมตร เหลือพื้นที่ให้รถบรรทุก",
        "en": "At least 4 meters, leaving space for trucks.",
        "my": "အနည်းဆုံး 4 မီတာ၊ ကုန်တင်ကားများအတွက်နေရာလွတ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "อย่างน้อย 3 เมตร เหลือพื้นที่ให้รถจักรยานยนต์แซง",
        "en": "At least 3 meters, leaving room for motorcycles to overtake.",
        "my": "အနည်းဆုံး ၃ မီတာအကွာတွင် ဆိုင်ကယ်များ ကျော်တက်ရန် နေရာချန်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "อย่างน้อย 1 เมตร เพราะอาจมีรถคันอื่นเปิดประตู",
        "en": "At least 1 meter because there may be other cars opening the door.",
        "my": "အခြားကားများ တံခါးဖွင့်ထားသောကြောင့် အနည်းဆုံး 1 မီတာ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 527,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อขับรถตามหลังรถโดยสารประจำทางที่กำลังเข้าสู่ป้ายจอดรถโดยสารประจำทาง ควรปฏิบัติอย่างไร",
    "q_en": "When driving behind a bus that is entering a bus stop What should I do?",
    "q_my": "ဘတ်စ်ကားမှတ်တိုင်ကို ဝင်လာတဲ့ ဘတ်စ်ကားနောက်က မောင်းတဲ့အခါ ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "บีบแตร",
        "en": "Honk the horn",
        "my": "ဟွန်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วแซงรถประจำทางไป",
        "en": "Accelerate to overtake the bus.",
        "my": "ဘတ်စ်ကားကို ကျော်တက်ဖို့ အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระมัดระวังผู้โดยสารที่ลงจากรถโดยสารประจำทาง",
        "en": "Be careful of passengers getting off buses.",
        "my": "ဘတ်စ်ကားပေါ်က ခရီးသည်တွေ သတိထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตามหลังรถโดยสารประจำทางอย่างกระชั้นชิด",
        "en": "Following closely behind the bus",
        "my": "ဘတ်စ်ကားနောက်ကို အနီးကပ်လိုက်ကြည့်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 528,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อท่านขับรถตามหลังรถจักรยานยนต์บนถนนที่มีพื้นผิวขรุขระหรือเป็นหลุมเป็นบ่อ ควรปฏิบัติอย่างไร",
    "q_en": "When you drive behind a motorcycle on a road with a rough or bumpy surface. What should I do?",
    "q_my": "ကြမ်းတမ်းသော သို့မဟုတ် အဖုအထစ်ရှိသော လမ်းမပေါ်တွင် ဆိုင်ကယ်နောက်မှ မောင်းနှင်သည့်အခါ။ ကျွန်တော်ဘာလုပ်သင့်သလဲ?",
    "options": [
      {
        "th": "ขับตามระยะกระชั้นชิด เพื่อที่รถจักรยานยนต์จะได้มองเห็นผ่านกระจก",
        "en": "Driving at a close distance so that the motorcycle can be seen through the mirror",
        "my": "မော်တော်ဆိုင်ကယ်ကို မှန်ဖြင့်မြင်နိုင်စေရန် အနီးကပ်အကွာအဝေးတွင် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับในระยะปกติเพื่อไม่ให้เปลืองพื้นที่ในการใช้ถนน",
        "en": "Drive at normal distances so as not to waste road space.",
        "my": "လမ်းနေရာလွတ်မရှိစေရန် ပုံမှန်အကွာအဝေးတွင် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "แซงในทันที",
        "en": "overtake immediately",
        "my": "ချက်ချင်းကျော်တက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เว้นระยะให้มากขึ้น เพื่อในกรณีที่รถจักรยานยนต์หักเลี้ยวเพื่อหลบหลุมที่พื้น",
        "en": "Leave more distance. In case the motorcycle swerves to avoid a hole in the ground",
        "my": "အကွာအဝေးပိုထားပါ။ မော်တော်ဆိုင်ကယ်သည် မြေတွင်းအပေါက်ကို ရှောင်ရန် လမ်းလွှဲလိုက်လျှင်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 529,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ระบบเบรก ABS ช่วยลดโอกาสในการลื่นไถล ซึ่งมีส่วนสำคัญในสถานการณ์ใด",
    "q_en": "ABS braking system reduces the chance of slipping. Which plays an important role in any situation?",
    "q_my": "ABS ဘရိတ်စနစ်က ချော်လဲနိုင်ခြေကို လျှော့ချပေးပါတယ်။ မည်သည့်အခြေအနေတွင်မဆို အရေးကြီးသောအခန်းကဏ္ဍမှ ပါဝင်နေပါသည်။",
    "options": [
      {
        "th": "เมื่อขับรถลงทางลาดชัน",
        "en": "When driving down a steep slope",
        "my": "မတ်စောက်သော တောင်စောင်းသို့ မောင်းဆင်းသောအခါ၊",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อทำการหยุดรถในสถานการณ์ฉุกเฉิน",
        "en": "When stopping the vehicle in an emergency situation",
        "my": "အရေးပေါ်အခြေအနေမှာ ယာဉ်ကိုရပ်ထားတဲ့အခါ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เมื่อทำการหยุดรถในสถานการณ์ปกติ",
        "en": "When stopping the vehicle in normal situations",
        "my": "ယာဉ်ကို ပုံမှန်အခြေအနေမှာ ရပ်ထားတဲ့အခါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อขับรถบนถนนที่มีผิวถนนดี",
        "en": "When driving on roads with a good road surface",
        "my": "လမ်းများပေါ်တွင် မောင်းနှင်သည့်အခါ လမ်းမျက်နှာပြင် ကောင်းမွန်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 530,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ถึงแม้เราจะได้รับสัญญาณไฟเขียวแล้ว การที่เราจะเร่งเครื่องออกรถโดยกะทันหันเป็นสิ่งที่อันตรายมากเพราะเหตุใด",
    "q_en": "Even though we have received the green light Why is it so dangerous for us to suddenly accelerate and leave the car?",
    "q_my": "မီးစိမ်းပြထားသော်လည်း ရုတ်တရက် အရှိန်ပြင်းပြင်းနှင့် ကားမှထွက်ရန် အဘယ်ကြောင့် အလွန်အန္တရာယ်များသနည်း။",
    "options": [
      {
        "th": "อาจมีคนขายพวงมาลัย",
        "en": "There may be someone selling a steering wheel.",
        "my": "စတီယာရင်ဘီးရောင်းတဲ့သူတစ်ယောက် ရှိကောင်းရှိနိုင်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "อาจจะไปชนกับรถที่วิ่งฝ่าฝืนสัญญาณไฟแดงมาอีกทาง",
        "en": "You may collide with a car that is violating a red light coming from the other direction.",
        "my": "တစ်ဖက်ကလာတဲ့ မီးနီကို ချိုးဖောက်နေတဲ့ ကားနဲ့ တိုက်မိနိုင်တယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถข้างหน้าอาจจะดับ",
        "en": "The car in front may stop.",
        "my": "ရှေ့ကားက ရပ်သွားနိုင်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การจราจรติดขัด",
        "en": "traffic jams",
        "my": "ယာဉ်ကြောပိတ်ဆို့မှု",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 531,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เหตุการณ์ใดเมื่อคาดการณ์ล่วงหน้าแล้วมีความเสี่ยงต่อการเกิดอุบัติเหตุบนท้องถนนมากที่สุด",
    "q_en": "Which event, when predicted in advance, has the greatest risk of road accidents?",
    "q_my": "ဘယ်ဖြစ်ရပ်ကို ကြိုတင်ဟောကိန်းထုတ်ထားလဲ၊ ယာဉ်တိုက်မှုဖြစ်နိုင်ခြေ အကြီးမားဆုံးပါ။",
    "options": [
      {
        "th": "เมื่อรถจอดกลางถนนอาจมีคนเปิดประตูแก้ไขโดยให้สัญญาณและลดความเร็ว",
        "en": "When a car is parked in the middle of the road, someone may open the door to correct this by giving a signal and reducing the speed.",
        "my": "ကားတစ်စီးသည် လမ်းလယ်တွင်ရပ်သောအခါ၊ တစ်စုံတစ်ယောက်က အချက်ပြပြီး အရှိန်လျှော့ခြင်းဖြင့် ၎င်းကိုပြင်ရန် တံခါးကိုဖွင့်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อเห็นทางโค้งอาจมีรถวิ่งกินเลนมา แก้ไขโดยลดความเร็ว",
        "en": "When you see a curve, there may be a car rushing into the lane. Fixed by reducing speed",
        "my": "မျဉ်းကွေးကိုမြင်လျှင် လမ်းကြားထဲသို့ ကားတစ်စီး အပြေးအလွှားသွားနိုင်သည်။ အရှိန်လျှော့ခြင်းဖြင့် ပြုပြင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อแท็กซี่อาจหยุดกะทันหัน แก้ไขโดยเว้นระยะห่างให้เหมาะสม",
        "en": "When a taxi may suddenly stop Edit by keeping an appropriate distance.",
        "my": "တက္ကစီတစ်စီး ရုတ်တရက် ရပ်သွားသည့်အခါ သင့်လျော်သောအကွာအဝေးကို ထိန်းထားခြင်းဖြင့် တည်းဖြတ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เมื่อเจอทางสามแยก แก้ไขโดยบีบแตรและเร่งความเร็วชิงเลี้ยวก่อน",
        "en": "When you come across a three-way intersection Fix it by honking your horn and accelerating to take a turn first.",
        "my": "သုံးလမ်းဆုံကို ဖြတ်ကျော်လာတဲ့အခါ မင်းရဲ့ဟွန်းကို ဟွန်းတီးပြီး ကွေ့ဖို့ အရှိန်မြှင့်ပြီး ပြင်လိုက်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 532,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การมองไกลไปข้างหน้า มีจุดประสงค์เพื่ออะไร",
    "q_en": "Looking ahead What is the purpose?",
    "q_my": "ရည်ရွယ်ချက်က ဘာလဲ၊",
    "options": [
      {
        "th": "ผ่อนคลายสายตาจากการขับรถ",
        "en": "Relax your eyes from driving.",
        "my": "ကားမောင်းခြင်းမှ သင့်မျက်လုံးများကို အနားယူပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อฝึกสมาธิในขณะขับรถ",
        "en": "To practice meditation while driving",
        "my": "ကားမောင်းနေစဉ် တရားထိုင်ရန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อการแซง",
        "en": "for overtaking",
        "my": "ကျော်တက်ဘို့",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อสังเกตอันตรายที่อาจเกิดขึ้นล่วงหน้าได้",
        "en": "To notice potential dangers in advance.",
        "my": "ဖြစ်နိုင်ခြေအန္တရာယ်များကို ကြိုတင်သတိပြုမိစေရန်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 533,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000528.webp",
    "q_th": "จากภาพ ผู้ขับขี่ควรปฏิบัติอย่างไร จึงปลอดภัย",
    "q_en": "From the picture, what should drivers do to be safe?",
    "q_my": "ပုံထဲက ယာဉ်မောင်းတွေ ဘေးကင်းဖို့ ဘာတွေလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "ขับแทรกระหว่างรถกระบะและรถบรรทุก เนื่องจากมีช่องว่างที่เพียงพอ",
        "en": "Drive between a pickup truck and a truck. Because there is enough space",
        "my": "ပစ်ကပ်ထရပ်ကားနှင့် ထရပ်ကားကြားတွင် မောင်းနှင်ပါ။ နေရာအလုံအလောက်ရှိလို့",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอรถเพื่อให้ทางรถกระบะ",
        "en": "Slow down to give way to the pickup truck.",
        "my": "ပစ်ကပ်ထရပ်ကားဆီသို့ အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปลี่ยนช่องจราจรไปทางซ้าย",
        "en": "Change traffic lane to the left.",
        "my": "ယာဉ်ကြောပိတ်ဆို့မှုကို ဘယ်ဘက်သို့ ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปลี่ยนช่องจราจรไปทางขวา",
        "en": "Change traffic lane to the right.",
        "my": "ယာဉ်လမ်းကြောင်းကို ညာဘက်သို့ ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 534,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ในกรณีที่ถนนไม่มีแสงไฟเพียงพอทำให้ทัศนวิสัยในการขับขี่น้อยลง ผู้ขับขี่ควรรักษาระยะห่างจากรถคันหน้าอย่างไร",
    "q_en": "In cases where the road does not have enough lights, visibility for driving is reduced. How far should drivers maintain their distance from the vehicle in front?",
    "q_my": "လမ်းမီးများ လုံလုံလောက်လောက်မရှိသော အခြေအနေမျိုးတွင် ယာဉ်မောင်းအတွက် မြင်နိုင်စွမ်း နည်းပါးသည်။ ယာဉ်မောင်းများသည် ရှေ့ယာဉ်နှင့် အကွာအဝေးကို မည်မျှကြာအောင် ထိန်းသိမ်းထားသင့်သနည်း။",
    "options": [
      {
        "th": "ผู้ขับขี่สามารถกะระยะในการแซงได้",
        "en": "The driver can estimate the distance for overtaking.",
        "my": "ယာဉ်မောင်းသည် ကျော်တက်ရန် အကွာအဝေးကို ခန့်မှန်းနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่สามารถเลี่ยงเขม่าดำจากควันรถคันข้างหน้าได้",
        "en": "Drivers can avoid the black soot from the smoke of the car ahead.",
        "my": "ယာဉ်မောင်းများသည် ရှေ့ကားမီးခိုးများမှ အနက်ရောင်မီးခိုးများကို ရှောင်ရှားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่สามารถรักษาระยะห่างกับยานพาหนะคันอื่นๆ ได้ในทุกความเร็วที่ขับขี่",
        "en": "Drivers can maintain distance from other vehicles. at all driving speeds",
        "my": "ယာဉ်မောင်းများသည် အခြားယာဉ်များနှင့် အကွာအဝေးကို ထိန်းသိမ်းနိုင်သည်။ မောင်းနှင်မှုအားလုံးတွင်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ผู้ขับขี่สามารถเร่งความเร็วได้ทุกเมื่อ",
        "en": "The driver can accelerate at any time.",
        "my": "ယာဉ်မောင်းသည် အချိန်မရွေး အရှိန်မြှင့်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 535,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000530.webp",
    "q_th": "จากภาพ ผู้ขับขี่คาดการณ์อุบัติเหตุว่าสิ่งใดควรระวัง",
    "q_en": "From the picture, drivers predict accidents and what they should be careful of.",
    "q_my": "ပုံထဲက ယာဉ်မောင်းတွေက ယာဉ်မတော်တဆမှုတွေနဲ့ သတိထားရမယ့်အရာတွေကို ခန့်မှန်းထားပါတယ်။",
    "options": [
      {
        "th": "สัญญาณไฟจราจรเปลี่ยนเป็นเหลือง",
        "en": "The traffic light turns yellow.",
        "my": "မီးပွိုင့်က အဝါရောင်ပြောင်းသွားတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์รับผู้โดยสาร",
        "en": "Motorcycle picks up passengers",
        "my": "ဆိုင်ကယ်စီးခရီးသည်များ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถคันข้างหน้าเร่งความเร็ว",
        "en": "The car in front accelerates.",
        "my": "ရှေ့က ကားက အရှိန်ပြင်းတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบัสแทรกเลนซ้าย",
        "en": "Bus inserted into left lane",
        "my": "ဘတ်စ်ကားကို ဘယ်ဘက်လမ်းကြားတွင် ထည့်သွင်းထားသည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 536,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000531.webp",
    "q_th": "จากภาพ ข้อใดไม่ใช่เหตุการณ์อันตรายที่อาจจะเกิดขึ้นกับรถยนต์คัน A",
    "q_en": "From the picture, which is not a dangerous event that may happen to Car A?",
    "q_my": "ပုံထဲက ၊ ဘယ်ဟာက Car A မှာဖြစ်နိုင်လဲ ၊",
    "options": [
      {
        "th": "คนขับรถบรรทุกอาจจะเร่งความเร็วของรถ",
        "en": "The truck driver may speed up the vehicle.",
        "my": "ထရပ်ကားမောင်းသူသည် ယာဉ်ကို အရှိန်မြှင့်နိုင်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ประตูหลังรถบรรทุกอาจปิดไม่สนิท ทำให้สิ่งของตกลงมา",
        "en": "The back door of the truck may not close properly. make things fall",
        "my": "ကုန်တင်ကား၏နောက်ဘက်တံခါးကို ကောင်းစွာပိတ်နိုင်မည်မဟုတ်ပေ။ အရာတွေ ပြုတ်ကျပါစေ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบรรทุกอาจจะเบรกกะทันหัน",
        "en": "The truck may brake suddenly.",
        "my": "ထရပ်ကားသည် ရုတ်တရက် ဘရိတ်ပေါက်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถบรรทุกบดบังทัศนวิสัยในการขับของผู้ขับรถยนต์ A",
        "en": "The truck blocks the vision of Driver A.",
        "my": "ထရပ်ကားသည် Driver A ၏ အမြင်ကို ပိတ်ဆို့ထားသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 537,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การเลี้ยวซ้ายที่ทางสามแยกผู้ขับขี่ควรสังเกตรถจากทางไหน",
    "q_en": "Turning left at an intersection, which direction should the driver observe the vehicles?",
    "q_my": "လမ်းဆုံတစ်ခုတွင် လက်ဝဲကွေ့၊ ယာဉ်မောင်းသည် ယာဉ်များကို မည်ကဲ့သို့ သတိပြုသင့်သနည်း။",
    "options": [
      {
        "th": "รถที่วิ่งตรงมาทางขวา",
        "en": "Cars coming straight to the right",
        "my": "ကားတွေက ညာဘက်ကို တည့်တည့်လာနေတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถที่วิ่งสวนทาง",
        "en": "Cars traveling in the opposite direction",
        "my": "ဆန့်ကျင်ဘက်သို့ ဦးတည်နေသော ကားများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถทางด้านซ้าย",
        "en": "car on the left",
        "my": "ကားဘယ်ဘက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถทางข้างหลัง",
        "en": "car behind",
        "my": "နောက်ကား",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 538,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000533.webp",
    "q_th": "เสา A ตั้งอยู่จุดไหนของบริเวณรถยนต์",
    "q_en": "Where is the A-pillar located in the vehicle area?",
    "q_my": "ယာဉ်ဧရိယာအတွင်း တိုင် A သည် မည်သည့်နေရာတွင် တည်ရှိသနည်း။",
    "options": [
      {
        "th": "ตั้งอยู่ด้านข้าง มักจะอยู่ระหว่างประตูหน้าและหลัง",
        "en": "Located on the side Usually located between the front and back doors.",
        "my": "ဘေးဘက်တွင် တည်ရှိပြီး အများအားဖြင့် အရှေ့နှင့် နောက်တံခါးများကြားတွင် တည်ရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งที่ด้านหน้าของรถทั้งสองข้างของกระจกหน้ารถ",
        "en": "Located at the front of the vehicle on both sides of the windshield.",
        "my": "ယာဉ်၏ ရှေ့လေကာမှန်၏ ဘေးနှစ်ဖက်တွင် တည်ရှိသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตั้งที่ด้านหลังทั้งสองข้างของกระจกหลังรถ",
        "en": "Located behind both sides of the car's rear window.",
        "my": "ကား၏နောက်ပြတင်းပေါက်နှစ်ဖက်စလုံး၏ နောက်တွင်ရှိသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตั้งที่ด้านบนของตัวรถ ทำหน้าที่รับสัญญาณวิทยุ",
        "en": "Set at the top of the car. Serves to receive radio signals",
        "my": "ကားရဲ့ထိပ်မှာထား။ ရေဒီယို အချက်ပြမှုများကို လက်ခံရရှိရန် ဆောင်ရွက်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 539,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เพราะเหตุใดการคาดการณ์อุบัติเหตุจึงเป็นทักษะที่จำเป็นต่อการขับขี่",
    "q_en": "Why predicting accidents is an essential driving skill.",
    "q_my": "အဘယ်ကြောင့်ဆိုသော် မတော်တဆမှုများကို ကြိုတင်ခန့်မှန်းခြင်းသည် မရှိမဖြစ်လိုအပ်သော ယာဉ်မောင်းကျွမ်းကျင်မှုတစ်ခုဖြစ်သည်။",
    "options": [
      {
        "th": "ช่วยลดปัญหารถติด โดยการสนับสนุนการใช้รถสาธารณะ",
        "en": "Helps reduce traffic jams By supporting the use of public transportation",
        "my": "အများသူငှာ သယ်ယူပို့ဆောင်ရေးကို အထောက်အကူပြုခြင်းဖြင့် ယာဉ်ကြောပိတ်ဆို့မှုကို လျှော့ချပေးသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยให้ผู้ขับขี่เข้าใจในการเคลมประกันรถ เมื่อเกิดอุบัติเหตุ",
        "en": "Help drivers understand car insurance claims. When an accident occurs",
        "my": "ကားအာမခံ တောင်းဆိုမှုများကို ယာဉ်မောင်းများ နားလည်အောင် ကူညီပေးပါ။ မတော်တဆမှုတစ်ခုဖြစ်ပွားသောအခါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยลดอัตราการเกิดอุบัติเหตุรุนแรง",
        "en": "Helps reduce the rate of serious accidents.",
        "my": "ပြင်းထန်သော ယာဉ်တိုက်မှုနှုန်းကို လျှော့ချပေးသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ผิดทุกข้อ",
        "en": "Everything is wrong.",
        "my": "အရာအားလုံးက မှားနေတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 540,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000535.webp",
    "q_th": "จากภาพ ผู้ขับขี่คาดการณ์อุบัติเหตุว่าสิ่งใดควรระวัง",
    "q_en": "From the picture, drivers predict accidents and what they should be careful of.",
    "q_my": "ပုံထဲက ယာဉ်မောင်းတွေက ယာဉ်မတော်တဆမှုတွေနဲ့ သတိထားရမယ့်အရာတွေကို ခန့်မှန်းထားပါတယ်။",
    "options": [
      {
        "th": "รถยนต์จากเลนตรงข้าม",
        "en": "Cars from the opposite lane",
        "my": "ဆန့်ကျင်ဘက်လမ်းကြားမှ ကားများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ป้ายเตือน",
        "en": "warning sign",
        "my": "သတိပေးလက္ခဏာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ต้นไม้หล่น",
        "en": "fallen tree",
        "my": "ပြိုကျသောသစ်ပင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ข้างหน้าทางโค้งและมีระดับ",
        "en": "Ahead the road is curved and level.",
        "my": "ရှေ့လမ်းက ကွေးပြီး ကြမ်းတယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 541,
    "category": "accident_prediction",
    "image": null,
    "q_th": "3 วินาทีที่ปลอดภัยในการรักษาระยะห่างคืออะไร",
    "q_en": "What are 3 safe seconds to keep your distance?",
    "q_my": "မင်းရဲ့အကွာအဝေးကို ထိန်းထားဖို့ 3 စက္ကန့်ဆိုတာ ဘာလဲ။",
    "options": [
      {
        "th": "เทคนิคสำหรับตรวจเช็กความเร็วของถนนในแต่ละเลน",
        "en": "Techniques for checking road speed in each lane",
        "my": "လမ်းကြောင်းတစ်ခုစီရှိ လမ်းအမြန်နှုန်းကို စစ်ဆေးရန် နည်းလမ်းများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เทคนิคสำหรับตรวจเช็กระยะห่างที่เหมาะสมระหว่างรถคันข้าง",
        "en": "Techniques for checking the proper distance between neighboring cars",
        "my": "အိမ်နီးနားချင်းကားများအကြား သင့်လျော်သောအကွာအဝေးကို စစ်ဆေးရန် နည်းလမ်းများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เทคนิคสำหรับตรวจเช็กระยะห่างที่เหมาะสมระหว่างรถคันหน้า",
        "en": "Techniques for checking the proper distance between the cars in front",
        "my": "ရှေ့ကားများအကြား သင့်လျော်သော အကွာအဝေးကို စစ်ဆေးရန် နည်းစနစ်များ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เทคนิคสำหรับตรวจเช็กระยะห่างที่เหมาะสมของรถกับแยกข้างหน้า",
        "en": "Techniques for checking the proper distance of the car from the intersection ahead.",
        "my": "ရှေ့လမ်းဆုံမှ ကား၏ သင့်လျော်သော အကွာအဝေးကို စစ်ဆေးရန် နည်းလမ်းများ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 542,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เพราะเหตุใดผู้ขับขี่ควรรักษาระยะห่างระหว่างรถคันอื่นๆ",
    "q_en": "Why should drivers keep their distance from other vehicles?",
    "q_my": "ယာဉ်မောင်းများသည် အခြားယာဉ်များနှင့် အကွာအဝေးကို အဘယ်ကြောင့် စောင့်သင့်သနည်း။",
    "options": [
      {
        "th": "มีเวลาในการมองเห็น สังเกต ตัดสินใจ และตอบสนอง",
        "en": "There is time to see, observe, decide and respond.",
        "my": "ကြည့်ရှုရန်၊ စောင့်ကြည့်ရန်၊ ဆုံးဖြတ်ရန်နှင့် တုံ့ပြန်ရန် အချိန်ရှိသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เผื่อระยะสำหรับการแซง",
        "en": "Allow distance for overtaking.",
        "my": "ကျော်တက်ရန် အကွာအဝေးကို ခွင့်ပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยให้รถในเลนอื่นสามารถแซงเข้ามาได้",
        "en": "Allows cars in other lanes to overtake.",
        "my": "အခြားလမ်းကြားရှိ ကားများကို ကျော်တက်ခွင့်ပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยประหยัดน้ำมัน",
        "en": "Helps save fuel",
        "my": "လောင်စာဆီ သက်သာစေပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 543,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ผู้ขับขี่ควรใช้ความเร็วเท่าไร ถึงจะปลอดภัย",
    "q_en": "What speed should drivers use to be safe?",
    "q_my": "ယာဉ်မောင်းများ အန္တရာယ်ကင်းစေရန် မည်သည့်အမြန်နှုန်းကို အသုံးပြုသင့်သနည်း။",
    "options": [
      {
        "th": "เท่าไรก็ได้ หากไม่มีป้ายแนะนำความเร็ว",
        "en": "Any amount is fine if there is no speed limit sign.",
        "my": "မြန်နှုန်းကန့်သတ်ချက်မရှိလျှင် မည်သည့်ပမာဏမဆို အဆင်ပြေပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เหมาะสมกับถนนเส้นนั้น",
        "en": "appropriate for that road",
        "my": "ထိုလမ်းအတွက် သင့်လျော်သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เท่าไรก็ได้ หากไม่มีกล้องตรวจจับความเร็ว",
        "en": "Any amount if there are no speed cameras.",
        "my": "အမြန်နှုန်းကင်မရာများမရှိလျှင်မည်သည့်ပမာဏမဆို။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช้าที่สุดเท่าที่จะทำได้",
        "en": "As slowly as possible",
        "my": "တတ်နိုင်သမျှ ဖြည်းဖြည်းချင်းလုပ်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 544,
    "category": "accident_prediction",
    "image": null,
    "q_th": "หลักการการมองและสังเกตสิ่งต่าง ๆ ในขณะขับรถ 360 องศารอบๆรถของผู้ขับขี่ เพื่ออะไร",
    "q_en": "Principles of looking and observing things while driving 360 degrees around the driver's car. Why?",
    "q_my": "ယာဉ်မောင်း၏ကားကို 360 ဒီဂရီ မောင်းနှင်နေစဉ် အရာများကို ကြည့်ရှုခြင်းနှင့် စောင့်ကြည့်ခြင်းဆိုင်ရာ အခြေခံသဘောတရားများ။ ဘာကြောင့်လဲ?",
    "options": [
      {
        "th": "เพื่อให้ผู้ขับขี่สามารถสังเกตเห็นอันตรายที่อาจเกิดขึ้นทางด้านหน้า และด้านบนรถได้",
        "en": "So that drivers can notice potential dangers ahead. and on top of the car",
        "my": "သို့မှသာ ယာဉ်မောင်းများသည် ရှေ့တွင်ဖြစ်လာနိုင်သော အန္တရာယ်များကို သတိပြုမိနိုင်မည်ဖြစ်သည်။ ပြီးတော့ ကားပေါ်မှာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อให้ผู้ขับขี่สามารถสังเกตเห็นอันตรายที่อาจเกิดขึ้นทางด้านหน้า ด้านข้าง และด้านหลังรถได้",
        "en": "So that the driver can notice dangers that may occur in front, on the side, and behind the vehicle.",
        "my": "သို့မှသာ ယာဉ်မောင်းသည် ရှေ့၊ ဘေး၊ ယာဉ်နောက်တွင် ဖြစ်ပေါ်နိုင်သည့် အန္တရာယ်များကို သတိပြုမိနိုင်စေရန်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพื่อให้ผู้ขับขี่สามารถสังเกตเห็นอันตรายที่อาจเกิดขึ้นทางด้านหน้า และด้านหลังรถได้",
        "en": "So that drivers can notice potential dangers ahead. and behind the car",
        "my": "သို့မှသာ ယာဉ်မောင်းများသည် ရှေ့တွင်ဖြစ်လာနိုင်သော အန္တရာယ်များကို သတိပြုမိနိုင်မည်ဖြစ်သည်။ ကားနောက်မှာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เพื่อให้ผู้ขับขี่สามารถสังเกตเห็นอันตรายที่อาจเกิดขึ้นทางด้านหลังรถได้",
        "en": "So that the driver can notice potential dangers behind the vehicle.",
        "my": "သို့မှသာ ယာဉ်မောင်းသည် ယာဉ်နောက်ကွယ်ရှိ အန္တရာယ်များကို သတိပြုမိနိုင်မည်ဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 545,
    "category": "accident_prediction",
    "image": null,
    "q_th": "“นายเอ กำลังสังเกตรถคันข้างหน้าขับรถผ่านเสาไฟ จากนั้นเขาเริ่มนับ 'หนึ่งพันหนึ่ง หนึ่งพันสอง หนึ่งพันสาม’ แต่นายเอขับรถผ่านเสาไฟนั้นก่อนที่จะนับจบ 3 วินาที” จากเหตุการณ์นี้หมายความว่าอย่างไร",
    "q_en": "“Mr. A was observing the car in front driving past the light pole. Then he started counting. 'One thousand one, one thousand two, one thousand three', but Mr. A drove past that light pole before 3 seconds had finished counting.” What does this mean from this incident?",
    "q_my": "“မစ္စတာ A က မီးတိုင်ကိုဖြတ်မောင်းလာတဲ့ ရှေ့က ကားကို သတိပြုမိပြီး 'တစ်ထောင်တစ်ထောင်၊ တစ်ထောင်နှစ်ထောင်တစ်ထောင်သုံး' ဆိုပေမယ့် မစ္စတာ A က ရေတွက်ပြီး ၃ စက္ကန့်မပြီးခင်မှာ အဲဒီမီးတိုင်ကို ကျော်ဖြတ်ပြီး ဖြတ်သွားတယ်။ ဒီအဖြစ်အပျက်က ဘာကိုဆိုလိုတာလဲ။",
    "options": [
      {
        "th": "นายเอ รักษาระยะห่างจากรถคันหน้าได้มากเกินไป",
        "en": "Mr. A kept too much distance from the car in front.",
        "my": "မစ္စတာ A သည် ရှေ့ကားနှင့် အလွန်အလှမ်းဝေးသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นายเอ รักษาระยะห่างจากรถคันหน้าได้น้อยเกินไป",
        "en": "Mr. A kept too little distance from the car in front.",
        "my": "မစ္စတာ A သည် ရှေ့ကားနှင့် ခပ်လှမ်းလှမ်းတွင် ကပ်ထားသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "นายเอ รักษาระยะห่างจากรถคันหน้าได้เหมาะสม",
        "en": "Mr. A maintained an appropriate distance from the car in front.",
        "my": "မစ္စတာ A သည် ရှေ့ကားနှင့် သင့်လျော်သော အကွာအဝေးကို ထိန်းသိမ်းထားသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "นายเอ กำลังเตรียมตัวที่จะแซงขวา",
        "en": "Mr. A is preparing to pass on the right.",
        "my": "မစ္စတာ A သည် လက်ယာဘက်သို့ ကူးရန် ပြင်ဆင်နေသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 546,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000541.webp",
    "q_th": "จากภาพ ผู้ขับขี่ควรปฏิบัติอย่างไรจึงปลอดภัย",
    "q_en": "From the picture, what should drivers do to be safe?",
    "q_my": "ပုံထဲက ယာဉ်မောင်းတွေ ဘေးကင်းဖို့ ဘာတွေလုပ်သင့်လဲ။",
    "options": [
      {
        "th": "เปลี่ยนช่องจราจรไปทางขวา",
        "en": "Change traffic lane to the right.",
        "my": "ယာဉ်လမ်းကြောင်းကို ညာဘက်သို့ ပြောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็วเมื่ออยู่ในเขตชุมชน",
        "en": "Slow down when in community areas.",
        "my": "ရပ်ရွာဒေသများတွင် အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรเพื่อเตือนคนเดิน",
        "en": "Honk the horn to warn pedestrians.",
        "my": "လမ်းသွားလမ်းလာတွေကို သတိပေးဖို့ ဟွန်းတီးတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดกระจกเพื่อซื้อของ",
        "en": "Open the window to buy things.",
        "my": "ပစ္စည်းဝယ်ဖို့ ပြတင်းပေါက်ကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 547,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ข้อใดไม่ใช่จุดประสงค์ของการคาดการณ์อุบัติเหตุ",
    "q_en": "Which is not the purpose of accident prediction?",
    "q_my": "မတော်တဆမှု ခန့်မှန်းခြင်း၏ ရည်ရွယ်ချက်မှာ အဘယ်နည်း။",
    "options": [
      {
        "th": "ลดอัตราการเกิดอุบัติเหตุที่รุนแรงบนท้องถนน",
        "en": "Reduce the rate of serious accidents on the road.",
        "my": "လမ်းပေါ်တွင် ပြင်းထန်သော ယာဉ်တိုက်မှုနှုန်းကို လျှော့ချပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่สามารถคาดการณ์อุบัติเหตุที่จะเกิดขึ้นได้",
        "en": "Drivers can predict upcoming accidents.",
        "my": "ယာဉ်မောင်းများသည် နောင်လာမည့် မတော်တဆမှုများကို ကြိုတင်ခန့်မှန်းနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่สามารถตอบสนองต่อเหตุการณ์อันตรายที่จะเกิดขึ้นได้อย่างถูกวิธี",
        "en": "Drivers can respond correctly to upcoming dangerous events.",
        "my": "ယာဉ်မောင်းသူများသည် နောင်လာမည့် အန္တရာယ်ရှိသော ဖြစ်ရပ်များကို မှန်ကန်စွာ တုံ့ပြန်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดอัตราการใช้เชื้อเพลิง",
        "en": "Reduce fuel consumption",
        "my": "လောင်စာဆီသုံးစွဲမှုကို လျှော့ချပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 548,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000543.webp",
    "q_th": "จากภาพ ผู้ขับขี่จงคาดการณ์อุบัติเหตุว่าสิ่งใดควรระวัง",
    "q_en": "From the picture, the driver should predict the accident and what he should be careful of.",
    "q_my": "ပုံထဲကအတိုင်း ယာဉ်မောင်းက မတော်တဆမှုဖြစ်မယ့်အကြောင်းနဲ့ သူသတိထားရမယ့်အရာတွေကို ခန့်မှန်းသင့်ပါတယ်။",
    "options": [
      {
        "th": "รถจากทางร่วมด้านขวา",
        "en": "Cars from the right side of the road",
        "my": "ကားတွေက လမ်းညာဘက်ခြမ်းကနေ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถยนต์ข้างหน้า",
        "en": "car ahead",
        "my": "ကားရှေ့",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คอนกรีตกั้นช่องจราจร",
        "en": "Concrete blocking traffic lanes",
        "my": "ကွန်ကရစ်လမ်းကြောပိတ်ဆို့ခြင်း။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถกระบะจากทางด้านซ้าย",
        "en": "Pickup truck from the left",
        "my": "ဘယ်ဘက်မှ ပစ်ကပ်ကား",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 549,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ข้อใดไม่ใช่ตำแหน่งในการรักษาระยะห่างที่ปลอดภัยขณะขับขี่",
    "q_en": "Which is not a position to maintain a safe distance while driving?",
    "q_my": "ကားမောင်းနေစဉ် ဘေးကင်းသော အကွာအဝေးကို ထိန်းသိမ်းရန် မည်သည့် အနေအထား မဟုတ်သနည်း။",
    "options": [
      {
        "th": "ด้านซ้าย",
        "en": "left side",
        "my": "ဘယ်ဘက်ခြမ်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ด้านบน",
        "en": "top",
        "my": "ထိပ်တန်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ด้านขวา",
        "en": "right side",
        "my": "ညာဘက်ခြမ်း",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ด้านหน้า",
        "en": "front",
        "my": "ရှေ့",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 550,
    "category": "accident_prediction",
    "image": null,
    "q_th": "หลักการการมองและสังเกตสิ่งต่าง ๆ ในขณะขับรถต้องมองกี่องศารอบๆ รถของผู้ขับขี่",
    "q_en": "Principles for looking and observing things while driving. How many angles do you have to look around? Driver's car",
    "q_my": "ကားမောင်းနေစဉ် အရာများကို ကြည့်ရှုခြင်းနှင့် စောင့်ကြည့်ခြင်းအတွက် အခြေခံမူများ။ လှည့်ပတ်ကြည့်ရှုရန် ရှုထောင့်မည်မျှရှိသနည်း။ ယာဉ်မောင်းကား",
    "options": [
      {
        "th": "270 องศา",
        "en": "270 degrees",
        "my": "270 ဒီဂရီ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "360 องศา",
        "en": "360 degrees",
        "my": "360 ဒီဂရီ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "300 องศา",
        "en": "300 degrees",
        "my": "300 ဒီဂရီ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "90 องศา",
        "en": "90 degrees",
        "my": "90 ဒီဂရီ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 551,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ทักษะในการคาดการณ์อุบัติเหตุ ประกอบด้วยอะไรบ้าง",
    "q_en": "Accident prediction skills What does it consist of?",
    "q_my": "မတော်တဆ ကြိုတင်ခန့်မှန်းနိုင်မှုစွမ်းရည် ၎င်းတွင် အဘယ်အရာပါဝင်သနည်း။",
    "options": [
      {
        "th": "รักษาระยะห่างที่ปลอดภัย, การเร่งเครื่องยนต์ที่ถูกวิธี, การแจ้งเจ้าหน้าที่หลังจากการเกิดอุบัติเหตุ",
        "en": "Maintain a safe distance, accelerate the engine correctly, and notify authorities after an accident.",
        "my": "ဘေးကင်းသောအကွာအဝေးကိုထိန်းသိမ်းပါ၊ အင်ဂျင်ကိုမှန်ကန်စွာအရှိန်မြှင့်ပါ၊ မတော်တဆမှုတစ်ခုပြီးနောက်အာဏာပိုင်များကိုအကြောင်းကြားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มอง สังเกต วิเคราะห์, รักษาระยะห่างที่ปลอดภัย, การเคลมประกันภัยเมื่อเกิดอุบัติเหตุ",
        "en": "Look, observe, analyze, maintain a safe distance, make insurance claims in the event of an accident.",
        "my": "ကြည့်ပါ၊ စောင့်ကြည့်ပါ၊ ခွဲခြမ်းစိတ်ဖြာပါ၊ လုံခြုံသောအကွာအဝေးကို ထိန်းသိမ်းပါ၊ မတော်တဆမှုတစ်ခုတွင် အာမခံတောင်းဆိုမှုများကို ပြုလုပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รักษาระยะห่างที่ปลอดภัย, มอง สังเกต วิเคราะห์, ตอบสนองและปฏิบัติเพื่อหลีกเลี่ยงอุบัติเหตุ",
        "en": "Keep a safe distance, look, observe, analyse, respond and act to avoid accidents.",
        "my": "ဘေးကင်းသောအကွာအဝေးကို ထားရှိပါ၊ ကြည့်ရှုပါ၊ စောင့်ကြည့်ပါ၊ ခွဲခြမ်းစိတ်ဖြာပါ၊ တုံ့ပြန်ပါ၊ မတော်တဆမှုများကို ရှောင်ရှားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รักษาระยะห่างที่ปลอดภัย, มอง สังเกต วิเคราะห์, การช่วยเหลือผู้ประสบเหตุ",
        "en": "Keep a safe distance, look, observe, analyze, help victims.",
        "my": "ဘေးကင်းသောအကွာအဝေးကိုထားရှိပါ၊ ကြည့်ရှုပါ၊ စောင့်ကြည့်ပါ၊ ခွဲခြမ်းစိတ်ဖြာပါ၊ ဒုက္ခသည်များကိုကူညီပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 552,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อผู้ขับขี่ผ่านรถจอดข้างถนน สิ่งใดที่ผู้ขับควรระวัง",
    "q_en": "When a driver passes a car parked on the side of the road What should drivers be careful of?",
    "q_my": "ယာဉ်မောင်းက လမ်းဘေးမှာ ရပ်ထားတဲ့ ကားကို ဖြတ်သွားတဲ့အခါ ယာဉ်မောင်းတွေ ဘာတွေ သတိထားသင့်လဲ။",
    "options": [
      {
        "th": "มุมอับจากข้างหลังรถที่จอดอยู่",
        "en": "Blind spot from behind a parked car.",
        "my": "ရပ်ထားသောကားနောက်ကွယ်မှ မျက်မမြင်နေရာ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สัญญาณกันขโมยดังขึ้น",
        "en": "The anti-theft alarm sounded.",
        "my": "ခိုးမှုဆန့်ကျင်ရေး အချက်ပေးသံ ထွက်ပေါ်လာသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถูกทุกข้อ",
        "en": "All correct.",
        "my": "အားလုံးမှန်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ประตูรถของคันที่จอดอยู่เปิดออกกะทันหัน",
        "en": "The car door of the parked car suddenly opened.",
        "my": "ရပ်ထားသည့်ကား၏ ကားတံခါးသည် ရုတ်တရက် ပွင့်သွားသည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 553,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ข้อใดไม่ถูกต้องเกี่ยวกับการเลี้ยวซ้าย",
    "q_en": "Which is incorrect regarding left turns?",
    "q_my": "ဘယ်အလှည့်နဲ့ ပတ်သတ်ပြီး ဘယ်ဟာ မှားနေလဲ။",
    "options": [
      {
        "th": "หักพวงมาลัยน้อยกว่าการเลี้ยวขวา",
        "en": "Turn the steering wheel less than when turning right.",
        "my": "ညာဘက်ကွေ့သည့်အခါထက် စတီယာရင်ဘီးကို လျှော့ထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เว้นระยะห่างอย่างน้อย 6 วินาทีระหว่างรถของเรากับรถที่วิ่งตรงมาทางขวา",
        "en": "Leave at least 6 seconds between your car and a car coming straight to your right.",
        "my": "သင့်ကားနှင့် သင့်ညာဘက်သို့ တည့်တည့်လာနေသည့် ကားကြားတွင် အနည်းဆုံး 6 စက္ကန့်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หักพวงมาลัยมากกว่าการเลี้ยวขวา",
        "en": "Turn the steering wheel more than turning right.",
        "my": "ညာဘက်ကွေ့သည်ထက် စတီယာရင်ဘီးကို ပိုကွေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ต้องเร่งความเร็วเพื่อให้เข้ากับความเร็วของจราจรบนถนนที่รถกำลังเลี้ยว",
        "en": "The speed must be accelerated to match the speed of traffic on the road on which the vehicle is turning.",
        "my": "ယာဉ်ကွေ့နေသောလမ်းပေါ်ရှိ ယာဉ်အသွားအလာအရှိန်နှင့် ကိုက်ညီစေရန် အရှိန်မြှင့်ရမည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 554,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อผู้ขับขี่สังเกตเห็นอุบัติเหตุข้างหน้า สิ่งใดที่ผู้ขับขี่ควรระวัง",
    "q_en": "When the driver notices an accident ahead What should drivers be careful of?",
    "q_my": "ယာဉ်မောင်းသည် ရှေ့တွင် မတော်တဆမှုတစ်ခုကို သတိပြုမိသောအခါ ယာဉ်မောင်းများ မည်သို့သတိထားသင့်သနည်း။",
    "options": [
      {
        "th": "ถูกทุกข้อ",
        "en": "All correct.",
        "my": "အားလုံးမှန်ပါတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถคันอื่นหักหลบกะทันหันเพื่อเลี่ยงอุบัติเหตุที่เกิดขึ้น",
        "en": "Another car suddenly swerved to avoid an accident.",
        "my": "မတော်တဆမှုမဖြစ်စေရန် အခြားကားတစ်စီးသည် ရုတ်တရက် ကွေ့သွားခဲ့သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถกู้ภัย ขับแทรกมาด้วยความเร็ว",
        "en": "A rescue vehicle drove in at high speed.",
        "my": "ကယ်ဆယ်ရေးယာဉ်တစ်စီးက အရှိန်ပြင်းပြင်းနဲ့ မောင်းဝင်လာပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คน หรือ รถ วิ่งตัดหน้าเพื่อมาช่วยเหลือผู้บาดเจ็บ",
        "en": "A person or car runs in front of you to help the injured person.",
        "my": "ဒဏ်ရာရသူအား ကူညီရန် လူတစ်ဦး သို့မဟုတ် ကားတစ်စီးသည် သင့်ရှေ့တွင် ပြေးနေသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 555,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000550.webp",
    "q_th": "จากภาพ รถบรรทุกกำลังจะตีวงเลี้ยวซ้าย ผู้ขับขี่ควรหยุดรถในบริเวณใดจึงจะปลอดภัย",
    "q_en": "From the picture, the truck is about to make a left turn. Where should drivers stop their vehicles to be safe?",
    "q_my": "ပုံထဲကအတိုင်း ထရပ်ကားက ဘယ်ဘက်ကွေ့တော့မယ်။ ယာဉ်မောင်းများသည် ယာဉ်အန္တရာယ်ကင်းစေရန် မည်သည့်နေရာတွင် ရပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ตำแหน่ง A และ C",
        "en": "Position A and C",
        "my": "ရာထူး A နှင့် C",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตำแหน่ง B",
        "en": "Position B",
        "my": "ရာထူး B",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตำแหน่ง C",
        "en": "Position C",
        "my": "ရာထူး C",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตำแหน่ง A",
        "en": "Position A",
        "my": "ရာထူး A",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 556,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000551.webp",
    "q_th": "จากภาพผู้ขับขี่รถ C กำลังเลี้ยวซ้าย ผู้ขับขี่รถ C ควรระวังรถคันใด",
    "q_en": "From the picture of the driver of Car C making a left turn, which car should the Driver of Car C be careful of?",
    "q_my": "ကား C ၏ ဘယ်ဘက်ကွေ့သည့် ယာဉ်မောင်း၏ ပုံတွင် မည်သည့်ကား C ၏ ယာဉ်မောင်းကို သတိထားသင့်သနည်း။",
    "options": [
      {
        "th": "คัน B",
        "en": "Rod B",
        "my": "ကြိမ်လုံး B",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "คัน A",
        "en": "Rod A",
        "my": "ကြိမ်လုံး A",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ต้องระวังเนื่องจากอยู่ในระยะที่ปลอดภัยในขณะเลี้ยว",
        "en": "You don't need to be careful as you are at a safe distance while turning.",
        "my": "လှည့်နေစဉ် ဘေးကင်းသော အကွာအဝေးတွင် ရှိနေသောကြောင့် သတိထားရန် မလိုအပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คัน A และ B",
        "en": "Rod A and B",
        "my": "Rod A နှင့် B",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 557,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การมองข้ามไหล่ไปด้านข้างและด้านหลัง มีไว้เพื่ออะไร",
    "q_en": "Looking over the shoulder to the side and back What is it for?",
    "q_my": "ပခုံးကို တစ်ဖက်နဲ့ အနောက်ကို ကြည့်ရင် ဘာအတွက်လဲ။",
    "options": [
      {
        "th": "ตรวจสอบกระจกข้างซ้าย",
        "en": "Check the left mirror",
        "my": "ဘယ်ဘက်မှန်ကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบกระจกข้างขวา",
        "en": "Check the right mirror",
        "my": "မှန်မှန်ကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบจุดบอด",
        "en": "Check blind spots",
        "my": "မျက်စိကွယ်ခြင်းများကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ตรวจสอบยางรถ",
        "en": "Check the tires",
        "my": "တာယာများကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 558,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000553.webp",
    "q_th": "การปรับเบาะนั่งให้เหมาะสมกับรูปร่างของผู้ขับ เพื่อเพิ่มทัศนวิสัยในการมองในจุดใด",
    "q_en": "Adjusting the seat to suit the driver's body shape To increase visibility at any point",
    "q_my": "ယာဉ်မောင်းသူ၏ ကိုယ်ထည်ပုံသဏ္ဍာန်နှင့် ကိုက်ညီစေရန် ထိုင်ခုံအား ချိန်ညှိခြင်း",
    "options": [
      {
        "th": "จุดบอดเสา B",
        "en": "B-pillar blind spot",
        "my": "ခ-ကန်းတိုင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จุดบอดเสา D",
        "en": "D pillar blind spot",
        "my": "ဒါလည်း မျက်မမြင်တိုင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จุดบอดเสา C",
        "en": "C-pillar blind spot",
        "my": "ဗိုက်ကန်းကွက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จุดบอดเสา A",
        "en": "A-pillar blind spot",
        "my": "ကန်းကွက်မှတ်တိုင်",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 559,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อผู้ขับขี่ผ่านเสาไฟ สิ่งใดที่ผู้ขับควรระวัง",
    "q_en": "When the driver passes the light pole What should drivers be careful of?",
    "q_my": "ယာဉ်မောင်းက မီးတိုင်ကိုဖြတ်သွားတဲ့အခါ ယာဉ်မောင်းတွေ ဘာတွေ သတိထားသင့်လဲ။",
    "options": [
      {
        "th": "ถูกทุกข้อ",
        "en": "All correct.",
        "my": "အားလုံးမှန်ပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มุมอับที่ทำให้ไม่เห็นคนที่วิ่งออกมา",
        "en": "Hidden corner that makes people unable to see people running out",
        "my": "လူတွေ ပြေးထွက်သွားတာကို မမြင်ရအောင် ဖျောက်ထားတဲ့ထောင့်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ไฟอาจจะลัดวงจร",
        "en": "The light may be short-circuited.",
        "my": "အလင်းသည် ဝါယာရှော့ဖြစ်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์ขับแทรก",
        "en": "motorcycle driving in",
        "my": "ဆိုင်ကယ်မောင်းဝင်လာသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 560,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การมองข้ามไหล่ไปด้านข้างและด้านหลัง ใช้ในกรณีใด",
    "q_en": "Looking over the shoulder to the side and back is used in what cases?",
    "q_my": "ပခုံးကို တစ်ဖက်နဲ့ အနောက်ကို ကြည့်ရင် ဘယ်ကိစ္စမှာ သုံးလဲ။",
    "options": [
      {
        "th": "การถอยรถ",
        "en": "reversing the car",
        "my": "ကားကို နောက်ပြန်လှည့်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "การเลี้ยวซ้าย",
        "en": "turning left",
        "my": "ဘယ်လှည့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การเลี้ยวเข้าซอย",
        "en": "Turning into an alley",
        "my": "လမ်းသွယ်တစ်ခုအဖြစ်သို့ ကူးပြောင်းသွားသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การแซงซ้าย",
        "en": "Overtaking on the left",
        "my": "ဘယ်ဘက်တွင် ကျော်တက်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 561,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000556.webp",
    "q_th": "จากภาพ คนขับรถบรรทุกสามารถมองเห็นรถยนต์คัน A หรือไม่",
    "q_en": "From the picture, can the truck driver see Car A?",
    "q_my": "ပုံထဲက ထရပ်ကားမောင်းသူက Car A ကို မြင်နိုင်ပါသလား။",
    "options": [
      {
        "th": "มองเห็นได้ชัดเจน จากกระจกมองข้างขวา",
        "en": "clearly visible from the right side mirror",
        "my": "ညာဘက်မှန်ကနေ ရှင်းရှင်းလင်းလင်းမြင်ရတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มองไม่เห็น เนื่องจากรถยนต์คัน A อยู่ในมุมบอดของรถบรรทุก",
        "en": "Can't see because Car A is in the truck's blind spot.",
        "my": "ကား A သည် ထရပ်ကား၏ မျက်မမြင်နေရာတွင် ရှိနေသောကြောင့် မမြင်ရပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "มองเห็นได้ชัดเจน จากกระจกมองข้างซ้าย",
        "en": "clearly visible from the left rearview mirror",
        "my": "ဘယ်ဘက်နောက်ကြည့်မှန်ကနေ ရှင်းရှင်းလင်းလင်းမြင်ရတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มองเห็นได้ชัดเจน จากกระจกมองหลัง",
        "en": "clearly visible from the rear view mirror",
        "my": "နောက်ကြည့်မှန်ကနေ ရှင်းရှင်းလင်းလင်းမြင်ရတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 562,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ในการเลี้ยวซ้าย รถประเภทใดต้องการใช้พื้นที่ในการเลี้ยวมากที่สุด",
    "q_en": "To turn left What type of car needs the most space to turn?",
    "q_my": "ဘယ်ဘက်ကွေ့ဖို့ ဘယ်ကားအမျိုးအစားက ကွေ့ဖို့နေရာအများဆုံးလိုအပ်လဲ။",
    "options": [
      {
        "th": "รถบัส",
        "en": "bus",
        "my": "ဘတ်စ်ကား",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถจักรยานยนต์",
        "en": "motorcycle",
        "my": "ဆိုင်ကယ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถสองแถว",
        "en": "minibus",
        "my": "မီနီဘတ်စ်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถยนต์",
        "en": "car",
        "my": "ကား",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 563,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ยิ่งขับรถเร็วมาก ทัศนวิสัยในการมองรอบรถจะเป็นอย่างไร",
    "q_en": "The faster you drive What will the visibility around the car be like?",
    "q_my": "မြန်မြန်မောင်းလေ ကားပတ်ပတ်လည်ကို ဘယ်လိုမြင်နိုင်မလဲ။",
    "options": [
      {
        "th": "ทัศนวิสัยชัดเจนมากขึ้น",
        "en": "Visibility is clearer.",
        "my": "မြင်နိုင်စွမ်းက ပိုရှင်းတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไม่ส่งผลต่อทัศนวิสัยในการมอง",
        "en": "Does not affect visibility.",
        "my": "မြင်နိုင်စွမ်းကို မထိခိုက်စေပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ทัศนวิสัยในการมองแย่ลง",
        "en": "Vision deteriorates",
        "my": "အမြင်အာရုံ ယိုယွင်းလာသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทัศนวิสัยในการมองด้านข้างดีมากขึ้น",
        "en": "Visibility when looking to the side is better.",
        "my": "ဘေးကိုကြည့်တဲ့အခါ မြင်နိုင်စွမ်းက ပိုကောင်းပါတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 564,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การปรับกระจกข้างให้มีประสิทธิภาพควรทำอย่างไร",
    "q_en": "How should I adjust the side mirrors to be effective?",
    "q_my": "ထိရောက်မှုရှိစေရန် ဘေးကြည့်မှန်များကို မည်သို့ချိန်ညှိသင့်သနည်း။",
    "options": [
      {
        "th": "ควรปรับกระจกให้มองเห็นด้านข้างของรถเพียง 1/2 ของพื้นที่กระจก",
        "en": "The mirror should be adjusted so that only 1/2 of the mirror area can be seen on the side of the car.",
        "my": "ကား၏ဘက်ခြမ်းတွင် မှန်ဧရိယာ၏ 1/2 ကိုသာ မြင်နိုင်စေရန် မှန်ကို ချိန်ညှိရပါမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรปรับกระจกให้มองเห็นด้านข้างของรถเพียง 1/6 ของพื้นที่กระจก",
        "en": "The mirror should be adjusted so that only 1/6 of the mirror area can be seen on the side of the vehicle.",
        "my": "ကား၏ဘက်ခြမ်းတွင် မှန်ဧရိယာ၏ 1/6 ကို မြင်နိုင်စေရန် မှန်ကို ချိန်ညှိရပါမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรปรับกระจกให้มองเห็นด้านข้างของรถเพียง 1/3 ของพื้นที่กระจก",
        "en": "The mirror should be adjusted so that only 1/3 of the mirror area can be seen on the side of the car.",
        "my": "ကား၏ဘက်ခြမ်းတွင် မှန်ဧရိယာ၏ 1/3 ကိုသာ မြင်နိုင်စေရန် မှန်ကို ချိန်ညှိရပါမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ควรปรับกระจกให้มองเห็นด้านข้างของรถเพียง 1/4 ของพื้นที่กระจก",
        "en": "The mirror should be adjusted so that only 1/4 of the mirror area can be seen on the side of the car.",
        "my": "ကား၏ဘက်ခြမ်းတွင် မှန်ဧရိယာ၏ 1/4 ကိုသာ မြင်နိုင်စေရန် မှန်ကို ချိန်ညှိရပါမည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 565,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การมองข้ามไหล่ไปด้านข้างและด้านหลัง ใช้ในกรณีใด",
    "q_en": "Looking over the shoulder to the side and back is used in what cases?",
    "q_my": "ပခုံးကို တစ်ဖက်နဲ့ အနောက်ကို ကြည့်ရင် ဘယ်ကိစ္စမှာ သုံးလဲ။",
    "options": [
      {
        "th": "การแซงซ้าย",
        "en": "Overtaking on the left",
        "my": "ဘယ်ဘက်တွင် ကျော်တက်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปลี่ยนช่องจราจร",
        "en": "change lane",
        "my": "လမ်းပြောင်း",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "การเลี้ยวเข้าซอย",
        "en": "Turning into an alley",
        "my": "လမ်းသွယ်တစ်ခုအဖြစ်သို့ ကူးပြောင်းသွားသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การเลี้ยวซ้าย",
        "en": "turning left",
        "my": "ဘယ်လှည့်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 566,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เสาหลักในรถยนต์คืออะไร",
    "q_en": "What are the main pillars in a car?",
    "q_my": "ကားတစ်စီးမှာ ပင်မတိုင်တွေက ဘာတွေလဲ။",
    "options": [
      {
        "th": "เสาแนวตั้งรอบๆ รถซึ่งอยู่ระหว่างกระจกซึ่งส่งผลต่อจุดอับจุดบอดในขณะขับขี่",
        "en": "Vertical pillars around The vehicle is between the mirrors which affects the blind spot while driving.",
        "my": "ဒေါင်လိုက်တိုင်များ မော်တော်ယာဉ်မောင်းနှင်နေစဉ် မျက်မမြင်နေရာကို ထိခိုက်စေသည့် မှန်များကြားတွင် ရှိနေသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เสาไฟฟ้าที่อยู่บนช่วงถนน",
        "en": "Electrical poles on the road",
        "my": "လမ်းမပေါ်တွင် လျှပ်စစ်မီးတိုင်များ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เสาสัญญาณไฟจราจรที่บดบังการมองหน้า",
        "en": "Traffic light poles that obscure your view",
        "my": "သင့်မြင်ကွင်းကို ကွယ်စေသော မီးပွိုင့်များ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เสาสัญญาณวิทยุที่อาจจะบดบังทัศนวิสัยในการขับขี่",
        "en": "Radio antennas that may obscure driving vision",
        "my": "မောင်းနှင်မှုအမြင်ကို ဖုံးကွယ်စေသော ရေဒီယိုအင်တင်နာများ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 567,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อผู้ขับขี่ผ่านป้ายรถโดยสาร สิ่งใดที่ผู้ขับควรระวัง",
    "q_en": "When the driver passes the bus stop What should drivers be careful of?",
    "q_my": "ယာဉ်မောင်းက ဘတ်စ်ကားမှတ်တိုင်ကို ဖြတ်သွားတဲ့အခါ ယာဉ်မောင်းတွေ ဘာတွေ သတိထားသင့်လဲ။",
    "options": [
      {
        "th": "รถโดยสารเบรก และปาดเข้าเลนซ้าย",
        "en": "The bus brakes and cuts into the left lane.",
        "my": "ဘတ်စ်ကားက ဘရိတ်အုပ်ပြီး ဘယ်ဘက်လမ်းကြားကို ဖြတ်သွားတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถูกทุกข้อ",
        "en": "All correct.",
        "my": "အားလုံးမှန်ပါတယ်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "มุมอับจากรถโดยสารขนาดใหญ่ ทำให้ไม่เห็นคนที่ลงจากรถ หรือคนที่กำลังรอข้ามถนนหน้ารถโดยสารที่จอดอยู่",
        "en": "Blind spot from a large bus Makes it impossible to see people getting out of the car Or people waiting to cross the street in front of a parked bus.",
        "my": "ဘတ်စ်ကားကြီးတစ်စင်းမှ ကန်းသည့်နေရာသည် ကားထဲမှ ဆင်းလာသော လူများကို မမြင်နိုင်စေဘဲ ရပ်ထားသည့် ဘတ်စ်ကားရှေ့တွင် လမ်းဖြတ်ကူးရန် စောင့်ဆိုင်းနေသူများဖြစ်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถโดยสารเปลี่ยนเลน ขับเข้าช่องจราจรของผู้ขับขี่กะทันหัน",
        "en": "Buses change lanes Driving suddenly into the driver's lane.",
        "my": "ဘတ်စ်ကားများသည် လမ်းကြောများပြောင်းကာ ယာဉ်မောင်း၏လမ်းကြားသို့ ရုတ်တရက် မောင်းနှင်ကြသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 568,
    "category": "accident_prediction",
    "image": "/exam_images/accident/1000000000563.webp",
    "q_th": "จากภาพ ผู้ขับขี่จงคาดการณ์อุบัติเหตุว่าสิ่งใดอาจส่งผลอันตรายขณะขับขี่",
    "q_en": "From the picture, the driver should predict what accident might cause danger while driving.",
    "q_my": "ပုံတွင် ယာဉ်မောင်းသည် ယာဉ်မောင်းနေစဉ် မည်သည့်မတော်တဆမှုဖြစ်နိုင်သည်ကို ခန့်မှန်းသင့်သည်။",
    "options": [
      {
        "th": "รถบรรทุกอาจเลี้ยวซ้าย",
        "en": "The truck may turn left.",
        "my": "ထရပ်ကားသည် ဘယ်ဘက်သို့ ကွေ့သွားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถแท็กซี่อาจเปลี่ยนช่องจราจรมาทางซ้าย",
        "en": "The taxi may change lanes to the left.",
        "my": "တက္ကစီသည် လမ်းသွားများကို ဘယ်ဘက်သို့ ပြောင်းနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ประตูหลังรถบรรทุกอาจปิดไม่สนิท",
        "en": "The back door of the truck may not close properly.",
        "my": "ကုန်တင်ကား၏နောက်ဘက်တံခါးကို ကောင်းစွာပိတ်နိုင်မည်မဟုတ်ပေ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถบรรทุกอาจเปลี่ยนช่องจราจรไปทางขวา",
        "en": "The truck may change lanes to the right.",
        "my": "ထရပ်ကားသည် လမ်းကြောများကို ညာဘက်သို့ ပြောင်းနိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 569,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ยิ่งขับรถเร็วมาก สิ่งใดอาจจะเกิดขึ้นเมื่อประสบอุบัติเหตุ",
    "q_en": "The faster you drive What can happen in an accident?",
    "q_my": "မြန်မြန်မောင်းလေ ယာဉ်မတော်တဆမှုမှာ ဘာတွေဖြစ်နိုင်လဲ။",
    "options": [
      {
        "th": "รู้ถึงประสิทธิภาพการเบรกของรถ",
        "en": "Know your car's braking performance.",
        "my": "သင့်ကား၏ ဘရိတ်စွမ်းဆောင်ရည်ကို သိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "การเคลมประกันง่ายยิ่งขึ้น",
        "en": "Making insurance claims easier",
        "my": "အာမခံတောင်းဆိုမှုများကို ပိုမိုလွယ်ကူစေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถุงลมนิรภัยทำงานได้มีประสิทธิภาพมากขึ้น",
        "en": "Airbags work more efficiently.",
        "my": "လေအိတ်များသည် ပိုမိုထိရောက်စွာ အလုပ်လုပ်ပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บาดเจ็บสาหัส หรือ ตาย",
        "en": "Serious injury or death",
        "my": "ပြင်းထန်သောဒဏ်ရာ သို့မဟုတ် သေဆုံးခြင်း။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 570,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ข้อดีของ 3 วินาทีที่ปลอดภัยในการรักษาระยะห่างคืออะไร",
    "q_en": "What are the benefits of 3 safe seconds to keep your distance?",
    "q_my": "သင့်အကွာအဝေးကို ထိန်းထားဖို့ 3 စက္ကန့်ရဲ့ အကျိုးကျေးဇူးတွေက ဘာတွေလဲ။",
    "options": [
      {
        "th": "ผู้ขับขี่สามารถเลี่ยงเขม่าดำจากควันรถคันข้างหน้าได้",
        "en": "Drivers can avoid the black soot from the smoke of the car ahead.",
        "my": "ယာဉ်မောင်းများသည် ရှေ့ကားမီးခိုးများမှ အနက်ရောင်မီးခိုးများကို ရှောင်ရှားနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่สามารถรักษาระยะห่างกับยานพาหนะคันอื่นๆ ได้ในทุกความเร็วที่ขับขี่",
        "en": "Drivers can maintain distance from other vehicles. at all driving speeds",
        "my": "ယာဉ်မောင်းများသည် အခြားယာဉ်များနှင့် အကွာအဝေးကို ထိန်းသိမ်းနိုင်သည်။ မောင်းနှင်မှုအားလုံးတွင်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ผู้ขับขี่สามารถเร่งความเร็วได้ทุกเมื่อ",
        "en": "The driver can accelerate at any time.",
        "my": "ယာဉ်မောင်းသည် အချိန်မရွေး အရှိန်မြှင့်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผู้ขับขี่สามารถกะระยะในการแซงได้",
        "en": "The driver can estimate the distance for overtaking.",
        "my": "ယာဉ်မောင်းသည် ကျော်တက်ရန် အကွာအဝေးကို ခန့်မှန်းနိုင်သည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 571,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ในกรณีที่ฝนตก ผู้ขับขี่ควรรักษาระยะห่างจากรถคันหน้าอย่างไร",
    "q_en": "In case of rain How far should drivers maintain their distance from the vehicle in front?",
    "q_my": "မိုးရွာတဲ့အခါ ယာဉ်မောင်းတွေအနေနဲ့ ရှေ့ယာဉ်နဲ့ အကွာအဝေး ဘယ်လောက်အထိ ထားရှိသင့်လဲ။",
    "options": [
      {
        "th": "น้อยกว่า 3 วินาที",
        "en": "less than 3 seconds",
        "my": "3 စက္ကန့်ထက်နည်းတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "2 วินาที",
        "en": "2 seconds",
        "my": "2 စက္ကန့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มากกว่า 3 วินาที",
        "en": "more than 3 seconds",
        "my": "3 စက္ကန့်ကျော်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "3 วินาที",
        "en": "3 seconds",
        "my": "၃ စက္ကန့်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 572,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อท่านขับรถอยู่ในเส้นทางหลักและต้องการเลี้ยวขวาเข้าสู่เส้นทางรอง ควรตรวจดูรถจักรยานยนต์ก่อนทำการเลี้ยวเพราะเหตุใด",
    "q_en": "When you are driving on the main route and want to turn right onto the secondary route. Why should you check your motorcycle before turning?",
    "q_my": "ပင်မလမ်းကြောင်းပေါ်တွင် မောင်းနှင်သည့်အခါ အလယ်တန်းလမ်းကြောင်းပေါ်သို့ ညာဘက်သို့ ကွေ့ချင်ပါသည်။ မကွေ့ခင် ဘာကြောင့် ဆိုင်ကယ်ကို စစ်ဆေးသင့်တာလဲ။",
    "options": [
      {
        "th": "รถจักรยานยนต์อาจทำการแซงในทางด้านซ้าย",
        "en": "Motorcycles may overtake on the left.",
        "my": "ဘယ်ဘက်တွင် ဆိုင်ကယ်များ ကျော်တက်နိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์อาจออกมาจากเส้นทางรอง",
        "en": "Motorcycles may come off secondary routes.",
        "my": "မော်တော်ဆိုင်ကယ်များသည် သာမညလမ်းကြောင်းမှ ဆင်းသက်လာနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์อาจตามหลังในระยะกระชั้นชิด",
        "en": "Motorcycles may follow closely behind.",
        "my": "မော်တော်ဆိုင်ကယ်များ နောက်သို့ အနီးကပ်လိုက်လာနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์อาจทำการแซงทางด้านขวา",
        "en": "Motorcycles may pass on the right side.",
        "my": "မော်တော်ဆိုင်ကယ်တွေက ညာဘက်ခြမ်းကို ဖြတ်သွားနိုင်တယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 573,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อขับผ่านบริเวณศูนย์การค้า ตลาด เขตชุมชน ผู้ขับขี่ควรระวังอะไรมากที่สุด",
    "q_en": "When driving through shopping centers, markets, or community areas, what should drivers be most careful of?",
    "q_my": "စျေးဝယ်စင်တာများ၊ ဈေးများ၊ သို့မဟုတ် ရပ်ရွာဒေသများမှတဆင့် မောင်းနှင်သည့်အခါ ယာဉ်မောင်းများသည် အဘယ်အရာကို သတိထားသင့်သနည်း။",
    "options": [
      {
        "th": "คนเดินเท้า",
        "en": "pedestrian",
        "my": "လူသွားလူလာ",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถแท็กซี่",
        "en": "taxi",
        "my": "တက္ကစီ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถโดยสารประจำทาง",
        "en": "public bus",
        "my": "အများသူငှာ ဘတ်စ်ကား",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถจักรยานยนต์",
        "en": "motorcycle",
        "my": "ဆိုင်ကယ်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 574,
    "category": "accident_prediction",
    "image": null,
    "q_th": "สิ่งใดที่ผู้ขับขี่ควรปฏิบัติเมื่อสังเกตเห็นรถจักรยานยนต์",
    "q_en": "What should drivers do when they notice a motorcycle?",
    "q_my": "ယာဉ်မောင်းများ မော်တော်ဆိုင်ကယ်ကို သတိပြုမိသောအခါ ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "ชะลอความเร็ว",
        "en": "slow down",
        "my": "နှေးကွေး",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณไฟเพื่อเตือน",
        "en": "Give a light signal to warn",
        "my": "သတိပေးရန် မီးအချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วรถ",
        "en": "Accelerate the car.",
        "my": "ကားကို အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบกระจกข้าง กระจกหลังและจุดบอดให้ดีก่อนเปลี่ยนช่องจราจร",
        "en": "Check the side mirrors Look carefully at your rear window and blind spots before changing lanes.",
        "my": "ဘေးကြည့်မှန်များကို စစ်ဆေးပြီး လမ်းများမပြောင်းမီ သင့်နောက်ပြတင်းပေါက်နှင့် မျက်မမြင်အစက်အပြောက်များကို ဂရုတစိုက်ကြည့်ရှုပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 575,
    "category": "accident_prediction",
    "image": null,
    "q_th": "หากผู้ขับขี่ต้องการเปลี่ยนช่องจราจร ผู้ขับขี่ควรสังเกตสิ่งใดมากที่สุด",
    "q_en": "If the driver wants to change traffic lanes What should drivers be most observant of?",
    "q_my": "ယာဉ်မောင်းသည် ယာဉ်လမ်းကြောင်းပြောင်းလိုပါက ယာဉ်မောင်းသည် အဘယ်အရာကို သတိထားသင့်သနည်း။",
    "options": [
      {
        "th": "คนที่กำลังเดินอยู่บนทางเท้า",
        "en": "people walking on the sidewalk",
        "my": "လမ်းဘေးမှာ လမ်းလျှောက်တဲ့လူတွေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "จุดอับ จุดบอด",
        "en": "blind spot blind spot",
        "my": "blind spot ကန်းကွက်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "รถที่กำลังจะเบรกข้างหน้า",
        "en": "A car that is about to brake ahead",
        "my": "ရှေ့က ဘရိတ်အုပ်တော့မယ့်ကား",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถที่วิ่งข้างหน้า",
        "en": "car running ahead",
        "my": "ကားရှေ့ပြေးသည်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 576,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ในกรณีที่มีการจราจรหนาแน่น ผู้ขับขี่อาจไม่สามารถมองไปข้างหน้าได้ไกล ดังนั้นผู้ขับขี่ควรสังเกตจากสิ่งใดได้บ้าง",
    "q_en": "In the case of heavy traffic The driver may not be able to look very far ahead. So what should drivers be aware of?",
    "q_my": "ယာဉ်အသွားအလာများသော အခြေအနေတွင် ယာဉ်မောင်းသည် ရှေ့ကို အလွန်ဝေးဝေး မကြည့်နိုင်ပါ။ ဒီတော့ ကားသမားတွေ ဘာတွေ သတိထားသင့်လဲ။",
    "options": [
      {
        "th": "ทะเบียนรถของคันข้างหน้า",
        "en": "License plate of the car in front",
        "my": "ကားရှေ့တွင် လိုင်စင်နံပါတ်ပြား",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สีรถของคันข้างๆ",
        "en": "Color of the car next to you",
        "my": "မင်းဘေးနားက ကားအရောင်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สัญญาณไฟจราจร",
        "en": "traffic light",
        "my": "မီးပွိုင့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ไฟเบรกของรถคันข้างหน้า",
        "en": "Brake lights of the car ahead",
        "my": "ကားရှေ့က ဘရိတ်မီးတွေ",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 577,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อขับผ่านบริเวณศูนย์การค้า ตลาด เขตชุมชน ผู้ขับขี่ควรปฏิบัติตัวอย่างไร",
    "q_en": "When driving through shopping centers, markets, and community areas, how should drivers behave?",
    "q_my": "ဈေးဝယ်စင်တာများ၊ ဈေးများနှင့် ရပ်ရွာဒေသများတွင် မောင်းနှင်သည့်အခါ ယာဉ်မောင်းများ မည်သို့ပြုမူသင့်သနည်း။",
    "options": [
      {
        "th": "ลดหน้าต่างลง",
        "en": "Roll down the window",
        "my": "ပြတင်းပေါက်ကို လှိမ့်ချလိုက်တယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความเร็วต่ำ",
        "en": "Use low speed",
        "my": "အနိမ့်အမြန်နှုန်းကိုသုံးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "บีบแตรเพื่อเตือน",
        "en": "Honk the horn to warn",
        "my": "သတိပေးဖို့ ဟွန်းတီးတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟสูง",
        "en": "Turn on the high beam",
        "my": "high beam ကိုဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 578,
    "category": "accident_prediction",
    "image": null,
    "q_th": "สิ่งใดคือสิ่งที่ปฏิบัติอย่างสุดท้ายเมื่อกลับรถ",
    "q_en": "What is the last thing you do when making a U-turn?",
    "q_my": "ဂငယ်ကွေ့မှာ သင်နောက်ဆုံးလုပ်တာက ဘာလဲ။",
    "options": [
      {
        "th": "ชะลอเข้าเลนขวา",
        "en": "Slow down into the right lane.",
        "my": "ညာဘက်လမ်းကြားသို့ အရှိန်လျှော့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หยุดรถ มองไกลและสังเกตกระแสจราจร ที่กำลังวิ่งสวนมา",
        "en": "Stop the car, look into the distance and observe the flow of traffic. that is running in the opposite direction",
        "my": "ကားကိုရပ်ပြီး အဝေးကိုကြည့်ကာ ယာဉ်ကြောစီးဆင်းမှုကို သတိပြုပါ။ ၎င်းသည် ဆန့်ကျင်ဘက်သို့ လည်ပတ်နေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "กลับรถแล้วรีบตั้งลำ และปรับความเร็วให้เหมาะสม",
        "en": "Make a U-turn and quickly set up your boat. and adjust the speed appropriately",
        "my": "ဂငယ်ကွေ့ပြီး သင့်လှေကို အမြန်တပ်ဆင်ပါ။ အရှိန်ကို သင့်လျော်သလို ချိန်ညှိပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟเลี้ยวเพื่อส่งสัญญาณให้รถคันหลัง รู้ว่ากำลังว่าจะเข้าเลนขวาเพื่อกลับรถ",
        "en": "Turn on your turn signal to signal the vehicle behind you. Know that you are about to enter the right lane to make a U-turn.",
        "my": "သင့်နောက်ကယာဉ်ကို အချက်ပြရန် သင့်အလှည့်အချက်ပြမှုကို ဖွင့်ပါ။ ဂငယ်ကွေ့ကွေ့ရန် ညာဘက်လမ်းကြားထဲသို့ ဝင်တော့မည်ကို သိထားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 579,
    "category": "accident_prediction",
    "image": null,
    "q_th": "กรณีผู้ขับขี่ขับผ่านแยกที่มีสัญญาณไฟกะพริบสีเหลือง ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "In the case where the driver drives through an intersection with a flashing yellow light What must the driver do?",
    "q_my": "မှိတ်တုတ်မှိတ်တုတ် မှိတ်တုတ်မှိတ်တုတ် အဝါရောင် မီးရောင်ဖြင့် လမ်းဆုံကို ဖြတ်မောင်းသည့်ကိစ္စတွင် ယာဉ်မောင်းက ဘာလုပ်ရမည်နည်း။",
    "options": [
      {
        "th": "ขับรถต่อไปตามปกติ เพื่อมิให้เกิดความล่าช้าแก่รถคันที่ตามมา",
        "en": "Continue driving as normal. In order to avoid delays to the cars following.",
        "my": "ပုံမှန်အတိုင်း ဆက်လက်မောင်းနှင်ပါ။ နှောင့်နှေးမှုများကို ရှောင်ရှားနိုင်ရန် အောက်ပါကားများ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็วลง และตรวจเช็กให้ปลอดภัยจึงขับผ่าน",
        "en": "slow down and checked to make sure it was safe and then drove through",
        "my": "အရှိန်လျှော့ပြီး ဘေးကင်းကြောင်း သေချာစစ်ဆေးပြီးမှ ဖြတ်ကျော်မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "หยุดรถหลังเส้นหยุดรถ เมื่อเห็นว่าปลอดภัยจึงขับผ่านไปด้วยความระมัดระวัง",
        "en": "Stop the car behind the stop line. When he saw that it was safe, he drove past carefully.",
        "my": "မှတ်တိုင်မျဉ်းနောက်တွင် ကားကိုရပ်ပါ။ ဘေးကင်းကြောင်းမြင်သောအခါ ဂရုတစိုက် မောင်းသွားခဲ့သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟฉุกเฉินและขับผ่านไปให้เร็วที่สุด",
        "en": "Turn on your emergency lights and drive past as quickly as you can.",
        "my": "အရေးပေါ်မီးများဖွင့်ပြီး တတ်နိုင်သမျှ မြန်မြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 580,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อผู้ขับขี่ ขับผ่านบริเวณก่อสร้างถนน ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "When the driver Driving through a road construction area What should the driver do?",
    "q_my": "ယာဉ်မောင်းက လမ်းဖောက်လုပ်ထားတဲ့နေရာကို ဖြတ်မောင်းတဲ့အခါ ယာဉ်မောင်းက ဘာလုပ်သင့်သလဲ။",
    "options": [
      {
        "th": "ชะลอความเร็ว",
        "en": "slow down",
        "my": "နှေးကွေး",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เร่งความเร็วรถ",
        "en": "Accelerate the car.",
        "my": "ကားကို အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบกระจกข้าง กระจกหลัง และ จุดบอดให้ดีก่อนเปลี่ยนช่องจราจร",
        "en": "Check your side mirrors, rear mirror, and blind spots carefully before changing lanes.",
        "my": "လမ်းကြောင်းမပြောင်းမီ သင့်ဘေးကြည့်မှန်များ၊ နောက်ကြည့်မှန်နှင့် မျက်မမြင်အစက်အပြောက်များကို သေချာစစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ให้สัญญาณไฟเพื่อเตือน",
        "en": "Give a light signal to warn",
        "my": "သတိပေးရန် မီးအချက်ပြပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 581,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ข้อใดต่อไปนี้ปฏิบัติได้ถูกต้องสำหรับการขับขี่ในเวลากลางคืน",
    "q_en": "Which of the following is correct for driving at night?",
    "q_my": "ညဘက်ကားမောင်းရာတွင် အောက်ပါတို့ထဲမှ မည်သည့်အရာသည် မှန်ကန်သနည်း။",
    "options": [
      {
        "th": "ขับให้ช้ากว่าปกติหรือไม่เร็วกว่าสายตาที่มองเห็น",
        "en": "Drive slower than normal or faster than you can see.",
        "my": "ပုံမှန်ထက် နှေးနှေး သို့မဟုတ် သင်မြင်နိုင်သည်ထက် ပိုမြန်အောင် မောင်းနှင်ပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เปิดไฟฉุกเฉินตลอดเวลาขณะขับขี่",
        "en": "Turn on emergency lights at all times while driving.",
        "my": "ကားမောင်းနေစဉ် အရေးပေါ်မီးများကို အချိန်တိုင်းဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับให้เร็วได้ตามปกติ",
        "en": "Drive as fast as you normally would.",
        "my": "ပုံမှန်အတိုင်း မြန်မြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟสูงตลอดเวลาขณะขับขี่",
        "en": "Keep your high beams on at all times while driving.",
        "my": "ကားမောင်းနေစဉ်တွင် သင်၏ high beam ကို အမြဲဖွင့်ထားပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 582,
    "category": "accident_prediction",
    "image": null,
    "q_th": "กรณีผู้ขับขี่ ขับผ่านแยกที่มีสัญญาณไฟกะพริบสีแดง ผู้ขับขี่ต้องปฏิบัติอย่างไร",
    "q_en": "In the case of the driver Driving through an intersection with a flashing red light. What must the driver do?",
    "q_my": "ယာဉ်မောင်းသည် မှိတ်တုတ်မှိတ်တုတ် မီးနီဖြင့် လမ်းဆုံလမ်းခွကို ဖြတ်မောင်းနေပါသည်။ ယာဉ်မောင်းက ဘာလုပ်ရမလဲ။",
    "options": [
      {
        "th": "หยุดรถหลังเส้นหยุดรถ เมื่อเห็นว่าปลอดภัยจึงขับผ่านไปด้วยความระมัดระวัง",
        "en": "Stop the car behind the stop line. When he saw that it was safe, he drove past carefully.",
        "my": "မှတ်တိုင်မျဉ်းနောက်တွင် ကားကိုရပ်ပါ။ ဘေးကင်းကြောင်းမြင်သောအခါ ဂရုတစိုက် မောင်းသွားခဲ့သည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ชะลอความเร็วลง และขับผ่านไปด้วยความระมัดระวัง",
        "en": "slow down and drive past with caution",
        "my": "အရှိန်လျှော့ပြီး သတိနဲ့မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขับรถต่อไปตามปกติ เพื่อมิให้เกิดความล่าช้าแก่รถคันที่ตามมา",
        "en": "Continue driving as normal. In order to avoid delays to the cars following.",
        "my": "ပုံမှန်အတိုင်း ဆက်လက်မောင်းနှင်ပါ။ နှောင့်နှေးမှုများကို ရှောင်ရှားနိုင်ရန် အောက်ပါကားများ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดสัญญาณไฟฉุกเฉินและขับผ่านไปให้เร็วที่สุด",
        "en": "Turn on your emergency lights and drive past as quickly as you can.",
        "my": "အရေးပေါ်မီးများဖွင့်ပြီး တတ်နိုင်သမျှ မြန်မြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 583,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ในกรณีที่ผู้ขับขี่จอดรอสัญญาณไฟเป็นคันแรก ในขณะที่สัญญาณไฟสีแดงกำลังเปลี่ยนเป็นสีเขียว ผู้ขับขี่ควรปฏิบัติตัวอย่างไรจึงจะปลอดภัย",
    "q_en": "In the case where the driver is the first to stop and wait for the light. As the red light turns green How should drivers behave to be safe?",
    "q_my": "ယာဉ်မောင်းသည် ဦးစွာရပ်ပြီး အလင်းရောင်ကို စောင့်ဆိုင်းရသည့် အခြေအနေမျိုးတွင် ဖြစ်သည်။ မီးနီသည် အစိမ်းရောင်ပြောင်းလာသည်နှင့်အမျှ ယာဉ်မောင်းများ အန္တရာယ်ကင်းစေရန် မည်သို့ပြုမူသင့်သနည်း။",
    "options": [
      {
        "th": "เปิดไฟฉุกเฉิน",
        "en": "Turn on emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เว้นระยะเวลา 1 วินาทีหลังจากสัญญาณไฟเปลี่ยนเป็นสีเขียวแล้วเคลื่อนตัวรถ",
        "en": "Wait 1 second after the light turns green and move the vehicle.",
        "my": "မီးစိမ်းသွားပြီးနောက် 1 စက္ကန့်စောင့်ပြီး ကားကိုရွှေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งรถยนต์ไปไวที่สุด",
        "en": "Accelerate the car as fast as possible.",
        "my": "ကားကို တတ်နိုင်သမျှ အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เว้นระยะเวลา 3 วินาทีหลังจากสัญญาณไฟเปลี่ยนเป็นสีเขียวแล้วเคลื่อนตัวรถ",
        "en": "Wait 3 seconds after the light turns green and move the vehicle.",
        "my": "မီးစိမ်းသွားပြီးနောက် 3 စက္ကန့်စောင့်ပြီး ယာဉ်ကိုရွှေ့ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 584,
    "category": "accident_prediction",
    "image": null,
    "q_th": "สิ่งใดคือสิ่งที่ควรปฏิบัติอย่างแรกก่อนการกลับรถ",
    "q_en": "What is the first thing you should do before making a U-turn?",
    "q_my": "ဂငယ်ကွေ့မ၀င်ခင် ပထမဆုံးလုပ်သင့်တာက ဘာလဲ။",
    "options": [
      {
        "th": "หยุดรถ มองไกลและสังเกตกระแสจราจร ที่กำลังวิ่งสวนมา",
        "en": "Stop the car, look into the distance and observe the flow of traffic. that is running in the opposite direction",
        "my": "ကားကိုရပ်ပြီး အဝေးကိုကြည့်ကာ ယာဉ်ကြောစီးဆင်းမှုကို သတိပြုပါ။ ၎င်းသည် ဆန့်ကျင်ဘက်သို့ လည်ပတ်နေသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟเลี้ยวเพื่อส่งสัญญาณให้รถคันหลัง รู้ว่ากำลังว่าจะเข้าเลนขวาเพื่อกลับรถ",
        "en": "Turn on your turn signal to signal the vehicle behind you. Know that you are about to enter the right lane to make a U-turn.",
        "my": "သင့်နောက်ကယာဉ်ကို အချက်ပြရန် သင့်အလှည့်အချက်ပြမှုကို ဖွင့်ပါ။ ဂငယ်ကွေ့ကွေ့ရန် ညာဘက်လမ်းကြားထဲသို့ ဝင်တော့မည်ကို သိထားပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "กลับรถแล้วรีบตั้งลำ และปรับความเร็วให้เหมาะสม",
        "en": "Make a U-turn and quickly set up your boat. and adjust the speed appropriately",
        "my": "ဂငယ်ကွေ့ပြီး သင့်လှေကို အမြန်တပ်ဆင်ပါ။ အရှိန်ကို သင့်လျော်သလို ချိန်ညှိပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เร่งความเร็วเพื่อแซงเข้าเลนขวา",
        "en": "Accelerate to overtake into the right lane.",
        "my": "ညာဘက်လမ်းကြားသို့ ကျော်တက်ရန် အရှိန်မြှင့်ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 585,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เมื่อขับขี่บนถนนที่มีการจราจรติดขัด ผู้ขับขี่ควรระวังสิ่งใดมากที่สุด",
    "q_en": "When driving on roads with congested traffic What should drivers be most careful of?",
    "q_my": "ယာဉ်ကြောကျပ်တည်းသော လမ်းများပေါ်တွင် ယာဉ်မောင်းသူများ သတိထားရမည့်အရာများ။",
    "options": [
      {
        "th": "รถจักรยานยนต์",
        "en": "motorcycle",
        "my": "ဆိုင်ကယ်",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "สัตว์วิ่งตัดหน้ารถ",
        "en": "Animal running in front of car",
        "my": "ကားရှေ့တွင် ပြေးနေသော တိရစ္ဆာန်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนเดินบนทางเท้า",
        "en": "people walking on sidewalk",
        "my": "လမ်းဘေးမှာ လမ်းလျှောက်တဲ့လူတွေ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "คนข้ามถนน",
        "en": "People crossing the road",
        "my": "လမ်းဖြတ်ကူးတဲ့လူတွေ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 586,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ข้อใดไม่ถูกต้องเกี่ยวกับการเลี้ยวขวา",
    "q_en": "Which is incorrect regarding turning right?",
    "q_my": "ညာဘက်ကွေ့ခြင်းနှင့်ပတ်သက်၍ မည်သည့်အရာက မှားယွင်းနေသနည်း။",
    "options": [
      {
        "th": "ตีวงเลี้ยวกว้างกว่าการเลี้ยวซ้าย",
        "en": "Make a turning circle wider than turning left.",
        "my": "ဘယ်ဘက်ကွေ့သည်ထက် ပိုကျယ်သော အလှည့်အဝိုင်းတစ်ခုကို ပြုလုပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตีวงเลี้ยวแคบกว่าการเลี้ยวซ้าย",
        "en": "The turning circle is narrower than turning left.",
        "my": "စက်ဝိုင်းသည် ဘယ်ကွေ့သည်ထက် ကျဉ်းသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เว้นระยะห่างอย่างน้อย 3 วินาทีระหว่างรถของเรากับรถที่วิ่งตรงมาทางขวาและซ้าย",
        "en": "Leave at least 3 seconds of space between your car and cars coming straight to the right and left.",
        "my": "သင့်ကားနှင့် ကားများ ညာဘက်နှင့် ဘယ်ဘက်သို့ တည့်တည့်လာမည့် အနည်းဆုံး 3 စက္ကန့်ကို ချန်ထားပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "หักพวงมาลัยมากกว่าการเลี้ยวซ้าย",
        "en": "Turn the steering wheel more than turning left.",
        "my": "ဘယ်ဘက်လှည့်တာထက် စတီယာရင်ကို ပိုကွေ့ပါ။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 587,
    "category": "accident_prediction",
    "image": null,
    "q_th": "เพราะเหตุใดผู้ขับขี่ควรรักษาระยะห่างระหว่างรถคันอื่นๆ",
    "q_en": "Why should drivers keep their distance from other vehicles?",
    "q_my": "ယာဉ်မောင်းများသည် အခြားယာဉ်များနှင့် အကွာအဝေးကို အဘယ်ကြောင့် စောင့်သင့်သနည်း။",
    "options": [
      {
        "th": "ช่วยให้รถในเลนอื่นสามารถแซงเข้ามาได้",
        "en": "Allows cars in other lanes to overtake.",
        "my": "အခြားလမ်းကြားရှိ ကားများကို ကျော်တက်ခွင့်ပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยประหยัดน้ำมัน",
        "en": "Helps save fuel",
        "my": "လောင်စာဆီ သက်သာစေပါတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เผื่อระยะสำหรับการแซง",
        "en": "Allow distance for overtaking.",
        "my": "ကျော်တက်ရန် အကွာအဝေးကို ခွင့်ပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มีเวลาในการมองเห็น สังเกต ตัดสินใจและตอบสนอง",
        "en": "There is time to see, observe, decide and respond.",
        "my": "ကြည့်ရှုရန်၊ စောင့်ကြည့်ရန်၊ ဆုံးဖြတ်ရန်နှင့် တုံ့ပြန်ရန် အချိန်ရှိသည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 588,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ข้อใดไม่ใช่ปัจจัยที่ควรตัดสินใจก่อนแซง",
    "q_en": "Which is not a factor that should be decided before overtaking?",
    "q_my": "မကျော်တက်ခင်မှာ ဘယ်ဟာက ဆုံးဖြတ်သင့်သလဲ ?",
    "options": [
      {
        "th": "บริเวณที่จะแซง",
        "en": "Area to overtake",
        "my": "ကျော်တက်ရမည့် ဧရိယာ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ขนาดของรถที่จะแซง",
        "en": "Size of the car to be overtaken",
        "my": "ကျော်တက်ရမည့်ကားအရွယ်အစား",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ระยะหยุดรถ",
        "en": "Stopping distance",
        "my": "ရပ်ထားသောအကွာအဝေး",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ทัศนวิสัยการมองด้านหน้า",
        "en": "Forward visibility",
        "my": "ရှေ့သို့ မြင်နိုင်စွမ်း",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 589,
    "category": "accident_prediction",
    "image": null,
    "q_th": "มองไกลไปข้างหน้าขณะขับขี่อย่างไรจึงมีประสิทธิภาพมากที่สุด",
    "q_en": "What is the most effective way to look ahead while driving?",
    "q_my": "ကားမောင်းနေရင်း ရှေ့ကိုကြည့်ဖို့ အထိရောက်ဆုံးနည်းလမ်းက ဘာလဲ။",
    "options": [
      {
        "th": "ใช้สายตาให้เคลื่อนไหวสามารถใช้มือถือได้บางช่วงเมื่อรถติด",
        "en": "Use your eyes to move so you can use your mobile phone during certain periods when traffic is stuck.",
        "my": "ယာဉ်ကြောပိတ်နေသည့်အချိန်များတွင် သင့်မိုဘိုင်းဖုန်းကို အသုံးပြုနိုင်ရန် သင့်မျက်လုံးများကို ရွေ့လျားရန် အသုံးပြုပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สายตาห้ามเคลื่อนไหวและตั้งใจมองป้ายจราจร",
        "en": "Eyes must not move and focus on traffic signs.",
        "my": "မျက်လုံးများ မလှုပ်ဘဲ ယာဉ်ကြော ပိတ်ဆို့မှုကို အာရုံမစိုက်ရပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สายตาห้ามเคลื่อนไหวและจดจ่ออยู่ที่จุดใดจุดหนึ่ง",
        "en": "The eyes must not move and be focused on one point.",
        "my": "မျက်လုံးသည် မလှုပ်ရှားရ၊ အချက်တစ်ခုတည်းကိုသာ အာရုံစိုက်နေရမည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้สายตาให้เคลื่อนไหวและไม่จดจ่ออยู่ที่จุดใดจุดหนึ่ง",
        "en": "Use your eyes to move and not focus on one point.",
        "my": "သင့်မျက်လုံးများကို ရွေ့လျားရန် အသုံးပြုပြီး အချက်တစ်ချက်ကို အာရုံစိုက်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 590,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การเว้นระยะห่างทางด้านข้างระหว่างรถมีไว้เพื่ออะไร",
    "q_en": "What is the purpose of the side clearance between cars?",
    "q_my": "ကားများကြားတွင် ဘေးကင်းရေး ရည်ရွယ်ချက်က ဘာလဲ။",
    "options": [
      {
        "th": "ช่วยให้ผู้ขับขี่มีพื้นที่ในการแซง",
        "en": "Allows the driver to have space for overtaking.",
        "my": "ကျော်တက်ရန်အတွက် ယာဉ်မောင်းအား နေရာလွတ်ရှိစေပါသည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ผิดทุกข้อ",
        "en": "Everything is wrong.",
        "my": "အရာအားလုံးက မှားနေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ช่วยให้ผู้ขับขี่มีพื้นที่ในการหลบหลีก อันตรายโดยไม่ทำให้เกิดอุบัติเหตุได้",
        "en": "Gives the driver space to maneuver. Dangerous without causing an accident",
        "my": "လေ့ကျင့်ရန် ယာဉ်မောင်းအား နေရာပေးသည်။ မတော်တဆမှုမဖြစ်စေဘဲ အန္တရာယ်ရှိသည်။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "ช่วยให้ผู้ขับขี่มีพื้นที่ในการเลี้ยว",
        "en": "This gives the driver space to turn.",
        "my": "ဒါက ကွေ့ဖို့ ယာဉ်မောင်းကို နေရာပေးတယ်။",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 591,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ข้อใดไม่ใช่ขั้นตอนในการสังเกตและวิเคราะห์ต่อสถานการณ์ที่อาจจะเกิดขึ้นขณะขับขี่",
    "q_en": "Which is not a step in observing and analyzing situations that may occur while driving?",
    "q_my": "ကားမောင်းနေစဉ် ဖြစ်ပေါ်လာနိုင်သည့် အခြေအနေများကို လေ့လာကြည့်ရှုပြီး ခွဲခြမ်းစိတ်ဖြာခြင်းအတွက် မည်သည့်အရာက ခြေလှမ်းမဟုတ်ပါ။",
    "options": [
      {
        "th": "การมองไกลข้างหน้า",
        "en": "looking ahead",
        "my": "ရှေ့ကိုကြည့်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบกระจกข้างและหลัง ทุกๆ 8-12 วินาที",
        "en": "Check side and rear mirrors every 8-12 seconds.",
        "my": "8-12 စက္ကန့်တိုင်း ဘေးနှင့် နောက်ကြည့်မှန်များကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบจุดอับ จุดบอดของรถก่อนที่จะเลี้ยวหรือเปลี่ยนเลน",
        "en": "Check dead spots The car's blind spot before turning or changing lanes.",
        "my": "မကွေ့မီ သို့မဟုတ် လမ်းကြောမပြောင်းမီ ကား၏ မျက်စိကွယ်သောနေရာကို စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ตรวจสอบน้ำมันเครื่องก่อนเดินทาง",
        "en": "Check engine oil before traveling.",
        "my": "ခရီးမထွက်ခင် အင်ဂျင်ဆီစစ်ပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 592,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ขณะขับรถ ผู้ขับขี่ได้ยินเสียงไซเรนของรถฉุกเฉินมาจากไกลๆ ผู้ขับขี่ควรปฏิบัติอย่างไรเป็นอย่างแรก",
    "q_en": "While driving, the driver heard the sirens of an emergency vehicle coming from a distance. What should the driver do first?",
    "q_my": "ကားမောင်းနေစဉ် အဝေးမှ ထွက်လာသော အရေးပေါ်ယာဉ်၏ ဥသြသံကို ယာဉ်မောင်းက ကြားလိုက်ရသည်။ ယာဉ်မောင်းက ဘာအရင်လုပ်သင့်လဲ။",
    "options": [
      {
        "th": "หักรถเข้าไหล่ทาง",
        "en": "The car swerved into the shoulder of the road.",
        "my": "ကားက လမ်းပခုံးကို ကွေ့သွားတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดกระจกรถลงแล้วหักขวาทันที",
        "en": "Lower the car window and turn right immediately.",
        "my": "ကားပြတင်းပေါက်ကို နှိမ့်ပြီး ညာဘက်ကို ချက်ချင်းကွေ့ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ลดเสียงลำโพงในรถ แล้วสังเกตโดยรอบ ว่ารถฉุกเฉินมาจากทิศทางไหน",
        "en": "Reduce the sound of the speakers in the car. Then observe the surroundings. Which direction is the emergency vehicle coming from?",
        "my": "ကားရှိ စပီကာများ၏ အသံကို လျှော့ချပါ။ ပြီးမှ ပတ်ဝန်းကျင်ကို ကြည့်ပါ။ အရေးပေါ်ယာဉ်က ဘယ်လမ်းကြောင်းက လာတာလဲ။",
        "image": null,
        "isCorrect": true
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
    "id": 593,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การขับขี่ผ่านทางรถไฟที่ไม่มีแผงกั้น ผู้ขับขี่ควรปฏิบัติอย่างไร",
    "q_en": "Driving through a railroad without barriers What should the driver do?",
    "q_my": "အတားအဆီးမရှိ မီးရထားလမ်းကို ဖြတ်မောင်းမောင်းသူ ဘာလုပ်သင့်သလဲ။",
    "options": [
      {
        "th": "เปิดสัญญาณไฟฉุกเฉินและขับผ่านไปให้เร็วที่สุด",
        "en": "Turn on your emergency lights and drive past as quickly as you can.",
        "my": "အရေးပေါ်မီးများဖွင့်ပြီး တတ်နိုင်သမျှ မြန်မြန်မောင်းပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ชะลอความเร็วรถและตรวจเช็กให้ปลอดภัยจึงขับผ่าน",
        "en": "Slow down the car and check to make sure it is safe to drive past.",
        "my": "ကားကို အရှိန်လျှော့ပြီး ဖြတ်ကျော်မောင်းနှင်ရန် အန္တရာယ်ကင်းကြောင်း သေချာအောင် စစ်ဆေးပါ။",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "เพิ่มความเร็วเพื่อให้ผ่านไปได้เร็ว",
        "en": "Increase speed to pass quickly",
        "my": "မြန်မြန်ကျော်ဖြတ်နိုင်ရန် အရှိန်မြှင့်ပါ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "บีบแตรเตือนเพื่อความปลอดภัย",
        "en": "Sound horn for safety",
        "my": "ဘေးကင်းစေရန် ဟွန်းတီးအချက်ပေးပါ",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 594,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ผู้ขับขี่มองข้ามไหล่ขวาก่อนการเปลี่ยนช่องจราจรเพราะอะไร",
    "q_en": "Why do drivers look over their right shoulder before changing lanes?",
    "q_my": "ယာဉ်မောင်းများသည် လမ်းများမပြောင်းမီ ၎င်းတို့၏ ညာဘက်ပခုံးကို အဘယ်ကြောင့် ကြည့်ရှုကြသနည်း။",
    "options": [
      {
        "th": "สามารถเปลี่ยนช่องจราจรได้ทันที ไม่ต้องให้สัญญาณไฟเลี้ยว",
        "en": "You can change traffic lanes immediately. No need to give a turn signal.",
        "my": "ယာဉ်လမ်းကြောင်းများကို ချက်ချင်းပြောင်းနိုင်သည်။ အကွေ့အချက်ပြရန်မလိုအပ်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สามารถตรวจเช็กรถที่มาจากทางด้านซ้าย",
        "en": "Can check vehicles coming from the left.",
        "my": "ဘယ်ဘက်မှလာသော ယာဉ်များကို စစ်ဆေးနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สามารถเปลี่ยนช่องจราจรได้อย่างมีประสิทธิภาพ",
        "en": "Can change traffic lanes efficiently",
        "my": "ယာဉ်ကြောလမ်းကြောင်းများကို ထိရောက်စွာ ပြောင်းလဲနိုင်သည်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "สามารถตรวจเช็กจุดบอดจากทางด้านขวาของรถ",
        "en": "You can check your blind spot from the right side of the car.",
        "my": "ကား၏ညာဘက်ခြမ်းမှ မျက်စိကွယ်သောနေရာကို သင်စစ်ဆေးနိုင်သည်။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 595,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ผู้ขับขี่ควรรักษาระยะห่างระหว่างรถที่จอดริมถนนเป็นระยะเท่าไร",
    "q_en": "How far should drivers keep between cars parked on the roadside?",
    "q_my": "ယာဉ်မောင်းများသည် လမ်းဘေးတွင် ရပ်ထားသည့် ကားများကြားတွင် မည်မျှအကွာအဝေး ထားရှိသင့်သနည်း။",
    "options": [
      {
        "th": "น้อยกว่า 1 เมตร",
        "en": "less than 1 meter",
        "my": "1 မီတာအောက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มากกว่า 1 เมตร",
        "en": "more than 1 meter",
        "my": "1 မီတာထက် ပို",
        "image": null,
        "isCorrect": true
      },
      {
        "th": "มากกว่า 0.5 เมตร",
        "en": "More than 0.5 meters",
        "my": "0.5 မီတာကျော်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้อยกว่า 0.5 เมตร",
        "en": "less than 0.5 meter",
        "my": "0.5 မီတာအောက်",
        "image": null,
        "isCorrect": false
      }
    ]
  },
  {
    "id": 596,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ในกรณีที่ผู้ขับขี่กำลังขับรถในที่มีการจราจรหนาแน่นบนถนน 3 เลน และไม่สามารถหลีกเลี่ยงการขับบนเลนกลาง ที่ขนาบข้างโดยรถคันอื่น ผู้ขับขี่ควรปฏิบัติอย่างไรเพื่อความปลอดภัย",
    "q_en": "In cases where the driver is driving in heavy traffic on a 3-lane road and cannot avoid driving in the middle lane. Flanked by other cars What should drivers do to stay safe?",
    "q_my": "ယာဉ်မောင်းသည် ၃ လမ်းသွားလမ်းပေါ်တွင် ယာဉ်ကြောများကြပ်စွာ မောင်းနှင်နေပြီး အလယ်လမ်းကြားတွင် မောင်းနှင်ခြင်းကို ရှောင်လွှဲ၍မရသော အခြေအနေမျိုးတွင်၊ အခြားကားများဖြင့် ဘေးချင်းကပ်လျက် ယာဉ်မောင်းများ ဘေးကင်းစေရန် ဘာလုပ်သင့်သနည်း။",
    "options": [
      {
        "th": "แทรกรถไปในเลนขวาสุด",
        "en": "Insert the car into the far right lane.",
        "my": "ကားကို ညာဘက်အစွန်ဆုံးလမ်းကြားထဲ ထည့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "เปิดไฟฉุกเฉิน",
        "en": "Turn on emergency lights",
        "my": "အရေးပေါ်မီးများဖွင့်ပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความเร็วสูง",
        "en": "Use high speed",
        "my": "မြန်နှုန်းမြင့်သုံးပါ။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ใช้ความเร็วต่ำ",
        "en": "Use low speed",
        "my": "အနိမ့်အမြန်နှုန်းကိုသုံးပါ။",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 597,
    "category": "accident_prediction",
    "image": null,
    "q_th": "ผู้ขับขี่ควรรักษาระยะห่างระหว่างรถด้านข้างเป็นระยะเท่าไร",
    "q_en": "How much distance should the driver keep between vehicles on the side?",
    "q_my": "ယာဉ်မောင်းသည် ဘေးဘက်ယာဉ်များကြား အကွာအဝေးမည်မျှ ထားရှိသင့်သနည်း။",
    "options": [
      {
        "th": "น้อยกว่า 1 เมตร",
        "en": "less than 1 meter",
        "my": "1 မီတာအောက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "น้อยกว่า 0.5 เมตร",
        "en": "less than 0.5 meter",
        "my": "0.5 မီတာအောက်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มากกว่า 0.5 เมตร",
        "en": "More than 0.5 meters",
        "my": "0.5 မီတာကျော်",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "มากกว่า 1 เมตร",
        "en": "more than 1 meter",
        "my": "1 မီတာထက် ပို",
        "image": null,
        "isCorrect": true
      }
    ]
  },
  {
    "id": 598,
    "category": "accident_prediction",
    "image": null,
    "q_th": "การเลี้ยวขวาที่สี่แยกไม่มีสัญญาณจราจรผู้ขับขี่ควรสังเกตรถจากทางไหน",
    "q_en": "Turning right at an intersection with no traffic signals, which way should drivers look for cars?",
    "q_my": "မီးပွိုင့်မရှိသော လမ်းဆုံတစ်ခုတွင် ညာဘက်သို့ကွေ့၍ ယာဉ်မောင်းများသည် မည်သည့်လမ်းဖြင့် ကားများကို ရှာဖွေသင့်သနည်း။",
    "options": [
      {
        "th": "รถวิ่งทางด้านซ้าย",
        "en": "The car runs on the left side.",
        "my": "ကားက ဘယ်ဘက်ခြမ်းမှာ ပြေးနေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถวิ่งสวนทางตรงข้าม",
        "en": "Cars traveling in the opposite direction",
        "my": "ဆန့်ကျင်ဘက်သို့ ဦးတည်နေသော ကားများ",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "รถวิ่งทางด้านขวา",
        "en": "The car runs on the right side.",
        "my": "ကားက ညာဘက်ခြမ်းမှာ ပြေးနေတယ်။",
        "image": null,
        "isCorrect": false
      },
      {
        "th": "ถูกทุกข้อ",
        "en": "All correct.",
        "my": "အားလုံးမှန်ပါတယ်။",
        "image": null,
        "isCorrect": true
      }
    ]
  }
];
