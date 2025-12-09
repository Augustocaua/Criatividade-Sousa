import { ShieldCheck, Lock, AlertTriangle, Clock, Bug, Database, Fingerprint, CheckCircle } from "lucide-react";

const metrics = [
  { icon: ShieldCheck, label: "Ameaças bloqueadas", value: "2.347", period: "últimos 30 dias" },
  { icon: Lock, label: "MFA habilitado", value: "92%", period: "usuarios ativos" },
  { icon: AlertTriangle, label: "Incidentes críticos", value: "0", period: "este mês" },
  { icon: Clock, label: "Tempo médio de resposta", value: "14 min", period: "deteção → contenção" },
  { icon: Bug, label: "Correção de vulnerabilidades", value: "< 72h", period: "SLA" },
  { icon: Database, label: "Backups bem-sucedidos", value: "99,8%", period: "últimos 90 dias" },
  { icon: Fingerprint, label: "Dispositivos criptografados", value: "96%", period: "inventário" },
  { icon: CheckCircle, label: "Treinamento concluído", value: "88%", period: "time interno" },
];

const SecurityMetricsSection = () => {
  return (
    <section id="seguranca" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 data-sr="up" data-sr-duration="0.8" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-4">Segurança da Informação e Cibersegurança</h2>
          <p data-sr="fade" data-sr-stagger="words" data-sr-duration="0.8" data-sr-step="0.06" className="text-base sm:text-lg text-foreground max-w-3xl mx-auto">
            Acompanhe indicadores essenciais de proteção, conformidade e resposta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m, index) => {
            const Icon = m.icon;
            return (
              <div key={m.label} data-sr="up" data-sr-duration="0.7" data-sr-delay={index * 0.06} className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-black">{m.period}</p>
                    <h3 className="text-lg font-semibold text-foreground">{m.label}</h3>
                  </div>
                </div>
                <div className="text-4xl font-bold text-accent">
                  {m.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityMetricsSection;