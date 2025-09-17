export interface Resource {
  id: string;
  title: string;
  description?: string;
  courseId: string;
  category: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  uploadedBy: string;
  uploadDate: Date;
  lastModified: Date;
  downloads: number;
  rating: number;
  reviews: number;
  tags: string[];
  isVerified: boolean;
  semester?: string;
  year?: number;
  professor?: string;
}

export interface ResourceFilter {
  category?: string;
  courseId?: string;
  searchTerm?: string;
  tags?: string[];
  minRating?: number;
  semester?: string;
  year?: number;
  sortBy?: 'recent' | 'popular' | 'rating' | 'downloads';
  isVerified?: boolean;
}

export interface Review {
  id: string;
  resourceId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
  helpful: number;
  notHelpful: number;
}

export interface DownloadAnalytics {
  resourceId: string;
  timestamp: Date;
  userId?: string;
  userAgent?: string;
  ipHash?: string;
}

class ResourceManager {
  private resources: Resource[] = [];
  private reviews: Review[] = [];
  private analytics: DownloadAnalytics[] = [];

  constructor() {
    this.initializeDemoData();
  }

  private initializeDemoData() {
    // Demo resources for testing
    this.resources = [
      {
        id: '1',
        title: 'Data Structures Complete Notes',
        description:
          'Comprehensive notes covering all topics in CS201 including arrays, linked lists, trees, and graphs with detailed examples and complexity analysis.',
        courseId: 'cs201',
        category: 'notes',
        fileUrl: '/resources/ds-notes.pdf',
        fileName: 'ds-notes.pdf',
        fileSize: 2457600,
        fileType: 'application/pdf',
        uploadedBy: 'Dr. Ahmed Khan',
        uploadDate: new Date('2024-01-15'),
        lastModified: new Date('2024-01-15'),
        downloads: 342,
        rating: 4.8,
        reviews: 28,
        tags: [
          'data-structures',
          'algorithms',
          'trees',
          'graphs',
          'linked-lists',
        ],
        isVerified: true,
        semester: 'Spring',
        year: 2024,
        professor: 'Dr. Ahmed Khan',
      },
      {
        id: '2',
        title: 'CS301 Algorithms Past Paper - Final 2023',
        description:
          'Final exam paper from Fall 2023 with complete solutions and marking scheme.',
        courseId: 'cs301',
        category: 'past-papers',
        fileUrl: '/resources/algo-final-2023.pdf',
        fileName: 'algo-final-2023.pdf',
        fileSize: 1024000,
        fileType: 'application/pdf',
        uploadedBy: 'Student Council',
        uploadDate: new Date('2024-01-20'),
        lastModified: new Date('2024-01-20'),
        downloads: 567,
        rating: 4.9,
        reviews: 45,
        tags: ['algorithms', 'final-exam', 'solutions', '2023'],
        isVerified: true,
        semester: 'Fall',
        year: 2023,
        professor: 'Dr. Sarah Johnson',
      },
      {
        id: '3',
        title: 'Database Systems Tutorial - SQL Basics',
        description:
          'Step-by-step tutorial on SQL fundamentals with practical examples using PostgreSQL.',
        courseId: 'cs302',
        category: 'tutorials',
        fileUrl: '/resources/sql-tutorial.pdf',
        fileName: 'sql-tutorial.pdf',
        fileSize: 1536000,
        fileType: 'application/pdf',
        uploadedBy: 'Ali Hassan',
        uploadDate: new Date('2024-02-01'),
        lastModified: new Date('2024-02-01'),
        downloads: 234,
        rating: 4.6,
        reviews: 19,
        tags: ['sql', 'database', 'postgresql', 'tutorial'],
        isVerified: false,
        semester: 'Spring',
        year: 2024,
      },
      {
        id: '4',
        title: 'Operating Systems Assignment 3 Solution',
        description:
          'Complete solution for Assignment 3 covering process synchronization and deadlocks.',
        courseId: 'cs401',
        category: 'assignments',
        fileUrl: '/resources/os-assignment3.pdf',
        fileName: 'os-assignment3.pdf',
        fileSize: 819200,
        fileType: 'application/pdf',
        uploadedBy: 'Muhammad Ali',
        uploadDate: new Date('2024-02-10'),
        lastModified: new Date('2024-02-10'),
        downloads: 189,
        rating: 4.4,
        reviews: 12,
        tags: [
          'operating-systems',
          'synchronization',
          'deadlocks',
          'assignment',
        ],
        isVerified: false,
        semester: 'Spring',
        year: 2024,
      },
      {
        id: '5',
        title: 'Machine Learning Project - Image Classification',
        description:
          'Complete project implementation using TensorFlow for multi-class image classification with CNN.',
        courseId: 'cs404',
        category: 'projects',
        fileUrl: '/resources/ml-project.zip',
        fileName: 'ml-project.zip',
        fileSize: 5242880,
        fileType: 'application/zip',
        uploadedBy: 'Fatima Ahmed',
        uploadDate: new Date('2024-02-15'),
        lastModified: new Date('2024-02-15'),
        downloads: 412,
        rating: 4.7,
        reviews: 31,
        tags: [
          'machine-learning',
          'tensorflow',
          'cnn',
          'image-classification',
          'project',
        ],
        isVerified: true,
        semester: 'Spring',
        year: 2024,
        professor: 'Dr. Michael Chen',
      },
      {
        id: '6',
        title: 'Introduction to Programming - Complete Guide',
        description:
          'Beginner-friendly guide covering Python basics, control structures, functions, and OOP concepts.',
        courseId: 'cs101',
        category: 'books',
        fileUrl: '/resources/python-guide.pdf',
        fileName: 'python-guide.pdf',
        fileSize: 3145728,
        fileType: 'application/pdf',
        uploadedBy: 'Library',
        uploadDate: new Date('2024-01-05'),
        lastModified: new Date('2024-01-05'),
        downloads: 892,
        rating: 4.9,
        reviews: 67,
        tags: ['python', 'programming', 'basics', 'oop', 'beginner'],
        isVerified: true,
        year: 2024,
      },
      {
        id: '7',
        title: 'Computer Networks Lab Manual',
        description:
          'Complete lab manual with 12 experiments covering TCP/IP, routing protocols, and network security.',
        courseId: 'cs402',
        category: 'notes',
        fileUrl: '/resources/networks-lab.pdf',
        fileName: 'networks-lab.pdf',
        fileSize: 2097152,
        fileType: 'application/pdf',
        uploadedBy: 'Dr. Robert Wilson',
        uploadDate: new Date('2024-01-25'),
        lastModified: new Date('2024-01-25'),
        downloads: 321,
        rating: 4.5,
        reviews: 23,
        tags: ['networking', 'tcp-ip', 'routing', 'lab-manual', 'practical'],
        isVerified: true,
        semester: 'Spring',
        year: 2024,
        professor: 'Dr. Robert Wilson',
      },
      {
        id: '8',
        title: 'Software Engineering Case Studies',
        description:
          'Real-world case studies covering agile methodologies, design patterns, and project management.',
        courseId: 'cs403',
        category: 'tutorials',
        fileUrl: '/resources/se-cases.pdf',
        fileName: 'se-cases.pdf',
        fileSize: 1572864,
        fileType: 'application/pdf',
        uploadedBy: 'Sara Khan',
        uploadDate: new Date('2024-02-05'),
        lastModified: new Date('2024-02-05'),
        downloads: 278,
        rating: 4.3,
        reviews: 15,
        tags: [
          'software-engineering',
          'agile',
          'design-patterns',
          'case-study',
        ],
        isVerified: false,
        semester: 'Spring',
        year: 2024,
      },
      {
        id: '9',
        title: 'CS201 Midterm Past Papers Collection',
        description:
          'Collection of 5 midterm papers from 2020-2024 with solutions.',
        courseId: 'cs201',
        category: 'past-papers',
        fileUrl: '/resources/ds-midterms.zip',
        fileName: 'ds-midterms.zip',
        fileSize: 4194304,
        fileType: 'application/zip',
        uploadedBy: 'Academic Committee',
        uploadDate: new Date('2024-02-12'),
        lastModified: new Date('2024-02-12'),
        downloads: 723,
        rating: 4.8,
        reviews: 52,
        tags: ['data-structures', 'midterm', 'past-papers', 'solutions'],
        isVerified: true,
        semester: 'Spring',
        year: 2024,
      },
      {
        id: '10',
        title: 'Algorithm Analysis Cheat Sheet',
        description:
          'Quick reference for Big-O notation, complexity analysis, and common algorithm patterns.',
        courseId: 'cs301',
        category: 'notes',
        fileUrl: '/resources/algo-cheatsheet.pdf',
        fileName: 'algo-cheatsheet.pdf',
        fileSize: 524288,
        fileType: 'application/pdf',
        uploadedBy: 'Hassan Ahmed',
        uploadDate: new Date('2024-02-08'),
        lastModified: new Date('2024-02-08'),
        downloads: 456,
        rating: 4.6,
        reviews: 34,
        tags: [
          'algorithms',
          'big-o',
          'complexity',
          'cheat-sheet',
          'quick-reference',
        ],
        isVerified: false,
        semester: 'Spring',
        year: 2024,
      },
    ];

    // Demo reviews
    this.reviews = [
      {
        id: 'r1',
        resourceId: '1',
        userId: 'u1',
        userName: 'Ahmed Ali',
        rating: 5,
        comment: 'Excellent notes! Very comprehensive and well-organized.',
        date: new Date('2024-01-20'),
        helpful: 15,
        notHelpful: 1,
      },
      {
        id: 'r2',
        resourceId: '1',
        userId: 'u2',
        userName: 'Sara Khan',
        rating: 4,
        comment: 'Great content but could use more examples for graphs.',
        date: new Date('2024-01-22'),
        helpful: 8,
        notHelpful: 2,
      },
    ];
  }

