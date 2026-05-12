import { ProgramHealth, Commitment, Decision, LogEntry, Initiative } from './types';

export const PROGRAMS: ProgramHealth[] = [
  {
    id: '1',
    name: 'Big Data Migration',
    code: 'SRE-OPS-2024',
    status: 'HEALTHY',
    progress: 68,
    milestone: 'Shard Re-indexing (Complete)',
    next: 'Multi-Region Failover Test',
  },
  {
    id: '2',
    name: 'Studio Tech Upgrade',
    code: 'PROD-INFRA-4.0',
    status: 'WARNING',
    progress: 42,
    milestone: 'Edge Latency Optimization (Delayed)',
    assignee: 'Content Engineering Lead',
  },
  {
    id: '3',
    name: 'Global Cache Expansion',
    code: 'NET-EXP-9',
    status: 'HEALTHY',
    progress: 95,
    milestone: 'PoP Deployment (Complete)',
    next: 'Traffic Steering Audit',
    traffic: '4.2 TB/s',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeGiWw4gFr8AN1tUUlOj0_qP30i8PJm42c6Bd2rBJfhM57Ic8CXfXYNm-yKYsc4ra2TcYqZzHutVCo8Ie-KSsyylCFwYNF9dHVdgNUD9e7JgYQJMO8yG5qisAZW59aQ63HEXtL0QHuOXSfZD51jAl4mzvuV6WHrDHtk5hnlVd2eRJsC50K5yvokkAmAJbpe1Sldi-DNSQhtCNix99RMfnCBhsMgusnytyD9Y7l8cL4vYcHL6nQA1oUzXnASt_LaU0sZjEzVFLViSA',
  },
  {
    id: '4',
    name: 'Security Hardening v2',
    code: 'SEC-VULN-88',
    status: 'AT RISK',
    progress: 30,
    milestone: 'Credential Rotation Initialized',
    next: 'APAC Cluster Audit',
    description: 'Immediate intervention required for credential rotation automation in APAC clusters.',
  },
];

export const COMMITMENTS: Commitment[] = [
  {
    id: 'c1',
    title: 'APAC Node Latency Spike',
    impact: '1.2M Concurrent Streamers',
    due: '2H 40M',
    status: 'critical',
  },
  {
    id: 'c2',
    title: 'Studio Metadata Sync Fail',
    impact: 'In-Production Assets',
    due: '1D 4H',
    status: 'elevated',
  },
  {
    id: 'c3',
    title: 'DR Site B Verification',
    impact: 'Compliance/Audit',
    due: 'OVERDUE',
    status: 'critical',
  },
];

export const DECISIONS: Decision[] = [
  {
    id: 'd1',
    title: 'Fragmented Metadata Caching',
    rationale: 'Deferred full O(1) global sync in favor of local shard consistency. Pragmatic context: Reducing inter-region latency spikes during Tier-1 launch window.',
    vertical: 'Content Eng',
    owner: 'S. Chen',
    ownerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEbXupQ705RQgLYxASZMpLAbo5oYHTGmMLsYB_jV_JS0IYM1xrO-n7sk5Ykhk3laNd4GMbqH7PJuDllQ9rnOQ3HYfpxcZilXRQKYSr58ML5qWoc9vqF5v8osi6i-tOmtxko8A9MmkGnrxJT8sakx0Uo-sFGM-cNe2SFFAa0TPOJr-0e0H7nYNZTOuyLiRpfypNDbcsyCkzPqwpQwXVGB7UrWg-rDE-0Y_2N6dA5zSxMzKX4hjW9oLwfXb-4Ln3UkY2-vHV0lWySr8',
    impact: 'Critical',
    status: 'Implemented',
  },
  {
    id: 'd2',
    title: 'Legacy API Mocking for Studio QA',
    rationale: 'Decided against refactoring the entire ingest pipeline. Used synthetic mocks for the v2.4 sprint to unblock UI developers immediately.',
    vertical: 'Studio Tech',
    owner: 'M. Volkov',
    ownerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMgilJePP3eDTkRjSzGin4XRrp1n8iCFIGWOo4sKPWGl5ms01buHezv6HG890qTnUZOZuUU3203KZRbwuZU1ZLyJzij_GVhDOLP2jZ_-jGqc2Sx7JTRr6-Q3vx0cHUC_EhO-f-W1kRKgojhPHF_no-RnBNLSRS02NNyiRp4LvMYUXEaxqqmJGWFnZs7tqHrC03hw3okNZSTxdcBDh4eEUmfaBVuf-q7s6s8mpaHb8SHQml4fQ6x70oFWuOJMKMk19rFl7RMdNn6gI',
    impact: 'Medium',
    status: 'Reversible',
    reversible: true,
  },
  {
    id: 'd3',
    title: 'ARM Architecture Pivot Delay',
    rationale: 'Retaining x86 clusters for core transcoding workers until Q4. Pragmatic context: Stability risk outweighed 15% cost savings during peak holiday traffic.',
    vertical: 'Cloud Ops',
    owner: 'E. Jensen',
    ownerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-5EQ3OIdEyv3na9_NZmIIw-5DQ58zbDJrHds6z5Si122u2vU8R4aDeJ7mlIFNDZcGfKVaSK5E39VPQ4oVjK-ahdvpdBSXXuW9YGMkopoOUxmU31YU_mTMymxB8wIfLplaaVBqAOw6v77DheSboIrhn7USRPSgd1sVYmV-k6Fx1gWmCCZnSILdd0mXWLN2m4s7jGJ3NeQyvSAwrTbpqkWigMW-dgfekKeMlfwFa8SOmCjEuzJChtjysRL1WorSiYyF_62tIfcHU7M',
    impact: 'High',
    status: 'Implemented',
  },
  {
    id: 'd4',
    title: 'Manual QC for High-Resolution Assets',
    rationale: 'Switched from automated ML check to 10% manual sampling. Pragmatic context: ML model false-positives were delaying 8K delivery workflows by 4 hours.',
    vertical: 'Studio Tech',
    owner: 'D. Miller',
    ownerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVUE2F8v2hM1eM-HXU4O65XX3DTbLILfJ1Q7KEHaJCshkFzAtpcHcnYHmhwjdI2NcyRF0UMAfBzpoLwxCrwolTsW35EqH1UhN8TGiS8V4hcqyQLtDx0fJJtz_mLndoBB9FQRPazb82Y_OWmCQQbSc_U7BoQYFR_H6-jy9tZioLSczNIdcqYdW70UCXp34Qs-cCRDLDG2BKg1FwvPc_LJTCo6Ur8i6XREOgx66UXS8-saVyFp5uXdAm110ueg6WbE1pj2QJEhybTxY',
    impact: 'Medium',
    status: 'Reversible',
    reversible: true,
  },
];

