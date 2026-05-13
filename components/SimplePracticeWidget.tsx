"use client";

import Script from "next/script";
import { Button } from "./ui/button";

const SCOPE_ID = "7939137a-f5d3-4372-894a-f4463c0709a9";
const APP_ID =
  "7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b";

interface SimplePracticeWidgetProps {
  clinicianId: string;
  scopeUri: string;
  label?: string;
}

export default function SimplePracticeWidget({
  clinicianId,
  scopeUri,
  label = "Request Appointment",
}: SimplePracticeWidgetProps) {
  const href = `https://clientsecure.me/widget-redirect?scopeId=${SCOPE_ID}&applicationId=${APP_ID}&channel=professional_website&appearance=%7B%22fullScreen%22%3Atrue%7D&clinicianId=${clinicianId}`;

  return (
    <>
      <div className="spwidget-button-wrapper">
        <a
          href={href}
          data-spwidget-scope-id={SCOPE_ID}
          data-spwidget-scope-uri={scopeUri}
          data-spwidget-application-id={APP_ID}
          data-spwidget-type="OAR"
          data-spwidget-clinician-id={clinicianId}
          data-spwidget-autobind
        >
          <Button>
            {label}
          </Button>
        </a>
      </div>
      <Script
        src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"
        strategy="lazyOnload"
      />
      <style>{`
        .spwidget-button-wrapper { text-align: center; }
        .spwidget-button {
          display: inline-block;
          padding: 6px 12px;
          color: #1371C8;
          background: #fff;
          border: 1px solid #1371C8;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }
        .spwidget-button:hover { background: #fff; color: #0F5AA0; }
        .spwidget-button:active {
          color: rgba(255, 255, 255, .75) !important;
          box-shadow: 0 1px 3px rgba(0, 0, 0, .15) inset;
        }
      `}</style>
    </>
  );
}
