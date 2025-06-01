"use client";
import Image from 'next/image';
import { ArrowRight, TelegramLogo } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function About() {
  const { t, i18n } = useTranslation('common');
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    setCurrentLang(i18n.language as 'en' | 'ta');
  }, [i18n.language]);

  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden md:flex flex-col md:flex-row items-center justify-center p-8 md:p-12 gap-12 border border-gray-200 dark:border-gray-700">
          {/* Image Section */}
          <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64 mb-8 md:mb-0">
            <Image
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-blue-500 shadow-lg transform transition-transform duration-300 hover:scale-105"
              src="/Professional_edited.jpg"
              alt="Saravana's Professional Image"
              loading="lazy"
            />
            <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-bounce-slow">
              {currentLang === 'ta' ? 'நான்!' : 'Me!'}
            </span>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-8 text-center md:text-left max-w-2xl">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 animate-slide-in-top">
                {currentLang === 'ta' ? 'என்னைப் பற்றி சிறிது!!' : 'Little About Me!!'}
              </h2>
              <ul className="list-none space-y-5 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start md:items-center gap-3">
                  <span className="text-blue-500 text-xl flex-shrink-0">
                    <ArrowRight size={24} weight="bold" />
                  </span>
                  <span>
                    {currentLang === 'ta'
                      ? 'வேலம்மாள் பொறியியல்கல்லூரியில் பட்டம் பெற்ற பெருமைமிக்க பட்டதாரி, அங்குதான் நான் மின்னணுவியல் மற்றும் தகவல் தொடர்பு பொறியியலில் இளங்கலைப் பட்டம் பெற்றேன், தொழில்நுட்பத்தில் வலுவான அடித்தளத்தை அமைத்தேன்.'
                      : "A proud graduate of Parul Institute of Engineering and Technology, where I earned my Bachelor's degree in Electronics and Communication Engineering and laid a strong foundation in tech."}
                  </span>
                </li>
                <li className="flex items-start md:items-center gap-3">
                  <span className="text-blue-500 text-xl flex-shrink-0">
                    <ArrowRight size={24} weight="bold" />
                  </span>
                  <span>
                    {currentLang === 'ta'
                      ? 'இப்போது, ​​நான் நிஜ உலக தொழில்நுட்ப நிலப்பரப்பில் ஆழமாக மூழ்கி, ஒரு தீவிர டெவலப்பர், ஆர்வமுள்ள தன்னார்வலர் மற்றும் தன்னம்பிக்கை கொண்ட பொதுப் பேச்சாளராக தொடர்ந்து வளர்ந்து வரும் ஒரு பணிபுரியும் நிபுணராக இருக்கிறேன். தாக்கத்தை ஏற்படுத்த புதுமையான யோசனைகள் மற்றும் புதிய வாய்ப்புகளை ஆராய்வதில் நான் எப்போதும் ஆர்வமாக உள்ளேன்.'
                      : "Now, I'm a working professional diving deeper into the real-world tech landscape, continuing to grow as an avid developer, passionate volunteer, and confident public speaker. I'm always up for exploring innovative ideas and new opportunities to make an impact."}
                  </span>
                </li>
              </ul>
            </div>

            {/* Single Drive Link Button */}
            <div className="flex justify-center md:justify-start mt-6 animate-slide-in-bottom">
              <a
                href="https://drive.google.com/file/d/1hss_yIEv9gmfkY310pgGB_opDYNASSmw/view?usp=drivesdk" // Replace with your actual Drive link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
              >
                {currentLang === 'ta' ? 'சுயவிவரம் பார்க்க' : 'View Resume'}
                <TelegramLogo size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInTop {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInBottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-in-top { animation: slideInTop 0.8s ease-out forwards; }
        .animate-slide-in-bottom { animation: slideInBottom 0.8s ease-out forwards 0.2s; }
        .animate-bounce-slow { animation: bounceSlow 2s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
