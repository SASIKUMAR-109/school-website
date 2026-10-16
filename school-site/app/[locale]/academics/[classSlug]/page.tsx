export default async function ClassPage({ params }: { params: Promise<{ classSlug: string }> }) {
  const { classSlug } = await params;
  return <h1>Class: {classSlug}</h1>;
}