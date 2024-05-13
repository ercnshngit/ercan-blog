"use client";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function CVPage() {
  return (
    <Document file="/ercansahincv.pdf" className={""}>
      <Page pageNumber={1} />
      <Page pageNumber={2} />
    </Document>
  );
}