  async getResources(filter?: ResourceFilter): Promise<Resource[]> {
    // Simulate API delay
    await new Promise((resolve) => globalThis.setTimeout(resolve, 500));

    let filtered = [...this.resources];

    if (filter) {
      filtered = this.filterResources(filtered, filter);
    }

    return filtered;
  }

  filterResources(resources: Resource[], filter: ResourceFilter): Resource[] {
    let filtered = [...resources];

    if (filter.category) {
      filtered = filtered.filter((r) => r.category === filter.category);
    }

    if (filter.courseId) {
      filtered = filtered.filter((r) => r.courseId === filter.courseId);
    }

    if (filter.searchTerm) {
      const term = filter.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(term) ||
          r.description?.toLowerCase().includes(term) ||
          r.tags.some((tag) => tag.toLowerCase().includes(term)) ||
          r.courseId.toLowerCase().includes(term)
      );
    }

    if (filter.tags && filter.tags.length > 0) {
      filtered = filtered.filter((r) =>
        filter.tags!.some((tag) => r.tags.includes(tag))
      );
    }

    if (filter.minRating) {
      filtered = filtered.filter((r) => r.rating >= filter.minRating!);
    }

    if (filter.semester) {
      filtered = filtered.filter((r) => r.semester === filter.semester);
    }

