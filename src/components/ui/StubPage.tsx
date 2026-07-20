import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";

type StubPageProps = {
  title: string;
  description: string;
  crumbs: Crumb[];
};

export function StubPage({ title, description, crumbs }: StubPageProps) {
  return (
    <>
      <Breadcrumb items={crumbs} />
      <section className="bg-crimson-stripe py-10 md:py-12">
        <div className="container-site">
          <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">{description}</p>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container-site max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-crimson">
            Coming in the next phase
          </p>
          <h2 className="font-display mt-4 text-3xl font-bold text-charcoal">
            This page is on the roadmap
          </h2>
          <p className="mt-4 text-muted">
            Phase 1A ships Homepage, Products Hub, and Contact. Full content for
            this section arrives next — meanwhile, explore our products or talk to
            the team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/products">Explore Products</Button>
            <Button href="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
