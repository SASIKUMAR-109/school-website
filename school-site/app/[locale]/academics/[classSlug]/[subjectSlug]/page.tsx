export default async function SubjectPage({ params }: { params: Promise<{ subjectSlug: string }> }) {
  const { subjectSlug} = await params;
  return <h1>Subject: {subjectSlug}</h1>;
}
