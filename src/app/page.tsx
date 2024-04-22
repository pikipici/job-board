import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import H1 from "@/components/ui/h1";
import { JobFilterValues } from "@/lib/validation";

interface PageProps {
  searchParams: {
    q?: string;
    location?: string;
    type?: string;
    remote?: string;
  };
}

export default async function Home({
  searchParams: { q, location, type, remote },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    location,
    type,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-x-5 text-center">
        <H1>Developer Jobs</H1>

        <p className="text-muted-foreground">Find your dream job.</p>
      </div>

      <section className="flex flex-col md:flex-row gap-4">
        <JobFilterSidebar />
        <JobResults filterValues={filterValues} />
      </section>
    </main>
  );
}
