import { getCollection } from 'astro:content';

export async function GET() {
  const entries = await getCollection('resources');

  // Map frontmatter to a shape compatible with the Resource UI (subset)
  const items = entries.map((e) => ({
    id: e.id,
    title: e.data.title,
    description: e.data.description ?? '',
    courseId: e.data.courseId,
    category: e.data.category,
    fileUrl: e.data.file, // already public path (e.g., /resources/xyz.pdf)
    fileName: e.data.file?.split('/').pop() ?? '',
    uploadedBy: e.data.uploadedBy ?? 'Unknown',
    uploadDate: e.data.uploadDate ?? new Date().toISOString(),
    tags: e.data.tags ?? [],
    semester: e.data.semester,
    year: e.data.year,
    professor: e.data.professor,
    // Defaults for demo fields not stored in content
    downloads: 0,
    rating: 0,
    reviews: 0,
    fileSize: 0,
    fileType: '',
    isVerified: false,
  }));

  return new Response(JSON.stringify(items), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });
}
