'use client';

import React from 'react';

const passages = [
  {
    title: '1. Morning Visit',
    excerpt: 'កាលពីព្រឹកនេះ ខ្ញុំបានទៅមន្ទីរពេទ្យ។ ខ្ញុំមានអារម្មណ៍មិនសូវល្អ ហើយមានការឈឺក្បាល។ នៅទីនោះ ខ្ញុំបានជួបវេជ្ជបណ្ឌិតម្នាក់។ គាត់បានសួរខ្ញុំថា ខ្ញុំមានរោគសញ្ញាអ្វីខ្លះ។ ខ្ញុំបានប្រាប់គាត់ថា ខ្ញុំឈឺក្បាល និងក្អក។ គាត់បានផ្ដល់ថ្នាំ និងណែនាំឱ្យខ្ញុំសម្រាកឲ្យគ្រប់គ្រាន់។',
    vocab: ['មន្ទីរពេទ្យ – hospital', 'វេជ្ជបណ្ឌិត – doctor', 'រោគសញ្ញា – symptom', 'ថ្នាំ – medicine', 'សម្រាក – rest'],
  },
  {
    title: '2. Fever Symptoms',
    excerpt: 'ខ្ញុំមានក្តៅខ្លួន និងឈឺចុងជើង។ វេជ្ជបណ្ឌិតបានវាស់សីតុណ្ហភាព ហើយប្រាប់ខ្ញុំថា ខ្ញុំមានក្តៅខ្លួនខ្ពស់។',
    vocab: ['ក្តៅខ្លួន – fever', 'វាស់សីតុណ្ហភាព – measure temperature', 'ឈឺចុងជើង – foot pain'],
  },
  {
    title: '3. Taking Medicine',
    excerpt: 'ខ្ញុំបានទទួលថ្នាំបីប្រអប់ ហើយវេជ្ជបណ្ឌិតបានបញ្ជាក់អោយខ្ញុំញ៉ាំមុនបាយរាល់ពេល។ ខ្ញុំត្រូវតែញ៉ាំអោយទៀងទាត់។',
    vocab: ['ថ្នាំ – medicine', 'ញ៉ាំ – to take (medicine)', 'ទៀងទាត់ – regularly'],
  },
  {
    title: '4. Waiting Room',
    excerpt: 'ខ្ញុំបានអង្គុយនៅបន្ទប់រងចាំប្រហែល៣០នាទី មុននឹងវេជ្ជបណ្ឌិតហៅឈ្មោះខ្ញុំ។',
    vocab: ['បន្ទប់រងចាំ – waiting room', 'វេជ្ជបណ្ឌិត – doctor', 'ហៅឈ្មោះ – call name'],
  },
  {
    title: '5. Clinic Receptionist',
    excerpt: 'នៅទីនោះមានបុគ្គលិកម្នាក់នៅផ្នែកទទួលភ្ញៀវ។ គាត់សួរខ្ញុំអំពីឈ្មោះ និងកាលបរិច្ឆេទកំណើត។',
    vocab: ['បុគ្គលិក – staff', 'ផ្នែកទទួលភ្ញៀវ – reception', 'កាលបរិច្ឆេទកំណើត – date of birth'],
  },
  {
    title: '6. Describing Pain',
    excerpt: 'ខ្ញុំប្រាប់វេជ្ជបណ្ឌិតថា ខ្ញុំមានការឈឺពោះ និងការឈឺត្រគាក។ គាត់បានសួរថា ការឈឺនេះមានច្រើនថ្ងៃហើយឬនៅ។',
    vocab: ['ឈឺពោះ – stomachache', 'ឈឺត្រគាក – back pain', 'ច្រើនថ្ងៃ – many days'],
  },
  {
    title: '7. Blood Test',
    excerpt: 'វេជ្ជបណ្ឌិតណែនាំឲ្យខ្ញុំធ្វើតេស្តឈាម។ បុគ្គលិកបានយកឈាមពីដៃខ្ញុំ ដើម្បីពិនិត្យជំងឺ។',
    vocab: ['តេស្តឈាម – blood test', 'យកឈាម – draw blood', 'ពិនិត្យ – examine'],
  },
  {
    title: '8. Follow-Up Visit',
    excerpt: 'សប្ដាហ៍ក្រោយ ខ្ញុំនឹងត្រូវតែត្រលប់ទៅមើលវេជ្ជបណ្ឌិតម្ដងទៀត ដើម្បីពិនិត្យលទ្ធផលនៃការព្យាបាល។',
    vocab: ['ត្រលប់ទៅ – return', 'ពិនិត្យលទ្ធផល – check results', 'ការព្យាបាល – treatment'],
  },
  {
    title: '9. Pharmacy Pickup',
    excerpt: 'បន្ទាប់ពីព្យាបាលរួច ខ្ញុំទៅយកថ្នាំនៅឱសថស្ថាន។ បុគ្គលិកបានអធិប្បាយពីរបៀបញ៉ាំថ្នាំ។',
    vocab: ['ឱសថស្ថាន – pharmacy', 'យកថ្នាំ – pick up medicine', 'អធិប្បាយ – explain'],
  },
];

const ReadingVisitingClinic = () => {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-xs bg-yellow-600 text-white px-3 py-1 rounded-full font-bold">
            Reading
          </div>
          <h2 className="text-xs text-gray-600">Intermediate Level</h2>
        </div>

        <h1 className="text-2xl font-bold text-indigo-700 mb-4">🏥 Visiting the Clinic</h1>

        <p className="text-gray-700 mb-6 text-md">
          These passages introduce common phrases and vocabulary used when visiting a clinic in Cambodia. They are designed for intermediate learners to build confidence in reading and understanding medical-related interactions.
        </p>

        {passages.map((section, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
            <h2 className="text-md font-semibold text-purple-700 mb-2">{section.title}</h2>
            <p className="text-lg text-gray-900 leading-relaxed mb-4">{section.excerpt}</p>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-800 mb-2 text-sm">Key Vocabulary:</h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                {section.vocab.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ReadingVisitingClinic;
