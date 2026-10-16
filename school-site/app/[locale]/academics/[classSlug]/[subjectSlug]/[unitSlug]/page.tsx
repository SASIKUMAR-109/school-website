export default async function UnitPage({ params }: { params: Promise<{ unitSlug: string }> }) {
  const { unitSlug } = await params;
  return <h1>Unit : {unitSlug}</h1>;
}