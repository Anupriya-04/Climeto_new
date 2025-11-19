import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, Tag, FileText, Layers, AlertTriangle } from "lucide-react";

// Example React component (single-file) styled with TailwindCSS + utility components
// Drop this file into a Next.js / Create React App project and ensure Tailwind + lucide-react + framer-motion are installed.

export default function Cpcbsimp() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-6 sm:px-12 lg:px-24">
      <header className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center shadow-lg text-white font-bold">S</div>
            <div>
              <h1 className="text-lg font-semibold">CPCB — SIMP Portal</h1>
              <p className="text-sm text-slate-500">Streamlined Plastic Waste Management Compliance</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow hover:shadow-md">
              <Calendar className="w-4 h-4 text-slate-600" />
              <span className="text-sm">Jan 4, 2025</span>
            </button>
            <button className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow hover:brightness-95">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Open Portal</span>
            </button>
          </div>
        </nav>

        <motion.section initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80" alt="SIMP portal" className="w-full rounded-xl mb-6 object-cover h-64 w-full" />

              <h2 className="text-3xl font-extrabold leading-tight mb-2">CPCB’s SIMP Portal: A Step Towards Streamlined Plastic Waste Management Compliance</h2>
              <p className="text-slate-600 mb-4">The SIMP portal (operational from <strong>January 4, 2025</strong>) brings a centralised interface to submit KYC and compliance data aligned with the PWM Rules (amendments dated <strong>October 30, 2024</strong>).</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Tag className="w-4 h-4 text-slate-600" />
                <span className="text-sm px-3 py-1 bg-slate-100 rounded-full text-slate-700">Compliance</span>
                <span className="text-sm px-3 py-1 bg-slate-100 rounded-full text-slate-700">CPCB</span>
                <span className="text-sm px-3 py-1 bg-slate-100 rounded-full text-slate-700">Plastic Waste</span>
              </div>

              <article className="prose prose-slate max-w-none">
                <h3>User-Friendly Interface with Structured Categorization</h3>
                <p>
                  The SIMP portal offers an intuitive UI and structured categories for sellers, importers, and manufacturers. The submission flow focuses on KYC-first, but categorizing sales and procurement by MSME criteria remains a pain point for many businesses.
                </p>

                <h3>Data Preparation (FY 2022-23)</h3>
                <p>
                  Applicants must prepare data from Financial Year <strong>2022-23</strong>. Gathering procurement and sales information and mapping to categories (small/micro, medium/large producers, brand owners) is time-consuming and often incomplete.
                </p>

                <h3>Gaps — No Recycled Content Field</h3>
                <p>
                  Currently the portal does not allow specifying the percentage of recycled plastic content used — an important metric under PWM Rules. This limits the regulator's ability to track recycled-content compliance.
                </p>

                <h3>Operational Delays and Current Functionality</h3>
                <p>
                  Although the portal was announced as operational in early January 2025, early users found submission failures and technical issues. These have largely been fixed and the portal is now functional.
                </p>

                <h3>Significance</h3>
                <p>
                  SIMP is a major step to improving transparency and regulatory compliance for plastic raw material stakeholders. Future updates should add recycled-content reporting and richer MSME mapping controls.
                </p>
              </article>
            </div>

            <aside className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-semibold flex items-center gap-2 text-slate-700">Quick Facts</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Operational: <strong>Jan 4, 2025</strong></li>
                  <li className="flex items-center gap-2"><User className="w-4 h-4" /> Primary users: PIBOs, Sellers, Importers</li>
                  <li className="flex items-center gap-2"><Layers className="w-4 h-4" /> Data from: FY 2022-23</li>
                  <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Missing: recycled-content field</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-semibold text-slate-700">Why preparing FY 2022-23 matters</h4>
                <p className="text-sm text-slate-600 mt-2">Regulators will verify reported sales and procurement. Having reconciled ledgers and category mapping ready reduces delays during submission.</p>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sky-600 text-white">Prepare Data (FY 2022-23)</button>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-xl">
                <h5 className="font-medium text-amber-800 flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Important</h5>
                <p className="text-sm text-amber-800 mt-1">Portal currently lacks a recycled content capture field — track this requirement internally until portal updates arrive.</p>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-emerald-50 p-4 rounded-xl">
                <h5 className="font-semibold">Contact & Resources</h5>
                <p className="text-sm text-slate-600 mt-2">Have documents ready: KYC, FY 2022-23 sales ledger, procurement invoice summary, MSME classification (if available).</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm">Download checklist</button>
                  <button className="px-3 py-2 rounded-lg bg-emerald-500 text-white text-sm">Help center</button>
                </div>
              </div>
            </aside>
          </div>
        </motion.section>

        <section className="max-w-6xl mx-auto mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Data Preparation Checklist (example)</h3>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="text-left text-slate-600">
                      <th className="pb-3">Item</th>
                      <th className="pb-3">Why</th>
                      <th className="pb-3">Example source</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t">
                      <td className="py-3">KYC details</td>
                      <td>KYC-first portal requirement</td>
                      <td>Company PAN, GST, Authorized signatory</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Sales by category</td>
                      <td>Map to MSME categories</td>
                      <td>Sales ledger (FY 2022-23)</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Procurement summary</td>
                      <td>Input materials & volumes</td>
                      <td>Purchase invoices</td>
                    </tr>
                    <tr className="border-t">
                      <td className="py-3">Recycled content (internal)</td>
                      <td>Track until portal supports it</td>
                      <td>Certificates, supplier confirmation</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-6 flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white">Start submission</button>
                  <button className="px-4 py-2 rounded-lg border">Save checklist</button>
                </div>
              </div>

              <div className="mt-6 bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-3">Developer / Integrator Tips</h3>
                <ul className="list-disc ml-5 text-sm text-slate-600 space-y-2">
                  <li>Provide a mapping sheet (invoice line → MSME category) before submission to speed up classification.</li>
                  <li>Keep an internal field for recycled-content percentage so you can update portal records as soon as the portal supports it.</li>
                  <li>Validate totals for FY 2022-23 using reconciled ledgers and GST returns.</li>
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-semibold">Portal Status</h4>
                <p className="text-sm text-slate-600 mt-2">Operational — minor early issues have been resolved. Recommended: keep screenshots & submission copies for audit trails.</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                <h4 className="font-semibold">Short term actions</h4>
                <ol className="text-sm text-slate-600 mt-2 list-decimal ml-5">
                  <li>Gather FY 2022-23 sales & procurement</li>
                  <li>Prepare MSME mapping (even rough categories)</li>
                  <li>Compute internal recycled-content %</li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-emerald-600 text-white p-4 rounded-xl">
                <h5 className="font-semibold">Want a PDF summary?</h5>
                <p className="text-sm mt-2">Export this page to PDF for sharing with compliance teams.</p>
                <button className="mt-3 w-full px-3 py-2 rounded-lg bg-white text-slate-800">Export as PDF</button>
              </div>
            </aside>
          </div>
        </section>

        <footer className="max-w-6xl mx-auto mt-12 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SIMP Portal Guide — Prepared for businesses & compliance teams</p>
        </footer>
      </header>
    </div>
  );
}
