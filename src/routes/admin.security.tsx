import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, KpiCard, SparkBars } from "@/components/admin-shell";
import { Chip } from "@/components/public-shell";
import { ShieldCheck, ShieldAlert, LockKeyhole, Fingerprint, Ban, AlertTriangle, KeySquare } from "lucide-react";

export const Route = createFileRoute("/admin/security")({
  head: () => ({ meta: [{ title: "Security — GLC Admin" }] }),
  component: SecPage,
});

function SecPage() {
  return (
    <AdminShell
      breadcrumb={[{ label: "Admin", to: "/admin/dashboard" }, { label: "Security" }]}
      title="Security dashboard"
      subtitle="Posture, controls, incidents and compliance."
    >
      <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard label="MFA enrollment" value="96.5%" icon={Fingerprint} tone="success" delta="Target 100%" />
        <KpiCard label="Failed logins 24h" value="63" icon={ShieldAlert} tone="warning" sub="12 accounts locked" />
        <KpiCard label="Locked accounts" value="4" icon={Ban} tone="warning" />
        <KpiCard label="Suspicious 24h" value="1" icon={AlertTriangle} tone="error" sub="Impossible travel" />
      </div>

      <div className="mb-4 grid gap-4 lg:grid-cols-3">
        <section className="gov-card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div><div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Events</div><h2 className="font-display text-lg font-bold">Security event volume · 60 min</h2></div>
            <Chip tone="success">Baseline normal</Chip>
          </div>
          <SparkBars data={[3,4,3,5,6,4,7,5,8,6,9,7,10,8,11,9,12,10,13,11]} />
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {[
              { i: "IDS", t: "2 anomaly signatures matched", tone: "warning" },
              { i: "WAF", t: "128 blocked requests · known bots", tone: "info" },
              { i: "SIEM", t: "0 correlations above severity 7", tone: "success" },
              { i: "DLP", t: "0 exfiltration attempts", tone: "success" },
            ].map((e, i) => (
              <div key={i} className="flex items-center gap-2 rounded-md border border-border p-2 text-sm">
                <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-bold">{e.i}</span>
                <span className="flex-1">{e.t}</span>
                <Chip tone={e.tone as any}>{e.tone}</Chip>
              </div>
            ))}
          </div>
        </section>
        <section className="gov-card p-5">
          <h2 className="font-display text-lg font-bold">Compliance</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {[["FIPS 140-2 crypto","OK","success"],["WCAG 2.1 AA","OK","success"],["SOC 2 Type II","OK","success"],["PCI DSS","In audit","warning"],["Georgia data privacy","OK","success"]].map(([a,b,c]: any) => (
              <li key={a} className="flex items-center justify-between border-b border-border pb-1.5 last:border-0"><span>{a}</span><Chip tone={c}>{b}</Chip></li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { i: LockKeyhole, t: "Encryption", items: [["At rest","AES-256"],["In transit","TLS 1.3"],["Key rotation","90 days"],["HSM","AWS CloudHSM"]] },
          { i: KeySquare, t: "Certificates", items: [["*.glc.gov","Valid · exp 214d"],["api.glc.gov","Valid · exp 92d"],["MerchantOne mTLS","Valid · exp 14d"]] },
          { i: ShieldCheck, t: "Vulnerabilities", items: [["Critical","0"],["High","2"],["Medium","14"],["Last scan","2h ago"]] },
          { i: AlertTriangle, t: "Risk register", items: [["Legacy VPN","Medium"],["Third-party OCR","Low"],["Vendor cert renewal","Low"]] },
        ].map(c => (
          <section key={c.t} className="gov-card p-4">
            <div className="flex items-center gap-2"><c.i className="h-4 w-4 text-primary" /><h3 className="font-display text-base font-bold">{c.t}</h3></div>
            <ul className="mt-3 space-y-1.5 text-sm">
              {c.items.map(([k, v]) => (
                <li key={k} className="flex items-center justify-between border-b border-border pb-1 last:border-0"><span className="text-muted-foreground">{k}</span><span className="font-semibold">{v}</span></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </AdminShell>
  );
}
