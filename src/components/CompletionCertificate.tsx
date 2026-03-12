'use client'

import { useRef } from 'react'

/**
 * #182: Course Completion Certificates
 * Generates printable certificates when a course/subject is completed
 */

interface CertificateProps {
  studentName: string
  courseName: string
  completionDate: string
  score?: number
  certificateId?: string
}

export function CompletionCertificate({ studentName, courseName, completionDate, score, certificateId }: CertificateProps) {
  const certRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    if (certRef.current) {
      const w = window.open('', '_blank')
      if (w) {
        w.document.write(`
          <html><head><title>Certificate - ${courseName}</title>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f5f5f5; font-family: Georgia, serif; }
            .cert { width: 800px; padding: 60px; background: white; border: 3px solid #4f46e5; position: relative; text-align: center; }
            .cert::before { content: ''; position: absolute; inset: 8px; border: 1px solid #a5b4fc; pointer-events: none; }
            h1 { font-size: 36px; color: #4f46e5; margin: 0 0 8px; }
            h2 { font-size: 20px; color: #6b7280; font-weight: normal; margin: 0 0 30px; }
            .name { font-size: 32px; color: #111827; border-bottom: 2px solid #4f46e5; display: inline-block; padding: 0 20px 5px; margin: 20px 0; }
            .course { font-size: 24px; color: #4f46e5; margin: 15px 0; }
            .details { font-size: 14px; color: #6b7280; margin: 30px 0 10px; }
            .id { font-size: 11px; color: #9ca3af; }
            @media print { body { background: white; } .cert { border: 3px solid #4f46e5; } }
          </style></head><body>
          <div class="cert">
            <h1>Certificate of Completion</h1>
            <h2>Study Mondo</h2>
            <p style="color:#6b7280;">This certifies that</p>
            <div class="name">${studentName}</div>
            <p style="color:#6b7280;">has successfully completed</p>
            <div class="course">${courseName}</div>
            ${score ? `<p style="color:#6b7280;">with a score of <strong>${score}%</strong></p>` : ''}
            <div class="details">Date: ${new Date(completionDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            ${certificateId ? `<div class="id">Certificate ID: ${certificateId}</div>` : ''}
          </div>
          <script>window.print();</script>
          </body></html>
        `)
        w.document.close()
      }
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div ref={certRef} className="p-8 text-center border-4 border-indigo-200 dark:border-indigo-800 m-4 rounded-lg relative">
        <div className="absolute inset-2 border border-indigo-100 dark:border-indigo-900 rounded pointer-events-none" />
        <h2 className="text-2xl font-serif font-bold text-indigo-600 dark:text-indigo-400">Certificate of Completion</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Study Mondo</p>
        <div className="my-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">This certifies that</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white border-b-2 border-indigo-500 inline-block px-4 py-1 mt-2">
            {studentName}
          </p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">has successfully completed</p>
        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mt-2">{courseName}</p>
        {score && <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Score: {score}%</p>}
        <p className="text-xs text-gray-400 mt-4">{new Date(completionDate).toLocaleDateString()}</p>
        {certificateId && <p className="text-[10px] text-gray-300 dark:text-gray-600 mt-1">ID: {certificateId}</p>}
      </div>
      <div className="px-4 pb-4 flex gap-2">
        <button onClick={handlePrint} className="flex-1 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors text-sm">
          🖨️ Print Certificate
        </button>
      </div>
    </div>
  )
}
