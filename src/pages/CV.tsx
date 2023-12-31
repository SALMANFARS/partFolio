import "../i18next";
import { useTranslation } from "react-i18next";

const CV = () => {

   const { t, i18n } = useTranslation();

   const changeLanguage = (language: any) => {
     i18n.changeLanguage(language);
   };



  return (
    <div id="cv">
      <div className="block7  text-white text-center bg-[#1F1F1F] py-[20px]">
        <h1 className="text-4xl font-bold py-[10px]">
          {t("Cv.Intrested")}
          
        </h1>
        <p className="text-xs text-gray-500 py-[10px]">
          {t("Cv.know")}
         
        </p>

        <div className="btn py-[10px]">
          <a
            href="/src/assets/ResumeRu.pdf"
            download="/src/assets/ResumeRu.pdf"
          >
            <button className="py-[15px] px-[15px] bg-gradient-to-b from-blue-500 to-blue-800 text-white rounded-lg">
              {t("Main.cv")}
             
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CV;
