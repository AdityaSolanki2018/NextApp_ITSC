
"use client";
import React from "react";
import Button from "./Button";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import DownloadIcon from "@mui/icons-material/Download";

const PdfDownload = () => {
  const downloadPDF = () => {
    const pdfUrl = "/images/catalogue.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "bdbvplCatalogue.pdf";
    link.click();
  };

  return (
    <div className="flex justify-center items-center py-4" id="Broshure">
      <div className="w-full max-w-3xl bg-gray-800 backdrop-blur-md shadow-md rounded-md p-4 flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-500">
        {/* Icon Section */}
        <div className="bg-solarYellow border-solarYellow border-2 rounded-full p-3 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-solarYellow/50">
          <TextSnippetIcon fontSize="large" className="text-white" />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left text-white text-base md:text-lg font-medium">
          Download Our Company Catalogue
        </div>

        {/* Download Button */}
        <div className="flex items-center gap-2 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-solarYellow/50">
          <button
            onClick={downloadPDF}
            className="px-4 py-2 text-sm md:text-base font-medium bg-solarYellow text-black rounded-md transition-transform duration-300 ease-in-out hover:bg-green hover:text-white hover:scale-105"
          >
            Download PDF
            <DownloadIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfDownload;