    if (filter.year) {
      filtered = filtered.filter((r) => r.year === filter.year);
    }

    if (filter.isVerified !== undefined) {
      filtered = filtered.filter((r) => r.isVerified === filter.isVerified);
    }

    // Sorting
    if (filter.sortBy) {
      switch (filter.sortBy) {
        case 'recent':
          filtered.sort(
            (a, b) => b.uploadDate.getTime() - a.uploadDate.getTime()
          );
          break;
        case 'popular':
          filtered.sort((a, b) => b.downloads - a.downloads);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'downloads':
          filtered.sort((a, b) => b.downloads - a.downloads);
          break;
      }
    }

    return filtered;
  }

  async getResourceById(id: string): Promise<Resource | null> {
    await new Promise((resolve) => globalThis.setTimeout(resolve, 200));
    return this.resources.find((r) => r.id === id) || null;
  }

  async uploadResource(
    resource: Omit<
      Resource,
      'id' | 'downloads' | 'rating' | 'reviews' | 'uploadDate' | 'lastModified'
    >
  ): Promise<Resource> {
    const newResource: Resource = {
      ...resource,
      id: Date.now().toString(),
      downloads: 0,
      rating: 0,
      reviews: 0,
      uploadDate: new Date(),
      lastModified: new Date(),
    };

    this.resources.push(newResource);
    return newResource;
  }

  async updateResource(
    id: string,
    updates: Partial<Resource>
  ): Promise<Resource | null> {
    const index = this.resources.findIndex((r) => r.id === id);
    if (index === -1) return null;

    this.resources[index] = {
      ...this.resources[index],
      ...updates,
      lastModified: new Date(),
    };

    return this.resources[index];
  }

  async deleteResource(id: string): Promise<boolean> {
    const index = this.resources.findIndex((r) => r.id === id);
    if (index === -1) return false;

    this.resources.splice(index, 1);
    return true;
  }

  async addReview(
    review: Omit<Review, 'id' | 'date' | 'helpful' | 'notHelpful'>
  ): Promise<Review> {
    const newReview: Review = {
      ...review,
      id: Date.now().toString(),
      date: new Date(),
      helpful: 0,
      notHelpful: 0,
    };

    this.reviews.push(newReview);

    // Update resource rating
    const resource = this.resources.find((r) => r.id === review.resourceId);
    if (resource) {
      const resourceReviews = this.reviews.filter(
        (r) => r.resourceId === review.resourceId
      );
      const totalRating = resourceReviews.reduce((sum, r) => sum + r.rating, 0);
      resource.rating = totalRating / resourceReviews.length;
      resource.reviews = resourceReviews.length;
    }

    return newReview;
  }

  async getReviews(resourceId: string): Promise<Review[]> {
    await new Promise((resolve) => globalThis.setTimeout(resolve, 200));
    return this.reviews.filter((r) => r.resourceId === resourceId);
  }

  async markReviewHelpful(reviewId: string, helpful: boolean): Promise<void> {
    const review = this.reviews.find((r) => r.id === reviewId);
    if (review) {
      if (helpful) {
        review.helpful++;
      } else {
        review.notHelpful++;
      }
    }
  }

  async trackDownload(resourceId: string, userId?: string): Promise<void> {
    const analytics: DownloadAnalytics = {
      resourceId,
      timestamp: new Date(),
      userId,
      userAgent: navigator.userAgent,
      ipHash: 'demo-hash',
    };

    this.analytics.push(analytics);

    // Update download count
    const resource = this.resources.find((r) => r.id === resourceId);
    if (resource) {
      resource.downloads++;
    }
  }

  async getDownloadAnalytics(
    resourceId?: string
  ): Promise<DownloadAnalytics[]> {
    if (resourceId) {
      return this.analytics.filter((a) => a.resourceId === resourceId);
    }
    return this.analytics;
  }

  async getPopularResources(limit: number = 5): Promise<Resource[]> {
    return [...this.resources]
      .sort((a, b) => b.downloads - a.downloads)
      .slice(0, limit);
  }

  async getRecentResources(limit: number = 5): Promise<Resource[]> {
    return [...this.resources]
      .sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime())
      .slice(0, limit);
  }

  async getTopRatedResources(limit: number = 5): Promise<Resource[]> {
    return [...this.resources]
      .filter((r) => r.reviews > 0)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }

  async searchResources(query: string): Promise<Resource[]> {
    const normalizedQuery = query.toLowerCase();
    return this.resources.filter(
      (r) =>
        r.title.toLowerCase().includes(normalizedQuery) ||
        r.description?.toLowerCase().includes(normalizedQuery) ||
        r.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery)) ||
        r.courseId.toLowerCase().includes(normalizedQuery) ||
        r.uploadedBy.toLowerCase().includes(normalizedQuery)
    );
  }

  async getResourcesByUser(userName: string): Promise<Resource[]> {
    return this.resources.filter((r) => r.uploadedBy === userName);
  }

  async getResourceStatistics(): Promise<{
    totalResources: number;
    totalDownloads: number;
    averageRating: number;
    categoryCounts: Record<string, number>;
    courseCounts: Record<string, number>;
  }> {
    const stats = {
      totalResources: this.resources.length,
      totalDownloads: this.resources.reduce((sum, r) => sum + r.downloads, 0),
      averageRating: 0,
      categoryCounts: {} as Record<string, number>,
      courseCounts: {} as Record<string, number>,
    };

    // Calculate average rating
    const ratedResources = this.resources.filter((r) => r.reviews > 0);
    if (ratedResources.length > 0) {
      stats.averageRating =
        ratedResources.reduce((sum, r) => sum + r.rating, 0) /
        ratedResources.length;
    }

    // Count by category
    this.resources.forEach((r) => {
      stats.categoryCounts[r.category] =
        (stats.categoryCounts[r.category] || 0) + 1;
      stats.courseCounts[r.courseId] =
        (stats.courseCounts[r.courseId] || 0) + 1;
    });

    return stats;
  }

  downloadResource(resourceId: string): void {
    // Track download
    this.trackDownload(resourceId);

    // In production, this would trigger actual file download
    const resource = this.resources.find((r) => r.id === resourceId);
    if (resource) {
      globalThis.console.log(`Downloading: ${resource.fileName}`);
      // Simulate download
      globalThis.alert(
        `Download started: ${resource.title}\n\n(Demo mode - no actual file download)`
      );
    }
  }

  formatFileSize(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(1)} ${units[unitIndex]}`;
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      notes: '📝',
      'past-papers': '📋',
      tutorials: '🎓',
      assignments: '📚',
      projects: '💻',
      books: '📖',
    };
    return icons[category] || '📄';
  }
}

export const resourceManager = new ResourceManager();