export const TRANSITION_LOGS: LogEntry[] = [
  { timestamp: '14:22:01.04', level: 'SUCCESS', message: "DRAIN_COMPLETE: Legacy API cluster 'node-beta-4' offline." },
  { timestamp: '14:21:44.29', level: 'WARN', message: "LATENCY_SPIKE: Region 'us-east-1' reported 250ms jump. Investigating." },
  { timestamp: '14:20:12.88', level: 'INFO', message: "SHARD_MIGRATION: Moving 'user_metadata_v2' to new engine. 82% complete." },
  { timestamp: '14:18:05.12', level: 'INFO', message: "AUTO_SCALE: Provisioning 400 new instances in 'eu-west-2'." },
  { timestamp: '14:15:33.91', level: 'CRIT', message: "HEARTBEAT_LOST: Proxy-layer 'shield-04' failed health check. Re-routing." },
];

export const INITIATIVES: Initiative[] = [
  {
    id: 'i1',
    code: 'PROJECT_RED_DRAGON',
    title: 'Global Media Ingest v3',
    description: 'Unified asset ingestion pipeline for local language originals.',
    status: 'COMMITTED',
    milestone: 'Q3 MILESTONE',
    assignees: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWrmSAir6zKApEd7iceeaGnz_pzoEdUVW0y5jdzMYK1uzMqKyT27i7vTZRXn2zPHkK80d4kA2ys2CenBW_aZ_e8eI17z8BiAoa9-8Vp40aWZgbAr3gmzA_JOc9HU6tePyBRQ096Pn7ZwF8SfSIcF4wyWuyvUDGeqAsMBE57MKCvONtlaGhGKh7dfpcqa5iBmm0YgRDfnPJTEXHodLvix-s8TV7RJFMpx0C8NSlwiddy7H49w5EgR50TC3P1vEy73HE21Hk6CTHQX4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfArMsBYyOgaBxtP71ShtWA8Ns5MPWMqld0fba9R3zVFvfJKiMrX_H8OZMtDMifP5eeY2PSY0h4XHYP0QLj1cGJIpNrQiR_uB7fpj80rWulIIwYPxAruLPks4tg2ITa3jk-FJw0_PcO7vUifyzUPPfVmhKlHAPAK0BynQ3Q8ShVrCap1F403P_gyE-Z3FawDijkFQfxxp3bPP4J2Yl9v-m8TOe_6a7kS6pJFkqF5tWWYaRkOkEjuyNDnpbaj_JM5n6uMTYCVNX85M'
    ],
    vertical: 'Content Engineering',
  },
  {
    id: 'i2',
    code: 'VOD_OPTIMIZE_2024',
    title: 'Automated QC Remediation',
    description: 'AI-driven repair of synchronization issues in mezzanine files.',
    status: 'STRETCH',
    milestone: 'PENDING APPROVAL',
    assignees: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgm-DseF3Ht8ILAKxu2AFX6Uh5CJccH-KtQ99uq_BSZILEXyUxqrNio63p2B939frOZt0wqqhJ_4SSPgD6DNr35B0fN9Y2C2z6HckagGfbXvBt7ck1BmaaRAXkMLXg314Ww7HisUH2HfeM4AzeG6lVvA6XJktQfPWJkfr8Ni8Y9vURRYipdnVUwcm8ZWirtpDJ8PYjdU48uUZht7tC0VADF3xBtHVsrIrDVhRw7Cd1txvyZyyM5GC-nFlZ6Uf0AUCApmUMMaXHwg4'
    ],
    vertical: 'Content Engineering',
  },
];
